# grunt-barbarian-ombudsman

> Barbarian Ombudsman for Grunt

## Getting Started

This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-barbarian-ombudsman --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-barbarian-ombudsman');
```

## The "barbarian-ombudsman" task

### Overview

In your project's Gruntfile, add a section named `barbarian-ombudsman` to the
data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  'barbarian-ombudsman': {
    options: {
      // Task-specific options go here.
    }
  }
});
```

### Options

See https://github.com/lumeet/barbarian-ombudsman.

### Usage Examples

```js
grunt.initConfig({
  'barbarian-ombudsman': {
    options: {
      prefix: false,
      locales: ['fi', 'en']
      respath: './locales/__LOCALE__.json',
    }
  }
});
```
