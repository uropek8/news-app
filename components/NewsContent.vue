<template>
	<v-flex xs12 sm8 offset-sm2>
		<v-card
			flat
			class="my-3"
			data-aos="zoom-in"
			data-aos-easing="ease"
		>
			<v-img
				height="350px"
				:src="article.urlToImage"
			></v-img>
			<v-card-actions>
				<v-chip small color="secondary" class="white--text">
					{{ new Date(article.publishedAt).toLocaleTimeString() }}
				</v-chip>
			</v-card-actions>
			<v-container fill-height fluid>
				<v-layout>
					<v-flex xs12 align-end d-flex>
						<span class="headline">{{ article.title }}</span>
					</v-flex>
				</v-layout>
			</v-container>			
			<v-card-text>{{ article.description }}</v-card-text>
			<v-card-actions>
				<v-chip small>
					{{ article.source.id }}
				</v-chip>
				<v-spacer></v-spacer>
				<v-btn
					depressed
					color="teal"
					class="white--text"
					target="_blank"
					:href="article.url"
				>Read More</v-btn>
			</v-card-actions>
		</v-card>
	</v-flex>
</template>

<script>
export default {
	props: ['article']
}
</script>