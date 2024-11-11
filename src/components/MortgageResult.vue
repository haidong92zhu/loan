<script setup>
import EqualPrincipalSummary from './mortgage/EqualPrincipalSummary.vue'
import EqualPrincipalInterestSummary from './mortgage/EqualPrincipalInterestSummary.vue'
import EqualPrincipalMonthly from './mortgage/EqualPrincipalMonthly.vue'
import EqualPrincipalInterestMonthly from './mortgage/EqualPrincipalInterestMonthly.vue'

defineProps({
  result: Object,
  totalAmount: Number
})
</script>

<template>
  <div v-if="result" class="result">
    <div class="summary-comparison">
      <EqualPrincipalInterestSummary :result="result" :totalAmount="totalAmount" />
      <EqualPrincipalSummary :result="result" :totalAmount="totalAmount" />
    </div>
    <div class="comparison-tables">
      <EqualPrincipalInterestMonthly :result="result" />
      <EqualPrincipalMonthly :result="result" />
    </div>
  </div>
</template>
<style scoped>
.result {
  width: 100%;
}

.summary-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

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
}

.comparison-tables {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  gap: 1.5rem;
}

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
}

table {
  width: 100%;
  border-collapse: collapse;
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
}

td {
  padding: 10px 8px;
  border-top: 1px solid #eee;
  text-align: right;
}

tr:hover {
  background-color: #f8f9fa;
}

@media (max-width: 768px) {
  .summary-comparison,
  .comparison-tables {
    grid-template-columns: 1fr;
  }
}
</style>
