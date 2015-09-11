'use strict';

var barbarian = require('barbarian-ombudsman');

module.exports = function(grunt) {
  grunt.registerMultiTask('barbarian-ombudsman',
                          'Barbarian Ombudsman for Grunt', function() {
    barbarian(this.options()).invoke();
  });
};
