"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LinkButton", {
    enumerable: true,
    get: function() {
        return LinkButton;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _reacti18next = require("react-i18next");
var _slatereact = require("slate-react");
var _slate = require("slate");
var _modal = require("@faceless-ui/modal");
var _Button = /*#__PURE__*/ _interop_require_default(require("../../Button"));
var _Link = /*#__PURE__*/ _interop_require_default(require("../../../../../../icons/Link"));
var _reduceFieldsToValues = /*#__PURE__*/ _interop_require_default(require("../../../../../Form/reduceFieldsToValues"));
var _Config = require("../../../../../../utilities/Config");
var _isActive = /*#__PURE__*/ _interop_require_default(require("../../isActive"));
var _utilities = require("../utilities");
var _LinkDrawer = require("../LinkDrawer");
var _buildStateFromSchema = /*#__PURE__*/ _interop_require_default(require("../../../../../Form/buildStateFromSchema"));
var _Auth = require("../../../../../../utilities/Auth");
var _Locale = require("../../../../../../utilities/Locale");
var _useDrawerSlug = require("../../../../../../elements/Drawer/useDrawerSlug");
var _DocumentInfo = require("../../../../../../utilities/DocumentInfo");
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
/**
 * This function is called when an new link is created - not when an existing link is edited.
 */ var insertLink = function(editor, fields) {
    var isCollapsed = editor.selection && _slate.Range.isCollapsed(editor.selection);
    var data = (0, _reduceFieldsToValues.default)(fields, true);
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
        _slate.Transforms.insertNodes(editor, _object_spread_props(_object_spread({}, newLink), {
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
        _slate.Transforms.wrapNodes(editor, newLink, {
            split: true
        });
        _slate.Transforms.delete(editor, {
            at: editor.selection.focus.path,
            unit: "word"
        });
        _slate.Transforms.move(editor, {
            distance: 1,
            unit: "offset"
        });
        _slate.Transforms.insertText(editor, String(data.text), {
            at: editor.selection.focus.path
        });
    }
    _slatereact.ReactEditor.focus(editor);
};
var LinkButton = function(param) {
    var fieldProps = param.fieldProps;
    var _fieldProps_admin_link, _fieldProps_admin, _fieldProps;
    var customFieldSchema = (_fieldProps = fieldProps) === null || _fieldProps === void 0 ? void 0 : (_fieldProps_admin = _fieldProps.admin) === null || _fieldProps_admin === void 0 ? void 0 : (_fieldProps_admin_link = _fieldProps_admin.link) === null || _fieldProps_admin_link === void 0 ? void 0 : _fieldProps_admin_link.fields;
    var user = (0, _Auth.useAuth)().user;
    var _useLocale = (0, _Locale.useLocale)(), locale = _useLocale.code;
    var _useState = _sliced_to_array((0, _react.useState)({}), 2), initialState = _useState[0], setInitialState = _useState[1];
    var _useTranslation = (0, _reacti18next.useTranslation)([
        "upload",
        "general"
    ]), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var editor = (0, _slatereact.useSlate)();
    var config = (0, _Config.useConfig)();
    var _useState1 = _sliced_to_array((0, _react.useState)(function() {
        var fields = (0, _utilities.transformExtraFields)(customFieldSchema, config, i18n);
        return fields;
    }), 1), fieldSchema = _useState1[0];
    var _useModal = (0, _modal.useModal)(), openModal = _useModal.openModal, closeModal = _useModal.closeModal;
    var drawerSlug = (0, _useDrawerSlug.useDrawerSlug)("rich-text-link");
    var getDocPreferences = (0, _DocumentInfo.useDocumentInfo)().getDocPreferences;
    return /*#__PURE__*/ _react.default.createElement(_react.Fragment, null, /*#__PURE__*/ _react.default.createElement(_Button.default, {
        format: "link",
        tooltip: t("fields:addLink"),
        className: "link",
        onClick: /*#__PURE__*/ _async_to_generator(function() {
            var isCollapsed, data, preferences, state;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!(0, _isActive.default)(editor, "link")) return [
                            3,
                            1
                        ];
                        (0, _utilities.unwrapLink)(editor);
                        return [
                            3,
                            4
                        ];
                    case 1:
                        openModal(drawerSlug);
                        isCollapsed = editor.selection && _slate.Range.isCollapsed(editor.selection);
                        if (!!isCollapsed) return [
                            3,
                            4
                        ];
                        data = {
                            text: editor.selection ? _slate.Editor.string(editor, editor.selection) : ""
                        };
                        return [
                            4,
                            getDocPreferences()
                        ];
                    case 2:
                        preferences = _state.sent();
                        return [
                            4,
                            (0, _buildStateFromSchema.default)({
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
    }, /*#__PURE__*/ _react.default.createElement(_Link.default, null)), /*#__PURE__*/ _react.default.createElement(_LinkDrawer.LinkDrawer, {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL2xpbmsvQnV0dG9uL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IFJlYWN0RWRpdG9yLCB1c2VTbGF0ZSB9IGZyb20gJ3NsYXRlLXJlYWN0JztcbmltcG9ydCB7IFRyYW5zZm9ybXMsIFJhbmdlLCBFZGl0b3IgfSBmcm9tICdzbGF0ZSc7XG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ0BmYWNlbGVzcy11aS9tb2RhbCc7XG5pbXBvcnQgRWxlbWVudEJ1dHRvbiBmcm9tICcuLi8uLi9CdXR0b24nO1xuaW1wb3J0IExpbmtJY29uIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2ljb25zL0xpbmsnO1xuaW1wb3J0IHJlZHVjZUZpZWxkc1RvVmFsdWVzIGZyb20gJy4uLy4uLy4uLy4uLy4uL0Zvcm0vcmVkdWNlRmllbGRzVG9WYWx1ZXMnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgaXNFbGVtZW50QWN0aXZlIGZyb20gJy4uLy4uL2lzQWN0aXZlJztcbmltcG9ydCB7IHRyYW5zZm9ybUV4dHJhRmllbGRzLCB1bndyYXBMaW5rIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcbmltcG9ydCB7IExpbmtEcmF3ZXIgfSBmcm9tICcuLi9MaW5rRHJhd2VyJztcbmltcG9ydCB7IFByb3BzIGFzIFJpY2hUZXh0RmllbGRQcm9wcyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCBidWlsZFN0YXRlRnJvbVNjaGVtYSBmcm9tICcuLi8uLi8uLi8uLi8uLi9Gb3JtL2J1aWxkU3RhdGVGcm9tU2NoZW1hJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvQXV0aCc7XG5pbXBvcnQgeyBGaWVsZHMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9Gb3JtL3R5cGVzJztcbmltcG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9Mb2NhbGUnO1xuaW1wb3J0IHsgdXNlRHJhd2VyU2x1ZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2VsZW1lbnRzL0RyYXdlci91c2VEcmF3ZXJTbHVnJztcbmltcG9ydCB7IHVzZURvY3VtZW50SW5mbyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9Eb2N1bWVudEluZm8nO1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gYW4gbmV3IGxpbmsgaXMgY3JlYXRlZCAtIG5vdCB3aGVuIGFuIGV4aXN0aW5nIGxpbmsgaXMgZWRpdGVkLlxuICovXG5jb25zdCBpbnNlcnRMaW5rID0gKGVkaXRvciwgZmllbGRzKSA9PiB7XG4gIGNvbnN0IGlzQ29sbGFwc2VkID0gZWRpdG9yLnNlbGVjdGlvbiAmJiBSYW5nZS5pc0NvbGxhcHNlZChlZGl0b3Iuc2VsZWN0aW9uKTtcbiAgY29uc3QgZGF0YSA9IHJlZHVjZUZpZWxkc1RvVmFsdWVzKGZpZWxkcywgdHJ1ZSk7XG5cbiAgY29uc3QgbmV3TGluayA9IHtcbiAgICB0eXBlOiAnbGluaycsXG4gICAgbGlua1R5cGU6IGRhdGEubGlua1R5cGUsXG4gICAgdXJsOiBkYXRhLnVybCxcbiAgICBkb2M6IGRhdGEuZG9jLFxuICAgIG5ld1RhYjogZGF0YS5uZXdUYWIsXG4gICAgZmllbGRzOiBkYXRhLmZpZWxkcywgLy8gQW55IGN1c3RvbSB1c2VyLWFkZGVkIGZpZWxkcyBhcmUgcGFydCBvZiBkYXRhLmZpZWxkc1xuICAgIGNoaWxkcmVuOiBbXSxcbiAgfTtcblxuICBpZiAoaXNDb2xsYXBzZWQgfHwgIWVkaXRvci5zZWxlY3Rpb24pIHtcbiAgICAvLyBJZiBzZWxlY3Rpb24gYW5jaG9yIGFuZCBmb2N1cyBhcmUgdGhlIHNhbWUsXG4gICAgLy8gSnVzdCBpbmplY3QgYSBuZXcgbm9kZSB3aXRoIGNoaWxkcmVuIGFscmVhZHkgc2V0XG4gICAgVHJhbnNmb3Jtcy5pbnNlcnROb2RlcyhlZGl0b3IsIHtcbiAgICAgIC4uLm5ld0xpbmssXG4gICAgICBjaGlsZHJlbjogW3sgdGV4dDogU3RyaW5nKGRhdGEudGV4dCkgfV0sXG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoZWRpdG9yLnNlbGVjdGlvbikge1xuICAgIC8vIE90aGVyd2lzZSB3ZSBuZWVkIHRvIHdyYXAgdGhlIHNlbGVjdGVkIG5vZGUgaW4gYSBsaW5rLFxuICAgIC8vIERlbGV0ZSBpdHMgb2xkIHRleHQsXG4gICAgLy8gTW92ZSB0aGUgc2VsZWN0aW9uIG9uZSBwb3NpdGlvbiBmb3J3YXJkIGludG8gdGhlIGxpbmssXG4gICAgLy8gQW5kIGluc2VydCB0aGUgdGV4dCBiYWNrIGludG8gdGhlIG5ldyBsaW5rXG4gICAgVHJhbnNmb3Jtcy53cmFwTm9kZXMoZWRpdG9yLCBuZXdMaW5rLCB7IHNwbGl0OiB0cnVlIH0pO1xuICAgIFRyYW5zZm9ybXMuZGVsZXRlKGVkaXRvciwgeyBhdDogZWRpdG9yLnNlbGVjdGlvbi5mb2N1cy5wYXRoLCB1bml0OiAnd29yZCcgfSk7XG4gICAgVHJhbnNmb3Jtcy5tb3ZlKGVkaXRvciwgeyBkaXN0YW5jZTogMSwgdW5pdDogJ29mZnNldCcgfSk7XG4gICAgVHJhbnNmb3Jtcy5pbnNlcnRUZXh0KGVkaXRvciwgU3RyaW5nKGRhdGEudGV4dCksIHsgYXQ6IGVkaXRvci5zZWxlY3Rpb24uZm9jdXMucGF0aCB9KTtcbiAgfVxuXG4gIFJlYWN0RWRpdG9yLmZvY3VzKGVkaXRvcik7XG59O1xuXG5leHBvcnQgY29uc3QgTGlua0J1dHRvbjogUmVhY3QuRkM8e1xuICBwYXRoOiBzdHJpbmdcbiAgZmllbGRQcm9wczogUmljaFRleHRGaWVsZFByb3BzXG59PiA9ICh7IGZpZWxkUHJvcHMgfSkgPT4ge1xuICBjb25zdCBjdXN0b21GaWVsZFNjaGVtYSA9IGZpZWxkUHJvcHM/LmFkbWluPy5saW5rPy5maWVsZHM7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB7IGNvZGU6IGxvY2FsZSB9ID0gdXNlTG9jYWxlKCk7XG4gIGNvbnN0IFtpbml0aWFsU3RhdGUsIHNldEluaXRpYWxTdGF0ZV0gPSB1c2VTdGF0ZTxGaWVsZHM+KHt9KTtcblxuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKFsndXBsb2FkJywgJ2dlbmVyYWwnXSk7XG4gIGNvbnN0IGVkaXRvciA9IHVzZVNsYXRlKCk7XG4gIGNvbnN0IGNvbmZpZyA9IHVzZUNvbmZpZygpO1xuXG4gIGNvbnN0IFtmaWVsZFNjaGVtYV0gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgY29uc3QgZmllbGRzID0gdHJhbnNmb3JtRXh0cmFGaWVsZHMoY3VzdG9tRmllbGRTY2hlbWEsIGNvbmZpZywgaTE4bik7XG5cbiAgICByZXR1cm4gZmllbGRzO1xuICB9KTtcblxuICBjb25zdCB7IG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCB9ID0gdXNlTW9kYWwoKTtcbiAgY29uc3QgZHJhd2VyU2x1ZyA9IHVzZURyYXdlclNsdWcoJ3JpY2gtdGV4dC1saW5rJyk7XG4gIGNvbnN0IHsgZ2V0RG9jUHJlZmVyZW5jZXMgfSA9IHVzZURvY3VtZW50SW5mbygpO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEVsZW1lbnRCdXR0b25cbiAgICAgICAgZm9ybWF0PVwibGlua1wiXG4gICAgICAgIHRvb2x0aXA9e3QoJ2ZpZWxkczphZGRMaW5rJyl9XG4gICAgICAgIGNsYXNzTmFtZT1cImxpbmtcIlxuICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgaWYgKGlzRWxlbWVudEFjdGl2ZShlZGl0b3IsICdsaW5rJykpIHtcbiAgICAgICAgICAgIHVud3JhcExpbmsoZWRpdG9yKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3Blbk1vZGFsKGRyYXdlclNsdWcpO1xuXG4gICAgICAgICAgICBjb25zdCBpc0NvbGxhcHNlZCA9IGVkaXRvci5zZWxlY3Rpb24gJiYgUmFuZ2UuaXNDb2xsYXBzZWQoZWRpdG9yLnNlbGVjdGlvbik7XG5cbiAgICAgICAgICAgIGlmICghaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBlZGl0b3Iuc2VsZWN0aW9uID8gRWRpdG9yLnN0cmluZyhlZGl0b3IsIGVkaXRvci5zZWxlY3Rpb24pIDogJycsXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgY29uc3QgcHJlZmVyZW5jZXMgPSBhd2FpdCBnZXREb2NQcmVmZXJlbmNlcygpO1xuICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGF3YWl0IGJ1aWxkU3RhdGVGcm9tU2NoZW1hKHsgZmllbGRTY2hlbWEsIHByZWZlcmVuY2VzLCBkYXRhLCB1c2VyLCBvcGVyYXRpb246ICdjcmVhdGUnLCBsb2NhbGUsIHQgfSk7XG4gICAgICAgICAgICAgIHNldEluaXRpYWxTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8TGlua0ljb24gLz5cbiAgICAgIDwvRWxlbWVudEJ1dHRvbj5cbiAgICAgIDxMaW5rRHJhd2VyXG4gICAgICAgIGRyYXdlclNsdWc9e2RyYXdlclNsdWd9XG4gICAgICAgIGhhbmRsZU1vZGFsU3VibWl0PXsoZmllbGRzKSA9PiB7XG4gICAgICAgICAgaW5zZXJ0TGluayhlZGl0b3IsIGZpZWxkcyk7XG4gICAgICAgICAgY2xvc2VNb2RhbChkcmF3ZXJTbHVnKTtcbiAgICAgICAgfX1cbiAgICAgICAgaW5pdGlhbFN0YXRlPXtpbml0aWFsU3RhdGV9XG4gICAgICAgIGZpZWxkU2NoZW1hPXtmaWVsZFNjaGVtYX1cbiAgICAgICAgaGFuZGxlQ2xvc2U9eygpID0+IHtcbiAgICAgICAgICBjbG9zZU1vZGFsKGRyYXdlclNsdWcpO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJMaW5rQnV0dG9uIiwiaW5zZXJ0TGluayIsImVkaXRvciIsImZpZWxkcyIsImlzQ29sbGFwc2VkIiwic2VsZWN0aW9uIiwiUmFuZ2UiLCJkYXRhIiwicmVkdWNlRmllbGRzVG9WYWx1ZXMiLCJuZXdMaW5rIiwidHlwZSIsImxpbmtUeXBlIiwidXJsIiwiZG9jIiwibmV3VGFiIiwiY2hpbGRyZW4iLCJUcmFuc2Zvcm1zIiwiaW5zZXJ0Tm9kZXMiLCJ0ZXh0IiwiU3RyaW5nIiwid3JhcE5vZGVzIiwic3BsaXQiLCJkZWxldGUiLCJhdCIsImZvY3VzIiwicGF0aCIsInVuaXQiLCJtb3ZlIiwiZGlzdGFuY2UiLCJpbnNlcnRUZXh0IiwiUmVhY3RFZGl0b3IiLCJmaWVsZFByb3BzIiwiY3VzdG9tRmllbGRTY2hlbWEiLCJhZG1pbiIsImxpbmsiLCJ1c2VyIiwidXNlQXV0aCIsInVzZUxvY2FsZSIsImNvZGUiLCJsb2NhbGUiLCJ1c2VTdGF0ZSIsImluaXRpYWxTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInVzZVRyYW5zbGF0aW9uIiwidCIsImkxOG4iLCJ1c2VTbGF0ZSIsImNvbmZpZyIsInVzZUNvbmZpZyIsInRyYW5zZm9ybUV4dHJhRmllbGRzIiwiZmllbGRTY2hlbWEiLCJ1c2VNb2RhbCIsIm9wZW5Nb2RhbCIsImNsb3NlTW9kYWwiLCJkcmF3ZXJTbHVnIiwidXNlRHJhd2VyU2x1ZyIsImdldERvY1ByZWZlcmVuY2VzIiwidXNlRG9jdW1lbnRJbmZvIiwiRnJhZ21lbnQiLCJFbGVtZW50QnV0dG9uIiwiZm9ybWF0IiwidG9vbHRpcCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJwcmVmZXJlbmNlcyIsInN0YXRlIiwiaXNFbGVtZW50QWN0aXZlIiwidW53cmFwTGluayIsIkVkaXRvciIsInN0cmluZyIsImJ1aWxkU3RhdGVGcm9tU2NoZW1hIiwib3BlcmF0aW9uIiwiTGlua0ljb24iLCJMaW5rRHJhd2VyIiwiaGFuZGxlTW9kYWxTdWJtaXQiLCJoYW5kbGVDbG9zZSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkEwRGFBOzs7ZUFBQUE7Ozs2REExRDZCOzRCQUNYOzBCQUNPO3FCQUNJO3FCQUNqQjs2REFDQzsyREFDTDsyRUFDWTtzQkFDUDsrREFDRTt5QkFDcUI7MEJBQ3RCOzJFQUVNO29CQUNUO3NCQUVFOzZCQUNJOzRCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEM7O0NBRUMsR0FDRCxJQUFNQyxhQUFhLFNBQUNDLFFBQVFDO0lBQzFCLElBQU1DLGNBQWNGLE9BQU9HLFNBQVMsSUFBSUMsWUFBSyxDQUFDRixXQUFXLENBQUNGLE9BQU9HLFNBQVM7SUFDMUUsSUFBTUUsT0FBT0MsSUFBQUEsNkJBQW9CLEVBQUNMLFFBQVE7SUFFMUMsSUFBTU0sVUFBVTtRQUNkQyxNQUFNO1FBQ05DLFVBQVVKLEtBQUtJLFFBQVE7UUFDdkJDLEtBQUtMLEtBQUtLLEdBQUc7UUFDYkMsS0FBS04sS0FBS00sR0FBRztRQUNiQyxRQUFRUCxLQUFLTyxNQUFNO1FBQ25CWCxRQUFRSSxLQUFLSixNQUFNO1FBQ25CWSxVQUFVLEVBQUU7SUFDZDtJ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