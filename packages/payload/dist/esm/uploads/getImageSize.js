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
import fs from "fs";
import probeImageSize from "probe-image-size";
export default function(file) {
    return _ref.apply(this, arguments);
}
function _ref() {
    _ref = _async_to_generator(function(file) {
        var data;
        return _ts_generator(this, function(_state) {
            if (file.tempFilePath) {
                data = fs.readFileSync(file.tempFilePath);
                return [
                    2,
                    probeImageSize.sync(data)
                ];
            }
            return [
                2,
                probeImageSize.sync(file.data)
            ];
        });
    });
    return _ref.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91cGxvYWRzL2dldEltYWdlU2l6ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHByb2JlSW1hZ2VTaXplIGZyb20gJ3Byb2JlLWltYWdlLXNpemUnO1xuaW1wb3J0IHsgVXBsb2FkZWRGaWxlIH0gZnJvbSAnZXhwcmVzcy1maWxldXBsb2FkJztcbmltcG9ydCB7IFByb2JlZEltYWdlU2l6ZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAoZmlsZTogVXBsb2FkZWRGaWxlKTogUHJvbWlzZTxQcm9iZWRJbWFnZVNpemU+IHtcbiAgaWYgKGZpbGUudGVtcEZpbGVQYXRoKSB7XG4gICAgY29uc3QgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlLnRlbXBGaWxlUGF0aCk7XG4gICAgcmV0dXJuIHByb2JlSW1hZ2VTaXplLnN5bmMoZGF0YSk7XG4gIH1cblxuICByZXR1cm4gcHJvYmVJbWFnZVNpemUuc3luYyhmaWxlLmRhdGEpO1xufVxuIl0sIm5hbWVzIjpbImZzIiwicHJvYmVJbWFnZVNpemUiLCJmaWxlIiwiZGF0YSIsInRlbXBGaWxlUGF0aCIsInJlYWRGaWxlU3luYyIsInN5bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxRQUFRLEtBQUs7QUFDcEIsT0FBT0Msb0JBQW9CLG1CQUFtQjtBQUk5Qyx3QkFBK0JDLElBQWtCOzs7O1dBQWxDLG9CQUFBLFNBQWdCQSxJQUFrQjtZQUV2Q0M7O1lBRFIsSUFBSUQsS0FBS0UsWUFBWSxFQUFFO2dCQUNmRCxPQUFPSCxHQUFHSyxZQUFZLENBQUNILEtBQUtFLFlBQVk7Z0JBQzlDOztvQkFBT0gsZUFBZUssSUFBSSxDQUFDSDs7WUFDN0I7WUFFQTs7Z0JBQU9GLGVBQWVLLElBQUksQ0FBQ0osS0FBS0MsSUFBSTs7O0lBQ3RDIn0=