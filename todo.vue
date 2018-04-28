<template>
	<div class="todo">
		<TodoIn @add="addTodo"/>
		<TodoItems :todo="todo"
                  v-for="todo in filterTodos"
                  :key="todo.id"
                  @del="deleteTodo"
        />
		<TodoTip @clear="clearTodos"
				 :leftNum="leftNum"
				 :filter = "filter"
				 @changeFilter="changeFilter"
		/>
	</div>
</template>

<script>
	import TodoIn from './in.vue';
	import TodoItems from './items.vue';
	import TodoTip from './tip.vue';

	let id = 0;
	export default {
		data () {
			return {
				todos: JSON.parse(localStorage.getItem('todos')) || [],
				filter: '全部'
			}
		},
		components: {
			TodoIn,
			TodoItems,
			TodoTip
		},
		methods: {
			addTodo(val) {
				if(val) {
					this.todos.unshift({
						id: ++id,
						val: val,
						status: false
					});
				}
			},
			deleteTodo(id) {
				if (id) {
					this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1);
				}
			},
			clearTodos() {
				this.todos = [];
			},
			changeFilter(filter) {
				this.filter = filter;
			}
		},
		computed: {
			leftNum() {
				return this.todos.filter(todo => !todo.status).length;
			},
			filterTodos() {
				let status = false;
				switch (this.filter) {
					case '完成':
						status = false;
						break;
					case '待完成':
						status = true;
						break;
					case '全部':
					default:
						status = '';
						break;
				}
				localStorage.setItem('todos', JSON.stringify(this.todos));
				return this.filterTodos = this.todos.filter(todo => todo.status !== status);
			}
		}
	}
</script>

<style>
	.todo {
		width: 40%;
		border: 1px solid #f1f1f1;
		height: auto;
		margin-bottom: 1rem;
	}
</style>