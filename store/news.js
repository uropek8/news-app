export const state = () => ({
	news: [],
	sources: [],
	errors: []
})

export const mutations = {
	setNews(state, news) {
		state.news = news
	},
	setSources(state, sources) {
		state.sources = sources
	},
	setErrors(state, errors) {
		state.errors = errors
	}
}

export const actions = {
	async fetchSource({commit}) {
		const sources = await this.$axios.$get('https://newsapi.org/v2/sources', {
			params: {
				language: 'en',
				apiKey: '9beef304803b4393a3148cd1bb1b9288x'
			}
		})
			.then((res) => {
				console.log(res.sources)
				commit('setSources', res.sources)
			})
			.catch(e => {
				console.log(e)
				this.errors.push(e)
			})
	},
	async defaultNews({commit}) {
		const defNews = await this.$axios.$get('https://newsapi.org/v2/top-headlines', {
			params: {
				sources: 'techcrunch',
				apiKey: '9beef304803b4393a3148cd1bb1b9288'
			}
		})
			.then((res) => {
				commit('setNews', res.articles)
			})
			.catch(e => {
				this.errors.push(e)
			})
	},
	async fetchNews({commit}, source) {
		const news = await this.$axios.$get('https://newsapi.org/v2/top-headlines', {
			params: {
				sources: source,
				apiKey: '9beef304803b4393a3148cd1bb1b9288'
			}
		})
			.then((res) => {
				commit('setNews', res.articles)
			})
			.catch(e => {
				this.errors.push(e)
			})
	}
}

export const getters = {
	news: state => state.news,
	sources: state => state.sources,
	errors: state => state.errors
}