<template>
	<div class="field">
		<label class="check">432 071 Россия, г. Троицк, ул. Ленина д.34. кв.54
			<input type="radio" checked="checked" name="radio">
			<span class="checkmark"></span>
		</label>
	</div>

</template>

<script>
	export default {
		name: "label",
	}
</script>

<style scoped lang="scss">
	@import './../assets/css/_variebles.scss';

	.field {
		position: relative;
		margin-bottom: 10px;

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
			line-height: 30px;
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

	.check {
		display: flex;
		align-items: center;
		position: relative;
		padding-left: 50px;
		height: 17px;
		cursor: pointer;
		font-size: 14px;
		user-select: none;
	}

	.check input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
	}

	.checkmark {
		position: absolute;
		top: 0;
		left: 18px;
		height: 17px;
		width: 17px;
		border: 1px solid $gray;
		border-radius: 50%;
	}

	.checkmark:after {
		content: "";
		position: absolute;
		display: none;
	}

	.check input:checked ~ .checkmark:after {
		display: block;
	}

	.check .checkmark:after {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 11px;
		height: 11px;
		border-radius: 50%;
		background: $gray-medium;
	}
</style>