<template>
	<input class="field__input"
		   autocomplete="off"
		   :class="isError"
		   :placeholder="data.placeholder"
		   :type="data.type"
		   :name="data.name"
		   :value="msg"
		   v-mask="data.mask"
		   @input="isValidate"
		   v-model.trim="msg">
</template>

<script>
	export default {
		name: "baseInput",
		props: ['data', 'value'],
		data() {
			return {
				error: false,

				msg: this.value
			}
		},
		computed: {
			isError() {
				return {'error': this.error}
			}
		},
		methods: {
			isValidate() {
				let validate = false;

				if(!this.msg.length) {
					this.error = true;
					return false;
				}
				if(this.msg.length && this.data.pattern != null && !this.data.pattern.test(this.msg)) {
					this.error = true;
					validate = false;
				} else {
					this.error = false;
					validate = true;
				}
			}
		},
		watch: {
			value () {
				this.msg = this.value
			},
			msg () {
				this.$emit('input', this.msg)
			}
		}
	}
</script>

<style scoped>

</style>