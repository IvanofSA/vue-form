<template>
	<aside class="share">
		<span class="share__title">Социальные сети</span>
		<p class="share__desc">Привяжите учетную запись социальной сети и используйте ee для входа</p>
		<div class="share__list">
			<a class="share__item share__item_fb" href="">
				<i class="share__icon"></i>
				<span class="share__text">Facebook</span>
			</a>
		</div>
		<div class="share__list">
			<a class="share__item share__item_vk" href="">
				<i class="share__icon"></i>
				<span class="share__text">Вконтакте</span>
			</a>
		</div>
		<div class="share__list">
			<a class="share__item share__item_tw" href="">
				<i class="share__icon"></i>
				<span class="share__text">Twitter</span>
			</a>
		</div>
		<div class="share__list">
			<a class="share__item share__item_ok" href="">
				<i class="share__icon"></i>
				<span class="share__text">Одноклассники</span>
			</a>
		</div>
	</aside>
</template>

<script>
	export default {
		name: "blockShare"
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

			&_fb {
				background: #1d59a3;

				& .share__icon {
					background: url('../assets/image/fb.png') no-repeat center;
					background-size: contain;
				}
			}
			&_vk {
				background: #1c608d;

				& .share__icon {
					background: url('../assets/image/vk.png') no-repeat center;
					background-size: contain;
				}
			}
			&_tw {
				background: #00b2e6;

				& .share__icon {
					background: url('../assets/image/tw.png') no-repeat center;
					background-size: contain;
				}
			}
			&_ok {
				background: #ef7800;

				& .share__icon {
					background: url('../assets/image/ok.png') no-repeat center;
					background-size: contain;
				}
			}
		}

		&__text {
			margin-left: 19px;
			color: $white;
		}

	}
</style>