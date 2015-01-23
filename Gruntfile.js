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
        },

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

        copy: {
            js: {
                expand: true,
                cwd: 'src/js/',
                src: ['**/*.js'],
                dest: 'build/js/',
            },
            html: {
                expand: true,
                cwd: 'src/',
                src: ['**/*.html'],
                dest: 'build/',
            },
            nw: {
                src: 'src/package.json',
                dest: 'build/package.json'
            },
        },

        clean: {
            build: {
                src:['build/*'],
            },
        },

        watch: {
            less: {
                files: 'src/less/**/*.less',
                tasks: ['less2css']
            },
            typescript: {
                files: ['src/ts/**/*.ts'],
                tasks: ['typescript:build'],
            },
            js: {
                files: ['src/js/**/*.js'],
                tasks: ['copy:js'],
            },
            html: {
                files: 'src/**/*.html',
                tasks: ['copy:html'],
            },
        },

    });

    // load plugin
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // tasks
    grunt.registerTask('less2css', ['less', 'csslint']);
    grunt.registerTask('ts2js', ['typescript', 'copy:js']);
    grunt.registerTask('build', ['clean:build', 'copy:html', 'less2css', 'ts2js', 'copy:nw']);
    grunt.registerTask('default', ['build']);

};
