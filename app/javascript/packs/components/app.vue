<template>
	<div>
		<router-link :to="{name: 'newPost'}">new</router-link>
		<router-link :to="{name: 'posts'}">home</router-link>
		<router-link :to="{name: 'post', params: {id: 4}}">post 4</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
	}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
