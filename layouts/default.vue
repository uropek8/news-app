<template>
	<v-app light>
		<nuxt />
		<v-footer class="blue-grey darken-1 pa-3">
			<v-spacer></v-spacer>
			<div>&copy; {{ new Date().getFullYear() }}</div>
		</v-footer>
		<ScrollTop/>
	</v-app>
</template>

<script>
export default {
}
</script>
