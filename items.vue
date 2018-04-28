<template>
	<div class="item">
		<input type="checkbox" class="checkbox" v-model="todo.status">
		<span :class="['itemVal', todo.status ? 'completed' : '']">{{todo.val}}</span>
		<button class="destory" @click="delTodo">x</button>
	</div>
</template>

<script>
	

	export default {
		props: {
			todo: {
				type: Object,
				require: true
			}
		},
		methods: {
			delTodo() {
				this.$emit('del', this.todo.id);
			}
		}
	}
</script>

<style>
	.item {
		display: inline-block;
		border: none;
		outline: none;
		width: 100%;
		font-size: 1em;
		box-sizing: border-box;
		background-color: #fff;
		border-bottom: 1px solid rgba(200, 200, 200, 0.5);
		color: #000;
		position: relative;
		display: flex;
    	display: -webkit-flex;
    	align-items: center;
    	justify-content: space-between;
    	text-align: left;
    	padding: .3em 5px;
	}
	.item .completed {
		text-decoration: line-through;
		color: #f0f0f0;
	}
	.item .checkbox {
		display: inline-block;
		vertical-align: baseline;
		margin-right: .6em;
	}
	.item .itemVal {
		display: inline-block;
		word-wrap: break-word;
		width: 90%;
	}
	.item button.destory {
		border: none;
		outline: none;
		vertical-align: baseline;
		opacity: .5;
	}
	.item button.destory:hover {
		color: rgba(255, 0, 0, 1);
	}
</style>
