<template>
	<div class="add">
		<div class="add__wrap">
			<span class="add__title">Добавить адресс</span>
			<div class="add__row">
				<div class="add__wrap">
					<input type="text" :class="classes" class="add__input" name="zip" v-model="zip"
						   placeholder="Индекс">
					<div class="add__msg">{{errorMsg}}</div>
				</div>
				<custom-select v-model="county" :options="optionsCountry"></custom-select>
				<custom-select v-model="city" :options="optionsCity"></custom-select>
			</div>
			<div class="add__row">
				<div class="add__wrap">
					<input type="text" :class="classes" class="add__input add__input_full" name="address"
						   v-model="address" placeholder="Адрес">
					<div class="add__msg">{{errorMsg}}</div>
				</div>
			</div>
		</div>

		<div class="add__btn" @click="add">Добавить адрес</div>
	</div>
</template>

<script>
	import CustomSelect from './select'

	export default {
		name: "add",
		components: {
			CustomSelect
		},
		data() {
			return {
				county: null,
				city: null,
				zip: null,
				address: null,
				optionsCity: [
					{
						name: "Spb",
						code: "Spb",
					},
					{
						name: "Moscow",
						code: "Moscow"
					}
				],
				optionsCountry: [
					{
						name: "Argentina",
						code: "AR",
					},
					{
						name: "United States of America",
						code: "US"
					},
					{
						name: "Germany",
						code: "DE"
					},
					{
						name: "China",
						code: "CN"
					}
				],
				addressInfo: {
					placeholder: 'Адрес',
					name: 'address',
					type: 'text',
					validate: 'text',
					mask: ''
				},
				zipInfo: {
					placeholder: 'Индекс',
					name: 'zip',
					type: 'text',
					validate: 'text',
					mask: ''
				}
			}
		},
		methods: {
			add() {
				// this.$emit('valid', {
				// 	status: this.valid
				// });
			}
		}
	}
</script>

<style scoped lang="scss">
	@import './../assets/css/_variebles.scss';

	.add {
		padding: 0 18px;

		&__title {
			display: block;
			margin-bottom: 17px;
			text-transform: uppercase;
			font-size: 14px;
			font-family: 'Open Sans', sans-serif;
			font-weight: 700;
		}

		&__wrap {
			margin-bottom: 20px;
		}

		&__row {
			display: flex;
			flex-flow: row wrap;
			align-items: flex-start;
			justify-content: space-between;
			margin-bottom: 10px;

		}


		&__input {
			width: 175px;
			height: 30px;
			line-height: 28px;
			padding: 0 10px;
			border: 1px solid $gray;
			background: $white;

			&_full {
				width: 100%;
			}
		}

		&__btn {
			display: flex;
			position: relative;
			justify-content: center;
			cursor: pointer;
			align-items: center;
			margin-left: auto;
			margin-right: 0;
			width: 200px;
			height: 30px;
			margin-bottom: 29px;
			padding: 0 19px;
			background: $hover-red;
			color: $white;
			box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.2);
			transition: all 0.15s linear;

			&:active {
				box-shadow: inset 0 2px 3px 0 rgba(0, 0, 0, 0.2);
			}
		}
	}
</style>