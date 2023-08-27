function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
import { useModal } from "@faceless-ui/modal";
import { Transforms } from "slate";
import { ReactEditor, useSlateStatic } from "slate-react";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import fieldTypes from "../../../../..";
import { Drawer } from "../../../../../../../elements/Drawer";
import { useAuth } from "../../../../../../../utilities/Auth";
import { useLocale } from "../../../../../../../utilities/Locale";
import Form from "../../../../../../Form";
import RenderFields from "../../../../../../RenderFields";
import FormSubmit from "../../../../../../Submit";
import buildStateFromSchema from "../../../../../../Form/buildStateFromSchema";
import { getTranslation } from "../../../../../../../../../utilities/getTranslation";
import deepCopyObject from "../../../../../../../../../utilities/deepCopyObject";
import { useDocumentInfo } from "../../../../../../../utilities/DocumentInfo";
export var UploadDrawer = function(props) {
    var _fieldProps_admin_upload_collections_relatedCollection_slug, _fieldProps_admin_upload_collections, _fieldProps_admin_upload, _fieldProps_admin, _fieldProps;
    var editor = useSlateStatic();
    var fieldProps = props.fieldProps, relatedCollection = props.relatedCollection, drawerSlug = props.drawerSlug, element = props.element;
    var _useTranslation = useTranslation(), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useLocale = useLocale(), locale = _useLocale.code;
    var user = useAuth().user;
    var closeModal = useModal().closeModal;
    var getDocPreferences = useDocumentInfo().getDocPreferences;
    var _useState = _sliced_to_array(useState({}), 2), initialState = _useState[0], setInitialState = _useState[1];
    var fieldSchema = (_fieldProps = fieldProps) === null || _fieldProps === void 0 ? void 0 : (_fieldProps_admin = _fieldProps.admin) === null || _fieldProps_admin === void 0 ? void 0 : (_fieldProps_admin_upload = _fieldProps_admin.upload) === null || _fieldProps_admin_upload === void 0 ? void 0 : (_fieldProps_admin_upload_collections = _fieldProps_admin_upload.collections) === null || _fieldProps_admin_upload_collections === void 0 ? void 0 : (_fieldProps_admin_upload_collections_relatedCollection_slug = _fieldProps_admin_upload_collections[relatedCollection.slug]) === null || _fieldProps_admin_upload_collections_relatedCollection_slug === void 0 ? void 0 : _fieldProps_admin_upload_collections_relatedCollection_slug.fields;
    var handleUpdateEditData = useCallback(function(_, data) {
        var newNode = {
            fields: data
        };
        var elementPath = ReactEditor.findPath(editor, element);
        Transforms.setNodes(editor, newNode, {
            at: elementPath
        });
        closeModal(drawerSlug);
    }, [
        closeModal,
        editor,
        element,
        drawerSlug
    ]);
    useEffect(function() {
        var awaitInitialState = function() {
            var _ref = _async_to_generator(function() {
                var _element, preferences, state;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                getDocPreferences()
                            ];
                        case 1:
                            preferences = _state.sent();
                            return [
                                4,
                                buildStateFromSchema({
                                    fieldSchema: fieldSchema,
                                    preferences: preferences,
                                    data: deepCopyObject(((_element = element) === null || _element === void 0 ? void 0 : _element.fields) || {}),
                                    user: user,
                                    operation: "update",
                                    locale: locale,
                                    t: t
                                })
                            ];
                        case 2:
                            state = _state.sent();
                            setInitialState(state);
                            return [
                                2
                            ];
                    }
                });
            });
            return function awaitInitialState() {
                return _ref.apply(this, arguments);
            };
        }();
        awaitInitialState();
    }, [
        fieldSchema,
        element.fields,
        user,
        locale,
        t,
        getDocPreferences
    ]);
    return /*#__PURE__*/ React.createElement(Drawer, {
        slug: drawerSlug,
        title: t("general:editLabel", {
            label: getTranslation(relatedCollection.labels.singular, i18n)
        })
    }, /*#__PURE__*/ React.createElement(Form, {
        onSubmit: handleUpdateEditData,
        initialState: initialState
    }, /*#__PURE__*/ React.createElement(RenderFields, {
        readOnly: false,
        fieldTypes: fieldTypes,
        fieldSchema: fieldSchema
    }), /*#__PURE__*/ React.createElement(FormSubmit, null, t("fields:saveChanges"))));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL3VwbG9hZC9FbGVtZW50L1VwbG9hZERyYXdlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdAZmFjZWxlc3MtdWkvbW9kYWwnO1xuaW1wb3J0IHsgVHJhbnNmb3JtcyB9IGZyb20gJ3NsYXRlJztcbmltcG9ydCB7IFJlYWN0RWRpdG9yLCB1c2VTbGF0ZVN0YXRpYyB9IGZyb20gJ3NsYXRlLXJlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBFbGVtZW50UHJvcHMgfSBmcm9tICcuLic7XG5pbXBvcnQgZmllbGRUeXBlcyBmcm9tICcuLi8uLi8uLi8uLi8uLic7XG5pbXBvcnQgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IERyYXdlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2VsZW1lbnRzL0RyYXdlcic7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL0xvY2FsZSc7XG5pbXBvcnQgRm9ybSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9Gb3JtJztcbmltcG9ydCBSZW5kZXJGaWVsZHMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vUmVuZGVyRmllbGRzJztcbmltcG9ydCBGb3JtU3VibWl0IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL1N1Ym1pdCc7XG5pbXBvcnQgYnVpbGRTdGF0ZUZyb21TY2hlbWEgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vRm9ybS9idWlsZFN0YXRlRnJvbVNjaGVtYSc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5pbXBvcnQgZGVlcENvcHlPYmplY3QgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2RlZXBDb3B5T2JqZWN0JztcbmltcG9ydCB7IHVzZURvY3VtZW50SW5mbyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9Eb2N1bWVudEluZm8nO1xuXG5leHBvcnQgY29uc3QgVXBsb2FkRHJhd2VyOiBSZWFjdC5GQzxFbGVtZW50UHJvcHMgJiB7XG4gIGRyYXdlclNsdWc6IHN0cmluZ1xuICByZWxhdGVkQ29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1xufT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgZWRpdG9yID0gdXNlU2xhdGVTdGF0aWMoKTtcblxuICBjb25zdCB7XG4gICAgZmllbGRQcm9wcyxcbiAgICByZWxhdGVkQ29sbGVjdGlvbixcbiAgICBkcmF3ZXJTbHVnLFxuICAgIGVsZW1lbnQsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IHsgY29kZTogbG9jYWxlIH0gPSB1c2VMb2NhbGUoKTtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IHsgY2xvc2VNb2RhbCB9ID0gdXNlTW9kYWwoKTtcbiAgY29uc3QgeyBnZXREb2NQcmVmZXJlbmNlcyB9ID0gdXNlRG9jdW1lbnRJbmZvKCk7XG4gIGNvbnN0IFtpbml0aWFsU3RhdGUsIHNldEluaXRpYWxTdGF0ZV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IGZpZWxkU2NoZW1hID0gZmllbGRQcm9wcz8uYWRtaW4/LnVwbG9hZD8uY29sbGVjdGlvbnM/LltyZWxhdGVkQ29sbGVjdGlvbi5zbHVnXT8uZmllbGRzO1xuXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZUVkaXREYXRhID0gdXNlQ2FsbGJhY2soKF8sIGRhdGEpID0+IHtcbiAgICBjb25zdCBuZXdOb2RlID0ge1xuICAgICAgZmllbGRzOiBkYXRhLFxuICAgIH07XG5cbiAgICBjb25zdCBlbGVtZW50UGF0aCA9IFJlYWN0RWRpdG9yLmZpbmRQYXRoKGVkaXRvciwgZWxlbWVudCk7XG5cbiAgICBUcmFuc2Zvcm1zLnNldE5vZGVzKFxuICAgICAgZWRpdG9yLFxuICAgICAgbmV3Tm9kZSxcbiAgICAgIHsgYXQ6IGVsZW1lbnRQYXRoIH0sXG4gICAgKTtcbiAgICBjbG9zZU1vZGFsKGRyYXdlclNsdWcpO1xuICB9LCBbY2xvc2VNb2RhbCwgZWRpdG9yLCBlbGVtZW50LCBkcmF3ZXJTbHVnXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBhd2FpdEluaXRpYWxTdGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHByZWZlcmVuY2VzID0gYXdhaXQgZ2V0RG9jUHJlZmVyZW5jZXMoKTtcbiAgICAgIGNvbnN0IHN0YXRlID0gYXdhaXQgYnVpbGRTdGF0ZUZyb21TY2hlbWEoeyBmaWVsZFNjaGVtYSwgcHJlZmVyZW5jZXMsIGRhdGE6IGRlZXBDb3B5T2JqZWN0KGVsZW1lbnQ/LmZpZWxkcyB8fCB7fSksIHVzZXIsIG9wZXJhdGlvbjogJ3VwZGF0ZScsIGxvY2FsZSwgdCB9KTtcbiAgICAgIHNldEluaXRpYWxTdGF0ZShzdGF0ZSk7XG4gICAgfTtcblxuICAgIGF3YWl0SW5pdGlhbFN0YXRlKCk7XG4gIH0sIFtmaWVsZFNjaGVtYSwgZWxlbWVudC5maWVsZHMsIHVzZXIsIGxvY2FsZSwgdCwgZ2V0RG9jUHJlZmVyZW5jZXNdKTtcblxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJcbiAgICAgIHNsdWc9e2RyYXdlclNsdWd9XG4gICAgICB0aXRsZT17dCgnZ2VuZXJhbDplZGl0TGFiZWwnLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihyZWxhdGVkQ29sbGVjdGlvbi5sYWJlbHMuc2luZ3VsYXIsIGkxOG4pIH0pfVxuICAgID5cbiAgICAgIDxGb3JtXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVVcGRhdGVFZGl0RGF0YX1cbiAgICAgICAgaW5pdGlhbFN0YXRlPXtpbml0aWFsU3RhdGV9XG4gICAgICA+XG4gICAgICAgIDxSZW5kZXJGaWVsZHNcbiAgICAgICAgICByZWFkT25seT17ZmFsc2V9XG4gICAgICAgICAgZmllbGRUeXBlcz17ZmllbGRUeXBlc31cbiAgICAgICAgICBmaWVsZFNjaGVtYT17ZmllbGRTY2hlbWF9XG4gICAgICAgIC8+XG4gICAgICAgIDxGb3JtU3VibWl0PlxuICAgICAgICAgIHt0KCdmaWVsZHM6c2F2ZUNoYW5nZXMnKX1cbiAgICAgICAgPC9Gb3JtU3VibWl0PlxuICAgICAgPC9Gb3JtPlxuICAgIDwvRHJhd2VyPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VNb2RhbCIsIlRyYW5zZm9ybXMiLCJSZWFjdEVkaXRvciIsInVzZVNsYXRlU3RhdGljIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlVHJhbnNsYXRpb24iLCJmaWVsZFR5cGVzIiwiRHJhd2VyIiwidXNlQXV0aCIsInVzZUxvY2FsZSIsIkZvcm0iLCJSZW5kZXJGaWVsZHMiLCJGb3JtU3VibWl0IiwiYnVpbGRTdGF0ZUZyb21TY2hlbWEiLCJnZXRUcmFuc2xhdGlvbiIsImRlZXBDb3B5T2JqZWN0IiwidXNlRG9jdW1lbnRJbmZvIiwiVXBsb2FkRHJhd2VyIiwicHJvcHMiLCJmaWVsZFByb3BzIiwiZWRpdG9yIiwicmVsYXRlZENvbGxlY3Rpb24iLCJkcmF3ZXJTbHVnIiwiZWxlbWVudCIsInQiLCJpMThuIiwiY29kZSIsImxvY2FsZSIsInVzZXIiLCJjbG9zZU1vZGFsIiwiZ2V0RG9jUHJlZmVyZW5jZXMiLCJpbml0aWFsU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJmaWVsZFNjaGVtYSIsImFkbWluIiwidXBsb2FkIiwiY29sbGVjdGlvbnMiLCJzbHVnIiwiZmllbGRzIiwiaGFuZGxlVXBkYXRlRWRpdERhdGEiLCJfIiwiZGF0YSIsIm5ld05vZGUiLCJlbGVtZW50UGF0aCIsImZpbmRQYXRoIiwic2V0Tm9kZXMiLCJhdCIsImF3YWl0SW5pdGlhbFN0YXRlIiwicHJlZmVyZW5jZXMiLCJzdGF0ZSIsIm9wZXJhdGlvbiIsInRpdGxlIiwibGFiZWwiLCJsYWJlbHMiLCJzaW5ndWxhciIsIm9uU3VibWl0IiwicmVhZE9ubHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsUUFBUSxRQUFRLHFCQUFxQjtBQUM5QyxTQUFTQyxVQUFVLFFBQVEsUUFBUTtBQUNuQyxTQUFTQyxXQUFXLEVBQUVDLGNBQWMsUUFBUSxjQUFjO0FBQzFELE9BQU9DLFNBQVNDLFdBQVcsRUFBRUMsU0FBUyxFQUFFQyxRQUFRLFFBQVEsUUFBUTtBQUNoRSxTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBRS9DLE9BQU9DLGdCQUFnQixpQkFBaUI7QUFFeEMsU0FBU0MsTUFBTSxRQUFRLHVDQUF1QztBQUM5RCxTQUFTQyxPQUFPLFFBQVEsc0NBQXNDO0FBQzlELFNBQVNDLFNBQVMsUUFBUSx3Q0FBd0M7QUFDbEUsT0FBT0MsVUFBVSx5QkFBeUI7QUFDMUMsT0FBT0Msa0JBQWtCLGlDQUFpQztBQUMxRCxPQUFPQyxnQkFB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