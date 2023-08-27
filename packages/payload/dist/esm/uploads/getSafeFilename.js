function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import sanitize from "sanitize-filename";
import docWithFilenameExists from "./docWithFilenameExists";
import fileExists from "./fileExists";
var incrementName = function(name) {
    var extension = name.split(".").pop();
    var baseFilename = sanitize(name.substring(0, name.lastIndexOf(".")) || name);
    var incrementedName = baseFilename;
    var regex = /(.*)-(\d+)$/;
    var found = baseFilename.match(regex);
    if (found === null) {
        incrementedName += "-1";
    } else {
        var matchedName = found[1];
        var matchedNumber = found[2];
        var incremented = Number(matchedNumber) + 1;
        incrementedName = "".concat(matchedName, "-").concat(incremented);
    }
    return "".concat(incrementedName, ".").concat(extension);
};
function getSafeFileName(payload, collectionSlug, staticPath, desiredFilename) {
    return _getSafeFileName.apply(this, arguments);
}
function _getSafeFileName() {
    _getSafeFileName = _async_to_generator(function(payload, collectionSlug, staticPath, desiredFilename) {
        var modifiedFilename, _tmp;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    modifiedFilename = desiredFilename;
                    _state.label = 1;
                case 1:
                    return [
                        4,
                        docWithFilenameExists(payload, collectionSlug, staticPath, modifiedFilename)
                    ];
                case 2:
                    _tmp = _state.sent();
                    if (_tmp) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        fileExists("".concat(staticPath, "/").concat(modifiedFilename))
                    ];
                case 3:
                    _tmp = _state.sent();
                    _state.label = 4;
                case 4:
                    if (!_tmp) return [
                        3,
                        5
                    ];
                    modifiedFilename = incrementName(modifiedFilename);
                    return [
                        3,
                        1
                    ];
                case 5:
                    return [
                        2,
                        modifiedFilename
                    ];
            }
        });
    });
    return _getSafeFileName.apply(this, arguments);
}
export default getSafeFileName;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91cGxvYWRzL2dldFNhZmVGaWxlbmFtZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2FuaXRpemUgZnJvbSAnc2FuaXRpemUtZmlsZW5hbWUnO1xuaW1wb3J0IGRvY1dpdGhGaWxlbmFtZUV4aXN0cyBmcm9tICcuL2RvY1dpdGhGaWxlbmFtZUV4aXN0cyc7XG5pbXBvcnQgZmlsZUV4aXN0cyBmcm9tICcuL2ZpbGVFeGlzdHMnO1xuaW1wb3J0IHsgUGF5bG9hZCB9IGZyb20gJy4uJztcblxuY29uc3QgaW5jcmVtZW50TmFtZSA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZXh0ZW5zaW9uID0gbmFtZS5zcGxpdCgnLicpLnBvcCgpO1xuICBjb25zdCBiYXNlRmlsZW5hbWUgPSBzYW5pdGl6ZShuYW1lLnN1YnN0cmluZygwLCBuYW1lLmxhc3RJbmRleE9mKCcuJykpIHx8IG5hbWUpO1xuICBsZXQgaW5jcmVtZW50ZWROYW1lID0gYmFzZUZpbGVuYW1lO1xuICBjb25zdCByZWdleCA9IC8oLiopLShcXGQrKSQvO1xuICBjb25zdCBmb3VuZCA9IGJhc2VGaWxlbmFtZS5tYXRjaChyZWdleCk7XG4gIGlmIChmb3VuZCA9PT0gbnVsbCkge1xuICAgIGluY3JlbWVudGVkTmFtZSArPSAnLTEnO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG1hdGNoZWROYW1lID0gZm91bmRbMV07XG4gICAgY29uc3QgbWF0Y2hlZE51bWJlciA9IGZvdW5kWzJdO1xuICAgIGNvbnN0IGluY3JlbWVudGVkID0gTnVtYmVyKG1hdGNoZWROdW1iZXIpICsgMTtcbiAgICBpbmNyZW1lbnRlZE5hbWUgPSBgJHttYXRjaGVkTmFtZX0tJHtpbmNyZW1lbnRlZH1gO1xuICB9XG4gIHJldHVybiBgJHtpbmNyZW1lbnRlZE5hbWV9LiR7ZXh0ZW5zaW9ufWA7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBnZXRTYWZlRmlsZU5hbWUocGF5bG9hZDogUGF5bG9hZCwgY29sbGVjdGlvblNsdWc6IHN0cmluZywgc3RhdGljUGF0aDogc3RyaW5nLCBkZXNpcmVkRmlsZW5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGxldCBtb2RpZmllZEZpbGVuYW1lID0gZGVzaXJlZEZpbGVuYW1lO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG4gIHdoaWxlIChhd2FpdCBkb2NXaXRoRmlsZW5hbWVFeGlzdHMocGF5bG9hZCwgY29sbGVjdGlvblNsdWcsIHN0YXRpY1BhdGgsIG1vZGlmaWVkRmlsZW5hbWUpIHx8IGF3YWl0IGZpbGVFeGlzdHMoYCR7c3RhdGljUGF0aH0vJHttb2RpZmllZEZpbGVuYW1lfWApKSB7XG4gICAgbW9kaWZpZWRGaWxlbmFtZSA9IGluY3JlbWVudE5hbWUobW9kaWZpZWRGaWxlbmFtZSk7XG4gIH1cbiAgcmV0dXJuIG1vZGlmaWVkRmlsZW5hbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFNhZmVGaWxlTmFtZTtcbiJdLCJuYW1lcyI6WyJzYW5pdGl6ZSIsImRvY1dpdGhGaWxlbmFtZUV4aXN0cyIsImZpbGVFeGlzdHMiLCJpbmNyZW1lbnROYW1lIiwibmFtZSIsImV4dGVuc2lvbiIsInNwbGl0IiwicG9wIiwiYmFzZUZpbGVuYW1lIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJpbmNyZW1lbnRlZE5hbWUiLCJyZWdleCIsImZvdW5kIiwibWF0Y2giLCJtYXRjaGVkTmFtZSIsIm1hdGNoZWROdW1iZXIiLCJpbmNyZW1lbnRlZCIsIk51bWJlciIsImdldFNhZmVGaWxlTmFtZSIsInBheWxvYWQiLCJjb2xsZWN0aW9uU2x1ZyIsInN0YXRpY1BhdGgiLCJkZXNpcmVkRmlsZW5hbWUiLCJtb2RpZmllZEZpbGVuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsY0FBYyxvQkFBb0I7QUFDekMsT0FBT0MsMkJBQTJCLDBCQUEwQjtBQUM1RCxPQUFPQyxnQkFBZ0IsZUFBZTtBQUd0QyxJQUFNQyxnQkFBZ0IsU0FBQ0M7SUFDckIsSUFBTUMsWUFBWUQsS0FBS0UsS0FBSyxDQUFDLEtBQUtDLEdBQUc7SUFDckMsSUFBTUMsZUFBZVIsU0FBU0ksS0FBS0ssU0FBUyxDQUFDLEdBQUdMLEtBQUtNLFdBQVcsQ0FBQyxTQUFTTjtJQUMxRSxJQUFJTyxrQkFBa0JIO0lBQ3RCLElBQU1JLFFBQVE7SUFDZCxJQUFNQyxRQUFRTCxhQUFhTSxLQUFLLENBQUNGO0lBQ2pDLElBQUlDLFVBQVUsTUFBTTtRQUNsQkYsbUJBQW1CO0lBQ3JCLE9BQU87UUFDTCxJQUFNSSxjQUFjRixLQUFLLENBQUMsRUFBRTtRQUM1QixJQUFNRyxnQkFBZ0JILEtBQUssQ0FBQyxFQUFFO1FBQzlCLElBQU1JLGNBQWNDLE9BQU9GLGlCQUFpQjtRQUM1Q0wsa0JBQWtCLEFBQUMsR0FBaUJNLE9BQWZGLGFBQVksS0FBZSxPQUFaRTtJQUN0QztJQUNBLE9BQU8sQUFBQyxHQUFxQlosT0FBbkJNLGlCQUFnQixLQUFhLE9BQVZOO0FBQy9CO1NBRWVjLGdCQUFnQkMsT0FBZ0IsRUFBRUMsY0FBc0IsRUFBRUMsVUFBa0IsRUFBRUMsZUFBdUI7V0FBckdKOztTQUFBQTtJQUFBQSxtQkFBZixvQkFBQSxTQUErQkMsT0FBZ0IsRUFBRUMsY0FBc0IsRUFBRUMsVUFBa0IsRUFBRUMsZUFBdUI7WUFDOUdDOzs7O29CQUFBQSxtQkFBbUJEOzs7b0JBR2hCOzt3QkFBTXRCLHNCQUFzQm1CLFNBQVNDLGdCQUFnQkMsWUFBWUU7OzsyQkFBakU7OEJBQUE7Ozs7b0JBQXNGOzt3QkFBTXRCLFdBQVcsQUFBQyxHQUFnQnNCLE9BQWRGLFlBQVcsS0FBb0IsT0FBakJFOzs7MkJBQWxDOzs7Ozs7O29CQUMzRkEsbUJBQW1CckIsY0FBY3FCOzs7Ozs7b0JBRW5DOzt3QkFBT0E7Ozs7SUFDVDtXQVJlTDs7QUFVZixlQUFlQSxnQkFBZ0IifQ==