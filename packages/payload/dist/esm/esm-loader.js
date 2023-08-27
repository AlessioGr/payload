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
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
export function resolve(specifier, context, next) {
    return _resolve.apply(this, arguments);
}
function _resolve() {
    _resolve = _async_to_generator(function(specifier, context, next) {
        var nextResult;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        next(specifier, context)
                    ];
                case 1:
                    nextResult = _state.sent();
                    if (!specifier.endsWith(".scss")) return [
                        2,
                        nextResult
                    ];
                    return [
                        2,
                        {
                            format: "scss",
                            shortCircuit: true,
                            url: nextResult.url
                        }
                    ];
            }
        });
    });
    return _resolve.apply(this, arguments);
}
export function load(url, context, next) {
    return _load.apply(this, arguments);
}
function _load() {
    _load = _async_to_generator(function(url, context, next) {
        var rawSource, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (context.format !== "scss") return [
                        2,
                        next(url, context)
                    ];
                    _ = "";
                    return [
                        4,
                        fs.readFile(fileURLToPath(url))
                    ];
                case 1:
                    rawSource = _ + _state.sent();
                    return [
                        2,
                        {
                            format: "json",
                            shortCircuit: true,
                            source: JSON.stringify(rawSource)
                        }
                    ];
            }
        });
    });
    return _load.apply(this, arguments);
}
function parseCssToObject(rawSource) {
    var output = {};
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = parseCSS(rawSource).stylesheet.rules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var rule = _step.value;
            var selector = rule["selectors"].at(-1); // Get right-most in the selector rule: `.Bar` in `.Foo > .Bar {…}`
            if (selector[0] !== ".") break; // only care about classes
            selector = selector.substr(1) // Skip the initial `.`
            .match(/(\w+)/)[1]; // Get only the classname: `Qux` in `.Qux[type="number"]`
            output[selector] = loadFullStyles ? getClassStyles(rule["declarations"]) : selector;
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
    return output;
}
function getClassStyles(declarations) {
    var styles = {};
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = declarations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var declaration = _step.value;
            styles[declaration["property"]] = declaration["value"];
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
    return styles;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lc20tbG9hZGVyLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnbm9kZTpmcy9wcm9taXNlcyc7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnO1xuXG5cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZShzcGVjaWZpZXIsIGNvbnRleHQsIG5leHQpIHtcblx0Y29uc3QgbmV4dFJlc3VsdCA9IGF3YWl0IG5leHQoc3BlY2lmaWVyLCBjb250ZXh0KTtcblxuXHRpZiAoIXNwZWNpZmllci5lbmRzV2l0aCgnLnNjc3MnKSkgcmV0dXJuIG5leHRSZXN1bHQ7XG5cblx0cmV0dXJuIHtcblx0XHRmb3JtYXQ6ICdzY3NzJyxcblx0XHRzaG9ydENpcmN1aXQ6IHRydWUsXG5cdFx0dXJsOiBuZXh0UmVzdWx0LnVybCxcblx0fTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWQodXJsLCBjb250ZXh0LCBuZXh0KSB7XG5cdGlmIChjb250ZXh0LmZvcm1hdCAhPT0gJ3Njc3MnKSByZXR1cm4gbmV4dCh1cmwsIGNvbnRleHQpO1xuXG5cdGNvbnN0IHJhd1NvdXJjZSA9ICcnICsgYXdhaXQgZnMucmVhZEZpbGUoZmlsZVVSTFRvUGF0aCh1cmwpKTtcblxuXHRyZXR1cm4ge1xuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdHNob3J0Q2lyY3VpdDogdHJ1ZSxcblx0XHRzb3VyY2U6IEpTT04uc3RyaW5naWZ5KHJhd1NvdXJjZSksXG5cdH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlQ3NzVG9PYmplY3QocmF3U291cmNlKSB7XG5cdGNvbnN0IG91dHB1dCA9IHt9O1xuXG5cdGZvciAoY29uc3QgcnVsZSBvZiBwYXJzZUNTUyhyYXdTb3VyY2UpLnN0eWxlc2hlZXQucnVsZXMpIHtcblx0XHRsZXQgc2VsZWN0b3IgPSBydWxlWydzZWxlY3RvcnMnXS5hdCgtMSk7IC8vIEdldCByaWdodC1tb3N0IGluIHRoZSBzZWxlY3RvciBydWxlOiBgLkJhcmAgaW4gYC5Gb28gPiAuQmFyIHvigKZ9YFxuXHRcdGlmIChzZWxlY3RvclswXSAhPT0gJy4nKSBicmVhazsgLy8gb25seSBjYXJlIGFib3V0IGNsYXNzZXNcblxuXHRcdHNlbGVjdG9yID0gc2VsZWN0b3Jcblx0XHRcdC5zdWJzdHIoMSkgLy8gU2tpcCB0aGUgaW5pdGlhbCBgLmBcblx0XHRcdC5tYXRjaCgvKFxcdyspLylbMV07IC8vIEdldCBvbmx5IHRoZSBjbGFzc25hbWU6IGBRdXhgIGluIGAuUXV4W3R5cGU9XCJudW1iZXJcIl1gXG5cblx0XHRvdXRwdXRbc2VsZWN0b3JdID0gbG9hZEZ1bGxTdHlsZXNcblx0XHRcdD8gZ2V0Q2xhc3NTdHlsZXMocnVsZVsnZGVjbGFyYXRpb25zJ10pXG5cdFx0XHQ6IHNlbGVjdG9yO1xuXHR9XG5cblx0cmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xhc3NTdHlsZXMoZGVjbGFyYXRpb25zKSB7XG5cdGNvbnN0IHN0eWxlcyA9IHt9O1xuXG5cdGZvciAoY29uc3QgZGVjbGFyYXRpb24gb2YgZGVjbGFyYXRpb25zKSB7XG4gICAgc3R5bGVzW2RlY2xhcmF0aW9uWydwcm9wZXJ0eSddXSA9IGRlY2xhcmF0aW9uWyd2YWx1ZSddO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn0iXSwibmFtZXMiOlsiZnMiLCJmaWxlVVJMVG9QYXRoIiwicmVzb2x2ZSIsInNwZWNpZmllciIsImNvbnRleHQiLCJuZXh0IiwibmV4dFJlc3VsdCIsImVuZHNXaXRoIiwiZm9ybWF0Iiwic2hvcnRDaXJjdWl0IiwidXJsIiwibG9hZCIsInJhd1NvdXJjZSIsInJlYWRGaWxlIiwic291cmNlIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlQ3NzVG9PYmplY3QiLCJvdXRwdXQiLCJwYXJzZUNTUyIsInN0eWxlc2hlZXQiLCJydWxlcyIsInJ1bGUiLCJzZWxlY3RvciIsImF0Iiwic3Vic3RyIiwibWF0Y2giLCJsb2FkRnVsbFN0eWxlcyIsImdldENsYXNzU3R5bGVzIiwiZGVjbGFyYXRpb25zIiwic3R5bGVzIiwiZGVjbGFyYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxRQUFRLG1CQUFtQjtBQUNsQyxTQUFTQyxhQUFhLFFBQVEsV0FBVztBQUt6QyxnQkFBc0JDLFFBQVFDLFNBQVMsRUFBRUMsT0FBTyxFQUFFQyxJQUFJO1dBQWhDSDs7U0FBQUE7SUFBQUEsV0FBZixvQkFBQSxTQUF1QkMsU0FBUyxFQUFFQyxPQUFPLEVBQUVDLElBQUk7WUFDL0NDOzs7O29CQUFhOzt3QkFBTUQsS0FBS0YsV0FBV0M7OztvQkFBbkNFLGFBQWE7b0JBRW5CLElBQUksQ0FBQ0gsVUFBVUksUUFBUSxDQUFDLFVBQVU7O3dCQUFPRDs7b0JBRXpDOzt3QkFBTzs0QkFDTkUsUUFBUTs0QkFDUkMsY0FBYzs0QkFDZEMsS0FBS0osV0FBV0ksR0FBRzt3QkFDcEI7Ozs7SUFDRDtXQVZzQlI7O0FBWXRCLGdCQUFzQlMsS0FBS0QsR0FBRyxFQUFFTixPQUFPLEVBQUVDLElBQUk7V0FBdkJNOztTQUFBQTtJQUFBQSxRQUFmLG9CQUFBLFNBQW9CRCxHQUFHLEVBQUVOLE9BQU8sRUFBRUMsSUFBSTtZQUd0Q087Ozs7b0JBRk4sSUFBSVIsUUFBUUksTUFBTSxLQUFLLFFBQVE7O3dCQUFPSCxLQUFLSyxLQUFLTjs7d0JBRTlCO29CQUFLOzt3QkFBTUosR0FBR2EsUUFBUSxDQUFDWixjQUFjUzs7O29CQUFqREUsWUFBWSxJQUFLO29CQUV2Qjs7d0JBQU87NEJBQ05KLFFBQVE7NEJBQ1JDLGNBQWM7NEJBQ2RLLFFBQVFDLEtBQUtDLFNBQVMsQ0FBQ0o7d0JBQ3hCOzs7O0lBQ0Q7V0FWc0JEOztBQVl0QixTQUFTTSxpQkFBaUJMLFNBQVM7SUFDbEMsSUFBTU0sU0FBUyxDQUFDO1FBRVgsa0NBQUEsMkJBQUE7O1FBQUwsUUFBSyxZQUFjQyxTQUFTUCxXQUFXUSxVQUFVLENBQUNDLEtBQUsscUJBQWxELFNBQUEsNkJBQUEsUUFBQSx5QkFBQSxpQ0FBb0Q7WUFBcEQsSUFBTUMsT0FBTjtZQUNKLElBQUlDLFdBQVdELElBQUksQ0FBQyxZQUFZLENBQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksbUVBQW1FO1lBQzVHLElBQUlELFFBQVEsQ0FBQyxFQUFFLEtBQUssS0FBSyxPQUFPLDBCQUEwQjtZQUUxREEsV0FBV0EsU0FDVEUsTUFBTSxDQUFDLEdBQUcsdUJBQXVCO2FBQ2pDQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSx5REFBeUQ7WUFFOUVSLE1BQU0sQ0FBQ0ssU0FBUyxHQUFHSSxpQkFDaEJDLGVBQWVOLElBQUksQ0FBQyxlQUFlLElBQ25DQztRQUNKOztRQVhLO1FBQUE7OztpQkFBQSw2QkFBQTtnQkFBQTs7O2dCQUFBO3NCQUFBOzs7O0lBYUwsT0FBT0w7QUFDUjtBQUVBLFNBQVNVLGVBQWVDLFlBQVk7SUFDbkMsSUFBTUMsU0FBUyxDQUFDO1FBRVgsa0NBQUEsMkJBQUE7O1FBQUwsUUFBSyxZQUFxQkQsaUNBQXJCLFNBQUEsNkJBQUEsUUFBQSx5QkFBQSxpQ0FBbUM7WUFBbkMsSUFBTUUsY0FBTjtZQUNGRCxNQUFNLENBQUNDLFdBQVcsQ0FBQyxXQUFXLENBQUMsR0FBR0EsV0FBVyxDQUFDLFFBQVE7UUFDeEQ7O1FBRkk7UUFBQTs7O2lCQUFBLDZCQUFBO2dCQUFBOzs7Z0JBQUE7c0JBQUE7Ozs7SUFJSixPQUFPRDtBQUNUIn0=