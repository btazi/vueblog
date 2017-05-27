import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		posts: [
			{id: 1, title: "title1", content: "content1"},
			{id: 2, title: "title2", content: "content2"},
			{id: 3, title: "title3", content: "content3"}
		]
	},
	getters: {
		posts: state=> {
			return state.posts
		},
		post: state=> {
			return _.find(state.posts, {id: state.route.params.id})
		}
	}
})
