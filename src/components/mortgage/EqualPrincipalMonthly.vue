<script setup>
const props = defineProps({
  result: Object
})

const formatAmount = (amount) => amount ? amount.toFixed(2) : '0.00'
</script>

<template>
  <div class="table-section">
    <h3>等额本金月供明细</h3>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>期数</th>
            <th>月供金额</th>
            <th>本金部分</th>
            <th>利息部分</th>
            <th>已还利息</th>
            <th>剩余本金</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="payment in result.equalPrincipal.monthlyPayments" :key="payment.month">
            <td>{{ payment.month }}</td>
            <td>{{ formatAmount(payment.payment) }}元</td>
            <td>{{ formatAmount(payment.principal) }}元</td>
            <td>{{ formatAmount(payment.interest) }}元</td>
            <td>{{ formatAmount(payment.totalInterestPaid) }}元</td>
            <td>{{ formatAmount(payment.remainingPrincipal) }}元</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
