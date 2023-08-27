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
import React, { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { ReactEditor, useSlate } from "slate-react";
import { Transforms, Range, Editor } from "slate";
import { useModal } from "@faceless-ui/modal";
import ElementButton from "../../Button";
import LinkIcon from "../../../../../../icons/Link";
import reduceFieldsToValues from "../../../../../Form/reduceFieldsToValues";
import { useConfig } from "../../../../../../utilities/Config";
import isElementActive from "../../isActive";
import { transformExtraFields, unwrapLink } from "../utilities";
import { LinkDrawer } from "../LinkDrawer";
import buildStateFromSchema from "../../../../../Form/buildStateFromSchema";
import { useAuth } from "../../../../../../utilities/Auth";
import { useLocale } from "../../../../../../utilities/Locale";
import { useDrawerSlug } from "../../../../../../elements/Drawer/useDrawerSlug";
import { useDocumentInfo } from "../../../../../../utilities/DocumentInfo";
/**
 * This function is called when an new link is created - not when an existing link is edited.
 */ var insertLink = function(editor, fields) {
    var isCollapsed = editor.selection && Range.isCollapsed(editor.selection);
    var data = reduceFieldsToValues(fields, true);
    var newLink = {
        type: "link",
        linkType: data.linkType,
        url: data.url,
        doc: data.doc,
        newTab: data.newTab,
        fields: data.fields,
        children: []
    };
    if (isCollapsed || !editor.selection) {
        // If selection anchor and focus are the same,
        // Just inject a new node with children already set
        Transforms.insertNodes(editor, _object_spread_props(_object_spread({}, newLink), {
            children: [
                {
                    text: String(data.text)
                }
            ]
        }));
    } else if (editor.selection) {
        // Otherwise we need to wrap the selected node in a link,
        // Delete its old text,
        // Move the selection one position forward into the link,
        // And insert the text back into the new link
        Transforms.wrapNodes(editor, newLink, {
            split: true
        });
        Transforms.delete(editor, {
            at: editor.selection.focus.path,
            unit: "word"
        });
        Transforms.move(editor, {
            distance: 1,
            unit: "offset"
        });
        Transforms.insertText(editor, String(data.text), {
            at: editor.selection.focus.path
        });
    }
    ReactEditor.focus(editor);
};
export var LinkButton = function(param) {
    var fieldProps = param.fieldProps;
    var _fieldProps_admin_link, _fieldProps_admin, _fieldProps;
    var customFieldSchema = (_fieldProps = fieldProps) === null || _fieldProps === void 0 ? void 0 : (_fieldProps_admin = _fieldProps.admin) === null || _fieldProps_admin === void 0 ? void 0 : (_fieldProps_admin_link = _fieldProps_admin.link) === null || _fieldProps_admin_link === void 0 ? void 0 : _fieldProps_admin_link.fields;
    var user = useAuth().user;
    var _useLocale = useLocale(), locale = _useLocale.code;
    var _useState = _sliced_to_array(useState({}), 2), initialState = _useState[0], setInitialState = _useState[1];
    var _useTranslation = useTranslation([
        "upload",
        "general"
    ]), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var editor = useSlate();
    var config = useConfig();
    var _useState1 = _sliced_to_array(useState(function() {
        var fields = transformExtraFields(customFieldSchema, config, i18n);
        return fields;
    }), 1), fieldSchema = _useState1[0];
    var _useModal = useModal(), openModal = _useModal.openModal, closeModal = _useModal.closeModal;
    var drawerSlug = useDrawerSlug("rich-text-link");
    var getDocPreferences = useDocumentInfo().getDocPreferences;
    return /*#__PURE__*/ React.createElement(Fragment, null, /*#__PURE__*/ React.createElement(ElementButton, {
        format: "link",
        tooltip: t("fields:addLink"),
        className: "link",
        onClick: /*#__PURE__*/ _async_to_generator(function() {
            var isCollapsed, data, preferences, state;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!isElementActive(editor, "link")) return [
                            3,
                            1
                        ];
                        unwrapLink(editor);
                        return [
                            3,
                            4
                        ];
                    case 1:
                        openModal(drawerSlug);
                        isCollapsed = editor.selection && Range.isCollapsed(editor.selection);
                        if (!!isCollapsed) return [
                            3,
                            4
                        ];
                        data = {
                            text: editor.selection ? Editor.string(editor, editor.selection) : ""
                        };
                        return [
                            4,
                            getDocPreferences()
                        ];
                    case 2:
                        preferences = _state.sent();
                        return [
                            4,
                            buildStateFromSchema({
                                fieldSchema: fieldSchema,
                                preferences: preferences,
                                data: data,
                                user: user,
                                operation: "create",
                                locale: locale,
                                t: t
                            })
                        ];
                    case 3:
                        state = _state.sent();
                        setInitialState(state);
                        _state.label = 4;
                    case 4:
                        return [
                            2
                        ];
                }
            });
        })
    }, /*#__PURE__*/ React.createElement(LinkIcon, null)), /*#__PURE__*/ React.createElement(LinkDrawer, {
        drawerSlug: drawerSlug,
        handleModalSubmit: function(fields) {
            insertLink(editor, fields);
            closeModal(drawerSlug);
        },
        initialState: initialState,
        fieldSchema: fieldSchema,
        handleClose: function() {
            closeModal(drawerSlug);
        }
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL2xpbmsvQnV0dG9uL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IFJlYWN0RWRpdG9yLCB1c2VTbGF0ZSB9IGZyb20gJ3NsYXRlLXJlYWN0JztcbmltcG9ydCB7IFRyYW5zZm9ybXMsIFJhbmdlLCBFZGl0b3IgfSBmcm9tICdzbGF0ZSc7XG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ0BmYWNlbGVzcy11aS9tb2RhbCc7XG5pbXBvcnQgRWxlbWVudEJ1dHRvbiBmcm9tICcuLi8uLi9CdXR0b24nO1xuaW1wb3J0IExpbmtJY29uIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2ljb25zL0xpbmsnO1xuaW1wb3J0IHJlZHVjZUZpZWxkc1RvVmFsdWVzIGZyb20gJy4uLy4uLy4uLy4uLy4uL0Zvcm0vcmVkdWNlRmllbGRzVG9WYWx1ZXMnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgaXNFbGVtZW50QWN0aXZlIGZyb20gJy4uLy4uL2lzQWN0aXZlJztcbmltcG9ydCB7IHRyYW5zZm9ybUV4dHJhRmllbGRzLCB1bndyYXBMaW5rIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcbmltcG9ydCB7IExpbmtEcmF3ZXIgfSBmcm9tICcuLi9MaW5rRHJhd2VyJztcbmltcG9ydCB7IFByb3BzIGFzIFJpY2hUZXh0RmllbGRQcm9wcyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCBidWlsZFN0YXRlRnJvbVNjaGVtYSBmcm9tICcuLi8uLi8uLi8uLi8uLi9Gb3JtL2J1aWxkU3RhdGVGcm9tU2NoZW1hJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvQXV0aCc7XG5pbXBvcnQgeyBGaWVsZHMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9Gb3JtL3R5cGVzJztcbmltcG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9Mb2NhbGUnO1xuaW1wb3J0IHsgdXNlRHJhd2VyU2x1ZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2VsZW1lbnRzL0RyYXdlci91c2VEcmF3ZXJTbHVnJztcbmltcG9ydCB7IHVzZURvY3VtZW50SW5mbyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9Eb2N1bWVudEluZm8nO1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gYW4gbmV3IGxpbmsgaXMgY3JlYXRlZCAtIG5vdCB3aGVuIGFuIGV4aXN0aW5nIGxpbmsgaXMgZWRpdGVkLlxuICovXG5jb25zdCBpbnNlcnRMaW5rID0gKGVkaXRvciwgZmllbGRzKSA9PiB7XG4gIGNvbnN0IGlzQ29sbGFwc2VkID0gZWRpdG9yLnNlbGVjdGlvbiAmJiBSYW5nZS5pc0NvbGxhcHNlZChlZGl0b3Iuc2VsZWN0aW9uKTtcbiAgY29uc3QgZGF0YSA9IHJlZHVjZUZpZWxkc1RvVmFsdWVzKGZpZWxkcywgdHJ1ZSk7XG5cbiAgY29uc3QgbmV3TGluayA9IHtcbiAgICB0eXBlOiAnbGluaycsXG4gICAgbGlua1R5cGU6IGRhdGEubGlua1R5cGUsXG4gICAgdXJsOiBkYXRhLnVybCxcbiAgICBkb2M6IGRhdGEuZG9jLFxuICAgIG5ld1RhYjogZGF0YS5uZXdUYWIsXG4gICAgZmllbGRzOiBkYXRhLmZpZWxkcywgLy8gQW55IGN1c3RvbSB1c2VyLWFkZGVkIGZpZWxkcyBhcmUgcGFydCBvZiBkYXRhLmZpZWxkc1xuICAgIGNoaWxkcmVuOiBbXSxcbiAgfTtcblxuICBpZiAoaXNDb2xsYXBzZWQgfHwgIWVkaXRvci5zZWxlY3Rpb24pIHtcbiAgICAvLyBJZiBzZWxlY3Rpb24gYW5jaG9yIGFuZCBmb2N1cyBhcmUgdGhlIHNhbWUsXG4gICAgLy8gSnVzdCBpbmplY3QgYSBuZXcgbm9kZSB3aXRoIGNoaWxkcmVuIGFscmVhZHkgc2V0XG4gICAgVHJhbnNmb3Jtcy5pbnNlcnROb2RlcyhlZGl0b3IsIHtcbiAgICAgIC4uLm5ld0xpbmssXG4gICAgICBjaGlsZHJlbjogW3sgdGV4dDogU3RyaW5nKGRhdGEudGV4dCkgfV0sXG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoZWRpdG9yLnNlbGVjdGlvbikge1xuICAgIC8vIE90aGVyd2lzZSB3ZSBuZWVkIHRvIHdyYXAgdGhlIHNlbGVjdGVkIG5vZGUgaW4gYSBsaW5rLFxuICAgIC8vIERlbGV0ZSBpdHMgb2xkIHRleHQsXG4gICAgLy8gTW92ZSB0aGUgc2VsZWN0aW9uIG9uZSBwb3NpdGlvbiBmb3J3YXJkIGludG8gdGhlIGxpbmssXG4gICAgLy8gQW5kIGluc2VydCB0aGUgdGV4dCBiYWNrIGludG8gdGhlIG5ldyBsaW5rXG4gICAgVHJhbnNmb3Jtcy53cmFwTm9kZXMoZWRpdG9yLCBuZXdMaW5rLCB7IHNwbGl0OiB0cnVlIH0pO1xuICAgIFRyYW5zZm9ybXMuZGVsZXRlKGVkaXRvciwgeyBhdDogZWRpdG9yLnNlbGVjdGlvbi5mb2N1cy5wYXRoLCB1bml0OiAnd29yZCcgfSk7XG4gICAgVHJhbnNmb3Jtcy5tb3ZlKGVkaXRvciwgeyBkaXN0YW5jZTogMSwgdW5pdDogJ29mZnNldCcgfSk7XG4gICAgVHJhbnNmb3Jtcy5pbnNlcnRUZXh0KGVkaXRvciwgU3RyaW5nKGRhdGEudGV4dCksIHsgYXQ6IGVkaXRvci5zZWxlY3Rpb24uZm9jdXMucGF0aCB9KTtcbiAgfVxuXG4gIFJlYWN0RWRpdG9yLmZvY3VzKGVkaXRvcik7XG59O1xuXG5leHBvcnQgY29uc3QgTGlua0J1dHRvbjogUmVhY3QuRkM8e1xuICBwYXRoOiBzdHJpbmdcbiAgZmllbGRQcm9wczogUmljaFRleHRGaWVsZFByb3BzXG59PiA9ICh7IGZpZWxkUHJvcHMgfSkgPT4ge1xuICBjb25zdCBjdXN0b21GaWVsZFNjaGVtYSA9IGZpZWxkUHJvcHM/LmFkbWluPy5saW5rPy5maWVsZHM7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB7IGNvZGU6IGxvY2FsZSB9ID0gdXNlTG9jYWxlKCk7XG4gIGNvbnN0IFtpbml0aWFsU3RhdGUsIHNldEluaXRpYWxTdGF0ZV0gPSB1c2VTdGF0ZTxGaWVsZHM+KHt9KTtcblxuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKFsndXBsb2FkJywgJ2dlbmVyYWwnXSk7XG4gIGNvbnN0IGVkaXRvciA9IHVzZVNsYXRlKCk7XG4gIGNvbnN0IGNvbmZpZyA9IHVzZUNvbmZpZygpO1xuXG4gIGNvbnN0IFtmaWVsZFNjaGVtYV0gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgY29uc3QgZmllbGRzID0gdHJhbnNmb3JtRXh0cmFGaWVsZHMoY3VzdG9tRmllbGRTY2hlbWEsIGNvbmZpZywgaTE4bik7XG5cbiAgICByZXR1cm4gZmllbGRzO1xuICB9KTtcblxuICBjb25zdCB7IG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCB9ID0gdXNlTW9kYWwoKTtcbiAgY29uc3QgZHJhd2VyU2x1ZyA9IHVzZURyYXdlclNsdWcoJ3JpY2gtdGV4dC1saW5rJyk7XG4gIGNvbnN0IHsgZ2V0RG9jUHJlZmVyZW5jZXMgfSA9IHVzZURvY3VtZW50SW5mbygpO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEVsZW1lbnRCdXR0b25cbiAgICAgICAgZm9ybWF0PVwibGlua1wiXG4gICAgICAgIHRvb2x0aXA9e3QoJ2ZpZWxkczphZGRMaW5rJyl9XG4gICAgICAgIGNsYXNzTmFtZT1cImxpbmtcIlxuICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgaWYgKGlzRWxlbWVudEFjdGl2ZShlZGl0b3IsICdsaW5rJykpIHtcbiAgICAgICAgICAgIHVud3JhcExpbmsoZWRpdG9yKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3Blbk1vZGFsKGRyYXdlclNsdWcpO1xuXG4gICAgICAgICAgICBjb25zdCBpc0NvbGxhcHNlZCA9IGVkaXRvci5zZWxlY3Rpb24gJiYgUmFuZ2UuaXNDb2xsYXBzZWQoZWRpdG9yLnNlbGVjdGlvbik7XG5cbiAgICAgICAgICAgIGlmICghaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBlZGl0b3Iuc2VsZWN0aW9uID8gRWRpdG9yLnN0cmluZyhlZGl0b3IsIGVkaXRvci5zZWxlY3Rpb24pIDogJycsXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgY29uc3QgcHJlZmVyZW5jZXMgPSBhd2FpdCBnZXREb2NQcmVmZXJlbmNlcygpO1xuICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGF3YWl0IGJ1aWxkU3RhdGVGcm9tU2NoZW1hKHsgZmllbGRTY2hlbWEsIHByZWZlcmVuY2VzLCBkYXRhLCB1c2VyLCBvcGVyYXRpb246ICdjcmVhdGUnLCBsb2NhbGUsIHQgfSk7XG4gICAgICAgICAgICAgIHNldEluaXRpYWxTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8TGlua0ljb24gLz5cbiAgICAgIDwvRWxlbWVudEJ1dHRvbj5cbiAgICAgIDxMaW5rRHJhd2VyXG4gICAgICAgIGRyYXdlclNsdWc9e2RyYXdlclNsdWd9XG4gICAgICAgIGhhbmRsZU1vZGFsU3VibWl0PXsoZmllbGRzKSA9PiB7XG4gICAgICAgICAgaW5zZXJ0TGluayhlZGl0b3IsIGZpZWxkcyk7XG4gICAgICAgICAgY2xvc2VNb2RhbChkcmF3ZXJTbHVnKTtcbiAgICAgICAgfX1cbiAgICAgICAgaW5pdGlhbFN0YXRlPXtpbml0aWFsU3RhdGV9XG4gICAgICAgIGZpZWxkU2NoZW1hPXtmaWVsZFNjaGVtYX1cbiAgICAgICAgaGFuZGxlQ2xvc2U9eygpID0+IHtcbiAgICAgICAgICBjbG9zZU1vZGFsKGRyYXdlclNsdWcpO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZyYWdtZW50IiwidXNlU3RhdGUiLCJ1c2VUcmFuc2xhdGlvbiIsIlJlYWN0RWRpdG9yIiwidXNlU2xhdGUiLCJUcmFuc2Zvcm1zIiwiUmFuZ2UiLCJFZGl0b3IiLCJ1c2VNb2RhbCIsIkVsZW1lbnRCdXR0b24iLCJMaW5rSWNvbiIsInJlZHVjZUZpZWxkc1RvVmFsdWVzIiwidXNlQ29uZmlnIiwiaXNFbGVtZW50QWN0aXZlIiwidHJhbnNmb3JtRXh0cmFGaWVsZHMiLCJ1bndyYXBMaW5rIiwiTGlua0RyYXdlciIsImJ1aWxkU3RhdGVGcm9tU2NoZW1hIiwidXNlQXV0aCIsInVzZUxvY2FsZSIsInVzZURyYXdlclNsdWciLCJ1c2VEb2N1bWVudEluZm8iLCJpbnNlcnRMaW5rIiwiZWRpdG9yIiwiZmllbGRzIiwiaXNDb2xsYXBzZWQiLCJzZWxlY3Rpb24iLCJkYXRhIiwibmV3TGluayIsInR5cGUiLCJsaW5rVHlwZSIsInVybCIsImRvYyIsIm5ld1RhYiIsImNoaWxkcmVuIiwiaW5zZXJ0Tm9kZXMiLCJ0ZXh0IiwiU3RyaW5nIiwid3JhcE5vZGVzIiwic3BsaXQiLCJkZWxldGUiLCJhdCIsImZvY3VzIiwicGF0aCIsInVuaXQiLCJtb3ZlIiwiZGlzdGFuY2UiLCJpbnNlcnRUZXh0IiwiTGlua0J1dHRvbiIsImZpZWxkUHJvcHMiLCJjdXN0b21GaWVsZFNjaGVtYSIsImFkbWluIiwibGluayIsInVzZXIiLCJjb2RlIiwibG9jYWxlIiwiaW5pdGlhbFN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwidCIsImkxOG4iLCJjb25maWciLCJmaWVsZFNjaGVtYSIsIm9wZW5Nb2RhbCIsImNsb3NlTW9kYWwiLCJkcmF3ZXJTbHVnIiwiZ2V0RG9jUHJlZmVyZW5jZXMiLCJmb3JtYXQiLCJ0b29sdGlwIiwiY2xhc3NOYW1lIiwib25DbGljayIsInByZWZlcmVuY2VzIiwic3RhdGUiLCJzdHJpbmciLCJvcGVyYXRpb24iLCJoYW5kbGVNb2RhbFN1Ym1pdCIsImhhbmRsZUNsb3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFTQyxRQUFRLEVBQUVDLFFBQVEsUUFBUSxRQUFRO0FBQ2xELFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDL0MsU0FBU0MsV0FBVyxFQUFFQyxRQUFRLFFBQVEsY0FBYztBQUNwRCxTQUFTQyxVQUFVLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxRQUFRLFFBQVE7QUFDbEQsU0FBU0MsUUFBUSxRQUFRLHFCQUFxQjtBQUM5QyxPQUFPQyxtQkFBbUIsZUFBZTtBQUN6QyxPQUFPQyxjQUFjLCtCQUErQjtBQUNwRCxPQUFPQywwQkFBMEIsMkNBQTJDO0FBQzVFLFNBQVNDLFNBQVMsUUFBUSxxQ0FBcUM7QUFDL0QsT0FBT0MscUJBQXFCLGlCQUFpQjtBQUM3QyxTQUFTQyxvQkFBb0IsRUFBRUMsVUFBVSxRQUFRLGVBQWU7QUFDaEUsU0FBU0MsVUFBVSxRQUFRLGdCQUFnQjtBQUUzQyxPQUFPQywwQkFBMEIsMkNBQTJDO0FBQzVFLFNBQVNDLE9BQU8sUUFBUSxtQ0FBbUM7QUFFM0QsU0FBU0MsU0FBUyxRQUFRLHFDQUFxQztBQUMvRCxTQUFTQyxh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