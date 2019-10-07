<template>
	<div class="add">
		<div class="add__wrap">
			<span class="add__title">Добавить адресс</span>
			<div class="add__row">
				<div class="add__field">
					<base-input :class="{'error': zipError}" :data="zipInput" v-model.trim="zip"
								class="add__input"></base-input>
				</div>
				<div class="add__field">
					<custom-select :class="{'error': countyError}" v-model="county" :defultOpt="'Страна'"
								   :options="optionsCountry"></custom-select>
				</div>
				<div class="add__field">
					<custom-select :class="{'error': cityError}" v-model="city" :defultOpt="'Город'"
								   :options="optionsCity"></custom-select>
				</div>

				<div class="add__field add__field_full">
					<base-input :class="{'error': addressError}" :data="addressInput" v-model.trim="address"
								class="add__input add__input_full"></base-input>
				</div>
			</div>

		</div>

		<div class="add__btn" @click="add">Добавить адрес</div>
	</div>
</template>

<script>
	import CustomSelect from './baseSelect'
	import BaseInput from './baseInput'

	export default {
		name: "add",
		components: {
			CustomSelect,
			BaseInput
		},
		data() {
			return {
				county: null,
				city: null,
				zip: null,
				address: null,
				countyError: false,
				cityError: false,
				zipError: false,
				addressError: false,
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
				zipInput: {
					placeholder: 'Индекс',
					name: 'zip',
					type: 'text',
					pattern: /^\d+$/,
					mask: null
				},
				addressInput: {
					placeholder: 'Адрес',
					name: 'address',
					type: 'text',
					pattern: null,
					mask: null
				},
			}
		},

		methods: {
			add() {
				let valid = false;
				if(this.zip === null) {
					this.zipError = true;
				}
				if(this.address === null) {
					this.addressError = true;
				}
				if(this.city === null) {
					this.cityError = true;
				}
				if(this.county === null) {
					this.countyError = true;
				}
				if(this.zip && this.address && this.city.name && this.county.name) {
					valid = true;
				}

				if(valid) {
					this.$emit('address', {address: `${this.zip} ${this.county.name}, ${this.city.name}, ${this.address}`});
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@import './../assets/css/_variebles.scss';

	.add {

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

		&__field {
			position: relative;
			margin-bottom: 10px;
			&_full {
				width: 100%;
			}
		}

		&__msg {
			position: absolute;
			bottom: 0;
			font-size: 8px;
			color: red;
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

			&.error {
				border: 1px solid $hover-red;
			}

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