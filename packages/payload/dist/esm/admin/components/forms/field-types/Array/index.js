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
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import withCondition from "../../withCondition";
import Button from "../../../elements/Button";
import { useForm, useFormSubmitted } from "../../Form/context";
import useField from "../../useField";
import { useLocale } from "../../../utilities/Locale";
import Error from "../../Error";
import { array } from "../../../../../fields/validations";
import Banner from "../../../elements/Banner";
import FieldDescription from "../../FieldDescription";
import { useDocumentInfo } from "../../../utilities/DocumentInfo";
import { scrollToID } from "../../../../utilities/scrollToID";
import { getTranslation } from "../../../../../utilities/getTranslation";
import { useConfig } from "../../../utilities/Config";
import { NullifyLocaleField } from "../../NullifyField";
import DraggableSortable from "../../../elements/DraggableSortable";
import DraggableSortableItem from "../../../elements/DraggableSortable/DraggableSortableItem";
import { ArrayRow } from "./ArrayRow";
import { ErrorPill } from "../../../elements/ErrorPill";
import "./index.scss";
var baseClass = "array-field";
var ArrayFieldType = function(props) {
    var _props, _props_labels, _props1, _components;
    var name = props.name, pathFromProps = props.path, fields = props.fields, fieldTypes = props.fieldTypes, _props_validate = props.validate, validate = _props_validate === void 0 ? array : _props_validate, required = props.required, maxRows = props.maxRows, minRows = props.minRows, permissions = props.permissions, indexPath = props.indexPath, localized = props.localized, _props_admin = props.admin, readOnly = _props_admin.readOnly, description = _props_admin.description, condition = _props_admin.condition, className = _props_admin.className, components = _props_admin.components;
    var path = pathFromProps || name;
    var _props_label;
    // eslint-disable-next-line react/destructuring-assignment
    var label = (_props_label = (_props = props) === null || _props === void 0 ? void 0 : _props.label) !== null && _props_label !== void 0 ? _props_label : (_props1 = props) === null || _props1 === void 0 ? void 0 : (_props_labels = _props1.labels) === null || _props_labels === void 0 ? void 0 : _props_labels.singular;
    var CustomRowLabel = ((_components = components) === null || _components === void 0 ? void 0 : _components.RowLabel) || undefined;
    var setDocFieldPreferences = useDocumentInfo().setDocFieldPreferences;
    var _useForm = useForm(), dispatchFields = _useForm.dispatchFields, setModified = _useForm.setModified, addFieldRow = _useForm.addFieldRow, removeFieldRow = _useForm.removeFieldRow;
    var submitted = useFormSubmitted();
    var _useLocale = useLocale(), locale = _useLocale.code;
    var _useTranslation = useTranslation("fields"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var localization = useConfig().localization;
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
    var memoizedValidate = useCallback(function(value, options) {
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
    var _useField = useField({
        path: path,
        validate: memoizedValidate,
        condition: condition,
        hasRows: true
    }), showError = _useField.showError, errorMessage = _useField.errorMessage, value = _useField.value, _useField_rows = _useField.rows, rows = _useField_rows === void 0 ? [] : _useField_rows, valid = _useField.valid;
    var addRow = useCallback(function() {
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
                            scrollToID("".concat(path, "-row-").concat(rowIndex + 1));
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
    var duplicateRow = useCallback(function() {
        var _ref = _async_to_generator(function(rowIndex) {
            return _ts_generator(this, function(_state) {
                dispatchFields({
                    type: "DUPLICATE_ROW",
                    rowIndex: rowIndex,
                    path: path
                });
                setModified(true);
                setTimeout(function() {
                    scrollToID("".concat(path, "-row-").concat(rowIndex + 1));
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
    var removeRow = useCallback(function(rowIndex) {
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
    var moveRow = useCallback(function(moveFromIndex, moveToIndex) {
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
    var toggleCollapseAll = useCallback(function() {
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
    var setCollapse = useCallback(function() {
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
    return /*#__PURE__*/ React.createElement("div", {
        id: "field-".concat(path.replace(/\./gi, "__")),
        className: classes
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__error-wrap")
    }, /*#__PURE__*/ React.createElement(Error, {
        showError: showError,
        message: errorMessage
    })), /*#__PURE__*/ React.createElement("header", {
        className: "".concat(baseClass, "__header")
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__header-wrap")
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__header-content")
    }, /*#__PURE__*/ React.createElement("h3", null, getTranslation(label || name, i18n)), fieldHasErrors && fieldErrorCount > 0 && /*#__PURE__*/ React.createElement(ErrorPill, {
        count: fieldErrorCount,
        withMessage: true
    })), /*#__PURE__*/ React.createElement("ul", {
        className: "".concat(baseClass, "__header-actions")
    }, /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("button", {
        type: "button",
        onClick: function() {
            return toggleCollapseAll(true);
        },
        className: "".concat(baseClass, "__header-action")
    }, t("collapseAll"))), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("button", {
        type: "button",
        onClick: function() {
            return toggleCollapseAll(false);
        },
        className: "".concat(baseClass, "__header-action")
    }, t("showAll"))))), /*#__PURE__*/ React.createElement(FieldDescription, {
        className: "field-description-".concat(path.replace(/\./gi, "__")),
        value: value,
        description: description
    })), /*#__PURE__*/ React.createElement(NullifyLocaleField, {
        localized: localized,
        path: path,
        fieldValue: value
    }), /*#__PURE__*/ React.createElement(DraggableSortable, {
        ids: rows.map(function(row) {
            return row.id;
        }),
        onDragEnd: function(param) {
            var moveFromIndex = param.moveFromIndex, moveToIndex = param.moveToIndex;
            return moveRow(moveFromIndex, moveToIndex);
        },
        className: "".concat(baseClass, "__draggable-rows")
    }, rows.length > 0 && rows.map(function(row, i) {
        return /*#__PURE__*/ React.createElement(DraggableSortableItem, {
            key: row.id,
            id: row.id,
            disabled: readOnly
        }, function(draggableSortableItemProps) {
            return /*#__PURE__*/ React.createElement(ArrayRow, _object_spread_props(_object_spread({}, draggableSortableItemProps), {
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
    }), !valid && /*#__PURE__*/ React.createElement(React.Fragment, null, readOnly && rows.length === 0 && /*#__PURE__*/ React.createElement(Banner, null, t("validation:fieldHasNo", {
        label: getTranslation(labels.plural, i18n)
    })), (rows.length < minRows || required && rows.length === 0) && /*#__PURE__*/ React.createElement(Banner, {
        type: "error"
    }, t("validation:requiresAtLeast", {
        count: minRows,
        label: getTranslation(minRows ? labels.plural : labels.singular, i18n) || t(minRows > 1 ? "general:row" : "general:rows")
    })))), !readOnly && !hasMaxRows && /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__add-button-wrap")
    }, /*#__PURE__*/ React.createElement(Button, {
        icon: "plus",
        buttonStyle: "icon-label",
        iconStyle: "with-border",
        iconPosition: "left",
        onClick: function() {
            return addRow(value);
        }
    }, t("addLabel", {
        label: getTranslation(labels.singular, i18n)
    }))));
};
export default withCondition(ArrayFieldType);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0FycmF5L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHdpdGhDb25kaXRpb24gZnJvbSAnLi4vLi4vd2l0aENvbmRpdGlvbic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0J1dHRvbic7XG5pbXBvcnQgeyB1c2VGb3JtLCB1c2VGb3JtU3VibWl0dGVkIH0gZnJvbSAnLi4vLi4vRm9ybS9jb250ZXh0JztcbmltcG9ydCB1c2VGaWVsZCBmcm9tICcuLi8uLi91c2VGaWVsZCc7XG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvTG9jYWxlJztcbmltcG9ydCBFcnJvciBmcm9tICcuLi8uLi9FcnJvcic7XG5pbXBvcnQgeyBhcnJheSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy92YWxpZGF0aW9ucyc7XG5pbXBvcnQgQmFubmVyIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0Jhbm5lcic7XG5pbXBvcnQgRmllbGREZXNjcmlwdGlvbiBmcm9tICcuLi8uLi9GaWVsZERlc2NyaXB0aW9uJztcbmltcG9ydCB7IHVzZURvY3VtZW50SW5mbyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9Eb2N1bWVudEluZm8nO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IHNjcm9sbFRvSUQgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvc2Nyb2xsVG9JRCc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCB7IE51bGxpZnlMb2NhbGVGaWVsZCB9IGZyb20gJy4uLy4uL051bGxpZnlGaWVsZCc7XG5pbXBvcnQgRHJhZ2dhYmxlU29ydGFibGUgZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvRHJhZ2dhYmxlU29ydGFibGUnO1xuaW1wb3J0IERyYWdnYWJsZVNvcnRhYmxlSXRlbSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9EcmFnZ2FibGVTb3J0YWJsZS9EcmFnZ2FibGVTb3J0YWJsZUl0ZW0nO1xuaW1wb3J0IHsgQXJyYXlSb3cgfSBmcm9tICcuL0FycmF5Um93JztcbmltcG9ydCB7IEVycm9yUGlsbCB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0Vycm9yUGlsbCc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2FycmF5LWZpZWxkJztcblxuY29uc3QgQXJyYXlGaWVsZFR5cGU6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgbmFtZSxcbiAgICBwYXRoOiBwYXRoRnJvbVByb3BzLFxuICAgIGZpZWxkcyxcbiAgICBmaWVsZFR5cGVzLFxuICAgIHZhbGlkYXRlID0gYXJyYXksXG4gICAgcmVxdWlyZWQsXG4gICAgbWF4Um93cyxcbiAgICBtaW5Sb3dzLFxuICAgIHBlcm1pc3Npb25zLFxuICAgIGluZGV4UGF0aCxcbiAgICBsb2NhbGl6ZWQsXG4gICAgYWRtaW46IHtcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBjb25kaXRpb24sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjb21wb25lbnRzLFxuICAgIH0sXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBwYXRoID0gcGF0aEZyb21Qcm9wcyB8fCBuYW1lO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnRcbiAgY29uc3QgbGFiZWwgPSBwcm9wcz8ubGFiZWwgPz8gcHJvcHM/LmxhYmVscz8uc2luZ3VsYXI7XG5cbiAgY29uc3QgQ3VzdG9tUm93TGFiZWwgPSBjb21wb25lbnRzPy5Sb3dMYWJlbCB8fCB1bmRlZmluZWQ7XG5cbiAgY29uc3QgeyBzZXREb2NGaWVsZFByZWZlcmVuY2VzIH0gPSB1c2VEb2N1bWVudEluZm8oKTtcbiAgY29uc3QgeyBkaXNwYXRjaEZpZWxkcywgc2V0TW9kaWZpZWQsIGFkZEZpZWxkUm93LCByZW1vdmVGaWVsZFJvdyB9ID0gdXNlRm9ybSgpO1xuICBjb25zdCBzdWJtaXR0ZWQgPSB1c2VGb3JtU3VibWl0dGVkKCk7XG4gIGNvbnN0IHsgY29kZTogbG9jYWxlIH0gPSB1c2VMb2NhbGUoKTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbignZmllbGRzJyk7XG4gIGNvbnN0IHsgbG9jYWxpemF0aW9uIH0gPSB1c2VDb25maWcoKTtcblxuICBjb25zdCBlZGl0aW5nRGVmYXVsdExvY2FsZSA9ICgoKSA9PiB7XG4gICAgaWYgKGxvY2FsaXphdGlvbiAmJiBsb2NhbGl6YXRpb24uZmFsbGJhY2spIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRMb2NhbGUgPSBsb2NhbGl6YXRpb24uZGVmYXVsdExvY2FsZSB8fCAnZW4nO1xuICAgICAgcmV0dXJuIGxvY2FsZSA9PT0gZGVmYXVsdExvY2FsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSkoKTtcblxuICAvLyBIYW5kbGUgbGFiZWxpbmcgZm9yIEFycmF5cywgR2xvYmFsIEFycmF5cywgYW5kIEJsb2Nrc1xuICBjb25zdCBnZXRMYWJlbHMgPSAocDogUHJvcHMpID0+IHtcbiAgICBpZiAocD8ubGFiZWxzKSByZXR1cm4gcC5sYWJlbHM7XG4gICAgaWYgKHA/LmxhYmVsKSByZXR1cm4geyBzaW5ndWxhcjogcC5sYWJlbCwgcGx1cmFsOiB1bmRlZmluZWQgfTtcbiAgICByZXR1cm4geyBzaW5ndWxhcjogdCgncm93JyksIHBsdXJhbDogdCgncm93cycpIH07XG4gIH07XG5cbiAgY29uc3QgbGFiZWxzID0gZ2V0TGFiZWxzKHByb3BzKTtcblxuICBjb25zdCBtZW1vaXplZFZhbGlkYXRlID0gdXNlQ2FsbGJhY2soKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgLy8gYWx0ZXJuYXRpdmUgbG9jYWxlcyBjYW4gYmUgbnVsbFxuICAgIGlmICghZWRpdGluZ0RlZmF1bHRMb2NhbGUgJiYgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWRhdGUodmFsdWUsIHsgLi4ub3B0aW9ucywgbWluUm93cywgbWF4Um93cywgcmVxdWlyZWQgfSk7XG4gIH0sIFttYXhSb3dzLCBtaW5Sb3dzLCByZXF1aXJlZCwgdmFsaWRhdGUsIGVkaXRpbmdEZWZhdWx0TG9jYWxlXSk7XG5cbiAgY29uc3Qge1xuICAgIHNob3dFcnJvcixcbiAgICBlcnJvck1lc3NhZ2UsXG4gICAgdmFsdWUsXG4gICAgcm93cyA9IFtdLFxuICAgIHZhbGlkLFxuICB9ID0gdXNlRmllbGQ8bnVtYmVyPih7XG4gICAgcGF0aCxcbiAgICB2YWxpZGF0ZTogbWVtb2l6ZWRWYWxpZGF0ZSxcbiAgICBjb25kaXRpb24sXG4gICAgaGFzUm93czogdHJ1ZSxcbiAgfSk7XG5cbiAgY29uc3QgYWRkUm93ID0gdXNlQ2FsbGJhY2soYXN5bmMgKHJvd0luZGV4OiBudW1iZXIpID0+IHtcbiAgICBhd2FpdCBhZGRGaWVsZFJvdyh7IHJvd0luZGV4LCBwYXRoIH0pO1xuICAgIHNldE1vZGlmaWVkKHRydWUpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzY3JvbGxUb0lEKGAke3BhdGh9LXJvdy0ke3Jvd0luZGV4ICsgMX1gKTtcbiAgICB9LCAwKTtcbiAgfSwgW2FkZEZpZWxkUm93LCBwYXRoLCBzZXRNb2RpZmllZF0pO1xuXG4gIGNvbnN0IGR1cGxpY2F0ZVJvdyA9IHVzZUNhbGxiYWNrKGFzeW5jIChyb3dJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgZGlzcGF0Y2hGaWVsZHMoeyB0eXBlOiAnRFVQTElDQVRFX1JPVycsIHJvd0luZGV4LCBwYXRoIH0pO1xuICAgIHNldE1vZGlmaWVkKHRydWUpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzY3JvbGxUb0lEKGAke3BhdGh9LXJvdy0ke3Jvd0luZGV4ICsgMX1gKTtcbiAgICB9LCAwKTtcbiAgfSwgW2Rpc3BhdGNoRmllbGRzLCBwYXRoLCBzZXRNb2RpZmllZF0pO1xuXG4gIGNvbnN0IHJlbW92ZVJvdyA9IHVzZUNhbGxiYWNrKChyb3dJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgcmVtb3ZlRmllbGRSb3coeyByb3dJbmRleCwgcGF0aCB9KTtcbiAgICBzZXRNb2RpZmllZCh0cnVlKTtcbiAgfSwgW3JlbW92ZUZpZWxkUm93LCBwYXRoLCBzZXRNb2RpZmllZF0pO1xuXG4gIGNvbnN0IG1vdmVSb3cgPSB1c2VDYWxsYmFjaygobW92ZUZyb21JbmRleDogbnVtYmVyLCBtb3ZlVG9JbmRleDogbnVtYmVyKSA9PiB7XG4gICAgZGlzcGF0Y2hGaWVsZHMoeyB0eXBlOiAnTU9WRV9ST1cnLCBtb3ZlRnJvbUluZGV4LCBtb3ZlVG9JbmRleCwgcGF0aCB9KTtcbiAgICBzZXRNb2RpZmllZCh0cnVlKTtcbiAgfSwgW2Rpc3BhdGNoRmllbGRzLCBwYXRoLCBzZXRNb2RpZmllZF0pO1xuXG4gIGNvbnN0IHRvZ2dsZUNvbGxhcHNlQWxsID0gdXNlQ2FsbGJhY2soYXN5bmMgKGNvbGxhcHNlZDogYm9vbGVhbikgPT4ge1xuICAgIGRpc3BhdGNoRmllbGRzKHsgdHlwZTogJ1NFVF9BTExfUk9XU19DT0xMQVBTRUQnLCBwYXRoLCBjb2xsYXBzZWQsIHNldERvY0ZpZWxkUHJlZmVyZW5jZXMgfSk7XG4gIH0sIFtkaXNwYXRjaEZpZWxkcywgcGF0aCwgc2V0RG9jRmllbGRQcmVmZXJlbmNlc10pO1xuXG4gIGNvbnN0IHNldENvbGxhcHNlID0gdXNlQ2FsbGJhY2soYXN5bmMgKHJvd0lEOiBzdHJpbmcsIGNvbGxhcHNlZDogYm9vbGVhbikgPT4ge1xuICAgIGRpc3BhdGNoRmllbGRzKHsgdHlwZTogJ1NFVF9ST1dfQ09MTEFQU0VEJywgcGF0aCwgY29sbGFwc2VkLCByb3dJRCwgc2V0RG9jRmllbGRQcmVmZXJlbmNlcyB9KTtcbiAgfSwgW2Rpc3BhdGNoRmllbGRzLCBwYXRoLCBzZXREb2NGaWVsZFByZWZlcmVuY2VzXSk7XG5cbiAgY29uc3QgaGFzTWF4Um93cyA9IG1heFJvd3MgJiYgcm93cy5sZW5ndGggPj0gbWF4Um93cztcbiAgY29uc3QgZmllbGRFcnJvckNvdW50ID0gcm93cy5yZWR1Y2UoKHRvdGFsLCByb3cpID0+IHRvdGFsICsgKHJvdz8uY2hpbGRFcnJvclBhdGhzPy5zaXplIHx8IDApLCAwKSArICh2YWxpZCA/IDAgOiAxKTtcbiAgY29uc3QgZmllbGRIYXNFcnJvcnMgPSBzdWJtaXR0ZWQgJiYgZmllbGRFcnJvckNvdW50ID4gMDtcblxuICBjb25zdCBjbGFzc2VzID0gW1xuICAgICdmaWVsZC10eXBlJyxcbiAgICBiYXNlQ2xhc3MsXG4gICAgY2xhc3NOYW1lLFxuICAgIGZpZWxkSGFzRXJyb3JzID8gYCR7YmFzZUNsYXNzfS0taGFzLWVycm9yYCA6IGAke2Jhc2VDbGFzc30tLWhhcy1uby1lcnJvcmAsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGlkPXtgZmllbGQtJHtwYXRoLnJlcGxhY2UoL1xcLi9naSwgJ19fJyl9YH1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fZXJyb3Itd3JhcGB9PlxuICAgICAgICA8RXJyb3JcbiAgICAgICAgICBzaG93RXJyb3I9e3Nob3dFcnJvcn1cbiAgICAgICAgICBtZXNzYWdlPXtlcnJvck1lc3NhZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19oZWFkZXJgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRlci13cmFwYH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRlci1jb250ZW50YH0+XG4gICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgIHtnZXRUcmFuc2xhdGlvbihsYWJlbCB8fCBuYW1lLCBpMThuKX1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICB7ZmllbGRIYXNFcnJvcnMgJiYgZmllbGRFcnJvckNvdW50ID4gMCAmJiAoXG4gICAgICAgICAgICAgIDxFcnJvclBpbGxcbiAgICAgICAgICAgICAgICBjb3VudD17ZmllbGRFcnJvckNvdW50fVxuICAgICAgICAgICAgICAgIHdpdGhNZXNzYWdlXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyLWFjdGlvbnNgfT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUNvbGxhcHNlQWxsKHRydWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyLWFjdGlvbmB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dCgnY29sbGFwc2VBbGwnKX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVDb2xsYXBzZUFsbChmYWxzZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19oZWFkZXItYWN0aW9uYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0KCdzaG93QWxsJyl9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZpZWxkRGVzY3JpcHRpb25cbiAgICAgICAgICBjbGFzc05hbWU9e2BmaWVsZC1kZXNjcmlwdGlvbi0ke3BhdGgucmVwbGFjZSgvXFwuL2dpLCAnX18nKX1gfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgIC8+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgPE51bGxpZnlMb2NhbGVGaWVsZFxuICAgICAgICBsb2NhbGl6ZWQ9e2xvY2FsaXplZH1cbiAgICAgICAgcGF0aD17cGF0aH1cbiAgICAgICAgZmllbGRWYWx1ZT17dmFsdWV9XG4gICAgICAvPlxuXG4gICAgICA8RHJhZ2dhYmxlU29ydGFibGVcbiAgICAgICAgaWRzPXtyb3dzLm1hcCgocm93KSA9PiByb3cuaWQpfVxuICAgICAgICBvbkRyYWdFbmQ9eyh7IG1vdmVGcm9tSW5kZXgsIG1vdmVUb0luZGV4IH0pID0+IG1vdmVSb3cobW92ZUZyb21JbmRleCwgbW92ZVRvSW5kZXgpfVxuICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2RyYWdnYWJsZS1yb3dzYH1cbiAgICAgID5cbiAgICAgICAge3Jvd3MubGVuZ3RoID4gMCAmJiByb3dzLm1hcCgocm93LCBpKSA9PiAoXG4gICAgICAgICAgPERyYWdnYWJsZVNvcnRhYmxlSXRlbVxuICAgICAgICAgICAga2V5PXtyb3cuaWR9XG4gICAgICAgICAgICBpZD17cm93LmlkfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e3JlYWRPbmx5fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsoZHJhZ2dhYmxlU29ydGFibGVJdGVtUHJvcHMpID0+IChcbiAgICAgICAgICAgICAgPEFycmF5Um93XG4gICAgICAgICAgICAgICAgey4uLmRyYWdnYWJsZVNvcnRhYmxlSXRlbVByb3BzfVxuICAgICAgICAgICAgICAgIHJvdz17cm93fVxuICAgICAgICAgICAgICAgIGFkZFJvdz17YWRkUm93fVxuICAgICAgICAgICAgICAgIGR1cGxpY2F0ZVJvdz17ZHVwbGljYXRlUm93fVxuICAgICAgICAgICAgICAgIHJlbW92ZVJvdz17cmVtb3ZlUm93fVxuICAgICAgICAgICAgICAgIHNldENvbGxhcHNlPXtzZXRDb2xsYXBzZX1cbiAgICAgICAgICAgICAgICBwYXRoPXtwYXRofVxuICAgICAgICAgICAgICAgIGZpZWxkVHlwZXM9e2ZpZWxkVHlwZXN9XG4gICAgICAgICAgICAgICAgZmllbGRzPXtmaWVsZHN9XG4gICAgICAgICAgICAgICAgbW92ZVJvdz17bW92ZVJvd31cbiAgICAgICAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgICAgICAgcm93Q291bnQ9e3Jvd3MubGVuZ3RofVxuICAgICAgICAgICAgICAgIHBlcm1pc3Npb25zPXtwZXJtaXNzaW9uc31cbiAgICAgICAgICAgICAgICBDdXN0b21Sb3dMYWJlbD17Q3VzdG9tUm93TGFiZWx9XG4gICAgICAgICAgICAgICAgcm93SW5kZXg9e2l9XG4gICAgICAgICAgICAgICAgaW5kZXhQYXRoPXtpbmRleFBhdGh9XG4gICAgICAgICAgICAgICAgbGFiZWxzPXtsYWJlbHN9XG4gICAgICAgICAgICAgICAgaGFzTWF4Um93cz17aGFzTWF4Um93c31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9EcmFnZ2FibGVTb3J0YWJsZUl0ZW0+XG4gICAgICAgICkpfVxuXG4gICAgICAgIHshdmFsaWQgJiYgKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHtyZWFkT25seSAmJiAocm93cy5sZW5ndGggPT09IDApICYmIChcbiAgICAgICAgICAgICAgPEJhbm5lcj5cbiAgICAgICAgICAgICAgICB7dCgndmFsaWRhdGlvbjpmaWVsZEhhc05vJywgeyBsYWJlbDogZ2V0VHJhbnNsYXRpb24obGFiZWxzLnBsdXJhbCwgaTE4bikgfSl9XG4gICAgICAgICAgICAgIDwvQmFubmVyPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgeyhyb3dzLmxlbmd0aCA8IG1pblJvd3MgfHwgKHJlcXVpcmVkICYmIHJvd3MubGVuZ3RoID09PSAwKSkgJiYgKFxuICAgICAgICAgICAgICA8QmFubmVyIHR5cGU9XCJlcnJvclwiPlxuICAgICAgICAgICAgICAgIHt0KCd2YWxpZGF0aW9uOnJlcXVpcmVzQXRMZWFzdCcsIHtcbiAgICAgICAgICAgICAgICAgIGNvdW50OiBtaW5Sb3dzLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IGdldFRyYW5zbGF0aW9uKG1pblJvd3MgPyBsYWJlbHMucGx1cmFsIDogbGFiZWxzLnNpbmd1bGFyLCBpMThuKSB8fCB0KG1pblJvd3MgPiAxID8gJ2dlbmVyYWw6cm93JyA6ICdnZW5lcmFsOnJvd3MnKSxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9CYW5uZXI+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICA8L0RyYWdnYWJsZVNvcnRhYmxlPlxuXG4gICAgICB7KCFyZWFkT25seSAmJiAhaGFzTWF4Um93cykgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYWRkLWJ1dHRvbi13cmFwYH0+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaWNvbj1cInBsdXNcIlxuICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJpY29uLWxhYmVsXCJcbiAgICAgICAgICAgIGljb25TdHlsZT1cIndpdGgtYm9yZGVyXCJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkUm93KHZhbHVlIGFzIG51bWJlcil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ2FkZExhYmVsJywgeyBsYWJlbDogZ2V0VHJhbnNsYXRpb24obGFiZWxzLnNpbmd1bGFyLCBpMThuKSB9KX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aENvbmRpdGlvbihBcnJheUZpZWxkVHlwZSk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVRyYW5zbGF0aW9uIiwid2l0aENvbmRpdGlvbiIsIkJ1dHRvbiIsInVzZUZvcm0iLCJ1c2VGb3JtU3VibWl0dGVkIiwidXNlRmllbGQiLCJ1c2VMb2NhbGUiLCJFcnJvciIsImFycmF5IiwiQmFubmVyIiwiRmllbGREZXNjcmlwdGlvbiIsInVzZURvY3VtZW50SW5mbyIsInNjcm9sbFRvSUQiLCJnZXRUcmFuc2xhdGlvbiIsInVzZUNvbmZpZyIsIk51bGxpZnlMb2NhbGVGaWVsZCIsIkRyYWdnYWJsZVNvcnRhYmxlIiwiRHJhZ2dhYmxlU29ydGFibGVJdGVtIiwiQXJyYXlSb3ciLCJFcnJvclBpbGwiLCJiYXNlQ2xhc3MiLCJBcnJheUZpZWxkVHlwZSIsInByb3BzIiwiY29tcG9uZW50cyIsIm5hbWUiLCJwYXRoIiwicGF0aEZyb21Qcm9wcyIsImZpZWxkcyIsImZpZWxkVHlwZXMiLCJ2YWxpZGF0ZSIsInJlcXVpcmVkIiwibWF4Um93cyIsIm1pblJvd3MiLCJwZXJtaXNzaW9ucyIsImluZGV4UGF0aCIsImxvY2FsaXplZCIsImFkbWluIiwicmVhZE9ubHkiLCJkZXNjcmlwdGlvbiIsImNvbmRpdGlvbiIsImNsYXNzTmFtZSIsImxhYmVsIiwibGFiZWxzIiwic2luZ3VsYXIiLCJDdXN0b21Sb3dMYWJlbCIsIlJvd0xhYmVsIiwidW5kZWZpbmVkIiwic2V0RG9jRmllbGRQcmVmZXJlbmNlcyIsImRpc3BhdGNoRmllbGRzIiwic2V0TW9kaWZpZWQiLCJhZGRGaWVsZFJvdyIsInJlbW92ZUZpZWxkUm93Iiwic3VibWl0dGVkIiwiY29kZSIsImxvY2FsZSIsInQiLCJpMThuIiwibG9jYWxpemF0aW9uIiwiZWRpdGluZ0RlZmF1bHRMb2NhbGUiLCJmYWxsYmFjayIsImRlZmF1bHRMb2NhbGUiLCJnZXRMYWJlbHMiLCJwIiwicGx1cmFsIiwibWVtb2l6ZWRWYWxpZGF0ZSIsInZhbHVlIiwib3B0aW9ucyIsImhhc1Jvd3MiLCJzaG93RXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJyb3dzIiwidmFsaWQiLCJhZGRSb3ciLCJyb3dJbmRleCIsInNldFRpbWVvdXQiLCJkdXBsaWNhdGVSb3ciLCJ0eXBlIiwicmVtb3ZlUm93IiwibW92ZVJvdyIsIm1vdmVGcm9tSW5kZXgiLCJtb3ZlVG9JbmRleCIsInRvZ2dsZUNvbGxhcHNlQWxsIiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2UiLCJyb3dJRCIsImhhc01heFJvd3MiLCJsZW5ndGgiLCJmaWVsZEVycm9yQ291bnQiLCJyZWR1Y2UiLCJ0b3RhbCIsInJvdyIsImNoaWxkRXJyb3JQYXRocyIsInNpemUiLCJmaWVsZEhhc0Vycm9ycyIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImRpdiIsImlkIiwicmVwbGFjZSIsIm1lc3NhZ2UiLCJoZWFkZXIiLCJoMyIsImNvdW50Iiwid2l0aE1lc3NhZ2UiLCJ1bCIsImxpIiwiYnV0dG9uIiwib25DbGljayIsImZpZWxkVmFsdWUiLCJpZHMiLCJtYXAiLCJvbkRyYWdFbmQiLCJpIiwia2V5IiwiZGlzYWJsZWQiLCJkcmFnZ2FibGVTb3J0YWJsZUl0ZW1Qcm9wcyIsInJvd0NvdW50IiwiRnJhZ21lbnQiLCJpY29uIiwiYnV0dG9uU3R5bGUiLCJpY29uU3R5bGUiLCJpY29uUG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsV0FBVyxRQUFRLFFBQVE7QUFDM0MsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxPQUFPQyxtQkFBbUIsc0JBQXNCO0FBQ2hELE9BQU9DLFlBQVksMkJBQTJCO0FBQzlDLFNBQVNDLE9BQU8sRUFBRUMsZ0JBQWdCLFFBQVEscUJBQXFCO0FBQy9ELE9BQU9DLGNBQWMsaUJBQWlCO0FBQ3RDLFNBQVNDLFNBQVMsUUFBUSw0QkFBNEI7QUFDdEQsT0FBT0MsV0FBVyxjQUFjO0FBQ2hDLFNBQVNDLEtBQUssUUFBUSxvQ0FBb0M7QUFDMUQsT0FBT0MsWUFBWSwyQkFBMkI7QUFDOUMsT0FBT0Msc0JBQXNCLHlCQUF5QjtBQUN0RCxTQUFTQyxlQUFlLFFBQVEsa0NBQWtDO0FBRWxFLFNBQVNDLFVBQVUsUUFBUSxtQ0FBbUM7QUFDOUQsU0FBU0MsY0FBYyxRQUFRLDBDQUEwQztBQUN6RSxTQUFTQyxTQUFTLFFBQVEsNEJBQTRCO0FBQ3RELFNBQVNDLGtCQUFrQixRQUFRLHFCQUFxQjtBQUN4RCxPQUFPQyx1QkFBdUIsc0NBQXNDO0FBQ3BFLE9BQU9DLDJCQUEyQiw0REFBNEQ7QUFDOUYsU0FBU0MsUUFBUSxRQUFRLGFBQWE7QUFDdEMsU0FBU0MsU0FBUyxRQUFRLDhCQUE4QjtBQUV4RCxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxpQkFBa0MsU0FBQ0M7UUF5QnpCQSxRQUFnQkEsZUFBQUEsU0FFUEM7SUExQnZCLElBQ0VDLE9Ba0JFRixNQWxCRkUsTUFDQUMsQUFBTUMsZ0JBaUJKSixNQWpCRkcsTUFDQUUsU0FnQkVMLE1BaEJGSyxRQUNBQyxhQWVFTixNQWZGTSw4QkFlRU4sTUFkRk8sVUFBQUEsd0NBQVdyQix5QkFDWHNCLFdBYUVSLE1BYkZRLFVBQ0FDLFVBWUVULE1BWkZTLFNBQ0FDLFVBV0VWLE1BWEZVLFNBQ0FDLGNBVUVYLE1BVkZXLGFBQ0FDLFlBU0VaLE1BVEZZLFdBQ0FDLFlBUUViLE1BUkZhLDBCQVFFYixNQVBGYyxPQUNFQyx3QkFBQUEsVUFDQUMsMkJBQUFBLGFBQ0FDLHlCQUFBQSxXQUNBQyx5QkFBQUEsV0FDQWpCLDBCQUFBQTtJQUlKLElBQU1FLE9BQU9DLGlCQUFpQkY7UUFHaEJGO0lBRGQsMERBQTBEO0lBQzFELElBQU1tQixRQUFRbkIsQ0FBQUEsZ0JBQUFBLFNBQUFBLG1CQUFBQSw2QkFBQUEsT0FBT21CLEtBQUssY0FBWm5CLDBCQUFBQSxnQkFBZ0JBLFVBQUFBLG1CQUFBQSwrQkFBQUEsZ0JBQUFBLFFBQU9vQixNQUFNLGNBQWJwQixvQ0FBQUEsY0FBZXFCLFFBQVE7SUFFckQsSUFBTUMsaUJBQWlCckIsRUFBQUEsY0FBQUEsd0JBQUFBLGtDQUFBQSxZQUFZc0IsUUFBUSxLQUFJQztJQUUvQyxJQUFNLEFBQUVDLHlCQUEyQnBDLGtCQUEzQm9DO0lBQ1IsSUFBcUU1QyxXQUFBQSxXQUE3RDZDLGlCQUE2RDdDLFNBQTdENkMsZ0JBQWdCQyxjQUE2QzlDLFNBQTdDOEMsYUFBYUMsY0FBZ0MvQyxTQUFoQytDLGFBQWFDLGlCQUFtQmhELFNBQW5CZ0Q7SUFDbEQsSUFBTUMsWUFBWWhEO0lBQ2xCLElBQXlCRSxhQUFBQSxhQUFqQitDLEFBQU1DLFNBQVdoRCxXQUFqQitDO0lBQ1IsSUFBb0JyRCxrQkFBQUEsZUFBZSxXQUEzQnVELElBQVl2RCxnQkFBWnVELEdBQUdDLE9BQVN4RCxnQkFBVHdEO0lBQ1gsSUFBTSxBQUFFQyxlQUFpQjNDLFlBQWpCMkM7SUFFUixJQUFNQyx1QkFBdUIsQUFBQztRQUM1QixJQUFJRCxnQkFBZ0JBLGFBQWFFLFFBQVEsRUFBRTtZQUN6QyxJQUFNQyxnQkFBZ0JILGFBQWFHLGFBQWEsSUFBSTtZQUNwRCxPQUFPTixXQUFXTTtRQUNwQjtRQUVBLE9BQU87SUFDVDtJQUVBLHdEQUF3RDtJQUN4RCxJQUFNQyxZQUFZLFNBQUNDO1lBQ2JBLElBQ0FBO1FBREosS0FBSUEsS0FBQUEsZUFBQUEseUJBQUFBLEdBQUdwQixNQUFNLEVBQUUsT0FBT29CLEVBQUVwQixNQUFNO1FBQzlCLEtBQUlvQixNQUFBQSxlQUFBQSwwQkFBQUEsSUFBR3JCLEtBQUssRUFBRSxPQUFPO1lBQUVFLFVBQVVtQixFQUFFckIsS0FBSztZQUFFc0IsUUFBUWpCO1FBQVU7UUFDNUQsT0FBTztZQUFFSCxVQUFVWSxFQUFFO1lBQVFRLFFBQVFSLEVBQUU7UUFBUTtJQUNqRDtJQUVBLElBQU1iLFNBQVNtQixVQUFVdkM7SUFFekIsSUFBTTBDLG1CQUFtQmpFLFlBQVksU0FBQ2tFLE9BQU9DO1FBQzNDLGtDQUFrQztRQUNsQyxJQUFJLENBQUNSLHdCQUF3Qk8sVUFBVSxNQUFNO1lBQzNDLE9BQU87UUFDVDtRQUNBLE9BQU9wQyxTQUFTb0MsT0FBTyx3Q0FBS0M7WUFBU2xDLFNBQUFBO1lBQVNELFNBQUFBO1lBQVNELFVBQUFBOztJQUN6RCxHQUFHO1FBQUNDO1FBQVNDO1FBQVNGO1FBQVVEO1FBQVU2QjtLQUFxQjtJQUUvRCxJQU1JckQsWUFBQUEsU0FBaUI7UUFDbkJvQixNQUFBQTtRQUNBSSxVQUFVbUM7UUFDVnpCLFdBQUFBO1FBQ0E0QixTQUFTO0lBQ1gsSUFWRUMsWUFLRS9ELFVBTEYrRCxXQUNBQyxlQUlFaEUsVUFKRmdFLGNBQ0FKLFFBR0U1RCxVQUhGNEQsd0JBR0U1RCxVQUZGaUUsTUFBQUEsbUNBQU8sRUFBRSxtQkFDVEMsUUFDRWxFLFVBREZrRTtJQVFGLElBQU1DLFNBQVN6RTttQkFBWSxvQkFBQSxTQUFPMEU7Ozs7d0JBQ2hDOzs0QkFBTXZCLFlBQVk7Z0NBQUV1QixVQUFBQTtnQ0FBVWhELE1BQUFBOzRCQUFLOzs7d0JBQW5DO3dCQUNBd0IsWUFBWTt3QkFFWnlCLFdBQVc7NEJBQ1Q5RCxXQUFXLEFBQUMsR0FBYzZELE9BQVpoRCxNQUFLLFNBQW9CLE9BQWJnRCxXQUFXO3dCQUN2QyxHQUFHOzs7Ozs7UUFDTDt3QkFQa0NBOzs7U0FPL0I7UUFBQ3ZCO1FBQWF6QjtRQUFNd0I7S0FBWTtJQUVuQyxJQUFNMEIsZUFBZTVFO21CQUFZLG9CQUFBLFNBQU8wRTs7Z0JBQ3RDekIsZUFBZTtvQkFBRTRCLE1BQU07b0JBQWlCSCxVQUFBQTtvQkFBVWhELE1BQUFBO2dCQUFLO2dCQUN2RHdCLFlBQVk7Z0JBRVp5QixXQUFXO29CQUNUOUQsV0FBVyxBQUFDLEdBQWM2RCxPQUFaaEQsTUFBSyxTQUFvQixPQUFiZ0QsV0FBVztnQkFDdkMsR0FBRzs7Ozs7UUFDTDt3QkFQd0NBOzs7U0FPckM7UUFBQ3pCO1FBQWdCdkI7UUFBTXdCO0tBQVk7SUFFdEMsSUFBTTRCLFlBQVk5RSxZQUFZLFNBQUMwRTtRQUM3QnRCLGVBQWU7WUFBRXNCLFVBQUFBO1lBQVVoRCxNQUFBQTtRQUFLO1FBQ2hDd0IsWUFBWTtJQUNkLEdBQUc7UUFBQ0U7UUFBZ0IxQjtRQUFNd0I7S0FBWTtJQUV0QyxJQUFNNkIsVUFBVS9FLFlBQVksU0FBQ2dGLGVBQXVCQztRQUNsRGhDLGVBQWU7WUFBRTRCLE1BQU07WUFBWUcsZUFBQUE7WUFBZUMsYUFBQUE7WUFBYXZELE1BQUFBO1FBQUs7UUFDcEV3QixZQUFZO0lBQ2QsR0FBRztRQUFDRDtRQUFnQnZCO1FBQU13QjtLQUFZO0lBRXRDLElBQU1nQyxvQkFBb0JsRjttQkFBWSxvQkFBQSxTQUFPbUY7O2dCQUMzQ2xDLGVBQWU7b0JBQUU0QixNQUFNO29CQUEwQm5ELE1BQUFBO29CQUFNeUQsV0FBQUE7b0JBQVduQyx3QkFBQUE7Z0JBQXVCOzs7OztRQUMzRjt3QkFGNkNtQzs7O1NBRTFDO1FBQUNsQztRQUFnQnZCO1FBQU1zQjtLQUF1QjtJQUVqRCxJQUFNb0MsY0FBY3BGO21CQUFZLG9CQUFBLFNBQU9xRixPQUFlRjs7Z0JBQ3BEbEMsZUFBZTtvQkFBRTRCLE1BQU07b0JBQXFCbkQsTUFBQUE7b0JBQU15RCxXQUFBQTtvQkFBV0UsT0FBQUE7b0JBQU9yQyx3QkFBQUE7Z0JBQXVCOzs7OztRQUM3Rjt3QkFGdUNxQyxPQUFlRjs7O1NBRW5EO1FBQUNsQztRQUFnQnZCO1FBQU1zQjtLQUF1QjtJQUVqRCxJQUFNc0MsYUFBYXRELFdBQVd1QyxLQUFLZ0IsTUFBTSxJQUFJdkQ7SUFDN0MsSUFBTXdELGtCQUFrQmpCLEtBQUtrQixNQUFNLENBQUMsU0FBQ0MsT0FBT0M7WUFBaUJBLHNCQUFBQTtlQUFURCxRQUFTQyxDQUFBQSxFQUFBQSxPQUFBQSxpQkFBQUEsNEJBQUFBLHVCQUFBQSxLQUFLQyxlQUFlLGNBQXBCRCwyQ0FBQUEscUJBQXNCRSxJQUFJLEtBQUksQ0FBQTtPQUFJLEtBQU1yQixDQUFBQSxRQUFRLElBQUksQ0FBQTtJQUNqSCxJQUFNc0IsaUJBQWlCekMsYUFBYW1DLGtCQUFrQjtJQUV0RCxJQUFNTyxVQUFVO1FBQ2Q7UUFDQTFFO1FBQ0FvQjtRQUNBcUQsaUJBQWlCLEFBQUMsR0FBWSxPQUFWekUsV0FBVSxpQkFBZSxBQUFDLEdBQVksT0FBVkEsV0FBVTtLQUMzRCxDQUFDMkUsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7SUFFdkIscUJBQ0Usb0JBQUNDO1FBQ0NDLElBQUksQUFBQyxTQUFtQyxPQUEzQjFFLEtBQUsyRSxPQUFPLENBQUMsUUFBUTtRQUNsQzVELFdBQVdzRDtxQkFFWCxvQkFBQ0k7UUFBSTFELFdBQVcsQUFBQyxHQUFZLE9BQVZwQixXQUFVO3FCQUMzQixvQkFBQ2I7UUFDQzZELFdBQVdBO1FBQ1hpQyxTQUFTaEM7dUJBR2Isb0JBQUNpQztRQUFPOUQsV0FBVyxBQUFDLEdBQVksT0FBVnBCLFdBQVU7cUJBQzlCLG9CQUFDOEU7UUFBSTFELFdBQVcsQUFBQyxHQUFZLE9BQVZwQixXQUFVO3FCQUMzQixvQkFBQzhFO1FBQUkxRCxXQUFXLEFBQUMsR0FBWSxPQUFWcEIsV0FBVTtxQkFDM0Isb0JBQUNtRixZQUNFMUYsZUFBZTRCLFNBQVNqQixNQUFNZ0MsUUFFaENxQyxrQkFBa0JOLGtCQUFrQixtQkFDbkMsb0JBQUNwRTtRQUNDcUYsT0FBT2pCO1FBQ1BrQixhQUFBQTt1QkFLTixvQkFBQ0M7UUFBR2xFLFdBQVcsQUFBQyxHQUFZLE9BQVZwQixXQUFVO3FCQUMxQixvQkFBQ3VGLDBCQUNDLG9CQUFDQztRQUNDaEMsTUFBSztRQUNMaUMsU0FBUzttQkFBTTVCLGtCQUFrQjs7UUFDakN6QyxXQUFXLEFBQUMsR0FBWSxPQUFWcEIsV0FBVTtPQUV2Qm1DLEVBQUUsZ0NBSVAsb0JBQUNvRCwwQkFDQyxvQkFBQ0M7UUFDQ2hDLE1BQUs7UUFDTGlDLFNBQVM7bUJBQU01QixrQkFBa0I7O1FBQ2pDekMsV0FBVyxBQUFDLEdBQVksT0FBVnBCLFdBQVU7T0FFdkJtQyxFQUFFLDhCQUtYLG9CQUFDN0M7UUFDQzhCLFdBQVcsQUFBQyxxQkFBK0MsT0FBM0JmLEtBQUsyRSxPQUFPLENBQUMsUUFBUTtRQUNyRG5DLE9BQU9BO1FBQ1AzQixhQUFhQTt1QkFJakIsb0JBQUN2QjtRQUNDb0IsV0FBV0E7UUFDWFYsTUFBTUE7UUFDTnFGLFlBQVk3QztzQkFHZCxvQkFBQ2pEO1FBQ0MrRixLQUFLekMsS0FBSzBDLEdBQUcsQ0FBQyxTQUFDdEI7bUJBQVFBLElBQUlTLEVBQUU7O1FBQzdCYyxXQUFXO2dCQUFHbEMsc0JBQUFBLGVBQWVDLG9CQUFBQTttQkFBa0JGLFFBQVFDLGVBQWVDOztRQUN0RXhDLFdBQVcsQUFBQyxHQUFZLE9BQVZwQixXQUFVO09BRXZCa0QsS0FBS2dCLE1BQU0sR0FBRyxLQUFLaEIsS0FBSzBDLEdBQUcsQ0FBQyxTQUFDdEIsS0FBS3dCOzZCQUNqQyxvQkFBQ2pHO1lBQ0NrRyxLQUFLekIsSUFBSVMsRUFBRTtZQUNYQSxJQUFJVCxJQUFJUyxFQUFFO1lBQ1ZpQixVQUFVL0U7V0FFVCxTQUFDZ0Y7aUNBQ0Esb0JBQUNuRyxrREFDS21HO2dCQUNKM0IsS0FBS0E7Z0JBQ0xsQixRQUFRQTtnQkFDUkcsY0FBY0E7Z0JBQ2RFLFdBQVdBO2dCQUNYTSxhQUFhQTtnQkFDYjFELE1BQU1BO2dCQUNORyxZQUFZQTtnQkFDWkQsUUFBUUE7Z0JBQ1JtRCxTQUFTQTtnQkFDVHpDLFVBQVVBO2dCQUNWaUYsVUFBVWhELEtBQUtnQixNQUFNO2dCQUNyQnJELGFBQWFBO2dCQUNiVyxnQkFBZ0JBO2dCQUNoQjZCLFVBQVV5QztnQkFDVmhGLFdBQVdBO2dCQUNYUSxRQUFRQTtnQkFDUjJDLFlBQVlBOzs7UUFNbkIsQ0FBQ2QsdUJBQ0Esb0JBQUN6RSxNQUFNeUgsUUFBUSxRQUNabEYsWUFBYWlDLEtBQUtnQixNQUFNLEtBQUssbUJBQzVCLG9CQUFDN0UsY0FDRThDLEVBQUUseUJBQXlCO1FBQUVkLE9BQU81QixlQUFlNkIsT0FBT3FCLE1BQU0sRUFBRVA7SUFBTSxLQUk1RSxBQUFDYyxDQUFBQSxLQUFLZ0IsTUFBTSxHQUFHdEQsV0FBWUYsWUFBWXdDLEtBQUtnQixNQUFNLEtBQUssQ0FBQyxtQkFDdkQsb0JBQUM3RTtRQUFPbUUsTUFBSztPQUNWckIsRUFBRSw4QkFBOEI7UUFDL0JpRCxPQUFPeEU7UUFDUFMsT0FBTzVCLGVBQWVtQixVQUFVVSxPQUFPcUIsTUFBTSxHQUFHckIsT0FBT0MsUUFBUSxFQUFFYSxTQUFTRCxFQUFFdkIsVUFBVSxJQUFJLGdCQUFnQjtJQUM1RyxPQU9ULEFBQUMsQ0FBQ0ssWUFBWSxDQUFDZ0QsNEJBQ2Qsb0JBQUNhO1FBQUkxRCxXQUFXLEFBQUMsR0FBWSxPQUFWcEIsV0FBVTtxQkFDM0Isb0JBQUNsQjtRQUNDc0gsTUFBSztRQUNMQyxhQUFZO1FBQ1pDLFdBQVU7UUFDVkMsY0FBYTtRQUNiZCxTQUFTO21CQUFNckMsT0FBT1A7O09BRXJCVixFQUFFLFlBQVk7UUFBRWQsT0FBTzVCLGVBQWU2QixPQUFPQyxRQUFRLEVBQUVhO0lBQU07QUFNMUU7QUFFQSxlQUFldkQsY0FBY29CLGdCQUFnQiJ9