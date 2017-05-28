<template>
	<div v-if="typeof(post) != 'undefined'">
		<!-- <h1>{{post.title}}</h1> -->
		<!-- <p>{{post.content}}</p> -->
		<h1>{{post.title}}</h1>
		<p>{{post.content}}</p>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		computed: {
			...mapGetters([
				'post'
			])
		}
	}
</script>
