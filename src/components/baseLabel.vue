<template>
	<label class="check" :class="`check_${type}`">
		<input :type="type" checked="checked" name="radio">
		<span class="checkmark"></span>
		{{data}}
	</label>
</template>


<script>
	export default {
		name: "baseLabel",
		props: ['data', 'type'],
	}
</script>

<style scoped lang="scss">
	@import './../assets/css/_variebles.scss';

	.check {
		display: flex;
		align-items: center;
		position: relative;
		padding-left: 28px;
		height: 17px;
		cursor: pointer;
		font-size: 14px;
		user-select: none;


		&_radio {
			& .checkmark {
				position: absolute;
				top: 0;
				left: 0;
				height: 17px;
				width: 17px;
				border: 1px solid $gray;
				border-radius: 50%;

				&:after {
					top: 50%;
					left: 50%;
					transform: translate(-45%, -55%);
					width: 9px;
					height: 9px;
					border-radius: 50%;
					background: $gray-medium;
				}
			}
		}

		&_checkbox {
			& .checkmark {
				position: absolute;
				top: 0;
				left: 0;
				height: 17px;
				width: 17px;
				border: 1px solid $gray;

				&:after {
					top: 50%;
					left: 50%;
					transform: translate(-45%, -55%);
					width: 13px;
					height: 10px;
					background-color: white;
					background-repeat: no-repeat;
					background-position: 50% 50%;
				}
			}
		}
	}

	.check input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
	}


	.checkmark:after {
		content: "";
		position: absolute;
		display: none;
	}

	.check input:checked ~ .checkmark:after {
		display: block;
	}
	.check_checkbox input:checked  + ~ .checkmark:after {
		/*background-color: #4A90E2;*/
		background-image: url('../assets/image/check.svg');
	}



</style>