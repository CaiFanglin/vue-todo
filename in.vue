<template>
	<input type="text"
       class="add-input"
       autofocus="autofocus"
       placeholder="接下来要做什么?"
       @keyup.enter="addTodo"
    >
</template>

<script>
	let id = 1;
	export default {
		props: {
            
        },
		methods: {
			addTodo(e) {
				if (e.target.value.trim()) {
					this.$emit('add', e.target.value.trim());
					e.target.value = '';
				}
			}
		}
	}
</script>

<style>
	.add-input {
		display: inline-block;
		border: none;
		outline: none;
		width: 100%;
		height: 2em;
		font-size: 1em;
		box-sizing: border-box;
		padding: 1.5em 27px;
		border-bottom: 3px solid #f1f1f1;
	}
</style>