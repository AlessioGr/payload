"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "incrementLoginAttempts", {
    enumerable: true,
    get: function() {
        return incrementLoginAttempts;
    }
});
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
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
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
var incrementLoginAttempts = function() {
    var _ref = _async_to_generator(function(param) {
        var req, payload, doc, collection, _collection_auth, maxLoginAttempts, lockTime, lockUntil, data, lockUntil1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    req = param.req, payload = param.payload, doc = param.doc, collection = param.collection;
                    _collection_auth = collection.auth, maxLoginAttempts = _collection_auth.maxLoginAttempts, lockTime = _collection_auth.lockTime;
                    if (!("lockUntil" in doc && typeof doc.lockUntil === "string")) return [
                        3,
                        3
                    ];
                    lockUntil = Math.floor(new Date(doc.lockUntil).getTime() / 1000);
                    if (!(lockUntil < Date.now())) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        payload.update({
                            req: req,
                            collection: collection.slug,
                            id: doc.id,
                            data: {
                                loginAttempts: 1,
                                lockUntil: null
                            }
                        })
                    ];
                case 1:
                    _state.sent();
                    _state.label = 2;
                case 2:
                    return [
                        2
                    ];
                case 3:
                    data = {
                        loginAttempts: Number(doc.loginAttempts) + 1
                    };
                    // Lock the account if at max attempts and not already locked
                    if (typeof doc.loginAttempts === "number" && doc.loginAttempts + 1 >= maxLoginAttempts) {
                        lockUntil1 = new Date(Date.now() + lockTime);
                        data.lockUntil = lockUntil1;
                    }
                    return [
                        4,
                        payload.update({
                            collection: collection.slug,
                            id: doc.id,
                            data: data
                        })
                    ];
                case 4:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return function incrementLoginAttempts(_) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hdXRoL3N0cmF0ZWdpZXMvbG9jYWwvaW5jcmVtZW50TG9naW5BdHRlbXB0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXlsb2FkIH0gZnJvbSAnLi4vLi4vLi4nO1xuaW1wb3J0IHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZywgVHlwZVdpdGhJRCB9IGZyb20gJy4uLy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuXG50eXBlIEFyZ3MgPSB7XG4gIHJlcTogUGF5bG9hZFJlcXVlc3QsXG4gIHBheWxvYWQ6IFBheWxvYWRcbiAgZG9jOiBUeXBlV2l0aElEICYgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgY29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1xufVxuXG5leHBvcnQgY29uc3QgaW5jcmVtZW50TG9naW5BdHRlbXB0cyA9IGFzeW5jICh7XG4gIHJlcSxcbiAgcGF5bG9hZCxcbiAgZG9jLFxuICBjb2xsZWN0aW9uLFxufTogQXJncyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBjb25zdCB7XG4gICAgYXV0aDoge1xuICAgICAgbWF4TG9naW5BdHRlbXB0cyxcbiAgICAgIGxvY2tUaW1lLFxuICAgIH0sXG4gIH0gPSBjb2xsZWN0aW9uO1xuXG4gIGlmICgnbG9ja1VudGlsJyBpbiBkb2MgJiYgdHlwZW9mIGRvYy5sb2NrVW50aWwgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbG9ja1VudGlsID0gTWF0aC5mbG9vcihuZXcgRGF0ZShkb2MubG9ja1VudGlsKS5nZXRUaW1lKCkgLyAxMDAwKTtcblxuICAgIC8vIEV4cGlyZWQgbG9jaywgcmVzdGFydCBjb3VudCBhdCAxXG4gICAgaWYgKGxvY2tVbnRpbCA8IERhdGUubm93KCkpIHtcbiAgICAgIGF3YWl0IHBheWxvYWQudXBkYXRlKHtcbiAgICAgICAgcmVxLFxuICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLnNsdWcsXG4gICAgICAgIGlkOiBkb2MuaWQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBsb2dpbkF0dGVtcHRzOiAxLFxuICAgICAgICAgIGxvY2tVbnRpbDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge1xuICAgIGxvZ2luQXR0ZW1wdHM6IE51bWJlcihkb2MubG9naW5BdHRlbXB0cykgKyAxLFxuICB9O1xuXG4gIC8vIExvY2sgdGhlIGFjY291bnQgaWYgYXQgbWF4IGF0dGVtcHRzIGFuZCBub3QgYWxyZWFkeSBsb2NrZWRcbiAgaWYgKHR5cGVvZiBkb2MubG9naW5BdHRlbXB0cyA9PT0gJ251bWJlcicgJiYgZG9jLmxvZ2luQXR0ZW1wdHMgKyAxID49IG1heExvZ2luQXR0ZW1wdHMpIHtcbiAgICBjb25zdCBsb2NrVW50aWwgPSBuZXcgRGF0ZSgoRGF0ZS5ub3coKSArIGxvY2tUaW1lKSk7XG4gICAgZGF0YS5sb2NrVW50aWwgPSBsb2NrVW50aWw7XG4gIH1cblxuXG4gIGF3YWl0IHBheWxvYWQudXBkYXRlKHtcbiAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLnNsdWcsXG4gICAgaWQ6IGRvYy5pZCxcbiAgICBkYXRhLFxuICB9KTtcbn07XG4iXSwibmFtZXMiOlsiaW5jcmVtZW50TG9naW5BdHRlbXB0cyIsInJlcSIsInBheWxvYWQiLCJkb2MiLCJjb2xsZWN0aW9uIiwibWF4TG9naW5BdHRlbXB0cyIsImxvY2tUaW1lIiwibG9ja1VudGlsIiwiZGF0YSIsImF1dGgiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwiZ2V0VGltZSIsIm5vdyIsInVwZGF0ZSIsInNsdWciLCJpZCIsImxvZ2luQXR0ZW1wdHMiLCJOdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7K0JBV2FBOzs7ZUFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFNQTtlQUF5QixvQkFBQTtZQUNwQ0MsS0FDQUMsU0FDQUMsS0FDQUMsOEJBSUlDLGtCQUNBQyxVQUtJQyxXQWtCRkMsTUFNRUQ7Ozs7b0JBckNSTixZQUFBQSxLQUNBQyxnQkFBQUEsU0FDQUMsWUFBQUEsS0FDQUMsbUJBQUFBO3VDQU9JQSxXQUpGSyxNQUNFSixvQ0FBQUEsa0JBQ0FDLDRCQUFBQTt5QkFJQSxDQUFBLGVBQWVILE9BQU8sT0FBT0EsSUFBSUksU0FBUyxLQUFLLFFBQU8sR0FBdEQ7Ozs7b0JBQ0lBLFlBQVlHLEtBQUtDLEtBQUssQ0FBQyxJQUFJQyxLQUFLVCxJQUFJSSxTQUFTLEVBQUVNLE9BQU8sS0FBSzt5QkFHN0ROLENBQUFBLFlBQVlLLEtBQUtFLEdBQUcsRUFBQyxHQUFyQlA7Ozs7b0JBQ0Y7O3dCQUFNTCxRQUFRYSxNQUFNLENBQUM7NEJBQ25CZCxLQUFBQTs0QkFDQUcsWUFBWUEsV0FBV1ksSUFBSTs0QkFDM0JDLElBQUlkLElBQUljLEVBQUU7NEJBQ1ZULE1BQU07Z0NBQ0pVLGVBQWU7Z0NBQ2ZYLFdBQVc7NEJBQ2I7d0JBQ0Y7OztvQkFSQTs7O29CQVdGOzs7O29CQUdJQyxPQUFnQzt3QkFDcENVLGVBQWVDLE9BQU9oQixJQUFJZSxhQUFhLElBQUk7b0JBQzdDO29CQUVBLDZEQUE2RDtvQkFDN0QsSUFBSSxPQUFPZixJQUFJZSxhQUFhLEtBQUssWUFBWWYsSUFBSWUsYUFBYSxHQUFHLEtBQUtiLGtCQUFrQjt3QkFDaEZFLGFBQVksSUFBSUssS0FBTUEsS0FBS0UsR0FBRyxLQUFLUjt3QkFDekNFLEtBQUtELFNBQVMsR0FBR0E7b0JBQ25CO29CQUdBOzt3QkFBTUwsUUFBUWEsTUFBTSxDQUFDOzRCQUNuQlgsWUFBWUEsV0FBV1ksSUFBSTs0QkFDM0JDLElBQUlkLElBQUljLEVBQUU7NEJBQ1ZULE1BQUFBO3dCQUNGOzs7b0JBSkE7Ozs7OztJQUtGO29CQWhEYVIifQ==