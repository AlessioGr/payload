"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "buildGlobalModel", {
    enumerable: true,
    get: function() {
        return buildGlobalModel;
    }
});
var _mongoose = /*#__PURE__*/ _interop_require_default(require("mongoose"));
var _buildSchema = /*#__PURE__*/ _interop_require_default(require("./buildSchema"));
var _buildQuery = /*#__PURE__*/ _interop_require_default(require("../queries/buildQuery"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var buildGlobalModel = function(config) {
    if (config.globals && config.globals.length > 0) {
        var globalsSchema = new _mongoose.default.Schema({}, {
            discriminatorKey: "globalType",
            timestamps: true,
            minimize: false
        });
        globalsSchema.plugin((0, _buildQuery.default)());
        var Globals = _mongoose.default.model("globals", globalsSchema, "globals");
        Object.values(config.globals).forEach(function(globalConfig) {
            var globalSchema = (0, _buildSchema.default)(config, globalConfig.fields, {
                options: {
                    minimize: false
                }
            });
            Globals.discriminator(globalConfig.slug, globalSchema);
        });
        return Globals;
    }
    return null;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvYnVpbGRHbG9iYWxNb2RlbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgU2FuaXRpemVkQ29uZmlnIH0gZnJvbSAncGF5bG9hZC9jb25maWcnO1xuaW1wb3J0IGJ1aWxkU2NoZW1hIGZyb20gJy4vYnVpbGRTY2hlbWEnO1xuaW1wb3J0IGdldEJ1aWxkUXVlcnlQbHVnaW4gZnJvbSAnLi4vcXVlcmllcy9idWlsZFF1ZXJ5JztcbmltcG9ydCB0eXBlIHsgR2xvYmFsTW9kZWwgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBidWlsZEdsb2JhbE1vZGVsID0gKGNvbmZpZzogU2FuaXRpemVkQ29uZmlnKTogR2xvYmFsTW9kZWwgfCBudWxsID0+IHtcbiAgaWYgKGNvbmZpZy5nbG9iYWxzICYmIGNvbmZpZy5nbG9iYWxzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBnbG9iYWxzU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7fSwgeyBkaXNjcmltaW5hdG9yS2V5OiAnZ2xvYmFsVHlwZScsIHRpbWVzdGFtcHM6IHRydWUsIG1pbmltaXplOiBmYWxzZSB9KTtcblxuICAgIGdsb2JhbHNTY2hlbWEucGx1Z2luKGdldEJ1aWxkUXVlcnlQbHVnaW4oKSk7XG5cbiAgICBjb25zdCBHbG9iYWxzID0gbW9uZ29vc2UubW9kZWwoJ2dsb2JhbHMnLCBnbG9iYWxzU2NoZW1hLCAnZ2xvYmFscycpIGFzIHVua25vd24gYXMgR2xvYmFsTW9kZWw7XG5cbiAgICBPYmplY3QudmFsdWVzKGNvbmZpZy5nbG9iYWxzKS5mb3JFYWNoKChnbG9iYWxDb25maWcpID0+IHtcbiAgICAgIGNvbnN0IGdsb2JhbFNjaGVtYSA9IGJ1aWxkU2NoZW1hKFxuICAgICAgICBjb25maWcsXG4gICAgICAgIGdsb2JhbENvbmZpZy5maWVsZHMsXG4gICAgICAgIHtcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBtaW5pbWl6ZTogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgICBHbG9iYWxzLmRpc2NyaW1pbmF0b3IoZ2xvYmFsQ29uZmlnLnNsdWcsIGdsb2JhbFNjaGVtYSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gR2xvYmFscztcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcbiJdLCJuYW1lcyI6WyJidWlsZEdsb2JhbE1vZGVsIiwiY29uZmlnIiwiZ2xvYmFscyIsImxlbmd0aCIsImdsb2JhbHNTY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsImRpc2NyaW1pbmF0b3JLZXkiLCJ0aW1lc3RhbXBzIiwibWluaW1pemUiLCJwbHVnaW4iLCJnZXRCdWlsZFF1ZXJ5UGx1Z2luIiwiR2xvYmFscyIsIm1vZGVsIiwiT2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsImdsb2JhbENvbmZpZyIsImdsb2JhbFNjaGVtYSIsImJ1aWxkU2NoZW1hIiwiZmllbGRzIiwib3B0aW9ucyIsImRpc2NyaW1pbmF0b3IiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7OytCQU1hQTs7O2VBQUFBOzs7K0RBTlE7a0VBRUc7aUVBQ1E7Ozs7OztBQUd6QixJQUFNQSxtQkFBbUIsU0FBQ0M7SUFDL0IsSUFBSUEsT0FBT0MsT0FBTyxJQUFJRCxPQUFPQyxPQUFPLENBQUNDLE1BQU0sR0FBRyxHQUFHO1FBQy9DLElBQU1DLGdCQUFnQixJQUFJQyxpQkFBUSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxHQUFHO1lBQUVDLGtCQUFrQjtZQUFjQyxZQUFZO1lBQU1DLFVBQVU7UUFBTTtRQUVsSEwsY0FBY00sTUFBTSxDQUFDQyxJQUFBQSxtQkFBbUI7UUFFeEMsSUFBTUMsVUFBVVAsaUJBQVEsQ0FBQ1EsS0FBSyxDQUFDLFdBQVdULGVBQWU7UUFFekRVLE9BQU9DLE1BQU0sQ0FBQ2QsT0FBT0MsT0FBTyxFQUFFYyxPQUFPLENBQUMsU0FBQ0M7WUFDckMsSUFBTUMsZUFBZUMsSUFBQUEsb0JBQVcsRUFDOUJsQixRQUNBZ0IsYUFBYUcsTUFBTSxFQUNuQjtnQkFDRUMsU0FBUztvQkFDUFosVUFBVTtnQkFDWjtZQUNGO1lBRUZHLFFBQVFVLGFBQWEsQ0FBQ0wsYUFBYU0sSUFBSSxFQUFFTDtRQUMzQztRQUVBLE9BQU9OO0lBQ1Q7SUFFQSxPQUFPO0FBQ1QifQ==