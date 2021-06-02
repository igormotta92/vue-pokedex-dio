module.exports = {
	lintOnSave: false,

	css: {
		loaderOptions: {
			sass: {
				// disponibiliza os 2 arquivos para todos os componentes
				additionalData: `
					@import "@/styles/functions";
					@import "@/styles/colors";
					@import "@/styles/variables";
				`,
			},
		},
	},
};
