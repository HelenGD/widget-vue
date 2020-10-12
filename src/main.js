import { createApp } from 'vue';
import { createStore } from 'vuex';
import { store } from './store';
import App from './App.vue';

const vuexStore = createStore(store);

const app = createApp(App);
app.use(vuexStore);

app.mount('#app');
