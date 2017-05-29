import Vue from 'vue'
import Vuex from 'vuex' 
import VueResource from 'vue-resource'
import { router } from '../blog.js'
import Auth from 'j-toker'
import $ from 'jquery'
import jQuery from 'jquery'

window.$ = $
window.jQuery = jQuery
window.auth = Auth

Auth.configure({
	apiUrl: 'http://localhost:3000/'
});

$.ajaxSetup({
  beforeSend: function(xhr, settings) {
    auth.appendAuthHeaders(xhr, settings);
  }
});

Vue.use(Vuex)
Vue.use(VueResource)

var post = Vue.resource('posts/{id}');
var posts = Vue.resource('posts');
console.log(localStorage.signedIn)

export const store = new Vuex.Store({
	state: { posts: [ ],
		formErrors: {},
		signedIn: (localStorage.signedIn == "true")
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
		},
		signedIn: state=>{
			return state.signedIn
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
		},
		signIn: (state) =>{
			state.signedIn = true
		},
		signOut: (state) =>{
			state.signedIn = false
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
			$.ajax({
				url: "http://localhost:3000/posts/" + payload.id,
				data: {id: payload.id},
				type: 'DELETE',
				success: ()=> {
					commit("deletePost", payload.id)
				},
				error: ()=> {
					alert("error")
				}
			})
		},
		clearFormErrors: ({commit}) =>{
			commit("clearFormErrors")
		},
		signIn: ({commit}) =>{
			$.auth.emailSignIn({email: "tasibadr@gmail.com", password: "azsqazsq"}).then(()=>{
				localStorage.signedIn = true //refactor this later
				commit("signIn")
			}).fail(()=>{
				localStorage.signedIn = false
				commit("signOut")
			})
		},
		signOut: ({commit}) =>{
			$.auth.signOut().then(()=>{
				localStorage.signedIn = false //refactor this later
				commit("signOut")
			}).fail(()=>{
				localStorage.signedIn = true
				commit("signIn")
			})
		},
	}
})
