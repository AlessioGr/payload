"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _path = /*#__PURE__*/ _interop_require_default(require("path"));
var _findup = /*#__PURE__*/ _interop_require_default(require("find-up"));
var _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
* Returns the source and output paths from the nearest tsconfig.json file.
* If no tsconfig.json file is found, returns the current working directory.
* @returns An object containing the source and output paths.
*/ var getTSConfigPaths = function() {
    var tsConfigPath = _findup.default.sync("tsconfig.json");
    if (!tsConfigPath) {
        return {
            srcPath: process.cwd(),
            outPath: process.cwd()
        };
    }
    try {
        var _tsConfig_compilerOptions, _tsConfig_compilerOptions1;
        // Read the file as a string and remove trailing commas
        var rawTsConfig = _fs.default.readFileSync(tsConfigPath, "utf-8").replace(/,\s*]/g, "]").replace(/,\s*}/g, "}");
        var tsConfig = JSON.parse(rawTsConfig);
        var srcPath = ((_tsConfig_compilerOptions = tsConfig.compilerOptions) === null || _tsConfig_compilerOptions === void 0 ? void 0 : _tsConfig_compilerOptions.rootDir) || process.cwd();
        var outPath = ((_tsConfig_compilerOptions1 = tsConfig.compilerOptions) === null || _tsConfig_compilerOptions1 === void 0 ? void 0 : _tsConfig_compilerOptions1.outDir) || process.cwd();
        return {
            srcPath: srcPath,
            outPath: outPath
        };
    } catch (error) {
        console.error("Error parsing tsconfig.json: ".concat(error)); // Do not throw the error, as we can still continue with the other config path finding methods
        return {
            srcPath: process.cwd(),
            outPath: process.cwd()
        };
    }
};
/**
 * Searches for a Payload configuration file.
 * @returns The absolute path to the Payload configuration file.
 * @throws An error if no configuration file is found.
 */ var findConfig = function() {
    // If the developer has specified a config path,
    // format it if relative and use it directly if absolute
    if (process.env.PAYLOAD_CONFIG_PATH) {
        if (_path.default.isAbsolute(process.env.PAYLOAD_CONFIG_PATH)) {
            return process.env.PAYLOAD_CONFIG_PATH;
        }
        return _path.default.resolve(process.cwd(), process.env.PAYLOAD_CONFIG_PATH);
    }
    var _getTSConfigPaths = getTSConfigPaths(), srcPath = _getTSConfigPaths.srcPath, outPath = _getTSConfigPaths.outPath;
    var searchPaths = process.env.NODE_ENV === "production" ? [
        outPath,
        srcPath
    ] : [
        srcPath
    ];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        // eslint-disable-next-line no-restricted-syntax
        for(var _iterator = searchPaths[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var searchPath = _step.value;
            var configPath = _findup.default.sync(function(dir) {
                var tsPath = _path.default.join(dir, "payload.config.ts");
                var hasTS = _findup.default.sync.exists(tsPath);
                if (hasTS) {
                    return tsPath;
                }
                var jsPath = _path.default.join(dir, "payload.config.js");
                var hasJS = _findup.default.sync.exists(jsPath);
                if (hasJS) {
                    return jsPath;
                }
                return undefined;
            }, {
                cwd: searchPath
            });
            if (configPath) {
                return configPath;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    // If no config file is found in the directories defined by tsconfig.json,
    // try searching in the 'src' and 'dist' directory as a last resort, as they are most commonly used
    if (process.env.NODE_ENV === "production") {
        var distConfigPath = _findup.default.sync([
            "payload.config.js",
            "payload.config.ts"
        ], {
            cwd: _path.default.resolve(process.cwd(), "dist")
        });
        if (distConfigPath) return distConfigPath;
    } else {
        var srcConfigPath = _findup.default.sync([
            "payload.config.js",
            "payload.config.ts"
        ], {
            cwd: _path.default.resolve(process.cwd(), "src")
        });
        if (srcConfigPath) return srcConfigPath;
    }
    throw new Error('Error: cannot find Payload config. Please create a configuration file located at the root of your current working directory called "payload.config.js" or "payload.config.ts".');
};
var _default = findConfig;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25maWcvZmluZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBmaW5kVXAgZnJvbSAnZmluZC11cCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuXG4vKipcbiogUmV0dXJucyB0aGUgc291cmNlIGFuZCBvdXRwdXQgcGF0aHMgZnJvbSB0aGUgbmVhcmVzdCB0c2NvbmZpZy5qc29uIGZpbGUuXG4qIElmIG5vIHRzY29uZmlnLmpzb24gZmlsZSBpcyBmb3VuZCwgcmV0dXJucyB0aGUgY3VycmVudCB3b3JraW5nIGRpcmVjdG9yeS5cbiogQHJldHVybnMgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHNvdXJjZSBhbmQgb3V0cHV0IHBhdGhzLlxuKi9cbmNvbnN0IGdldFRTQ29uZmlnUGF0aHMgPSAoKTogeyBzcmNQYXRoOiBzdHJpbmcsIG91dFBhdGg6IHN0cmluZyB9ID0+IHtcbiAgY29uc3QgdHNDb25maWdQYXRoID0gZmluZFVwLnN5bmMoJ3RzY29uZmlnLmpzb24nKTtcblxuICBpZiAoIXRzQ29uZmlnUGF0aCkge1xuICAgIHJldHVybiB7IHNyY1BhdGg6IHByb2Nlc3MuY3dkKCksIG91dFBhdGg6IHByb2Nlc3MuY3dkKCkgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gUmVhZCB0aGUgZmlsZSBhcyBhIHN0cmluZyBhbmQgcmVtb3ZlIHRyYWlsaW5nIGNvbW1hc1xuICAgIGNvbnN0IHJhd1RzQ29uZmlnID0gZnMucmVhZEZpbGVTeW5jKHRzQ29uZmlnUGF0aCwgJ3V0Zi04JylcbiAgICAgIC5yZXBsYWNlKC8sXFxzKl0vZywgJ10nKVxuICAgICAgLnJlcGxhY2UoLyxcXHMqfS9nLCAnfScpO1xuXG4gICAgY29uc3QgdHNDb25maWcgPSBKU09OLnBhcnNlKHJhd1RzQ29uZmlnKTtcblxuICAgIGNvbnN0IHNyY1BhdGggPSB0c0NvbmZpZy5jb21waWxlck9wdGlvbnM/LnJvb3REaXIgfHwgcHJvY2Vzcy5jd2QoKTtcbiAgICBjb25zdCBvdXRQYXRoID0gdHNDb25maWcuY29tcGlsZXJPcHRpb25zPy5vdXREaXIgfHwgcHJvY2Vzcy5jd2QoKTtcblxuICAgIHJldHVybiB7IHNyY1BhdGgsIG91dFBhdGggfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBFcnJvciBwYXJzaW5nIHRzY29uZmlnLmpzb246ICR7ZXJyb3J9YCk7IC8vIERvIG5vdCB0aHJvdyB0aGUgZXJyb3IsIGFzIHdlIGNhbiBzdGlsbCBjb250aW51ZSB3aXRoIHRoZSBvdGhlciBjb25maWcgcGF0aCBmaW5kaW5nIG1ldGhvZHNcbiAgICByZXR1cm4geyBzcmNQYXRoOiBwcm9jZXNzLmN3ZCgpLCBvdXRQYXRoOiBwcm9jZXNzLmN3ZCgpIH07XG4gIH1cbn07XG5cblxuLyoqXG4gKiBTZWFyY2hlcyBmb3IgYSBQYXlsb2FkIGNvbmZpZ3VyYXRpb24gZmlsZS5cbiAqIEByZXR1cm5zIFRoZSBhYnNvbHV0ZSBwYXRoIHRvIHRoZSBQYXlsb2FkIGNvbmZpZ3VyYXRpb24gZmlsZS5cbiAqIEB0aHJvd3MgQW4gZXJyb3IgaWYgbm8gY29uZmlndXJhdGlvbiBmaWxlIGlzIGZvdW5kLlxuICovXG5jb25zdCBmaW5kQ29uZmlnID0gKCk6IHN0cmluZyA9PiB7XG4gIC8vIElmIHRoZSBkZXZlbG9wZXIgaGFzIHNwZWNpZmllZCBhIGNvbmZpZyBwYXRoLFxuICAvLyBmb3JtYXQgaXQgaWYgcmVsYXRpdmUgYW5kIHVzZSBpdCBkaXJlY3RseSBpZiBhYnNvbHV0ZVxuICBpZiAocHJvY2Vzcy5lbnYuUEFZTE9BRF9DT05GSUdfUEFUSCkge1xuICAgIGlmIChwYXRoLmlzQWJzb2x1dGUocHJvY2Vzcy5lbnYuUEFZTE9BRF9DT05GSUdfUEFUSCkpIHtcbiAgICAgIHJldHVybiBwcm9jZXNzLmVudi5QQVlMT0FEX0NPTkZJR19QQVRIO1xuICAgIH1cblxuICAgIHJldHVybiBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgcHJvY2Vzcy5lbnYuUEFZTE9BRF9DT05GSUdfUEFUSCk7XG4gIH1cblxuICBjb25zdCB7IHNyY1BhdGgsIG91dFBhdGggfSA9IGdldFRTQ29uZmlnUGF0aHMoKTtcblxuICBjb25zdCBzZWFyY2hQYXRocyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyBbb3V0UGF0aCwgc3JjUGF0aF0gOiBbc3JjUGF0aF07XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gIGZvciAoY29uc3Qgc2VhcmNoUGF0aCBvZiBzZWFyY2hQYXRocykge1xuICAgIGNvbnN0IGNvbmZpZ1BhdGggPSBmaW5kVXAuc3luYygoZGlyKSA9PiB7XG4gICAgICBjb25zdCB0c1BhdGggPSBwYXRoLmpvaW4oZGlyLCAncGF5bG9hZC5jb25maWcudHMnKTtcbiAgICAgIGNvbnN0IGhhc1RTID0gZmluZFVwLnN5bmMuZXhpc3RzKHRzUGF0aCk7XG5cbiAgICAgIGlmIChoYXNUUykge1xuICAgICAgICByZXR1cm4gdHNQYXRoO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBqc1BhdGggPSBwYXRoLmpvaW4oZGlyLCAncGF5bG9hZC5jb25maWcuanMnKTtcbiAgICAgIGNvbnN0IGhhc0pTID0gZmluZFVwLnN5bmMuZXhpc3RzKGpzUGF0aCk7XG5cbiAgICAgIGlmIChoYXNKUykge1xuICAgICAgICByZXR1cm4ganNQYXRoO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0sIHsgY3dkOiBzZWFyY2hQYXRoIH0pO1xuXG4gICAgaWYgKGNvbmZpZ1BhdGgpIHtcbiAgICAgIHJldHVybiBjb25maWdQYXRoO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIG5vIGNvbmZpZyBmaWxlIGlzIGZvdW5kIGluIHRoZSBkaXJlY3RvcmllcyBkZWZpbmVkIGJ5IHRzY29uZmlnLmpzb24sXG4gIC8vIHRyeSBzZWFyY2hpbmcgaW4gdGhlICdzcmMnIGFuZCAnZGlzdCcgZGlyZWN0b3J5IGFzIGEgbGFzdCByZXNvcnQsIGFzIHRoZXkgYXJlIG1vc3QgY29tbW9ubHkgdXNlZFxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IGRpc3RDb25maWdQYXRoID0gZmluZFVwLnN5bmMoWydwYXlsb2FkLmNvbmZpZy5qcycsICdwYXlsb2FkLmNvbmZpZy50cyddLCB7IGN3ZDogcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdkaXN0JykgfSk7XG5cbiAgICBpZiAoZGlzdENvbmZpZ1BhdGgpIHJldHVybiBkaXN0Q29uZmlnUGF0aDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzcmNDb25maWdQYXRoID0gZmluZFVwLnN5bmMoWydwYXlsb2FkLmNvbmZpZy5qcycsICdwYXlsb2FkLmNvbmZpZy50cyddLCB7IGN3ZDogcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMnKSB9KTtcblxuICAgIGlmIChzcmNDb25maWdQYXRoKSByZXR1cm4gc3JjQ29uZmlnUGF0aDtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcignRXJyb3I6IGNhbm5vdCBmaW5kIFBheWxvYWQgY29uZmlnLiBQbGVhc2UgY3JlYXRlIGEgY29uZmlndXJhdGlvbiBmaWxlIGxvY2F0ZWQgYXQgdGhlIHJvb3Qgb2YgeW91ciBjdXJyZW50IHdvcmtpbmcgZGlyZWN0b3J5IGNhbGxlZCBcInBheWxvYWQuY29uZmlnLmpzXCIgb3IgXCJwYXlsb2FkLmNvbmZpZy50c1wiLicpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZENvbmZpZztcbiJdLCJuYW1lcyI6WyJnZXRUU0NvbmZpZ1BhdGhzIiwidHNDb25maWdQYXRoIiwiZmluZFVwIiwic3luYyIsInNyY1BhdGgiLCJwcm9jZXNzIiwiY3dkIiwib3V0UGF0aCIsInRzQ29uZmlnIiwicmF3VHNDb25maWciLCJmcyIsInJlYWRGaWxlU3luYyIsInJlcGxhY2UiLCJKU09OIiwicGFyc2UiLCJjb21waWxlck9wdGlvbnMiLCJyb290RGlyIiwib3V0RGlyIiwiZXJyb3IiLCJjb25zb2xlIiwiZmluZENvbmZpZyIsImVudiIsIlBBWUxPQURfQ09ORklHX1BBVEgiLCJwYXRoIiwiaXNBYnNvbHV0ZSIsInJlc29sdmUiLCJzZWFyY2hQYXRocyIsIk5PREVfRU5WIiwic2VhcmNoUGF0aCIsImNvbmZpZ1BhdGgiLCJkaXIiLCJ0c1BhdGgiLCJqb2luIiwiaGFzVFMiLCJleGlzdHMiLCJqc1BhdGgiLCJoYXNKUyIsInVuZGVmaW5lZCIsImRpc3RDb25maWdQYXRoIiwic3JjQ29uZmlnUGF0aCIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7OytCQStGQTs7O2VBQUE7OzsyREEvRmlCOzZEQUNFO3lEQUNKOzs7Ozs7QUFFZjs7OztBQUlBLEdBQ0EsSUFBTUEsbUJBQW1CO0lBQ3ZCLElBQU1DLGVBQWVDLGVBQU0sQ0FBQ0MsSUFBSSxDQUFDO0lBRWpDLElBQUksQ0FBQ0YsY0FBYztRQUNqQixPQUFPO1lBQUVHLFNBQVNDLFFBQVFDLEdBQUc7WUFBSUMsU0FBU0YsUUFBUUMsR0FBRztRQUFHO0lBQzFEO0lBRUEsSUFBSTtZQVFjRSwyQkFDQUE7UUFSaEIsdURBQXVEO1FBQ3ZELElBQU1DLGNBQWNDLFdBQUUsQ0FBQ0MsWUFBWSxDQUFDVixjQUFjLFNBQy9DVyxPQUFPLENBQUMsVUFBVSxLQUNsQkEsT0FBTyxDQUFDLFVBQVU7UUFFckIsSUFBTUosV0FBV0ssS0FBS0MsS0FBSyxDQUFDTDtRQUU1QixJQUFNTCxVQUFVSSxFQUFBQSw0QkFBQUEsU0FBU08sZUFBZSxjQUF4QlAsZ0RBQUFBLDBCQUEwQlEsT0FBTyxLQUFJWCxRQUFRQyxHQUFHO1FBQ2hFLElBQU1DLFVBQVVDLEVBQUFBLDZCQUFBQSxTQUFTTyxlQUFlLGNBQXhCUCxpREFBQUEsMkJBQTBCUyxNQUFNLEtBQUlaLFFBQVFDLEdBQUc7UUFFL0QsT0FBTztZQUFFRixTQUFBQTtZQUFTRyxTQUFBQTtRQUFRO0lBQzVCLEVBQUUsT0FBT1cs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