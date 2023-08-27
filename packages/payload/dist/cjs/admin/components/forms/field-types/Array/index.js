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
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _reacti18next = require("react-i18next");
var _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
var _Button = /*#__PURE__*/ _interop_require_default(require("../../../elements/Button"));
var _context = require("../../Form/context");
var _useField = /*#__PURE__*/ _interop_require_default(require("../../useField"));
var _Locale = require("../../../utilities/Locale");
var _Error = /*#__PURE__*/ _interop_require_default(require("../../Error"));
var _validations = require("../../../../../fields/validations");
var _Banner = /*#__PURE__*/ _interop_require_default(require("../../../elements/Banner"));
var _FieldDescription = /*#__PURE__*/ _interop_require_default(require("../../FieldDescription"));
var _DocumentInfo = require("../../../utilities/DocumentInfo");
var _scrollToID = require("../../../../utilities/scrollToID");
var _getTranslation = require("../../../../../utilities/getTranslation");
var _Config = require("../../../utilities/Config");
var _NullifyField = require("../../NullifyField");
var _DraggableSortable = /*#__PURE__*/ _interop_require_default(require("../../../elements/DraggableSortable"));
var _DraggableSortableItem = /*#__PURE__*/ _interop_require_default(require("../../../elements/DraggableSortable/DraggableSortableItem"));
var _ArrayRow = require("./ArrayRow");
var _ErrorPill = require("../../../elements/ErrorPill");
require("./index.scss");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var baseClass = "array-field";
var ArrayFieldType = function(props) {
    var _props, _props_labels, _props1, _components;
    var name = props.name, pathFromProps = props.path, fields = props.fields, fieldTypes = props.fieldTypes, _props_validate = props.validate, validate = _props_validate === void 0 ? _validations.array : _props_validate, required = props.required, maxRows = props.maxRows, minRows = props.minRows, permissions = props.permissions, indexPath = props.indexPath, localized = props.localized, _props_admin = props.admin, readOnly = _props_admin.readOnly, description = _props_admin.description, condition = _props_admin.condition, className = _props_admin.className, components = _props_admin.components;
    var path = pathFromProps || name;
    var _props_label;
    // eslint-disable-next-line react/destructuring-assignment
    var label = (_props_label = (_props = props) === null || _props === void 0 ? void 0 : _props.label) !== null && _props_label !== void 0 ? _props_label : (_props1 = props) === null || _props1 === void 0 ? void 0 : (_props_labels = _props1.labels) === null || _props_labels === void 0 ? void 0 : _props_labels.singular;
    var CustomRowLabel = ((_components = components) === null || _components === void 0 ? void 0 : _components.RowLabel) || undefined;
    var setDocFieldPreferences = (0, _DocumentInfo.useDocumentInfo)().setDocFieldPreferences;
    var _useForm = (0, _context.useForm)(), dispatchFields = _useForm.dispatchFields, setModified = _useForm.setModified, addFieldRow = _useForm.addFieldRow, removeFieldRow = _useForm.removeFieldRow;
    var submitted = (0, _context.useFormSubmitted)();
    var _useLocale = (0, _Locale.useLocale)(), locale = _useLocale.code;
    var _useTranslation = (0, _reacti18next.useTranslation)("fields"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var localization = (0, _Config.useConfig)().localization;
    var editingDefaultLocale = function() {
        if (localization && localization.fallback) {
            var defaultLocale = localization.defaultLocale || "en";
            return locale === defaultLocale;
        }
        return true;
    }();
    // Handle labeling for Arrays, Global Arrays, and Blocks
    var getLabels = function(p) {
        var _p, _p1;
        if ((_p = p) === null || _p === void 0 ? void 0 : _p.labels) return p.labels;
        if ((_p1 = p) === null || _p1 === void 0 ? void 0 : _p1.label) return {
            singular: p.label,
            plural: undefined
        };
        return {
            singular: t("row"),
            plural: t("rows")
        };
    };
    var labels = getLabels(props);
    var memoizedValidate = (0, _react.useCallback)(function(value, options) {
        // alternative locales can be null
        if (!editingDefaultLocale && value === null) {
            return true;
        }
        return validate(value, _object_spread_props(_object_spread({}, options), {
            minRows: minRows,
            maxRows: maxRows,
            required: required
        }));
    }, [
        maxRows,
        minRows,
        required,
        validate,
        editingDefaultLocale
    ]);
    var _useField1 = (0, _useField.default)({
        path: path,
        validate: memoizedValidate,
        condition: condition,
        hasRows: true
    }), showError = _useField1.showError, errorMessage = _useField1.errorMessage, value = _useField1.value, _useField_rows = _useField1.rows, rows = _useField_rows === void 0 ? [] : _useField_rows, valid = _useField1.valid;
    var addRow = (0, _react.useCallback)(function() {
        var _ref = _async_to_generator(function(rowIndex) {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            addFieldRow({
                                rowIndex: rowIndex,
                                path: path
                            })
                        ];
                    case 1:
                        _state.sent();
                        setModified(true);
                        setTimeout(function() {
                            (0, _scrollToID.scrollToID)("".concat(path, "-row-").concat(rowIndex + 1));
                        }, 0);
                        return [
                            2
                        ];
                }
            });
        });
        return function(rowIndex) {
            return _ref.apply(this, arguments);
        };
    }(), [
        addFieldRow,
        path,
        setModified
    ]);
    var duplicateRow = (0, _react.useCallback)(function() {
        var _ref = _async_to_generator(function(rowIndex) {
            return _ts_generator(this, function(_state) {
                dispatchFields({
                    type: "DUPLICATE_ROW",
                    rowIndex: rowIndex,
                    path: path
                });
                setModified(true);
                setTimeout(function() {
                    (0, _scrollToID.scrollToID)("".concat(path, "-row-").concat(rowIndex + 1));
                }, 0);
                return [
                    2
                ];
            });
        });
        return function(rowIndex) {
            return _ref.apply(this, arguments);
        };
    }(), [
        dispatchFields,
        path,
        setModified
    ]);
    var removeRow = (0, _react.useCallback)(function(rowIndex) {
        removeFieldRow({
            rowIndex: rowIndex,
            path: path
        });
        setModified(true);
    }, [
        removeFieldRow,
        path,
        setModified
    ]);
    var moveRow = (0, _react.useCallback)(function(moveFromIndex, moveToIndex) {
        dispatchFields({
            type: "MOVE_ROW",
            moveFromIndex: moveFromIndex,
            moveToIndex: moveToIndex,
            path: path
        });
        setModified(true);
    }, [
        dispatchFields,
        path,
        setModified
    ]);
    var toggleCollapseAll = (0, _react.useCallback)(function() {
        var _ref = _async_to_generator(function(collapsed) {
            return _ts_generator(this, function(_state) {
                dispatchFields({
                    type: "SET_ALL_ROWS_COLLAPSED",
                    path: path,
                    collapsed: collapsed,
                    setDocFieldPreferences: setDocFieldPreferences
                });
                return [
                    2
                ];
            });
        });
        return function(collapsed) {
            return _ref.apply(this, arguments);
        };
    }(), [
        dispatchFields,
        path,
        setDocFieldPreferences
    ]);
    var setCollapse = (0, _react.useCallback)(function() {
        var _ref = _async_to_generator(function(rowID, collapsed) {
            return _ts_generator(this, function(_state) {
                dispatchFields({
                    type: "SET_ROW_COLLAPSED",
                    path: path,
                    collapsed: collapsed,
                    rowID: rowID,
                    setDocFieldPreferences: setDocFieldPreferences
                });
                return [
                    2
                ];
            });
        });
        return function(rowID, collapsed) {
            return _ref.apply(this, arguments);
        };
    }(), [
        dispatchFields,
        path,
        setDocFieldPreferences
    ]);
    var hasMaxRows = maxRows && rows.length >= maxRows;
    var fieldErrorCount = rows.reduce(function(total, row) {
        var _row_childErrorPaths, _row;
        return total + (((_row = row) === null || _row === void 0 ? void 0 : (_row_childErrorPaths = _row.childErrorPaths) === null || _row_childErrorPaths === void 0 ? void 0 : _row_childErrorPaths.size) || 0);
    }, 0) + (valid ? 0 : 1);
    var fieldHasErrors = submitted && fieldErrorCount > 0;
    var classes = [
        "field-type",
        baseClass,
        className,
        fieldHasErrors ? "".concat(baseClass, "--has-error") : "".concat(baseClass, "--has-no-error")
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ _react.default.createElement("div", {
        id: "field-".concat(path.replace(/\./gi, "__")),
        className: classes
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__error-wrap")
    }, /*#__PURE__*/ _react.default.createElement(_Error.default, {
        showError: showError,
        message: errorMessage
    })), /*#__PURE__*/ _react.default.createElement("header", {
        className: "".concat(baseClass, "__header")
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__header-wrap")
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__header-content")
    }, /*#__PURE__*/ _react.default.createElement("h3", null, (0, _getTranslation.getTranslation)(label || name, i18n)), fieldHasErrors && fieldErrorCount > 0 && /*#__PURE__*/ _react.default.createElement(_ErrorPill.ErrorPill, {
        count: fieldErrorCount,
        withMessage: true
    })), /*#__PURE__*/ _react.default.createElement("ul", {
        className: "".concat(baseClass, "__header-actions")
    }, /*#__PURE__*/ _react.default.createElement("li", null, /*#__PURE__*/ _react.default.createElement("button", {
        type: "button",
        onClick: function() {
            return toggleCollapseAll(true);
        },
        className: "".concat(baseClass, "__header-action")
    }, t("collapseAll"))), /*#__PURE__*/ _react.default.createElement("li", null, /*#__PURE__*/ _react.default.createElement("button", {
        type: "button",
        onClick: function() {
            return toggleCollapseAll(false);
        },
        className: "".concat(baseClass, "__header-action")
    }, t("showAll"))))), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        className: "field-description-".concat(path.replace(/\./gi, "__")),
        value: value,
        description: description
    })), /*#__PURE__*/ _react.default.createElement(_NullifyField.NullifyLocaleField, {
        localized: localized,
        path: path,
        fieldValue: value
    }), /*#__PURE__*/ _react.default.createElement(_DraggableSortable.default, {
        ids: rows.map(function(row) {
            return row.id;
        }),
        onDragEnd: function(param) {
            var moveFromIndex = param.moveFromIndex, moveToIndex = param.moveToIndex;
            return moveRow(moveFromIndex, moveToIndex);
        },
        className: "".concat(baseClass, "__draggable-rows")
    }, rows.length > 0 && rows.map(function(row, i) {
        return /*#__PURE__*/ _react.default.createElement(_DraggableSortableItem.default, {
            key: row.id,
            id: row.id,
            disabled: readOnly
        }, function(draggableSortableItemProps) {
            return /*#__PURE__*/ _react.default.createElement(_ArrayRow.ArrayRow, _object_spread_props(_object_spread({}, draggableSortableItemProps), {
                row: row,
                addRow: addRow,
                duplicateRow: duplicateRow,
                removeRow: removeRow,
                setCollapse: setCollapse,
                path: path,
                fieldTypes: fieldTypes,
                fields: fields,
                moveRow: moveRow,
                readOnly: readOnly,
                rowCount: rows.length,
                permissions: permissions,
                CustomRowLabel: CustomRowLabel,
                rowIndex: i,
                indexPath: indexPath,
                labels: labels,
                hasMaxRows: hasMaxRows
            }));
        });
    }), !valid && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, readOnly && rows.length === 0 && /*#__PURE__*/ _react.default.createElement(_Banner.default, null, t("validation:fieldHasNo", {
        label: (0, _getTranslation.getTranslation)(labels.plural, i18n)
    })), (rows.length < minRows || required && rows.length === 0) && /*#__PURE__*/ _react.default.createElement(_Banner.default, {
        type: "error"
    }, t("validation:requiresAtLeast", {
        count: minRows,
        label: (0, _getTranslation.getTranslation)(minRows ? labels.plural : labels.singular, i18n) || t(minRows > 1 ? "general:row" : "general:rows")
    })))), !readOnly && !hasMaxRows && /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__add-button-wrap")
    }, /*#__PURE__*/ _react.default.createElement(_Button.default, {
        icon: "plus",
        buttonStyle: "icon-label",
        iconStyle: "with-border",
        iconPosition: "left",
        onClick: function() {
            return addRow(value);
        }
    }, t("addLabel", {
        label: (0, _getTranslation.getTranslation)(labels.singular, i18n)
    }))));
};
var _default = (0, _withCondition.default)(ArrayFieldType);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0FycmF5L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHdpdGhDb25kaXRpb24gZnJvbSAnLi4vLi4vd2l0aENvbmRpdGlvbic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0J1dHRvbic7XG5pbXBvcnQgeyB1c2VGb3JtLCB1c2VGb3JtU3VibWl0dGVkIH0gZnJvbSAnLi4vLi4vRm9ybS9jb250ZXh0JztcbmltcG9ydCB1c2VGaWVsZCBmcm9tICcuLi8uLi91c2VGaWVsZCc7XG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvTG9jYWxlJztcbmltcG9ydCBFcnJvciBmcm9tICcuLi8uLi9FcnJvcic7XG5pbXBvcnQgeyBhcnJheSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy92YWxpZGF0aW9ucyc7XG5pbXBvcnQgQmFubmVyIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0Jhbm5lcic7XG5pbXBvcnQgRmllbGREZXNjcmlwdGlvbiBmcm9tICcuLi8uLi9GaWVsZERlc2NyaXB0aW9uJztcbmltcG9ydCB7IHVzZURvY3VtZW50SW5mbyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9Eb2N1bWVudEluZm8nO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IHNjcm9sbFRvSUQgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvc2Nyb2xsVG9JRCc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCB7IE51bGxpZnlMb2NhbGVGaWVsZCB9IGZyb20gJy4uLy4uL051bGxpZnlGaWVsZCc7XG5pbXBvcnQgRHJhZ2dhYmxlU29ydGFibGUgZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvRHJhZ2dhYmxlU29ydGFibGUnO1xuaW1wb3J0IERyYWdnYWJsZVNvcnRhYmxlSXRlbSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9EcmFnZ2FibGVTb3J0YWJsZS9EcmFnZ2FibGVTb3J0YWJsZUl0ZW0nO1xuaW1wb3J0IHsgQXJyYXlSb3cgfSBmcm9tICcuL0FycmF5Um93JztcbmltcG9ydCB7IEVycm9yUGlsbCB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0Vycm9yUGlsbCc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2FycmF5LWZpZWxkJztcblxuY29uc3QgQXJyYXlGaWVsZFR5cGU6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgbmFtZSxcbiAgICBwYXRoOiBwYXRoRnJvbVByb3BzLFxuICAgIGZpZWxkcyxcbiAgICBmaWVsZFR5cGVzLFxuICAgIHZhbGlkYXRlID0gYXJyYXksXG4gICAgcmVxdWlyZWQsXG4gICAgbWF4Um93cyxcbiAgICBtaW5Sb3dzLFxuICAgIHBlcm1pc3Npb25zLFxuICAgIGluZGV4UGF0aCxcbiAgICBsb2NhbGl6ZWQsXG4gICAgYWRtaW46IHtcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBjb25kaXRpb24sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjb21wb25lbnRzLFxuICAgIH0sXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBwYXRoID0gcGF0aEZyb21Qcm9wcyB8fCBuYW1lO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnRcbiAgY29uc3QgbGFiZWwgPSBwcm9wcz8ubGFiZWwgPz8gcHJvcHM/LmxhYmVscz8uc2luZ3VsYXI7XG5cbiAgY29uc3QgQ3VzdG9tUm93TGFiZWwgPSBjb21wb25lbnRzPy5Sb3dMYWJlbCB8fCB1bmRlZmluZWQ7XG5cbiAgY29uc3QgeyBzZXREb2NGaWVsZFByZWZlcmVuY2VzIH0gPSB1c2VEb2N1bWVudEluZm8oKTtcbiAgY29uc3QgeyBkaXNwYXRjaEZpZWxkcywgc2V0TW9kaWZpZWQsIGFkZEZpZWxkUm93LCByZW1vdmVGaWVsZFJvdyB9ID0gdXNlRm9ybSgpO1xuICBjb25zdCBzdWJtaXR0ZWQgPSB1c2VGb3JtU3VibWl0dGVkKCk7XG4gIGNvbnN0IHsgY29kZTogbG9jYWxlIH0gPSB1c2VMb2NhbGUoKTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbignZmllbGRzJyk7XG4gIGNvbnN0IHsgbG9jYWxpemF0aW9uIH0gPSB1c2VDb25maWcoKTtcblxuICBjb25zdCBlZGl0aW5nRGVmYXVsdExvY2FsZSA9ICgoKSA9PiB7XG4gICAgaWYgKGxvY2FsaXphdGlvbiAmJiBsb2NhbGl6YXRpb24uZmFsbGJhY2spIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRMb2NhbGUgPSBsb2NhbGl6YXRpb24uZGVmYXVsdExvY2FsZSB8fCAnZW4nO1xuICAgICAgcmV0dXJuIGxvY2FsZSA9PT0gZGVmYXVsdExvY2FsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSkoKTtcblxuICAvLyBIYW5kbGUgbGFiZWxpbmcgZm9yIEFycmF5cywgR2xvYmFsIEFycmF5cywgYW5kIEJsb2Nrc1xuICBjb25zdCBnZXRMYWJlbHMgPSAocDogUHJvcHMpID0+IHtcbiAgICBpZiAocD8ubGFiZWxzKSByZXR1cm4gcC5sYWJlbHM7XG4gICAgaWYgKHA/LmxhYmVsKSByZXR1cm4geyBzaW5ndWxhcjogcC5sYWJlbCwgcGx1cmFsOiB1bmRlZmluZWQgfTtcbiAgICByZXR1cm4geyBzaW5ndWxhcjogdCgncm93JyksIHBsdXJhbDogdCgncm93cycpIH07XG4gIH07XG5cbiAgY29uc3QgbGFiZWxzID0gZ2V0TGFiZWxzKHByb3BzKTtcblxuICBjb25zdCBtZW1vaXplZFZhbGlkYXRlID0gdXNlQ2FsbGJhY2soKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgLy8gYWx0ZXJuYXRpdmUgbG9jYWxlcyBjYW4gYmUgbnVsbFxuICAgIGlmICghZWRpdGluZ0RlZmF1bHRMb2NhbGUgJiYgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWRhdGUodmFsdWUsIHsgLi4ub3B0aW9ucywgbWluUm93cywgbWF4Um93cywgcmVxdWlyZWQgfSk7XG4gIH0sIFttYXhSb3dzLCBtaW5Sb3dzLCByZXF1aXJlZCwgdmFsaWRhdGUsIGVkaXRpbmdEZWZhdWx0TG9jYWxlXSk7XG5cbiAgY29uc3Qge1xuICAgIHNob3dFcnJvcixcbiAgICBlcnJvck1lc3NhZ2UsXG4gICAgdmFsdWUsXG4gICAgcm93cyA9IFtdLFxuICAgIHZhbGlkLFxuICB9ID0gdXNlRmllbGQ8bnVtYmVyPih7XG4gICAgcGF0aCxcbiAgICB2YWxpZGF0ZTogbWVtb2l6ZWRWYWxpZGF0ZSxcbiAgICBjb25kaXRpb24sXG4gICAgaGFzUm93czogdHJ1ZSxcbiAgfSk7XG5cbiAgY29uc3QgYWRkUm93ID0gdXNlQ2FsbGJhY2soYXN5bmMgKHJvd0luZGV4OiBudW1iZXIpID0+IHtcbiAgICBhd2FpdCBhZGRGaWVsZFJvdyh7IHJvd0luZGV4LCBwYXRoIH0pO1xuICAgIHNldE1vZGlmaWVkKHRydWUpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzY3JvbGxUb0lEKGAke3BhdGh9LXJvdy0ke3Jvd0luZGV4ICsgMX1gKTtcbiAgICB9LCAwKTtcbiAgfSwgW2FkZEZpZWxkUm93LCBwYXRoLCBzZXRNb2RpZmllZF0pO1xuXG4gIGNvbnN0IGR1cGxpY2F0ZVJvdyA9IHVzZUNhbGxiYWNrKGFzeW5jIChyb3dJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgZGlzcGF0Y2hGaWVsZHMoeyB0eXBlOiAnRFVQTElDQVRFX1JPVycsIHJvd0luZGV4LCBwYXRoIH0pO1xuICAgIHNldE1vZGlmaWVkKHRydWUpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzY3JvbGxUb0lEKGAke3BhdGh9LXJvdy0ke3Jvd0luZGV4ICsgMX1gKTtcbiAgICB9LCAwKTtcbiAgfSwgW2Rpc3BhdGNoRmllbGRzLCBwYXRoLCBzZXRNb2RpZmllZF0pO1xuXG4gIGNvbnN0IHJlbW92ZVJvdyA9IHVzZUNhbGxiYWNrKChyb3dJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgcmVtb3ZlRmllbGRSb3coeyByb3dJbmRleCwgcGF0aCB9KTtcbiAgICBzZXRNb2RpZmllZCh0cnVlKTtcbiAgfSwgW3JlbW92ZUZpZWxkUm93LCBwYXRoLCBzZXRNb2RpZmllZF0pO1xuXG4gIGNvbnN0IG1vdmVSb3cgPSB1c2VDYWxsYmFjaygobW92ZUZyb21JbmRleDogbnVtYmVyLCBtb3ZlVG9JbmRleDogbnVtYmVyKSA9PiB7XG4gICAgZGlzcGF0Y2hGaWVsZHMoeyB0eXBlOiAnTU9WRV9ST1cnLCBtb3ZlRnJvbUluZGV4LCBtb3ZlVG9JbmRleCwgcGF0aCB9KTtcbiAgICBzZXRNb2RpZmllZCh0cnVlKTtcbiAgfSwgW2Rpc3BhdGNoRmllbGRzLCBwYXRoLCBzZXRNb2RpZmllZF0pO1xuXG4gIGNvbnN0IHRvZ2dsZUNvbGxhcHNlQWxsID0gdXNlQ2FsbGJhY2soYXN5bmMgKGNvbGxhcHNlZDogYm9vbGVhbikgPT4ge1xuICAgIGRpc3BhdGNoRmllbGRzKHsgdHlwZTogJ1NFVF9BTExfUk9XU19DT0xMQVBTRUQnLCBwYXRoLCBjb2xsYXBzZWQsIHNldERvY0ZpZWxkUHJlZmVyZW5jZXMgfSk7XG4gIH0sIFtkaXNwYXRjaEZpZWxkcywgcGF0aCwgc2V0RG9jRmllbGRQcmVmZXJlbmNlc10pO1xuXG4gIGNvbnN0IHNldENvbGxhcHNlID0gdXNlQ2FsbGJhY2soYXN5bmMgKHJvd0lEOiBzdHJpbmcsIGNvbGxhcHNlZDogYm9vbGVhbikgPT4ge1xuICAgIGRpc3BhdGNoRmllbGRzKHsgdHlwZTogJ1NFVF9ST1dfQ09MTEFQU0VEJywgcGF0aCwgY29sbGFwc2VkLCByb3dJRCwgc2V0RG9jRmllbGRQcmVmZXJlbmNlcyB9KTtcbiAgfSwgW2Rpc3BhdGNoRmllbGRzLCBwYXRoLCBzZXREb2NGaWVsZFByZWZlcmVuY2VzXSk7XG5cbiAgY29uc3QgaGFzTWF4Um93cyA9IG1heFJvd3MgJiYgcm93cy5sZW5ndGggPj0gbWF4Um93cztcbiAgY29uc3QgZmllbGRFcnJvckNvdW50ID0gcm93cy5yZWR1Y2UoKHRvdGFsLCByb3cpID0+IHRvdGFsICsgKHJvdz8uY2hpbGRFcnJvclBhdGhzPy5zaXplIHx8IDApLCAwKSArICh2YWxpZCA/IDAgOiAxKTtcbiAgY29uc3QgZmllbGRIYXNFcnJvcnMgPSBzdWJtaXR0ZWQgJiYgZmllbGRFcnJvckNvdW50ID4gMDtcblxuICBjb25zdCBjbGFzc2VzID0gW1xuICAgICdmaWVsZC10eXBlJyxcbiAgICBiYXNlQ2xhc3MsXG4gICAgY2xhc3NOYW1lLFxuICAgIGZpZWxkSGFzRXJyb3JzID8gYCR7YmFzZUNsYXNzfS0taGFzLWVycm9yYCA6IGAke2Jhc2VDbGFzc30tLWhhcy1uby1lcnJvcmAsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGlkPXtgZmllbGQtJHtwYXRoLnJlcGxhY2UoL1xcLi9naSwgJ19fJyl9YH1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fZXJyb3Itd3JhcGB9PlxuICAgICAgICA8RXJyb3JcbiAgICAgICAgICBzaG93RXJyb3I9e3Nob3dFcnJvcn1cbiAgICAgICAgICBtZXNzYWdlPXtlcnJvck1lc3NhZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19oZWFkZXJgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRlci13cmFwYH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRlci1jb250ZW50YH0+XG4gICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgIHtnZXRUcmFuc2xhdGlvbihsYWJlbCB8fCBuYW1lLCBpMThuKX1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICB7ZmllbGRIYXNFcnJvcnMgJiYgZmllbGRFcnJvckNvdW50ID4gMCAmJiAoXG4gICAgICAgICAgICAgIDxFcnJvclBpbGxcbiAgICAgICAgICAgICAgICBjb3VudD17ZmllbGRFcnJvckNvdW50fVxuICAgICAgICAgICAgICAgIHdpdGhNZXNzYWdlXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyLWFjdGlvbnNgfT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUNvbGxhcHNlQWxsKHRydWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyLWFjdGlvbmB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dCgnY29sbGFwc2VBbGwnKX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVDb2xsYXBzZUFsbChmYWxzZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19oZWFkZXItYWN0aW9uYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0KCdzaG93QWxsJyl9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZpZWxkRGVzY3JpcHRpb25cbiAgICAgICAgICBjbGFzc05hbWU9e2BmaWVsZC1kZXNjcmlwdGlvbi0ke3BhdGgucmVwbGFjZSgvXFwuL2dpLCAnX18nKX1gfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgIC8+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgPE51bGxpZnlMb2NhbGVGaWVsZFxuICAgICAgICBsb2NhbGl6ZWQ9e2xvY2FsaXplZH1cbiAgICAgICAgcGF0aD17cGF0aH1cbiAgICAgICAgZmllbGRWYWx1ZT17dmFsdWV9XG4gICAgICAvPlxuXG4gICAgICA8RHJhZ2dhYmxlU29ydGFibGVcbiAgICAgICAgaWRzPXtyb3dzLm1hcCgocm93KSA9PiByb3cuaWQpfVxuICAgICAgICBvbkRyYWdFbmQ9eyh7IG1vdmVGcm9tSW5kZXgsIG1vdmVUb0luZGV4IH0pID0+IG1vdmVSb3cobW92ZUZyb21JbmRleCwgbW92ZVRvSW5kZXgpfVxuICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2RyYWdnYWJsZS1yb3dzYH1cbiAgICAgID5cbiAgICAgICAge3Jvd3MubGVuZ3RoID4gMCAmJiByb3dzLm1hcCgocm93LCBpKSA9PiAoXG4gICAgICAgICAgPERyYWdnYWJsZVNvcnRhYmxlSXRlbVxuICAgICAgICAgICAga2V5PXtyb3cuaWR9XG4gICAgICAgICAgICBpZD17cm93LmlkfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e3JlYWRPbmx5fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsoZHJhZ2dhYmxlU29ydGFibGVJdGVtUHJvcHMpID0+IChcbiAgICAgICAgICAgICAgPEFycmF5Um93XG4gICAgICAgICAgICAgICAgey4uLmRyYWdnYWJsZVNvcnRhYmxlSXRlbVByb3BzfVxuICAgICAgICAgICAgICAgIHJvdz17cm93fVxuICAgICAgICAgICAgICAgIGFkZFJvdz17YWRkUm93fVxuICAgICAgICAgICAgICAgIGR1cGxpY2F0ZVJvdz17ZHVwbGljYXRlUm93fVxuICAgICAgICAgICAgICAgIHJlbW92ZVJvdz17cmVtb3ZlUm93fVxuICAgICAgICAgICAgICAgIHNldENvbGxhcHNlPXtzZXRDb2xsYXBzZX1cbiAgICAgICAgICAgICAgICBwYXRoPXtwYXRofVxuICAgICAgICAgICAgICAgIGZpZWxkVHlwZXM9e2ZpZWxkVHlwZXN9XG4gICAgICAgICAgICAgICAgZmllbGRzPXtmaWVsZHN9XG4gICAgICAgICAgICAgICAgbW92ZVJvdz17bW92ZVJvd31cbiAgICAgICAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgICAgICAgcm93Q291bnQ9e3Jvd3MubGVuZ3RofVxuICAgICAgICAgICAgICAgIHBlcm1pc3Npb25zPXtwZXJtaXNzaW9uc31cbiAgICAgICAgICAgICAgICBDdXN0b21Sb3dMYWJlbD17Q3VzdG9tUm93TGFiZWx9XG4gICAgICAgICAgICAgICAgcm93SW5kZXg9e2l9XG4gICAgICAgICAgICAgICAgaW5kZXhQYXRoPXtpbmRleFBhdGh9XG4gICAgICAgICAgICAgICAgbGFiZWxzPXtsYWJlbHN9XG4gICAgICAgICAgICAgICAgaGFzTWF4Um93cz17aGFzTWF4Um93c31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9EcmFnZ2FibGVTb3J0YWJsZUl0ZW0+XG4gICAgICAgICkpfVxuXG4gICAgICAgIHshdmFsaWQgJiYgKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHtyZWFkT25seSAmJiAocm93cy5sZW5ndGggPT09IDApICYmIChcbiAgICAgICAgICAgICAgPEJhbm5lcj5cbiAgICAgICAgICAgICAgICB7dCgndmFsaWRhdGlvbjpmaWVsZEhhc05vJywgeyBsYWJlbDogZ2V0VHJhbnNsYXRpb24obGFiZWxzLnBsdXJhbCwgaTE4bikgfSl9XG4gICAgICAgICAgICAgIDwvQmFubmVyPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgeyhyb3dzLmxlbmd0aCA8IG1pblJvd3MgfHwgKHJlcXVpcmVkICYmIHJvd3MubGVuZ3RoID09PSAwKSkgJiYgKFxuICAgICAgICAgICAgICA8QmFubmVyIHR5cGU9XCJlcnJvclwiPlxuICAgICAgICAgICAgICAgIHt0KCd2YWxpZGF0aW9uOnJlcXVpcmVzQXRMZWFzdCcsIHtcbiAgICAgICAgICAgICAgICAgIGNvdW50OiBtaW5Sb3dzLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IGdldFRyYW5zbGF0aW9uKG1pblJvd3MgPyBsYWJlbHMucGx1cmFsIDogbGFiZWxzLnNpbmd1bGFyLCBpMThuKSB8fCB0KG1pblJvd3MgPiAxID8gJ2dlbmVyYWw6cm93JyA6ICdnZW5lcmFsOnJvd3MnKSxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9CYW5uZXI+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICA8L0RyYWdnYWJsZVNvcnRhYmxlPlxuXG4gICAgICB7KCFyZWFkT25seSAmJiAhaGFzTWF4Um93cykgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYWRkLWJ1dHRvbi13cmFwYH0+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaWNvbj1cInBsdXNcIlxuICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJpY29uLWxhYmVsXCJcbiAgICAgICAgICAgIGljb25TdHlsZT1cIndpdGgtYm9yZGVyXCJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkUm93KHZhbHVlIGFzIG51bWJlcil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ2FkZExhYmVsJywgeyBsYWJlbDogZ2V0VHJhbnNsYXRpb24obGFiZWxzLnNpbmd1bGFyLCBpMThuKSB9KX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aENvbmRpdGlvbihBcnJheUZpZWxkVHlwZSk7XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiQXJyYXlGaWVsZFR5cGUiLCJwcm9wcyIsImNvbXBvbmVudHMiLCJuYW1lIiwicGF0aCIsInBhdGhGcm9tUHJvcHMiLCJmaWVsZHMiLCJmaWVsZFR5cGVzIiwidmFsaWRhdGUiLCJhcnJheSIsInJlcXVpcmVkIiwibWF4Um93cyIsIm1pblJvd3MiLCJwZXJtaXNzaW9ucyIsImluZGV4UGF0aCIsImxvY2FsaXplZCIsImFkbWluIiwicmVhZE9ubHkiLCJkZXNjcmlwdGlvbiIsImNvbmRpdGlvbiIsImNsYXNzTmFtZSIsImxhYmVsIiwibGFiZWxzIiwic2luZ3VsYXIiLCJDdXN0b21Sb3dMYWJlbCIsIlJvd0xhYmVsIiwidW5kZWZpbmVkIiwic2V0RG9jRmllbGRQcmVmZXJlbmNlcyIsInVzZURvY3VtZW50SW5mbyIsInVzZUZvcm0iLCJkaXNwYXRjaEZpZWxkcyIsInNldE1vZGlmaWVkIiwiYWRkRmllbGRSb3ciLCJyZW1vdmVGaWVsZFJvdyIsInN1Ym1pdHRlZCIsInVzZUZvcm1TdWJtaXR0ZWQiLCJ1c2VMb2NhbGUiLCJjb2RlIiwibG9jYWxlIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiaTE4biIsImxvY2FsaXphdGlvbiIsInVzZUNvbmZpZyIsImVkaXRpbmdEZWZhdWx0TG9jYWxlIiwiZmFsbGJhY2siLCJkZWZhdWx0TG9jYWxlIiwiZ2V0TGFiZWxzIiwicCIsInBsdXJhbCIsIm1lbW9pemVkVmFsaWRhdGUiLCJ1c2VDYWxsYmFjayIsInZhbHVlIiwib3B0aW9ucyIsInVzZUZpZWxkIiwiaGFzUm93cyIsInNob3dFcnJvciIsImVycm9yTWVzc2FnZSIsInJvd3MiLCJ2YWxpZCIsImFkZFJvdyIsInJvd0luZGV4Iiwic2V0VGltZW91dCIsInNjcm9sbFRvSUQiLCJkdXBsaWNhdGVSb3ciLCJ0eXBlIiwicmVtb3ZlUm93IiwibW92ZVJvdyIsIm1vdmVGcm9tSW5kZXgiLCJtb3ZlVG9JbmRleCIsInRvZ2dsZUNvbGxhcHNlQWxsIiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2UiLCJyb3dJRCIsImhhc01heFJvd3MiLCJsZW5ndGgiLCJmaWVsZEVycm9yQ291bnQiLCJyZWR1Y2UiLCJ0b3RhbCIsInJvdyIsImNoaWxkRXJyb3JQYXRocyIsInNpemUiLCJmaWVsZEhhc0Vycm9ycyIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImRpdiIsImlkIiwicmVwbGFjZSIsIkVycm9yIiwibWVzc2FnZSIsImhlYWRlciIsImgzIiwiZ2V0VHJhbnNsYXRpb24iLCJFcnJvclBpbGwiLCJjb3VudCIsIndpdGhNZXNzYWdlIiwidWwiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJGaWVsZERlc2NyaXB0aW9uIiwiTnVsbGlmeUxvY2FsZUZpZWxkIiwiZmllbGRWYWx1ZSIsIkRyYWdnYWJsZVNvcnRhYmxlIiwiaWRzIiwibWFwIiwib25EcmFnRW5kIiwiaSIsIkRyYWdnYWJsZVNvcnRhYmxlSXRlbSIsImtleSIsImRpc2FibGVkIiwiZHJhZ2dhYmxlU29ydGFibGVJdGVtUHJvcHMiLCJBcnJheVJvdyIsInJvd0NvdW50IiwiUmVhY3QiLCJGcmFnbWVudCIsIkJhbm5lciIsIkJ1dHRvbiIsImljb24iLCJidXR0b25TdHlsZSIsImljb25TdHlsZSIsImljb25Qb3NpdGlvbiIsIndpdGhDb25kaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBeVJBOzs7ZUFBQTs7OzZEQXpSbUM7NEJBQ0o7b0VBQ0w7NkRBQ1A7dUJBQ3VCOytEQUNyQjtzQkFDSzs0REFDUjsyQkFDSTs2REFDSDt1RUFDVTs0QkFDRzswQkFFTDs4QkFDSTtzQkFDTDs0QkFDUzt3RUFDTDs0RUFDSTt3QkFDVDt5QkFDQztRQUVuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFNQSxZQUFZO0FBRWxCLElBQU1DLGlCQUFrQyxTQUFDQztRQXlCekJBLFFBQWdCQSxlQUFBQSxTQUVQQztJQTFCdkIsSUFDRUMsT0FrQkVGLE1BbEJGRSxNQUNBQyxBQUFNQyxnQkFpQkpKLE1BakJGRyxNQUNBRSxTQWdCRUwsTUFoQkZLLFFBQ0FDLGFBZUVOLE1BZkZNLDhCQWVFTixNQWRGTyxVQUFBQSx3Q0FBV0Msa0JBQUssb0JBQ2hCQyxXQWFFVCxNQWJGUyxVQUNBQyxVQVlFVixNQVpGVSxTQUNBQyxVQVdFWCxNQVhGVyxTQUNBQyxjQVVFWixNQVZGWSxhQUNBQyxZQVNFYixNQVRGYSxXQUNBQyxZQVFFZCxNQVJGYywwQkFRRWQsTUFQRmUsT0FDRUMsd0JBQUFBLFVBQ0FDLDJCQUFBQSxhQUNBQyx5QkFBQUEsV0FDQUMseUJBQUFBLFdBQ0FsQiwwQkFBQUE7SUFJSixJQUFNRSxPQUFPQyxpQkFBaUJGO1FBR2hCRjtJQURkLDBEQUEwRDtJQUMxRCxJQUFNb0Is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