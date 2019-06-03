<template>
	<v-layout>
		<v-navigation-drawer
			v-model="drawer"
			fixed
			clipped
			class="drawer-style rem"
			id="style-1"
		>
			<v-list dense>
				<v-list-tile
					v-for="(source, index) in sources"
					:key="index"
					@click="selectSource(source.id)"
				>
					<v-list-tile-action>
						<v-avatar size="32px">
							<img
								class="img-circle elevation-7 mb-1"
								:src="getImgUrl(source.id)"
							/>
						</v-avatar>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>{{ source.name }}</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
		<v-toolbar color="blue-grey darken-3" dark fixed app>
			<v-toolbar-side-icon
				@click.stop="drawer = !drawer"
			></v-toolbar-side-icon>
			<v-toolbar-title>News posts</v-toolbar-title>
		</v-toolbar>
	</v-layout>
</template>


<script>
export default {
	props: ['sources'],
	data () {
		return {
			drawer: false
		}
	},
	methods: {
		getImgUrl(pic) {
			return require('../assets/images/' + pic + '.png')
		},
		selectSource(source){
			this.$emit('selectsource', source)
		}
	}
}
</script>
<style scoped>
#style-1::-webkit-scrollbar {
	width: 6px;
	background-color: #F5F5F5;
}
#style-1::-webkit-scrollbar-thumb {
	background-color: #37474F; 
	background-image: -webkit-linear-gradient(90deg, rgba(255, 255, 255, .2) 25%,
		transparent 25%,
		transparent 50%,
	rgba(255, 255, 255, .2) 50%,
	rgba(255, 255, 255, .2) 75%,
		transparent 75%,
		transparent)
}
#style-1::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}
.drawer-style {
	background-color: #B0BEC5 !important;
	border-color: #B0BEC5 !important;
}
</style>