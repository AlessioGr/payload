function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
import React, { useState, useCallback, useMemo, useEffect, useRef } from "react";
import isHotkey from "is-hotkey";
import { createEditor, Transforms, Node, Element as SlateElement, Text } from "slate";
import { Editable, withReact, Slate } from "slate-react";
import { withHistory } from "slate-history";
import { useTranslation } from "react-i18next";
import { richText } from "../../../../../fields/validations";
import useField from "../../useField";
import withCondition from "../../withCondition";
import Label from "../../Label";
import Error from "../../Error";
import leafTypes from "./leaves";
import elementTypes from "./elements";
import toggleLeaf from "./leaves/toggle";
import hotkeys from "./hotkeys";
import enablePlugins from "./enablePlugins";
import defaultValue from "../../../../../fields/richText/defaultValue";
import FieldDescription from "../../FieldDescription";
import withHTML from "./plugins/withHTML";
import listTypes from "./elements/listTypes";
import mergeCustomFunctions from "./mergeCustomFunctions";
import withEnterBreakOut from "./plugins/withEnterBreakOut";
import { getTranslation } from "../../../../../utilities/getTranslation";
import { useEditDepth } from "../../../utilities/EditDepth";
import "./index.scss";
var defaultElements = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "ul",
    "ol",
    "indent",
    "link",
    "relationship",
    "upload"
];
var defaultLeaves = [
    "bold",
    "italic",
    "underline",
    "strikethrough",
    "code"
];
var baseClass = "rich-text";
var RichText = function(props) {
    var _admin, _admin1;
    var pathFromProps = props.path, name = props.name, required = props.required, _props_validate = props.validate, validate = _props_validate === void 0 ? richText : _props_validate, label = props.label, defaultValueFromProps = props.defaultValue, admin = props.admin, tmp = props.admin, _ref = tmp === void 0 ? {} : tmp, readOnly = _ref.readOnly, style = _ref.style, className = _ref.className, width = _ref.width, placeholder = _ref.placeholder, description = _ref.description, condition = _ref.condition, hideGutter = _ref.hideGutter;
    var elements = ((_admin = admin) === null || _admin === void 0 ? void 0 : _admin.elements) || defaultElements;
    var leaves = ((_admin1 = admin) === null || _admin1 === void 0 ? void 0 : _admin1.leaves) || defaultLeaves;
    var path = pathFromProps || name;
    var i18n = useTranslation().i18n;
    var _useState = _sliced_to_array(useState(false), 2), loaded = _useState[0], setLoaded = _useState[1];
    var _useState1 = _sliced_to_array(useState({}), 2), enabledElements = _useState1[0], setEnabledElements = _useState1[1];
    var _useState2 = _sliced_to_array(useState({}), 2), enabledLeaves = _useState2[0], setEnabledLeaves = _useState2[1];
    var editorRef = useRef(null);
    var toolbarRef = useRef(null);
    var drawerDepth = useEditDepth();
    var drawerIsOpen = drawerDepth > 1;
    var renderElement = useCallback(function(param) {
        var attributes = param.attributes, children = param.children, element = param.element;
        var _matchedElement;
        var matchedElement = enabledElements[element.type];
        var Element = (_matchedElement = matchedElement) === null || _matchedElement === void 0 ? void 0 : _matchedElement.Element;
        var attr = _object_spread({}, attributes);
        // this converts text alignment to margin when dealing with void elements
        if (element.textAlign) {
            if (element.type === "relationship" || element.type === "upload") {
                switch(element.textAlign){
                    case "left":
                        attr = _object_spread_props(_object_spread({}, attr), {
                            style: {
                                marginRight: "auto"
                            }
                        });
                        break;
                    case "right":
                        attr = _object_spread_props(_object_spread({}, attr), {
                            style: {
                                marginLeft: "auto"
                            }
                        });
                        break;
                    case "center":
                        attr = _object_spread_props(_object_spread({}, attr), {
                            style: {
                                marginLeft: "auto",
                                marginRight: "auto"
                            }
                        });
                        break;
                    default:
                        attr = _object_spread_props(_object_spread({}, attr), {
                            style: {
                                textAlign: element.textAlign
                            }
                        });
                        break;
                }
            } else if (element.type === "li") {
                switch(element.textAlign){
                    case "right":
                        attr = _object_spread_props(_object_spread({}, attr), {
                            style: {
                                textAlign: "right",
                                listStylePosition: "inside"
                            }
                        });
                        break;
                    case "center":
                        attr = _object_spread_props(_object_spread({}, attr), {
                            style: {
                                textAlign: "center",
                                listStylePosition: "inside"
                            }
                        });
                        break;
                    case "left":
                    default:
                        attr = _object_spread_props(_object_spread({}, attr), {
                            style: {
                                textAlign: "left",
                                listStylePosition: "outside"
                            }
                        });
                        break;
                }
            } else {
                attr = _object_spread_props(_object_spread({}, attr), {
                    style: {
                        textAlign: element.textAlign
                    }
                });
            }
        }
        if (Element) {
            var el = /*#__PURE__*/ React.createElement(Element, {
                attributes: attr,
                element: element,
                path: path,
                fieldProps: props,
                editorRef: editorRef
            }, children);
            return el;
        }
        return /*#__PURE__*/ React.createElement("div", attr, children);
    }, [
        enabledElements,
        path,
        props
    ]);
    var renderLeaf = useCallback(function(param) {
        var attributes = param.attributes, children = param.children, leaf = param.leaf;
        var matchedLeaves = Object.entries(enabledLeaves).filter(function(param) {
            var _param = _sliced_to_array(param, 1), leafName = _param[0];
            return leaf[leafName];
        });
        if (matchedLeaves.length > 0) {
            return matchedLeaves.reduce(function(result, param, i) {
                var _param = _sliced_to_array(param, 1), leafName = _param[0];
                var _enabledLeaves_leafName;
                if ((_enabledLeaves_leafName = enabledLeaves[leafName]) === null || _enabledLeaves_leafName === void 0 ? void 0 : _enabledLeaves_leafName.Leaf) {
                    var _enabledLeaves_leafName1;
                    var Leaf = (_enabledLeaves_leafName1 = enabledLeaves[leafName]) === null || _enabledLeaves_leafName1 === void 0 ? void 0 : _enabledLeaves_leafName1.Leaf;
                    return /*#__PURE__*/ React.createElement(Leaf, {
                        key: i,
                        leaf: leaf,
                        path: path,
                        fieldProps: props,
                        editorRef: editorRef
                    }, result);
                }
                return result;
            }, /*#__PURE__*/ React.createElement("span", attributes, children));
        }
        return /*#__PURE__*/ React.createElement("span", attributes, children);
    }, [
        enabledLeaves,
        path,
        props
    ]);
    var memoizedValidate = useCallback(function(value, validationOptions) {
        return validate(value, _object_spread_props(_object_spread({}, validationOptions), {
            required: required
        }));
    }, [
        validate,
        required
    ]);
    var fieldType = useField({
        path: path,
        validate: memoizedValidate,
        condition: condition
    });
    var value = fieldType.value, showError = fieldType.showError, setValue = fieldType.setValue, errorMessage = fieldType.errorMessage, initialValue = fieldType.initialValue;
    var classes = [
        baseClass,
        "field-type",
        className,
        showError && "error",
        readOnly && "".concat(baseClass, "--read-only"),
        !hideGutter && "".concat(baseClass, "--gutter")
    ].filter(Boolean).join(" ");
    var editor = useMemo(function() {
        var CreatedEditor = withEnterBreakOut(withHistory(withReact(createEditor())));
        CreatedEditor = withHTML(CreatedEditor);
        CreatedEditor = enablePlugins(CreatedEditor, elements);
        CreatedEditor = enablePlugins(CreatedEditor, leaves);
        return CreatedEditor;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        elements,
        leaves,
        path
    ]);
    // All slate changes fire the onChange event
    // including selection changes
    // so we will filter the set_selection operations out
    // and only fire setValue when onChange is because of value
    var handleChange = useCallback(function(val) {
        var ops = editor.operations.filter(function(o) {
            if (o) {
                return o.type !== "set_selection";
            }
            return false;
        });
        if (ops && Array.isArray(ops) && ops.length > 0) {
            if (!readOnly && val !== defaultValue && val !== value) {
                setValue(val);
            }
        }
    }, [
        editor.operations,
        readOnly,
        setValue,
        value
    ]);
    useEffect(function() {
        if (!loaded) {
            var mergedElements = mergeCustomFunctions(elements, elementTypes);
            var mergedLeaves = mergeCustomFunctions(leaves, leafTypes);
            setEnabledElements(mergedElements);
            setEnabledLeaves(mergedLeaves);
            setLoaded(true);
        }
    }, [
        loaded,
        elements,
        leaves
    ]);
    useEffect(function() {
        var setClickableState = function setClickableState(clickState) {
            var _toolbarRef_current;
            var selectors = 'button, a, [role="button"]';
            var toolbarButtons = (_toolbarRef_current = toolbarRef.current) === null || _toolbarRef_current === void 0 ? void 0 : _toolbarRef_current.querySelectorAll(selectors);
            (toolbarButtons || []).forEach(function(child) {
                var isButton = child.tagName === "BUTTON";
                var isDisabling = clickState === "disabled";
                child.setAttribute("tabIndex", isDisabling ? "-1" : "0");
                if (isButton) child.setAttribute("disabled", isDisabling ? "disabled" : null);
            });
        };
        if (loaded && readOnly) {
            setClickableState("disabled");
        }
        return function() {
            if (loaded && readOnly) {
                setClickableState("enabled");
            }
        };
    }, [
        loaded,
        readOnly
    ]);
    // useEffect(() => {
    //   // If there is a change to the initial value, we need to reset Slate history
    //   // and clear selection because the old selection may no longer be valid
    //   // as returned JSON may be modified in hooks and have a different shape
    //   if (editor.selection) {
    //     console.log('deselecting');
    //     ReactEditor.deselect(editor);
    //   }
    // }, [path, editor]);
    if (!loaded) {
        return null;
    }
    var valueToRender = value;
    if (typeof valueToRender === "string") {
        try {
            var parsedJSON = JSON.parse(valueToRender);
            valueToRender = parsedJSON;
        } catch (err) {
            valueToRender = null;
        }
    }
    if (!valueToRender) valueToRender = defaultValueFromProps || defaultValue;
    return /*#__PURE__*/ React.createElement("div", {
        className: classes,
        style: _object_spread_props(_object_spread({}, style), {
            width: width
        })
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ React.createElement(Error, {
        showError: showError,
        message: errorMessage
    }), /*#__PURE__*/ React.createElement(Label, {
        htmlFor: "field-".concat(path.replace(/\./gi, "__")),
        label: label,
        required: required
    }), /*#__PURE__*/ React.createElement(Slate, {
        key: JSON.stringify({
            initialValue: initialValue,
            path: path
        }),
        editor: editor,
        value: valueToRender,
        onChange: handleChange
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__wrapper")
    }, /*#__PURE__*/ React.createElement("div", {
        className: [
            "".concat(baseClass, "__toolbar"),
            drawerIsOpen && "".concat(baseClass, "__drawerIsOpen")
        ].filter(Boolean).join(" "),
        ref: toolbarRef
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__toolbar-wrap")
    }, elements.map(function(element, i) {
        var _element, _elementType;
        var elementName;
        if (typeof element === "object" && ((_element = element) === null || _element === void 0 ? void 0 : _element.name)) elementName = element.name;
        if (typeof element === "string") elementName = element;
        var elementType = enabledElements[elementName];
        var Button = (_elementType = elementType) === null || _elementType === void 0 ? void 0 : _elementType.Button;
        if (Button) {
            return /*#__PURE__*/ React.createElement(Button, {
                fieldProps: props,
                key: i,
                path: path
            });
        }
        return null;
    }), leaves.map(function(leaf, i) {
        var _leaf, _leafType;
        var leafName;
        if (typeof leaf === "object" && ((_leaf = leaf) === null || _leaf === void 0 ? void 0 : _leaf.name)) leafName = leaf.name;
        if (typeof leaf === "string") leafName = leaf;
        var leafType = enabledLeaves[leafName];
        var Button = (_leafType = leafType) === null || _leafType === void 0 ? void 0 : _leafType.Button;
        if (Button) {
            return /*#__PURE__*/ React.createElement(Button, {
                fieldProps: props,
                key: i,
                path: path
            });
        }
        return null;
    }))), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__editor"),
        ref: editorRef
    }, /*#__PURE__*/ React.createElement(Editable, {
        id: "field-".concat(path.replace(/\./gi, "__")),
        className: "".concat(baseClass, "__input"),
        renderElement: renderElement,
        renderLeaf: renderLeaf,
        placeholder: getTranslation(placeholder, i18n),
        spellCheck: true,
        readOnly: readOnly,
        onKeyDown: function(event) {
            if (event.key === "Enter") {
                if (event.shiftKey) {
                    event.preventDefault();
                    editor.insertText("\n");
                } else {
                    var selectedElement = Node.descendant(editor, editor.selection.anchor.path.slice(0, -1));
                    if (SlateElement.isElement(selectedElement)) {
                        // Allow hard enter to "break out" of certain elements
                        if (editor.shouldBreakOutOnEnter(selectedElement)) {
                            event.preventDefault();
                            var selectedLeaf = Node.descendant(editor, editor.selection.anchor.path);
                            if (Text.isText(selectedLeaf) && String(selectedLeaf.text).length === editor.selection.anchor.offset) {
                                Transforms.insertNodes(editor, {
                                    children: [
                                        {
                                            text: ""
                                        }
                                    ]
                                });
                            } else {
                                Transforms.splitNodes(editor);
                                Transforms.setNodes(editor, {});
                            }
                        }
                    }
                }
            }
            if (event.key === "Backspace") {
                var selectedElement1 = Node.descendant(editor, editor.selection.anchor.path.slice(0, -1));
                if (SlateElement.isElement(selectedElement1) && selectedElement1.type === "li") {
                    var selectedLeaf1 = Node.descendant(editor, editor.selection.anchor.path);
                    if (Text.isText(selectedLeaf1) && String(selectedLeaf1.text).length === 0) {
                        event.preventDefault();
                        Transforms.unwrapNodes(editor, {
                            match: function(n) {
                                return SlateElement.isElement(n) && listTypes.includes(n.type);
                            },
                            split: true,
                            mode: "lowest"
                        });
                        Transforms.setNodes(editor, {
                            type: undefined
                        });
                    }
                } else if (editor.isVoid(selectedElement1)) {
                    Transforms.removeNodes(editor);
                }
            }
            Object.keys(hotkeys).forEach(function(hotkey) {
                if (isHotkey(hotkey, event)) {
                    event.preventDefault();
                    var mark = hotkeys[hotkey];
                    toggleLeaf(editor, mark);
                }
            });
        }
    })))), /*#__PURE__*/ React.createElement(FieldDescription, {
        value: value,
        description: description
    })));
};
export default withCondition(RichText);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L1JpY2hUZXh0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpc0hvdGtleSBmcm9tICdpcy1ob3RrZXknO1xuaW1wb3J0IHsgY3JlYXRlRWRpdG9yLCBUcmFuc2Zvcm1zLCBOb2RlLCBFbGVtZW50IGFzIFNsYXRlRWxlbWVudCwgVGV4dCwgQmFzZUVkaXRvciwgQmFzZU9wZXJhdGlvbiB9IGZyb20gJ3NsYXRlJztcbmltcG9ydCB7IFJlYWN0RWRpdG9yLCBFZGl0YWJsZSwgd2l0aFJlYWN0LCBTbGF0ZSB9IGZyb20gJ3NsYXRlLXJlYWN0JztcbmltcG9ydCB7IEhpc3RvcnlFZGl0b3IsIHdpdGhIaXN0b3J5IH0gZnJvbSAnc2xhdGUtaGlzdG9yeSc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgcmljaFRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZHMvdmFsaWRhdGlvbnMnO1xuaW1wb3J0IHVzZUZpZWxkIGZyb20gJy4uLy4uL3VzZUZpZWxkJztcbmltcG9ydCB3aXRoQ29uZGl0aW9uIGZyb20gJy4uLy4uL3dpdGhDb25kaXRpb24nO1xuaW1wb3J0IExhYmVsIGZyb20gJy4uLy4uL0xhYmVsJztcbmltcG9ydCBFcnJvciBmcm9tICcuLi8uLi9FcnJvcic7XG5pbXBvcnQgbGVhZlR5cGVzIGZyb20gJy4vbGVhdmVzJztcbmltcG9ydCBlbGVtZW50VHlwZXMgZnJvbSAnLi9lbGVtZW50cyc7XG5pbXBvcnQgdG9nZ2xlTGVhZiBmcm9tICcuL2xlYXZlcy90b2dnbGUnO1xuaW1wb3J0IGhvdGtleXMgZnJvbSAnLi9ob3RrZXlzJztcbmltcG9ydCBlbmFibGVQbHVnaW5zIGZyb20gJy4vZW5hYmxlUGx1Z2lucyc7XG5pbXBvcnQgZGVmYXVsdFZhbHVlIGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9yaWNoVGV4dC9kZWZhdWx0VmFsdWUnO1xuaW1wb3J0IEZpZWxkRGVzY3JpcHRpb24gZnJvbSAnLi4vLi4vRmllbGREZXNjcmlwdGlvbic7XG5pbXBvcnQgd2l0aEhUTUwgZnJvbSAnLi9wbHVnaW5zL3dpdGhIVE1MJztcbmltcG9ydCB7IEVsZW1lbnROb2RlLCBUZXh0Tm9kZSwgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFJpY2hUZXh0RWxlbWVudCwgUmljaFRleHRMZWFmIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgbGlzdFR5cGVzIGZyb20gJy4vZWxlbWVudHMvbGlzdFR5cGVzJztcbmltcG9ydCBtZXJnZUN1c3RvbUZ1bmN0aW9ucyBmcm9tICcuL21lcmdlQ3VzdG9tRnVuY3Rpb25zJztcbmltcG9ydCB3aXRoRW50ZXJCcmVha091dCBmcm9tICcuL3BsdWdpbnMvd2l0aEVudGVyQnJlYWtPdXQnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgdXNlRWRpdERlcHRoIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0VkaXREZXB0aCc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgZGVmYXVsdEVsZW1lbnRzOiBSaWNoVGV4dEVsZW1lbnRbXSA9IFsnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAndWwnLCAnb2wnLCAnaW5kZW50JywgJ2xpbmsnLCAncmVsYXRpb25zaGlwJywgJ3VwbG9hZCddO1xuY29uc3QgZGVmYXVsdExlYXZlczogUmljaFRleHRMZWFmW10gPSBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdzdHJpa2V0aHJvdWdoJywgJ2NvZGUnXTtcblxuY29uc3QgYmFzZUNsYXNzID0gJ3JpY2gtdGV4dCc7XG5cbmRlY2xhcmUgbW9kdWxlICdzbGF0ZScge1xuICBpbnRlcmZhY2UgQ3VzdG9tVHlwZXMge1xuICAgIEVkaXRvcjogQmFzZUVkaXRvciAmIFJlYWN0RWRpdG9yICYgSGlzdG9yeUVkaXRvclxuICAgIEVsZW1lbnQ6IEVsZW1lbnROb2RlXG4gICAgVGV4dDogVGV4dE5vZGVcbiAgfVxufVxuXG5jb25zdCBSaWNoVGV4dDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBwYXRoOiBwYXRoRnJvbVByb3BzLFxuICAgIG5hbWUsXG4gICAgcmVxdWlyZWQsXG4gICAgdmFsaWRhdGUgPSByaWNoVGV4dCxcbiAgICBsYWJlbCxcbiAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZUZyb21Qcm9wcyxcbiAgICBhZG1pbixcbiAgICBhZG1pbjoge1xuICAgICAgcmVhZE9ubHksXG4gICAgICBzdHlsZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHdpZHRoLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGNvbmRpdGlvbixcbiAgICAgIGhpZGVHdXR0ZXIsXG4gICAgfSA9IHt9LFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZWxlbWVudHM6IFJpY2hUZXh0RWxlbWVudFtdID0gYWRtaW4/LmVsZW1lbnRzIHx8IGRlZmF1bHRFbGVtZW50cztcbiAgY29uc3QgbGVhdmVzOiBSaWNoVGV4dExlYWZbXSA9IGFkbWluPy5sZWF2ZXMgfHwgZGVmYXVsdExlYXZlcztcblxuICBjb25zdCBwYXRoID0gcGF0aEZyb21Qcm9wcyB8fCBuYW1lO1xuXG4gIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2VuYWJsZWRFbGVtZW50cywgc2V0RW5hYmxlZEVsZW1lbnRzXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2VuYWJsZWRMZWF2ZXMsIHNldEVuYWJsZWRMZWF2ZXNdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBlZGl0b3JSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHRvb2xiYXJSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgZHJhd2VyRGVwdGggPSB1c2VFZGl0RGVwdGgoKTtcbiAgY29uc3QgZHJhd2VySXNPcGVuID0gZHJhd2VyRGVwdGggPiAxO1xuXG4gIGNvbnN0IHJlbmRlckVsZW1lbnQgPSB1c2VDYWxsYmFjaygoeyBhdHRyaWJ1dGVzLCBjaGlsZHJlbiwgZWxlbWVudCB9KSA9PiB7XG4gICAgY29uc3QgbWF0Y2hlZEVsZW1lbnQgPSBlbmFibGVkRWxlbWVudHNbZWxlbWVudC50eXBlXTtcbiAgICBjb25zdCBFbGVtZW50ID0gbWF0Y2hlZEVsZW1lbnQ/LkVsZW1lbnQ7XG5cbiAgICBsZXQgYXR0ciA9IHsgLi4uYXR0cmlidXRlcyB9O1xuXG4gICAgLy8gdGhpcyBjb252ZXJ0cyB0ZXh0IGFsaWdubWVudCB0byBtYXJnaW4gd2hlbiBkZWFsaW5nIHdpdGggdm9pZCBlbGVtZW50c1xuICAgIGlmIChlbGVtZW50LnRleHRBbGlnbikge1xuICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ3JlbGF0aW9uc2hpcCcgfHwgZWxlbWVudC50eXBlID09PSAndXBsb2FkJykge1xuICAgICAgICBzd2l0Y2ggKGVsZW1lbnQudGV4dEFsaWduKSB7XG4gICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICBhdHRyID0geyAuLi5hdHRyLCBzdHlsZTogeyBtYXJnaW5SaWdodDogJ2F1dG8nIH0gfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgIGF0dHIgPSB7IC4uLmF0dHIsIHN0eWxlOiB7IG1hcmdpbkxlZnQ6ICdhdXRvJyB9IH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjZW50ZXInOlxuICAgICAgICAgICAgYXR0ciA9IHsgLi4uYXR0ciwgc3R5bGU6IHsgbWFyZ2luTGVmdDogJ2F1dG8nLCBtYXJnaW5SaWdodDogJ2F1dG8nIH0gfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBhdHRyID0geyAuLi5hdHRyLCBzdHlsZTogeyB0ZXh0QWxpZ246IGVsZW1lbnQudGV4dEFsaWduIH0gfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2xpJykge1xuICAgICAgICBzd2l0Y2ggKGVsZW1lbnQudGV4dEFsaWduKSB7XG4gICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgYXR0ciA9IHsgLi4uYXR0ciwgc3R5bGU6IHsgdGV4dEFsaWduOiAncmlnaHQnLCBsaXN0U3R5bGVQb3NpdGlvbjogJ2luc2lkZScgfSB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY2VudGVyJzpcbiAgICAgICAgICAgIGF0dHIgPSB7IC4uLmF0dHIsIHN0eWxlOiB7IHRleHRBbGlnbjogJ2NlbnRlcicsIGxpc3RTdHlsZVBvc2l0aW9uOiAnaW5zaWRlJyB9IH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYXR0ciA9IHsgLi4uYXR0ciwgc3R5bGU6IHsgdGV4dEFsaWduOiAnbGVmdCcsIGxpc3RTdHlsZVBvc2l0aW9uOiAnb3V0c2lkZScgfSB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF0dHIgPSB7IC4uLmF0dHIsIHN0eWxlOiB7IHRleHRBbGlnbjogZWxlbWVudC50ZXh0QWxpZ24gfSB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChFbGVtZW50KSB7XG4gICAgICBjb25zdCBlbCA9IChcbiAgICAgICAgPEVsZW1lbnRcbiAgICAgICAgICBhdHRyaWJ1dGVzPXthdHRyfVxuICAgICAgICAgIGVsZW1lbnQ9e2VsZW1lbnR9XG4gICAgICAgICAgcGF0aD17cGF0aH1cbiAgICAgICAgICBmaWVsZFByb3BzPXtwcm9wc31cbiAgICAgICAgICBlZGl0b3JSZWY9e2VkaXRvclJlZn1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9FbGVtZW50PlxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHsuLi5hdHRyfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LCBbZW5hYmxlZEVsZW1lbnRzLCBwYXRoLCBwcm9wc10pO1xuXG4gIGNvbnN0IHJlbmRlckxlYWYgPSB1c2VDYWxsYmFjaygoeyBhdHRyaWJ1dGVzLCBjaGlsZHJlbiwgbGVhZiB9KSA9PiB7XG4gICAgY29uc3QgbWF0Y2hlZExlYXZlcyA9IE9iamVjdC5lbnRyaWVzKGVuYWJsZWRMZWF2ZXMpLmZpbHRlcigoW2xlYWZOYW1lXSkgPT4gbGVhZltsZWFmTmFtZV0pO1xuXG4gICAgaWYgKG1hdGNoZWRMZWF2ZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIG1hdGNoZWRMZWF2ZXMucmVkdWNlKChyZXN1bHQsIFtsZWFmTmFtZV0sIGkpID0+IHtcbiAgICAgICAgaWYgKGVuYWJsZWRMZWF2ZXNbbGVhZk5hbWVdPy5MZWFmKSB7XG4gICAgICAgICAgY29uc3QgTGVhZiA9IGVuYWJsZWRMZWF2ZXNbbGVhZk5hbWVdPy5MZWFmO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGVhZlxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIGxlYWY9e2xlYWZ9XG4gICAgICAgICAgICAgIHBhdGg9e3BhdGh9XG4gICAgICAgICAgICAgIGZpZWxkUHJvcHM9e3Byb3BzfVxuICAgICAgICAgICAgICBlZGl0b3JSZWY9e2VkaXRvclJlZn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Jlc3VsdH1cbiAgICAgICAgICAgIDwvTGVhZj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0sIDxzcGFuIHsuLi5hdHRyaWJ1dGVzfT57Y2hpbGRyZW59PC9zcGFuPik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIHsuLi5hdHRyaWJ1dGVzfT57Y2hpbGRyZW59PC9zcGFuPlxuICAgICk7XG4gIH0sIFtlbmFibGVkTGVhdmVzLCBwYXRoLCBwcm9wc10pO1xuXG4gIGNvbnN0IG1lbW9pemVkVmFsaWRhdGUgPSB1c2VDYWxsYmFjaygodmFsdWUsIHZhbGlkYXRpb25PcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIHZhbGlkYXRlKHZhbHVlLCB7IC4uLnZhbGlkYXRpb25PcHRpb25zLCByZXF1aXJlZCB9KTtcbiAgfSwgW3ZhbGlkYXRlLCByZXF1aXJlZF0pO1xuXG4gIGNvbnN0IGZpZWxkVHlwZSA9IHVzZUZpZWxkKHtcbiAgICBwYXRoLFxuICAgIHZhbGlkYXRlOiBtZW1vaXplZFZhbGlkYXRlLFxuICAgIGNvbmRpdGlvbixcbiAgfSk7XG5cbiAgY29uc3Qge1xuICAgIHZhbHVlLFxuICAgIHNob3dFcnJvcixcbiAgICBzZXRWYWx1ZSxcbiAgICBlcnJvck1lc3NhZ2UsXG4gICAgaW5pdGlhbFZhbHVlLFxuICB9ID0gZmllbGRUeXBlO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgYmFzZUNsYXNzLFxuICAgICdmaWVsZC10eXBlJyxcbiAgICBjbGFzc05hbWUsXG4gICAgc2hvd0Vycm9yICYmICdlcnJvcicsXG4gICAgcmVhZE9ubHkgJiYgYCR7YmFzZUNsYXNzfS0tcmVhZC1vbmx5YCxcbiAgICAhaGlkZUd1dHRlciAmJiBgJHtiYXNlQ2xhc3N9LS1ndXR0ZXJgLFxuICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cbiAgY29uc3QgZWRpdG9yID0gdXNlTWVtbygoKSA9PiB7XG4gICAgbGV0IENyZWF0ZWRFZGl0b3IgPSB3aXRoRW50ZXJCcmVha091dChcbiAgICAgIHdpdGhIaXN0b3J5KFxuICAgICAgICB3aXRoUmVhY3QoXG4gICAgICAgICAgY3JlYXRlRWRpdG9yKCksXG4gICAgICAgICksXG4gICAgICApLFxuICAgICk7XG5cbiAgICBDcmVhdGVkRWRpdG9yID0gd2l0aEhUTUwoQ3JlYXRlZEVkaXRvcik7XG4gICAgQ3JlYXRlZEVkaXRvciA9IGVuYWJsZVBsdWdpbnMoQ3JlYXRlZEVkaXRvciwgZWxlbWVudHMpO1xuICAgIENyZWF0ZWRFZGl0b3IgPSBlbmFibGVQbHVnaW5zKENyZWF0ZWRFZGl0b3IsIGxlYXZlcyk7XG5cbiAgICByZXR1cm4gQ3JlYXRlZEVkaXRvcjtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtlbGVtZW50cywgbGVhdmVzLCBwYXRoXSk7XG5cbiAgLy8gQWxsIHNsYXRlIGNoYW5nZXMgZmlyZSB0aGUgb25DaGFuZ2UgZXZlbnRcbiAgLy8gaW5jbHVkaW5nIHNlbGVjdGlvbiBjaGFuZ2VzXG4gIC8vIHNvIHdlIHdpbGwgZmlsdGVyIHRoZSBzZXRfc2VsZWN0aW9uIG9wZXJhdGlvbnMgb3V0XG4gIC8vIGFuZCBvbmx5IGZpcmUgc2V0VmFsdWUgd2hlbiBvbkNoYW5nZSBpcyBiZWNhdXNlIG9mIHZhbHVlXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKCh2YWw6IHVua25vd24pID0+IHtcbiAgICBjb25zdCBvcHMgPSBlZGl0b3Iub3BlcmF0aW9ucy5maWx0ZXIoKG86IEJhc2VPcGVyYXRpb24pID0+IHtcbiAgICAgIGlmIChvKSB7XG4gICAgICAgIHJldHVybiBvLnR5cGUgIT09ICdzZXRfc2VsZWN0aW9uJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIGlmIChvcHMgJiYgQXJyYXkuaXNBcnJheShvcHMpICYmIG9wcy5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoIXJlYWRPbmx5ICYmIHZhbCAhPT0gZGVmYXVsdFZhbHVlICYmIHZhbCAhPT0gdmFsdWUpIHtcbiAgICAgICAgc2V0VmFsdWUodmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtlZGl0b3Iub3BlcmF0aW9ucywgcmVhZE9ubHksIHNldFZhbHVlLCB2YWx1ZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFsb2FkZWQpIHtcbiAgICAgIGNvbnN0IG1lcmdlZEVsZW1lbnRzID0gbWVyZ2VDdXN0b21GdW5jdGlvbnMoZWxlbWVudHMsIGVsZW1lbnRUeXBlcyk7XG4gICAgICBjb25zdCBtZXJnZWRMZWF2ZXMgPSBtZXJnZUN1c3RvbUZ1bmN0aW9ucyhsZWF2ZXMsIGxlYWZUeXBlcyk7XG5cbiAgICAgIHNldEVuYWJsZWRFbGVtZW50cyhtZXJnZWRFbGVtZW50cyk7XG4gICAgICBzZXRFbmFibGVkTGVhdmVzKG1lcmdlZExlYXZlcyk7XG5cbiAgICAgIHNldExvYWRlZCh0cnVlKTtcbiAgICB9XG4gIH0sIFtsb2FkZWQsIGVsZW1lbnRzLCBsZWF2ZXNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIHNldENsaWNrYWJsZVN0YXRlKGNsaWNrU3RhdGU6ICdkaXNhYmxlZCcgfCAnZW5hYmxlZCcpIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9ycyA9ICdidXR0b24sIGEsIFtyb2xlPVwiYnV0dG9uXCJdJztcbiAgICAgIGNvbnN0IHRvb2xiYXJCdXR0b25zOiAoSFRNTEJ1dHRvbkVsZW1lbnQgfCBIVE1MQW5jaG9yRWxlbWVudClbXSA9IHRvb2xiYXJSZWYuY3VycmVudD8ucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcnMpO1xuXG4gICAgICAodG9vbGJhckJ1dHRvbnMgfHwgW10pLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQnV0dG9uID0gY2hpbGQudGFnTmFtZSA9PT0gJ0JVVFRPTic7XG4gICAgICAgIGNvbnN0IGlzRGlzYWJsaW5nID0gY2xpY2tTdGF0ZSA9PT0gJ2Rpc2FibGVkJztcbiAgICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCd0YWJJbmRleCcsIGlzRGlzYWJsaW5nID8gJy0xJyA6ICcwJyk7XG4gICAgICAgIGlmIChpc0J1dHRvbikgY2hpbGQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIGlzRGlzYWJsaW5nID8gJ2Rpc2FibGVkJyA6IG51bGwpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGxvYWRlZCAmJiByZWFkT25seSkge1xuICAgICAgc2V0Q2xpY2thYmxlU3RhdGUoJ2Rpc2FibGVkJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChsb2FkZWQgJiYgcmVhZE9ubHkpIHtcbiAgICAgICAgc2V0Q2xpY2thYmxlU3RhdGUoJ2VuYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbbG9hZGVkLCByZWFkT25seV0pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgLy8gSWYgdGhlcmUgaXMgYSBjaGFuZ2UgdG8gdGhlIGluaXRpYWwgdmFsdWUsIHdlIG5lZWQgdG8gcmVzZXQgU2xhdGUgaGlzdG9yeVxuICAvLyAgIC8vIGFuZCBjbGVhciBzZWxlY3Rpb24gYmVjYXVzZSB0aGUgb2xkIHNlbGVjdGlvbiBtYXkgbm8gbG9uZ2VyIGJlIHZhbGlkXG4gIC8vICAgLy8gYXMgcmV0dXJuZWQgSlNPTiBtYXkgYmUgbW9kaWZpZWQgaW4gaG9va3MgYW5kIGhhdmUgYSBkaWZmZXJlbnQgc2hhcGVcbiAgLy8gICBpZiAoZWRpdG9yLnNlbGVjdGlvbikge1xuICAvLyAgICAgY29uc29sZS5sb2coJ2Rlc2VsZWN0aW5nJyk7XG4gIC8vICAgICBSZWFjdEVkaXRvci5kZXNlbGVjdChlZGl0b3IpO1xuICAvLyAgIH1cbiAgLy8gfSwgW3BhdGgsIGVkaXRvcl0pO1xuXG4gIGlmICghbG9hZGVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZXQgdmFsdWVUb1JlbmRlciA9IHZhbHVlO1xuXG4gIGlmICh0eXBlb2YgdmFsdWVUb1JlbmRlciA9PT0gJ3N0cmluZycpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGFyc2VkSlNPTiA9IEpTT04ucGFyc2UodmFsdWVUb1JlbmRlcik7XG4gICAgICB2YWx1ZVRvUmVuZGVyID0gcGFyc2VkSlNPTjtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHZhbHVlVG9SZW5kZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGlmICghdmFsdWVUb1JlbmRlcikgdmFsdWVUb1JlbmRlciA9IGRlZmF1bHRWYWx1ZUZyb21Qcm9wcyB8fCBkZWZhdWx0VmFsdWU7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICBzdHlsZT17e1xuICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgd2lkdGgsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwYH0+XG4gICAgICAgIDxFcnJvclxuICAgICAgICAgIHNob3dFcnJvcj17c2hvd0Vycm9yfVxuICAgICAgICAgIG1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cbiAgICAgICAgLz5cbiAgICAgICAgPExhYmVsXG4gICAgICAgICAgaHRtbEZvcj17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZ2ksICdfXycpfWB9XG4gICAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgLz5cbiAgICAgICAgPFNsYXRlXG4gICAgICAgICAga2V5PXtKU09OLnN0cmluZ2lmeSh7IGluaXRpYWxWYWx1ZSwgcGF0aCB9KX1cbiAgICAgICAgICBlZGl0b3I9e2VkaXRvcn1cbiAgICAgICAgICB2YWx1ZT17dmFsdWVUb1JlbmRlciBhcyBhbnlbXX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3dyYXBwZXJgfT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgICAgICAgICAgYCR7YmFzZUNsYXNzfV9fdG9vbGJhcmAsXG4gICAgICAgICAgICAgICAgZHJhd2VySXNPcGVuICYmIGAke2Jhc2VDbGFzc31fX2RyYXdlcklzT3BlbmAsXG4gICAgICAgICAgICAgIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX1cbiAgICAgICAgICAgICAgcmVmPXt0b29sYmFyUmVmfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdG9vbGJhci13cmFwYH0+XG4gICAgICAgICAgICAgICAge2VsZW1lbnRzLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnROYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnICYmIGVsZW1lbnQ/Lm5hbWUpIGVsZW1lbnROYW1lID0gZWxlbWVudC5uYW1lO1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykgZWxlbWVudE5hbWUgPSBlbGVtZW50O1xuXG4gICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50VHlwZSA9IGVuYWJsZWRFbGVtZW50c1tlbGVtZW50TmFtZV07XG4gICAgICAgICAgICAgICAgICBjb25zdCBCdXR0b24gPSBlbGVtZW50VHlwZT8uQnV0dG9uO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoQnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRQcm9wcz17cHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoPXtwYXRofVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIHtsZWF2ZXMubWFwKChsZWFmLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICBsZXQgbGVhZk5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGVhZiA9PT0gJ29iamVjdCcgJiYgbGVhZj8ubmFtZSkgbGVhZk5hbWUgPSBsZWFmLm5hbWU7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGxlYWYgPT09ICdzdHJpbmcnKSBsZWFmTmFtZSA9IGxlYWY7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IGxlYWZUeXBlID0gZW5hYmxlZExlYXZlc1tsZWFmTmFtZV07XG4gICAgICAgICAgICAgICAgICBjb25zdCBCdXR0b24gPSBsZWFmVHlwZT8uQnV0dG9uO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoQnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRQcm9wcz17cHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoPXtwYXRofVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2VkaXRvcmB9XG4gICAgICAgICAgICAgIHJlZj17ZWRpdG9yUmVmfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RWRpdGFibGVcbiAgICAgICAgICAgICAgICBpZD17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZ2ksICdfXycpfWB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19pbnB1dGB9XG4gICAgICAgICAgICAgICAgcmVuZGVyRWxlbWVudD17cmVuZGVyRWxlbWVudH1cbiAgICAgICAgICAgICAgICByZW5kZXJMZWFmPXtyZW5kZXJMZWFmfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtnZXRUcmFuc2xhdGlvbihwbGFjZWhvbGRlciwgaTE4bil9XG4gICAgICAgICAgICAgICAgc3BlbGxDaGVja1xuICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICAgICAgICBvbktleURvd249eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5pbnNlcnRUZXh0KCdcXG4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBOb2RlLmRlc2NlbmRhbnQoZWRpdG9yLCBlZGl0b3Iuc2VsZWN0aW9uLmFuY2hvci5wYXRoLnNsaWNlKDAsIC0xKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoU2xhdGVFbGVtZW50LmlzRWxlbWVudChzZWxlY3RlZEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBbGxvdyBoYXJkIGVudGVyIHRvIFwiYnJlYWsgb3V0XCIgb2YgY2VydGFpbiBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVkaXRvci5zaG91bGRCcmVha091dE9uRW50ZXIoc2VsZWN0ZWRFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZExlYWYgPSBOb2RlLmRlc2NlbmRhbnQoZWRpdG9yLCBlZGl0b3Iuc2VsZWN0aW9uLmFuY2hvci5wYXRoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoVGV4dC5pc1RleHQoc2VsZWN0ZWRMZWFmKSAmJiBTdHJpbmcoc2VsZWN0ZWRMZWFmLnRleHQpLmxlbmd0aCA9PT0gZWRpdG9yLnNlbGVjdGlvbi5hbmNob3Iub2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNmb3Jtcy5pbnNlcnROb2RlcyhlZGl0b3IsIHsgY2hpbGRyZW46IFt7IHRleHQ6ICcnIH1dIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYW5zZm9ybXMuc3BsaXROb2RlcyhlZGl0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYW5zZm9ybXMuc2V0Tm9kZXMoZWRpdG9yLCB7fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0JhY2tzcGFjZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gTm9kZS5kZXNjZW5kYW50KGVkaXRvciwgZWRpdG9yLnNlbGVjdGlvbi5hbmNob3IucGF0aC5zbGljZSgwLCAtMSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChTbGF0ZUVsZW1lbnQuaXNFbGVtZW50KHNlbGVjdGVkRWxlbWVudCkgJiYgc2VsZWN0ZWRFbGVtZW50LnR5cGUgPT09ICdsaScpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZExlYWYgPSBOb2RlLmRlc2NlbmRhbnQoZWRpdG9yLCBlZGl0b3Iuc2VsZWN0aW9uLmFuY2hvci5wYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoVGV4dC5pc1RleHQoc2VsZWN0ZWRMZWFmKSAmJiBTdHJpbmcoc2VsZWN0ZWRMZWFmLnRleHQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRyYW5zZm9ybXMudW53cmFwTm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoOiAobikgPT4gU2xhdGVFbGVtZW50LmlzRWxlbWVudChuKSAmJiBsaXN0VHlwZXMuaW5jbHVkZXMobi50eXBlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3BsaXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6ICdsb3dlc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRyYW5zZm9ybXMuc2V0Tm9kZXMoZWRpdG9yLCB7IHR5cGU6IHVuZGVmaW5lZCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWRpdG9yLmlzVm9pZChzZWxlY3RlZEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgVHJhbnNmb3Jtcy5yZW1vdmVOb2RlcyhlZGl0b3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGhvdGtleXMpLmZvckVhY2goKGhvdGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNIb3RrZXkoaG90a2V5LCBldmVudCBhcyBhbnkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXJrID0gaG90a2V5c1tob3RrZXldO1xuICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUxlYWYoZWRpdG9yLCBtYXJrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1NsYXRlPlxuICAgICAgICA8RmllbGREZXNjcmlwdGlvblxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCB3aXRoQ29uZGl0aW9uKFJpY2hUZXh0KTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJ1c2VNZW1vIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiaXNIb3RrZXkiLCJjcmVhdGVFZGl0b3IiLCJUcmFuc2Zvcm1zIiwiTm9kZSIsIkVsZW1lbnQiLCJTbGF0ZUVsZW1lbnQiLCJUZXh0IiwiRWRpdGFibGUiLCJ3aXRoUmVhY3QiLCJTbGF0ZSIsIndpdGhIaXN0b3J5IiwidXNlVHJhbnNsYXRpb24iLCJyaWNoVGV4dCIsInVzZUZpZWxkIiwid2l0aENvbmRpdGlvbiIsIkxhYmVsIiwiRXJyb3IiLCJsZWFmVHlwZXMiLCJlbGVtZW50VHlwZXMiLCJ0b2dnbGVMZWFmIiwiaG90a2V5cyIsImVuYWJsZVBsdWdpbnMiLCJkZWZhdWx0VmFsdWUiLCJGaWVsZERlc2NyaXB0aW9uIiwid2l0aEhUTUwiLCJsaXN0VHlwZXMiLCJtZXJnZUN1c3RvbUZ1bmN0aW9ucyIsIndpdGhFbnRlckJyZWFrT3V0IiwiZ2V0VHJhbnNsYXRpb24iLCJ1c2VFZGl0RGVwdGgiLCJkZWZhdWx0RWxlbWVudHMiLCJkZWZhdWx0TGVhdmVzIiwiYmFzZUNsYXNzIiwiUmljaFRleHQiLCJwcm9wcyIsImFkbWluIiwicGF0aCIsInBhdGhGcm9tUHJvcHMiLCJuYW1lIiwicmVxdWlyZWQiLCJ2YWxpZGF0ZSIsImxhYmVsIiwiZGVmYXVsdFZhbHVlRnJvbVByb3BzIiwicmVhZE9ubHkiLCJzdHlsZSIsImNsYXNzTmFtZSIsIndpZHRoIiwicGxhY2Vob2xkZXIiLCJkZXNjcmlwdGlvbiIsImNvbmRpdGlvbiIsImhpZGVHdXR0ZXIiLCJlbGVtZW50cyIsImxlYXZlcyIsImkxOG4iLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJlbmFibGVkRWxlbWVudHMiLCJzZXRFbmFibGVkRWxlbWVudHMiLCJlbmFibGVkTGVhdmVzIiwic2V0RW5hYmxlZExlYXZlcyIsImVkaXRvclJlZiIsInRvb2xiYXJSZWYiLCJkcmF3ZXJEZXB0aCIsImRyYXdlcklzT3BlbiIsInJlbmRlckVsZW1lbnQiLCJhdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJlbGVtZW50IiwibWF0Y2hlZEVsZW1lbnQiLCJ0eXBlIiwiYXR0ciIsInRleHRBbGlnbiIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsImxpc3RTdHlsZVBvc2l0aW9uIiwiZWwiLCJmaWVsZFByb3BzIiwiZGl2IiwicmVuZGVyTGVhZiIsImxlYWYiLCJtYXRjaGVkTGVhdmVzIiwiT2JqZWN0IiwiZW50cmllcyIsImZpbHRlciIsImxlYWZOYW1lIiwibGVuZ3RoIiwicmVkdWNlIiwicmVzdWx0IiwiaSIsIkxlYWYiLCJrZXkiLCJzcGFuIiwibWVtb2l6ZWRWYWxpZGF0ZSIsInZhbHVlIiwidmFsaWRhdGlvbk9wdGlvbnMiLCJmaWVsZFR5cGUiLCJzaG93RXJyb3IiLCJzZXRWYWx1ZSIsImVycm9yTWVzc2FnZSIsImluaXRpYWxWYWx1ZSIsImNsYXNzZXMiLCJCb29sZWFuIiwiam9pbiIsImVkaXRvciIsIkNyZWF0ZWRFZGl0b3IiLCJoYW5kbGVDaGFuZ2UiLCJ2YWwiLCJvcHMiLCJvcGVyYXRpb25zIiwibyIsIkFycmF5IiwiaXNBcnJheSIsIm1lcmdlZEVsZW1lbnRzIiwibWVyZ2VkTGVhdmVzIiwic2V0Q2xpY2thYmxlU3RhdGUiLCJjbGlja1N0YXRlIiwic2VsZWN0b3JzIiwidG9vbGJhckJ1dHRvbnMiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJjaGlsZCIsImlzQnV0dG9uIiwidGFnTmFtZSIsImlzRGlzYWJsaW5nIiwic2V0QXR0cmlidXRlIiwidmFsdWVUb1JlbmRlciIsInBhcnNlZEpTT04iLCJKU09OIiwicGFyc2UiLCJlcnIiLCJtZXNzYWdlIiwiaHRtbEZvciIsInJlcGxhY2UiLCJzdHJpbmdpZnkiLCJvbkNoYW5nZSIsInJlZiIsIm1hcCIsImVsZW1lbnRUeXBlIiwiZWxlbWVudE5hbWUiLCJCdXR0b24iLCJsZWFmVHlwZSIsImlkIiwic3BlbGxDaGVjayIsIm9uS2V5RG93biIsImV2ZW50Iiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsImluc2VydFRleHQiLCJzZWxlY3RlZEVsZW1lbnQiLCJkZXNjZW5kYW50Iiwic2VsZWN0aW9uIiwiYW5jaG9yIiwic2xpY2UiLCJpc0VsZW1lbnQiLCJzaG91bGRCcmVha091dE9uRW50ZXIiLCJzZWxlY3RlZExlYWYiLCJpc1RleHQiLCJTdHJpbmciLCJ0ZXh0Iiwib2Zmc2V0IiwiaW5zZXJ0Tm9kZXMiLCJzcGxpdE5vZGVzIiwic2V0Tm9kZXMiLCJ1bndyYXBOb2RlcyIsIm1hdGNoIiwibiIsImluY2x1ZGVzIiwic3BsaXQiLCJtb2RlIiwidW5kZWZpbmVkIiwiaXNWb2lkIiwicmVtb3ZlTm9kZXMiLCJrZXlzIiwiaG90a2V5IiwibWFyayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFTQyxRQUFRLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLE1BQU0sUUFBUSxRQUFRO0FBQ2pGLE9BQU9DLGNBQWMsWUFBWTtBQUNqQyxTQUFTQyxZQUFZLEVBQUVDLFVBQVUsRUFBRUMsSUFBSSxFQUFFQyxXQUFXQyxZQUFZLEVBQUVDLElBQUksUUFBbUMsUUFBUTtBQUNqSCxTQUFzQkMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLEtBQUssUUFBUSxjQUFjO0FBQ3RFLFNBQXdCQyxXQUFXLFFBQVEsZ0JBQWdCO0FBQzNELFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDL0MsU0FBU0MsUUFBUSxRQUFRLG9DQUFvQztBQUM3RCxPQUFPQyxjQUFjLGlCQUFpQjtBQUN0QyxPQUFPQyxtQkFBbUIsc0JBQXNCO0FBQ2hELE9BQU9DLFdBQVcsY0FBYztBQUNoQyxPQUFPQyxXQUFXLGNBQWM7QUFDaEMsT0FBT0MsZUFBZSxXQUFXO0FBQ2pDLE9BQU9DLGtCQUFrQixhQUFhO0FBQ3RDLE9BQU9DLGdCQUFnQixrQkFBa0I7QUFDekMsT0FBT0MsYUFBYSxZQUFZO0FBQ2hDLE9BQU9DLG1CQUFtQixr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