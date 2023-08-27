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
import React, { Fragment, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useLocale } from "../../../utilities/Locale";
import withCondition from "../../withCondition";
import { useDocumentInfo } from "../../../utilities/DocumentInfo";
import { useForm, useFormSubmitted } from "../../Form/context";
import Error from "../../Error";
import useField from "../../useField";
import { BlocksDrawer } from "./BlocksDrawer";
import { blocks as blocksValidator } from "../../../../../fields/validations";
import Banner from "../../../elements/Banner";
import FieldDescription from "../../FieldDescription";
import { scrollToID } from "../../../../utilities/scrollToID";
import { getTranslation } from "../../../../../utilities/getTranslation";
import { NullifyLocaleField } from "../../NullifyField";
import { useConfig } from "../../../utilities/Config";
import DraggableSortable from "../../../elements/DraggableSortable";
import DraggableSortableItem from "../../../elements/DraggableSortable/DraggableSortableItem";
import { useDrawerSlug } from "../../../elements/Drawer/useDrawerSlug";
import Button from "../../../elements/Button";
import { DrawerToggler } from "../../../elements/Drawer";
import { BlockRow } from "./BlockRow";
import { ErrorPill } from "../../../elements/ErrorPill";
import "./index.scss";
var baseClass = "blocks-field";
var BlocksField = function(props) {
    var _useTranslation = useTranslation("fields"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var label = props.label, name = props.name, pathFromProps = props.path, blocks = props.blocks, labelsFromProps = props.labels, fieldTypes = props.fieldTypes, maxRows = props.maxRows, minRows = props.minRows, required = props.required, _props_validate = props.validate, validate = _props_validate === void 0 ? blocksValidator : _props_validate, permissions = props.permissions, indexPath = props.indexPath, localized = props.localized, _props_admin = props.admin, readOnly = _props_admin.readOnly, description = _props_admin.description, condition = _props_admin.condition, className = _props_admin.className;
    var path = pathFromProps || name;
    var setDocFieldPreferences = useDocumentInfo().setDocFieldPreferences;
    var _useForm = useForm(), dispatchFields = _useForm.dispatchFields, setModified = _useForm.setModified, addFieldRow = _useForm.addFieldRow, removeFieldRow = _useForm.removeFieldRow;
    var _useLocale = useLocale(), locale = _useLocale.code;
    var localization = useConfig().localization;
    var drawerSlug = useDrawerSlug("blocks-drawer");
    var submitted = useFormSubmitted();
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
                    scrollToID("".concat(path, "-row-").concat(rowIndex + 1));
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
            path: path,
            rowIndex: rowIndex
        });
        setModified(true);
    }, [
        path,
        removeFieldRow,
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
    }, 0);
    var fieldHasErrors = submitted && fieldErrorCount + (valid ? 0 : 1) > 0;
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
        className: "".concat(baseClass, "__heading-with-error")
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
        }
    }, rows.length > 0 && rows.map(function(row, i) {
        var blockType = row.blockType;
        var blockToRender = blocks.find(function(block) {
            return block.slug === blockType;
        });
        if (blockToRender) {
            return /*#__PURE__*/ React.createElement(DraggableSortableItem, {
                key: row.id,
                id: row.id,
                disabled: readOnly
            }, function(draggableSortableItemProps) {
                return /*#__PURE__*/ React.createElement(BlockRow, _object_spread_props(_object_spread({}, draggableSortableItemProps), {
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
    }), !editingDefaultLocale && /*#__PURE__*/ React.createElement(React.Fragment, null, (rows.length < minRows || required && rows.length === 0) && /*#__PURE__*/ React.createElement(Banner, {
        type: "error"
    }, t("validation:requiresAtLeast", {
        count: minRows,
        label: getTranslation(minRows === 1 || typeof minRows === "undefined" ? labels.singular : labels.plural, i18n)
    })), rows.length === 0 && readOnly && /*#__PURE__*/ React.createElement(Banner, null, t("validation:fieldHasNo", {
        label: getTranslation(labels.plural, i18n)
    })))), !readOnly && !hasMaxRows && /*#__PURE__*/ React.createElement(Fragment, null, /*#__PURE__*/ React.createElement(DrawerToggler, {
        slug: drawerSlug,
        className: "".concat(baseClass, "__drawer-toggler")
    }, /*#__PURE__*/ React.createElement(Button, {
        el: "span",
        icon: "plus",
        buttonStyle: "icon-label",
        iconStyle: "with-border",
        iconPosition: "left"
    }, t("addLabel", {
        label: getTranslation(labels.singular, i18n)
    }))), /*#__PURE__*/ React.createElement(BlocksDrawer, {
        drawerSlug: drawerSlug,
        blocks: blocks,
        addRow: addRow,
        addRowIndex: value,
        labels: labels
    })));
};
export default withCondition(BlocksField);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0Jsb2Nrcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvTG9jYWxlJztcbmltcG9ydCB3aXRoQ29uZGl0aW9uIGZyb20gJy4uLy4uL3dpdGhDb25kaXRpb24nO1xuaW1wb3J0IHsgdXNlRG9jdW1lbnRJbmZvIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0RvY3VtZW50SW5mbyc7XG5pbXBvcnQgeyB1c2VGb3JtLCB1c2VGb3JtU3VibWl0dGVkIH0gZnJvbSAnLi4vLi4vRm9ybS9jb250ZXh0JztcbmltcG9ydCBFcnJvciBmcm9tICcuLi8uLi9FcnJvcic7XG5pbXBvcnQgdXNlRmllbGQgZnJvbSAnLi4vLi4vdXNlRmllbGQnO1xuaW1wb3J0IHsgQmxvY2tzRHJhd2VyIH0gZnJvbSAnLi9CbG9ja3NEcmF3ZXInO1xuaW1wb3J0IHsgYmxvY2tzIGFzIGJsb2Nrc1ZhbGlkYXRvciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy92YWxpZGF0aW9ucyc7XG5pbXBvcnQgQmFubmVyIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0Jhbm5lcic7XG5pbXBvcnQgRmllbGREZXNjcmlwdGlvbiBmcm9tICcuLi8uLi9GaWVsZERlc2NyaXB0aW9uJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBzY3JvbGxUb0lEIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL3Njcm9sbFRvSUQnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgTnVsbGlmeUxvY2FsZUZpZWxkIH0gZnJvbSAnLi4vLi4vTnVsbGlmeUZpZWxkJztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IERyYWdnYWJsZVNvcnRhYmxlIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0RyYWdnYWJsZVNvcnRhYmxlJztcbmltcG9ydCBEcmFnZ2FibGVTb3J0YWJsZUl0ZW0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvRHJhZ2dhYmxlU29ydGFibGUvRHJhZ2dhYmxlU29ydGFibGVJdGVtJztcbmltcG9ydCB7IHVzZURyYXdlclNsdWcgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9EcmF3ZXIvdXNlRHJhd2VyU2x1Zyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0J1dHRvbic7XG5pbXBvcnQgeyBEcmF3ZXJUb2dnbGVyIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvRHJhd2VyJztcbmltcG9ydCB7IEJsb2NrUm93IH0gZnJvbSAnLi9CbG9ja1Jvdyc7XG5pbXBvcnQgeyBFcnJvclBpbGwgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9FcnJvclBpbGwnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdibG9ja3MtZmllbGQnO1xuXG5jb25zdCBCbG9ja3NGaWVsZDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ2ZpZWxkcycpO1xuXG4gIGNvbnN0IHtcbiAgICBsYWJlbCxcbiAgICBuYW1lLFxuICAgIHBhdGg6IHBhdGhGcm9tUHJvcHMsXG4gICAgYmxvY2tzLFxuICAgIGxhYmVsczogbGFiZWxzRnJvbVByb3BzLFxuICAgIGZpZWxkVHlwZXMsXG4gICAgbWF4Um93cyxcbiAgICBtaW5Sb3dzLFxuICAgIHJlcXVpcmVkLFxuICAgIHZhbGlkYXRlID0gYmxvY2tzVmFsaWRhdG9yLFxuICAgIHBlcm1pc3Npb25zLFxuICAgIGluZGV4UGF0aCxcbiAgICBsb2NhbGl6ZWQsXG4gICAgYWRtaW46IHtcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBjb25kaXRpb24sXG4gICAgICBjbGFzc05hbWUsXG4gICAgfSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHBhdGggPSBwYXRoRnJvbVByb3BzIHx8IG5hbWU7XG5cbiAgY29uc3QgeyBzZXREb2NGaWVsZFByZWZlcmVuY2VzIH0gPSB1c2VEb2N1bWVudEluZm8oKTtcbiAgY29uc3QgeyBkaXNwYXRjaEZpZWxkcywgc2V0TW9kaWZpZWQsIGFkZEZpZWxkUm93LCByZW1vdmVGaWVsZFJvdyB9ID0gdXNlRm9ybSgpO1xuICBjb25zdCB7IGNvZGU6IGxvY2FsZSB9ID0gdXNlTG9jYWxlKCk7XG4gIGNvbnN0IHsgbG9jYWxpemF0aW9uIH0gPSB1c2VDb25maWcoKTtcbiAgY29uc3QgZHJhd2VyU2x1ZyA9IHVzZURyYXdlclNsdWcoJ2Jsb2Nrcy1kcmF3ZXInKTtcbiAgY29uc3Qgc3VibWl0dGVkID0gdXNlRm9ybVN1Ym1pdHRlZCgpO1xuXG4gIGNvbnN0IGxhYmVscyA9IHtcbiAgICBzaW5ndWxhcjogdCgnYmxvY2snKSxcbiAgICBwbHVyYWw6IHQoJ2Jsb2NrcycpLFxuICAgIC4uLmxhYmVsc0Zyb21Qcm9wcyxcbiAgfTtcblxuICBjb25zdCBlZGl0aW5nRGVmYXVsdExvY2FsZSA9ICgoKSA9PiB7XG4gICAgaWYgKGxvY2FsaXphdGlvbiAmJiBsb2NhbGl6YXRpb24uZmFsbGJhY2spIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRMb2NhbGUgPSBsb2NhbGl6YXRpb24uZGVmYXVsdExvY2FsZSB8fCAnZW4nO1xuICAgICAgcmV0dXJuIGxvY2FsZSA9PT0gZGVmYXVsdExvY2FsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSkoKTtcblxuICBjb25zdCBtZW1vaXplZFZhbGlkYXRlID0gdXNlQ2FsbGJhY2soKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgLy8gYWx0ZXJuYXRpdmUgbG9jYWxlcyBjYW4gYmUgbnVsbFxuICAgIGlmICghZWRpdGluZ0RlZmF1bHRMb2NhbGUgJiYgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWRhdGUodmFsdWUsIHsgLi4ub3B0aW9ucywgbWluUm93cywgbWF4Um93cywgcmVxdWlyZWQgfSk7XG4gIH0sIFttYXhSb3dzLCBtaW5Sb3dzLCByZXF1aXJlZCwgdmFsaWRhdGUsIGVkaXRpbmdEZWZhdWx0TG9jYWxlXSk7XG5cbiAgY29uc3Qge1xuICAgIHNob3dFcnJvcixcbiAgICBlcnJvck1lc3NhZ2UsXG4gICAgdmFsdWUsXG4gICAgcm93cyA9IFtdLFxuICAgIHZhbGlkLFxuICB9ID0gdXNlRmllbGQ8bnVtYmVyPih7XG4gICAgcGF0aCxcbiAgICB2YWxpZGF0ZTogbWVtb2l6ZWRWYWxpZGF0ZSxcbiAgICBjb25kaXRpb24sXG4gICAgaGFzUm93czogdHJ1ZSxcbiAgfSk7XG5cbiAgY29uc3QgYWRkUm93ID0gdXNlQ2FsbGJhY2soYXN5bmMgKHJvd0luZGV4OiBudW1iZXIsIGJsb2NrVHlwZTogc3RyaW5nKSA9PiB7XG4gICAgYWRkRmllbGRSb3coe1xuICAgICAgcGF0aCxcbiAgICAgIHJvd0luZGV4LFxuICAgICAgZGF0YToge1xuICAgICAgICBibG9ja1R5cGUsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHNldE1vZGlmaWVkKHRydWUpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzY3JvbGxUb0lEKGAke3BhdGh9LXJvdy0ke3Jvd0luZGV4ICsgMX1gKTtcbiAgICB9LCAwKTtcbiAgfSwgW2FkZEZpZWxkUm93LCBwYXRoLCBzZXRNb2RpZmllZF0pO1xuXG4gIGNvbnN0IGR1cGxpY2F0ZVJvdyA9IHVzZUNhbGxiYWNrKGFzeW5jIChyb3dJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgZGlzcGF0Y2hGaWVsZHMoeyB0eXBlOiAnRFVQTElDQVRFX1JPVycsIHJvd0luZGV4LCBwYXRoIH0pO1xuICAgIHNldE1vZGlmaWVkKHRydWUpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzY3JvbGxUb0lEKGAke3BhdGh9LXJvdy0ke3Jvd0luZGV4ICsgMX1gKTtcbiAgICB9LCAwKTtcbiAgfSwgW2Rpc3BhdGNoRmllbGRzLCBwYXRoLCBzZXRNb2RpZmllZF0pO1xuXG4gIGNvbnN0IHJlbW92ZVJvdyA9IHVzZUNhbGxiYWNrKChyb3dJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgcmVtb3ZlRmllbGRSb3coeyBwYXRoLCByb3dJbmRleCB9KTtcbiAgICBzZXRNb2RpZmllZCh0cnVlKTtcbiAgfSwgW3BhdGgsIHJlbW92ZUZpZWxkUm93LCBzZXRNb2RpZmllZF0pO1xuXG4gIGNvbnN0IG1vdmVSb3cgPSB1c2VDYWxsYmFjaygobW92ZUZyb21JbmRleDogbnVtYmVyLCBtb3ZlVG9JbmRleDogbnVtYmVyKSA9PiB7XG4gICAgZGlzcGF0Y2hGaWVsZHMoeyB0eXBlOiAnTU9WRV9ST1cnLCBtb3ZlRnJvbUluZGV4LCBtb3ZlVG9JbmRleCwgcGF0aCB9KTtcbiAgICBzZXRNb2RpZmllZCh0cnVlKTtcbiAgfSwgW2Rpc3BhdGNoRmllbGRzLCBwYXRoLCBzZXRNb2RpZmllZF0pO1xuXG4gIGNvbnN0IHRvZ2dsZUNvbGxhcHNlQWxsID0gdXNlQ2FsbGJhY2soYXN5bmMgKGNvbGxhcHNlZDogYm9vbGVhbikgPT4ge1xuICAgIGRpc3BhdGNoRmllbGRzKHsgdHlwZTogJ1NFVF9BTExfUk9XU19DT0xMQVBTRUQnLCBwYXRoLCBjb2xsYXBzZWQsIHNldERvY0ZpZWxkUHJlZmVyZW5jZXMgfSk7XG4gIH0sIFtkaXNwYXRjaEZpZWxkcywgcGF0aCwgc2V0RG9jRmllbGRQcmVmZXJlbmNlc10pO1xuXG4gIGNvbnN0IHNldENvbGxhcHNlID0gdXNlQ2FsbGJhY2soYXN5bmMgKHJvd0lEOiBzdHJpbmcsIGNvbGxhcHNlZDogYm9vbGVhbikgPT4ge1xuICAgIGRpc3BhdGNoRmllbGRzKHsgdHlwZTogJ1NFVF9ST1dfQ09MTEFQU0VEJywgcGF0aCwgY29sbGFwc2VkLCByb3dJRCwgc2V0RG9jRmllbGRQcmVmZXJlbmNlcyB9KTtcbiAgfSwgW2Rpc3BhdGNoRmllbGRzLCBwYXRoLCBzZXREb2NGaWVsZFByZWZlcmVuY2VzXSk7XG5cbiAgY29uc3QgaGFzTWF4Um93cyA9IG1heFJvd3MgJiYgcm93cy5sZW5ndGggPj0gbWF4Um93cztcblxuICBjb25zdCBmaWVsZEVycm9yQ291bnQgPSByb3dzLnJlZHVjZSgodG90YWwsIHJvdykgPT4gdG90YWwgKyAocm93Py5jaGlsZEVycm9yUGF0aHM/LnNpemUgfHwgMCksIDApO1xuICBjb25zdCBmaWVsZEhhc0Vycm9ycyA9IHN1Ym1pdHRlZCAmJiBmaWVsZEVycm9yQ291bnQgKyAodmFsaWQgPyAwIDogMSkgPiAwO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgJ2ZpZWxkLXR5cGUnLFxuICAgIGJhc2VDbGFzcyxcbiAgICBjbGFzc05hbWUsXG4gICAgZmllbGRIYXNFcnJvcnMgPyBgJHtiYXNlQ2xhc3N9LS1oYXMtZXJyb3JgIDogYCR7YmFzZUNsYXNzfS0taGFzLW5vLWVycm9yYCxcbiAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgaWQ9e2BmaWVsZC0ke3BhdGgucmVwbGFjZSgvXFwuL2dpLCAnX18nKX1gfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19lcnJvci13cmFwYH0+XG4gICAgICAgIDxFcnJvclxuICAgICAgICAgIHNob3dFcnJvcj17c2hvd0Vycm9yfVxuICAgICAgICAgIG1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRlcmB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyLXdyYXBgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGluZy13aXRoLWVycm9yYH0+XG4gICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgIHtnZXRUcmFuc2xhdGlvbihsYWJlbCB8fCBuYW1lLCBpMThuKX1cbiAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgIHtmaWVsZEhhc0Vycm9ycyAmJiBmaWVsZEVycm9yQ291bnQgPiAwICYmIChcbiAgICAgICAgICAgICAgPEVycm9yUGlsbFxuICAgICAgICAgICAgICAgIGNvdW50PXtmaWVsZEVycm9yQ291bnR9XG4gICAgICAgICAgICAgICAgd2l0aE1lc3NhZ2VcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyLWFjdGlvbnNgfT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUNvbGxhcHNlQWxsKHRydWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyLWFjdGlvbmB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dCgnY29sbGFwc2VBbGwnKX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlQ29sbGFwc2VBbGwoZmFsc2UpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyLWFjdGlvbmB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dCgnc2hvd0FsbCcpfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGaWVsZERlc2NyaXB0aW9uXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgLz5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8TnVsbGlmeUxvY2FsZUZpZWxkXG4gICAgICAgIGxvY2FsaXplZD17bG9jYWxpemVkfVxuICAgICAgICBwYXRoPXtwYXRofVxuICAgICAgICBmaWVsZFZhbHVlPXt2YWx1ZX1cbiAgICAgIC8+XG5cbiAgICAgIDxEcmFnZ2FibGVTb3J0YWJsZVxuICAgICAgICBpZHM9e3Jvd3MubWFwKChyb3cpID0+IHJvdy5pZCl9XG4gICAgICAgIG9uRHJhZ0VuZD17KHsgbW92ZUZyb21JbmRleCwgbW92ZVRvSW5kZXggfSkgPT4gbW92ZVJvdyhtb3ZlRnJvbUluZGV4LCBtb3ZlVG9JbmRleCl9XG4gICAgICA+XG4gICAgICAgIHtyb3dzLmxlbmd0aCA+IDAgJiYgcm93cy5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgYmxvY2tUeXBlIH0gPSByb3c7XG4gICAgICAgICAgY29uc3QgYmxvY2tUb1JlbmRlciA9IGJsb2Nrcy5maW5kKChibG9jaykgPT4gYmxvY2suc2x1ZyA9PT0gYmxvY2tUeXBlKTtcblxuICAgICAgICAgIGlmIChibG9ja1RvUmVuZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8RHJhZ2dhYmxlU29ydGFibGVJdGVtXG4gICAgICAgICAgICAgICAga2V5PXtyb3cuaWR9XG4gICAgICAgICAgICAgICAgaWQ9e3Jvdy5pZH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7KGRyYWdnYWJsZVNvcnRhYmxlSXRlbVByb3BzKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8QmxvY2tSb3dcbiAgICAgICAgICAgICAgICAgICAgey4uLmRyYWdnYWJsZVNvcnRhYmxlSXRlbVByb3BzfVxuICAgICAgICAgICAgICAgICAgICByb3c9e3Jvd31cbiAgICAgICAgICAgICAgICAgICAgcm93SW5kZXg9e2l9XG4gICAgICAgICAgICAgICAgICAgIGluZGV4UGF0aD17aW5kZXhQYXRofVxuICAgICAgICAgICAgICAgICAgICBhZGRSb3c9e2FkZFJvd31cbiAgICAgICAgICAgICAgICAgICAgZHVwbGljYXRlUm93PXtkdXBsaWNhdGVSb3d9XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVJvdz17cmVtb3ZlUm93fVxuICAgICAgICAgICAgICAgICAgICBtb3ZlUm93PXttb3ZlUm93fVxuICAgICAgICAgICAgICAgICAgICBzZXRDb2xsYXBzZT17c2V0Q29sbGFwc2V9XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrVG9SZW5kZXI9e2Jsb2NrVG9SZW5kZXJ9XG4gICAgICAgICAgICAgICAgICAgIGJsb2Nrcz17YmxvY2tzfVxuICAgICAgICAgICAgICAgICAgICBmaWVsZFR5cGVzPXtmaWVsZFR5cGVzfVxuICAgICAgICAgICAgICAgICAgICBwZXJtaXNzaW9ucz17cGVybWlzc2lvbnN9XG4gICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICAgICAgICAgICAgcm93Q291bnQ9e3Jvd3MubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM9e2xhYmVsc31cbiAgICAgICAgICAgICAgICAgICAgcGF0aD17cGF0aH1cbiAgICAgICAgICAgICAgICAgICAgaGFzTWF4Um93cz17aGFzTWF4Um93c31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9EcmFnZ2FibGVTb3J0YWJsZUl0ZW0+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9KX1cbiAgICAgICAgeyFlZGl0aW5nRGVmYXVsdExvY2FsZSAmJiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgeyhyb3dzLmxlbmd0aCA8IG1pblJvd3MgfHwgKHJlcXVpcmVkICYmIHJvd3MubGVuZ3RoID09PSAwKSkgJiYgKFxuICAgICAgICAgICAgICA8QmFubmVyIHR5cGU9XCJlcnJvclwiPlxuICAgICAgICAgICAgICAgIHt0KCd2YWxpZGF0aW9uOnJlcXVpcmVzQXRMZWFzdCcsIHtcbiAgICAgICAgICAgICAgICAgIGNvdW50OiBtaW5Sb3dzLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IGdldFRyYW5zbGF0aW9uKG1pblJvd3MgPT09IDEgfHwgdHlwZW9mIG1pblJvd3MgPT09ICd1bmRlZmluZWQnID8gbGFiZWxzLnNpbmd1bGFyIDogbGFiZWxzLnBsdXJhbCwgaTE4biksXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvQmFubmVyPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHsocm93cy5sZW5ndGggPT09IDAgJiYgcmVhZE9ubHkpICYmIChcbiAgICAgICAgICAgICAgPEJhbm5lcj5cbiAgICAgICAgICAgICAgICB7dCgndmFsaWRhdGlvbjpmaWVsZEhhc05vJywgeyBsYWJlbDogZ2V0VHJhbnNsYXRpb24obGFiZWxzLnBsdXJhbCwgaTE4bikgfSl9XG4gICAgICAgICAgICAgIDwvQmFubmVyPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgPC9EcmFnZ2FibGVTb3J0YWJsZT5cbiAgICAgIHsoIXJlYWRPbmx5ICYmICFoYXNNYXhSb3dzKSAmJiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8RHJhd2VyVG9nZ2xlclxuICAgICAgICAgICAgc2x1Zz17ZHJhd2VyU2x1Z31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fZHJhd2VyLXRvZ2dsZXJgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgZWw9XCJzcGFuXCJcbiAgICAgICAgICAgICAgaWNvbj1cInBsdXNcIlxuICAgICAgICAgICAgICBidXR0b25TdHlsZT1cImljb24tbGFiZWxcIlxuICAgICAgICAgICAgICBpY29uU3R5bGU9XCJ3aXRoLWJvcmRlclwiXG4gICAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dCgnYWRkTGFiZWwnLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihsYWJlbHMuc2luZ3VsYXIsIGkxOG4pIH0pfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9EcmF3ZXJUb2dnbGVyPlxuICAgICAgICAgIDxCbG9ja3NEcmF3ZXJcbiAgICAgICAgICAgIGRyYXdlclNsdWc9e2RyYXdlclNsdWd9XG4gICAgICAgICAgICBibG9ja3M9e2Jsb2Nrc31cbiAgICAgICAgICAgIGFkZFJvdz17YWRkUm93fVxuICAgICAgICAgICAgYWRkUm93SW5kZXg9e3ZhbHVlfVxuICAgICAgICAgICAgbGFiZWxzPXtsYWJlbHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29uZGl0aW9uKEJsb2Nrc0ZpZWxkKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZyYWdtZW50IiwidXNlQ2FsbGJhY2siLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUxvY2FsZSIsIndpdGhDb25kaXRpb24iLCJ1c2VEb2N1bWVudEluZm8iLCJ1c2VGb3JtIiwidXNlRm9ybVN1Ym1pdHRlZCIsIkVycm9yIiwidXNlRmllbGQiLCJCbG9ja3NEcmF3ZXIiLCJibG9ja3MiLCJibG9ja3NWYWxpZGF0b3IiLCJCYW5uZXIiLCJGaWVsZERlc2NyaXB0aW9uIiwic2Nyb2xsVG9JRCIsImdldFRyYW5zbGF0aW9uIiwiTnVsbGlmeUxvY2FsZUZpZWxkIiwidXNlQ29uZmlnIiwiRHJhZ2dhYmxlU29ydGFibGUiLCJEcmFnZ2FibGVTb3J0YWJsZUl0ZW0iLCJ1c2VEcmF3ZXJTbHVnIiwiQnV0dG9uIiwiRHJhd2VyVG9nZ2xlciIsIkJsb2NrUm93IiwiRXJyb3JQaWxsIiwiYmFzZUNsYXNzIiwiQmxvY2tzRmllbGQiLCJwcm9wcyIsInQiLCJpMThuIiwibGFiZWwiLCJuYW1lIiwicGF0aCIsInBhdGhGcm9tUHJvcHMiLCJsYWJlbHMiLCJsYWJlbHNGcm9tUHJvcHMiLCJmaWVsZFR5cGVzIiwibWF4Um93cyIsIm1pblJvd3MiLCJyZXF1aXJlZCIsInZhbGlkYXRlIiwicGVybWlzc2lvbnMiLCJpbmRleFBhdGgiLCJsb2NhbGl6ZWQiLCJhZG1pbiIsInJlYWRPbmx5IiwiZGVzY3JpcHRpb24iLCJjb25kaXRpb24iLCJjbGFzc05hbWUiLCJzZXREb2NGaWVsZFByZWZlcmVuY2VzIiwiZGlzcGF0Y2hGaWVsZHMiLCJzZXRNb2RpZmllZCIsImFkZEZpZWxkUm93IiwicmVtb3ZlRmllbGRSb3ciLCJjb2RlIiwibG9jYWxlIiwibG9jYWxpemF0aW9uIiwiZHJhd2VyU2x1ZyIsInN1Ym1pdHRlZCIsInNpbmd1bGFyIiwicGx1cmFsIiwiZWRpdGluZ0RlZmF1bHRMb2NhbGUiLCJmYWxsYmFjayIsImRlZmF1bHRMb2NhbGUiLCJtZW1vaXplZFZhbGlkYXRlIiwidmFsdWUiLCJvcHRpb25zIiwiaGFzUm93cyIsInNob3dFcnJvciIsImVycm9yTWVzc2FnZSIsInJvd3MiLCJ2YWxpZCIsImFkZFJvdyIsInJvd0luZGV4IiwiYmxvY2tUeXBlIiwiZGF0YSIsInNldFRpbWVvdXQiLCJkdXBsaWNhdGVSb3ciLCJ0eXBlIiwicmVtb3ZlUm93IiwibW92ZVJvdyIsIm1vdmVGcm9tSW5kZXgiLCJtb3ZlVG9JbmRleCIsInRvZ2dsZUNvbGxhcHNlQWxsIiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2UiLCJyb3dJRCIsImhhc01heFJvd3MiLCJsZW5ndGgiLCJmaWVsZEVycm9yQ291bnQiLCJyZWR1Y2UiLCJ0b3RhbCIsInJvdyIsImNoaWxkRXJyb3JQYXRocyIsInNpemUiLCJmaWVsZEhhc0Vycm9ycyIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImRpdiIsImlkIiwicmVwbGFjZSIsIm1lc3NhZ2UiLCJoZWFkZXIiLCJoMyIsImNvdW50Iiwid2l0aE1lc3NhZ2UiLCJ1bCIsImxpIiwiYnV0dG9uIiwib25DbGljayIsImZpZWxkVmFsdWUiLCJpZHMiLCJtYXAiLCJvbkRyYWdFbmQiLCJpIiwiYmxvY2tUb1JlbmRlciIsImZpbmQiLCJibG9jayIsInNsdWciLCJrZXkiLCJkaXNhYmxlZCIsImRyYWdnYWJsZVNvcnRhYmxlSXRlbVByb3BzIiwicm93Q291bnQiLCJlbCIsImljb24iLCJidXR0b25TdHlsZSIsImljb25TdHlsZSIsImljb25Qb3NpdGlvbiIsImFkZFJvd0luZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQVNDLFFBQVEsRUFB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