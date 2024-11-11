<script setup>
const props = defineProps({
  result: Object,
  totalAmount: Number
})

const formatAmount = (amount) => amount ? amount.toFixed(2) : '0.00'
</script>

<template>
  <div class="summary-card">
    <h3>等额本息还款总览</h3>
    <div class="summary-content">
      <p>贷款总额: {{ totalAmount }}万元</p>
      <p>总还款额: {{ formatAmount(result.equalPrincipalAndInterest.totalPayment / 10000) }}万元</p>
      <p>支付利息: {{ formatAmount((result.equalPrincipalAndInterest.totalPayment - totalAmount * 10000) / 10000) }}万元</p>
      <p>月供固定: {{ formatAmount(result.equalPrincipalAndInterest.firstMonthPayment) }}元</p>
    </div>
  </div>
</template>
