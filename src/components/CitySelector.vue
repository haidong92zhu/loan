<script setup>
import { ref } from 'vue';
import { cityConfigs } from '../config/loanConfig';

const props = defineProps({
    modelValue: String,
  lprRate: Number,
  bpRate: Number,
});

const emit = defineEmits(['update:modelValue', 'citySelected','update:totalAmount', 'update:lprRate', 'update:bpRate']);
const selectedCity = ref(props.modelValue);

const handleCityChange = () => {
    const config = cityConfigs.find(item => item.city === selectedCity.value);
    if (config) {
        emit('update:modelValue', selectedCity.value);
        emit('citySelected', config);
        emit('update:lprRate', config.lpr);
        emit('update:bpRate', config.bp);
    }
};
</script>

<template>
    <div class="city-selector">
        <label class="input-label">城市</label>
        <select v-model="selectedCity" class="select-input" @change="handleCityChange">
            <option value="">请选择</option>
            <option v-for="config in cityConfigs" :key="config.city" :value="config.city">
                {{ config.city }}
            </option>
        </select>
    </div>
</template>


<style scoped>
.city-selector {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    justify-content: center;
    width: 150px;
}

.input-label {
    white-space: nowrap;
    font-weight: 500;
    font-size: 0.9rem;
}

.select-input {
    width: 100px;
    padding: 0.3rem 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 0.9rem;
    background-color: white;
    /* text-align: right; */
}

.select-input:focus {
    outline: none;
    border-color: #1e88e5;
}
</style>