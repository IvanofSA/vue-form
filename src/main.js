// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vSelect from 'vue-select'

const VueInputMask = require('vue-inputmask').default;
Vue.component('v-select', vSelect)

Vue.use(VueInputMask)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	components: {App},
	template: '<App/>'
})
