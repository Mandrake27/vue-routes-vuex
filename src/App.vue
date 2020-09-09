<template>
	<div class="wrapper">
		<defaultHeader />
		<router-view></router-view>
	</div>
</template>

<script>
	import defaultHeader from '@/components/Header';
	export default {
		components: {
			defaultHeader
		}
	};
</script>

<style>
</style>
