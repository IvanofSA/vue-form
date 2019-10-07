<template>
	<main id="app">
		<Index/>
	</main>
</template>

<script>
	import Index from './components/index'

	export default {
		name: 'App',
		components: {
			Index
		}
	}
</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css?family=Open+Sans:700&display=swap');
	@import './assets/css/_normalize.scss';
	@import './assets/css/_variebles.scss';

	* {
		box-sizing: border-box;
	}

	html {
		width: 100%;
		height: 100%;
		font-family: Verdana, sans-serif;
		font-size: 14px;
		color: $gray-medium;
	}

	body {
		max-width: 100%;
		width: 100%;
		position: relative;
	}

	html, body {
		-webkit-overflow-scrolling: touch !important;
		height: 100% !important;
	}

	.btn {
		display: flex;
		position: relative;
		justify-content: center;
		cursor: pointer;
		align-items: center;
		width: 200px;
		height: 30px;
		font-size: 12px;
		margin: 0 0 29px;
		background: #cdc9c7;
		color: $white;
		box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.2);
		transition: all 0.15s linear;

		&:active {
			box-shadow: inset 0 2px 3px 0 rgba(0, 0, 0, 0.2);
		}
	}

</style>
