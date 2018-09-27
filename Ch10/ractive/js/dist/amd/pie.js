(function() {
  define(['./linear', './ops', './sector'], function(Linear, O, Sector) {
    return function(_arg) {
      var R, accessor, center, colors, curves, data, i, item, r, s, scale, t, value, values, _i, _len;
      data = _arg.data, accessor = _arg.accessor, center = _arg.center, r = _arg.r, R = _arg.R, colors = _arg.colors;
      if (colors == null) {
        colors = O.random_colors;
      }
      values = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = data.length; _i < _len; _i++) {
          item = data[_i];
          _results.push(accessor(item));
        }
        return _results;
      })();
      s = O.sum(values);
      scale = Linear([0, s], [0, 2 * Math.PI]);
      curves = [];
      t = 0;
      for (i = _i = 0, _len = data.length; _i < _len; i = ++_i) {
        item = data[i];
        value = values[i];
        curves.push({
          item: item,
          color: colors(i),
          sector: Sector({
            center: center,
            r: r,
            R: R,
            start: scale(t),
            end: scale(t + value)
          })
        });
        t += value;
      }
      return {
        curves: curves
      };
    };
  });

}).call(this);
