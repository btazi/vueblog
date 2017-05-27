import Posts from './components/posts.vue'
import Post from './components/post.vue'

export const routes = [
	{path: '/', component: Posts, name: 'posts'},
	{path: '/:id', component: Post, name: 'post'},
]
