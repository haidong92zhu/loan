<script setup>
import { ref } from 'vue';
import { calculateMortgage } from '../utils/MortgageCalculator';
import { exportToExcel } from '../utils/MortgageOutput';
import MortgageInput from './MortgageInput.vue';
import MortgageResult from './MortgageResult.vue';
import ExportModal from './ExportModal.vue';
import CitySelector from './CitySelector.vue';

const totalAmount = ref('')
const lprRate = ref('')
const bpRate = ref('')
const years = ref('')
const result = ref(null)
const showExportModal = ref(false)
const printDialog = ref();

const city = ref('');

const calculate = () => {
  result.value = calculateMortgage(
    Number(totalAmount.value),
    Number(lprRate.value),
    Number(bpRate.value),
    Number(years.value)
  )
}

const handleExportClick = () => {
  showExportModal.value = true;
}

const handleExport = (type) => {
  if (result.value) {
    exportToExcel(result.value, Number(totalAmount.value), type)
  }
}

</script>
<template>
  <div class="mortgage-calculator">
    <div class="mortgage-app">
      <header class="app-header">
        <h1>房贷计算器</h1>
      </header>

      <div class="content">
        <CitySelector v-model:city="city" v-model:lprRate="lprRate" v-model:bpRate="bpRate" />
        <MortgageInput v-model:totalAmount="totalAmount" v-model:lprRate="lprRate" v-model:bpRate="bpRate"
          v-model:years="years" @calculate="calculate" />

        <div class="export-btn-container" v-if="result">
          <button class="btn primary-btn" @click="showExportModal = true">
            导出还款计划
          </button>
        </div>

        <MortgageResult :result="result" :totalAmount="Number(totalAmount)" />

        <ExportModal :show="showExportModal" @close="showExportModal = false" @export="handleExport" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.mortgage-app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app-header {
  width: 100%;
  background: linear-gradient(135deg, #1e88e5, #1565c0);
  color: white;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.app-header h1 {
  margin: 0;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
}

.app-header p {
  margin: 0.5rem 0 0;
  font-size: clamp(1rem, 2vw, 1.2rem);
  opacity: 0.9;
}

.content {
  width: min(95%, 1600px);
  margin: 0 auto;
  padding: 2rem;
}

.btn {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  color: white;
}

.primary-btn {
  background-color: #1e88e5;
}

.primary-btn:hover {
  background-color: #1565c0;
}

.export-btn-container {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}

@media (max-width: 768px) {
  .content {
    width: 98%;
    padding: 1rem;
  }

  .app-header {
    padding: 1.5rem 1rem;
  }
}
</style>
