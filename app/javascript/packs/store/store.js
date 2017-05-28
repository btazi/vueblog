import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import { router } from '../blog.js'

Vue.use(Vuex)
Vue.use(VueResource)

Vue.http.options.root = "http://localhost:3000/"
Vue.http.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

var post = Vue.resource('posts/{id}');
var posts = Vue.resource('posts');

export const store = new Vuex.Store({
	state: {
		posts: [
		],
		formErrors: {}
	},
	getters: {
		posts: state=> {
			return state.posts
		},
		post: state=> {
			return _.find(state.posts, {id: state.route.params.id})
		},
		formErrors: state=> {
			return state.formErrors
		}
	},
	mutations: {
		createPost: (state, payload) => {
			state.posts.push(payload);
		},
		getPosts: (state, payload) => {
			state.posts = payload
		},
		deletePost: (state, payload) => {
			var post = _.find(state.posts, {id: payload})
			var postIndex = _.indexOf(state.posts, post)
			state.posts.splice(postIndex, 1)
		},
		addFormErrors: (state, payload)=> {
			state.formErrors = payload
		},
		clearFormErrors: (state) =>{
			state.formErrors = {}
		}
	},
	actions: {
		submitNewPost: ({commit}, payload) => {
			post.save({post: payload}).then(response => {
				commit("createPost", response.body)
				router.push({name: "posts"})}, response =>{
					commit("addFormErrors", response.body)
			})
		},
		getPosts: ({commit}) => {
			posts.get().then(response=>{
				commit("getPosts", response.body)
			}), response =>{
				alert("error")
			}
		},
		deletePost: ({commit}, payload) =>{
			post.delete({id: payload.id}).then(response=>{
				commit("deletePost", payload.id)
			}, response=>{
				alert("error")
			})
		},
		clearFormErrors: ({commit}) =>{
			commit("clearFormErrors")
		}
	}
})
