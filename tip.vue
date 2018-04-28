<template>
	<div class="tip">
		<span class="left line_num1">{{leftNum}}条未完成</span>
		<div class="stateItem">
			<span v-for="state in states" :key="state" :class="['line_num1, state', filter === state ? 'active' : '']" @click="changeFilter">{{state}}</span>
		</div>
		<span @click="clearTodos" class="clear line_num1">清空所有任务</span>
	</div>
</template>

<script>
	export default {
		props: {
			leftNum: {
				type: Number,
				require: true
			},
			filter: {
				type: String,
				require: true
			}
		},
		data() {
			return {
				states: ['全部', '完成', '待完成']
			}
		},
		methods: {
			changeFilter(e) {
				if (e.target.innerHTML.trim()) {
					this.$emit('changeFilter', e.target.innerHTML.trim());
				}
			},
			clearTodos() {
				this.$emit('clear');
			}
		}
	}
</script>

<style>
	.tip {
		display: flex;
    	display: -webkit-flex;
    	align-items: center;
    	justify-content: space-between;
		border: none;
		outline: none;
		width: 100%;
		font-size: .3em;
		box-sizing: border-box;
		padding: .5em 7px;
		background-color: #fff;
		color: #000;
		vertical-align: middle;
	}
	.tip .stateItem {
		display: flex;
    	display: -webkit-flex;
    	align-items: center;
    	justify-content: space-between;
		text-align: center;
		width: 50%;
	}
	.tip .state {
		margin-left: 10px;
		width: 25%;
		display: inline-block;
	}
	.tip .active {
		border: 1px solid red;
		border-radius: 50%;

	}
	.tip .left {
		width: 15%;
	}
	.tip .clear {
		width: 20%;
	}
	.line_num1 {
	    overflow: hidden;/*溢出隐藏*/
        text-overflow: ellipsis;/*文本溢出省略号*/
        white-space: nowrap;/*不换行*/
    }
</style>