<template>
	<div class="footer">
		<span>Power by {{author}}</span>
		<a :href="github">点击去Github</a>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				author: 'CFL',
				github: 'https://github.com/CaiFanglin/vue-todo'
			}
		}
	}
</script>

<style>
	.footer {
		font-size: 1em;
	}
	.footer a {
		color: #239090;
	}
</style>