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
import httpStatus from "http-status";
import find from "../operations/find";
import { isNumber } from "../../utilities/isNumber";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function findHandler(req, res, next) {
    return _findHandler.apply(this, arguments);
}
function _findHandler() {
    _findHandler = _async_to_generator(function(req, res, next) {
        var page, parsedPage, result, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    if (typeof req.query.page === "string") {
                        parsedPage = parseInt(req.query.page, 10);
                        if (!Number.isNaN(parsedPage)) {
                            page = parsedPage;
                        }
                    }
                    return [
                        4,
                        find({
                            req: req,
                            collection: req.collection,
                            where: req.query.where,
                            page: page,
                            limit: isNumber(req.query.limit) ? Number(req.query.limit) : undefined,
                            sort: req.query.sort,
                            depth: isNumber(req.query.depth) ? Number(req.query.depth) : undefined,
                            draft: req.query.draft === "true"
                        })
                    ];
                case 1:
                    result = _state.sent();
                    return [
                        2,
                        res.status(httpStatus.OK).json(result)
                    ];
                case 2:
                    error = _state.sent();
                    return [
                        2,
                        next(error)
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return _findHandler.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9yZXF1ZXN0SGFuZGxlcnMvZmluZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHsgVHlwZVdpdGhJRCB9IGZyb20gJy4uL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IFBhZ2luYXRlZERvY3MgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS90eXBlcyc7XG5pbXBvcnQgZmluZCBmcm9tICcuLi9vcGVyYXRpb25zL2ZpbmQnO1xuaW1wb3J0IHsgV2hlcmUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9pc051bWJlcic7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBmaW5kSGFuZGxlcjxUIGV4dGVuZHMgVHlwZVdpdGhJRCA9IGFueT4ocmVxOiBQYXlsb2FkUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKTogUHJvbWlzZTxSZXNwb25zZTxQYWdpbmF0ZWREb2NzPFQ+PiB8IHZvaWQ+IHtcbiAgdHJ5IHtcbiAgICBsZXQgcGFnZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gICAgaWYgKHR5cGVvZiByZXEucXVlcnkucGFnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IHBhcnNlZFBhZ2UgPSBwYXJzZUludChyZXEucXVlcnkucGFnZSwgMTApO1xuXG4gICAgICBpZiAoIU51bWJlci5pc05hTihwYXJzZWRQYWdlKSkge1xuICAgICAgICBwYWdlID0gcGFyc2VkUGFnZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmaW5kKHtcbiAgICAgIHJlcSxcbiAgICAgIGNvbGxlY3Rpb246IHJlcS5jb2xsZWN0aW9uLFxuICAgICAgd2hlcmU6IHJlcS5xdWVyeS53aGVyZSBhcyBXaGVyZSwgLy8gVGhpcyBpcyBhIGxpdHRsZSBzaGFkeVxuICAgICAgcGFnZSxcbiAgICAgIGxpbWl0OiBpc051bWJlcihyZXEucXVlcnkubGltaXQpID8gTnVtYmVyKHJlcS5xdWVyeS5saW1pdCkgOiB1bmRlZmluZWQsXG4gICAgICBzb3J0OiByZXEucXVlcnkuc29ydCBhcyBzdHJpbmcsXG4gICAgICBkZXB0aDogaXNOdW1iZXIocmVxLnF1ZXJ5LmRlcHRoKSA/IE51bWJlcihyZXEucXVlcnkuZGVwdGgpIDogdW5kZWZpbmVkLFxuICAgICAgZHJhZnQ6IHJlcS5xdWVyeS5kcmFmdCA9PT0gJ3RydWUnLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5PSykuanNvbihyZXN1bHQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBuZXh0KGVycm9yKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImh0dHBTdGF0dXMiLCJmaW5kIiwiaXNOdW1iZXIiLCJmaW5kSGFuZGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJwYWdlIiwicGFyc2VkUGFnZSIsInJlc3VsdCIsImVycm9yIiwicXVlcnkiLCJwYXJzZUludCIsIk51bWJlciIsImlzTmFOIiwiY29sbGVjdGlvbiIsIndoZXJlIiwibGltaXQiLCJ1bmRlZmluZWQiLCJzb3J0IiwiZGVwdGgiLCJkcmFmdCIsInN0YXR1cyIsIk9LIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU9BLGdCQUFnQixjQUFjO0FBSXJDLE9BQU9DLFVBQVUscUJBQXFCO0FBRXRDLFNBQVNDLFFBQVEsUUFBUSwyQkFBMkI7QUFFcEQsOERBQThEO0FBQzlELHdCQUE4QkMsWUFBd0NDLEdBQW1CLEVBQUVDLEdBQWEsRUFBRUMsSUFBa0I7V0FBOUZIOztTQUFBQTtJQUFBQSxlQUFmLG9CQUFBLFNBQXVEQyxHQUFtQixFQUFFQyxHQUFhLEVBQUVDLElBQWtCO1lBRXBIQyxNQUdJQyxZQU9GQyxRQVlDQzs7Ozs7Ozs7OztvQkFwQlAsSUFBSSxPQUFPTixJQUFJTyxLQUFLLENBQUNKLElBQUksS0FBSyxVQUFVO3dCQUNoQ0MsYUFBYUksU0FBU1IsSUFBSU8sS0FBSyxDQUFDSixJQUFJLEVBQUU7d0JBRTVDLElBQUksQ0FBQ00sT0FBT0MsS0FBSyxDQUFDTixhQUFhOzRCQUM3QkQsT0FBT0M7d0JBQ1Q7b0JBQ0Y7b0JBRWU7O3dCQUFNUCxLQUFLOzRCQUN4QkcsS0FBQUE7NEJBQ0FXLFlBQVlYLElBQUlXLFVBQVU7NEJBQzFCQyxPQUFPWixJQUFJTyxLQUFLLENBQUNLLEtBQUs7NEJBQ3RCVCxNQUFBQTs0QkFDQVUsT0FBT2YsU0FBU0UsSUFBSU8sS0FBSyxDQUFDTSxLQUFLLElBQUlKLE9BQU9ULElBQUlPLEtBQUssQ0FBQ00sS0FBSyxJQUFJQzs0QkFDN0RDLE1BQU1mLElBQUlPLEtBQUssQ0FBQ1EsSUFBSTs0QkFDcEJDLE9BQU9sQixTQUFTRSxJQUFJTyxLQUFLLENBQUNTLEtBQUssSUFBSVAsT0FBT1QsSUFBSU8sS0FBSyxDQUFDUyxLQUFLLElBQUlGOzRCQUM3REcsT0FBT2pCLElBQUlPLEtBQUssQ0FBQ1UsS0FBSyxLQUFLO3dCQUM3Qjs7O29CQVRNWixTQUFTO29CQVdmOzt3QkFBT0osSUFBSWlCLE1BQU0sQ0FBQ3RCLFdBQVd1QixFQUFFLEVBQUVDLElBQUksQ0FBQ2Y7OztvQkFDL0JDO29CQUNQOzt3QkFBT0osS0FBS0k7Ozs7Ozs7O0lBRWhCO1dBM0I4QlAifQ==