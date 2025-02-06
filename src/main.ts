import {createApp} from 'vue';
import {createPinia} from 'pinia';
import App from './App.vue';
import router from './router';
import {MotionPlugin} from '@vueuse/motion';

import './styles/reset.css';
import './styles/index.css';
import './styles/global.scss';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(MotionPlugin);
app.mount('#app');
