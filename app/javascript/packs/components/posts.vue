<template>
	<div>
		<ul>
			<li v-for="post in posts"><router-link :to="{name: 'post', params: {id: post.id}}">{{post.title}}</router-link></li>
		</ul>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		computed: {
			...mapGetters([
				'posts'
			])
		}
	}
</script>
