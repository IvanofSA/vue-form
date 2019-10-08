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
				<div class="block__list block__list_address" :class="showAdd">

					<div class="block__field">
						<span class="block__title block__title_sup">Текущий адрес доставки</span>
						<button class="field__btn" @click="showbtn = !showbtn">Изменить</button>
					</div>
					<div class="block__wrap">
						<Label v-for="(item, i) in addressList" :key="i" :data="item" :showbtn="showbtn" :index="i"
							   @removeAddress="onRemoveAddress"></Label>
					</div>

					<div class="block__btn btn" @click="show = !show" v-if="!show">Добавить еще один адрес</div>
					<add @address="onAddAdress($event)" v-if="show" class="block__add"></add>
				</div>
			</div>


			<div class="settings__block block">
				<span class="block__title">Подписки и уведомления</span>
				<div class="block__field">
					<base-label :data="'Оповещеать меня о текущих акциях по e-mail'" :type="'checkbox'"></base-label>
				</div>
				<div class="block__field">
					<base-label :data="'Оповещеать меня о текущих акциях по Sms'" :type="'checkbox'"></base-label>

				</div>
			</div>
		</section>
		<share :list="shareList"></share>
	</div>

</template>

<script>
	import Field from './inputField'
	import Label from './labelField'
	import baseLabel from './baseLabel'
	import Add from './blockAdd'
	import Share from './blockShare'

	export default {
		name: 'Index',
		components: {
			Field,
			Label,
			Add,
			baseLabel,
			Share
		},
		data() {
			return {
				show: false,
				county: null,
				city: null,
				showbtn: false,
				addressList: [],
				shareList: [
					{
						name: 'Facebook',
						tag: 'fb',
						icon: 'image/fb.png',
						color: '#1d59a3',
						link: '#',
					},
					{
						name: 'Вконтакте',
						tag: 'vk',
						icon: 'image/vk.png',
						color: '#1c608d',
						link: '#',
					},
					{
						name: 'Twitter',
						tag: 'tw',
						icon: 'image/tw.png',
						color: '#00b2e6',
						link: '#',
					},
					{
						name: 'Одноклассники',
						tag: 'ok',
						icon: 'image/ok.png',
						color: '#ef7800',
						link: '#',
					}
				],
				personal: [
					{
						placeholder: 'Имя',
						name: 'name',
						type: 'text',
						pattern: /^[А-Яа-я0-9\-_./\s]*$/,
						mask: null
					},
					{
						placeholder: 'Фамилия',
						name: 'surname',
						type: 'text',
						pattern: /^[А-Яа-я0-9\-_./\s]*$/,
						mask: null
					},
					{
						placeholder: 'Отчество',
						name: 'patronymic',
						type: 'text',
						pattern: /^[А-Яа-я0-9\-_./\s]*$/,
						mask: null
					},
					{
						placeholder: 'Дата рождения',
						name: 'age',
						type: 'text',
						pattern: /(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20)\d\d)/,
						mask: '99.99.9999'
					}
				],
				contact: [
					{
						placeholder: '+7 (___) -__ - __',
						name: 'phone',
						type: 'text',
						pattern: /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/,
						mask: '+7(999)999-99-99'
					},
					{
						placeholder: 'Email',
						name: 'email',
						type: 'email',
						pattern: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
						mask: null
					},
					{
						placeholder: 'Пароль [********]',
						name: 'password',
						type: 'password',
						pattern: null,
						mask: null
					},
				]
			}
		},
		computed: {
			showAdd() {
				return {
					'active': this.show
				}
			}
		},
		methods: {
			onRemoveAddress(e) {
				this.addressList.splice(e.index, 1)
			},
			onAddAdress(e) {
				this.addressList.push(e.address);
				this.show = !this.show;
			}
		}
	}
</script>

<style scoped lang="scss">
	@import './../assets/css/_variebles.scss';

	.container {
		display: flex;
		flex-flow: row wrap;
		align-items: flex-start;
		justify-content: space-between;
		padding: 33px 17px;
		max-width: 970px;
		margin: 0 auto;
		width: 100%;
	}

	.settings {
		max-width: 607px;
		width: 100%;

		&__title {
			margin-bottom: 30px;
			text-transform: uppercase;
			font-size: 24px;
			font-family: 'Open Sans', sans-serif;
			font-weight: 700;
		}

		&__block {
			margin-bottom: 45px;
		}
	}

	.block {
		&__title {
			display: block;
			margin-bottom: 20px;
			font-size: 18px;

			&_sup {
				font-size: 14px;
				/*padding: 20px 18px 0;*/
				padding-top: 20px;
			}
		}

		&__field {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 20px;

			@media (min-width: 500px) {
				margin-bottom: 10px;

			}
		}
		&__wrap {
			margin-bottom: 31px;
		}

		&__list {
			display: flex;
			width: 100%;
			flex-flow: column wrap;
			border: 1px solid $gray;

			&.active {
				background: $gray-light;

				& .block__add {
					padding-top: 20px;
					border-top: 1px solid $gray;
				}
			}

			&_address {
				padding: 0 18px;
			}
		}

		&__item {
			position: relative;
			display: flex;
			flex-flow: row wrap;
			align-items: center;
			justify-content: space-between;
			min-height: 49px;
			border-bottom: 1px solid $gray;

			&:last-child {
				border-bottom: 0;
			}

			&:hover {
				background: $gray-light;
			}
		}

		&__btn {
			background: #cdc9c7;
		}
	}

	.check {
		display: flex;
		align-items: center;
		position: relative;
		padding-left: 25px;
		height: 17px;
		cursor: pointer;
		font-size: 14px;
		user-select: none;
	}

	.check__input {
		position: absolute;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}

	.check__box {
		position: absolute;
		left: 0;
		width: 18px;
		height: 18px;
		overflow: hidden;
		background-color: white;
		background-repeat: no-repeat;
		background-position: 50% 50%;
		background-image: url('../assets/image/check.svg');
		border: 1px solid $gray;
	}

	.check__input:checked + .check__box {
		/*background-color: #4A90E2;*/
		background-image: url('../assets/image/check.svg');
	}
</style>
