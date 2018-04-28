<template>
	<div id="todo">
		<TodoHeader/>
		<TodoTodo/>
		<TodoFooter/>
	</div>
</template>

<script>
	import TodoHeader from './header.vue';
	import TodoTodo from './todo.vue';
	import TodoFooter from './footer.vue';

	export default {
        components: {
            TodoHeader,
            TodoTodo,
            TodoFooter
        }
    }
</script>

<style>
	#todo {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-top: 5rem;
	}
</style>