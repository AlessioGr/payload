function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
import { Editor, Element, Node, Text, Transforms } from "slate";
import { ReactEditor } from "slate-react";
import { getCommonBlock } from "./getCommonBlock";
import isListActive from "./isListActive";
import listTypes from "./listTypes";
import { unwrapList } from "./unwrapList";
var toggleList = function(editor, format) {
    var currentListFormat;
    if (isListActive(editor, "ol")) currentListFormat = "ol";
    if (isListActive(editor, "ul")) currentListFormat = "ul";
    // If the format is currently active,
    // remove the list
    if (currentListFormat === format) {
        var selectedLeaf = Node.descendant(editor, editor.selection.anchor.path);
        // If on an empty bullet, leave the above list alone
        // and unwrap only the active bullet
        if (Text.isText(selectedLeaf) && String(selectedLeaf.text).length === 0) {
            Transforms.unwrapNodes(editor, {
                match: function(n) {
                    return Element.isElement(n) && listTypes.includes(n.type);
                },
                split: true,
                mode: "lowest"
            });
            Transforms.setNodes(editor, {
                type: undefined
            });
        } else {
            // Otherwise, we need to unset li on all lis in the parent list
            // and unwrap the parent list itself
            var _getCommonBlock = _sliced_to_array(getCommonBlock(editor, function(n) {
                return Element.isElement(n) && n.type === format;
            }), 2), listPath = _getCommonBlock[1];
            unwrapList(editor, listPath);
        }
    // Otherwise, if a list is active and we are changing it,
    // change it
    } else if (currentListFormat && currentListFormat !== format) {
        Transforms.setNodes(editor, {
            type: format
        }, {
            match: function(node) {
                return Element.isElement(node) && listTypes.includes(node.type);
            },
            mode: "lowest"
        });
    // Otherwise we can assume that we should just activate the list
    } else {
        Transforms.wrapNodes(editor, {
            type: format,
            children: []
        });
        var _getCommonBlock1 = _sliced_to_array(getCommonBlock(editor, function(node) {
            return Element.isElement(node) && node.type === format;
        }), 2), parentNodePath = _getCommonBlock1[1];
        // Only set li on nodes that don't have type
        Transforms.setNodes(editor, {
            type: "li"
        }, {
            voids: true,
            match: function(node, path) {
                var match = Element.isElement(node) && typeof node.type === "undefined" && path.length === parentNodePath.length + 1;
                return match;
            }
        });
        // Wrap nodes that do have a type with an li
        // so as to not lose their existing formatting
        var nodesToWrap = Array.from(Editor.nodes(editor, {
            match: function(node, path) {
                var match = Element.isElement(node) && typeof node.type !== "undefined" && node.type !== "li" && path.length === parentNodePath.length + 1;
                return match;
            }
        }));
        nodesToWrap.forEach(function(param) {
            var _param = _sliced_to_array(param, 2), path = _param[1];
            Transforms.wrapNodes(editor, {
                type: "li",
                children: []
            }, {
                at: path
            });
        });
    }
    ReactEditor.focus(editor);
};
export default toggleList;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL3RvZ2dsZUxpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVkaXRvciwgRWxlbWVudCwgTm9kZSwgVGV4dCwgVHJhbnNmb3JtcyB9IGZyb20gJ3NsYXRlJztcbmltcG9ydCB7IFJlYWN0RWRpdG9yIH0gZnJvbSAnc2xhdGUtcmVhY3QnO1xuaW1wb3J0IHsgZ2V0Q29tbW9uQmxvY2sgfSBmcm9tICcuL2dldENvbW1vbkJsb2NrJztcbmltcG9ydCBpc0xpc3RBY3RpdmUgZnJvbSAnLi9pc0xpc3RBY3RpdmUnO1xuaW1wb3J0IGxpc3RUeXBlcyBmcm9tICcuL2xpc3RUeXBlcyc7XG5pbXBvcnQgeyB1bndyYXBMaXN0IH0gZnJvbSAnLi91bndyYXBMaXN0JztcblxuY29uc3QgdG9nZ2xlTGlzdCA9IChlZGl0b3I6IEVkaXRvciwgZm9ybWF0OiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgbGV0IGN1cnJlbnRMaXN0Rm9ybWF0OiBzdHJpbmc7XG5cbiAgaWYgKGlzTGlzdEFjdGl2ZShlZGl0b3IsICdvbCcpKSBjdXJyZW50TGlzdEZvcm1hdCA9ICdvbCc7XG4gIGlmIChpc0xpc3RBY3RpdmUoZWRpdG9yLCAndWwnKSkgY3VycmVudExpc3RGb3JtYXQgPSAndWwnO1xuXG4gIC8vIElmIHRoZSBmb3JtYXQgaXMgY3VycmVudGx5IGFjdGl2ZSxcbiAgLy8gcmVtb3ZlIHRoZSBsaXN0XG4gIGlmIChjdXJyZW50TGlzdEZvcm1hdCA9PT0gZm9ybWF0KSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRMZWFmID0gTm9kZS5kZXNjZW5kYW50KGVkaXRvciwgZWRpdG9yLnNlbGVjdGlvbi5hbmNob3IucGF0aCk7XG5cbiAgICAvLyBJZiBvbiBhbiBlbXB0eSBidWxsZXQsIGxlYXZlIHRoZSBhYm92ZSBsaXN0IGFsb25lXG4gICAgLy8gYW5kIHVud3JhcCBvbmx5IHRoZSBhY3RpdmUgYnVsbGV0XG4gICAgaWYgKFRleHQuaXNUZXh0KHNlbGVjdGVkTGVhZikgJiYgU3RyaW5nKHNlbGVjdGVkTGVhZi50ZXh0KS5sZW5ndGggPT09IDApIHtcbiAgICAgIFRyYW5zZm9ybXMudW53cmFwTm9kZXMoZWRpdG9yLCB7XG4gICAgICAgIG1hdGNoOiAobikgPT4gRWxlbWVudC5pc0VsZW1lbnQobikgJiYgbGlzdFR5cGVzLmluY2x1ZGVzKG4udHlwZSksXG4gICAgICAgIHNwbGl0OiB0cnVlLFxuICAgICAgICBtb2RlOiAnbG93ZXN0JyxcbiAgICAgIH0pO1xuXG4gICAgICBUcmFuc2Zvcm1zLnNldE5vZGVzKGVkaXRvciwgeyB0eXBlOiB1bmRlZmluZWQgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE90aGVyd2lzZSwgd2UgbmVlZCB0byB1bnNldCBsaSBvbiBhbGwgbGlzIGluIHRoZSBwYXJlbnQgbGlzdFxuICAgICAgLy8gYW5kIHVud3JhcCB0aGUgcGFyZW50IGxpc3QgaXRzZWxmXG4gICAgICBjb25zdCBbLCBsaXN0UGF0aF0gPSBnZXRDb21tb25CbG9jayhlZGl0b3IsIChuKSA9PiBFbGVtZW50LmlzRWxlbWVudChuKSAmJiBuLnR5cGUgPT09IGZvcm1hdCk7XG4gICAgICB1bndyYXBMaXN0KGVkaXRvciwgbGlzdFBhdGgpO1xuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSwgaWYgYSBsaXN0IGlzIGFjdGl2ZSBhbmQgd2UgYXJlIGNoYW5naW5nIGl0LFxuICAgIC8vIGNoYW5nZSBpdFxuICB9IGVsc2UgaWYgKGN1cnJlbnRMaXN0Rm9ybWF0ICYmIGN1cnJlbnRMaXN0Rm9ybWF0ICE9PSBmb3JtYXQpIHtcbiAgICBUcmFuc2Zvcm1zLnNldE5vZGVzKFxuICAgICAgZWRpdG9yLFxuICAgICAge1xuICAgICAgICB0eXBlOiBmb3JtYXQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBtYXRjaDogKG5vZGUpID0+IEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpICYmIGxpc3RUeXBlcy5pbmNsdWRlcyhub2RlLnR5cGUpLFxuICAgICAgICBtb2RlOiAnbG93ZXN0JyxcbiAgICAgIH0sXG4gICAgKTtcbiAgICAvLyBPdGhlcndpc2Ugd2UgY2FuIGFzc3VtZSB0aGF0IHdlIHNob3VsZCBqdXN0IGFjdGl2YXRlIHRoZSBsaXN0XG4gIH0gZWxzZSB7XG4gICAgVHJhbnNmb3Jtcy53cmFwTm9kZXMoZWRpdG9yLCB7IHR5cGU6IGZvcm1hdCwgY2hpbGRyZW46IFtdIH0pO1xuXG4gICAgY29uc3QgWywgcGFyZW50Tm9kZVBhdGhdID0gZ2V0Q29tbW9uQmxvY2soZWRpdG9yLCAobm9kZSkgPT4gRWxlbWVudC5pc0VsZW1lbnQobm9kZSkgJiYgbm9kZS50eXBlID09PSBmb3JtYXQpO1xuXG4gICAgLy8gT25seSBzZXQgbGkgb24gbm9kZXMgdGhhdCBkb24ndCBoYXZlIHR5cGVcbiAgICBUcmFuc2Zvcm1zLnNldE5vZGVzKGVkaXRvciwgeyB0eXBlOiAnbGknIH0sIHtcbiAgICAgIHZvaWRzOiB0cnVlLFxuICAgICAgbWF0Y2g6IChub2RlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gRWxlbWVudC5pc0VsZW1lbnQobm9kZSlcbiAgICAgICAgICAmJiB0eXBlb2Ygbm9kZS50eXBlID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICYmIHBhdGgubGVuZ3RoID09PSBwYXJlbnROb2RlUGF0aC5sZW5ndGggKyAxO1xuXG4gICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBXcmFwIG5vZGVzIHRoYXQgZG8gaGF2ZSBhIHR5cGUgd2l0aCBhbiBsaVxuICAgIC8vIHNvIGFzIHRvIG5vdCBsb3NlIHRoZWlyIGV4aXN0aW5nIGZvcm1hdHRpbmdcbiAgICBjb25zdCBub2Rlc1RvV3JhcCA9IEFycmF5LmZyb20oRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgbWF0Y2g6IChub2RlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gRWxlbWVudC5pc0VsZW1lbnQobm9kZSlcbiAgICAgICAgICAmJiB0eXBlb2Ygbm9kZS50eXBlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICYmIG5vZGUudHlwZSAhPT0gJ2xpJ1xuICAgICAgICAgICYmIHBhdGgubGVuZ3RoID09PSBwYXJlbnROb2RlUGF0aC5sZW5ndGggKyAxO1xuXG4gICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgIH0sXG4gICAgfSkpO1xuXG4gICAgbm9kZXNUb1dyYXAuZm9yRWFjaCgoWywgcGF0aF0pID0+IHtcbiAgICAgIFRyYW5zZm9ybXMud3JhcE5vZGVzKGVkaXRvciwgeyB0eXBlOiAnbGknLCBjaGlsZHJlbjogW10gfSwgeyBhdDogcGF0aCB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIFJlYWN0RWRpdG9yLmZvY3VzKGVkaXRvcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b2dnbGVMaXN0O1xuIl0sIm5hbWVzIjpbIkVkaXRvciIsIkVsZW1lbnQiLCJOb2RlIiwiVGV4dCIsIlRyYW5zZm9ybXMiLCJSZWFjdEVkaXRvciIsImdldENvbW1vbkJsb2NrIiwiaXNMaXN0QWN0aXZlIiwibGlzdFR5cGVzIiwidW53cmFwTGlzdCIsInRvZ2dsZUxpc3QiLCJlZGl0b3IiLCJmb3JtYXQiLCJjdXJyZW50TGlzdEZvcm1hdCIsInNlbGVjdGVkTGVhZiIsImRlc2NlbmRhbnQiLCJzZWxlY3Rpb24iLCJhbmNob3IiLCJwYXRoIiwiaXNUZXh0IiwiU3RyaW5nIiwidGV4dCIsImxlbmd0aCIsInVud3JhcE5vZGVzIiwibWF0Y2giLCJuIiwiaXNFbGVtZW50IiwiaW5jbHVkZXMiLCJ0eXBlIiwic3BsaXQiLCJtb2RlIiwic2V0Tm9kZXMiLCJ1bmRlZmluZWQiLCJsaXN0UGF0aCIsIm5vZGUiLCJ3cmFwTm9kZXMiLCJjaGlsZHJlbiIsInBhcmVudE5vZGVQYXRoIiwidm9pZHMiLCJub2Rlc1RvV3JhcCIsIkFycmF5IiwiZnJvbSIs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