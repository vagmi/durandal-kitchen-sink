var grunt = require('grunt');
grunt.initConfig({
  jshint: {
    options: {
      curly: true,
      eqeqeq: true,
      eqnull: true,
      browser: true,
      globals: {
        jQuery: true
      },
    },
    uses_defaults: ['app/**/*.js'],
  },
  copy: {
    app: {
      files: [
        {expand: true, src: 'app/**', dest: './build'},
        {expand: true, src: 'index.html', dest: './build/'},
      ]
    },
    lib: {
      files: [
        {expand: true, src: 'lib/**', dest: './build'},
      ]
    },
    styles: {
      files: [
        {expand: true, src: 'styles/**', dest: './build'},
      ]
    }
  },
  connect: {
    server: {
      options: {
        port: 9001,
        base: 'build',
        livereload: true,
        open: true
      }
    }
  },
  watch: {
    app: {
      files: 'app/**',
      tasks: ['copy'],
    },
    build : {
      files: 'build/**',
      tasks: [],
      options: {
        livereload: true,
      },
    }
}

});
grunt.loadNpmTasks("grunt-contrib-jshint");
grunt.loadNpmTasks("grunt-contrib-copy");
grunt.loadNpmTasks("grunt-contrib-connect");
grunt.loadNpmTasks("grunt-contrib-watch");

grunt.registerTask('dev', ['copy','connect','watch']);
