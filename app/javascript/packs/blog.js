/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> and
// <%= stylesheet_pack_tag 'hello_vue' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/app.vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js'
import { store } from './store/store.js'
import BootstrapVue from 'bootstrap-vue'
import lodash from 'lodash'

Vue.use(VueRouter)

const router = new VueRouter({
	routes
})

sync(store, router)

document.addEventListener("turbolinks:load", function(){
	const app =	new Vue({
		el: "#app",
		render: h => h(App),
		router,
		store
	})
})
