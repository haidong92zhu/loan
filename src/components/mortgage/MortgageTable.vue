<script setup lang="ts">
const props = defineProps({
  result: {
    type: Object,
    required: true
  },
  type: {
    type: String,
    required: true,
    validator: (value: string) => ['equalPrincipal', 'equalPrincipalAndInterest'].includes(value)
  }
})

const getTitle = () => {
  return props.type === 'equalPrincipal' ? '等额本金还款表' : '等额本息还款表'
}

const getPayments = () => {
  return props.type === 'equalPrincipal' 
    ? props.result.equalPrincipal.monthlyPayments 
    : props.result.equalPrincipalAndInterest.monthlyPayments
}
</script>

<template>
  <div class="table-section">
    <h3>{{ getTitle() }}</h3>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>期数</th>
            <th>月供(元)</th>
            <th>本金(元)</th>
            <th>利息(元)</th>
            <th>剩余本金(元)</th>
            <th>累计已还利息(元)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="payment in getPayments()" :key="payment.month">
            <td>{{ payment.month }}</td>
            <td>{{ payment.payment.toFixed(2) }}</td>
            <td>{{ payment.principal.toFixed(2) }}</td>
            <td>{{ payment.interest.toFixed(2) }}</td>
            <td>{{ payment.remainingPrincipal.toFixed(2) }}</td>
            <td>{{ payment.totalInterestPaid.toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  <style scoped>
  .table-section {
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }

  .table-section h3 {
    margin: 0 0 1rem;
    color: #1e88e5;
    text-align: center;
  }

  .table-container {
    max-height: 600px;
    overflow-y: auto;
    border: 1px solid #eee;
    border-radius: 4px;
    position: relative;
  }

  /* Modern scrollbar styling */
  .table-container::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  .table-container::-webkit-scrollbar-track {
    background: transparent;
  }

  .table-container::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    transition: background 0.2s ease-in-out;
  }

  .table-container::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  .table-container::-webkit-scrollbar-corner {
    background: transparent;
  }

  /* Firefox */
  .table-container {
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #e0e0e0;
  }

  th, td {
    border: 1px solid #e0e0e0;
  }

  th {
    position: sticky;
    top: 0;
    background: #f8f9fa;
    z-index: 1;
    padding: 12px 8px;
    font-weight: 600;
    color: #2c3e50;
    text-align: center;
    border-bottom: 2px solid #e0e0e0;
  }

  td {
    padding: 10px 8px;
    text-align: right;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #f0f7ff;
  }
  </style>
