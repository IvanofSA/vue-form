<template>
	<input class="field__input"
		   autocomplete="off"
		   :class="isError"
		   :placeholder="data.placeholder"
		   :type="data.type"
		   :name="data.name"

		   v-mask="data.mask"
		   @input="isValidate"
		   v-model.trim="msg">
</template>

<script>
	export default {
		name: "baseInput",
		props: ['data'],
		data() {
			return {
				error: false,
				msg: ''
			}
		},
		mounted() {
			this.isValidate()
		},
		computed: {
			isError() {
				return {'error': this.error}
			}
		},
		methods: {
			isValidate() {
				let validate = false;

				console.log(this.msg);

				if(!this.msg.length) {
					this.error = true;
					return false;
				}

				console.log(this.error);

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