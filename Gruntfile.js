module.exports = function(grunt){
	//Grunt configuration
	grunt.initConfig({
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'css/sass_compiled.css':'scss/styles.scss'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default',['sass']);
};