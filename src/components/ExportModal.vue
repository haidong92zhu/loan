<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  show: Boolean
});

const emit = defineEmits(['close', 'export']);

const exportTypes = [
  { id: 'equalPrincipalAndInterest', label: '等额本息' },
  { id: 'equalPrincipal', label: '等额本金' }
];

const handleExport = (type) => {
  emit('export', type);
  emit('close');
};
</script>

<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal-content">
      <h3>选择导出方式</h3>
      <div class="export-options">
        <button 
          v-for="type in exportTypes" 
          :key="type.id"
          class="export-option-btn"
          @click="handleExport(type.id)"
        >
          {{ type.label }}
        </button>
      </div>
      <button class="close-btn" @click="$emit('close')">取消</button>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  min-width: 300px;
  text-align: center;
  margin: 0 1rem; /* 添加左右边距 */
  max-width: 90%; /* 限制最大宽度 */
}

.export-options {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 1.5rem 0;
}

/* 移动端适配 */
@media screen and (max-width: 480px) {
  .modal-content {
    padding: 1.5rem;
    min-width: auto;
  }

  .export-options {
    flex-direction: column; /* 按钮垂直排列 */
    gap: 0.8rem;
  }

  .export-option-btn {
    width: 100%; /* 按钮占满宽度 */
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }

  .close-btn {
    width: 100%;
    margin-top: 0.5rem;
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
}

.export-option-btn {
  padding: 0.8rem 1.5rem;
  background-color: #1e88e5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.export-option-btn:hover {
  background-color: #1565c0;
}

.close-btn {
  padding: 0.5rem 1rem;
  background-color: #9e9e9e;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.close-btn:hover {
  background-color: #757575;
}
</style>