<template>
  <div>
    <button
      type="button"
      :disabled="min >= value"
      @click="handleInput(value-1)"
    >
      -
    </button>
    <input 
      style="width: 100px"
      type="number" 
      step="1"
      :maxlength="maxlength"
      :value="value"
      :min="min"
      :max="max"
      @input="handleInput(Number($event.target.value))"
      @mousewheel="() => {}"
    > 
    <button
      type="button"
      :disabled="max <= value"
      @click="handleInput(value+1)"
    >
      +
    </button>
  </div>
</template>

<script>
import {reactive, computed} from 'vue'; 

  export default {
    name: 'Widget',
    emits: ['input'],
    props: {
      value: Number,
      min: Number,
      max: Number,
    },
    setup(props, {emit}) {
      const {
        min,
        max,
      } = reactive(props);

      const handleInput = (value) => {
        if (value >= max) {
          emit('input', max);  
        } else if (value <= min) {
          emit('input', min);
        } else {
          emit('input', value);
        }
      };

      const maxlength = computed(() => String(max).length);

      return {
        ...props,
        handleInput,
        maxlength,
      };
    }
  }
</script>