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
var _Locale = require("../../../utilities/Locale");
var _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
var _DocumentInfo = require("../../../utilities/DocumentInfo");
var _context = require("../../Form/context");
var _Error = /*#__PURE__*/ _interop_require_default(require("../../Error"));
var _useField = /*#__PURE__*/ _interop_require_default(require("../../useField"));
var _BlocksDrawer = require("./BlocksDrawer");
var _validations = require("../../../../../fields/validations");
var _Banner = /*#__PURE__*/ _interop_require_default(require("../../../elements/Banner"));
var _FieldDescription = /*#__PURE__*/ _interop_require_default(require("../../FieldDescription"));
var _scrollToID = require("../../../../utilities/scrollToID");
var _getTranslation = require("../../../../../utilities/getTranslation");
var _NullifyField = require("../../NullifyField");
var _Config = require("../../../utilities/Config");
var _DraggableSortable = /*#__PURE__*/ _interop_require_default(require("../../../elements/DraggableSortable"));
var _DraggableSortableItem = /*#__PURE__*/ _interop_require_default(require("../../../elements/DraggableSortable/DraggableSortableItem"));
var _useDrawerSlug = require("../../../elements/Drawer/useDrawerSlug");
var _Button = /*#__PURE__*/ _interop_require_default(require("../../../elements/Button"));
var _Drawer = require("../../../elements/Drawer");
var _BlockRow = require("./BlockRow");
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
var baseClass = "blocks-field";
var BlocksField = function(props) {
    var _useTranslation = (0, _reacti18next.useTranslation)("fields"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var label = props.label, name = props.name, pathFromProps = props.path, blocks = props.blocks, labelsFromProps = props.labels, fieldTypes = props.fieldTypes, maxRows = props.maxRows, minRows = props.minRows, required = props.required, _props_validate = props.validate, validate = _props_validate === void 0 ? _validations.blocks : _props_validate, permissions = props.permissions, indexPath = props.indexPath, localized = props.localized, _props_admin = props.admin, readOnly = _props_admin.readOnly, description = _props_admin.description, condition = _props_admin.condition, className = _props_admin.className;
    var path = pathFromProps || name;
    var setDocFieldPreferences = (0, _DocumentInfo.useDocumentInfo)().setDocFieldPreferences;
    var _useForm = (0, _context.useForm)(), dispatchFields = _useForm.dispatchFields, setModified = _useForm.setModified, addFieldRow = _useForm.addFieldRow, removeFieldRow = _useForm.removeFieldRow;
    var _useLocale = (0, _Locale.useLocale)(), locale = _useLocale.code;
    var localization = (0, _Config.useConfig)().localization;
    var drawerSlug = (0, _useDrawerSlug.useDrawerSlug)("blocks-drawer");
    var submitted = (0, _context.useFormSubmitted)();
    var labels = _object_spread({
        singular: t("block"),
        plural: t("blocks")
    }, labelsFromProps);
    var editingDefaultLocale = function() {
        if (localization && localization.fallback) {
            var defaultLocale = localization.defaultLocale || "en";
            return locale === defaultLocale;
        }
        return true;
    }();
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
        var _ref = _async_to_generator(function(rowIndex, blockType) {
            return _ts_generator(this, function(_state) {
                addFieldRow({
                    path: path,
                    rowIndex: rowIndex,
                    data: {
                        blockType: blockType
                    }
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
        return function(rowIndex, blockType) {
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
            path: path,
            rowIndex: rowIndex
        });
        setModified(true);
    }, [
        path,
        removeFieldRow,
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
    }, 0);
    var fieldHasErrors = submitted && fieldErrorCount + (valid ? 0 : 1) > 0;
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
        className: "".concat(baseClass, "__heading-with-error")
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
        }
    }, rows.length > 0 && rows.map(function(row, i) {
        var blockType = row.blockType;
        var blockToRender = blocks.find(function(block) {
            return block.slug === blockType;
        });
        if (blockToRender) {
            return /*#__PURE__*/ _react.default.createElement(_DraggableSortableItem.default, {
                key: row.id,
                id: row.id,
                disabled: readOnly
            }, function(draggableSortableItemProps) {
                return /*#__PURE__*/ _react.default.createElement(_BlockRow.BlockRow, _object_spread_props(_object_spread({}, draggableSortableItemProps), {
                    row: row,
                    rowIndex: i,
                    indexPath: indexPath,
                    addRow: addRow,
                    duplicateRow: duplicateRow,
                    removeRow: removeRow,
                    moveRow: moveRow,
                    setCollapse: setCollapse,
                    blockToRender: blockToRender,
                    blocks: blocks,
                    fieldTypes: fieldTypes,
                    permissions: permissions,
                    readOnly: readOnly,
                    rowCount: rows.length,
                    labels: labels,
                    path: path,
                    hasMaxRows: hasMaxRows
                }));
            });
        }
        return null;
    }), !editingDefaultLocale && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, (rows.length < minRows || required && rows.length === 0) && /*#__PURE__*/ _react.default.createElement(_Banner.default, {
        type: "error"
    }, t("validation:requiresAtLeast", {
        count: minRows,
        label: (0, _getTranslation.getTranslation)(minRows === 1 || typeof minRows === "undefined" ? labels.singular : labels.plural, i18n)
    })), rows.length === 0 && readOnly && /*#__PURE__*/ _react.default.createElement(_Banner.default, null, t("validation:fieldHasNo", {
        label: (0, _getTranslation.getTranslation)(labels.plural, i18n)
    })))), !readOnly && !hasMaxRows && /*#__PURE__*/ _react.default.createElement(_react.Fragment, null, /*#__PURE__*/ _react.default.createElement(_Drawer.DrawerToggler, {
        slug: drawerSlug,
        className: "".concat(baseClass, "__drawer-toggler")
    }, /*#__PURE__*/ _react.default.createElement(_Button.default, {
        el: "span",
        icon: "plus",
        buttonStyle: "icon-label",
        iconStyle: "with-border",
        iconPosition: "left"
    }, t("addLabel", {
        label: (0, _getTranslation.getTranslation)(labels.singular, i18n)
    }))), /*#__PURE__*/ _react.default.createElement(_BlocksDrawer.BlocksDrawer, {
        drawerSlug: drawerSlug,
        blocks: blocks,
        addRow: addRow,
        addRowIndex: value,
        labels: labels
    })));
};
var _default = (0, _withCondition.default)(BlocksField);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0Jsb2Nrcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvTG9jYWxlJztcbmltcG9ydCB3aXRoQ29uZGl0aW9uIGZyb20gJy4uLy4uL3dpdGhDb25kaXRpb24nO1xuaW1wb3J0IHsgdXNlRG9jdW1lbnRJbmZvIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0RvY3VtZW50SW5mbyc7XG5pbXBvcnQgeyB1c2VGb3JtLCB1c2VGb3JtU3VibWl0dGVkIH0gZnJvbSAnLi4vLi4vRm9ybS9jb250ZXh0JztcbmltcG9ydCBFcnJvciBmcm9tICcuLi8uLi9FcnJvcic7XG5pbXBvcnQgdXNlRmllbGQgZnJvbSAnLi4vLi4vdXNlRmllbGQnO1xuaW1wb3J0IHsgQmxvY2tzRHJhd2VyIH0gZnJvbSAnLi9CbG9ja3NEcmF3ZXInO1xuaW1wb3J0IHsgYmxvY2tzIGFzIGJsb2Nrc1ZhbGlkYXRvciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy92YWxpZGF0aW9ucyc7XG5pbXBvcnQgQmFubmVyIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0Jhbm5lcic7XG5pbXBvcnQgRmllbGREZXNjcmlwdGlvbiBmcm9tICcuLi8uLi9GaWVsZERlc2NyaXB0aW9uJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBzY3JvbGxUb0lEIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL3Njcm9sbFRvSUQnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgTnVsbGlmeUxvY2FsZUZpZWxkIH0gZnJvbSAnLi4vLi4vTnVsbGlmeUZpZWxkJztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IERyYWdnYWJsZVNvcnRhYmxlIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0RyYWdnYWJsZVNvcnRhYmxlJztcbmltcG9ydCBEcmFnZ2FibGVTb3J0YWJsZUl0ZW0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvRHJhZ2dhYmxlU29ydGFibGUvRHJhZ2dhYmxlU29ydGFibGVJdGVtJztcbmltcG9ydCB7IHVzZURyYXdlclNsdWcgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9EcmF3ZXIvdXNlRHJhd2VyU2x1Zyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0J1dHRvbic7XG5pbXBvcnQgeyBEcmF3ZXJUb2dnbGVyIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvRHJhd2VyJztcbmltcG9ydCB7IEJsb2NrUm93IH0gZnJvbSAnLi9CbG9ja1Jvdyc7XG5pbXBvcnQgeyBFcnJvclBpbGwgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9FcnJvclBpbGwnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdibG9ja3MtZmllbGQnO1xuXG5jb25zdCBCbG9ja3NGaWVsZDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ2ZpZWxkcycpO1xuXG4gIGNvbnN0IHtcbiAgICBsYWJlbCxcbiAgICBuYW1lLFxuICAgIHBhdGg6IHBhdGhGcm9tUHJvcHMsXG4gICAgYmxvY2tzLFxuICAgIGxhYmVsczogbGFiZWxzRnJvbVByb3BzLFxuICAgIGZpZWxkVHlwZXMsXG4gICAgbWF4Um93cyxcbiAgICBtaW5Sb3dzLFxuICAgIHJlcXVpcmVkLFxuICAgIHZhbGlkYXRlID0gYmxvY2tzVmFsaWRhdG9yLFxuICAgIHBlcm1pc3Npb25zLFxuICAgIGluZGV4UGF0aCxcbiAgICBsb2NhbGl6ZWQsXG4gICAgYWRtaW46IHtcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBjb25kaXRpb24sXG4gICAgICBjbGFzc05hbWUsXG4gICAgfSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHBhdGggPSBwYXRoRnJvbVByb3BzIHx8IG5hbWU7XG5cbiAgY29uc3QgeyBzZXREb2NGaWVsZFByZWZlcmVuY2VzIH0gPSB1c2VEb2N1bWVudEluZm8oKTtcbiAgY29uc3QgeyBkaXNwYXRjaEZpZWxkcywgc2V0TW9kaWZpZWQsIGFkZEZpZWxkUm93LCByZW1vdmVGaWVsZFJvdyB9ID0gdXNlRm9ybSgpO1xuICBjb25zdCB7IGNvZGU6IGxvY2FsZSB9ID0gdXNlTG9jYWxlKCk7XG4gIGNvbnN0IHsgbG9jYWxpemF0aW9uIH0gPSB1c2VDb25maWcoKTtcbiAgY29uc3QgZHJhd2VyU2x1ZyA9IHVzZURyYXdlclNsdWcoJ2Jsb2Nrcy1kcmF3ZXInKTtcbiAgY29uc3Qgc3VibWl0dGVkID0gdXNlRm9ybVN1Ym1pdHRlZCgpO1xuXG4gIGNvbnN0IGxhYmVscyA9IHtcbiAgICBzaW5ndWxhcjogdCgnYmxvY2snKSxcbiAgICBwbHVyYWw6IHQoJ2Jsb2NrcycpLFxuICAgIC4uLmxhYmVsc0Zyb21Qcm9wcyxcbiAgfTtcblxuICBjb25zdCBlZGl0aW5nRGVmYXVsdExvY2FsZSA9ICgoKSA9PiB7XG4gICAgaWYgKGxvY2FsaXphdGlvbiAmJiBsb2NhbGl6YXRpb24uZmFsbGJhY2spIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRMb2NhbGUgPSBsb2NhbGl6YXRpb24uZGVmYXVsdExvY2FsZSB8fCAnZW4nO1xuICAgICAgcmV0dXJuIGxvY2FsZSA9PT0gZGVmYXVsdExvY2FsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSkoKTtcblxuICBjb25zdCBtZW1vaXplZFZhbGlkYXRlID0gdXNlQ2FsbGJhY2soKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgLy8gYWx0ZXJuYXRpdmUgbG9jYWxlcyBjYW4gYmUgbnVsbFxuICAgIGlmICghZWRpdGluZ0RlZmF1bHRMb2NhbGUgJiYgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWRhdGUodmFsdWUsIHsgLi4ub3B0aW9ucywgbWluUm93cywgbWF4Um93cywgcmVxdWlyZWQgfSk7XG4gIH0sIFttYXhSb3dzLCBtaW5Sb3dzLCByZXF1aXJlZCwgdmFsaWRhdGUsIGVkaXRpbmdEZWZhdWx0TG9jYWxlXSk7XG5cbiAgY29uc3Qge1xuICAgIHNob3dFcnJvcixcbiAgICBlcnJvck1lc3NhZ2UsXG4gICAgdmFsdWUsXG4gICAgcm93cyA9IFtdLFxuICAgIHZhbGlkLFxuICB9ID0gdXNlRmllbGQ8bnVtYmVyPih7XG4gICAgcGF0aCxcbiAgICB2YWxpZGF0ZTogbWVtb2l6ZWRWYWxpZGF0ZSxcbiAgICBjb25kaXRpb24sXG4gICAgaGFzUm93czogdHJ1ZSxcbiAgfSk7XG5cbiAgY29uc3QgYWRkUm93ID0gdXNlQ2FsbGJhY2soYXN5bmMgKHJvd0luZGV4OiBudW1iZXIsIGJsb2NrVHlwZTogc3RyaW5nKSA9PiB7XG4gICAgYWRkRmllbGRSb3coe1xuICAgICAgcGF0aCxcbiAgICAgIHJvd0luZGV4LFxuICAgICAgZGF0YToge1xuICAgICAgICBibG9ja1R5cGUsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHNldE1vZGlmaWVkKHRydWUpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzY3JvbGxUb0lEKGAke3BhdGh9LXJvdy0ke3Jvd0luZGV4ICsgMX1gKTtcbiAgICB9LCAwKTtcbiAgfSwgW2FkZEZpZWxkUm93LCBwYXRoLCBzZXRNb2RpZmllZF0pO1xuXG4gIGNvbnN0IGR1cGxpY2F0ZVJvdyA9IHVzZUNhbGxiYWNrKGFzeW5jIChyb3dJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgZGlzcGF0Y2hGaWVsZHMoeyB0eXBlOiAnRFVQTElDQVRFX1JPVycsIHJvd0luZGV4LCBwYXRoIH0pO1xuICAgIHNldE1vZGlmaWVkKHRydWUpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzY3JvbGxUb0lEKGAke3BhdGh9LXJvdy0ke3Jvd0luZGV4ICsgMX1gKTtcbiAgICB9LCAwKTtcbiAgfSwgW2Rpc3BhdGNoRmllbGRzLCBwYXRoLCBzZXRNb2RpZmllZF0pO1xuXG4gIGNvbnN0IHJlbW92ZVJvdyA9IHVzZUNhbGxiYWNrKChyb3dJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgcmVtb3ZlRmllbGRSb3coeyBwYXRoLCByb3dJbmRleCB9KTtcbiAgICBzZXRNb2RpZmllZCh0cnVlKTtcbiAgfSwgW3BhdGgsIHJlbW92ZUZpZWxkUm93LCBzZXRNb2RpZmllZF0pO1xuXG4gIGNvbnN0IG1vdmVSb3cgPSB1c2VDYWxsYmFjaygobW92ZUZyb21JbmRleDogbnVtYmVyLCBtb3ZlVG9JbmRleDogbnVtYmVyKSA9PiB7XG4gICAgZGlzcGF0Y2hGaWVsZHMoeyB0eXBlOiAnTU9WRV9ST1cnLCBtb3ZlRnJvbUluZGV4LCBtb3ZlVG9JbmRleCwgcGF0aCB9KTtcbiAgICBzZXRNb2RpZmllZCh0cnVlKTtcbiAgfSwgW2Rpc3BhdGNoRmllbGRzLCBwYXRoLCBzZXRNb2RpZmllZF0pO1xuXG4gIGNvbnN0IHRvZ2dsZUNvbGxhcHNlQWxsID0gdXNlQ2FsbGJhY2soYXN5bmMgKGNvbGxhcHNlZDogYm9vbGVhbikgPT4ge1xuICAgIGRpc3BhdGNoRmllbGRzKHsgdHlwZTogJ1NFVF9BTExfUk9XU19DT0xMQVBTRUQnLCBwYXRoLCBjb2xsYXBzZWQsIHNldERvY0ZpZWxkUHJlZmVyZW5jZXMgfSk7XG4gIH0sIFtkaXNwYXRjaEZpZWxkcywgcGF0aCwgc2V0RG9jRmllbGRQcmVmZXJlbmNlc10pO1xuXG4gIGNvbnN0IHNldENvbGxhcHNlID0gdXNlQ2FsbGJhY2soYXN5bmMgKHJvd0lEOiBzdHJpbmcsIGNvbGxhcHNlZDogYm9vbGVhbikgPT4ge1xuICAgIGRpc3BhdGNoRmllbGRzKHsgdHlwZTogJ1NFVF9ST1dfQ09MTEFQU0VEJywgcGF0aCwgY29sbGFwc2VkLCByb3dJRCwgc2V0RG9jRmllbGRQcmVmZXJlbmNlcyB9KTtcbiAgfSwgW2Rpc3BhdGNoRmllbGRzLCBwYXRoLCBzZXREb2NGaWVsZFByZWZlcmVuY2VzXSk7XG5cbiAgY29uc3QgaGFzTWF4Um93cyA9IG1heFJvd3MgJiYgcm93cy5sZW5ndGggPj0gbWF4Um93cztcblxuICBjb25zdCBmaWVsZEVycm9yQ291bnQgPSByb3dzLnJlZHVjZSgodG90YWwsIHJvdykgPT4gdG90YWwgKyAocm93Py5jaGlsZEVycm9yUGF0aHM/LnNpemUgfHwgMCksIDApO1xuICBjb25zdCBmaWVsZEhhc0Vycm9ycyA9IHN1Ym1pdHRlZCAmJiBmaWVsZEVycm9yQ291bnQgKyAodmFsaWQgPyAwIDogMSkgPiAwO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgJ2ZpZWxkLXR5cGUnLFxuICAgIGJhc2VDbGFzcyxcbiAgICBjbGFzc05hbWUsXG4gICAgZmllbGRIYXNFcnJvcnMgPyBgJHtiYXNlQ2xhc3N9LS1oYXMtZXJyb3JgIDogYCR7YmFzZUNsYXNzfS0taGFzLW5vLWVycm9yYCxcbiAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgaWQ9e2BmaWVsZC0ke3BhdGgucmVwbGFjZSgvXFwuL2dpLCAnX18nKX1gfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19lcnJvci13cmFwYH0+XG4gICAgICAgIDxFcnJvclxuICAgICAgICAgIHNob3dFcnJvcj17c2hvd0Vycm9yfVxuICAgICAgICAgIG1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRlcmB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyLXdyYXBgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGluZy13aXRoLWVycm9yYH0+XG4gICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgIHtnZXRUcmFuc2xhdGlvbihsYWJlbCB8fCBuYW1lLCBpMThuKX1cbiAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgIHtmaWVsZEhhc0Vycm9ycyAmJiBmaWVsZEVycm9yQ291bnQgPiAwICYmIChcbiAgICAgICAgICAgICAgPEVycm9yUGlsbFxuICAgICAgICAgICAgICAgIGNvdW50PXtmaWVsZEVycm9yQ291bnR9XG4gICAgICAgICAgICAgICAgd2l0aE1lc3NhZ2VcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyLWFjdGlvbnNgfT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUNvbGxhcHNlQWxsKHRydWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyLWFjdGlvbmB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dCgnY29sbGFwc2VBbGwnKX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlQ29sbGFwc2VBbGwoZmFsc2UpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyLWFjdGlvbmB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dCgnc2hvd0FsbCcpfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGaWVsZERlc2NyaXB0aW9uXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgLz5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8TnVsbGlmeUxvY2FsZUZpZWxkXG4gICAgICAgIGxvY2FsaXplZD17bG9jYWxpemVkfVxuICAgICAgICBwYXRoPXtwYXRofVxuICAgICAgICBmaWVsZFZhbHVlPXt2YWx1ZX1cbiAgICAgIC8+XG5cbiAgICAgIDxEcmFnZ2FibGVTb3J0YWJsZVxuICAgICAgICBpZHM9e3Jvd3MubWFwKChyb3cpID0+IHJvdy5pZCl9XG4gICAgICAgIG9uRHJhZ0VuZD17KHsgbW92ZUZyb21JbmRleCwgbW92ZVRvSW5kZXggfSkgPT4gbW92ZVJvdyhtb3ZlRnJvbUluZGV4LCBtb3ZlVG9JbmRleCl9XG4gICAgICA+XG4gICAgICAgIHtyb3dzLmxlbmd0aCA+IDAgJiYgcm93cy5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgYmxvY2tUeXBlIH0gPSByb3c7XG4gICAgICAgICAgY29uc3QgYmxvY2tUb1JlbmRlciA9IGJsb2Nrcy5maW5kKChibG9jaykgPT4gYmxvY2suc2x1ZyA9PT0gYmxvY2tUeXBlKTtcblxuICAgICAgICAgIGlmIChibG9ja1RvUmVuZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8RHJhZ2dhYmxlU29ydGFibGVJdGVtXG4gICAgICAgICAgICAgICAga2V5PXtyb3cuaWR9XG4gICAgICAgICAgICAgICAgaWQ9e3Jvdy5pZH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7KGRyYWdnYWJsZVNvcnRhYmxlSXRlbVByb3BzKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8QmxvY2tSb3dcbiAgICAgICAgICAgICAgICAgICAgey4uLmRyYWdnYWJsZVNvcnRhYmxlSXRlbVByb3BzfVxuICAgICAgICAgICAgICAgICAgICByb3c9e3Jvd31cbiAgICAgICAgICAgICAgICAgICAgcm93SW5kZXg9e2l9XG4gICAgICAgICAgICAgICAgICAgIGluZGV4UGF0aD17aW5kZXhQYXRofVxuICAgICAgICAgICAgICAgICAgICBhZGRSb3c9e2FkZFJvd31cbiAgICAgICAgICAgICAgICAgICAgZHVwbGljYXRlUm93PXtkdXBsaWNhdGVSb3d9XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVJvdz17cmVtb3ZlUm93fVxuICAgICAgICAgICAgICAgICAgICBtb3ZlUm93PXttb3ZlUm93fVxuICAgICAgICAgICAgICAgICAgICBzZXRDb2xsYXBzZT17c2V0Q29sbGFwc2V9XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrVG9SZW5kZXI9e2Jsb2NrVG9SZW5kZXJ9XG4gICAgICAgICAgICAgICAgICAgIGJsb2Nrcz17YmxvY2tzfVxuICAgICAgICAgICAgICAgICAgICBmaWVsZFR5cGVzPXtmaWVsZFR5cGVzfVxuICAgICAgICAgICAgICAgICAgICBwZXJtaXNzaW9ucz17cGVybWlzc2lvbnN9XG4gICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICAgICAgICAgICAgcm93Q291bnQ9e3Jvd3MubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM9e2xhYmVsc31cbiAgICAgICAgICAgICAgICAgICAgcGF0aD17cGF0aH1cbiAgICAgICAgICAgICAgICAgICAgaGFzTWF4Um93cz17aGFzTWF4Um93c31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9EcmFnZ2FibGVTb3J0YWJsZUl0ZW0+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9KX1cbiAgICAgICAgeyFlZGl0aW5nRGVmYXVsdExvY2FsZSAmJiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgeyhyb3dzLmxlbmd0aCA8IG1pblJvd3MgfHwgKHJlcXVpcmVkICYmIHJvd3MubGVuZ3RoID09PSAwKSkgJiYgKFxuICAgICAgICAgICAgICA8QmFubmVyIHR5cGU9XCJlcnJvclwiPlxuICAgICAgICAgICAgICAgIHt0KCd2YWxpZGF0aW9uOnJlcXVpcmVzQXRMZWFzdCcsIHtcbiAgICAgICAgICAgICAgICAgIGNvdW50OiBtaW5Sb3dzLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IGdldFRyYW5zbGF0aW9uKG1pblJvd3MgPT09IDEgfHwgdHlwZW9mIG1pblJvd3MgPT09ICd1bmRlZmluZWQnID8gbGFiZWxzLnNpbmd1bGFyIDogbGFiZWxzLnBsdXJhbCwgaTE4biksXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvQmFubmVyPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHsocm93cy5sZW5ndGggPT09IDAgJiYgcmVhZE9ubHkpICYmIChcbiAgICAgICAgICAgICAgPEJhbm5lcj5cbiAgICAgICAgICAgICAgICB7dCgndmFsaWRhdGlvbjpmaWVsZEhhc05vJywgeyBsYWJlbDogZ2V0VHJhbnNsYXRpb24obGFiZWxzLnBsdXJhbCwgaTE4bikgfSl9XG4gICAgICAgICAgICAgIDwvQmFubmVyPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgPC9EcmFnZ2FibGVTb3J0YWJsZT5cbiAgICAgIHsoIXJlYWRPbmx5ICYmICFoYXNNYXhSb3dzKSAmJiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8RHJhd2VyVG9nZ2xlclxuICAgICAgICAgICAgc2x1Zz17ZHJhd2VyU2x1Z31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fZHJhd2VyLXRvZ2dsZXJgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgZWw9XCJzcGFuXCJcbiAgICAgICAgICAgICAgaWNvbj1cInBsdXNcIlxuICAgICAgICAgICAgICBidXR0b25TdHlsZT1cImljb24tbGFiZWxcIlxuICAgICAgICAgICAgICBpY29uU3R5bGU9XCJ3aXRoLWJvcmRlclwiXG4gICAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dCgnYWRkTGFiZWwnLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihsYWJlbHMuc2luZ3VsYXIsIGkxOG4pIH0pfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9EcmF3ZXJUb2dnbGVyPlxuICAgICAgICAgIDxCbG9ja3NEcmF3ZXJcbiAgICAgICAgICAgIGRyYXdlclNsdWc9e2RyYXdlclNsdWd9XG4gICAgICAgICAgICBibG9ja3M9e2Jsb2Nrc31cbiAgICAgICAgICAgIGFkZFJvdz17YWRkUm93fVxuICAgICAgICAgICAgYWRkUm93SW5kZXg9e3ZhbHVlfVxuICAgICAgICAgICAgbGFiZWxzPXtsYWJlbHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29uZGl0aW9uKEJsb2Nrc0ZpZWxkKTtcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJCbG9ja3NGaWVsZCIsInByb3BzIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiaTE4biIsImxhYmVsIiwibmFtZSIsInBhdGgiLCJwYXRoRnJvbVByb3BzIiwiYmxvY2tzIiwibGFiZWxzIiwibGFiZWxzRnJvbVByb3BzIiwiZmllbGRUeXBlcyIsIm1heFJvd3MiLCJtaW5Sb3dzIiwicmVxdWlyZWQiLCJ2YWxpZGF0ZSIsImJsb2Nrc1ZhbGlkYXRvciIsInBlcm1pc3Npb25zIiwiaW5kZXhQYXRoIiwibG9jYWxpemVkIiwiYWRtaW4iLCJyZWFkT25seSIsImRlc2NyaXB0aW9uIiwiY29uZGl0aW9uIiwiY2xhc3NOYW1lIiwic2V0RG9jRmllbGRQcmVmZXJlbmNlcyIsInVzZURvY3VtZW50SW5mbyIsInVzZUZvcm0iLCJkaXNwYXRjaEZpZWxkcyIsInNldE1vZGlmaWVkIiwiYWRkRmllbGRSb3ciLCJyZW1vdmVGaWVsZFJvdyIsInVzZUxvY2FsZSIsImNvZGUiLCJsb2NhbGUiLCJsb2NhbGl6YXRpb24iLCJ1c2VDb25maWciLCJkcmF3ZXJTbHVnIiwidXNlRHJhd2VyU2x1ZyIsInN1Ym1pdHRlZCIsInVzZUZvcm1TdWJtaXR0ZWQiLCJzaW5ndWxhciIsInBsdXJhbCIsImVkaXRpbmdEZWZhdWx0TG9jYWxlIiwiZmFsbGJhY2siLCJkZWZhdWx0TG9jYWxlIiwibWVtb2l6ZWRWYWxpZGF0ZSIsInVzZUNhbGxiYWNrIiwidmFsdWUiLCJvcHRpb25zIiwidXNlRmllbGQiLCJoYXNSb3dzIiwic2hvd0Vycm9yIiwiZXJyb3JNZXNzYWdlIiwicm93cyIsInZhbGlkIiwiYWRkUm93Iiwicm93SW5kZXgiLCJibG9ja1R5cGUiLCJkYXRhIiwic2V0VGltZW91dCIsInNjcm9sbFRvSUQiLCJkdXBsaWNhdGVSb3ciLCJ0eXBlIiwicmVtb3ZlUm93IiwibW92ZVJvdyIsIm1vdmVGcm9tSW5kZXgiLCJtb3ZlVG9JbmRleCIsInRvZ2dsZUNvbGxhcHNlQWxsIiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2UiLCJyb3dJRCIsImhhc01heFJvd3MiLCJsZW5ndGgiLCJmaWVsZEVycm9yQ291bnQiLCJyZWR1Y2UiLCJ0b3RhbCIsInJvdyIsImNoaWxkRXJyb3JQYXRocyIsInNpemUiLCJmaWVsZEhhc0Vycm9ycyIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImRpdiIsImlkIiwicmVwbGFjZSIsIkVycm9yIiwibWVzc2FnZSIsImhlYWRlciIsImgzIiwiZ2V0VHJhbnNsYXRpb24iLCJFcnJvclBpbGwiLCJjb3VudCIsIndpdGhNZXNzYWdlIiwidWwiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJGaWVsZERlc2NyaXB0aW9uIiwiTnVsbGlmeUxvY2FsZUZpZWxkIiwiZmllbGRWYWx1ZSIsIkRyYWdnYWJsZVNvcnRhYmxlIiwiaWRzIiwibWFwIiwib25EcmFnRW5kIiwiaSIsImJsb2NrVG9SZW5kZXIiLCJmaW5kIiwiYmxvY2siLCJzbHVnIiwiRHJhZ2dhYmxlU29ydGFibGVJdGVtIiwia2V5IiwiZGlzYWJsZWQiLCJkcmFnZ2FibGVTb3J0YWJsZUl0ZW1Qcm9wcyIsIkJsb2NrUm93Iiwicm93Q291bnQiLCJSZWFjdCIsIkZyYWdtZW50IiwiQmFubmVyIiwiRHJhd2VyVG9nZ2xlciIsIkJ1dHRvbiIsImVsIiwiaWNvbiIsImJ1dHRvblN0eWxlIiwiaWNvblN0eWxlIiwiaWNvblBvc2l0aW9uIiwiQmxvY2tzRHJhd2VyIiwiYWRkUm93SW5kZXgiLCJ3aXRoQ29uZGl0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OytCQTZTQTs7O2VBQUE7Ozs2REE3UzZDOzRCQUNkO3NCQUNMO29FQUNBOzRCQUNNO3VCQUNVOzREQUN4QjsrREFDRzs0QkFDUTsyQkFDYTs2REFDdkI7dUVBQ1U7MEJBRUY7OEJBQ0k7NEJBQ0k7c0JBQ1Q7d0VBQ0k7NEVBQ0k7NkJBQ0o7NkRBQ1g7c0JBQ1c7d0JBQ0w7eUJBQ0M7UUFFbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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