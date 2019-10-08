<template>
	<aside class="share">
		<span class="share__title">Социальные сети</span>
		<p class="share__desc">Привяжите учетную запись социальной сети и используйте ee для входа</p>
		<div class="share__list"
			 v-for="(item, i) in list"
			 :key="i" >
			<a :class="`share__item share__item_${item.tag}`" :href="item.link" :style="{ backgroundColor: `${item.color}` }">
				<i class="share__icon" :style="{ backgroundImage: `url('${getImgUrl(item.icon)}')` }"></i>
				<span class="share__text">{{item.name}}</span>
			</a>
		</div>
	</aside>
</template>

<script>
	export default {
		name: "blockShare",
		props: ['list'],
		methods: {
			getImgUrl(pic) {
				return require('../assets/'+pic)
			}
		}
	}
</script>

<style scoped lang="scss">
	@import './../assets/css/_variebles.scss';

	.share {
		display: block;
		max-width: 295px;
		margin-top: 25px;
		width: 100%;
		padding: 30px 20px 20px;
		background: #fff6e0;

		&__title {
			display: block;
			margin-bottom: 18px;
			text-transform: uppercase;
			font-family: 'Open Sans', sans-serif;
			font-size: 14px;
		}

		&__desc {
			margin-bottom: 22px;
			font-size: 12px;
			line-height: 1.2;
		}

		&__list {
			display: flex;
			flex-flow: column wrap;
			justify-content: center;
			align-items: center;
		}


		&__icon {
			width: 24px;
			height: 19px;
			background-position: center;
			background-repeat: no-repeat;
			/*background-size: contain;*/

		}
		&__item {
			display: flex;
			flex-flow: row wrap;
			align-items: center;
			justify-content: flex-start;
			width: 100%;
			height: 40px;
			margin-bottom: 15px;
			padding: 0 21px;
		}

		&__text {
			margin-left: 19px;
			color: $white;
		}

	}
</style>