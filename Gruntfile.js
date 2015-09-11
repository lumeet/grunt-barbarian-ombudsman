'use strict';

var jsPaths = ['./lib/**/*.js',
               './test/**/*.js',
               './tasks/*.js',
               'Gruntfile.js'];

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: jsPaths,
      options: {
        jshintrc: '.jshintrc'
      }
    },
    jscs: {
      src: jsPaths,
      options: {
        config: '.jscsrc'
      }
    },
    'barbarian-ombudsman': {
      runner: {
        options: {
          prefix: false,
          locales: ['fi', 'en'],
          respath: './node_modules/barbarian-ombudsman/test/resources/plain/' +
                   '__LOCALE__.json'
        }
      }
    },
    mochaTest: {
      test: {
        src: ['test/**/*.js']
      }
    }
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('logCatcher', function() {
    console._log = [];
    console.log = function() {
      console._log = console._log.concat(Array.prototype.slice.call(arguments));
    };
    console.error = function() {};
  });
  grunt.registerTask('test', ['logCatcher', 'barbarian-ombudsman',
                              'mochaTest']);
  grunt.registerTask('default', ['jshint', 'jscs', 'test']);
};
