"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    number: function() {
        return number;
    },
    text: function() {
        return text;
    },
    password: function() {
        return password;
    },
    email: function() {
        return email;
    },
    textarea: function() {
        return textarea;
    },
    code: function() {
        return code;
    },
    json: function() {
        return json;
    },
    richText: function() {
        return richText;
    },
    checkbox: function() {
        return checkbox;
    },
    date: function() {
        return date;
    },
    upload: function() {
        return upload;
    },
    relationship: function() {
        return relationship;
    },
    array: function() {
        return array;
    },
    select: function() {
        return select;
    },
    radio: function() {
        return radio;
    },
    blocks: function() {
        return blocks;
    },
    point: function() {
        return point;
    },
    default: function() {
        return _default;
    }
});
var _defaultValue = /*#__PURE__*/ _interop_require_default(require("./richText/defaultValue"));
var _types = require("./config/types");
var _canUseDOM = /*#__PURE__*/ _interop_require_default(require("../utilities/canUseDOM"));
var _isValidID = require("../utilities/isValidID");
var _getIDType = require("../utilities/getIDType");
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
var number = function(value, param) {
    var t = param.t, required = param.required, min = param.min, max = param.max, minRows = param.minRows, maxRows = param.maxRows, hasMany = param.hasMany;
    var toValidate = Array.isArray(value) ? value : [
        value
    ];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        // eslint-disable-next-line no-restricted-syntax
        for(var _iterator = toValidate[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var valueToValidate = _step.value;
            var floatValue = parseFloat(valueToValidate);
            if (value && typeof floatValue !== "number" || required && Number.isNaN(floatValue) || value && Number.isNaN(floatValue)) {
                return t("validation:enterNumber");
            }
            if (typeof max === "number" && floatValue > max) {
                return t("validation:greaterThanMax", {
                    value: value,
                    max: max,
                    label: t("value")
                });
            }
            if (typeof min === "number" && floatValue < min) {
                return t("validation:lessThanMin", {
                    value: value,
                    min: min,
                    label: t("value")
                });
            }
            if (required && typeof floatValue !== "number") {
                return t("validation:required");
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
    if (required && toValidate.length === 0) {
        return t("validation:required");
    }
    if (hasMany === true) {
        if (minRows && toValidate.length < minRows) {
            return t("validation:lessThanMin", {
                value: toValidate.length,
                min: minRows,
                label: t("rows")
            });
        }
        if (maxRows && toValidate.length > maxRows) {
            return t("validation:greaterThanMax", {
                value: toValidate.length,
                max: maxRows,
                label: t("rows")
            });
        }
    }
    return true;
};
var text = function(value, param) {
    var t = param.t, minLength = param.minLength, fieldMaxLength = param.maxLength, required = param.required, payload = param.payload;
    var _payload_config, _payload, _value;
    var maxLength;
    if (typeof ((_payload = payload) === null || _payload === void 0 ? void 0 : (_payload_config = _payload.config) === null || _payload_config === void 0 ? void 0 : _payload_config.defaultMaxTextLength) === "number") maxLength = payload.config.defaultMaxTextLength;
    if (typeof fieldMaxLength === "number") maxLength = fieldMaxLength;
    if (value && maxLength && value.length > maxLength) {
        return t("validation:shorterThanMax", {
            maxLength: maxLength
        });
    }
    if (value && minLength && ((_value = value) === null || _value === void 0 ? void 0 : _value.length) < minLength) {
        return t("validation:longerThanMin", {
            minLength: minLength
        });
    }
    if (required) {
        var _value1;
        if (typeof value !== "string" || ((_value1 = value) === null || _value1 === void 0 ? void 0 : _value1.length) === 0) {
            return t("validation:required");
        }
    }
    return true;
};
var password = function(value, param) {
    var t = param.t, required = param.required, fieldMaxLength = param.maxLength, minLength = param.minLength, payload = param.payload;
    var _payload_config, _payload;
    var maxLength;
    if (typeof ((_payload = payload) === null || _payload === void 0 ? void 0 : (_payload_config = _payload.config) === null || _payload_config === void 0 ? void 0 : _payload_config.defaultMaxTextLength) === "number") maxLength = payload.config.defaultMaxTextLength;
    if (typeof fieldMaxLength === "number") maxLength = fieldMaxLength;
    if (value && maxLength && value.length > maxLength) {
        return t("validation:shorterThanMax", {
            maxLength: maxLength
        });
    }
    if (value && minLength && value.length < minLength) {
        return t("validation:longerThanMin", {
            minLength: minLength
        });
    }
    if (required && !value) {
        return t("validation:required");
    }
    return true;
};
var email = function(value, param) {
    var t = param.t, required = param.required;
    if (value && !/\S+@\S+\.\S+/.test(value) || !value && required) {
        return t("validation:emailAddress");
    }
    return true;
};
var textarea = function(value, param) {
    var t = param.t, required = param.required, fieldMaxLength = param.maxLength, minLength = param.minLength, payload = param.payload;
    var _payload_config, _payload;
    var maxLength;
    if (typeof ((_payload = payload) === null || _payload === void 0 ? void 0 : (_payload_config = _payload.config) === null || _payload_config === void 0 ? void 0 : _payload_config.defaultMaxTextLength) === "number") maxLength = payload.config.defaultMaxTextLength;
    if (typeof fieldMaxLength === "number") maxLength = fieldMaxLength;
    if (value && maxLength && value.length > maxLength) {
        return t("validation:shorterThanMax", {
            maxLength: maxLength
        });
    }
    if (value && minLength && value.length < minLength) {
        return t("validation:longerThanMin", {
            minLength: minLength
        });
    }
    if (required && !value) {
        return t("validation:required");
    }
    return true;
};
var code = function(value, param) {
    var t = param.t, required = param.required;
    if (required && value === undefined) {
        return t("validation:required");
    }
    return true;
};
var json = function(value, param) {
    var t = param.t, required = param.required, jsonError = param.jsonError;
    if (required && !value) {
        return t("validation:required");
    }
    if (jsonError !== undefined) {
        return t("validation:invalidInput");
    }
    return true;
};
var richText = function(value, param) {
    var t = param.t, required = param.required;
    if (required) {
        var stringifiedDefaultValue = JSON.stringify(_defaultValue.default);
        if (value && JSON.stringify(value) !== stringifiedDefaultValue) return true;
        return t("validation:required");
    }
    return true;
};
var checkbox = function(value, param) {
    var t = param.t, required = param.required;
    if (value && typeof value !== "boolean" || required && typeof value !== "boolean") {
        return t("validation:trueOrFalse");
    }
    return true;
};
var date = function(value, param) {
    var t = param.t, required = param.required;
    if (value && !isNaN(Date.parse(value.toString()))) {
        return true;
    }
    if (value) {
        return t("validation:notValidDate", {
            value: value
        });
    }
    if (required) {
        return t("validation:required");
    }
    return true;
};
var validateFilterOptions = function() {
    var _ref = _async_to_generator(function(value, param) {
        var t, filterOptions, id, user, data, siblingData, relationTo, payload, options, collections, values, invalidRelationships;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    t = param.t, filterOptions = param.filterOptions, id = param.id, user = param.user, data = param.data, siblingData = param.siblingData, relationTo = param.relationTo, payload = param.payload;
                    if (!(!_canUseDOM.default && typeof filterOptions !== "undefined" && value)) return [
                        3,
                        2
                    ];
                    options = {};
                    collections = typeof relationTo === "string" ? [
                        relationTo
                    ] : relationTo;
                    values = Array.isArray(value) ? value : [
                        value
                    ];
                    return [
                        4,
                        Promise.all(collections.map(function() {
                            var _ref = _async_to_generator(function(collection) {
                                var optionFilter, _tmp, valueIDs, result;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            if (!(typeof filterOptions === "function")) return [
                                                3,
                                                2
                                            ];
                                            return [
                                                4,
                                                filterOptions({
                                                    id: id,
                                                    data: data,
                                                    siblingData: siblingData,
                                                    user: user,
                                                    relationTo: collection
                                                })
                                            ];
                                        case 1:
                                            _tmp = _state.sent();
                                            return [
                                                3,
                                                3
                                            ];
                                        case 2:
                                            _tmp = filterOptions;
                                            _state.label = 3;
                                        case 3:
                                            optionFilter = _tmp;
                                            valueIDs = [];
                                            values.forEach(function(val) {
                                                var _val;
                                                if (typeof val === "object" && ((_val = val) === null || _val === void 0 ? void 0 : _val.value)) {
                                                    valueIDs.push(val.value);
                                                }
                                                if (typeof val === "string" || typeof val === "number") {
                                                    valueIDs.push(val);
                                                }
                                            });
                                            return [
                                                4,
                                                payload.find({
                                                    collection: collection,
                                                    depth: 0,
                                                    limit: 0,
                                                    pagination: false,
                                                    where: {
                                                        and: [
                                                            {
                                                                id: {
                                                                    in: valueIDs
                                                                }
                                                            },
                                                            optionFilter
                                                        ]
                                                    }
                                                })
                                            ];
                                        case 4:
                                            result = _state.sent();
                                            options[collection] = result.docs.map(function(doc) {
                                                return doc.id;
                                            });
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                            return function(collection) {
                                return _ref.apply(this, arguments);
                            };
                        }()))
                    ];
                case 1:
                    _state.sent();
                    invalidRelationships = values.filter(function(val) {
                        var _val;
                        var collection;
                        var requestedID;
                        if (typeof relationTo === "string") {
                            collection = relationTo;
                            if (typeof val === "string" || typeof val === "number") {
                                requestedID = val;
                            }
                        }
                        if (Array.isArray(relationTo) && typeof val === "object" && ((_val = val) === null || _val === void 0 ? void 0 : _val.relationTo)) {
                            collection = val.relationTo;
                            requestedID = val.value;
                        }
                        return options[collection].indexOf(requestedID) === -1;
                    });
                    if (invalidRelationships.length > 0) {
                        return [
                            2,
                            invalidRelationships.reduce(function(err, invalid, i) {
                                return "".concat(err, " ").concat(JSON.stringify(invalid)).concat(invalidRelationships.length === i + 1 ? "," : "", " ");
                            }, t("validation:invalidSelections"))
                        ];
                    }
                    return [
                        2,
                        true
                    ];
                case 2:
                    return [
                        2,
                        true
                    ];
            }
        });
    });
    return function validateFilterOptions(value, _) {
        return _ref.apply(this, arguments);
    };
}();
var upload = function(value, options) {
    if (!value && options.required) {
        return options.t("validation:required");
    }
    if (!_canUseDOM.default && typeof value !== "undefined" && value !== null) {
        var idField = options.payload.collections[options.relationTo].config.fields.find(function(field) {
            return (0, _types.fieldAffectsData)(field) && field.name === "id";
        });
        var type = (0, _getIDType.getIDType)(idField);
        if (!(0, _isValidID.isValidID)(value, type)) {
            return options.t("validation:validUploadID");
        }
    }
    return validateFilterOptions(value, options);
};
var relationship = function() {
    var _ref = _async_to_generator(function(value, options) {
        var required, minRows, maxRows, relationTo, payload, t, values, invalidRelationships;
        return _ts_generator(this, function(_state) {
            required = options.required, minRows = options.minRows, maxRows = options.maxRows, relationTo = options.relationTo, payload = options.payload, t = options.t;
            if ((!value || Array.isArray(value) && value.length === 0) && required) {
                return [
                    2,
                    options.t("validation:required")
                ];
            }
            if (Array.isArray(value)) {
                if (minRows && value.length < minRows) {
                    return [
                        2,
                        t("validation:lessThanMin", {
                            value: value.length,
                            min: minRows,
                            label: t("rows")
                        })
                    ];
                }
                if (maxRows && value.length > maxRows) {
                    return [
                        2,
                        t("validation:greaterThanMax", {
                            value: value.length,
                            max: maxRows,
                            label: t("rows")
                        })
                    ];
                }
            }
            if (!_canUseDOM.default && typeof value !== "undefined" && value !== null) {
                values = Array.isArray(value) ? value : [
                    value
                ];
                invalidRelationships = values.filter(function(val) {
                    var _val, _payload_collections_collection_config_fields, _payload_collections_collection_config, _payload_collections_collection;
                    var collection;
                    var requestedID;
                    if (typeof relationTo === "string") {
                        collection = relationTo;
                        // custom id
                        if (val) {
                            requestedID = val;
                        }
                    }
                    if (Array.isArray(relationTo) && typeof val === "object" && ((_val = val) === null || _val === void 0 ? void 0 : _val.relationTo)) {
                        collection = val.relationTo;
                        requestedID = val.value;
                    }
                    if (requestedID === null) return false;
                    var idField = (_payload_collections_collection = payload.collections[collection]) === null || _payload_collections_collection === void 0 ? void 0 : (_payload_collections_collection_config = _payload_collections_collection.config) === null || _payload_collections_collection_config === void 0 ? void 0 : (_payload_collections_collection_config_fields = _payload_collections_collection_config.fields) === null || _payload_collections_collection_config_fields === void 0 ? void 0 : _payload_collections_collection_config_fields.find(function(field) {
                        return (0, _types.fieldAffectsData)(field) && field.name === "id";
                    });
                    var type;
                    if (idField) {
                        type = idField.type === "number" ? "number" : "text";
                    } else {
                        type = "ObjectID";
                    }
                    if (typeof requestedID === "number") return false;
                    return !(0, _isValidID.isValidID)(requestedID, type);
                });
                if (invalidRelationships.length > 0) {
                    return [
                        2,
                        "This field has the following invalid selections: ".concat(invalidRelationships.map(function(err, invalid) {
                            return "".concat(err, " ").concat(JSON.stringify(invalid));
                        }).join(", "))
                    ];
                }
            }
            return [
                2,
                validateFilterOptions(value, options)
            ];
        });
    });
    return function relationship(value, options) {
        return _ref.apply(this, arguments);
    };
}();
var array = function(value, param) {
    var t = param.t, minRows = param.minRows, maxRows = param.maxRows, required = param.required;
    if (minRows && value < minRows) {
        return t("validation:requiresAtLeast", {
            count: minRows,
            label: t("rows")
        });
    }
    if (maxRows && value > maxRows) {
        return t("validation:requiresNoMoreThan", {
            count: maxRows,
            label: t("rows")
        });
    }
    if (!value && required) {
        return t("validation:requiresAtLeast", {
            count: 1,
            label: t("row")
        });
    }
    return true;
};
var select = function(value, param) {
    var t = param.t, options = param.options, hasMany = param.hasMany, required = param.required;
    var _value;
    if (Array.isArray(value) && value.some(function(input) {
        return !options.some(function(option) {
            var _option;
            return option === input || typeof option !== "string" && ((_option = option) === null || _option === void 0 ? void 0 : _option.value) === input;
        });
    })) {
        return t("validation:invalidSelection");
    }
    if (typeof value === "string" && !options.some(function(option) {
        return option === value || typeof option !== "string" && option.value === value;
    })) {
        return t("validation:invalidSelection");
    }
    if (required && (typeof value === "undefined" || value === null || hasMany && Array.isArray(value) && ((_value = value) === null || _value === void 0 ? void 0 : _value.length) === 0)) {
        return t("validation:required");
    }
    return true;
};
var radio = function(value, param) {
    var t = param.t, options = param.options, required = param.required;
    if (value) {
        var valueMatchesOption = options.some(function(option) {
            return option === value || typeof option !== "string" && option.value === value;
        });
        return valueMatchesOption || t("validation:invalidSelection");
    }
    return required ? t("validation:required") : true;
};
var blocks = function(value, param) {
    var t = param.t, maxRows = param.maxRows, minRows = param.minRows, required = param.required;
    if (minRows && value < minRows) {
        return t("validation:requiresAtLeast", {
            count: minRows,
            label: t("rows")
        });
    }
    if (maxRows && value > maxRows) {
        return t("validation:requiresNoMoreThan", {
            count: maxRows,
            label: t("rows")
        });
    }
    if (!value && required) {
        return t("validation:requiresAtLeast", {
            count: 1,
            label: t("row")
        });
    }
    return true;
};
var point = function() {
    var value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [
        "",
        ""
    ], _ref = arguments.length > 1 ? arguments[1] : void 0, t = _ref.t, required = _ref.required;
    var lng = parseFloat(String(value[0]));
    var lat = parseFloat(String(value[1]));
    if (required && (value[0] && value[1] && typeof lng !== "number" && typeof lat !== "number" || Number.isNaN(lng) || Number.isNaN(lat) || Array.isArray(value) && value.length !== 2)) {
        return t("validation:requiresTwoNumbers");
    }
    if (value[1] && Number.isNaN(lng) || value[0] && Number.isNaN(lat)) {
        return t("validation:invalidInput");
    }
    return true;
};
var _default = {
    number: number,
    text: text,
    password: password,
    email: email,
    textarea: textarea,
    code: code,
    richText: richText,
    checkbox: checkbox,
    date: date,
    upload: upload,
    relationship: relationship,
    array: array,
    select: select,
    radio: radio,
    blocks: blocks,
    point: point,
    json: json
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9maWVsZHMvdmFsaWRhdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRlZmF1bHRSaWNoVGV4dFZhbHVlIGZyb20gJy4vcmljaFRleHQvZGVmYXVsdFZhbHVlJztcbmltcG9ydCB7XG4gIEFycmF5RmllbGQsXG4gIEJsb2NrRmllbGQsXG4gIENoZWNrYm94RmllbGQsXG4gIENvZGVGaWVsZCxcbiAgRGF0ZUZpZWxkLFxuICBFbWFpbEZpZWxkLFxuICBmaWVsZEFmZmVjdHNEYXRhLFxuICBKU09ORmllbGQsXG4gIE51bWJlckZpZWxkLFxuICBQb2ludEZpZWxkLFxuICBSYWRpb0ZpZWxkLFxuICBSZWxhdGlvbnNoaXBGaWVsZCxcbiAgUmVsYXRpb25zaGlwVmFsdWUsXG4gIFJpY2hUZXh0RmllbGQsXG4gIFNlbGVjdEZpZWxkLFxuICBUZXh0YXJlYUZpZWxkLFxuICBUZXh0RmllbGQsXG4gIFVwbG9hZEZpZWxkLFxuICBWYWxpZGF0ZSxcbn0gZnJvbSAnLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IGNhblVzZURPTSBmcm9tICcuLi91dGlsaXRpZXMvY2FuVXNlRE9NJztcbmltcG9ydCB7IGlzVmFsaWRJRCB9IGZyb20gJy4uL3V0aWxpdGllcy9pc1ZhbGlkSUQnO1xuaW1wb3J0IHsgZ2V0SURUeXBlIH0gZnJvbSAnLi4vdXRpbGl0aWVzL2dldElEVHlwZSc7XG5cbmV4cG9ydCBjb25zdCBudW1iZXI6IFZhbGlkYXRlPHVua25vd24sIHVua25vd24sIE51bWJlckZpZWxkPiA9ICh2YWx1ZTogbnVtYmVyIHwgbnVtYmVyW10sIHsgdCwgcmVxdWlyZWQsIG1pbiwgbWF4LCBtaW5Sb3dzLCBtYXhSb3dzLCBoYXNNYW55IH0pID0+IHtcbiAgY29uc3QgdG9WYWxpZGF0ZTogbnVtYmVyW10gPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgZm9yIChjb25zdCB2YWx1ZVRvVmFsaWRhdGUgb2YgdG9WYWxpZGF0ZSkge1xuICAgIGNvbnN0IGZsb2F0VmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlVG9WYWxpZGF0ZSBhcyB1bmtub3duIGFzIHN0cmluZyk7XG4gICAgaWYgKCh2YWx1ZSAmJiB0eXBlb2YgZmxvYXRWYWx1ZSAhPT0gJ251bWJlcicpIHx8IChyZXF1aXJlZCAmJiBOdW1iZXIuaXNOYU4oZmxvYXRWYWx1ZSkpIHx8ICh2YWx1ZSAmJiBOdW1iZXIuaXNOYU4oZmxvYXRWYWx1ZSkpKSB7XG4gICAgICByZXR1cm4gdCgndmFsaWRhdGlvbjplbnRlck51bWJlcicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbWF4ID09PSAnbnVtYmVyJyAmJiBmbG9hdFZhbHVlID4gbWF4KSB7XG4gICAgICByZXR1cm4gdCgndmFsaWRhdGlvbjpncmVhdGVyVGhhbk1heCcsIHsgdmFsdWUsIG1heCwgbGFiZWw6IHQoJ3ZhbHVlJykgfSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBtaW4gPT09ICdudW1iZXInICYmIGZsb2F0VmFsdWUgPCBtaW4pIHtcbiAgICAgIHJldHVybiB0KCd2YWxpZGF0aW9uOmxlc3NUaGFuTWluJywgeyB2YWx1ZSwgbWluLCBsYWJlbDogdCgndmFsdWUnKSB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWlyZWQgJiYgdHlwZW9mIGZsb2F0VmFsdWUgIT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gdCgndmFsaWRhdGlvbjpyZXF1aXJlZCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChyZXF1aXJlZCAmJiB0b1ZhbGlkYXRlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0KCd2YWxpZGF0aW9uOnJlcXVpcmVkJyk7XG4gIH1cblxuXG4gIGlmIChoYXNNYW55ID09PSB0cnVlKSB7XG4gICAgaWYgKG1pblJvd3MgJiYgdG9WYWxpZGF0ZS5sZW5ndGggPCBtaW5Sb3dzKSB7XG4gICAgICByZXR1cm4gdCgndmFsaWRhdGlvbjpsZXNzVGhhbk1pbicsIHsgdmFsdWU6IHRvVmFsaWRhdGUubGVuZ3RoLCBtaW46IG1pblJvd3MsIGxhYmVsOiB0KCdyb3dzJykgfSk7XG4gICAgfVxuXG4gICAgaWYgKG1heFJvd3MgJiYgdG9WYWxpZGF0ZS5sZW5ndGggPiBtYXhSb3dzKSB7XG4gICAgICByZXR1cm4gdCgndmFsaWRhdGlvbjpncmVhdGVyVGhhbk1heCcsIHsgdmFsdWU6IHRvVmFsaWRhdGUubGVuZ3RoLCBtYXg6IG1heFJvd3MsIGxhYmVsOiB0KCdyb3dzJykgfSk7XG4gICAgfVxuICB9XG5cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCB0ZXh0OiBWYWxpZGF0ZTx1bmtub3duLCB1bmtub3duLCBUZXh0RmllbGQ+ID0gKHZhbHVlOiBzdHJpbmcsIHsgdCwgbWluTGVuZ3RoLCBtYXhMZW5ndGg6IGZpZWxkTWF4TGVuZ3RoLCByZXF1aXJlZCwgcGF5bG9hZCB9KSA9PiB7XG4gIGxldCBtYXhMZW5ndGg6IG51bWJlcjtcblxuICBpZiAodHlwZW9mIHBheWxvYWQ/LmNvbmZpZz8uZGVmYXVsdE1heFRleHRMZW5ndGggPT09ICdudW1iZXInKSBtYXhMZW5ndGggPSBwYXlsb2FkLmNvbmZpZy5kZWZhdWx0TWF4VGV4dExlbmd0aDtcbiAgaWYgKHR5cGVvZiBmaWVsZE1heExlbmd0aCA9PT0gJ251bWJlcicpIG1heExlbmd0aCA9IGZpZWxkTWF4TGVuZ3RoO1xuICBpZiAodmFsdWUgJiYgbWF4TGVuZ3RoICYmIHZhbHVlLmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgIHJldHVybiB0KCd2YWxpZGF0aW9uOnNob3J0ZXJUaGFuTWF4JywgeyBtYXhMZW5ndGggfSk7XG4gIH1cblxuICBpZiAodmFsdWUgJiYgbWluTGVuZ3RoICYmIHZhbHVlPy5sZW5ndGggPCBtaW5MZW5ndGgpIHtcbiAgICByZXR1cm4gdCgndmFsaWRhdGlvbjpsb25nZXJUaGFuTWluJywgeyBtaW5MZW5ndGggfSk7XG4gIH1cblxuICBpZiAocmVxdWlyZWQpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyB8fCB2YWx1ZT8ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdCgndmFsaWRhdGlvbjpyZXF1aXJlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IGNvbnN0IHBhc3N3b3JkOiBWYWxpZGF0ZTx1bmtub3duLCB1bmtub3duLCBUZXh0RmllbGQ+ID0gKHZhbHVlOiBzdHJpbmcsIHsgdCwgcmVxdWlyZWQsIG1heExlbmd0aDogZmllbGRNYXhMZW5ndGgsIG1pbkxlbmd0aCwgcGF5bG9hZCB9KSA9PiB7XG4gIGxldCBtYXhMZW5ndGg6IG51bWJlcjtcblxuICBpZiAodHlwZW9mIHBheWxvYWQ/LmNvbmZpZz8uZGVmYXVsdE1heFRleHRMZW5ndGggPT09ICdudW1iZXInKSBtYXhMZW5ndGggPSBwYXlsb2FkLmNvbmZpZy5kZWZhdWx0TWF4VGV4dExlbmd0aDtcbiAgaWYgKHR5cGVvZiBmaWVsZE1heExlbmd0aCA9PT0gJ251bWJlcicpIG1heExlbmd0aCA9IGZpZWxkTWF4TGVuZ3RoO1xuXG4gIGlmICh2YWx1ZSAmJiBtYXhMZW5ndGggJiYgdmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgcmV0dXJuIHQoJ3ZhbGlkYXRpb246c2hvcnRlclRoYW5NYXgnLCB7IG1heExlbmd0aCB9KTtcbiAgfVxuXG4gIGlmICh2YWx1ZSAmJiBtaW5MZW5ndGggJiYgdmFsdWUubGVuZ3RoIDwgbWluTGVuZ3RoKSB7XG4gICAgcmV0dXJuIHQoJ3ZhbGlkYXRpb246bG9uZ2VyVGhhbk1pbicsIHsgbWluTGVuZ3RoIH0pO1xuICB9XG5cbiAgaWYgKHJlcXVpcmVkICYmICF2YWx1ZSkge1xuICAgIHJldHVybiB0KCd2YWxpZGF0aW9uOnJlcXVpcmVkJyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBlbWFpbDogVmFsaWRhdGU8dW5rbm93biwgdW5rbm93biwgRW1haWxGaWVsZD4gPSAodmFsdWU6IHN0cmluZywgeyB0LCByZXF1aXJlZCB9KSA9PiB7XG4gIGlmICgodmFsdWUgJiYgIS9cXFMrQFxcUytcXC5cXFMrLy50ZXN0KHZhbHVlKSlcbiAgICB8fCAoIXZhbHVlICYmIHJlcXVpcmVkKSkge1xuICAgIHJldHVybiB0KCd2YWxpZGF0aW9uOmVtYWlsQWRkcmVzcycpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgY29uc3QgdGV4dGFyZWE6IFZhbGlkYXRlPHVua25vd24sIHVua25vd24sIFRleHRhcmVhRmllbGQ+ID0gKHZhbHVlOiBzdHJpbmcsIHtcbiAgdCxcbiAgcmVxdWlyZWQsXG4gIG1heExlbmd0aDogZmllbGRNYXhMZW5ndGgsXG4gIG1pbkxlbmd0aCxcbiAgcGF5bG9hZCxcbn0pID0+IHtcbiAgbGV0IG1heExlbmd0aDogbnVtYmVyO1xuXG4gIGlmICh0eXBlb2YgcGF5bG9hZD8uY29uZmlnPy5kZWZhdWx0TWF4VGV4dExlbmd0aCA9PT0gJ251bWJlcicpIG1heExlbmd0aCA9IHBheWxvYWQuY29uZmlnLmRlZmF1bHRNYXhUZXh0TGVuZ3RoO1xuICBpZiAodHlwZW9mIGZpZWxkTWF4TGVuZ3RoID09PSAnbnVtYmVyJykgbWF4TGVuZ3RoID0gZmllbGRNYXhMZW5ndGg7XG4gIGlmICh2YWx1ZSAmJiBtYXhMZW5ndGggJiYgdmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgcmV0dXJuIHQoJ3ZhbGlkYXRpb246c2hvcnRlclRoYW5NYXgnLCB7IG1heExlbmd0aCB9KTtcbiAgfVxuXG4gIGlmICh2YWx1ZSAmJiBtaW5MZW5ndGggJiYgdmFsdWUubGVuZ3RoIDwgbWluTGVuZ3RoKSB7XG4gICAgcmV0dXJuIHQoJ3ZhbGlkYXRpb246bG9uZ2VyVGhhbk1pbicsIHsgbWluTGVuZ3RoIH0pO1xuICB9XG5cbiAgaWYgKHJlcXVpcmVkICYmICF2YWx1ZSkge1xuICAgIHJldHVybiB0KCd2YWxpZGF0aW9uOnJlcXVpcmVkJyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb2RlOiBWYWxpZGF0ZTx1bmtub3duLCB1bmtub3duLCBDb2RlRmllbGQ+ID0gKHZhbHVlOiBzdHJpbmcsIHsgdCwgcmVxdWlyZWQgfSkgPT4ge1xuICBpZiAocmVxdWlyZWQgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0KCd2YWxpZGF0aW9uOnJlcXVpcmVkJyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBqc29uOiBWYWxpZGF0ZTx1bmtub3duLCB1bmtub3duLCBKU09ORmllbGQgJiB7IGpzb25FcnJvcj86IHN0cmluZyB9PiA9ICh2YWx1ZTogc3RyaW5nLCB7XG4gIHQsIHJlcXVpcmVkLCBqc29uRXJyb3IsXG59KSA9PiB7XG4gIGlmIChyZXF1aXJlZCAmJiAhdmFsdWUpIHtcbiAgICByZXR1cm4gdCgndmFsaWRhdGlvbjpyZXF1aXJlZCcpO1xuICB9XG5cbiAgaWYgKGpzb25FcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHQoJ3ZhbGlkYXRpb246aW52YWxpZElucHV0Jyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCByaWNoVGV4dDogVmFsaWRhdGU8dW5rbm93biwgdW5rbm93biwgUmljaFRleHRGaWVsZD4gPSAodmFsdWUsIHsgdCwgcmVxdWlyZWQgfSkgPT4ge1xuICBpZiAocmVxdWlyZWQpIHtcbiAgICBjb25zdCBzdHJpbmdpZmllZERlZmF1bHRWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KGRlZmF1bHRSaWNoVGV4dFZhbHVlKTtcbiAgICBpZiAodmFsdWUgJiYgSlNPTi5zdHJpbmdpZnkodmFsdWUpICE9PSBzdHJpbmdpZmllZERlZmF1bHRWYWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIHQoJ3ZhbGlkYXRpb246cmVxdWlyZWQnKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IGNvbnN0IGNoZWNrYm94OiBWYWxpZGF0ZTx1bmtub3duLCB1bmtub3duLCBDaGVja2JveEZpZWxkPiA9ICh2YWx1ZTogYm9vbGVhbiwgeyB0LCByZXF1aXJlZCB9KSA9PiB7XG4gIGlmICgodmFsdWUgJiYgdHlwZW9mIHZhbHVlICE9PSAnYm9vbGVhbicpXG4gICAgfHwgKHJlcXVpcmVkICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Jvb2xlYW4nKSkge1xuICAgIHJldHVybiB0KCd2YWxpZGF0aW9uOnRydWVPckZhbHNlJyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBkYXRlOiBWYWxpZGF0ZTx1bmtub3duLCB1bmtub3duLCBEYXRlRmllbGQ+ID0gKHZhbHVlLCB7IHQsIHJlcXVpcmVkIH0pID0+IHtcbiAgaWYgKHZhbHVlICYmICFpc05hTihEYXRlLnBhcnNlKHZhbHVlLnRvU3RyaW5nKCkpKSkgeyAvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodmFsdWUpIHtcbiAgICByZXR1cm4gdCgndmFsaWRhdGlvbjpub3RWYWxpZERhdGUnLCB7IHZhbHVlIH0pO1xuICB9XG5cbiAgaWYgKHJlcXVpcmVkKSB7XG4gICAgcmV0dXJuIHQoJ3ZhbGlkYXRpb246cmVxdWlyZWQnKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgdmFsaWRhdGVGaWx0ZXJPcHRpb25zOiBWYWxpZGF0ZSA9IGFzeW5jICh2YWx1ZSwgeyB0LCBmaWx0ZXJPcHRpb25zLCBpZCwgdXNlciwgZGF0YSwgc2libGluZ0RhdGEsIHJlbGF0aW9uVG8sIHBheWxvYWQgfSkgPT4ge1xuICBpZiAoIWNhblVzZURPTSAmJiB0eXBlb2YgZmlsdGVyT3B0aW9ucyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUpIHtcbiAgICBjb25zdCBvcHRpb25zOiB7XG4gICAgICBbY29sbGVjdGlvbjogc3RyaW5nXTogKHN0cmluZyB8IG51bWJlcilbXVxuICAgIH0gPSB7fTtcblxuICAgIGNvbnN0IGNvbGxlY3Rpb25zID0gdHlwZW9mIHJlbGF0aW9uVG8gPT09ICdzdHJpbmcnID8gW3JlbGF0aW9uVG9dIDogcmVsYXRpb25UbztcbiAgICBjb25zdCB2YWx1ZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcblxuICAgIGF3YWl0IFByb21pc2UuYWxsKGNvbGxlY3Rpb25zLm1hcChhc3luYyAoY29sbGVjdGlvbikgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uRmlsdGVyID0gdHlwZW9mIGZpbHRlck9wdGlvbnMgPT09ICdmdW5jdGlvbicgPyBhd2FpdCBmaWx0ZXJPcHRpb25zKHtcbiAgICAgICAgaWQsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIHNpYmxpbmdEYXRhLFxuICAgICAgICB1c2VyLFxuICAgICAgICByZWxhdGlvblRvOiBjb2xsZWN0aW9uLFxuICAgICAgfSkgOiBmaWx0ZXJPcHRpb25zO1xuXG4gICAgICBjb25zdCB2YWx1ZUlEczogKHN0cmluZyB8IG51bWJlcilbXSA9IFtdO1xuXG4gICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiB2YWw/LnZhbHVlKSB7XG4gICAgICAgICAgdmFsdWVJRHMucHVzaCh2YWwudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgdmFsdWVJRHMucHVzaCh2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcGF5bG9hZC5maW5kKHtcbiAgICAgICAgY29sbGVjdGlvbixcbiAgICAgICAgZGVwdGg6IDAsXG4gICAgICAgIGxpbWl0OiAwLFxuICAgICAgICBwYWdpbmF0aW9uOiBmYWxzZSxcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBhbmQ6IFtcbiAgICAgICAgICAgIHsgaWQ6IHsgaW46IHZhbHVlSURzIH0gfSxcbiAgICAgICAgICAgIG9wdGlvbkZpbHRlcixcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIG9wdGlvbnNbY29sbGVjdGlvbl0gPSByZXN1bHQuZG9jcy5tYXAoKGRvYykgPT4gZG9jLmlkKTtcbiAgICB9KSk7XG5cbiAgICBjb25zdCBpbnZhbGlkUmVsYXRpb25zaGlwcyA9IHZhbHVlcy5maWx0ZXIoKHZhbCkgPT4ge1xuICAgICAgbGV0IGNvbGxlY3Rpb246IHN0cmluZztcbiAgICAgIGxldCByZXF1ZXN0ZWRJRDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gICAgICBpZiAodHlwZW9mIHJlbGF0aW9uVG8gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbGxlY3Rpb24gPSByZWxhdGlvblRvO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHJlcXVlc3RlZElEID0gdmFsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlbGF0aW9uVG8pICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbD8ucmVsYXRpb25Ubykge1xuICAgICAgICBjb2xsZWN0aW9uID0gdmFsLnJlbGF0aW9uVG87XG4gICAgICAgIHJlcXVlc3RlZElEID0gdmFsLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb3B0aW9uc1tjb2xsZWN0aW9uXS5pbmRleE9mKHJlcXVlc3RlZElEKSA9PT0gLTE7XG4gICAgfSk7XG5cbiAgICBpZiAoaW52YWxpZFJlbGF0aW9uc2hpcHMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGludmFsaWRSZWxhdGlvbnNoaXBzLnJlZHVjZSgoZXJyLCBpbnZhbGlkLCBpKSA9PiB7XG4gICAgICAgIHJldHVybiBgJHtlcnJ9ICR7SlNPTi5zdHJpbmdpZnkoaW52YWxpZCl9JHtpbnZhbGlkUmVsYXRpb25zaGlwcy5sZW5ndGggPT09IGkgKyAxID8gJywnIDogJyd9IGA7XG4gICAgICB9LCB0KCd2YWxpZGF0aW9uOmludmFsaWRTZWxlY3Rpb25zJykpIGFzIHN0cmluZztcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwbG9hZDogVmFsaWRhdGU8dW5rbm93biwgdW5rbm93biwgVXBsb2FkRmllbGQ+ID0gKHZhbHVlOiBzdHJpbmcsIG9wdGlvbnMpID0+IHtcbiAgaWYgKCF2YWx1ZSAmJiBvcHRpb25zLnJlcXVpcmVkKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMudCgndmFsaWRhdGlvbjpyZXF1aXJlZCcpO1xuICB9XG5cbiAgaWYgKCFjYW5Vc2VET00gJiYgdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGlkRmllbGQgPSBvcHRpb25zLnBheWxvYWQuY29sbGVjdGlvbnNbb3B0aW9ucy5yZWxhdGlvblRvXS5jb25maWcuZmllbGRzLmZpbmQoKGZpZWxkKSA9PiBmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJiBmaWVsZC5uYW1lID09PSAnaWQnKTtcbiAgICBjb25zdCB0eXBlID0gZ2V0SURUeXBlKGlkRmllbGQpO1xuXG4gICAgaWYgKCFpc1ZhbGlkSUQodmFsdWUsIHR5cGUpKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy50KCd2YWxpZGF0aW9uOnZhbGlkVXBsb2FkSUQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVGaWx0ZXJPcHRpb25zKHZhbHVlLCBvcHRpb25zKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZWxhdGlvbnNoaXA6IFZhbGlkYXRlPHVua25vd24sIHVua25vd24sIFJlbGF0aW9uc2hpcEZpZWxkPiA9IGFzeW5jICh2YWx1ZTogUmVsYXRpb25zaGlwVmFsdWUsIG9wdGlvbnMpID0+IHtcbiAgY29uc3Qge1xuICAgIHJlcXVpcmVkLFxuICAgIG1pblJvd3MsXG4gICAgbWF4Um93cyxcbiAgICByZWxhdGlvblRvLFxuICAgIHBheWxvYWQsXG4gICAgdCxcbiAgfSA9IG9wdGlvbnM7XG5cbiAgaWYgKCghdmFsdWUgfHwgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkpICYmIHJlcXVpcmVkKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMudCgndmFsaWRhdGlvbjpyZXF1aXJlZCcpO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgaWYgKG1pblJvd3MgJiYgdmFsdWUubGVuZ3RoIDwgbWluUm93cykge1xuICAgICAgcmV0dXJuIHQoJ3ZhbGlkYXRpb246bGVzc1RoYW5NaW4nLCB7IHZhbHVlOiB2YWx1ZS5sZW5ndGgsIG1pbjogbWluUm93cywgbGFiZWw6IHQoJ3Jvd3MnKSB9KTtcbiAgICB9XG5cbiAgICBpZiAobWF4Um93cyAmJiB2YWx1ZS5sZW5ndGggPiBtYXhSb3dzKSB7XG4gICAgICByZXR1cm4gdCgndmFsaWRhdGlvbjpncmVhdGVyVGhhbk1heCcsIHsgdmFsdWU6IHZhbHVlLmxlbmd0aCwgbWF4OiBtYXhSb3dzLCBsYWJlbDogdCgncm93cycpIH0pO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY2FuVXNlRE9NICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcblxuICAgIGNvbnN0IGludmFsaWRSZWxhdGlvbnNoaXBzID0gdmFsdWVzLmZpbHRlcigodmFsKSA9PiB7XG4gICAgICBsZXQgY29sbGVjdGlvbjogc3RyaW5nO1xuICAgICAgbGV0IHJlcXVlc3RlZElEO1xuXG4gICAgICBpZiAodHlwZW9mIHJlbGF0aW9uVG8gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbGxlY3Rpb24gPSByZWxhdGlvblRvO1xuXG4gICAgICAgIC8vIGN1c3RvbSBpZFxuICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgcmVxdWVzdGVkSUQgPSB2YWw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVsYXRpb25UbykgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgdmFsPy5yZWxhdGlvblRvKSB7XG4gICAgICAgIGNvbGxlY3Rpb24gPSB2YWwucmVsYXRpb25UbztcbiAgICAgICAgcmVxdWVzdGVkSUQgPSB2YWwudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXF1ZXN0ZWRJRCA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBjb25zdCBpZEZpZWxkID0gcGF5bG9hZC5jb2xsZWN0aW9uc1tjb2xsZWN0aW9uXT8uY29uZmlnPy5maWVsZHM/LmZpbmQoKGZpZWxkKSA9PiBmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJiBmaWVsZC5uYW1lID09PSAnaWQnKTtcbiAgICAgIGxldCB0eXBlO1xuXG4gICAgICBpZiAoaWRGaWVsZCkge1xuICAgICAgICB0eXBlID0gaWRGaWVsZC50eXBlID09PSAnbnVtYmVyJyA/ICdudW1iZXInIDogJ3RleHQnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZSA9ICdPYmplY3RJRCc7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgcmVxdWVzdGVkSUQgPT09ICdudW1iZXInKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIHJldHVybiAhaXNWYWxpZElEKHJlcXVlc3RlZElELCB0eXBlKTtcbiAgICB9KTtcblxuICAgIGlmIChpbnZhbGlkUmVsYXRpb25zaGlwcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gYFRoaXMgZmllbGQgaGFzIHRoZSBmb2xsb3dpbmcgaW52YWxpZCBzZWxlY3Rpb25zOiAke2ludmFsaWRSZWxhdGlvbnNoaXBzLm1hcCgoZXJyLCBpbnZhbGlkKSA9PiB7XG4gICAgICAgIHJldHVybiBgJHtlcnJ9ICR7SlNPTi5zdHJpbmdpZnkoaW52YWxpZCl9YDtcbiAgICAgIH0pLmpvaW4oJywgJyl9YCBhcyBzdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlRmlsdGVyT3B0aW9ucyh2YWx1ZSwgb3B0aW9ucyk7XG59O1xuXG5leHBvcnQgY29uc3QgYXJyYXk6IFZhbGlkYXRlPHVua25vd24sIHVua25vd24sIEFycmF5RmllbGQ+ID0gKHZhbHVlLCB7IHQsIG1pblJvd3MsIG1heFJvd3MsIHJlcXVpcmVkIH0pID0+IHtcbiAgaWYgKG1pblJvd3MgJiYgdmFsdWUgPCBtaW5Sb3dzKSB7XG4gICAgcmV0dXJuIHQoJ3ZhbGlkYXRpb246cmVxdWlyZXNBdExlYXN0JywgeyBjb3VudDogbWluUm93cywgbGFiZWw6IHQoJ3Jvd3MnKSB9KTtcbiAgfVxuXG4gIGlmIChtYXhSb3dzICYmIHZhbHVlID4gbWF4Um93cykge1xuICAgIHJldHVybiB0KCd2YWxpZGF0aW9uOnJlcXVpcmVzTm9Nb3JlVGhhbicsIHsgY291bnQ6IG1heFJvd3MsIGxhYmVsOiB0KCdyb3dzJykgfSk7XG4gIH1cblxuICBpZiAoIXZhbHVlICYmIHJlcXVpcmVkKSB7XG4gICAgcmV0dXJuIHQoJ3ZhbGlkYXRpb246cmVxdWlyZXNBdExlYXN0JywgeyBjb3VudDogMSwgbGFiZWw6IHQoJ3JvdycpIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0OiBWYWxpZGF0ZTx1bmtub3duLCB1bmtub3duLCBTZWxlY3RGaWVsZD4gPSAodmFsdWUsIHsgdCwgb3B0aW9ucywgaGFzTWFueSwgcmVxdWlyZWQgfSkgPT4ge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUuc29tZSgoaW5wdXQpID0+ICFvcHRpb25zLnNvbWUoKG9wdGlvbikgPT4gKG9wdGlvbiA9PT0gaW5wdXQgfHwgKHR5cGVvZiBvcHRpb24gIT09ICdzdHJpbmcnICYmIG9wdGlvbj8udmFsdWUgPT09IGlucHV0KSkpKSkge1xuICAgIHJldHVybiB0KCd2YWxpZGF0aW9uOmludmFsaWRTZWxlY3Rpb24nKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICFvcHRpb25zLnNvbWUoKG9wdGlvbikgPT4gKG9wdGlvbiA9PT0gdmFsdWUgfHwgKHR5cGVvZiBvcHRpb24gIT09ICdzdHJpbmcnICYmIG9wdGlvbi52YWx1ZSA9PT0gdmFsdWUpKSkpIHtcbiAgICByZXR1cm4gdCgndmFsaWRhdGlvbjppbnZhbGlkU2VsZWN0aW9uJyk7XG4gIH1cblxuICBpZiAocmVxdWlyZWQgJiYgKFxuICAgICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHZhbHVlID09PSBudWxsKSB8fCAoaGFzTWFueSAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiAodmFsdWUgYXMgW10pPy5sZW5ndGggPT09IDApKVxuICApIHtcbiAgICByZXR1cm4gdCgndmFsaWRhdGlvbjpyZXF1aXJlZCcpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgY29uc3QgcmFkaW86IFZhbGlkYXRlPHVua25vd24sIHVua25vd24sIFJhZGlvRmllbGQ+ID0gKHZhbHVlLCB7IHQsIG9wdGlvbnMsIHJlcXVpcmVkIH0pID0+IHtcbiAgaWYgKHZhbHVlKSB7XG4gICAgY29uc3QgdmFsdWVNYXRjaGVzT3B0aW9uID0gb3B0aW9ucy5zb21lKChvcHRpb24pID0+IChvcHRpb24gPT09IHZhbHVlIHx8ICh0eXBlb2Ygb3B0aW9uICE9PSAnc3RyaW5nJyAmJiBvcHRpb24udmFsdWUgPT09IHZhbHVlKSkpO1xuICAgIHJldHVybiB2YWx1ZU1hdGNoZXNPcHRpb24gfHwgdCgndmFsaWRhdGlvbjppbnZhbGlkU2VsZWN0aW9uJyk7XG4gIH1cblxuICByZXR1cm4gcmVxdWlyZWQgPyB0KCd2YWxpZGF0aW9uOnJlcXVpcmVkJykgOiB0cnVlO1xufTtcblxuZXhwb3J0IGNvbnN0IGJsb2NrczogVmFsaWRhdGU8dW5rbm93biwgdW5rbm93biwgQmxvY2tGaWVsZD4gPSAodmFsdWUsIHsgdCwgbWF4Um93cywgbWluUm93cywgcmVxdWlyZWQgfSkgPT4ge1xuICBpZiAobWluUm93cyAmJiB2YWx1ZSA8IG1pblJvd3MpIHtcbiAgICByZXR1cm4gdCgndmFsaWRhdGlvbjpyZXF1aXJlc0F0TGVhc3QnLCB7IGNvdW50OiBtaW5Sb3dzLCBsYWJlbDogdCgncm93cycpIH0pO1xuICB9XG5cbiAgaWYgKG1heFJvd3MgJiYgdmFsdWUgPiBtYXhSb3dzKSB7XG4gICAgcmV0dXJuIHQoJ3ZhbGlkYXRpb246cmVxdWlyZXNOb01vcmVUaGFuJywgeyBjb3VudDogbWF4Um93cywgbGFiZWw6IHQoJ3Jvd3MnKSB9KTtcbiAgfVxuXG4gIGlmICghdmFsdWUgJiYgcmVxdWlyZWQpIHtcbiAgICByZXR1cm4gdCgndmFsaWRhdGlvbjpyZXF1aXJlc0F0TGVhc3QnLCB7IGNvdW50OiAxLCBsYWJlbDogdCgncm93JykgfSk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBwb2ludDogVmFsaWRhdGU8dW5rbm93biwgdW5rbm93biwgUG9pbnRGaWVsZD4gPSAodmFsdWU6IFtudW1iZXIgfCBzdHJpbmcsIG51bWJlciB8IHN0cmluZ10gPSBbJycsICcnXSwgeyB0LCByZXF1aXJlZCB9KSA9PiB7XG4gIGNvbnN0IGxuZyA9IHBhcnNlRmxvYXQoU3RyaW5nKHZhbHVlWzBdKSk7XG4gIGNvbnN0IGxhdCA9IHBhcnNlRmxvYXQoU3RyaW5nKHZhbHVlWzFdKSk7XG4gIGlmIChyZXF1aXJlZCAmJiAoXG4gICAgKHZhbHVlWzBdICYmIHZhbHVlWzFdICYmIHR5cGVvZiBsbmcgIT09ICdudW1iZXInICYmIHR5cGVvZiBsYXQgIT09ICdudW1iZXInKVxuICAgIHx8IChOdW1iZXIuaXNOYU4obG5nKSB8fCBOdW1iZXIuaXNOYU4obGF0KSlcbiAgICB8fCAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoICE9PSAyKVxuICApKSB7XG4gICAgcmV0dXJuIHQoJ3ZhbGlkYXRpb246cmVxdWlyZXNUd29OdW1iZXJzJyk7XG4gIH1cblxuICBpZiAoKHZhbHVlWzFdICYmIE51bWJlci5pc05hTihsbmcpKSB8fCAodmFsdWVbMF0gJiYgTnVtYmVyLmlzTmFOKGxhdCkpKSB7XG4gICAgcmV0dXJuIHQoJ3ZhbGlkYXRpb246aW52YWxpZElucHV0Jyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbnVtYmVyLFxuICB0ZXh0LFxuICBwYXNzd29yZCxcbiAgZW1haWwsXG4gIHRleHRhcmVhLFxuICBjb2RlLFxuICByaWNoVGV4dCxcbiAgY2hlY2tib3gsXG4gIGRhdGUsXG4gIHVwbG9hZCxcbiAgcmVsYXRpb25zaGlwLFxuICBhcnJheSxcbiAgc2VsZWN0LFxuICByYWRpbyxcbiAgYmxvY2tzLFxuICBwb2ludCxcbiAganNvbixcbn07XG4iXSwibmFtZXMiOlsibnVtYmVyIiwidGV4dCIsInBhc3N3b3JkIiwiZW1haWwiLCJ0ZXh0YXJlYSIsImNvZGUiLCJqc29uIiwicmljaFRleHQiLCJjaGVja2JveCIsImRhdGUiLCJ1cGxvYWQiLCJyZWxhdGlvbnNoaXAiLCJhcnJheSIsInNlbGVjdCIsInJhZGlvIiwiYmxvY2tzIiwicG9pbnQiLCJ2YWx1ZSIsInQiLCJyZXF1aXJlZCIsIm1pbiIsIm1heCIsIm1pblJvd3MiLCJtYXhSb3dzIiwiaGFzTWFueSIsInRvVmFsaWRhdGUiLCJBcnJheSIsImlzQXJyYXkiLCJ2YWx1ZVRvVmFsaWRhdGUiLCJmbG9hdFZhbHVlIiwicGFyc2VGbG9hdCIsIk51bWJlciIsImlzTmFOIiwibGFiZWwiLCJsZW5ndGgiLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJmaWVsZE1heExlbmd0aCIsInBheWxvYWQiLCJjb25maWciLCJkZWZhdWx0TWF4VGV4dExlbmd0aCIsInRlc3QiLCJ1bmRlZmluZWQiLCJqc29uRXJyb3IiLCJzdHJpbmdpZmllZERlZmF1bHRWYWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkZWZhdWx0UmljaFRleHRWYWx1ZSIsIkRhdGUiLCJwYXJzZSIsInRvU3RyaW5nIiwidmFsaWRhdGVGaWx0ZXJPcHRpb25zIiwiZmlsdGVyT3B0aW9ucyIsImlkIiwidXNlciIsImRhdGEiLCJzaWJsaW5nRGF0YSIsInJlbGF0aW9uVG8iLCJvcHRpb25zIiwiY29sbGVjdGlvbnMiLCJ2YWx1ZXMiLCJpbnZhbGlkUmVsYXRpb25zaGlwcyIsImNhblVzZURPTSIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJjb2xsZWN0aW9uIiwib3B0aW9uRmlsdGVyIiwidmFsdWVJRHMiLCJyZXN1bHQiLCJmb3JFYWNoIiwidmFsIiwicHVzaCIsImZpbmQiLCJkZXB0aCIsImxpbWl0IiwicGFnaW5hdGlvbiIsIndoZXJlIiwiYW5kIiwiaW4iLCJkb2NzIiwiZG9jIiwiZmlsdGVyIiwicmVxdWVzdGVkSUQiLCJpbmRleE9mIiwicmVkdWNlIiwiZXJyIiwiaW52YWxpZCIsImkiLCJpZEZpZWxkIiwiZmllbGRzIiwiZmllbGQiLCJmaWVsZEFmZmVjdHNEYXRhIiwibmFtZSIsInR5cGUiLCJnZXRJRFR5cGUiLCJpc1ZhbGlkSUQiLCJqb2luIiwiY291bnQiLCJzb21lIiwiaW5wdXQiLCJvcHRpb24iLCJ2YWx1ZU1hdGNoZXNPcHRpb24iLCJsbmciLCJTdHJpbmciLCJsYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBMEJhQSxNQUFNO2VBQU5BOztJQTBDQUMsSUFBSTtlQUFKQTs7SUFzQkFDLFFBQVE7ZUFBUkE7O0lBcUJBQyxLQUFLO2VBQUxBOztJQVNBQyxRQUFRO2VBQVJBOztJQTBCQUMsSUFBSTtlQUFKQTs7SUFRQUMsSUFBSTtlQUFKQTs7SUFjQUMsUUFBUTtlQUFSQTs7SUFVQUMsUUFBUTtlQUFSQTs7SUFTQUMsSUFBSTtlQUFKQTs7SUE4RkFD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