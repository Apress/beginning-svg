define(function() {
  "use strict";

  var module = {
    palette_to_function: function (palette) {
      return function (i) {
        return palette[i % palette.length];
      };
    },
    initArray: function(val, length) {
      var i, a = new Array(length);
      for (i = 0; i < length; i++) {
        a[i] = val;
      }
      return a;
    }
  };

  Object.seal(module);
  return module;
});