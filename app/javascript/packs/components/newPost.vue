<template>
	<div>
		<h1> New Post</h1>
		<form >
			<label>Title</label>
			<input type="text" v-model="newPost.title">
			</input>
			<label>Content</label>
			<input type="text" v-model="newPost.content">
			</input>
			<button @click.prevent="submitPost(newPost)">Save</button>
		</form>
	</div>
</template>

<script>
	import {mapActions} from 'vuex';

	export default {
		data: ()=>{
			return {
				newPost: {
					title: "",
					content: ""
				}
			}
		},
		methods: {
			submitPost(newPost){
				this.$store.dispatch("submitNewPost", newPost)
			}
		}
	}
</script>
