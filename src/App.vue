<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <widget 
    :min="0"
    :max="50"
    :value="value"
    @input="handleChange"
  />
</template>

<script>
import Widget from './components/widget.vue'
import { useStore } from 'vuex'
import { toRefs } from 'vue'

export default {
  name: 'App',
  components: {
    Widget,
  },
  setup() {
    const {state, dispatch} = useStore();
    const {count} = toRefs(state);

    const handleChange = (value) => dispatch('change', value);

    return {
      value: count,
      handleChange,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
