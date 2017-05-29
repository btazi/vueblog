<template>
	<div>
		<h1>List of Posts</h1>
		<ul v-if='posts.length >= 0'>
			<li v-for="post in posts">
				<router-link :to="{name: 'post', params: {id: post.id}}">{{post.title}}</router-link>
				<button @click="deletePost(post)">Supprimer</button>
			</li>
		</ul>
		<h3 v-if="posts.length == 0">There is no post<router-link :to="{name: 'newPost'}"> add a new one?</router-link></h3>
		<button @click="signIn" v-if="!signedIn">sign in</button>
		<button @click="signOut" v-if="signedIn">sign out</button>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		created(){
			this.getPosts()
		},
		computed: {
			...mapGetters([
				'posts',
				'signedIn'
			])
		},
		methods: {
			...mapActions([
				'getPosts',
				'deletePost',
				'signIn',
				'signOut'
			])
		}
	}
</script>
