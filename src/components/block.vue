<template>
	<div class="block">
		<span class="block__title">{{data.title}}</span>
		<ul class="block__list">
			<Field class="block__item" v-for="(item, i) in data.list" :key="i" :data="item"></Field>
		</ul>
	</div>
</template>

<script>
	import Field from './field'

	export default {
		name: "block",
		props: ['data'],
		components: {
			Field
		},
		data() {
			return {}
		}
	}
</script>

<style scoped lang="scss">
	@import './../assets/css/_variebles.scss';

	.block {
		&__title {
			display: block;
			margin-bottom: 20px;
			font-size: 18px;
		}

		&__list {
			display: flex;
			width: 100%;
			flex-flow: column wrap;
			border: 1px solid $gray;
		}

		&__item {
			position: relative;
			display: flex;
			flex-flow: row wrap;
			align-items: center;
			justify-content: space-between;
			min-height: 50px;
			padding: 0 18px;
			border-bottom: 1px solid $gray;

			&:last-child {
				border-bottom: 0;
			}

			&:hover {
				background: $gray-light;
			}
		}
	}
</style>