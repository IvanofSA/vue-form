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

</style>
