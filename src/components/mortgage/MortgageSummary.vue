<script setup lang="ts">
const props = defineProps({
  result: {
    type: Object,
    required: true
  },
  totalAmount: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true,
    validator: (value: string) => ['equalPrincipal', 'equalPrincipalAndInterest'].includes(value)
  }
})

const getTitle = () => {
  return props.type === 'equalPrincipal' ? '等额本金还款总览' : '等额本息还款总览'
}

const getSummaryData = () => {
  const data = props.type === 'equalPrincipal' 
    ? props.result.equalPrincipal 
    : props.result.equalPrincipalAndInterest

  return {
    totalPayment: data.totalPayment.toFixed(2),
    totalInterest: data.totalInterest.toFixed(2),
    firstMonthPayment: data.firstMonthPayment.toFixed(2),
    lastMonthPayment: data.lastMonthPayment.toFixed(2)
  }
}
</script>

<template>
  <div class="summary-card">
    <h3>{{ getTitle() }}</h3>
    <div class="summary-content">
      <p>贷款总额：{{ (totalAmount * 10000).toFixed(2) }}元</p>
      <p>还款总额：{{ getSummaryData().totalPayment }}元</p>
      <p>支付利息：{{ getSummaryData().totalInterest }}元</p>
      <p>首月还款：{{ getSummaryData().firstMonthPayment }}元</p>
      <p>末月还款：{{ getSummaryData().lastMonthPayment }}元</p>
    </div>
  </div>
</template>

<style scoped>
.summary-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.summary-card h3 {
  color: #1e88e5;
  margin: 0 0 1rem;
  text-align: center;
}

.summary-content p {
  margin: 0.5rem 0;
  font-size: 1.1rem;
  padding: 8px;
  border-bottom: 1px solid #eee;
}

.summary-content p:last-child {
  border-bottom: none;
}
</style>
