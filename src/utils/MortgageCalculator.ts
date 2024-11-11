interface MonthlyPayment {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  remainingPrincipal: number;
  totalInterestPaid: number;
}

interface PaymentPlan {
  totalPayment: number;
  totalInterest: number;
  firstMonthPayment: number;
  lastMonthPayment: number;
  monthlyPayments: MonthlyPayment[];
}

interface MortgageResult {
  equalPrincipalAndInterest: PaymentPlan;
  equalPrincipal: PaymentPlan;
  monthlyComparison: {
    month: number;
    equalPrincipalAndInterest: number;
    equalPrincipal: number;
    difference: number;
  }[];
}

export function calculateMortgage(
  totalAmount: number,  // Input in 万元
  lprRate: number,
  bpRate: number,
  years: number
): MortgageResult {
  // Convert 万元 to 元 for calculations
  const amountInYuan = totalAmount * 10000;
  const monthlyRate = (lprRate + bpRate / 100) / 12 / 100;
  const totalMonths = years * 12;
  const monthlyComparison = [];

  // 等额本息计算
  const equalPrincipalAndInterest: PaymentPlan = {
    totalPayment: 0,
    totalInterest: 0,
    firstMonthPayment: 0,
    lastMonthPayment: 0,
    monthlyPayments: []
  };

  const monthlyPayment = (amountInYuan * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
                        (Math.pow(1 + monthlyRate, totalMonths) - 1);
  
  let remainingPrincipal = amountInYuan;
  let totalInterestPaid = 0;

  for (let month = 1; month <= totalMonths; month++) {
    const interest = remainingPrincipal * monthlyRate;
    const principal = monthlyPayment - interest;
    remainingPrincipal -= principal;
    totalInterestPaid += interest;

    equalPrincipalAndInterest.monthlyPayments.push({
      month,
      payment: monthlyPayment,
      principal,
      interest,
      remainingPrincipal,
      totalInterestPaid
    });

    equalPrincipalAndInterest.totalPayment += monthlyPayment;
  }

  equalPrincipalAndInterest.totalInterest = equalPrincipalAndInterest.totalPayment - amountInYuan;
  equalPrincipalAndInterest.firstMonthPayment = monthlyPayment;
  equalPrincipalAndInterest.lastMonthPayment = monthlyPayment;

  // 等额本金计算
  const equalPrincipal: PaymentPlan = {
    totalPayment: 0,
    totalInterest: 0,
    firstMonthPayment: 0,
    lastMonthPayment: 0,
    monthlyPayments: []
  };

  const monthlyPrincipal = amountInYuan / totalMonths;
  remainingPrincipal = amountInYuan;
  totalInterestPaid = 0;

  for (let month = 1; month <= totalMonths; month++) {
    const interest = remainingPrincipal * monthlyRate;
    const payment = monthlyPrincipal + interest;
    remainingPrincipal -= monthlyPrincipal;
    totalInterestPaid += interest;

    equalPrincipal.monthlyPayments.push({
      month,
      payment,
      principal: monthlyPrincipal,
      interest,
      remainingPrincipal,
      totalInterestPaid
    });

    equalPrincipal.totalPayment += payment;
    
    // 记录每月两种方式的对比
    monthlyComparison.push({
      month,
      equalPrincipalAndInterest: monthlyPayment,
      equalPrincipal: payment,
      difference: monthlyPayment - payment
    });
  }

  equalPrincipal.totalInterest = equalPrincipal.totalPayment - amountInYuan;
  equalPrincipal.firstMonthPayment = equalPrincipal.monthlyPayments[0].payment;
  equalPrincipal.lastMonthPayment = equalPrincipal.monthlyPayments[totalMonths - 1].payment;

  return {
    equalPrincipalAndInterest,
    equalPrincipal,
    monthlyComparison
  };
}