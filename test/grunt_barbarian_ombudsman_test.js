/* jshint expr: true */
'use strict';

var expect = require('chai').expect;

describe('barbarian-ombudsman', function() {
  it('shows the report', function() {
    expect(console._log[0]).to.eq('Found 5 keys in total.\n');
  });
});
