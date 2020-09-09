<template>
	<div class="navbar">
		<div class="container">
			<div class="navbar-content">
				<div class="logo">VUE-CLI</div>
				<ul class="navbar-list">
					<li class="navbar-item" v-for="({ title, url }) in links" :key="title">
						<router-link :title="title" :to="url" class="navbar-link">
							{{ title }}
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				links: [
					{
						title: 'Home',
						url: '/'
					},
					{
						title: 'Example',
						url: '/example'
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	.navbar-link {
		&.router-link-exact-active {
			color: #5247e7;
		}
	}
</style>