module.exports = function(grunt){
	grunt.initConfig({
		shell : {
			options: {
            	stderr: false
        	},
        	target: {
            	command: 'stylus -c -w -o css/ stylus/webstyle.styl'
        	}
		}
	});
	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('default', ['shell']);
}