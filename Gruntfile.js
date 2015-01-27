module.exports = function(grunt){
	//Grunt configuration
	grunt.initConfig({
		sass: {
			dist: {
				options: {
					style: 'nested'
				},
				files: {
					'css/sass_compiled.css':'scss/styles.scss'
				}
			}
		},
		watch: {
			sass: {
				files: ['scss/*.scss'],
				tasks: ['sass']
			},
			livereload:{
				//Here we watch the final compiled files to trigger the live reload
				//Files selected: any HTML, any CSS in the css folder or subfolder, any images
				options: {livereload: true},
				files: [
					'{,*/}*.html',
					'css/{,*/}*.css',
					'img/{,*/}*'
				]
			}
		},
		connect: {
			options: {
				port: 8000,
				open: true,
				livereload: 35729,
				// Change this to '0.0.0.0' to access the server from outside
        		hostname: 'localhost'
			},
			server: {}
			
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default',['sass','connect:server','watch']);
};