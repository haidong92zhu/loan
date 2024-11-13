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
    width: 50%;
    min-width: 280px;
    max-width: 500px;
    background: white;
    border-radius: 12px;
    border: 1px solid #e0e0e0;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    margin: 0 auto;
    box-sizing: border-box;
  }

  .input-group {
    margin-bottom: 16px;
  }

  .input-group label {
    display: block;
    margin-bottom: 8px;
    color: #333;
    font-weight: 500;
  }

  .input-group input {
    width: calc(100% - 24px);
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
    box-sizing: border-box;
  }

  .input-group input:focus {
    outline: none;
    border-color: #1e88e5;
    box-shadow: 0 0 0 2px rgba(30, 136, 229, 0.1);
  }

  button {
    width: 100%;
    padding: 10px;
    background: #1e88e5;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
  }

  button:hover {
    background: #1976d2;
  }

  @media (max-width: 768px) {
    .mortgage-input {
      width: 90%;
      min-width: auto;
    }
  }
  </style>
