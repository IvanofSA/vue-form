<template>
	<div class="field">
		<base-label :type="'radio'" :data="data"></base-label>
		<button class="field__btn" @click="onRemove" v-if="showbtn">Удалить</button>
	</div>
</template>

<script>
	import baseLabel from './baseLabel'

	export default {
		name: "label",
		props: ['data', 'index', 'showbtn'],
		components: {
			baseLabel
		},
		data() {
			return {}
		},
		methods: {
			onRemove() {
				this.$emit('removeAddress', {index: this.index});
			}
		}
	}
</script>

<style scoped lang="scss">
	@import './../assets/css/_variebles.scss';

	.field {
		position: relative;
		margin-bottom: 10px;

		&.edit {
			background: $gray-light;
		}

		&__show {
			font-size: 14px;
			color: $gray;

			&.done {
				color: $black;
			}
		}

		&__msg {
			position: absolute;
			bottom: 0;
			font-size: 8px;
			color: red;
		}

		&__input {
			width: 50%;
			height: 30px;
			line-height: 30px;
			padding: 0 10px;
			background: $white;
			border: 1px solid $gray;
			color: $black;

			&.error {
				border: 1px solid red;
			}
		}

		&__btn {
			cursor: pointer;
			font-size: 12px;
			color: $gray;
			text-decoration: underline;

			&:hover, &:active {
				color: $hover-red;
			}
		}
	}

</style>