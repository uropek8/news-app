export const state = () => ({
	sources: []
})

export const mutations = {
	setSources(state, sources) {
		state.sources = sources
	}
}

export const actions = {
	async fetch({commit}) {
		const sources = await this.$axios.$get('https://newsapi.org/v2/sources', {
			params: {
				language: 'en',
				apiKey: '9beef304803b4393a3148cd1bb1b9288'
			}
		})
			.then((res) => {
				console.log(res.sources)
				commit('setSources', res.sources)
			})
	}
}

export const getters = {
	sources: state => state.sources
}