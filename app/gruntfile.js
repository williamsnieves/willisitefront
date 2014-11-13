module.exports = function(grunt){
	grunt.initConfig({
		watch: {
		  css: {
		    files: '**/*.css',
		    options: {
		      livereload: true
		    }
		  },
		  html: {
		  	files: '**/*.html',
		    options: {
		      livereload: true
		    }
		  }
		},
		shell : {
			options: {
            	stderr: false
        	},
        	target: {
            	command: 'stylus -c -w -o css/ stylus/webstyle.styl'
        	}
		},
		nodemon: {
	      dev: {
	        script: 'newserver3.js',
	        delayTime: 1
	      }
	    },
	    concurrent: {
		    target: {
		        tasks: ['nodemon', 'watch', 'shell'],
		        options: {
		            logConcurrentOutput: true,
		        }
		    }
		}
	});
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-concurrent');

	grunt.registerTask('default', ['concurrent', 'nodemon','watch','shell']);
}