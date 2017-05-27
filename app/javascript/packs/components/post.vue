<template>
	<div>
		<!-- <h1>{{post.title}}</h1> -->
		<!-- <p>{{post.content}}</p> -->
		<p>{{post.title}}</p>
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
