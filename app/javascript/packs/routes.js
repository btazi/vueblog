import posts from './components/posts.vue'
import post from './components/post.vue'
import newPost from './components/newPost.vue'

export const routes = [
	{path: '/', component: posts, name: 'posts'},
	{path: '/:id', component: post, name: 'post'},
	{path: '/new', component: newPost, name: 'newPost'}
]
