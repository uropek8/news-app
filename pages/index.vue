<template>
	<v-app light>
		<LeftMenu
			:sources="sources"
			@selectsource="setResource"
		/>
		<v-content>
			<v-container fluid>
				<NewsContent
					v-for="(article, index) in news"
					:key="index"
					:article="article"
				/>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
import LeftMenu from '~/components/LeftMenu.vue'
import NewsContent from '~/components/NewsContent.vue'

export default {
	components: {
		NewsContent,
		LeftMenu
	},
	data () {
		return {
			errors:[],
		}
	},
	async fetch({store}) {
		if (store.getters['news/news'].length === 0) {
			await store.dispatch('news/defaultNews')
		} 
		if (store.getters['news/sources'].length === 0) {
			await store.dispatch('news/fetchSource')
		}
	},
	computed: {
		news() {
			return this.$store.getters['news/news']
		},
		sources() {
			return this.$store.getters['news/sources']
		},
		errors() {
			return this.$store.getters['news/errors']
		}
	},
	methods: {
		setResource(source) {
			this.$store.dispatch('news/fetchNews', source)
			console.log(this.$store.getters['news/news'])
		}
	}
}
</script>