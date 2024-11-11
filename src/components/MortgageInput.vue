<script setup>
defineProps({
  totalAmount: Number,
  lprRate: Number,
  bpRate: Number,
  years: Number
})

const emit = defineEmits(['update:totalAmount', 'update:lprRate', 'update:bpRate', 'update:years', 'calculate'])
</script>

<template>
  <div class="mortgage-input">
    <h2>房贷计算器</h2>
    <div class="input-group">
      <label>贷款总额 (万元):</label>
      <input 
        :value="totalAmount"
        @input="e => emit('update:totalAmount', e.target.value)"
        type="number" 
        class="input" 
        placeholder="请输入贷款金额(万元)"
      />
    </div>
    <div class="input-group">
      <label>LPR利率 (%):</label>
      <input 
        :value="lprRate"
        @input="e => emit('update:lprRate', e.target.value)"
        type="number" 
        step="0.01"
        class="input" 
        placeholder="请输入LPR利率"
      />
    </div>

    <div class="input-group">
      <label>基点 BP:</label>
      <input 
        :value="bpRate"
        @input="e => emit('update:bpRate', e.target.value)"
        type="number" 
        class="input" 
        placeholder="请输入BP值"
      />
    </div>

    <div class="input-group">
      <label>贷款年限:</label>
      <input 
        :value="years"
        @input="e => emit('update:years', e.target.value)"
        type="number" 
        class="input" 
        placeholder="请输入贷款年限"
      />
    </div>

    <button 
      class="button" 
      @click="emit('calculate')"
    >
      计算
    </button>
  </div>
</template>

<style scoped>
.mortgage-input {
  margin-bottom: 30px;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.button {
  background-color: #4CAF50;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px 0;
  font-size: 16px;
}

.button:hover {
  background-color: #45a049;
}
</style>
