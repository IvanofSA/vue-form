<template>
	<input class="field__input"
		   autocomplete="off"
		   :class="classes"
		   :type="data.type"
		   :name="data.name"
		   :value="message"
		   v-mask="data.mask"
		   v-if="changing"
		   v-model.trim="message">
</template>

<script>
	export default {
		name: "input",
		props: ['name', 'value', 'pattern'],
		data(){
			return {
				activated: this.value != ''
			};
		},
		computed: {
			valid(){
				return this.pattern.test(this.value);
			},
		},
		watch: {
			valid(){
				this.emitValid();
			}
		},
		methods: {
			onInput(e){
				this.activated = true;
				this.$emit('change', {
					value: e.target.value
				});
			},
			emitValid(){
				this.$emit('valid', {
					status: this.valid
				});
			}
		},
		created(){
			this.emitValid();
		}
	}
</script>

<style scoped>

</style>