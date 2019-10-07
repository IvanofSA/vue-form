<template>
	<div class="field" :class="classes">
		<span :class="classes" class="field__show" v-if="!changing">{{ label}}</span>
		<base-input :data="inputInfo" v-if="changing" v-model="value"></base-input>
		<button class="field__btn" @click="onChange" v-if="!changing">Изменить</button>
		<button class="field__btn" @click="onSave()" v-else>Сохранить</button>
	</div>
</template>

<script>
	import BaseInput from './baseInput'

	export default {
		name: "field",
		props: ['data'],
		components: {
			BaseInput
		},
		data() {
			return {
				value: '',
				changing: false,
				label: this.data.placeholder,
				saved: false,
				edit: false,
				inputInfo: this.data
			}
		},
		methods: {
			onSave() {
				if(this.value.length) {

					if(this.inputInfo.type === 'password') {
						let count = '';
						for( let i = 0; i < this.value.length; i++ ) {
							count = count + '*';
						}
						this.label = `Пароль[${count}]`;
					} else {
						this.label = this.value;
						this.inputInfo.placeholder = this.value;
					}

					this.changing = !this.changing;
					this.saved = true;
				}
			},

			onChange() {
				this.saved = false;
				this.edit = true;
				this.changing = !this.changing;
			}
		},
		computed: {
			classes() {
				return {
					'done': this.saved,
					'edit': this.edit,
				}
			}
		}
	}
</script>

<style lang="scss">
	@import './../assets/css/_variebles.scss';

	.field {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 18px;

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
			line-height: 28px;
			padding: 0 10px;
			background: $white;
			border: 1px solid $gray;
			color: $black;

			&.error {
				border: 1px solid $hover-red;
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