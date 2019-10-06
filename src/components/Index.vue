<template>
	<div class="container">
		<section class="settings">
			<h1 class="settings__title">Мои настройки</h1>
			<div class="settings__block block">
				<span class="block__title">Личные данные</span>
				<div class="block__list">
					<Field class="block__item" v-for="(item, i) in personal" :key="i" :data="item"></Field>
				</div>
			</div>
			<div class="settings__block block">
				<span class="block__title">Контактные данные</span>
				<div class="block__list">
					<Field class="block__item" v-for="(item, i) in contact" :key="i" :data="item"></Field>
				</div>
			</div>
			<div class="settings__block block">
				<span class="block__title">Адресная книга</span>
				<div class="block__list">
					<span class="block__title block__title_sup">Текущий адрес доставки</span>
					<Label v-for="(item, i) in addressList" :key="i" :data="item"></Label>

					<div class="block__btn">Добавить еще один адрес</div>
					<block-add  @add="onAddAdress(index, $event)" ></block-add>
				</div>
			</div>
		</section>
		<aside class="share"></aside>
	</div>

</template>

<script>
	import Field from './field'
	import Label from './label'
	import blockAdd from './add'

	export default {
		name: 'Index',
		components: {
			Field,
			Label,
			blockAdd
		},
		data() {
			return {
				county: null,
				city: null,
				addressList: [],
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
				personal: [
					{
						placeholder: 'Имя',
						name: 'name',
						type: 'text',
						validate: 'text',
						mask: ''
					},
					{
						placeholder: 'Фамилия',
						name: 'surname',
						type: 'text',
						validate: 'text',
						mask: ''
					},
					{
						placeholder: 'Отчество',
						name: 'patronymic',
						type: 'text',
						validate: 'text',
						mask: ''
					},
					{
						placeholder: 'Дата рождения',
						name: 'age',
						type: 'text',
						validate: 'date',
						mask: '99.99.9999'
					}
				],
				contact: [
					{
						placeholder: '+7 (___) -__ - __',
						name: 'phone',
						type: 'text',
						validate: 'phone',
						mask: '+7(999)999-99-99'
					},
					{
						placeholder: 'Email',
						name: 'email',
						type: 'email',
						validate: 'email',
						mask: ''
					},
					{
						placeholder: 'Пароль [********]',
						name: 'password',
						type: 'password',
						validate: 'password',
						mask: ''
					},
				]
			}
		},
		methods: {
			onAddAdress() {

			}
		}
	}
</script>

<style scoped lang="scss">
	@import './../assets/css/_variebles.scss';

	.container {
		display: flex;
		flex-flow: row wrap;
		padding: 33px 29px;
		max-width: 970px;
		margin: 0 auto;
		width: 100%;
	}

	.settings {
		max-width: 607px;
		width: 100%;

		&__title {
			margin-bottom: 37px;
			font-size: 24px;
			font-family: 'Open Sans', sans-serif;
			font-weight: 700;
		}

		&__block {
			margin-bottom: 50px;
		}

	}

	.block {
		&__title {
			display: block;
			margin-bottom: 20px;
			font-size: 18px;

			&_sup {
				font-size: 14px;
				padding: 20px 18px 0;
			}
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

		&__btn {
			display: flex;
			position: relative;
			justify-content: center;
			cursor: pointer;
			align-items: center;
			width: 200px;
			height: 30px;
			margin-bottom: 29px;
			padding: 0 19px;
			background: $gray;
			color: $white;
			box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.2);
			transition: all 0.15s linear;

			&:active {
				box-shadow: inset 0 2px 3px 0 rgba(0, 0, 0, 0.2);
			}
		}
	}


</style>
