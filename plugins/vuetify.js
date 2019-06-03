import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(fas)

Vue.use(Vuetify, {
	theme: {
		primary: colors.blue.darken2,
		accent: colors.grey.darken3,
		secondary: colors.amber.darken3,
		info: colors.teal.lighten1,
		warning: colors.amber.base,
		error: colors.deepOrange.accent4,
		success: colors.green.accent3
	}
})
