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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
import { text, textarea, password, select, point, number, relationship } from "./validations";
import { jest } from "@jest/globals";
var t = jest.fn(function(string) {
    return string;
});
var options = {
    operation: "create",
    data: undefined,
    siblingData: undefined,
    t: t
};
describe("Field Validations", function() {
    describe("text", function() {
        it("should validate", function() {
            var val = "test";
            var result = text(val, options);
            expect(result).toBe(true);
        });
        it("should show required message", function() {
            var val = undefined;
            var result = text(val, _object_spread_props(_object_spread({}, options), {
                required: true
            }));
            expect(result).toBe("validation:required");
        });
        it("should handle undefined", function() {
            var val = undefined;
            var result = text(val, options);
            expect(result).toBe(true);
        });
        it("should validate maxLength", function() {
            var val = "toolong";
            var result = text(val, _object_spread_props(_object_spread({}, options), {
                maxLength: 5
            }));
            expect(result).toBe("validation:shorterThanMax");
        });
        it("should validate minLength", function() {
            var val = "short";
            var result = text(val, _object_spread_props(_object_spread({}, options), {
                minLength: 10
            }));
            expect(result).toBe("validation:longerThanMin");
        });
        it("should validate maxLength with no value", function() {
            var val = undefined;
            var result = text(val, _object_spread_props(_object_spread({}, options), {
                maxLength: 5
            }));
            expect(result).toBe(true);
        });
        it("should validate minLength with no value", function() {
            var val = undefined;
            var result = text(val, _object_spread_props(_object_spread({}, options), {
                minLength: 10
            }));
            expect(result).toBe(true);
        });
    });
    describe("textarea", function() {
        options = _object_spread_props(_object_spread({}, options), {
            field: {
                type: "textarea",
                name: "test"
            }
        });
        it("should validate", function() {
            var val = "test";
            var result = textarea(val, options);
            expect(result).toBe(true);
        });
        it("should show required message", function() {
            var val = undefined;
            var result = textarea(val, _object_spread_props(_object_spread({}, options), {
                required: true
            }));
            expect(result).toBe("validation:required");
        });
        it("should handle undefined", function() {
            var val = undefined;
            var result = textarea(val, options);
            expect(result).toBe(true);
        });
        it("should validate maxLength", function() {
            var val = "toolong";
            var result = textarea(val, _object_spread_props(_object_spread({}, options), {
                maxLength: 5
            }));
            expect(result).toBe("validation:shorterThanMax");
        });
        it("should validate minLength", function() {
            var val = "short";
            var result = textarea(val, _object_spread_props(_object_spread({}, options), {
                minLength: 10
            }));
            expect(result).toBe("validation:longerThanMin");
        });
        it("should validate maxLength with no value", function() {
            var val = undefined;
            var result = textarea(val, _object_spread_props(_object_spread({}, options), {
                maxLength: 5
            }));
            expect(result).toBe(true);
        });
        it("should validate minLength with no value", function() {
            var val = undefined;
            var result = textarea(val, _object_spread_props(_object_spread({}, options), {
                minLength: 10
            }));
            expect(result).toBe(true);
        });
    });
    describe("password", function() {
        var passwordOptions = _object_spread_props(_object_spread({}, options), {
            type: "password",
            name: "test"
        });
        it("should validate", function() {
            var val = "test";
            var result = password(val, passwordOptions);
            expect(result).toBe(true);
        });
        it("should show required message", function() {
            var val = undefined;
            var result = password(val, _object_spread_props(_object_spread({}, passwordOptions), {
                required: true
            }));
            expect(result).toBe("validation:required");
        });
        it("should handle undefined", function() {
            var val = undefined;
            var result = password(val, passwordOptions);
            expect(result).toBe(true);
        });
        it("should validate maxLength", function() {
            var val = "toolong";
            var result = password(val, _object_spread_props(_object_spread({}, passwordOptions), {
                maxLength: 5
            }));
            expect(result).toBe("validation:shorterThanMax");
        });
        it("should validate minLength", function() {
            var val = "short";
            var result = password(val, _object_spread_props(_object_spread({}, passwordOptions), {
                minLength: 10
            }));
            expect(result).toBe("validation:longerThanMin");
        });
        it("should validate maxLength with no value", function() {
            var val = undefined;
            var result = password(val, _object_spread_props(_object_spread({}, passwordOptions), {
                maxLength: 5
            }));
            expect(result).toBe(true);
        });
        it("should validate minLength with no value", function() {
            var val = undefined;
            var result = password(val, _object_spread_props(_object_spread({}, passwordOptions), {
                minLength: 10
            }));
            expect(result).toBe(true);
        });
    });
    describe("point", function() {
        var pointOptions = _object_spread_props(_object_spread({}, options), {
            type: "point",
            name: "point"
        });
        it("should validate numbers", function() {
            var val = [
                "0.1",
                "0.2"
            ];
            var result = point(val, pointOptions);
            expect(result).toBe(true);
        });
        it("should validate strings that could be numbers", function() {
            var val = [
                "0.1",
                "0.2"
            ];
            var result = point(val, pointOptions);
            expect(result).toBe(true);
        });
        it("should show required message when undefined", function() {
            var val = undefined;
            var result = point(val, _object_spread_props(_object_spread({}, pointOptions), {
                required: true
            }));
            expect(result).not.toBe(true);
        });
        it("should show required message when array", function() {
            var val = [];
            var result = point(val, _object_spread_props(_object_spread({}, pointOptions), {
                required: true
            }));
            expect(result).not.toBe(true);
        });
        it("should show required message when array of undefined", function() {
            var val = [
                undefined,
                undefined
            ];
            var result = point(val, _object_spread_props(_object_spread({}, pointOptions), {
                required: true
            }));
            expect(result).not.toBe(true);
        });
        it("should handle undefined not required", function() {
            var val = undefined;
            var result = password(val, pointOptions);
            expect(result).toBe(true);
        });
        it("should handle empty array not required", function() {
            var val = [];
            var result = point(val, pointOptions);
            expect(result).toBe(true);
        });
        it("should handle array of undefined not required", function() {
            var val = [
                undefined,
                undefined
            ];
            var result = point(val, pointOptions);
            expect(result).toBe(true);
        });
        it("should prevent text input", function() {
            var val = [
                "bad",
                "input"
            ];
            var result = point(val, pointOptions);
            expect(result).not.toBe(true);
        });
        it("should prevent missing value", function() {
            var val = [
                0.1
            ];
            var result = point(val, pointOptions);
            expect(result).not.toBe(true);
        });
    });
    describe("relationship", function() {
        var relationshipOptions = _object_spread_props(_object_spread({}, options), {
            relationTo: "relation",
            payload: {
                collections: {
                    relation: {
                        config: {
                            slug: "relation",
                            fields: [
                                {
                                    name: "id",
                                    type: "text"
                                }
                            ]
                        }
                    }
                }
            }
        });
        it("should handle required", /*#__PURE__*/ _async_to_generator(function() {
            var val, result;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        val = undefined;
                        return [
                            4,
                            relationship(val, _object_spread_props(_object_spread({}, relationshipOptions), {
                                required: true
                            }))
                        ];
                    case 1:
                        result = _state.sent();
                        expect(result).not.toBe(true);
                        return [
                            2
                        ];
                }
            });
        }));
        it("should handle required with hasMany", /*#__PURE__*/ _async_to_generator(function() {
            var val, result;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        val = [];
                        return [
                            4,
                            relationship(val, _object_spread_props(_object_spread({}, relationshipOptions), {
                                required: true,
                                hasMany: true
                            }))
                        ];
                    case 1:
                        result = _state.sent();
                        expect(result).not.toBe(true);
                        return [
                            2
                        ];
                }
            });
        }));
        it("should enforce hasMany min", /*#__PURE__*/ _async_to_generator(function() {
            var minOptions, val, result, allowed;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        minOptions = _object_spread_props(_object_spread({}, relationshipOptions), {
                            hasMany: true,
                            minRows: 2
                        });
                        val = [
                            "a"
                        ];
                        return [
                            4,
                            relationship(val, minOptions)
                        ];
                    case 1:
                        result = _state.sent();
                        expect(result).not.toBe(true);
                        return [
                            4,
                            relationship([
                                "a",
                                "b"
                            ], minOptions)
                        ];
                    case 2:
                        allowed = _state.sent();
                        expect(allowed).toStrictEqual(true);
                        return [
                            2
                        ];
                }
            });
        }));
        it("should enforce hasMany max", /*#__PURE__*/ _async_to_generator(function() {
            var maxOptions, val, result, allowed;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        maxOptions = _object_spread_props(_object_spread({}, relationshipOptions), {
                            maxRows: 2,
                            hasMany: true
                        });
                        val = [
                            "a",
                            "b",
                            "c"
                        ];
                        return [
                            4,
                            relationship(val, maxOptions)
                        ];
                    case 1:
                        result = _state.sent();
                        expect(result).not.toBe(true);
                        val = [
                            "a"
                        ];
                        return [
                            4,
                            relationship(val, maxOptions)
                        ];
                    case 2:
                        allowed = _state.sent();
                        expect(allowed).toStrictEqual(true);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe("select", function() {
        var selectOptions = _object_spread_props(_object_spread({}, options), {
            type: "select",
            options: [
                "one",
                "two",
                "three"
            ]
        });
        var optionsRequired = _object_spread_props(_object_spread({}, selectOptions), {
            required: true,
            options: [
                {
                    value: "one",
                    label: "One"
                },
                {
                    value: "two",
                    label: "two"
                },
                {
                    value: "three",
                    label: "three"
                }
            ]
        });
        var optionsWithEmptyString = _object_spread_props(_object_spread({}, selectOptions), {
            options: [
                {
                    value: "",
                    label: "None"
                },
                {
                    value: "option",
                    label: "Option"
                }
            ]
        });
        it("should allow valid input", function() {
            var val = "one";
            var result = select(val, selectOptions);
            expect(result).toStrictEqual(true);
        });
        it("should prevent invalid input", function() {
            var val = "bad";
            var result = select(val, selectOptions);
            expect(result).not.toStrictEqual(true);
        });
        it("should allow null input", function() {
            var val = null;
            var result = select(val, selectOptions);
            expect(result).toStrictEqual(true);
        });
        it("should allow undefined input", function() {
            var val;
            var result = select(val, selectOptions);
            expect(result).toStrictEqual(true);
        });
        it("should prevent empty string input", function() {
            var val = "";
            var result = select(val, selectOptions);
            expect(result).not.toStrictEqual(true);
        });
        it("should prevent undefined input with required", function() {
            var val;
            var result = select(val, optionsRequired);
            expect(result).not.toStrictEqual(true);
        });
        it("should prevent empty string input with required", function() {
            var result = select("", optionsRequired);
            expect(result).not.toStrictEqual(true);
        });
        it("should prevent undefined input with required and hasMany", function() {
            var val;
            options.hasMany = true;
            var result = select(val, optionsRequired);
            expect(result).not.toStrictEqual(true);
        });
        it("should prevent empty array input with required and hasMany", function() {
            optionsRequired.hasMany = true;
            var result = select([], optionsRequired);
            expect(result).not.toStrictEqual(true);
        });
        it("should prevent empty string array input with required and hasMany", function() {
            options.hasMany = true;
            var result = select([
                ""
            ], optionsRequired);
            expect(result).not.toStrictEqual(true);
        });
        it("should prevent null input with required and hasMany", function() {
            var val = null;
            options.hasMany = true;
            var result = select(val, optionsRequired);
            expect(result).not.toStrictEqual(true);
        });
        it("should allow valid input with option objects", function() {
            var val = "one";
            options.hasMany = false;
            var result = select(val, optionsRequired);
            expect(result).toStrictEqual(true);
        });
        it("should prevent invalid input with option objects", function() {
            var val = "bad";
            options.hasMany = false;
            var result = select(val, optionsRequired);
            expect(result).not.toStrictEqual(true);
        });
        it("should allow empty string input with option object", function() {
            var val = "";
            var result = select(val, optionsWithEmptyString);
            expect(result).toStrictEqual(true);
        });
        it("should allow empty string input with option object and required", function() {
            var val = "";
            optionsWithEmptyString.required = true;
            var result = select(val, optionsWithEmptyString);
            expect(result).toStrictEqual(true);
        });
        it("should allow valid input with hasMany", function() {
            var val = [
                "one",
                "two"
            ];
            var result = select(val, selectOptions);
            expect(result).toStrictEqual(true);
        });
        it("should prevent invalid input with hasMany", function() {
            var val = [
                "one",
                "bad"
            ];
            var result = select(val, selectOptions);
            expect(result).not.toStrictEqual(true);
        });
        it("should allow valid input with hasMany option objects", function() {
            var val = [
                "one",
                "three"
            ];
            optionsRequired.hasMany = true;
            var result = select(val, optionsRequired);
            expect(result).toStrictEqual(true);
        });
        it("should prevent invalid input with hasMany option objects", function() {
            var val = [
                "three",
                "bad"
            ];
            optionsRequired.hasMany = true;
            var result = select(val, optionsRequired);
            expect(result).not.toStrictEqual(true);
        });
    });
    describe("number", function() {
        var numberOptions = _object_spread_props(_object_spread({}, options), {
            type: "number",
            name: "test"
        });
        it("should validate", function() {
            var val = 1;
            var result = number(val, numberOptions);
            expect(result).toBe(true);
        });
        it("should validate 2", function() {
            var val = 1.5;
            var result = number(val, numberOptions);
            expect(result).toBe(true);
        });
        it("should show invalid number message", function() {
            var val = "test";
            var result = number(val, _object_spread({}, numberOptions));
            expect(result).toBe("validation:enterNumber");
        });
        it("should handle empty value", function() {
            var val = "";
            var result = number(val, _object_spread({}, numberOptions));
            expect(result).toBe(true);
        });
        it("should handle required value", function() {
            var val = "";
            var result = number(val, _object_spread_props(_object_spread({}, numberOptions), {
                required: true
            }));
            expect(result).toBe("validation:enterNumber");
        });
        it("should validate minValue", function() {
            var val = 2.4;
            var result = number(val, _object_spread_props(_object_spread({}, numberOptions), {
                min: 2.5
            }));
            expect(result).toBe("validation:lessThanMin");
        });
        it("should validate maxValue", function() {
            var val = 1.25;
            var result = number(val, _object_spread_props(_object_spread({}, numberOptions), {
                max: 1
            }));
            expect(result).toBe("validation:greaterThanMax");
        });
        it("should validate an array of numbers", /*#__PURE__*/ _async_to_generator(function() {
            var val, result;
            return _ts_generator(this, function(_state) {
                val = [
                    1.25,
                    2.5
                ];
                result = number(val, _object_spread_props(_object_spread({}, numberOptions), {
                    hasMany: true
                }));
                expect(result).toBe(true);
                return [
                    2
                ];
            });
        }));
        it("should validate an array of numbers using min", /*#__PURE__*/ _async_to_generator(function() {
            var val, result;
            return _ts_generator(this, function(_state) {
                val = [
                    1.25,
                    2.5
                ];
                result = number(val, _object_spread_props(_object_spread({}, numberOptions), {
                    hasMany: true,
                    min: 3
                }));
                expect(result).toBe("validation:lessThanMin");
                return [
                    2
                ];
            });
        }));
        it("should validate an array of numbers using max", /*#__PURE__*/ _async_to_generator(function() {
            var val, result;
            return _ts_generator(this, function(_state) {
                val = [
                    1.25,
                    2.5
                ];
                result = number(val, _object_spread_props(_object_spread({}, numberOptions), {
                    hasMany: true,
                    max: 1
                }));
                expect(result).toBe("validation:greaterThanMax");
                return [
                    2
                ];
            });
        }));
        it("should validate an array of numbers using minRows", /*#__PURE__*/ _async_to_generator(function() {
            var val, result;
            return _ts_generator(this, function(_state) {
                val = [
                    1.25,
                    2.5
                ];
                result = number(val, _object_spread_props(_object_spread({}, numberOptions), {
                    hasMany: true,
                    minRows: 4
                }));
                expect(result).toBe("validation:lessThanMin");
                return [
                    2
                ];
            });
        }));
        it("should validate an array of numbers using maxRows", /*#__PURE__*/ _async_to_generator(function() {
            var val, result;
            return _ts_generator(this, function(_state) {
                val = [
                    1.25,
                    2.5,
                    3.5
                ];
                result = number(val, _object_spread_props(_object_spread({}, numberOptions), {
                    hasMany: true,
                    maxRows: 2
                }));
                expect(result).toBe("validation:greaterThanMax");
                return [
                    2
                ];
            });
        }));
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9maWVsZHMvdmFsaWRhdGlvbnMuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0ZXh0LCB0ZXh0YXJlYSwgcGFzc3dvcmQsIHNlbGVjdCwgcG9pbnQsIG51bWJlciwgcmVsYXRpb25zaGlwIH0gZnJvbSAnLi92YWxpZGF0aW9ucyc7XG5pbXBvcnQgeyBWYWxpZGF0ZU9wdGlvbnMgfSBmcm9tICcuL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBqZXN0IH0gZnJvbSAnQGplc3QvZ2xvYmFscyc7XG5cbmNvbnN0IHQgPSBqZXN0LmZuKChzdHJpbmcpID0+IHN0cmluZyk7XG5cbmxldCBvcHRpb25zOiBWYWxpZGF0ZU9wdGlvbnM8YW55LCBhbnksIGFueT4gPSB7XG4gIG9wZXJhdGlvbjogJ2NyZWF0ZScsXG4gIGRhdGE6IHVuZGVmaW5lZCxcbiAgc2libGluZ0RhdGE6IHVuZGVmaW5lZCxcbiAgdCxcbn07XG5cbmRlc2NyaWJlKCdGaWVsZCBWYWxpZGF0aW9ucycsICgpID0+IHtcbiAgZGVzY3JpYmUoJ3RleHQnLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCB2YWxpZGF0ZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9ICd0ZXN0JztcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRleHQodmFsLCBvcHRpb25zKTtcbiAgICAgIGV4cGVjdChyZXN1bHQpLnRvQmUodHJ1ZSk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBzaG93IHJlcXVpcmVkIG1lc3NhZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSB1bmRlZmluZWQ7XG4gICAgICBjb25zdCByZXN1bHQgPSB0ZXh0KHZhbCwgeyAuLi5vcHRpb25zLCByZXF1aXJlZDogdHJ1ZSB9KTtcbiAgICAgIGV4cGVjdChyZXN1bHQpLnRvQmUoJ3ZhbGlkYXRpb246cmVxdWlyZWQnKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGhhbmRsZSB1bmRlZmluZWQnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSB1bmRlZmluZWQ7XG4gICAgICBjb25zdCByZXN1bHQgPSB0ZXh0KHZhbCwgb3B0aW9ucyk7XG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKHRydWUpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdmFsaWRhdGUgbWF4TGVuZ3RoJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gJ3Rvb2xvbmcnO1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGV4dCh2YWwsIHsgLi4ub3B0aW9ucywgbWF4TGVuZ3RoOiA1IH0pO1xuICAgICAgZXhwZWN0KHJlc3VsdCkudG9CZSgndmFsaWRhdGlvbjpzaG9ydGVyVGhhbk1heCcpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdmFsaWRhdGUgbWluTGVuZ3RoJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gJ3Nob3J0JztcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRleHQodmFsLCB7IC4uLm9wdGlvbnMsIG1pbkxlbmd0aDogMTAgfSk7XG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKCd2YWxpZGF0aW9uOmxvbmdlclRoYW5NaW4nKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHZhbGlkYXRlIG1heExlbmd0aCB3aXRoIG5vIHZhbHVlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gdW5kZWZpbmVkO1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGV4dCh2YWwsIHsgLi4ub3B0aW9ucywgbWF4TGVuZ3RoOiA1IH0pO1xuICAgICAgZXhwZWN0KHJlc3VsdCkudG9CZSh0cnVlKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHZhbGlkYXRlIG1pbkxlbmd0aCB3aXRoIG5vIHZhbHVlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gdW5kZWZpbmVkO1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGV4dCh2YWwsIHsgLi4ub3B0aW9ucywgbWluTGVuZ3RoOiAxMCB9KTtcbiAgICAgIGV4cGVjdChyZXN1bHQpLnRvQmUodHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCd0ZXh0YXJlYScsICgpID0+IHtcbiAgICBvcHRpb25zID0geyAuLi5vcHRpb25zLCBmaWVsZDogeyB0eXBlOiAndGV4dGFyZWEnLCBuYW1lOiAndGVzdCcgfSB9O1xuICAgIGl0KCdzaG91bGQgdmFsaWRhdGUnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSAndGVzdCc7XG4gICAgICBjb25zdCByZXN1bHQgPSB0ZXh0YXJlYSh2YWwsIG9wdGlvbnMpO1xuICAgICAgZXhwZWN0KHJlc3VsdCkudG9CZSh0cnVlKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHNob3cgcmVxdWlyZWQgbWVzc2FnZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IHVuZGVmaW5lZDtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRleHRhcmVhKHZhbCwgeyAuLi5vcHRpb25zLCByZXF1aXJlZDogdHJ1ZSB9KTtcbiAgICAgIGV4cGVjdChyZXN1bHQpLnRvQmUoJ3ZhbGlkYXRpb246cmVxdWlyZWQnKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgaGFuZGxlIHVuZGVmaW5lZCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IHVuZGVmaW5lZDtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRleHRhcmVhKHZhbCwgb3B0aW9ucyk7XG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKHRydWUpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdmFsaWRhdGUgbWF4TGVuZ3RoJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gJ3Rvb2xvbmcnO1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGV4dGFyZWEodmFsLCB7IC4uLm9wdGlvbnMsIG1heExlbmd0aDogNSB9KTtcbiAgICAgIGV4cGVjdChyZXN1bHQpLnRvQmUoJ3ZhbGlkYXRpb246c2hvcnRlclRoYW5NYXgnKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgdmFsaWRhdGUgbWluTGVuZ3RoJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gJ3Nob3J0JztcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRleHRhcmVhKHZhbCwgeyAuLi5vcHRpb25zLCBtaW5MZW5ndGg6IDEwIH0pO1xuICAgICAgZXhwZWN0KHJlc3VsdCkudG9CZSgndmFsaWRhdGlvbjpsb25nZXJUaGFuTWluJyk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCB2YWxpZGF0ZSBtYXhMZW5ndGggd2l0aCBubyB2YWx1ZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IHVuZGVmaW5lZDtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRleHRhcmVhKHZhbCwgeyAuLi5vcHRpb25zLCBtYXhMZW5ndGg6IDUgfSk7XG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKHRydWUpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdmFsaWRhdGUgbWluTGVuZ3RoIHdpdGggbm8gdmFsdWUnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSB1bmRlZmluZWQ7XG4gICAgICBjb25zdCByZXN1bHQgPSB0ZXh0YXJlYSh2YWwsIHsgLi4ub3B0aW9ucywgbWluTGVuZ3RoOiAxMCB9KTtcbiAgICAgIGV4cGVjdChyZXN1bHQpLnRvQmUodHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdwYXNzd29yZCcsICgpID0+IHtcbiAgICBjb25zdCBwYXNzd29yZE9wdGlvbnMgPSB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgIG5hbWU6ICd0ZXN0JyxcbiAgICB9O1xuICAgIGl0KCdzaG91bGQgdmFsaWRhdGUnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSAndGVzdCc7XG4gICAgICBjb25zdCByZXN1bHQgPSBwYXNzd29yZCh2YWwsIHBhc3N3b3JkT3B0aW9ucyk7XG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKHRydWUpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgc2hvdyByZXF1aXJlZCBtZXNzYWdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gdW5kZWZpbmVkO1xuICAgICAgY29uc3QgcmVzdWx0ID0gcGFzc3dvcmQodmFsLCB7IC4uLnBhc3N3b3JkT3B0aW9ucywgcmVxdWlyZWQ6IHRydWUgfSk7XG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKCd2YWxpZGF0aW9uOnJlcXVpcmVkJyk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBoYW5kbGUgdW5kZWZpbmVkJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gdW5kZWZpbmVkO1xuICAgICAgY29uc3QgcmVzdWx0ID0gcGFzc3dvcmQodmFsLCBwYXNzd29yZE9wdGlvbnMpO1xuICAgICAgZXhwZWN0KHJlc3VsdCkudG9CZSh0cnVlKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHZhbGlkYXRlIG1heExlbmd0aCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9ICd0b29sb25nJztcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHBhc3N3b3JkKHZhbCwgeyAuLi5wYXNzd29yZE9wdGlvbnMsIG1heExlbmd0aDogNSB9KTtcbiAgICAgIGV4cGVjdChyZXN1bHQpLnRvQmUoJ3ZhbGlkYXRpb246c2hvcnRlclRoYW5NYXgnKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHZhbGlkYXRlIG1pbkxlbmd0aCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9ICdzaG9ydCc7XG4gICAgICBjb25zdCByZXN1bHQgPSBwYXNzd29yZCh2YWwsIHsgLi4ucGFzc3dvcmRPcHRpb25zLCBtaW5MZW5ndGg6IDEwIH0pO1xuICAgICAgZXhwZWN0KHJlc3VsdCkudG9CZSgndmFsaWRhdGlvbjpsb25nZXJUaGFuTWluJyk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCB2YWxpZGF0ZSBtYXhMZW5ndGggd2l0aCBubyB2YWx1ZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IHVuZGVmaW5lZDtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHBhc3N3b3JkKHZhbCwgeyAuLi5wYXNzd29yZE9wdGlvbnMsIG1heExlbmd0aDogNSB9KTtcbiAgICAgIGV4cGVjdChyZXN1bHQpLnRvQmUodHJ1ZSk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCB2YWxpZGF0ZSBtaW5MZW5ndGggd2l0aCBubyB2YWx1ZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IHVuZGVmaW5lZDtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHBhc3N3b3JkKHZhbCwgeyAuLi5wYXNzd29yZE9wdGlvbnMsIG1pbkxlbmd0aDogMTAgfSk7XG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKHRydWUpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgncG9pbnQnLCAoKSA9PiB7XG4gICAgY29uc3QgcG9pbnRPcHRpb25zID0ge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIHR5cGU6ICdwb2ludCcsXG4gICAgICBuYW1lOiAncG9pbnQnLFxuICAgIH07XG4gICAgaXQoJ3Nob3VsZCB2YWxpZGF0ZSBudW1iZXJzJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gWycwLjEnLCAnMC4yJ107XG4gICAgICBjb25zdCByZXN1bHQgPSBwb2ludCh2YWwsIHBvaW50T3B0aW9ucyk7XG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKHRydWUpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdmFsaWRhdGUgc3RyaW5ncyB0aGF0IGNvdWxkIGJlIG51bWJlcnMnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBbJzAuMScsICcwLjInXTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHBvaW50KHZhbCwgcG9pbnRPcHRpb25zKTtcbiAgICAgIGV4cGVjdChyZXN1bHQpLnRvQmUodHJ1ZSk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBzaG93IHJlcXVpcmVkIG1lc3NhZ2Ugd2hlbiB1bmRlZmluZWQnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSB1bmRlZmluZWQ7XG4gICAgICBjb25zdCByZXN1bHQgPSBwb2ludCh2YWwsIHsgLi4ucG9pbnRPcHRpb25zLCByZXF1aXJlZDogdHJ1ZSB9KTtcbiAgICAgIGV4cGVjdChyZXN1bHQpLm5vdC50b0JlKHRydWUpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgc2hvdyByZXF1aXJlZCBtZXNzYWdlIHdoZW4gYXJyYXknLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBbXTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHBvaW50KHZhbCwgeyAuLi5wb2ludE9wdGlvbnMsIHJlcXVpcmVkOiB0cnVlIH0pO1xuICAgICAgZXhwZWN0KHJlc3VsdCkubm90LnRvQmUodHJ1ZSk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBzaG93IHJlcXVpcmVkIG1lc3NhZ2Ugd2hlbiBhcnJheSBvZiB1bmRlZmluZWQnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBbdW5kZWZpbmVkLCB1bmRlZmluZWRdO1xuICAgICAgY29uc3QgcmVzdWx0ID0gcG9pbnQodmFsLCB7IC4uLnBvaW50T3B0aW9ucywgcmVxdWlyZWQ6IHRydWUgfSk7XG4gICAgICBleHBlY3QocmVzdWx0KS5ub3QudG9CZSh0cnVlKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGhhbmRsZSB1bmRlZmluZWQgbm90IHJlcXVpcmVkJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gdW5kZWZpbmVkO1xuICAgICAgY29uc3QgcmVzdWx0ID0gcGFzc3dvcmQodmFsLCBwb2ludE9wdGlvbnMpO1xuICAgICAgZXhwZWN0KHJlc3VsdCkudG9CZSh0cnVlKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGhhbmRsZSBlbXB0eSBhcnJheSBub3QgcmVxdWlyZWQnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBbXTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHBvaW50KHZhbCwgcG9pbnRPcHRpb25zKTtcbiAgICAgIGV4cGVjdChyZXN1bHQpLnRvQmUodHJ1ZSk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBoYW5kbGUgYXJyYXkgb2YgdW5kZWZpbmVkIG5vdCByZXF1aXJlZCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IFt1bmRlZmluZWQsIHVuZGVmaW5lZF07XG4gICAgICBjb25zdCByZXN1bHQgPSBwb2ludCh2YWwsIHBvaW50T3B0aW9ucyk7XG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKHRydWUpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgcHJldmVudCB0ZXh0IGlucHV0JywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gWydiYWQnLCAnaW5wdXQnXTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHBvaW50KHZhbCwgcG9pbnRPcHRpb25zKTtcbiAgICAgIGV4cGVjdChyZXN1bHQpLm5vdC50b0JlKHRydWUpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgcHJldmVudCBtaXNzaW5nIHZhbHVlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gWzAuMV07XG4gICAgICBjb25zdCByZXN1bHQgPSBwb2ludCh2YWwsIHBvaW50T3B0aW9ucyk7XG4gICAgICBleHBlY3QocmVzdWx0KS5ub3QudG9CZSh0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ3JlbGF0aW9uc2hpcCcsICgpID0+IHtcbiAgICBjb25zdCByZWxhdGlvbnNoaXBPcHRpb25zID0ge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIHJlbGF0aW9uVG86ICdyZWxhdGlvbicsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGNvbGxlY3Rpb25zOiB7XG4gICAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICBzbHVnOiAncmVsYXRpb24nLFxuICAgICAgICAgICAgICBmaWVsZHM6IFt7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICAgIGl0KCdzaG91bGQgaGFuZGxlIHJlcXVpcmVkJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gdW5kZWZpbmVkO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVsYXRpb25zaGlwKHZhbCwgeyAuLi5yZWxhdGlvbnNoaXBPcHRpb25zLCByZXF1aXJlZDogdHJ1ZSB9KTtcbiAgICAgIGV4cGVjdChyZXN1bHQpLm5vdC50b0JlKHRydWUpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgaGFuZGxlIHJlcXVpcmVkIHdpdGggaGFzTWFueScsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IFtdO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVsYXRpb25zaGlwKHZhbCwgeyAuLi5yZWxhdGlvbnNoaXBPcHRpb25zLCByZXF1aXJlZDogdHJ1ZSwgaGFzTWFueTogdHJ1ZSB9KTtcbiAgICAgIGV4cGVjdChyZXN1bHQpLm5vdC50b0JlKHRydWUpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgZW5mb3JjZSBoYXNNYW55IG1pbicsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IG1pbk9wdGlvbnMgPSB7XG4gICAgICAgIC4uLnJlbGF0aW9uc2hpcE9wdGlvbnMsXG4gICAgICAgIGhhc01hbnk6IHRydWUsXG4gICAgICAgIG1pblJvd3M6IDIsXG4gICAgICB9O1xuXG4gICAgICBjb25zdCB2YWwgPSBbJ2EnXTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVsYXRpb25zaGlwKHZhbCwgbWluT3B0aW9ucyk7XG4gICAgICBleHBlY3QocmVzdWx0KS5ub3QudG9CZSh0cnVlKTtcblxuICAgICAgY29uc3QgYWxsb3dlZCA9IGF3YWl0IHJlbGF0aW9uc2hpcChbJ2EnLCAnYiddLCBtaW5PcHRpb25zKTtcbiAgICAgIGV4cGVjdChhbGxvd2VkKS50b1N0cmljdEVxdWFsKHRydWUpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgZW5mb3JjZSBoYXNNYW55IG1heCcsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IG1heE9wdGlvbnMgPSB7XG4gICAgICAgIC4uLnJlbGF0aW9uc2hpcE9wdGlvbnMsXG4gICAgICAgIG1heFJvd3M6IDIsXG4gICAgICAgIGhhc01hbnk6IHRydWUsXG4gICAgICB9O1xuICAgICAgbGV0IHZhbCA9IFsnYScsICdiJywgJ2MnXTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVsYXRpb25zaGlwKHZhbCwgbWF4T3B0aW9ucyk7XG4gICAgICBleHBlY3QocmVzdWx0KS5ub3QudG9CZSh0cnVlKTtcblxuICAgICAgdmFsID0gWydhJ107XG4gICAgICBjb25zdCBhbGxvd2VkID0gYXdhaXQgcmVsYXRpb25zaGlwKHZhbCwgbWF4T3B0aW9ucyk7XG4gICAgICBleHBlY3QoYWxsb3dlZCkudG9TdHJpY3RFcXVhbCh0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ3NlbGVjdCcsICgpID0+IHtcbiAgICBjb25zdCBzZWxlY3RPcHRpb25zID0ge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgb3B0aW9uczogWydvbmUnLCAndHdvJywgJ3RocmVlJ10sXG4gICAgfTtcbiAgICBjb25zdCBvcHRpb25zUmVxdWlyZWQgPSB7XG4gICAgICAuLi5zZWxlY3RPcHRpb25zLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBvcHRpb25zOiBbe1xuICAgICAgICB2YWx1ZTogJ29uZScsXG4gICAgICAgIGxhYmVsOiAnT25lJyxcbiAgICAgIH0sIHtcbiAgICAgICAgdmFsdWU6ICd0d28nLFxuICAgICAgICBsYWJlbDogJ3R3bycsXG4gICAgICB9LCB7XG4gICAgICAgIHZhbHVlOiAndGhyZWUnLFxuICAgICAgICBsYWJlbDogJ3RocmVlJyxcbiAgICAgIH1dLFxuICAgIH07XG4gICAgY29uc3Qgb3B0aW9uc1dpdGhFbXB0eVN0cmluZyA9IHtcbiAgICAgIC4uLnNlbGVjdE9wdGlvbnMsXG4gICAgICBvcHRpb25zOiBbe1xuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIGxhYmVsOiAnTm9uZScsXG4gICAgICB9LCB7XG4gICAgICAgIHZhbHVlOiAnb3B0aW9uJyxcbiAgICAgICAgbGFiZWw6ICdPcHRpb24nLFxuICAgICAgfV0sXG4gICAgfTtcbiAgICBpdCgnc2hvdWxkIGFsbG93IHZhbGlkIGlucHV0JywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gJ29uZSc7XG4gICAgICBjb25zdCByZXN1bHQgPSBzZWxlY3QodmFsLCBzZWxlY3RPcHRpb25zKTtcbiAgICAgIGV4cGVjdChyZXN1bHQpLnRvU3RyaWN0RXF1YWwodHJ1ZSk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBwcmV2ZW50IGludmFsaWQgaW5wdXQnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSAnYmFkJztcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNlbGVjdCh2YWwsIHNlbGVjdE9wdGlvbnMpO1xuICAgICAgZXhwZWN0KHJlc3VsdCkubm90LnRvU3RyaWN0RXF1YWwodHJ1ZSk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBhbGxvdyBudWxsIGlucHV0JywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gbnVsbDtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNlbGVjdCh2YWwsIHNlbGVjdE9wdGlvbnMpO1xuICAgICAgZXhwZWN0KHJlc3VsdCkudG9TdHJpY3RFcXVhbCh0cnVlKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGFsbG93IHVuZGVmaW5lZCBpbnB1dCcsICgpID0+IHtcbiAgICAgIGxldCB2YWw7XG4gICAgICBjb25zdCByZXN1bHQgPSBzZWxlY3QodmFsLCBzZWxlY3RPcHRpb25zKTtcbiAgICAgIGV4cGVjdChyZXN1bHQpLnRvU3RyaWN0RXF1YWwodHJ1ZSk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBwcmV2ZW50IGVtcHR5IHN0cmluZyBpbnB1dCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9ICcnO1xuICAgICAgY29uc3QgcmVzdWx0ID0gc2VsZWN0KHZhbCwgc2VsZWN0T3B0aW9ucyk7XG4gICAgICBleHBlY3QocmVzdWx0KS5ub3QudG9TdHJpY3RFcXVhbCh0cnVlKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHByZXZlbnQgdW5kZWZpbmVkIGlucHV0IHdpdGggcmVxdWlyZWQnLCAoKSA9PiB7XG4gICAgICBsZXQgdmFsO1xuICAgICAgY29uc3QgcmVzdWx0ID0gc2VsZWN0KHZhbCwgb3B0aW9uc1JlcXVpcmVkKTtcbiAgICAgIGV4cGVjdChyZXN1bHQpLm5vdC50b1N0cmljdEVxdWFsKHRydWUpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgcHJldmVudCBlbXB0eSBzdHJpbmcgaW5wdXQgd2l0aCByZXF1aXJlZCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNlbGVjdCgnJywgb3B0aW9uc1JlcXVpcmVkKTtcbiAgICAgIGV4cGVjdChyZXN1bHQpLm5vdC50b1N0cmljdEVxdWFsKHRydWUpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgcHJldmVudCB1bmRlZmluZWQgaW5wdXQgd2l0aCByZXF1aXJlZCBhbmQgaGFzTWFueScsICgpID0+IHtcbiAgICAgIGxldCB2YWw7XG4gICAgICBvcHRpb25zLmhhc01hbnkgPSB0cnVlO1xuICAgICAgY29uc3QgcmVzdWx0ID0gc2VsZWN0KHZhbCwgb3B0aW9uc1JlcXVpcmVkKTtcbiAgICAgIGV4cGVjdChyZXN1bHQpLm5vdC50b1N0cmljdEVxdWFsKHRydWUpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgcHJldmVudCBlbXB0eSBhcnJheSBpbnB1dCB3aXRoIHJlcXVpcmVkIGFuZCBoYXNNYW55JywgKCkgPT4ge1xuICAgICAgb3B0aW9uc1JlcXVpcmVkLmhhc01hbnkgPSB0cnVlO1xuICAgICAgY29uc3QgcmVzdWx0ID0gc2VsZWN0KFtdLCBvcHRpb25zUmVxdWlyZWQpO1xuICAgICAgZXhwZWN0KHJlc3VsdCkubm90LnRvU3RyaWN0RXF1YWwodHJ1ZSk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBwcmV2ZW50IGVtcHR5IHN0cmluZyBhcnJheSBpbnB1dCB3aXRoIHJlcXVpcmVkIGFuZCBoYXNNYW55JywgKCkgPT4ge1xuICAgICAgb3B0aW9ucy5oYXNNYW55ID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNlbGVjdChbJyddLCBvcHRpb25zUmVxdWlyZWQpO1xuICAgICAgZXhwZWN0KHJlc3VsdCkubm90LnRvU3RyaWN0RXF1YWwodHJ1ZSk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBwcmV2ZW50IG51bGwgaW5wdXQgd2l0aCByZXF1aXJlZCBhbmQgaGFzTWFueScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IG51bGw7XG4gICAgICBvcHRpb25zLmhhc01hbnkgPSB0cnVlO1xuICAgICAgY29uc3QgcmVzdWx0ID0gc2VsZWN0KHZhbCwgb3B0aW9uc1JlcXVpcmVkKTtcbiAgICAgIGV4cGVjdChyZXN1bHQpLm5vdC50b1N0cmljdEVxdWFsKHRydWUpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgYWxsb3cgdmFsaWQgaW5wdXQgd2l0aCBvcHRpb24gb2JqZWN0cycsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9ICdvbmUnO1xuICAgICAgb3B0aW9ucy5oYXNNYW55ID0gZmFsc2U7XG4gICAgICBjb25zdCByZXN1bHQgPSBzZWxlY3QodmFsLCBvcHRpb25zUmVxdWlyZWQpO1xuICAgICAgZXhwZWN0KHJlc3VsdCkudG9TdHJpY3RFcXVhbCh0cnVlKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHByZXZlbnQgaW52YWxpZCBpbnB1dCB3aXRoIG9wdGlvbiBvYmplY3RzJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gJ2JhZCc7XG4gICAgICBvcHRpb25zLmhhc01hbnkgPSBmYWxzZTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNlbGVjdCh2YWwsIG9wdGlvbnNSZXF1aXJlZCk7XG4gICAgICBleHBlY3QocmVzdWx0KS5ub3QudG9TdHJpY3RFcXVhbCh0cnVlKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGFsbG93IGVtcHR5IHN0cmluZyBpbnB1dCB3aXRoIG9wdGlvbiBvYmplY3QnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSAnJztcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNlbGVjdCh2YWwsIG9wdGlvbnNXaXRoRW1wdHlTdHJpbmcpO1xuICAgICAgZXhwZWN0KHJlc3VsdCkudG9TdHJpY3RFcXVhbCh0cnVlKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGFsbG93IGVtcHR5IHN0cmluZyBpbnB1dCB3aXRoIG9wdGlvbiBvYmplY3QgYW5kIHJlcXVpcmVkJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gJyc7XG4gICAgICBvcHRpb25zV2l0aEVtcHR5U3RyaW5nLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNlbGVjdCh2YWwsIG9wdGlvbnNXaXRoRW1wdHlTdHJpbmcpO1xuICAgICAgZXhwZWN0KHJlc3VsdCkudG9TdHJpY3RFcXVhbCh0cnVlKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGFsbG93IHZhbGlkIGlucHV0IHdpdGggaGFzTWFueScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IFsnb25lJywgJ3R3byddO1xuICAgICAgY29uc3QgcmVzdWx0ID0gc2VsZWN0KHZhbCwgc2VsZWN0T3B0aW9ucyk7XG4gICAgICBleHBlY3QocmVzdWx0KS50b1N0cmljdEVxdWFsKHRydWUpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgcHJldmVudCBpbnZhbGlkIGlucHV0IHdpdGggaGFzTWFueScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IFsnb25lJywgJ2JhZCddO1xuICAgICAgY29uc3QgcmVzdWx0ID0gc2VsZWN0KHZhbCwgc2VsZWN0T3B0aW9ucyk7XG4gICAgICBleHBlY3QocmVzdWx0KS5ub3QudG9TdHJpY3RFcXVhbCh0cnVlKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGFsbG93IHZhbGlkIGlucHV0IHdpdGggaGFzTWFueSBvcHRpb24gb2JqZWN0cycsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IFsnb25lJywgJ3RocmVlJ107XG4gICAgICBvcHRpb25zUmVxdWlyZWQuaGFzTWFueSA9IHRydWU7XG4gICAgICBjb25zdCByZXN1bHQgPSBzZWxlY3QodmFsLCBvcHRpb25zUmVxdWlyZWQpO1xuICAgICAgZXhwZWN0KHJlc3VsdCkudG9TdHJpY3RFcXVhbCh0cnVlKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHByZXZlbnQgaW52YWxpZCBpbnB1dCB3aXRoIGhhc01hbnkgb3B0aW9uIG9iamVjdHMnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBbJ3RocmVlJywgJ2JhZCddO1xuICAgICAgb3B0aW9uc1JlcXVpcmVkLmhhc01hbnkgPSB0cnVlO1xuICAgICAgY29uc3QgcmVzdWx0ID0gc2VsZWN0KHZhbCwgb3B0aW9uc1JlcXVpcmVkKTtcbiAgICAgIGV4cGVjdChyZXN1bHQpLm5vdC50b1N0cmljdEVxdWFsKHRydWUpO1xuICAgIH0pO1xuICB9KTtcbiAgZGVzY3JpYmUoJ251bWJlcicsICgpID0+IHtcbiAgICBjb25zdCBudW1iZXJPcHRpb25zID0ge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgbmFtZTogJ3Rlc3QnLFxuICAgIH07XG4gICAgaXQoJ3Nob3VsZCB2YWxpZGF0ZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IDE7XG4gICAgICBjb25zdCByZXN1bHQgPSBudW1iZXIodmFsLCBudW1iZXJPcHRpb25zKTtcbiAgICAgIGV4cGVjdChyZXN1bHQpLnRvQmUodHJ1ZSk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCB2YWxpZGF0ZSAyJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gMS41O1xuICAgICAgY29uc3QgcmVzdWx0ID0gbnVtYmVyKHZhbCwgbnVtYmVyT3B0aW9ucyk7XG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKHRydWUpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgc2hvdyBpbnZhbGlkIG51bWJlciBtZXNzYWdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gJ3Rlc3QnO1xuICAgICAgY29uc3QgcmVzdWx0ID0gbnVtYmVyKHZhbCwgeyAuLi5udW1iZXJPcHRpb25zIH0pO1xuICAgICAgZXhwZWN0KHJlc3VsdCkudG9CZSgndmFsaWRhdGlvbjplbnRlck51bWJlcicpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgaGFuZGxlIGVtcHR5IHZhbHVlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gJyc7XG4gICAgICBjb25zdCByZXN1bHQgPSBudW1iZXIodmFsLCB7IC4uLm51bWJlck9wdGlvbnMgfSk7XG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKHRydWUpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgaGFuZGxlIHJlcXVpcmVkIHZhbHVlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gJyc7XG4gICAgICBjb25zdCByZXN1bHQgPSBudW1iZXIodmFsLCB7IC4uLm51bWJlck9wdGlvbnMsIHJlcXVpcmVkOiB0cnVlIH0pO1xuICAgICAgZXhwZWN0KHJlc3VsdCkudG9CZSgndmFsaWRhdGlvbjplbnRlck51bWJlcicpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdmFsaWRhdGUgbWluVmFsdWUnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSAyLjQ7XG4gICAgICBjb25zdCByZXN1bHQgPSBudW1iZXIodmFsLCB7IC4uLm51bWJlck9wdGlvbnMsIG1pbjogMi41IH0pO1xuICAgICAgZXhwZWN0KHJlc3VsdCkudG9CZSgndmFsaWRhdGlvbjpsZXNzVGhhbk1pbicpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdmFsaWRhdGUgbWF4VmFsdWUnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSAxLjI1O1xuICAgICAgY29uc3QgcmVzdWx0ID0gbnVtYmVyKHZhbCwgeyAuLi5udW1iZXJPcHRpb25zLCBtYXg6IDEgfSk7XG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKCd2YWxpZGF0aW9uOmdyZWF0ZXJUaGFuTWF4Jyk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCB2YWxpZGF0ZSBhbiBhcnJheSBvZiBudW1iZXJzJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gWzEuMjUsIDIuNV07XG4gICAgICBjb25zdCByZXN1bHQgPSBudW1iZXIodmFsLCB7IC4uLm51bWJlck9wdGlvbnMsIGhhc01hbnk6IHRydWUgfSk7XG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKHRydWUpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdmFsaWRhdGUgYW4gYXJyYXkgb2YgbnVtYmVycyB1c2luZyBtaW4nLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBbMS4yNSwgMi41XTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IG51bWJlcih2YWwsIHsgLi4ubnVtYmVyT3B0aW9ucywgaGFzTWFueTogdHJ1ZSwgbWluOiAzIH0pO1xuICAgICAgZXhwZWN0KHJlc3VsdCkudG9CZSgndmFsaWRhdGlvbjpsZXNzVGhhbk1pbicpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdmFsaWRhdGUgYW4gYXJyYXkgb2YgbnVtYmVycyB1c2luZyBtYXgnLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBbMS4yNSwgMi41XTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IG51bWJlcih2YWwsIHsgLi4ubnVtYmVyT3B0aW9ucywgaGFzTWFueTogdHJ1ZSwgbWF4OiAxIH0pO1xuICAgICAgZXhwZWN0KHJlc3VsdCkudG9CZSgndmFsaWRhdGlvbjpncmVhdGVyVGhhbk1heCcpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdmFsaWRhdGUgYW4gYXJyYXkgb2YgbnVtYmVycyB1c2luZyBtaW5Sb3dzJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gWzEuMjUsIDIuNV07XG4gICAgICBjb25zdCByZXN1bHQgPSBudW1iZXIodmFsLCB7IC4uLm51bWJlck9wdGlvbnMsIGhhc01hbnk6IHRydWUsIG1pblJvd3M6IDQgfSk7XG4gICAgICBleHBlY3QocmVzdWx0KS50b0JlKCd2YWxpZGF0aW9uOmxlc3NUaGFuTWluJyk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCB2YWxpZGF0ZSBhbiBhcnJheSBvZiBudW1iZXJzIHVzaW5nIG1heFJvd3MnLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBbMS4yNSwgMi41LCAzLjVdO1xuICAgICAgY29uc3QgcmVzdWx0ID0gbnVtYmVyKHZhbCwgeyAuLi5udW1iZXJPcHRpb25zLCBoYXNNYW55OiB0cnVlLCBtYXhSb3dzOiAyIH0pO1xuICAgICAgZXhwZWN0KHJlc3VsdCkudG9CZSgndmFsaWRhdGlvbjpncmVhdGVyVGhhbk1heCcpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbInRleHQiLCJ0ZXh0YXJlYSIsInBhc3N3b3JkIiwic2VsZWN0IiwicG9pbnQiLCJudW1iZXIiLCJyZWxhdGlvbnNoaXAiLCJqZXN0IiwidCIsImZuIiwic3RyaW5nIiwib3B0aW9ucyIsIm9wZXJhdGlvbiIsImRhdGEiLCJ1bmRlZmluZWQiLCJzaWJsaW5nRGF0YSIsImRlc2NyaWJlIiwiaXQiLCJ2YWwiLCJyZXN1bHQiLCJleHBlY3QiLCJ0b0JlIiwicmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJtaW5MZW5ndGgiLCJmaWVsZCIsInR5cGUiLCJuYW1lIiwicGFzc3dvcmRPcHRpb25zIiwicG9pbnRPcHRpb25zIiwibm90IiwicmVsYXRpb25zaGlwT3B0aW9ucyIsInJlbGF0aW9uVG8iLCJwYXlsb2FkIiwiY29sbGVjdGlvbnMiLCJyZWxhdGlvbiIsImNvbmZpZyIsInNsdWciLCJmaWVsZHMiLCJoYXNNYW55IiwibWluT3B0aW9ucyIsImFsbG93ZWQiLCJtaW5Sb3dzIiwidG9TdHJpY3RFcXVhbCIsIm1heE9wdGlvbnMiLCJtYXhSb3dzIiwic2VsZWN0T3B0aW9ucyIsIm9wdGlvbnNSZXF1aXJlZCIsInZhbHVlIiwibGFiZWwiLCJvcHRpb25zV2l0aEVtcHR5U3RyaW5nIiwibnVtYmVyT3B0aW9ucyIsIm1pbiIsIm1heCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxZQUFZLFFBQVEsZ0JBQWdCO0FBRTlGLFNBQVNDLElBQUksUUFBUSxnQkFBZ0I7QUFFckMsSUFBTUMsSUFBSUQsS0FBS0UsRUFBRSxDQUFDLFNBQUNDO1dBQVdBOztBQUU5QixJQUFJQyxVQUEwQztJQUM1Q0MsV0FBVztJQUNYQyxNQUFNQztJQUNOQyxhQUFhRDtJQUNiTixHQUFBQTtBQUNGO0FBRUFRLFNBQVMscUJBQXFCO0lBQzVCQSxTQUFTLFFBQVE7UUFDZkMsR0FBRyxtQkFBbUI7WUFDcEIsSUFBTUMsTUFBTTtZQUNaLElBQU1DLFNBQVNuQixLQUFLa0IsS0FBS1A7WUFDekJTLE9BQU9ELFFBQVFFLElBQUksQ0FBQztRQUN0QjtRQUNBSixHQUFHLGdDQUFnQztZQUNqQyxJQUFNQyxNQUFNSjtZQUNaLElBQU1LLFNBQVNuQixLQUFLa0IsS0FBSyx3Q0FBS1A7Z0JBQVNXLFVBQVU7O1lBQ2pERixPQUFPRCxRQUFR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