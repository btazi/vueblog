<template>
	<div>
		<h1> New Post</h1>
		<div if="formErrors.length > 0" style="background: red">
			<template v-for="(errors, input) in formErrors">
					<ul>
						<li v-for="error in errors">{{input}} {{error}}</li>
					</ul>
			</template>
		</div>
		<form >
			<label>Title</label>
			<input type="text" v-model="newPost.title">
			</input>
			<label>Content</label>
			<input type="text" v-model="newPost.content">
			</input>
			<button @click.prevent="submitNewPost(newPost)">Save</button>
		</form>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';

	export default {
		created(){
			this.clearFormErrors()
		},
		data: ()=>{
			return {
				newPost: {
					title: "",
					content: ""
				}
			}
		},
		methods: {
			...mapActions([
				'submitNewPost',
				'clearFormErrors'
			])
		},
		computed: {
			...mapGetters([
				'formErrors'
			])
		}
	}
</script>
