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
var _types = require("../../config/types");
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
var populate = function() {
    var _ref = _async_to_generator(function(param) {
        var depth, currentDepth, req, overrideAccess, dataReference, data, field, index, key, showHiddenFields, dataToUpdate, relation, relatedCollection, _id, id, relationshipValue, shouldPopulate;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    depth = param.depth, currentDepth = param.currentDepth, req = param.req, overrideAccess = param.overrideAccess, dataReference = param.dataReference, data = param.data, field = param.field, index = param.index, key = param.key, showHiddenFields = param.showHiddenFields;
                    dataToUpdate = dataReference;
                    relation = Array.isArray(field.relationTo) ? data.relationTo : field.relationTo;
                    relatedCollection = req.payload.collections[relation];
                    if (!relatedCollection) return [
                        3,
                        3
                    ];
                    id = Array.isArray(field.relationTo) ? data.value : data;
                    shouldPopulate = depth && currentDepth <= depth;
                    if (typeof id !== "string" && typeof id !== "number" && typeof ((_id = id) === null || _id === void 0 ? void 0 : _id.toString) === "function" && typeof id !== "object") {
                        id = id.toString();
                    }
                    if (!shouldPopulate) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        req.payloadDataLoader.load(JSON.stringify([
                            req.transactionID,
                            relatedCollection.config.slug,
                            id,
                            depth,
                            currentDepth + 1,
                            req.locale,
                            req.fallbackLocale,
                            overrideAccess,
                            showHiddenFields
                        ]))
                    ];
                case 1:
                    relationshipValue = _state.sent();
                    _state.label = 2;
                case 2:
                    if (!relationshipValue) {
                        // ids are visible regardless of access controls
                        relationshipValue = id;
                    }
                    if (typeof index === "number" && typeof key === "string") {
                        if (Array.isArray(field.relationTo)) {
                            dataToUpdate[field.name][key][index].value = relationshipValue;
                        } else {
                            dataToUpdate[field.name][key][index] = relationshipValue;
                        }
                    } else if (typeof index === "number" || typeof key === "string") {
                        if (Array.isArray(field.relationTo)) {
                            dataToUpdate[field.name][index !== null && index !== void 0 ? index : key].value = relationshipValue;
                        } else {
                            dataToUpdate[field.name][index !== null && index !== void 0 ? index : key] = relationshipValue;
                        }
                    } else if (Array.isArray(field.relationTo)) {
                        dataToUpdate[field.name].value = relationshipValue;
                    } else {
                        dataToUpdate[field.name] = relationshipValue;
                    }
                    _state.label = 3;
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return function populate(_) {
        return _ref.apply(this, arguments);
    };
}();
var relationshipPopulationPromise = function() {
    var _ref = _async_to_generator(function(param) {
        var siblingDoc, field, depth, currentDepth, req, overrideAccess, showHiddenFields, resultingDoc, populateDepth, rowPromises;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    siblingDoc = param.siblingDoc, field = param.field, depth = param.depth, currentDepth = param.currentDepth, req = param.req, overrideAccess = param.overrideAccess, showHiddenFields = param.showHiddenFields;
                    resultingDoc = siblingDoc;
                    populateDepth = (0, _types.fieldHasMaxDepth)(field) && field.maxDepth < depth ? field.maxDepth : depth;
                    rowPromises = [];
                    if (!((0, _types.fieldSupportsMany)(field) && field.hasMany)) return [
                        3,
                        1
                    ];
                    if (req.locale === "all" && typeof siblingDoc[field.name] === "object" && siblingDoc[field.name] !== null) {
                        Object.keys(siblingDoc[field.name]).forEach(function(key) {
                            if (Array.isArray(siblingDoc[field.name][key])) {
                                siblingDoc[field.name][key].forEach(function(relatedDoc, index) {
                                    var rowPromise = function() {
                                        var _ref = _async_to_generator(function() {
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        return [
                                                            4,
                                                            populate({
                                                                depth: populateDepth,
                                                                currentDepth: currentDepth,
                                                                req: req,
                                                                overrideAccess: overrideAccess,
                                                                data: siblingDoc[field.name][key][index],
                                                                dataReference: resultingDoc,
                                                                field: field,
                                                                index: index,
                                                                key: key,
                                                                showHiddenFields: showHiddenFields
                                                            })
                                                        ];
                                                    case 1:
                                                        _state.sent();
                                                        return [
                                                            2
                                                        ];
                                                }
                                            });
                                        });
                                        return function rowPromise() {
                                            return _ref.apply(this, arguments);
                                        };
                                    }();
                                    rowPromises.push(rowPromise());
                                });
                            }
                        });
                    } else if (Array.isArray(siblingDoc[field.name])) {
                        siblingDoc[field.name].forEach(function(relatedDoc, index) {
                            var rowPromise = function() {
                                var _ref = _async_to_generator(function() {
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                if (!relatedDoc) return [
                                                    3,
                                                    2
                                                ];
                                                return [
                                                    4,
                                                    populate({
                                                        depth: populateDepth,
                                                        currentDepth: currentDepth,
                                                        req: req,
                                                        overrideAccess: overrideAccess,
                                                        data: relatedDoc,
                                                        dataReference: resultingDoc,
                                                        field: field,
                                                        index: index,
                                                        showHiddenFields: showHiddenFields
                                                    })
                                                ];
                                            case 1:
                                                _state.sent();
                                                _state.label = 2;
                                            case 2:
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                });
                                return function rowPromise() {
                                    return _ref.apply(this, arguments);
                                };
                            }();
                            rowPromises.push(rowPromise());
                        });
                    }
                    return [
                        3,
                        5
                    ];
                case 1:
                    if (!(typeof siblingDoc[field.name] === "object" && siblingDoc[field.name] !== null && req.locale === "all")) return [
                        3,
                        3
                    ];
                    Object.keys(siblingDoc[field.name]).forEach(function(key) {
                        var rowPromise = function() {
                            var _ref = _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                populate({
                                                    depth: populateDepth,
                                                    currentDepth: currentDepth,
                                                    req: req,
                                                    overrideAccess: overrideAccess,
                                                    data: siblingDoc[field.name][key],
                                                    dataReference: resultingDoc,
                                                    field: field,
                                                    key: key,
                                                    showHiddenFields: showHiddenFields
                                                })
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                            return function rowPromise() {
                                return _ref.apply(this, arguments);
                            };
                        }();
                        rowPromises.push(rowPromise());
                    });
                    return [
                        4,
                        Promise.all(rowPromises)
                    ];
                case 2:
                    _state.sent();
                    return [
                        3,
                        5
                    ];
                case 3:
                    if (!siblingDoc[field.name]) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        populate({
                            depth: populateDepth,
                            currentDepth: currentDepth,
                            req: req,
                            overrideAccess: overrideAccess,
                            dataReference: resultingDoc,
                            data: siblingDoc[field.name],
                            field: field,
                            showHiddenFields: showHiddenFields
                        })
                    ];
                case 4:
                    _state.sent();
                    _state.label = 5;
                case 5:
                    return [
                        4,
                        Promise.all(rowPromises)
                    ];
                case 6:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return function relationshipPopulationPromise(_) {
        return _ref.apply(this, arguments);
    };
}();
var _default = relationshipPopulationPromise;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9maWVsZHMvaG9va3MvYWZ0ZXJSZWFkL3JlbGF0aW9uc2hpcFBvcHVsYXRpb25Qcm9taXNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgeyBmaWVsZEhhc01heERlcHRoLCBmaWVsZFN1cHBvcnRzTWFueSwgUmVsYXRpb25zaGlwRmllbGQsIFVwbG9hZEZpZWxkIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJztcblxudHlwZSBQb3B1bGF0ZUFyZ3MgPSB7XG4gIGRlcHRoOiBudW1iZXJcbiAgY3VycmVudERlcHRoOiBudW1iZXJcbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICBvdmVycmlkZUFjY2VzczogYm9vbGVhblxuICBkYXRhUmVmZXJlbmNlOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIGZpZWxkOiBSZWxhdGlvbnNoaXBGaWVsZCB8IFVwbG9hZEZpZWxkXG4gIGluZGV4PzogbnVtYmVyXG4gIGtleT86IHN0cmluZ1xuICBzaG93SGlkZGVuRmllbGRzOiBib29sZWFuXG59XG5cbmNvbnN0IHBvcHVsYXRlID0gYXN5bmMgKHtcbiAgZGVwdGgsXG4gIGN1cnJlbnREZXB0aCxcbiAgcmVxLFxuICBvdmVycmlkZUFjY2VzcyxcbiAgZGF0YVJlZmVyZW5jZSxcbiAgZGF0YSxcbiAgZmllbGQsXG4gIGluZGV4LFxuICBrZXksXG4gIHNob3dIaWRkZW5GaWVsZHMsXG59OiBQb3B1bGF0ZUFyZ3MpID0+IHtcbiAgY29uc3QgZGF0YVRvVXBkYXRlID0gZGF0YVJlZmVyZW5jZTtcbiAgY29uc3QgcmVsYXRpb24gPSBBcnJheS5pc0FycmF5KGZpZWxkLnJlbGF0aW9uVG8pID8gKGRhdGEucmVsYXRpb25UbyBhcyBzdHJpbmcpIDogZmllbGQucmVsYXRpb25UbztcbiAgY29uc3QgcmVsYXRlZENvbGxlY3Rpb24gPSByZXEucGF5bG9hZC5jb2xsZWN0aW9uc1tyZWxhdGlvbl07XG5cbiAgaWYgKHJlbGF0ZWRDb2xsZWN0aW9uKSB7XG4gICAgbGV0IGlkID0gQXJyYXkuaXNBcnJheShmaWVsZC5yZWxhdGlvblRvKSA/IGRhdGEudmFsdWUgOiBkYXRhO1xuICAgIGxldCByZWxhdGlvbnNoaXBWYWx1ZTtcbiAgICBjb25zdCBzaG91bGRQb3B1bGF0ZSA9IGRlcHRoICYmIGN1cnJlbnREZXB0aCA8PSBkZXB0aDtcblxuICAgIGlmICh0eXBlb2YgaWQgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBpZCAhPT0gJ251bWJlcicgJiYgdHlwZW9mIGlkPy50b1N0cmluZyA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgaWQgIT09ICdvYmplY3QnKSB7XG4gICAgICBpZCA9IGlkLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgaWYgKHNob3VsZFBvcHVsYXRlKSB7XG4gICAgICByZWxhdGlvbnNoaXBWYWx1ZSA9IGF3YWl0IHJlcS5wYXlsb2FkRGF0YUxvYWRlci5sb2FkKEpTT04uc3RyaW5naWZ5KFtcbiAgICAgICAgcmVxLnRyYW5zYWN0aW9uSUQsXG4gICAgICAgIHJlbGF0ZWRDb2xsZWN0aW9uLmNvbmZpZy5zbHVnLFxuICAgICAgICBpZCxcbiAgICAgICAgZGVwdGgsXG4gICAgICAgIGN1cnJlbnREZXB0aCArIDEsXG4gICAgICAgIHJlcS5sb2NhbGUsXG4gICAgICAgIHJlcS5mYWxsYmFja0xvY2FsZSxcbiAgICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgICBdKSk7XG4gICAgfVxuXG4gICAgaWYgKCFyZWxhdGlvbnNoaXBWYWx1ZSkge1xuICAgICAgLy8gaWRzIGFyZSB2aXNpYmxlIHJlZ2FyZGxlc3Mgb2YgYWNjZXNzIGNvbnRyb2xzXG4gICAgICByZWxhdGlvbnNoaXBWYWx1ZSA9IGlkO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaW5kZXggPT09ICdudW1iZXInICYmIHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWVsZC5yZWxhdGlvblRvKSkge1xuICAgICAgICBkYXRhVG9VcGRhdGVbZmllbGQubmFtZV1ba2V5XVtpbmRleF0udmFsdWUgPSByZWxhdGlvbnNoaXBWYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGFUb1VwZGF0ZVtmaWVsZC5uYW1lXVtrZXldW2luZGV4XSA9IHJlbGF0aW9uc2hpcFZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJyB8fCB0eXBlb2Yga2V5ID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGQucmVsYXRpb25UbykpIHtcbiAgICAgICAgZGF0YVRvVXBkYXRlW2ZpZWxkLm5hbWVdW2luZGV4ID8/IGtleV0udmFsdWUgPSByZWxhdGlvbnNoaXBWYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGFUb1VwZGF0ZVtmaWVsZC5uYW1lXVtpbmRleCA/PyBrZXldID0gcmVsYXRpb25zaGlwVmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGZpZWxkLnJlbGF0aW9uVG8pKSB7XG4gICAgICBkYXRhVG9VcGRhdGVbZmllbGQubmFtZV0udmFsdWUgPSByZWxhdGlvbnNoaXBWYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YVRvVXBkYXRlW2ZpZWxkLm5hbWVdID0gcmVsYXRpb25zaGlwVmFsdWU7XG4gICAgfVxuICB9XG59O1xuXG50eXBlIFByb21pc2VBcmdzID0ge1xuICBzaWJsaW5nRG9jOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGZpZWxkOiBSZWxhdGlvbnNoaXBGaWVsZCB8IFVwbG9hZEZpZWxkXG4gIGRlcHRoOiBudW1iZXJcbiAgY3VycmVudERlcHRoOiBudW1iZXJcbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICBvdmVycmlkZUFjY2VzczogYm9vbGVhblxuICBzaG93SGlkZGVuRmllbGRzOiBib29sZWFuXG59XG5cbmNvbnN0IHJlbGF0aW9uc2hpcFBvcHVsYXRpb25Qcm9taXNlID0gYXN5bmMgKHtcbiAgc2libGluZ0RvYyxcbiAgZmllbGQsXG4gIGRlcHRoLFxuICBjdXJyZW50RGVwdGgsXG4gIHJlcSxcbiAgb3ZlcnJpZGVBY2Nlc3MsXG4gIHNob3dIaWRkZW5GaWVsZHMsXG59OiBQcm9taXNlQXJncyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBjb25zdCByZXN1bHRpbmdEb2MgPSBzaWJsaW5nRG9jO1xuICBjb25zdCBwb3B1bGF0ZURlcHRoID0gZmllbGRIYXNNYXhEZXB0aChmaWVsZCkgJiYgZmllbGQubWF4RGVwdGggPCBkZXB0aCA/IGZpZWxkLm1heERlcHRoIDogZGVwdGg7XG4gIGNvbnN0IHJvd1Byb21pc2VzID0gW107XG5cbiAgaWYgKGZpZWxkU3VwcG9ydHNNYW55KGZpZWxkKSAmJiBmaWVsZC5oYXNNYW55KSB7XG4gICAgaWYgKHJlcS5sb2NhbGUgPT09ICdhbGwnICYmIHR5cGVvZiBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdID09PSAnb2JqZWN0JyAmJiBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdICE9PSBudWxsKSB7XG4gICAgICBPYmplY3Qua2V5cyhzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2libGluZ0RvY1tmaWVsZC5uYW1lXVtrZXldKSkge1xuICAgICAgICAgIHNpYmxpbmdEb2NbZmllbGQubmFtZV1ba2V5XS5mb3JFYWNoKChyZWxhdGVkRG9jLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgcm93UHJvbWlzZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgYXdhaXQgcG9wdWxhdGUoe1xuICAgICAgICAgICAgICAgIGRlcHRoOiBwb3B1bGF0ZURlcHRoLFxuICAgICAgICAgICAgICAgIGN1cnJlbnREZXB0aCxcbiAgICAgICAgICAgICAgICByZXEsXG4gICAgICAgICAgICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICAgICAgICAgICAgZGF0YTogc2libGluZ0RvY1tmaWVsZC5uYW1lXVtrZXldW2luZGV4XSxcbiAgICAgICAgICAgICAgICBkYXRhUmVmZXJlbmNlOiByZXN1bHRpbmdEb2MsXG4gICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJvd1Byb21pc2VzLnB1c2gocm93UHJvbWlzZSgpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNpYmxpbmdEb2NbZmllbGQubmFtZV0pKSB7XG4gICAgICBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdLmZvckVhY2goKHJlbGF0ZWREb2MsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHJvd1Byb21pc2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgaWYgKHJlbGF0ZWREb2MpIHtcbiAgICAgICAgICAgIGF3YWl0IHBvcHVsYXRlKHtcbiAgICAgICAgICAgICAgZGVwdGg6IHBvcHVsYXRlRGVwdGgsXG4gICAgICAgICAgICAgIGN1cnJlbnREZXB0aCxcbiAgICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgICAgICAgZGF0YTogcmVsYXRlZERvYyxcbiAgICAgICAgICAgICAgZGF0YVJlZmVyZW5jZTogcmVzdWx0aW5nRG9jLFxuICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcm93UHJvbWlzZXMucHVzaChyb3dQcm9taXNlKCkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdID09PSAnb2JqZWN0JyAmJiBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdICE9PSBudWxsICYmIHJlcS5sb2NhbGUgPT09ICdhbGwnKSB7XG4gICAgT2JqZWN0LmtleXMoc2libGluZ0RvY1tmaWVsZC5uYW1lXSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCByb3dQcm9taXNlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBwb3B1bGF0ZSh7XG4gICAgICAgICAgZGVwdGg6IHBvcHVsYXRlRGVwdGgsXG4gICAgICAgICAgY3VycmVudERlcHRoLFxuICAgICAgICAgIHJlcSxcbiAgICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgICBkYXRhOiBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdW2tleV0sXG4gICAgICAgICAgZGF0YVJlZmVyZW5jZTogcmVzdWx0aW5nRG9jLFxuICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgIGtleSxcbiAgICAgICAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICByb3dQcm9taXNlcy5wdXNoKHJvd1Byb21pc2UoKSk7XG4gICAgfSk7XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChyb3dQcm9taXNlcyk7XG4gIH0gZWxzZSBpZiAoc2libGluZ0RvY1tmaWVsZC5uYW1lXSkge1xuICAgIGF3YWl0IHBvcHVsYXRlKHtcbiAgICAgIGRlcHRoOiBwb3B1bGF0ZURlcHRoLFxuICAgICAgY3VycmVudERlcHRoLFxuICAgICAgcmVxLFxuICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICBkYXRhUmVmZXJlbmNlOiByZXN1bHRpbmdEb2MsXG4gICAgICBkYXRhOiBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdLFxuICAgICAgZmllbGQsXG4gICAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgIH0pO1xuICB9XG4gIGF3YWl0IFByb21pc2UuYWxsKHJvd1Byb21pc2VzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbGF0aW9uc2hpcFBvcHVsYXRpb25Qcm9taXNlO1xuIl0sIm5hbWVzIjpbInBvcHVsYXRlIiwiZGVwdGgiLCJjdXJyZW50RGVwdGgiLCJyZXEiLCJvdmVycmlkZUFjY2VzcyIsImRhdGFSZWZlcmVuY2UiLCJkYXRhIiwiZmllbGQiLCJpbmRleCIsImtleSIsInNob3dIaWRkZW5GaWVsZHMiLCJkYXRhVG9VcGRhdGUiLCJyZWxhdGlvbiIsInJlbGF0ZWRDb2xsZWN0aW9uIiwiaWQiLCJyZWxhdGlvbnNoaXBWYWx1ZSIsInNob3VsZFBvcHVsYXRlIiwiQXJyYXkiLCJpc0FycmF5IiwicmVsYXRpb25UbyIsInBheWxvYWQiLCJjb2xsZWN0aW9ucyIsInZhbHVlIiwidG9TdHJpbmciLCJwYXlsb2FkRGF0YUxvYWRlciIsImxvYWQiLCJKU09OIiwic3RyaW5naWZ5IiwidHJhbnNhY3Rpb25JRCIsImNvbmZpZyIsInNsdWciLCJsb2NhbGUiLCJmYWxsYmFja0xvY2FsZSIsIm5hbWUiLCJyZWxhdGlvbnNoaXBQb3B1bGF0aW9uUHJvbWlzZSIsInNpYmxpbmdEb2MiLCJyZXN1bHRpbmdEb2MiLCJwb3B1bGF0ZURlcHRoIiwicm93UHJvbWlzZXMiLCJmaWVsZEhhc01heERlcHRoIiwibWF4RGVwdGgiLCJmaWVsZFN1cHBvcnRzTWFueSIsImhhc01hbnkiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInJlbGF0ZWREb2MiLCJyb3dQcm9taXNlIiwicHVzaCIsIlByb21pc2UiLCJhbGwiXSwibWFwcGluZ3MiOiI7Ozs7K0JBcUxBOzs7ZUFBQTs7O3FCQXBMb0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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