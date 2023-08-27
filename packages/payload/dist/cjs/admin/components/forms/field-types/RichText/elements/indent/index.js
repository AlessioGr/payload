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
var _slatereact = require("slate-react");
var _slate = require("slate");
var _IndentLeft = /*#__PURE__*/ _interop_require_default(require("../../../../../icons/IndentLeft"));
var _IndentRight = /*#__PURE__*/ _interop_require_default(require("../../../../../icons/IndentRight"));
var _Button = require("../Button");
var _isActive = /*#__PURE__*/ _interop_require_default(require("../isActive"));
var _listTypes = /*#__PURE__*/ _interop_require_default(require("../listTypes"));
var _getCommonBlock = require("../getCommonBlock");
var _unwrapList = require("../unwrapList");
var _isBlockElement = require("../isBlockElement");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var indentType = "indent";
var IndentWithPadding = function(param) {
    var attributes = param.attributes, children = param.children;
    return /*#__PURE__*/ _react.default.createElement("div", _object_spread({
        style: {
            paddingLeft: 25
        }
    }, attributes), children);
};
var indent = {
    Button: function() {
        var editor = (0, _slatereact.useSlate)();
        var handleIndent = (0, _react.useCallback)(function(e, dir) {
            e.preventDefault();
            if (dir === "left") {
                if ((0, _isActive.default)(editor, "li")) {
                    var _getCommonBlock1 = _sliced_to_array((0, _getCommonBlock.getCommonBlock)(editor, function(n) {
                        return _slate.Element.isElement(n) && _listTypes.default.includes(n.type);
                    }), 2), listPath = _getCommonBlock1[1];
                    var matchedParentList = _slate.Editor.above(editor, {
                        at: listPath,
                        match: function(n) {
                            return !_slate.Editor.isEditor(n) && (0, _isBlockElement.isBlockElement)(editor, n);
                        }
                    });
                    if (matchedParentList) {
                        var _matchedParentList = _sliced_to_array(matchedParentList, 2), parentListItem = _matchedParentList[0], parentListItemPath = _matchedParentList[1];
                        if (parentListItem.children.length > 1) {
                            // Remove nested list
                            _slate.Transforms.unwrapNodes(editor, {
                                at: parentListItemPath,
                                match: function(node, path) {
                                    var matches = !_slate.Editor.isEditor(node) && _slate.Element.isElement(node) && _listTypes.default.includes(node.type) && path.length === parentListItemPath.length + 1;
                                    return matches;
                                }
                            });
                            // Set li type on any children that don't have a type
                            _slate.Transforms.setNodes(editor, {
                                type: "li"
                            }, {
                                at: parentListItemPath,
                                match: function(node, path) {
                                    var matches = !_slate.Editor.isEditor(node) && _slate.Element.isElement(node) && node.type !== "li" && path.length === parentListItemPath.length + 1;
                                    return matches;
                                }
                            });
                            // Parent list item path has changed at this point
                            // so we need to re-fetch the parent node
                            var _Editor_node = _sliced_to_array(_slate.Editor.node(editor, parentListItemPath), 1), newParentNode = _Editor_node[0];
                            // If the parent node is an li,
                            // lift all li nodes within
                            if (_slate.Element.isElement(newParentNode) && newParentNode.type === "li") {
                                // Lift the nested lis
                                _slate.Transforms.liftNodes(editor, {
                                    at: parentListItemPath,
                                    match: function(node, path) {
                                        var matches = !_slate.Editor.isEditor(node) && _slate.Element.isElement(node) && path.length === parentListItemPath.length + 1 && node.type === "li";
                                        return matches;
                                    }
                                });
                            }
                        } else {
                            _slate.Transforms.unwrapNodes(editor, {
                                at: parentListItemPath,
                                match: function(node, path) {
                                    return _slate.Element.isElement(node) && node.type === "li" && path.length === parentListItemPath.length;
                                }
                            });
                            _slate.Transforms.unwrapNodes(editor, {
                                match: function(n) {
                                    return _slate.Element.isElement(n) && _listTypes.default.includes(n.type);
                                }
                            });
                        }
                    } else {
                        (0, _unwrapList.unwrapList)(editor, listPath);
                    }
                } else {
                    _slate.Transforms.unwrapNodes(editor, {
                        match: function(n) {
                            return _slate.Element.isElement(n) && n.type === indentType;
                        },
                        split: true,
                        mode: "lowest"
                    });
                }
            }
            if (dir === "right") {
                var isCurrentlyOL = (0, _isActive.default)(editor, "ol");
                var isCurrentlyUL = (0, _isActive.default)(editor, "ul");
                if (isCurrentlyOL || isCurrentlyUL) {
                    // Get the path of the first selected li -
                    // Multiple lis could be selected
                    // and the selection may start in the middle of the first li
                    var _Array_from = _sliced_to_array(Array.from(_slate.Editor.nodes(editor, {
                        mode: "lowest",
                        match: function(node) {
                            return _slate.Element.isElement(node) && node.type === "li";
                        }
                    })), 1), _Array_from_ = _sliced_to_array(_Array_from[0], 2), firstSelectedLIPath = _Array_from_[1];
                    // Is the first selected li the first in its list?
                    var hasPrecedingLI = firstSelectedLIPath[firstSelectedLIPath.length - 1] > 0;
                    // If the first selected li is NOT the first in its list,
                    // we need to inject it into the prior li
                    if (hasPrecedingLI) {
                        var _Editor_previous = _sliced_to_array(_slate.Editor.previous(editor, {
                            at: firstSelectedLIPath
                        }), 2), precedingLIPath = _Editor_previous[1];
                        var _Editor_node1 = _sliced_to_array(_slate.Editor.node(editor, _to_consumable_array(precedingLIPath).concat([
                            0
                        ])), 1), precedingLIChildren = _Editor_node1[0];
                        var precedingLIChildrenIsText = _slate.Text.isText(precedingLIChildren);
                        if (precedingLIChildrenIsText) {
                            // Wrap the prior li text content so that it can be nested next to a list
                            _slate.Transforms.wrapNodes(editor, {
                                children: []
                            }, {
                                at: _to_consumable_array(precedingLIPath).concat([
                                    0
                                ])
                            });
                        }
                        // Move the selected lis after the prior li contents
                        _slate.Transforms.moveNodes(editor, {
                            to: _to_consumable_array(precedingLIPath).concat([
                                1
                            ]),
                            match: function(node) {
                                return _slate.Element.isElement(node) && node.type === "li";
                            },
                            mode: "lowest"
                        });
                        // Wrap the selected lis in a new list
                        _slate.Transforms.wrapNodes(editor, {
                            type: isCurrentlyOL ? "ol" : "ul",
                            children: []
                        }, {
                            match: function(node) {
                                return _slate.Element.isElement(node) && node.type === "li";
                            },
                            mode: "lowest"
                        });
                    } else {
                        // Otherwise, just wrap the node in a list / li
                        _slate.Transforms.wrapNodes(editor, {
                            type: isCurrentlyOL ? "ol" : "ul",
                            children: [
                                {
                                    type: "li",
                                    children: []
                                }
                            ]
                        }, {
                            match: function(node) {
                                return _slate.Element.isElement(node) && node.type === "li";
                            },
                            mode: "lowest"
                        });
                    }
                } else {
                    _slate.Transforms.wrapNodes(editor, {
                        type: indentType,
                        children: []
                    });
                }
            }
            _slatereact.ReactEditor.focus(editor);
        }, [
            editor
        ]);
        var canDeIndent = (0, _isActive.default)(editor, "li") || (0, _isActive.default)(editor, indentType);
        return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("button", {
            type: "button",
            className: [
                _Button.baseClass,
                !canDeIndent && "".concat(_Button.baseClass, "--disabled")
            ].filter(Boolean).join(" "),
            onClick: canDeIndent ? function(e) {
                return handleIndent(e, "left");
            } : undefined
        }, /*#__PURE__*/ _react.default.createElement(_IndentLeft.default, null)), /*#__PURE__*/ _react.default.createElement("button", {
            type: "button",
            className: _Button.baseClass,
            onClick: function(e) {
                return handleIndent(e, "right");
            }
        }, /*#__PURE__*/ _react.default.createElement(_IndentRight.default, null)));
    },
    Element: IndentWithPadding
};
var _default = indent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL2luZGVudC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2xhdGUsIFJlYWN0RWRpdG9yIH0gZnJvbSAnc2xhdGUtcmVhY3QnO1xuaW1wb3J0IHsgRWRpdG9yLCBFbGVtZW50LCBUZXh0LCBUcmFuc2Zvcm1zIH0gZnJvbSAnc2xhdGUnO1xuaW1wb3J0IEluZGVudExlZnQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vaWNvbnMvSW5kZW50TGVmdCc7XG5pbXBvcnQgSW5kZW50UmlnaHQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vaWNvbnMvSW5kZW50UmlnaHQnO1xuaW1wb3J0IHsgYmFzZUNsYXNzIH0gZnJvbSAnLi4vQnV0dG9uJztcbmltcG9ydCBpc0VsZW1lbnRBY3RpdmUgZnJvbSAnLi4vaXNBY3RpdmUnO1xuaW1wb3J0IGxpc3RUeXBlcyBmcm9tICcuLi9saXN0VHlwZXMnO1xuaW1wb3J0IHsgZ2V0Q29tbW9uQmxvY2sgfSBmcm9tICcuLi9nZXRDb21tb25CbG9jayc7XG5pbXBvcnQgeyB1bndyYXBMaXN0IH0gZnJvbSAnLi4vdW53cmFwTGlzdCc7XG5pbXBvcnQgeyBFbGVtZW50Tm9kZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IGlzQmxvY2tFbGVtZW50IH0gZnJvbSAnLi4vaXNCbG9ja0VsZW1lbnQnO1xuXG5jb25zdCBpbmRlbnRUeXBlID0gJ2luZGVudCc7XG5cbmNvbnN0IEluZGVudFdpdGhQYWRkaW5nID0gKHsgYXR0cmlidXRlcywgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2XG4gICAgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDI1IH19XG4gICAgey4uLmF0dHJpYnV0ZXN9XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgaW5kZW50ID0ge1xuICBCdXR0b246ICgpID0+IHtcbiAgICBjb25zdCBlZGl0b3IgPSB1c2VTbGF0ZSgpO1xuICAgIGNvbnN0IGhhbmRsZUluZGVudCA9IHVzZUNhbGxiYWNrKChlLCBkaXIpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKGRpciA9PT0gJ2xlZnQnKSB7XG4gICAgICAgIGlmIChpc0VsZW1lbnRBY3RpdmUoZWRpdG9yLCAnbGknKSkge1xuICAgICAgICAgIGNvbnN0IFssIGxpc3RQYXRoXSA9IGdldENvbW1vbkJsb2NrKGVkaXRvciwgKG4pID0+IEVsZW1lbnQuaXNFbGVtZW50KG4pICYmIGxpc3RUeXBlcy5pbmNsdWRlcyhuLnR5cGUpKTtcblxuICAgICAgICAgIGNvbnN0IG1hdGNoZWRQYXJlbnRMaXN0ID0gRWRpdG9yLmFib3ZlKGVkaXRvciwge1xuICAgICAgICAgICAgYXQ6IGxpc3RQYXRoLFxuICAgICAgICAgICAgbWF0Y2g6IChuOiBFbGVtZW50Tm9kZSkgPT4gIUVkaXRvci5pc0VkaXRvcihuKSAmJiBpc0Jsb2NrRWxlbWVudChlZGl0b3IsIG4pLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKG1hdGNoZWRQYXJlbnRMaXN0KSB7XG4gICAgICAgICAgICBjb25zdCBbcGFyZW50TGlzdEl0ZW0sIHBhcmVudExpc3RJdGVtUGF0aF0gPSBtYXRjaGVkUGFyZW50TGlzdDtcblxuICAgICAgICAgICAgaWYgKHBhcmVudExpc3RJdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgLy8gUmVtb3ZlIG5lc3RlZCBsaXN0XG4gICAgICAgICAgICAgIFRyYW5zZm9ybXMudW53cmFwTm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgICAgICAgYXQ6IHBhcmVudExpc3RJdGVtUGF0aCxcbiAgICAgICAgICAgICAgICBtYXRjaDogKG5vZGUsIHBhdGgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSAhRWRpdG9yLmlzRWRpdG9yKG5vZGUpXG4gICAgICAgICAgICAgICAgICAgICYmIEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpXG4gICAgICAgICAgICAgICAgICAgICYmIGxpc3RUeXBlcy5pbmNsdWRlcyhub2RlLnR5cGUpXG4gICAgICAgICAgICAgICAgICAgICYmIHBhdGgubGVuZ3RoID09PSBwYXJlbnRMaXN0SXRlbVBhdGgubGVuZ3RoICsgMTtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgLy8gU2V0IGxpIHR5cGUgb24gYW55IGNoaWxkcmVuIHRoYXQgZG9uJ3QgaGF2ZSBhIHR5cGVcbiAgICAgICAgICAgICAgVHJhbnNmb3Jtcy5zZXROb2RlcyhlZGl0b3IsIHsgdHlwZTogJ2xpJyB9LCB7XG4gICAgICAgICAgICAgICAgYXQ6IHBhcmVudExpc3RJdGVtUGF0aCxcbiAgICAgICAgICAgICAgICBtYXRjaDogKG5vZGUsIHBhdGgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSAhRWRpdG9yLmlzRWRpdG9yKG5vZGUpXG4gICAgICAgICAgICAgICAgICAgICYmIEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpXG4gICAgICAgICAgICAgICAgICAgICYmIG5vZGUudHlwZSAhPT0gJ2xpJ1xuICAgICAgICAgICAgICAgICAgICAmJiBwYXRoLmxlbmd0aCA9PT0gcGFyZW50TGlzdEl0ZW1QYXRoLmxlbmd0aCArIDE7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaGVzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIC8vIFBhcmVudCBsaXN0IGl0ZW0gcGF0aCBoYXMgY2hhbmdlZCBhdCB0aGlzIHBvaW50XG4gICAgICAgICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gcmUtZmV0Y2ggdGhlIHBhcmVudCBub2RlXG4gICAgICAgICAgICAgIGNvbnN0IFtuZXdQYXJlbnROb2RlXSA9IEVkaXRvci5ub2RlKGVkaXRvciwgcGFyZW50TGlzdEl0ZW1QYXRoKTtcblxuICAgICAgICAgICAgICAvLyBJZiB0aGUgcGFyZW50IG5vZGUgaXMgYW4gbGksXG4gICAgICAgICAgICAgIC8vIGxpZnQgYWxsIGxpIG5vZGVzIHdpdGhpblxuICAgICAgICAgICAgICBpZiAoRWxlbWVudC5pc0VsZW1lbnQobmV3UGFyZW50Tm9kZSkgJiYgbmV3UGFyZW50Tm9kZS50eXBlID09PSAnbGknKSB7XG4gICAgICAgICAgICAgICAgLy8gTGlmdCB0aGUgbmVzdGVkIGxpc1xuICAgICAgICAgICAgICAgIFRyYW5zZm9ybXMubGlmdE5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgICAgICAgYXQ6IHBhcmVudExpc3RJdGVtUGF0aCxcbiAgICAgICAgICAgICAgICAgIG1hdGNoOiAobm9kZSwgcGF0aCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gIUVkaXRvci5pc0VkaXRvcihub2RlKVxuICAgICAgICAgICAgICAgICAgICAgICYmIEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpXG4gICAgICAgICAgICAgICAgICAgICAgJiYgcGF0aC5sZW5ndGggPT09IHBhcmVudExpc3RJdGVtUGF0aC5sZW5ndGggKyAxXG4gICAgICAgICAgICAgICAgICAgICAgJiYgbm9kZS50eXBlID09PSAnbGknO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaGVzO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgVHJhbnNmb3Jtcy51bndyYXBOb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICAgICAgICBhdDogcGFyZW50TGlzdEl0ZW1QYXRoLFxuICAgICAgICAgICAgICAgIG1hdGNoOiAobm9kZSwgcGF0aCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpXG4gICAgICAgICAgICAgICAgICAgICYmIG5vZGUudHlwZSA9PT0gJ2xpJ1xuICAgICAgICAgICAgICAgICAgICAmJiBwYXRoLmxlbmd0aCA9PT0gcGFyZW50TGlzdEl0ZW1QYXRoLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBUcmFuc2Zvcm1zLnVud3JhcE5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgICAgIG1hdGNoOiAobikgPT4gRWxlbWVudC5pc0VsZW1lbnQobikgJiYgbGlzdFR5cGVzLmluY2x1ZGVzKG4udHlwZSksXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1bndyYXBMaXN0KGVkaXRvciwgbGlzdFBhdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBUcmFuc2Zvcm1zLnVud3JhcE5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgbWF0Y2g6IChuKSA9PiBFbGVtZW50LmlzRWxlbWVudChuKSAmJiBuLnR5cGUgPT09IGluZGVudFR5cGUsXG4gICAgICAgICAgICBzcGxpdDogdHJ1ZSxcbiAgICAgICAgICAgIG1vZGU6ICdsb3dlc3QnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXIgPT09ICdyaWdodCcpIHtcbiAgICAgICAgY29uc3QgaXNDdXJyZW50bHlPTCA9IGlzRWxlbWVudEFjdGl2ZShlZGl0b3IsICdvbCcpO1xuICAgICAgICBjb25zdCBpc0N1cnJlbnRseVVMID0gaXNFbGVtZW50QWN0aXZlKGVkaXRvciwgJ3VsJyk7XG5cbiAgICAgICAgaWYgKGlzQ3VycmVudGx5T0wgfHwgaXNDdXJyZW50bHlVTCkge1xuICAgICAgICAgIC8vIEdldCB0aGUgcGF0aCBvZiB0aGUgZmlyc3Qgc2VsZWN0ZWQgbGkgLVxuICAgICAgICAgIC8vIE11bHRpcGxlIGxpcyBjb3VsZCBiZSBzZWxlY3RlZFxuICAgICAgICAgIC8vIGFuZCB0aGUgc2VsZWN0aW9uIG1heSBzdGFydCBpbiB0aGUgbWlkZGxlIG9mIHRoZSBmaXJzdCBsaVxuICAgICAgICAgIGNvbnN0IFtbLCBmaXJzdFNlbGVjdGVkTElQYXRoXV0gPSBBcnJheS5mcm9tKEVkaXRvci5ub2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICAgIG1vZGU6ICdsb3dlc3QnLFxuICAgICAgICAgICAgbWF0Y2g6IChub2RlKSA9PiBFbGVtZW50LmlzRWxlbWVudChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdsaScsXG4gICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgLy8gSXMgdGhlIGZpcnN0IHNlbGVjdGVkIGxpIHRoZSBmaXJzdCBpbiBpdHMgbGlzdD9cbiAgICAgICAgICBjb25zdCBoYXNQcmVjZWRpbmdMSSA9IGZpcnN0U2VsZWN0ZWRMSVBhdGhbZmlyc3RTZWxlY3RlZExJUGF0aC5sZW5ndGggLSAxXSA+IDA7XG5cbiAgICAgICAgICAvLyBJZiB0aGUgZmlyc3Qgc2VsZWN0ZWQgbGkgaXMgTk9UIHRoZSBmaXJzdCBpbiBpdHMgbGlzdCxcbiAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGluamVjdCBpdCBpbnRvIHRoZSBwcmlvciBsaVxuICAgICAgICAgIGlmIChoYXNQcmVjZWRpbmdMSSkge1xuICAgICAgICAgICAgY29uc3QgWywgcHJlY2VkaW5nTElQYXRoXSA9IEVkaXRvci5wcmV2aW91cyhlZGl0b3IsIHtcbiAgICAgICAgICAgICAgYXQ6IGZpcnN0U2VsZWN0ZWRMSVBhdGgsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgW3ByZWNlZGluZ0xJQ2hpbGRyZW5dID0gRWRpdG9yLm5vZGUoZWRpdG9yLCBbLi4ucHJlY2VkaW5nTElQYXRoLCAwXSk7XG4gICAgICAgICAgICBjb25zdCBwcmVjZWRpbmdMSUNoaWxkcmVuSXNUZXh0ID0gVGV4dC5pc1RleHQocHJlY2VkaW5nTElDaGlsZHJlbik7XG5cbiAgICAgICAgICAgIGlmIChwcmVjZWRpbmdMSUNoaWxkcmVuSXNUZXh0KSB7XG4gICAgICAgICAgICAgIC8vIFdyYXAgdGhlIHByaW9yIGxpIHRleHQgY29udGVudCBzbyB0aGF0IGl0IGNhbiBiZSBuZXN0ZWQgbmV4dCB0byBhIGxpc3RcbiAgICAgICAgICAgICAgVHJhbnNmb3Jtcy53cmFwTm9kZXMoZWRpdG9yLCB7IGNoaWxkcmVuOiBbXSB9LCB7IGF0OiBbLi4ucHJlY2VkaW5nTElQYXRoLCAwXSB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTW92ZSB0aGUgc2VsZWN0ZWQgbGlzIGFmdGVyIHRoZSBwcmlvciBsaSBjb250ZW50c1xuICAgICAgICAgICAgVHJhbnNmb3Jtcy5tb3ZlTm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgICAgIHRvOiBbLi4ucHJlY2VkaW5nTElQYXRoLCAxXSxcbiAgICAgICAgICAgICAgbWF0Y2g6IChub2RlKSA9PiBFbGVtZW50LmlzRWxlbWVudChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdsaScsXG4gICAgICAgICAgICAgIG1vZGU6ICdsb3dlc3QnLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFdyYXAgdGhlIHNlbGVjdGVkIGxpcyBpbiBhIG5ldyBsaXN0XG4gICAgICAgICAgICBUcmFuc2Zvcm1zLndyYXBOb2RlcyhcbiAgICAgICAgICAgICAgZWRpdG9yLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogaXNDdXJyZW50bHlPTCA/ICdvbCcgOiAndWwnLCBjaGlsZHJlbjogW10sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtYXRjaDogKG5vZGUpID0+IEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpICYmIG5vZGUudHlwZSA9PT0gJ2xpJyxcbiAgICAgICAgICAgICAgICBtb2RlOiAnbG93ZXN0JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwganVzdCB3cmFwIHRoZSBub2RlIGluIGEgbGlzdCAvIGxpXG4gICAgICAgICAgICBUcmFuc2Zvcm1zLndyYXBOb2RlcyhcbiAgICAgICAgICAgICAgZWRpdG9yLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogaXNDdXJyZW50bHlPTCA/ICdvbCcgOiAndWwnLCBjaGlsZHJlbjogW3sgdHlwZTogJ2xpJywgY2hpbGRyZW46IFtdIH1dLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWF0Y2g6IChub2RlKSA9PiBFbGVtZW50LmlzRWxlbWVudChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdsaScsXG4gICAgICAgICAgICAgICAgbW9kZTogJ2xvd2VzdCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBUcmFuc2Zvcm1zLndyYXBOb2RlcyhlZGl0b3IsIHsgdHlwZTogaW5kZW50VHlwZSwgY2hpbGRyZW46IFtdIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJlYWN0RWRpdG9yLmZvY3VzKGVkaXRvcik7XG4gICAgfSwgW2VkaXRvcl0pO1xuXG4gICAgY29uc3QgY2FuRGVJbmRlbnQgPSBpc0VsZW1lbnRBY3RpdmUoZWRpdG9yLCAnbGknKSB8fCBpc0VsZW1lbnRBY3RpdmUoZWRpdG9yLCBpbmRlbnRUeXBlKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgICAgIGJhc2VDbGFzcyxcbiAgICAgICAgICAgICFjYW5EZUluZGVudCAmJiBgJHtiYXNlQ2xhc3N9LS1kaXNhYmxlZGAsXG4gICAgICAgICAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfVxuICAgICAgICAgIG9uQ2xpY2s9e2NhbkRlSW5kZW50ID8gKGUpID0+IGhhbmRsZUluZGVudChlLCAnbGVmdCcpIDogdW5kZWZpbmVkfVxuICAgICAgICA+XG4gICAgICAgICAgPEluZGVudExlZnQgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2Jhc2VDbGFzc31cbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlSW5kZW50KGUsICdyaWdodCcpfVxuICAgICAgICA+XG4gICAgICAgICAgPEluZGVudFJpZ2h0IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9LFxuICBFbGVtZW50OiBJbmRlbnRXaXRoUGFkZGluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluZGVudDtcbiJdLCJuYW1lcyI6WyJpbmRlbnRUeXBlIiwiSW5kZW50V2l0aFBhZGRpbmciLCJhdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJkaXYiLCJzdHlsZSIsInBhZGRpbmdMZWZ0IiwiaW5kZW50IiwiQnV0dG9uIiwiZWRpdG9yIiwidXNlU2xhdGUiLCJoYW5kbGVJbmRlbnQiLCJ1c2VDYWxsYmFjayIsImUiLCJkaXIiLCJwcmV2ZW50RGVmYXVsdCIsImlzRWxlbWVudEFjdGl2ZSIsImdldENvbW1vbkJsb2NrIiwibiIsIkVsZW1lbnQiLCJpc0VsZW1lbnQiLCJsaXN0VHlwZXMiLCJpbmNsdWRlcyIsInR5cGUiLCJsaXN0UGF0aCIsIm1hdGNoZWRQYXJlbnRMaXN0IiwiRWRpdG9yIiwiYWJvdmUiLCJhdCIsIm1hdGNoIiwiaXNFZGl0b3IiLCJpc0Jsb2NrRWxlbWVudCIsInBhcmVudExpc3RJdGVtIiwicGFyZW50TGlzdEl0ZW1QYXRoIiwibGVuZ3RoIiwiVHJhbnNmb3JtcyIsInVud3JhcE5vZGVzIiwibm9kZSIsInBhdGgiLCJtYXRjaGVzIiwic2V0Tm9kZXMiLCJuZXdQYXJlbnROb2RlIiwibGlmdE5vZGVzIiwidW53cmFwTGlzdCIsInNwbGl0IiwibW9kZSIsImlzQ3VycmVudGx5T0wiLCJpc0N1cnJlbnRseVVMIiwiQXJyYXkiLCJmcm9tIiwibm9kZXMiLCJmaXJzdFNlbGVjdGVkTElQYXRoIiwiaGFzUHJlY2VkaW5nTEkiLCJwcmV2aW91cyIsInByZWNlZGluZ0xJUGF0aCIsInByZWNlZGluZ0xJQ2hpbGRyZW4iLCJwcmVjZWRpbmdMSUNoaWxkcmVuSXNUZXh0IiwiVGV4dCIsImlzVGV4dCIsIndyYXBOb2RlcyIsIm1vdmVOb2RlcyIsInRvIiwiUmVhY3RFZGl0b3IiLCJmb2N1cyIsImNhbkRlSW5kZW50IiwiUmVhY3QiLCJGcmFnbWVudCIsImJ1dHRvbiIsImNsYXNzTmFtZSIsImJhc2VDbGFzcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwib25DbGljayIsInVuZGVmaW5lZCIsIkluZGVudExlZnQiLCJJbmRlbnRSaWdodCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFvTkE7OztlQUFBOzs7NkRBcE5tQzswQkFDRztxQkFDWTtpRUFDM0I7a0VBQ0M7c0JBQ0U7K0RBQ0U7Z0VBQ047OEJBQ1M7MEJBQ0o7OEJBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQU1BLGFBQWE7QUFFbkIsSUFBTUMsb0JBQW9CO1FBQUdDLG1CQUFBQSxZQUFZQyxpQkFBQUE7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