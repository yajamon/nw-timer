module.exports = function (grunt) {

    // config
    grunt.initConfig({

        less: {
            build: {
                expand: true,
                cwd: 'src/less/',
                src: ['**/*.less'],
                dest: 'build/css/',
                ext: '.css'
            }
        }

        csslint: {
            lint: {
                src: '<%= less.build.dest %>**/*.css'
            }
        },

    });

    // load plugin
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-csslint');

    // tasks
    grunt.registerTask('less2css', ['less', 'csslint']);

};
