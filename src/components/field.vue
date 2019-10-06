<template>
	<div class="field" :class="classes">
		<span :class="classes" class="field__show" v-if="!changing">{{ label}}</span>
		<input class="field__input"
			   autocomplete="off"
			   :class="classes"
			   :type="data.type"
			   :name="data.name"
			   :value="message"
			   v-mask="data.mask"
			   v-if="changing"
			   v-model.trim="message">
		<span class="field__msg" v-if="error">{{errorMsg}}</span>
		<button class="field__btn" @click="change(data.validate)" ref="btn" data-id="change">Изменить</button>
	</div>
</template>

<script>
	export default {
		name: "field",
		props: ['data'],
		data() {
			return {
				error: false,
				errorMsg: '',
				changing: false,
				label: this.data.placeholder,
				message: '',
				saved: false,
				edit: false,
				rules: {
					date: /(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20)\d\d)/,
					email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
					hasRusLettersOnly: /^[А-Яа-я]+$/,
					hasSpecials: /^[А-Яа-я0-9\-_./\s]*$/,
					hasLettersOnly: /^[a-zA-ZА-Яа-я\-_./\s]*$/,
					phone: /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/
				}
			}
		},
		methods: {
			change(type) {
				let id = this.$refs.btn.getAttribute('data-id'),
					btn = this.$refs.btn;

				if (id === 'change') {
					btn.setAttribute('data-id', 'save');
					btn.textContent = 'Сохранить';
					this.saved = false;
					this.edit = true;
					this.changing = !this.changing;

				} else {
					if (this.validate(this.message, type)) {
						btn.setAttribute('data-id', 'change');
						btn.textContent = 'Изменить';
						if (type === 'password') {
							let count = '';
							for (let i = 0; i < this.message.length; i++) {
								count = count + '*';
							}
							this.label = `Пароль[${count}]`;
						} else {
							this.label = this.message;
						}

						this.saved = true;
						this.changing = !this.changing;
					}
					/*тут может быть отправка данных на сервер, если мы меняем каждый парамметр по отдельности*/
				}
			},
			validate(val, type) {
				let fieldValids = true;

				this.error = false;
				this.errorMsg = false;

				if (!val.length) {
					this.error = true;
					this.errorMsg = 'Поле не должно быть пустым';
					return false;
				}

				switch (type) {
					case 'text':
						if (!this.rules['hasSpecials'].test(val)) {
							this.error = true;
							this.errorMsg = 'Недопустимые символы. Пожалуйста, введите имя по-русски';
							fieldValids = false;
						} else {
							fieldValids = true;
						}
						break;
					case 'date':
						if (!this.rules['date'].test(val)) {
							this.error = true;
							this.errorMsg = 'Пожалуйста, проверьте правильность заполнения';
							fieldValids = false;
						} else {
							fieldValids = true;
						}
						break;
					case 'phone':
						if (!this.rules['phone'].test(val)) {
							this.error = true;
							this.errorMsg = 'Пожалуйста, проверьте правильность заполнения';
							fieldValids = false;

						} else {
							fieldValids = true;
						}

						break;
					case 'email':
						if (!this.rules['email'].test(val)) {
							this.error = true;
							this.errorMsg = 'Пожалуйста, проверьте правильность заполнения';
							fieldValids = false;

						} else {
							fieldValids = true;
						}

						break;
				}
				return fieldValids;
			}
		},
		computed: {
			classes: function () {
				return {
					'done': this.saved,
					'error': this.error,
					'edit': this.edit,
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@import './../assets/css/_variebles.scss';

	.field {
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