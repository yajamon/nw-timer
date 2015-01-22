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

        typescript: {
            build: {
                src: ['src/ts/index.ts'],
                dest: 'build/js/index.js',
                options: {
                    noImplicitAny: true,
                    target: 'es5',
                }
            }
        },


    });

    // load plugin
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-typescript');

    // tasks
    grunt.registerTask('less2css', ['less', 'csslint']);

};
