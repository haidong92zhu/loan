import * as XLSX from 'xlsx';
export function exportToExcel(result: any, totalAmount: number, type: string) {
  const wb = XLSX.utils.book_new();
  
  const data = type === 'equalPrincipalAndInterest' 
    ? result.equalPrincipalAndInterest.monthlyPayments
    : result.equalPrincipal.monthlyPayments;
    
  const paymentData = data.map((payment: any) => ({
    '月份': payment.month,
    '月供(元)': payment.payment.toFixed(2),
    '月供本金(元)': payment.principal.toFixed(2),
    '月供利息(元)': payment.interest.toFixed(2),
    '剩余本金(元)': payment.remainingPrincipal.toFixed(2),
    '累计已付利息(元)': payment.totalInterestPaid.toFixed(2)
  }));

  // Create worksheet and set column widths
  const ws = XLSX.utils.json_to_sheet(paymentData);
  ws['!cols'] = [
    { wch: 8 },    // 月份
    { wch: 15 },   // 月供
    { wch: 15 },   // 月供本金
    { wch: 15 },   // 月供利息
    { wch: 15 },   // 剩余本金
    { wch: 15 },   // 累计已付利息
  ];
  
  const paymentPlan = type === 'equalPrincipalAndInterest' 
    ? result.equalPrincipalAndInterest 
    : result.equalPrincipal;
    
  const summary = [
    ['贷款总额(元)', totalAmount * 10000],
    ['总还款额(元)', paymentPlan.totalPayment.toFixed(2)],
    ['总利息(元)', paymentPlan.totalInterest.toFixed(2)],
    ['首月还款额(元)', paymentData[0]['月供(元)']],
    ['末月还款额(元)', paymentData[paymentData.length - 1]['月供(元)']],
  ];

  const summaryWs = XLSX.utils.aoa_to_sheet(summary);
  // Set summary sheet column widths
  summaryWs['!cols'] = [
    { wch: 15 },   // 标题
    { wch: 20 },   // 数值
  ];
  
  const planType = type === 'equalPrincipalAndInterest' ? '等额本息' : '等额本金';
  XLSX.utils.book_append_sheet(wb, summaryWs, '贷款概要');
  XLSX.utils.book_append_sheet(wb, ws, '还款计划');
  
  XLSX.writeFile(wb, `房贷还款计划_${planType}_${new Date().toLocaleDateString()}.xlsx`);
}
