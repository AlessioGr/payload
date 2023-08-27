"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "afterRead", {
    enumerable: true,
    get: function() {
        return afterRead;
    }
});
var _traverseFields = require("./traverseFields");
var _deepCopyObject = /*#__PURE__*/ _interop_require_default(require("../../../utilities/deepCopyObject"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
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
function afterRead(args) {
    return _afterRead.apply(this, arguments);
}
function _afterRead() {
    _afterRead = _async_to_generator(function(args) {
        var incomingCurrentDepth, incomingDepth, incomingDoc, entityConfig, findMany, _args_flattenLocales, flattenLocales, req, overrideAccess, showHiddenFields, context, doc, fieldPromises, populationPromises, depth, currentDepth;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    incomingCurrentDepth = args.currentDepth, incomingDepth = args.depth, incomingDoc = args.doc, entityConfig = args.entityConfig, findMany = args.findMany, _args_flattenLocales = args.flattenLocales, flattenLocales = _args_flattenLocales === void 0 ? true : _args_flattenLocales, req = args.req, overrideAccess = args.overrideAccess, showHiddenFields = args.showHiddenFields, context = args.context;
                    doc = (0, _deepCopyObject.default)(incomingDoc);
                    fieldPromises = [];
                    populationPromises = [];
                    depth = incomingDepth || incomingDepth === 0 ? parseInt(String(incomingDepth), 10) : req.payload.config.defaultDepth;
                    if (depth > req.payload.config.maxDepth) depth = req.payload.config.maxDepth;
                    currentDepth = incomingCurrentDepth || 1;
                    (0, _traverseFields.traverseFields)({
                        currentDepth: currentDepth,
                        depth: depth,
                        doc: doc,
                        fields: entityConfig.fields,
                        fieldPromises: fieldPromises,
                        findMany: findMany,
                        flattenLocales: flattenLocales,
                        overrideAccess: overrideAccess,
                        populationPromises: populationPromises,
                        req: req,
                        siblingDoc: doc,
                        showHiddenFields: showHiddenFields,
                        context: context
                    });
                    return [
                        4,
                        Promise.all(fieldPromises)
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        Promise.all(populationPromises)
                    ];
                case 2:
                    _state.sent();
                    return [
                        2,
                        doc
                    ];
            }
        });
    });
    return _afterRead.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9maWVsZHMvaG9va3MvYWZ0ZXJSZWFkL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFscy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QsIFJlcXVlc3RDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgeyB0cmF2ZXJzZUZpZWxkcyB9IGZyb20gJy4vdHJhdmVyc2VGaWVsZHMnO1xuaW1wb3J0IGRlZXBDb3B5T2JqZWN0IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9kZWVwQ29weU9iamVjdCc7XG5cbnR5cGUgQXJncyA9IHtcbiAgY3VycmVudERlcHRoPzogbnVtYmVyXG4gIGRlcHRoOiBudW1iZXJcbiAgZG9jOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBlbnRpdHlDb25maWc6IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfCBTYW5pdGl6ZWRHbG9iYWxDb25maWdcbiAgZmluZE1hbnk/OiBib29sZWFuXG4gIGZsYXR0ZW5Mb2NhbGVzPzogYm9vbGVhblxuICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gIG92ZXJyaWRlQWNjZXNzOiBib29sZWFuXG4gIHNob3dIaWRkZW5GaWVsZHM6IGJvb2xlYW5cbiAgY29udGV4dDogUmVxdWVzdENvbnRleHRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFmdGVyUmVhZDxUID0gYW55PihhcmdzOiBBcmdzKTogUHJvbWlzZTxUPiB7XG4gIGNvbnN0IHtcbiAgICBjdXJyZW50RGVwdGg6IGluY29taW5nQ3VycmVudERlcHRoLFxuICAgIGRlcHRoOiBpbmNvbWluZ0RlcHRoLFxuICAgIGRvYzogaW5jb21pbmdEb2MsXG4gICAgZW50aXR5Q29uZmlnLFxuICAgIGZpbmRNYW55LFxuICAgIGZsYXR0ZW5Mb2NhbGVzID0gdHJ1ZSxcbiAgICByZXEsXG4gICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICBjb250ZXh0LFxuICB9ID0gYXJncztcblxuICBjb25zdCBkb2MgPSBkZWVwQ29weU9iamVjdChpbmNvbWluZ0RvYyk7XG4gIGNvbnN0IGZpZWxkUHJvbWlzZXMgPSBbXTtcbiAgY29uc3QgcG9wdWxhdGlvblByb21pc2VzID0gW107XG5cbiAgbGV0IGRlcHRoID0gKGluY29taW5nRGVwdGggfHwgaW5jb21pbmdEZXB0aCA9PT0gMCkgPyBwYXJzZUludChTdHJpbmcoaW5jb21pbmdEZXB0aCksIDEwKSA6IHJlcS5wYXlsb2FkLmNvbmZpZy5kZWZhdWx0RGVwdGg7XG4gIGlmIChkZXB0aCA+IHJlcS5wYXlsb2FkLmNvbmZpZy5tYXhEZXB0aCkgZGVwdGggPSByZXEucGF5bG9hZC5jb25maWcubWF4RGVwdGg7XG5cbiAgY29uc3QgY3VycmVudERlcHRoID0gaW5jb21pbmdDdXJyZW50RGVwdGggfHwgMTtcblxuICB0cmF2ZXJzZUZpZWxkcyh7XG4gICAgY3VycmVudERlcHRoLFxuICAgIGRlcHRoLFxuICAgIGRvYyxcbiAgICBmaWVsZHM6IGVudGl0eUNvbmZpZy5maWVsZHMsXG4gICAgZmllbGRQcm9taXNlcyxcbiAgICBmaW5kTWFueSxcbiAgICBmbGF0dGVuTG9jYWxlcyxcbiAgICBvdmVycmlkZUFjY2VzcyxcbiAgICBwb3B1bGF0aW9uUHJvbWlzZXMsXG4gICAgcmVxLFxuICAgIHNpYmxpbmdEb2M6IGRvYyxcbiAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgIGNvbnRleHQsXG4gIH0pO1xuXG4gIGF3YWl0IFByb21pc2UuYWxsKGZpZWxkUHJvbWlzZXMpO1xuICBhd2FpdCBQcm9taXNlLmFsbChwb3B1bGF0aW9uUHJvbWlzZXMpO1xuXG4gIHJldHVybiBkb2M7XG59XG4iXSwibmFtZXMiOlsiYWZ0ZXJSZWFkIiwiYXJncyIsImluY29taW5nQ3VycmVudERlcHRoIiwiaW5jb21pbmdEZXB0aCIsImluY29taW5nRG9jIiwiZW50aXR5Q29uZmlnIiwiZmluZE1hbnkiLCJmbGF0dGVuTG9jYWxlcyIsInJlcSIsIm92ZXJyaWRlQWNjZXNzIiwic2hvd0hpZGRlbkZpZWxkcyIsImNvbnRleHQiLCJkb2MiLCJmaWVsZFByb21pc2VzIiwicG9wdWxhdGlvblByb21pc2VzIiwiZGVwdGgiLCJjdXJyZW50RGVwdGgiLCJkZWVwQ29weU9iamVjdCIsInBhcnNlSW50IiwiU3RyaW5nIiwicGF5bG9hZCIsImNvbmZpZyIsImRlZmF1bHREZXB0aCIsIm1heERlcHRoIiwidHJhdmVyc2VGaWVsZHMiLCJmaWVsZHMiLCJzaWJsaW5nRG9jIiwiUHJvbWlzZSIsImFsbCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFtQnNCQTs7O2VBQUFBOzs7OEJBaEJTO3FFQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBZUxBLFVBQW1CQyxJQUFVO1dBQTdCRDs7U0FBQUE7SUFBQUEsYUFBZixvQkFBQSxTQUFrQ0MsSUFBVTtZQUVqQ0Msc0JBQ1BDLGVBQ0ZDLGFBQ0xDLGNBQ0FDLGdDQUNBQyxnQkFDQUMsS0FDQUMsZ0JBQ0FDLGtCQUNBQyxTQUdJQyxLQUNBQyxlQUNBQyxvQkFFRkMsT0FHRUM7Ozs7b0JBbkJVZCx1QkFVWkQsS0FWRmUsY0FDT2IsZ0JBU0xGLEtBVEZjLE9BQ0tYLGNBUUhILEtBUkZXLEtBQ0FQLGVBT0VKLEtBUEZJLGNBQ0FDLFdBTUVMLEtBTkZLLGlDQU1FTCxLQUxGTSxnQkFBQUEsbURBQWlCLDZCQUNqQkMsTUFJRVAsS0FKRk8sS0FDQUMsaUJBR0VSLEtBSEZRLGdCQUNBQyxtQkFFRVQsS0FGRlMsa0JBQ0FDLFVBQ0VWLEtBREZVO29CQUdJQyxNQUFNSyxJQUFBQSx1QkFBYyxFQUFDYjtvQkFDckJTO29CQUNBQztvQkFFRkMsUUFBUSxBQUFDWixpQkFBaUJBLGtCQUFrQixJQUFLZSxTQUFTQyxPQUFPaEIsZ0JBQWdCLE1BQU1LLElBQUlZLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxZQUFZO29CQUMxSCxJQUFJUCxRQUFRUCxJQUFJWSxPQUFPLENBQUNDLE1BQU0sQ0FBQ0UsUUFBUSxFQUFFUixRQUFRUCxJQUFJWSxPQUFPLENBQUNDLE1BQU0sQ0FBQ0UsUUFBUTtvQkFFdEVQLGVBQWVkLHdCQUF3QjtvQkFFN0NzQixJQUFBQSw4QkFBYyxFQUFDO3dCQUNiUixjQUFBQTt3QkFDQUQsT0FBQUE7d0JBQ0FILEtBQUFBO3dCQUNBYSxRQUFRcEIsYUFBYW9CLE1BQU07d0JBQzNCWixlQUFBQTt3QkFDQVAsVUFBQUE7d0JBQ0FDLGdCQUFBQTt3QkFDQUUsZ0JBQUFBO3dCQUNBSyxvQkFBQUE7d0JBQ0FOLEtBQUFBO3dCQUNBa0IsWUFBWWQ7d0JBQ1pGLGtCQUFBQTt3QkFDQUMsU0FBQUE7b0JBQ0Y7b0JBRUE7O3dCQUFNZ0IsUUFBUUMsR0FBRyxDQUFDZjs7O29CQUFsQjtvQkFDQTs7d0JBQU1jLFFBQVFDLEdBQUcsQ0FBQ2Q7OztvQkFBbEI7b0JBRUE7O3dCQUFPRjs7OztJQUNUO1dBM0NzQloifQ==