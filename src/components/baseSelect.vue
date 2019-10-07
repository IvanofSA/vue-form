<template>
	<select class="select" @change="change">
		<option value="">{{defultOpt}}</option>
		<option v-for="(option, index) in options"
				:key="index" :value="option.code"
				:selected="selectedOption(option)">
			{{ option.name }}
		</option>
	</select>
</template>

<script>
	export default {
		props: ['options', 'value', 'defultOpt'],
		data() {
			return {
				selected: null
			}
		},
		methods: {
			selectedOption(option) {
				if (this.value) {
					return option.code === this.value.code;
				}
				return false;
			},
			change(e) {
				const selectedCode = e.target.value;
				const option = this.options.find((option) => {
					return selectedCode === option.code;
				});
				this.$emit("input", option);
			}
		}
	}
</script>

<style scoped lang="scss">
	@import './../assets/css/_variebles.scss';

	.select {
		width: 175px;
		height: 30px;
		line-height: 28px;
		padding: 0 10px;
		border: 1px solid $gray;
		background: $white;

		&.error {
			border: 1px solid $hover-red;
		}
	}
</style>