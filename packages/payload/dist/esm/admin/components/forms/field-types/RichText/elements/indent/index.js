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
import React, { useCallback } from "react";
import { useSlate, ReactEditor } from "slate-react";
import { Editor, Element, Text, Transforms } from "slate";
import IndentLeft from "../../../../../icons/IndentLeft";
import IndentRight from "../../../../../icons/IndentRight";
import { baseClass } from "../Button";
import isElementActive from "../isActive";
import listTypes from "../listTypes";
import { getCommonBlock } from "../getCommonBlock";
import { unwrapList } from "../unwrapList";
import { isBlockElement } from "../isBlockElement";
var indentType = "indent";
var IndentWithPadding = function(param) {
    var attributes = param.attributes, children = param.children;
    return /*#__PURE__*/ React.createElement("div", _object_spread({
        style: {
            paddingLeft: 25
        }
    }, attributes), children);
};
var indent = {
    Button: function() {
        var editor = useSlate();
        var handleIndent = useCallback(function(e, dir) {
            e.preventDefault();
            if (dir === "left") {
                if (isElementActive(editor, "li")) {
                    var _getCommonBlock = _sliced_to_array(getCommonBlock(editor, function(n) {
                        return Element.isElement(n) && listTypes.includes(n.type);
                    }), 2), listPath = _getCommonBlock[1];
                    var matchedParentList = Editor.above(editor, {
                        at: listPath,
                        match: function(n) {
                            return !Editor.isEditor(n) && isBlockElement(editor, n);
                        }
                    });
                    if (matchedParentList) {
                        var _matchedParentList = _sliced_to_array(matchedParentList, 2), parentListItem = _matchedParentList[0], parentListItemPath = _matchedParentList[1];
                        if (parentListItem.children.length > 1) {
                            // Remove nested list
                            Transforms.unwrapNodes(editor, {
                                at: parentListItemPath,
                                match: function(node, path) {
                                    var matches = !Editor.isEditor(node) && Element.isElement(node) && listTypes.includes(node.type) && path.length === parentListItemPath.length + 1;
                                    return matches;
                                }
                            });
                            // Set li type on any children that don't have a type
                            Transforms.setNodes(editor, {
                                type: "li"
                            }, {
                                at: parentListItemPath,
                                match: function(node, path) {
                                    var matches = !Editor.isEditor(node) && Element.isElement(node) && node.type !== "li" && path.length === parentListItemPath.length + 1;
                                    return matches;
                                }
                            });
                            // Parent list item path has changed at this point
                            // so we need to re-fetch the parent node
                            var _Editor_node = _sliced_to_array(Editor.node(editor, parentListItemPath), 1), newParentNode = _Editor_node[0];
                            // If the parent node is an li,
                            // lift all li nodes within
                            if (Element.isElement(newParentNode) && newParentNode.type === "li") {
                                // Lift the nested lis
                                Transforms.liftNodes(editor, {
                                    at: parentListItemPath,
                                    match: function(node, path) {
                                        var matches = !Editor.isEditor(node) && Element.isElement(node) && path.length === parentListItemPath.length + 1 && node.type === "li";
                                        return matches;
                                    }
                                });
                            }
                        } else {
                            Transforms.unwrapNodes(editor, {
                                at: parentListItemPath,
                                match: function(node, path) {
                                    return Element.isElement(node) && node.type === "li" && path.length === parentListItemPath.length;
                                }
                            });
                            Transforms.unwrapNodes(editor, {
                                match: function(n) {
                                    return Element.isElement(n) && listTypes.includes(n.type);
                                }
                            });
                        }
                    } else {
                        unwrapList(editor, listPath);
                    }
                } else {
                    Transforms.unwrapNodes(editor, {
                        match: function(n) {
                            return Element.isElement(n) && n.type === indentType;
                        },
                        split: true,
                        mode: "lowest"
                    });
                }
            }
            if (dir === "right") {
                var isCurrentlyOL = isElementActive(editor, "ol");
                var isCurrentlyUL = isElementActive(editor, "ul");
                if (isCurrentlyOL || isCurrentlyUL) {
                    // Get the path of the first selected li -
                    // Multiple lis could be selected
                    // and the selection may start in the middle of the first li
                    var _Array_from = _sliced_to_array(Array.from(Editor.nodes(editor, {
                        mode: "lowest",
                        match: function(node) {
                            return Element.isElement(node) && node.type === "li";
                        }
                    })), 1), _Array_from_ = _sliced_to_array(_Array_from[0], 2), firstSelectedLIPath = _Array_from_[1];
                    // Is the first selected li the first in its list?
                    var hasPrecedingLI = firstSelectedLIPath[firstSelectedLIPath.length - 1] > 0;
                    // If the first selected li is NOT the first in its list,
                    // we need to inject it into the prior li
                    if (hasPrecedingLI) {
                        var _Editor_previous = _sliced_to_array(Editor.previous(editor, {
                            at: firstSelectedLIPath
                        }), 2), precedingLIPath = _Editor_previous[1];
                        var _Editor_node1 = _sliced_to_array(Editor.node(editor, _to_consumable_array(precedingLIPath).concat([
                            0
                        ])), 1), precedingLIChildren = _Editor_node1[0];
                        var precedingLIChildrenIsText = Text.isText(precedingLIChildren);
                        if (precedingLIChildrenIsText) {
                            // Wrap the prior li text content so that it can be nested next to a list
                            Transforms.wrapNodes(editor, {
                                children: []
                            }, {
                                at: _to_consumable_array(precedingLIPath).concat([
                                    0
                                ])
                            });
                        }
                        // Move the selected lis after the prior li contents
                        Transforms.moveNodes(editor, {
                            to: _to_consumable_array(precedingLIPath).concat([
                                1
                            ]),
                            match: function(node) {
                                return Element.isElement(node) && node.type === "li";
                            },
                            mode: "lowest"
                        });
                        // Wrap the selected lis in a new list
                        Transforms.wrapNodes(editor, {
                            type: isCurrentlyOL ? "ol" : "ul",
                            children: []
                        }, {
                            match: function(node) {
                                return Element.isElement(node) && node.type === "li";
                            },
                            mode: "lowest"
                        });
                    } else {
                        // Otherwise, just wrap the node in a list / li
                        Transforms.wrapNodes(editor, {
                            type: isCurrentlyOL ? "ol" : "ul",
                            children: [
                                {
                                    type: "li",
                                    children: []
                                }
                            ]
                        }, {
                            match: function(node) {
                                return Element.isElement(node) && node.type === "li";
                            },
                            mode: "lowest"
                        });
                    }
                } else {
                    Transforms.wrapNodes(editor, {
                        type: indentType,
                        children: []
                    });
                }
            }
            ReactEditor.focus(editor);
        }, [
            editor
        ]);
        var canDeIndent = isElementActive(editor, "li") || isElementActive(editor, indentType);
        return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("button", {
            type: "button",
            className: [
                baseClass,
                !canDeIndent && "".concat(baseClass, "--disabled")
            ].filter(Boolean).join(" "),
            onClick: canDeIndent ? function(e) {
                return handleIndent(e, "left");
            } : undefined
        }, /*#__PURE__*/ React.createElement(IndentLeft, null)), /*#__PURE__*/ React.createElement("button", {
            type: "button",
            className: baseClass,
            onClick: function(e) {
                return handleIndent(e, "right");
            }
        }, /*#__PURE__*/ React.createElement(IndentRight, null)));
    },
    Element: IndentWithPadding
};
export default indent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL2luZGVudC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2xhdGUsIFJlYWN0RWRpdG9yIH0gZnJvbSAnc2xhdGUtcmVhY3QnO1xuaW1wb3J0IHsgRWRpdG9yLCBFbGVtZW50LCBUZXh0LCBUcmFuc2Zvcm1zIH0gZnJvbSAnc2xhdGUnO1xuaW1wb3J0IEluZGVudExlZnQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vaWNvbnMvSW5kZW50TGVmdCc7XG5pbXBvcnQgSW5kZW50UmlnaHQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vaWNvbnMvSW5kZW50UmlnaHQnO1xuaW1wb3J0IHsgYmFzZUNsYXNzIH0gZnJvbSAnLi4vQnV0dG9uJztcbmltcG9ydCBpc0VsZW1lbnRBY3RpdmUgZnJvbSAnLi4vaXNBY3RpdmUnO1xuaW1wb3J0IGxpc3RUeXBlcyBmcm9tICcuLi9saXN0VHlwZXMnO1xuaW1wb3J0IHsgZ2V0Q29tbW9uQmxvY2sgfSBmcm9tICcuLi9nZXRDb21tb25CbG9jayc7XG5pbXBvcnQgeyB1bndyYXBMaXN0IH0gZnJvbSAnLi4vdW53cmFwTGlzdCc7XG5pbXBvcnQgeyBFbGVtZW50Tm9kZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IGlzQmxvY2tFbGVtZW50IH0gZnJvbSAnLi4vaXNCbG9ja0VsZW1lbnQnO1xuXG5jb25zdCBpbmRlbnRUeXBlID0gJ2luZGVudCc7XG5cbmNvbnN0IEluZGVudFdpdGhQYWRkaW5nID0gKHsgYXR0cmlidXRlcywgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2XG4gICAgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDI1IH19XG4gICAgey4uLmF0dHJpYnV0ZXN9XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgaW5kZW50ID0ge1xuICBCdXR0b246ICgpID0+IHtcbiAgICBjb25zdCBlZGl0b3IgPSB1c2VTbGF0ZSgpO1xuICAgIGNvbnN0IGhhbmRsZUluZGVudCA9IHVzZUNhbGxiYWNrKChlLCBkaXIpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKGRpciA9PT0gJ2xlZnQnKSB7XG4gICAgICAgIGlmIChpc0VsZW1lbnRBY3RpdmUoZWRpdG9yLCAnbGknKSkge1xuICAgICAgICAgIGNvbnN0IFssIGxpc3RQYXRoXSA9IGdldENvbW1vbkJsb2NrKGVkaXRvciwgKG4pID0+IEVsZW1lbnQuaXNFbGVtZW50KG4pICYmIGxpc3RUeXBlcy5pbmNsdWRlcyhuLnR5cGUpKTtcblxuICAgICAgICAgIGNvbnN0IG1hdGNoZWRQYXJlbnRMaXN0ID0gRWRpdG9yLmFib3ZlKGVkaXRvciwge1xuICAgICAgICAgICAgYXQ6IGxpc3RQYXRoLFxuICAgICAgICAgICAgbWF0Y2g6IChuOiBFbGVtZW50Tm9kZSkgPT4gIUVkaXRvci5pc0VkaXRvcihuKSAmJiBpc0Jsb2NrRWxlbWVudChlZGl0b3IsIG4pLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKG1hdGNoZWRQYXJlbnRMaXN0KSB7XG4gICAgICAgICAgICBjb25zdCBbcGFyZW50TGlzdEl0ZW0sIHBhcmVudExpc3RJdGVtUGF0aF0gPSBtYXRjaGVkUGFyZW50TGlzdDtcblxuICAgICAgICAgICAgaWYgKHBhcmVudExpc3RJdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgLy8gUmVtb3ZlIG5lc3RlZCBsaXN0XG4gICAgICAgICAgICAgIFRyYW5zZm9ybXMudW53cmFwTm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgICAgICAgYXQ6IHBhcmVudExpc3RJdGVtUGF0aCxcbiAgICAgICAgICAgICAgICBtYXRjaDogKG5vZGUsIHBhdGgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSAhRWRpdG9yLmlzRWRpdG9yKG5vZGUpXG4gICAgICAgICAgICAgICAgICAgICYmIEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpXG4gICAgICAgICAgICAgICAgICAgICYmIGxpc3RUeXBlcy5pbmNsdWRlcyhub2RlLnR5cGUpXG4gICAgICAgICAgICAgICAgICAgICYmIHBhdGgubGVuZ3RoID09PSBwYXJlbnRMaXN0SXRlbVBhdGgubGVuZ3RoICsgMTtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgLy8gU2V0IGxpIHR5cGUgb24gYW55IGNoaWxkcmVuIHRoYXQgZG9uJ3QgaGF2ZSBhIHR5cGVcbiAgICAgICAgICAgICAgVHJhbnNmb3Jtcy5zZXROb2RlcyhlZGl0b3IsIHsgdHlwZTogJ2xpJyB9LCB7XG4gICAgICAgICAgICAgICAgYXQ6IHBhcmVudExpc3RJdGVtUGF0aCxcbiAgICAgICAgICAgICAgICBtYXRjaDogKG5vZGUsIHBhdGgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSAhRWRpdG9yLmlzRWRpdG9yKG5vZGUpXG4gICAgICAgICAgICAgICAgICAgICYmIEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpXG4gICAgICAgICAgICAgICAgICAgICYmIG5vZGUudHlwZSAhPT0gJ2xpJ1xuICAgICAgICAgICAgICAgICAgICAmJiBwYXRoLmxlbmd0aCA9PT0gcGFyZW50TGlzdEl0ZW1QYXRoLmxlbmd0aCArIDE7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaGVzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIC8vIFBhcmVudCBsaXN0IGl0ZW0gcGF0aCBoYXMgY2hhbmdlZCBhdCB0aGlzIHBvaW50XG4gICAgICAgICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gcmUtZmV0Y2ggdGhlIHBhcmVudCBub2RlXG4gICAgICAgICAgICAgIGNvbnN0IFtuZXdQYXJlbnROb2RlXSA9IEVkaXRvci5ub2RlKGVkaXRvciwgcGFyZW50TGlzdEl0ZW1QYXRoKTtcblxuICAgICAgICAgICAgICAvLyBJZiB0aGUgcGFyZW50IG5vZGUgaXMgYW4gbGksXG4gICAgICAgICAgICAgIC8vIGxpZnQgYWxsIGxpIG5vZGVzIHdpdGhpblxuICAgICAgICAgICAgICBpZiAoRWxlbWVudC5pc0VsZW1lbnQobmV3UGFyZW50Tm9kZSkgJiYgbmV3UGFyZW50Tm9kZS50eXBlID09PSAnbGknKSB7XG4gICAgICAgICAgICAgICAgLy8gTGlmdCB0aGUgbmVzdGVkIGxpc1xuICAgICAgICAgICAgICAgIFRyYW5zZm9ybXMubGlmdE5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgICAgICAgYXQ6IHBhcmVudExpc3RJdGVtUGF0aCxcbiAgICAgICAgICAgICAgICAgIG1hdGNoOiAobm9kZSwgcGF0aCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gIUVkaXRvci5pc0VkaXRvcihub2RlKVxuICAgICAgICAgICAgICAgICAgICAgICYmIEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpXG4gICAgICAgICAgICAgICAgICAgICAgJiYgcGF0aC5sZW5ndGggPT09IHBhcmVudExpc3RJdGVtUGF0aC5sZW5ndGggKyAxXG4gICAgICAgICAgICAgICAgICAgICAgJiYgbm9kZS50eXBlID09PSAnbGknO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaGVzO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgVHJhbnNmb3Jtcy51bndyYXBOb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICAgICAgICBhdDogcGFyZW50TGlzdEl0ZW1QYXRoLFxuICAgICAgICAgICAgICAgIG1hdGNoOiAobm9kZSwgcGF0aCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpXG4gICAgICAgICAgICAgICAgICAgICYmIG5vZGUudHlwZSA9PT0gJ2xpJ1xuICAgICAgICAgICAgICAgICAgICAmJiBwYXRoLmxlbmd0aCA9PT0gcGFyZW50TGlzdEl0ZW1QYXRoLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBUcmFuc2Zvcm1zLnVud3JhcE5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgICAgIG1hdGNoOiAobikgPT4gRWxlbWVudC5pc0VsZW1lbnQobikgJiYgbGlzdFR5cGVzLmluY2x1ZGVzKG4udHlwZSksXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1bndyYXBMaXN0KGVkaXRvciwgbGlzdFBhdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBUcmFuc2Zvcm1zLnVud3JhcE5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgbWF0Y2g6IChuKSA9PiBFbGVtZW50LmlzRWxlbWVudChuKSAmJiBuLnR5cGUgPT09IGluZGVudFR5cGUsXG4gICAgICAgICAgICBzcGxpdDogdHJ1ZSxcbiAgICAgICAgICAgIG1vZGU6ICdsb3dlc3QnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXIgPT09ICdyaWdodCcpIHtcbiAgICAgICAgY29uc3QgaXNDdXJyZW50bHlPTCA9IGlzRWxlbWVudEFjdGl2ZShlZGl0b3IsICdvbCcpO1xuICAgICAgICBjb25zdCBpc0N1cnJlbnRseVVMID0gaXNFbGVtZW50QWN0aXZlKGVkaXRvciwgJ3VsJyk7XG5cbiAgICAgICAgaWYgKGlzQ3VycmVudGx5T0wgfHwgaXNDdXJyZW50bHlVTCkge1xuICAgICAgICAgIC8vIEdldCB0aGUgcGF0aCBvZiB0aGUgZmlyc3Qgc2VsZWN0ZWQgbGkgLVxuICAgICAgICAgIC8vIE11bHRpcGxlIGxpcyBjb3VsZCBiZSBzZWxlY3RlZFxuICAgICAgICAgIC8vIGFuZCB0aGUgc2VsZWN0aW9uIG1heSBzdGFydCBpbiB0aGUgbWlkZGxlIG9mIHRoZSBmaXJzdCBsaVxuICAgICAgICAgIGNvbnN0IFtbLCBmaXJzdFNlbGVjdGVkTElQYXRoXV0gPSBBcnJheS5mcm9tKEVkaXRvci5ub2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICAgIG1vZGU6ICdsb3dlc3QnLFxuICAgICAgICAgICAgbWF0Y2g6IChub2RlKSA9PiBFbGVtZW50LmlzRWxlbWVudChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdsaScsXG4gICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgLy8gSXMgdGhlIGZpcnN0IHNlbGVjdGVkIGxpIHRoZSBmaXJzdCBpbiBpdHMgbGlzdD9cbiAgICAgICAgICBjb25zdCBoYXNQcmVjZWRpbmdMSSA9IGZpcnN0U2VsZWN0ZWRMSVBhdGhbZmlyc3RTZWxlY3RlZExJUGF0aC5sZW5ndGggLSAxXSA+IDA7XG5cbiAgICAgICAgICAvLyBJZiB0aGUgZmlyc3Qgc2VsZWN0ZWQgbGkgaXMgTk9UIHRoZSBmaXJzdCBpbiBpdHMgbGlzdCxcbiAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGluamVjdCBpdCBpbnRvIHRoZSBwcmlvciBsaVxuICAgICAgICAgIGlmIChoYXNQcmVjZWRpbmdMSSkge1xuICAgICAgICAgICAgY29uc3QgWywgcHJlY2VkaW5nTElQYXRoXSA9IEVkaXRvci5wcmV2aW91cyhlZGl0b3IsIHtcbiAgICAgICAgICAgICAgYXQ6IGZpcnN0U2VsZWN0ZWRMSVBhdGgsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgW3ByZWNlZGluZ0xJQ2hpbGRyZW5dID0gRWRpdG9yLm5vZGUoZWRpdG9yLCBbLi4ucHJlY2VkaW5nTElQYXRoLCAwXSk7XG4gICAgICAgICAgICBjb25zdCBwcmVjZWRpbmdMSUNoaWxkcmVuSXNUZXh0ID0gVGV4dC5pc1RleHQocHJlY2VkaW5nTElDaGlsZHJlbik7XG5cbiAgICAgICAgICAgIGlmIChwcmVjZWRpbmdMSUNoaWxkcmVuSXNUZXh0KSB7XG4gICAgICAgICAgICAgIC8vIFdyYXAgdGhlIHByaW9yIGxpIHRleHQgY29udGVudCBzbyB0aGF0IGl0IGNhbiBiZSBuZXN0ZWQgbmV4dCB0byBhIGxpc3RcbiAgICAgICAgICAgICAgVHJhbnNmb3Jtcy53cmFwTm9kZXMoZWRpdG9yLCB7IGNoaWxkcmVuOiBbXSB9LCB7IGF0OiBbLi4ucHJlY2VkaW5nTElQYXRoLCAwXSB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTW92ZSB0aGUgc2VsZWN0ZWQgbGlzIGFmdGVyIHRoZSBwcmlvciBsaSBjb250ZW50c1xuICAgICAgICAgICAgVHJhbnNmb3Jtcy5tb3ZlTm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgICAgIHRvOiBbLi4ucHJlY2VkaW5nTElQYXRoLCAxXSxcbiAgICAgICAgICAgICAgbWF0Y2g6IChub2RlKSA9PiBFbGVtZW50LmlzRWxlbWVudChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdsaScsXG4gICAgICAgICAgICAgIG1vZGU6ICdsb3dlc3QnLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFdyYXAgdGhlIHNlbGVjdGVkIGxpcyBpbiBhIG5ldyBsaXN0XG4gICAgICAgICAgICBUcmFuc2Zvcm1zLndyYXBOb2RlcyhcbiAgICAgICAgICAgICAgZWRpdG9yLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogaXNDdXJyZW50bHlPTCA/ICdvbCcgOiAndWwnLCBjaGlsZHJlbjogW10sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtYXRjaDogKG5vZGUpID0+IEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpICYmIG5vZGUudHlwZSA9PT0gJ2xpJyxcbiAgICAgICAgICAgICAgICBtb2RlOiAnbG93ZXN0JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwganVzdCB3cmFwIHRoZSBub2RlIGluIGEgbGlzdCAvIGxpXG4gICAgICAgICAgICBUcmFuc2Zvcm1zLndyYXBOb2RlcyhcbiAgICAgICAgICAgICAgZWRpdG9yLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogaXNDdXJyZW50bHlPTCA/ICdvbCcgOiAndWwnLCBjaGlsZHJlbjogW3sgdHlwZTogJ2xpJywgY2hpbGRyZW46IFtdIH1dLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWF0Y2g6IChub2RlKSA9PiBFbGVtZW50LmlzRWxlbWVudChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdsaScsXG4gICAgICAgICAgICAgICAgbW9kZTogJ2xvd2VzdCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBUcmFuc2Zvcm1zLndyYXBOb2RlcyhlZGl0b3IsIHsgdHlwZTogaW5kZW50VHlwZSwgY2hpbGRyZW46IFtdIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJlYWN0RWRpdG9yLmZvY3VzKGVkaXRvcik7XG4gICAgfSwgW2VkaXRvcl0pO1xuXG4gICAgY29uc3QgY2FuRGVJbmRlbnQgPSBpc0VsZW1lbnRBY3RpdmUoZWRpdG9yLCAnbGknKSB8fCBpc0VsZW1lbnRBY3RpdmUoZWRpdG9yLCBpbmRlbnRUeXBlKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgICAgIGJhc2VDbGFzcyxcbiAgICAgICAgICAgICFjYW5EZUluZGVudCAmJiBgJHtiYXNlQ2xhc3N9LS1kaXNhYmxlZGAsXG4gICAgICAgICAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfVxuICAgICAgICAgIG9uQ2xpY2s9e2NhbkRlSW5kZW50ID8gKGUpID0+IGhhbmRsZUluZGVudChlLCAnbGVmdCcpIDogdW5kZWZpbmVkfVxuICAgICAgICA+XG4gICAgICAgICAgPEluZGVudExlZnQgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2Jhc2VDbGFzc31cbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlSW5kZW50KGUsICdyaWdodCcpfVxuICAgICAgICA+XG4gICAgICAgICAgPEluZGVudFJpZ2h0IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9LFxuICBFbGVtZW50OiBJbmRlbnRXaXRoUGFkZGluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluZGVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlU2xhdGUiLCJSZWFjdEVkaXRvciIsIkVkaXRvciIsIkVsZW1lbnQiLCJUZXh0IiwiVHJhbnNmb3JtcyIsIkluZGVudExlZnQiLCJJbmRlbnRSaWdodCIsImJhc2VDbGFzcyIsImlzRWxlbWVudEFjdGl2ZSIsImxpc3RUeXBlcyIsImdldENvbW1vbkJsb2NrIiwidW53cmFwTGlzdCIsImlzQmxvY2tFbGVtZW50IiwiaW5kZW50VHlwZSIsIkluZGVudFdpdGhQYWRkaW5nIiwiYXR0cmlidXRlcyIsImNoaWxkcmVuIiwiZGl2Iiwic3R5bGUiLCJwYWRkaW5nTGVmdCIsImluZGVudCIsIkJ1dHRvbiIsImVkaXRvciIsImhhbmRsZUluZGVudCIsImUiLCJkaXIiLCJwcmV2ZW50RGVmYXVsdCIsIm4iLCJpc0VsZW1lbnQiLCJpbmNsdWRlcyIsInR5cGUiLCJsaXN0UGF0aCIsIm1hdGNoZWRQYXJlbnRMaXN0IiwiYWJvdmUiLCJhdCIsIm1hdGNoIiwiaXNFZGl0b3IiLCJwYXJlbnRMaXN0SXRlbSIsInBhcmVudExpc3RJdGVtUGF0aCIsImxlbmd0aCIsInVud3JhcE5vZGVzIiwibm9kZSIsInBhdGgiLCJtYXRjaGVzIiwic2V0Tm9kZXMiLCJuZXdQYXJlbnROb2RlIiwibGlmdE5vZGVzIiwic3BsaXQiLCJtb2RlIiwiaXNDdXJyZW50bHlPTCIsImlzQ3VycmVudGx5VUwiLCJBcnJheSIsImZyb20iLCJub2RlcyIsImZpcnN0U2VsZWN0ZWRMSVBhdGgiLCJoYXNQcmVjZWRpbmdMSSIsInByZXZpb3VzIiwicHJlY2VkaW5nTElQYXRoIiwicHJlY2VkaW5nTElDaGlsZHJlbiIsInByZWNlZGluZ0xJQ2hpbGRyZW5Jc1RleHQiLCJpc1RleHQiLCJ3cmFwTm9kZXMiLCJtb3ZlTm9kZXMiLCJ0byIsImZvY3VzIiwiY2FuRGVJbmRlbnQiLCJGcmFnbWVudCIsImJ1dHRvbiIsImNsYXNzTmFtZSIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwib25DbGljayIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFTQyxXQUFXLFFBQVEsUUFBUTtBQUMzQyxTQUFTQyxRQUFRLEVBQUVDLFdBQVcsUUFBUSxjQUFjO0FBQ3BELFNBQVNDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsUUFBUSxRQUFRO0FBQzFELE9BQU9DLGdCQUFnQixrQ0FBa0M7QUFDekQsT0FBT0MsaUJBQWlCLG1DQUFtQztBQUMzRCxTQUFTQyxT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