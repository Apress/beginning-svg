module.exports = function(grunt) {
  grunt.initConfig({
  	svgmin: {
      options: {
        plugins: [
          {removeViewBox: false},               // don't remove the viewbox atribute from the SVG
          {removeUselessStrokeAndFill: false},  // don't remove Useless Strokes and Fills
          {removeEmptyAttrs: false}             // don't remove Empty Attributes from the SVG
        ]
      },
  		dist: {
  		  files: [{ 
          expand: true,
          cwd: 'in/',
          src: ['*.svg'],
          dest: 'out/',
          ext: '.min.svg' 
        }]
  		}
  	},
    watcher: {
      options: {
        dateFormat: function(time) {
          grunt.log.writeln('The watch finished in ' + time + 'ms');
          grunt.log.writeln('Waiting for more changes...');
        },
        event: ['add', 'change']
      },
      scripts: {
        files: '**/*.svg',
        tasks: 'svgmin',
      }
    }
  });
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-watcher');

  grunt.registerTask('default', ['watcher']);
};