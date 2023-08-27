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
import React, { useCallback, useEffect, useState } from "react";
import { ReactEditor, useSlate } from "slate-react";
import { Transforms, Node, Editor } from "slate";
import { useModal } from "@faceless-ui/modal";
import { Trans, useTranslation } from "react-i18next";
import { transformExtraFields, unwrapLink } from "../utilities";
import Popup from "../../../../../../elements/Popup";
import { LinkDrawer } from "../LinkDrawer";
import buildStateFromSchema from "../../../../../Form/buildStateFromSchema";
import { useAuth } from "../../../../../../utilities/Auth";
import { useLocale } from "../../../../../../utilities/Locale";
import { useConfig } from "../../../../../../utilities/Config";
import reduceFieldsToValues from "../../../../../Form/reduceFieldsToValues";
import deepCopyObject from "../../../../../../../../utilities/deepCopyObject";
import Button from "../../../../../../elements/Button";
import { getTranslation } from "../../../../../../../../utilities/getTranslation";
import { useDrawerSlug } from "../../../../../../elements/Drawer/useDrawerSlug";
import { useDocumentInfo } from "../../../../../../utilities/DocumentInfo";
import "./index.scss";
var baseClass = "rich-text-link";
/**
 * This function is called when an existing link is edited.
 * When a link is first created, another function is called: {@link ../Button/index.tsx#insertLink}
 */ var insertChange = function(editor, fields, customFieldSchema) {
    var data = reduceFieldsToValues(fields, true);
    var _Editor_above = _sliced_to_array(Editor.above(editor), 2), parentPath = _Editor_above[1];
    var newNode = {
        newTab: data.newTab,
        url: data.url,
        linkType: data.linkType,
        doc: data.doc
    };
    if (customFieldSchema) {
        newNode.fields = data.fields;
    }
    Transforms.setNodes(editor, newNode, {
        at: parentPath
    });
    Transforms.delete(editor, {
        at: editor.selection.focus.path,
        unit: "block"
    });
    Transforms.move(editor, {
        distance: 1,
        unit: "offset"
    });
    Transforms.insertText(editor, String(data.text), {
        at: editor.selection.focus.path
    });
    ReactEditor.focus(editor);
};
export var LinkElement = function(props) {
    var _fieldProps_admin_link, _fieldProps_admin, _fieldProps;
    var attributes = props.attributes, children = props.children, element = props.element, editorRef = props.editorRef, fieldProps = props.fieldProps;
    var customFieldSchema = (_fieldProps = fieldProps) === null || _fieldProps === void 0 ? void 0 : (_fieldProps_admin = _fieldProps.admin) === null || _fieldProps_admin === void 0 ? void 0 : (_fieldProps_admin_link = _fieldProps_admin.link) === null || _fieldProps_admin_link === void 0 ? void 0 : _fieldProps_admin_link.fields;
    var editor = useSlate();
    var config = useConfig();
    var user = useAuth().user;
    var _useLocale = useLocale(), locale = _useLocale.code;
    var _useTranslation = useTranslation("fields"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useModal = useModal(), openModal = _useModal.openModal, toggleModal = _useModal.toggleModal, closeModal = _useModal.closeModal;
    var _useState = _sliced_to_array(useState(false), 2), renderModal = _useState[0], setRenderModal = _useState[1];
    var _useState1 = _sliced_to_array(useState(false), 2), renderPopup = _useState1[0], setRenderPopup = _useState1[1];
    var _useState2 = _sliced_to_array(useState({}), 2), initialState = _useState2[0], setInitialState = _useState2[1];
    var getDocPreferences = useDocumentInfo().getDocPreferences;
    var _useState3 = _sliced_to_array(useState(function() {
        var fields = transformExtraFields(customFieldSchema, config, i18n);
        return fields;
    }), 1), fieldSchema = _useState3[0];
    var drawerSlug = useDrawerSlug("rich-text-link");
    var handleTogglePopup = useCallback(function(render) {
        if (!render) {
            setRenderPopup(render);
        }
    }, []);
    useEffect(function() {
        var awaitInitialState = function() {
            var _ref = _async_to_generator(function() {
                var data, preferences, state;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            data = {
                                text: Node.string(element),
                                linkType: element.linkType,
                                url: element.url,
                                doc: element.doc,
                                newTab: element.newTab,
                                fields: deepCopyObject(element.fields)
                            };
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
                                    data: data,
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
        renderModal,
        element,
        fieldSchema,
        user,
        locale,
        t,
        getDocPreferences
    ]);
    return /*#__PURE__*/ React.createElement("span", _object_spread({
        className: baseClass
    }, attributes), /*#__PURE__*/ React.createElement("span", {
        style: {
            userSelect: "none"
        },
        contentEditable: false
    }, renderModal && /*#__PURE__*/ React.createElement(LinkDrawer, {
        drawerSlug: drawerSlug,
        fieldSchema: fieldSchema,
        handleClose: function() {
            toggleModal(drawerSlug);
            setRenderModal(false);
        },
        handleModalSubmit: function(fields) {
            insertChange(editor, fields, customFieldSchema);
            closeModal(drawerSlug);
        },
        initialState: initialState
    }), /*#__PURE__*/ React.createElement(Popup, {
        buttonType: "none",
        size: "small",
        forceOpen: renderPopup,
        onToggleOpen: handleTogglePopup,
        horizontalAlign: "left",
        verticalAlign: "bottom",
        boundingRef: editorRef,
        render: function() {
            var _element_doc, _element_doc1, _config_collections_find_labels, _config_collections_find;
            return /*#__PURE__*/ React.createElement("div", {
                className: "".concat(baseClass, "__popup")
            }, element.linkType === "internal" && ((_element_doc = element.doc) === null || _element_doc === void 0 ? void 0 : _element_doc.relationTo) && ((_element_doc1 = element.doc) === null || _element_doc1 === void 0 ? void 0 : _element_doc1.value) && /*#__PURE__*/ React.createElement(Trans, {
                i18nKey: "fields:linkedTo",
                values: {
                    label: getTranslation((_config_collections_find = config.collections.find(function(param) {
                        var slug = param.slug;
                        return slug === element.doc.relationTo;
                    })) === null || _config_collections_find === void 0 ? void 0 : (_config_collections_find_labels = _config_collections_find.labels) === null || _config_collections_find_labels === void 0 ? void 0 : _config_collections_find_labels.singular, i18n)
                }
            }, /*#__PURE__*/ React.createElement("a", {
                className: "".concat(baseClass, "__link-label"),
                href: "".concat(config.routes.admin, "/collections/").concat(element.doc.relationTo, "/").concat(element.doc.value),
                target: "_blank",
                rel: "noreferrer"
            }, "label")), (element.linkType === "custom" || !element.linkType) && /*#__PURE__*/ React.createElement("a", {
                className: "".concat(baseClass, "__link-label"),
                href: element.url,
                target: "_blank",
                rel: "noreferrer"
            }, element.url), /*#__PURE__*/ React.createElement(Button, {
                className: "".concat(baseClass, "__link-edit"),
                icon: "edit",
                round: true,
                buttonStyle: "icon-label",
                onClick: function(e) {
                    e.preventDefault();
                    setRenderPopup(false);
                    openModal(drawerSlug);
                    setRenderModal(true);
                },
                tooltip: t("general:edit")
            }), /*#__PURE__*/ React.createElement(Button, {
                className: "".concat(baseClass, "__link-close"),
                icon: "x",
                round: true,
                buttonStyle: "icon-label",
                onClick: function(e) {
                    e.preventDefault();
                    unwrapLink(editor);
                },
                tooltip: t("general:remove")
            }));
        }
    })), /*#__PURE__*/ React.createElement("span", {
        tabIndex: 0,
        role: "button",
        className: [
            "".concat(baseClass, "__popup-toggler")
        ].filter(Boolean).join(" "),
        onKeyDown: function(e) {
            if (e.key === "Enter") setRenderPopup(true);
        },
        onClick: function() {
            return setRenderPopup(true);
        }
    }, children));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL2xpbmsvRWxlbWVudC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEhUTUxBdHRyaWJ1dGVzLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0RWRpdG9yLCB1c2VTbGF0ZSB9IGZyb20gJ3NsYXRlLXJlYWN0JztcbmltcG9ydCB7IFRyYW5zZm9ybXMsIE5vZGUsIEVkaXRvciB9IGZyb20gJ3NsYXRlJztcbmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSAnQGZhY2VsZXNzLXVpL21vZGFsJztcbmltcG9ydCB7IFRyYW5zLCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdHJhbnNmb3JtRXh0cmFGaWVsZHMsIHVud3JhcExpbmsgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuaW1wb3J0IFBvcHVwIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2VsZW1lbnRzL1BvcHVwJztcbmltcG9ydCB7IExpbmtEcmF3ZXIgfSBmcm9tICcuLi9MaW5rRHJhd2VyJztcbmltcG9ydCB7IEZpZWxkcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL0Zvcm0vdHlwZXMnO1xuaW1wb3J0IGJ1aWxkU3RhdGVGcm9tU2NoZW1hIGZyb20gJy4uLy4uLy4uLy4uLy4uL0Zvcm0vYnVpbGRTdGF0ZUZyb21TY2hlbWEnO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9BdXRoJztcbmltcG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9Mb2NhbGUnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgcmVkdWNlRmllbGRzVG9WYWx1ZXMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vRm9ybS9yZWR1Y2VGaWVsZHNUb1ZhbHVlcyc7XG5pbXBvcnQgZGVlcENvcHlPYmplY3QgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2RlZXBDb3B5T2JqZWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZWxlbWVudHMvQnV0dG9uJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcbmltcG9ydCB7IFByb3BzIGFzIFJpY2hUZXh0RmllbGRQcm9wcyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IHVzZURyYXdlclNsdWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9lbGVtZW50cy9EcmF3ZXIvdXNlRHJhd2VyU2x1Zyc7XG5pbXBvcnQgeyB1c2VEb2N1bWVudEluZm8gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvRG9jdW1lbnRJbmZvJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAncmljaC10ZXh0LWxpbmsnO1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gYW4gZXhpc3RpbmcgbGluayBpcyBlZGl0ZWQuXG4gKiBXaGVuIGEgbGluayBpcyBmaXJzdCBjcmVhdGVkLCBhbm90aGVyIGZ1bmN0aW9uIGlzIGNhbGxlZDoge0BsaW5rIC4uL0J1dHRvbi9pbmRleC50c3gjaW5zZXJ0TGlua31cbiAqL1xuY29uc3QgaW5zZXJ0Q2hhbmdlID0gKGVkaXRvciwgZmllbGRzLCBjdXN0b21GaWVsZFNjaGVtYSkgPT4ge1xuICBjb25zdCBkYXRhID0gcmVkdWNlRmllbGRzVG9WYWx1ZXMoZmllbGRzLCB0cnVlKTtcblxuICBjb25zdCBbLCBwYXJlbnRQYXRoXSA9IEVkaXRvci5hYm92ZShlZGl0b3IpO1xuXG4gIGNvbnN0IG5ld05vZGU6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge1xuICAgIG5ld1RhYjogZGF0YS5uZXdUYWIsXG4gICAgdXJsOiBkYXRhLnVybCxcbiAgICBsaW5rVHlwZTogZGF0YS5saW5rVHlwZSxcbiAgICBkb2M6IGRhdGEuZG9jLFxuICB9O1xuXG4gIGlmIChjdXN0b21GaWVsZFNjaGVtYSkge1xuICAgIG5ld05vZGUuZmllbGRzID0gZGF0YS5maWVsZHM7XG4gIH1cblxuICBUcmFuc2Zvcm1zLnNldE5vZGVzKFxuICAgIGVkaXRvcixcbiAgICBuZXdOb2RlLFxuICAgIHsgYXQ6IHBhcmVudFBhdGggfSxcbiAgKTtcblxuICBUcmFuc2Zvcm1zLmRlbGV0ZShlZGl0b3IsIHsgYXQ6IGVkaXRvci5zZWxlY3Rpb24uZm9jdXMucGF0aCwgdW5pdDogJ2Jsb2NrJyB9KTtcbiAgVHJhbnNmb3Jtcy5tb3ZlKGVkaXRvciwgeyBkaXN0YW5jZTogMSwgdW5pdDogJ29mZnNldCcgfSk7XG4gIFRyYW5zZm9ybXMuaW5zZXJ0VGV4dChlZGl0b3IsIFN0cmluZyhkYXRhLnRleHQpLCB7IGF0OiBlZGl0b3Iuc2VsZWN0aW9uLmZvY3VzLnBhdGggfSk7XG5cbiAgUmVhY3RFZGl0b3IuZm9jdXMoZWRpdG9yKTtcbn07XG5cbmV4cG9ydCBjb25zdCBMaW5rRWxlbWVudDogUmVhY3QuRkM8e1xuICBhdHRyaWJ1dGVzOiBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD5cbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxuICBlbGVtZW50OiBhbnlcbiAgZmllbGRQcm9wczogUmljaFRleHRGaWVsZFByb3BzXG4gIGVkaXRvclJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PlxufT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGF0dHJpYnV0ZXMsXG4gICAgY2hpbGRyZW4sXG4gICAgZWxlbWVudCxcbiAgICBlZGl0b3JSZWYsXG4gICAgZmllbGRQcm9wcyxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGN1c3RvbUZpZWxkU2NoZW1hID0gZmllbGRQcm9wcz8uYWRtaW4/Lmxpbms/LmZpZWxkcztcblxuICBjb25zdCBlZGl0b3IgPSB1c2VTbGF0ZSgpO1xuICBjb25zdCBjb25maWcgPSB1c2VDb25maWcoKTtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IHsgY29kZTogbG9jYWxlIH0gPSB1c2VMb2NhbGUoKTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbignZmllbGRzJyk7XG4gIGNvbnN0IHsgb3Blbk1vZGFsLCB0b2dnbGVNb2RhbCwgY2xvc2VNb2RhbCB9ID0gdXNlTW9kYWwoKTtcbiAgY29uc3QgW3JlbmRlck1vZGFsLCBzZXRSZW5kZXJNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZW5kZXJQb3B1cCwgc2V0UmVuZGVyUG9wdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW5pdGlhbFN0YXRlLCBzZXRJbml0aWFsU3RhdGVdID0gdXNlU3RhdGU8RmllbGRzPih7fSk7XG4gIGNvbnN0IHsgZ2V0RG9jUHJlZmVyZW5jZXMgfSA9IHVzZURvY3VtZW50SW5mbygpO1xuICBjb25zdCBbZmllbGRTY2hlbWFdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgIGNvbnN0IGZpZWxkcyA9IHRyYW5zZm9ybUV4dHJhRmllbGRzKGN1c3RvbUZpZWxkU2NoZW1hLCBjb25maWcsIGkxOG4pO1xuXG5cbiAgICByZXR1cm4gZmllbGRzO1xuICB9KTtcblxuICBjb25zdCBkcmF3ZXJTbHVnID0gdXNlRHJhd2VyU2x1ZygncmljaC10ZXh0LWxpbmsnKTtcblxuICBjb25zdCBoYW5kbGVUb2dnbGVQb3B1cCA9IHVzZUNhbGxiYWNrKChyZW5kZXIpID0+IHtcbiAgICBpZiAoIXJlbmRlcikge1xuICAgICAgc2V0UmVuZGVyUG9wdXAocmVuZGVyKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGF3YWl0SW5pdGlhbFN0YXRlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgdGV4dDogTm9kZS5zdHJpbmcoZWxlbWVudCksXG4gICAgICAgIGxpbmtUeXBlOiBlbGVtZW50LmxpbmtUeXBlLFxuICAgICAgICB1cmw6IGVsZW1lbnQudXJsLFxuICAgICAgICBkb2M6IGVsZW1lbnQuZG9jLFxuICAgICAgICBuZXdUYWI6IGVsZW1lbnQubmV3VGFiLFxuICAgICAgICBmaWVsZHM6IGRlZXBDb3B5T2JqZWN0KGVsZW1lbnQuZmllbGRzKSxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHByZWZlcmVuY2VzID0gYXdhaXQgZ2V0RG9jUHJlZmVyZW5jZXMoKTtcbiAgICAgIGNvbnN0IHN0YXRlID0gYXdhaXQgYnVpbGRTdGF0ZUZyb21TY2hlbWEoeyBmaWVsZFNjaGVtYSwgcHJlZmVyZW5jZXMsIGRhdGEsIHVzZXIsIG9wZXJhdGlvbjogJ3VwZGF0ZScsIGxvY2FsZSwgdCB9KTtcbiAgICAgIHNldEluaXRpYWxTdGF0ZShzdGF0ZSk7XG4gICAgfTtcblxuICAgIGF3YWl0SW5pdGlhbFN0YXRlKCk7XG4gIH0sIFtyZW5kZXJNb2RhbCwgZWxlbWVudCwgZmllbGRTY2hlbWEsIHVzZXIsIGxvY2FsZSwgdCwgZ2V0RG9jUHJlZmVyZW5jZXNdKTtcblxuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICBjbGFzc05hbWU9e2Jhc2VDbGFzc31cbiAgICAgIHsuLi5hdHRyaWJ1dGVzfVxuICAgID5cbiAgICAgIDxzcGFuXG4gICAgICAgIHN0eWxlPXt7IHVzZXJTZWxlY3Q6ICdub25lJyB9fVxuICAgICAgICBjb250ZW50RWRpdGFibGU9e2ZhbHNlfVxuICAgICAgPlxuICAgICAgICB7cmVuZGVyTW9kYWwgJiYgKFxuICAgICAgICAgIDxMaW5rRHJhd2VyXG4gICAgICAgICAgICBkcmF3ZXJTbHVnPXtkcmF3ZXJTbHVnfVxuICAgICAgICAgICAgZmllbGRTY2hlbWE9e2ZpZWxkU2NoZW1hfVxuICAgICAgICAgICAgaGFuZGxlQ2xvc2U9eygpID0+IHtcbiAgICAgICAgICAgICAgdG9nZ2xlTW9kYWwoZHJhd2VyU2x1Zyk7XG4gICAgICAgICAgICAgIHNldFJlbmRlck1vZGFsKGZhbHNlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBoYW5kbGVNb2RhbFN1Ym1pdD17KGZpZWxkcykgPT4ge1xuICAgICAgICAgICAgICBpbnNlcnRDaGFuZ2UoZWRpdG9yLCBmaWVsZHMsIGN1c3RvbUZpZWxkU2NoZW1hKTtcbiAgICAgICAgICAgICAgY2xvc2VNb2RhbChkcmF3ZXJTbHVnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBpbml0aWFsU3RhdGU9e2luaXRpYWxTdGF0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8UG9wdXBcbiAgICAgICAgICBidXR0b25UeXBlPVwibm9uZVwiXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICBmb3JjZU9wZW49e3JlbmRlclBvcHVwfVxuICAgICAgICAgIG9uVG9nZ2xlT3Blbj17aGFuZGxlVG9nZ2xlUG9wdXB9XG4gICAgICAgICAgaG9yaXpvbnRhbEFsaWduPVwibGVmdFwiXG4gICAgICAgICAgdmVydGljYWxBbGlnbj1cImJvdHRvbVwiXG4gICAgICAgICAgYm91bmRpbmdSZWY9e2VkaXRvclJlZn1cbiAgICAgICAgICByZW5kZXI9eygpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19wb3B1cGB9PlxuICAgICAgICAgICAgICB7ZWxlbWVudC5saW5rVHlwZSA9PT0gJ2ludGVybmFsJyAmJiBlbGVtZW50LmRvYz8ucmVsYXRpb25UbyAmJiBlbGVtZW50LmRvYz8udmFsdWUgJiYgKFxuICAgICAgICAgICAgICAgIDxUcmFuc1xuICAgICAgICAgICAgICAgICAgaTE4bktleT1cImZpZWxkczpsaW5rZWRUb1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZXM9e3sgbGFiZWw6IGdldFRyYW5zbGF0aW9uKGNvbmZpZy5jb2xsZWN0aW9ucy5maW5kKCh7IHNsdWcgfSkgPT4gc2x1ZyA9PT0gZWxlbWVudC5kb2MucmVsYXRpb25Ubyk/LmxhYmVscz8uc2luZ3VsYXIsIGkxOG4pIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19saW5rLWxhYmVsYH1cbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YCR7Y29uZmlnLnJvdXRlcy5hZG1pbn0vY29sbGVjdGlvbnMvJHtlbGVtZW50LmRvYy5yZWxhdGlvblRvfS8ke2VsZW1lbnQuZG9jLnZhbHVlfWB9XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHsoZWxlbWVudC5saW5rVHlwZSA9PT0gJ2N1c3RvbScgfHwgIWVsZW1lbnQubGlua1R5cGUpICYmIChcbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19saW5rLWxhYmVsYH1cbiAgICAgICAgICAgICAgICAgIGhyZWY9e2VsZW1lbnQudXJsfVxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnVybH1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xpbmstZWRpdGB9XG4gICAgICAgICAgICAgICAgaWNvbj1cImVkaXRcIlxuICAgICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJpY29uLWxhYmVsXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgc2V0UmVuZGVyUG9wdXAoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgb3Blbk1vZGFsKGRyYXdlclNsdWcpO1xuICAgICAgICAgICAgICAgICAgc2V0UmVuZGVyTW9kYWwodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB0b29sdGlwPXt0KCdnZW5lcmFsOmVkaXQnKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbGluay1jbG9zZWB9XG4gICAgICAgICAgICAgICAgaWNvbj1cInhcIlxuICAgICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJpY29uLWxhYmVsXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgdW53cmFwTGluayhlZGl0b3IpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdG9vbHRpcD17dCgnZ2VuZXJhbDpyZW1vdmUnKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhblxuICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICAgIGAke2Jhc2VDbGFzc31fX3BvcHVwLXRvZ2dsZXJgLFxuICAgICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgICAgIG9uS2V5RG93bj17KGUpID0+IHsgaWYgKGUua2V5ID09PSAnRW50ZXInKSBzZXRSZW5kZXJQb3B1cCh0cnVlKTsgfX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UmVuZGVyUG9wdXAodHJ1ZSl9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3NwYW4+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJlYWN0RWRpdG9yIiwidXNlU2xhdGUiLCJUcmFuc2Zvcm1zIiwiTm9kZSIsIkVkaXRvciIsInVzZU1vZGFsIiwiVHJhbnMiLCJ1c2VUcmFuc2xhdGlvbiIsInRyYW5zZm9ybUV4dHJhRmllbGRzIiwidW53cmFwTGluayIsIlBvcHVwIiwiTGlua0RyYXdlciIsImJ1aWxkU3RhdGVGcm9tU2NoZW1hIiwidXNlQXV0aCIsInVzZUxvY2FsZSIsInVzZUNvbmZpZyIsInJlZHVjZUZpZWxkc1RvVmFsdWVzIiwiZGVlcENvcHlPYmplY3QiLCJCdXR0b24iLCJnZXRUcmFuc2xhdGlvbiIsInVzZURyYXdlclNsdWciLCJ1c2VEb2N1bWVudEluZm8iLCJiYXNlQ2xhc3MiLCJpbnNlcnRDaGFuZ2UiLCJlZGl0b3IiLCJmaWVsZHMiLCJjdXN0b21GaWVsZFNjaGVtYSIsImRhdGEiLCJhYm92ZSIsInBhcmVudFBhdGgiLCJuZXdOb2RlIiwibmV3VGFiIiwidXJsIiwibGlua1R5cGUiLCJkb2MiLCJzZXROb2RlcyIsImF0IiwiZGVsZXRlIiwic2VsZWN0aW9uIiwiZm9jdXMiLCJwYXRoIiwidW5pdCIsIm1vdmUiLCJkaXN0YW5jZSIsImluc2VydFRleHQiLCJTdHJpbmciLCJ0ZXh0IiwiTGlua0VsZW1lbnQiLCJwcm9wcyIsImZpZWxkUHJvcHMiLCJhdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJlbGVtZW50IiwiZWRpdG9yUmVmIiwiYWRtaW4iLCJsaW5rIiwiY29uZmlnIiwidXNlciIsImNvZGUiLCJsb2NhbGUiLCJ0IiwiaTE4biIsIm9wZW5Nb2RhbCIsInRvZ2dsZU1vZGFsIiwiY2xvc2VNb2RhbCIsInJlbmRlck1vZGFsIiwic2V0UmVuZGVyTW9kYWwiLCJyZW5kZXJQb3B1cCIsInNldFJlbmRlclBvcHVwIiwiaW5pdGlhbFN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwiZ2V0RG9jUHJlZmVyZW5jZXMiLCJmaWVsZFNjaGVtYSIsImRyYXdlclNsdWciLCJoYW5kbGVUb2dnbGVQb3B1cCIsInJlbmRlciIsImF3YWl0SW5pdGlhbFN0YXRlIiwicHJlZmVyZW5jZXMiLCJzdGF0ZSIsInN0cmluZyIsIm9wZXJhdGlvbiIsInNwYW4iLCJjbGFzc05hbWUiLCJzdHlsZSIsInVzZXJTZWxlY3QiLCJjb250ZW50RWRpdGFibGUiLCJoYW5kbGVDbG9zZSIsImhhbmRsZU1vZGFsU3VibWl0IiwiYnV0dG9uVHlwZSIsInNpemUiLCJmb3JjZU9wZW4iLCJvblRvZ2dsZU9wZW4iLCJob3Jpem9udGFsQWxpZ24iLCJ2ZXJ0aWNhbEFsaWduIiwiYm91bmRpbmdSZWYiLCJkaXYiLCJyZWxhdGlvblRvIiwidmFsdWUiLCJpMThuS2V5IiwidmFsdWVzIiwibGFiZWwiLCJjb2xsZWN0aW9ucyIsImZpbmQiLCJzbHVnIiwibGFiZWxzIiwic2luZ3VsYXIiLCJhIiwiaHJlZiIsInJvdXRlcyIsInRhcmdldCIsInJlbCIsImljb24iLCJyb3VuZCIsImJ1dHRvblN0eWxlIiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRvb2x0aXAiLCJ0YWJJbmRleCIsInJvbGUiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIm9uS2V5RG93biIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBeUJDLFdBQVcsRUFBRUMsU0FBUyxFQUFFQyxRQUFRLFFBQVEsUUFBUTtBQUNoRixTQUFTQyxXQUFXLEVBQUVDLFFBQVEsUUFBUSxjQUFjO0FBQ3BELFNBQVNDLFVBQVUsRUFBRUMsSUFBSSxFQUFFQyxNQUFNLFFBQVEsUUFBUTtBQUNqRCxTQUFTQyxRQUFRLFFBQVEscUJBQXFCO0FBQzlDLFNBQVNDLEtBQUssRUFBRUMsY0FBYyxRQUFRLGdCQUFnQjtBQUN0RCxTQUFTQyxvQkFBb0IsRUFBRUMsVUFBVSxRQUFRLGVBQWU7QUFDaEUsT0FBT0MsV0FBVyxtQ0FBbUM7QUFDckQsU0FBU0MsVUFBVSxRQUFRLGdCQUFnQjtBQUUzQyxPQUFPQywwQkFBMEIsMkNBQTJDO0FBQzVFLFNBQVNDLE9BQU8sUUFBUSxtQ0FBbUM7QUFDM0QsU0FBU0MsU0FBUyxRQUFRLHFDQUFxQztBQUMvRCxTQUFTQyxTQUFTLFFBQVEscUNBQXFDO0FBQy9ELE9BQU9DLDBCQUEwQiwyQ0FBMkM7QUFDNUUsT0FBT0Msb0JBQW9CLG1EQUFtRDtBQUM5RSxPQUFPQyxZQUFZLG9DQUFvQztBQUN2RCxTQUFTQyxjQUFjLFFBQVEsbURBQW1EO0FBRWxGLFNBQVNDLGFBQWEsUUFBUSxrREFBa0Q7QUFDaEYsU0FBU0MsZUFBZSxRQUFRLDJDQUEyQztBQUUzRSxPQUFPLGVBQWU7QUFFdEIsSUFB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