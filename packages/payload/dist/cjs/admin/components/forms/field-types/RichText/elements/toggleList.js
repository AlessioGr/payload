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
var _slate = require("slate");
var _slatereact = require("slate-react");
var _getCommonBlock = require("./getCommonBlock");
var _isListActive = /*#__PURE__*/ _interop_require_default(require("./isListActive"));
var _listTypes = /*#__PURE__*/ _interop_require_default(require("./listTypes"));
var _unwrapList = require("./unwrapList");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
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
var toggleList = function(editor, format) {
    var currentListFormat;
    if ((0, _isListActive.default)(editor, "ol")) currentListFormat = "ol";
    if ((0, _isListActive.default)(editor, "ul")) currentListFormat = "ul";
    // If the format is currently active,
    // remove the list
    if (currentListFormat === format) {
        var selectedLeaf = _slate.Node.descendant(editor, editor.selection.anchor.path);
        // If on an empty bullet, leave the above list alone
        // and unwrap only the active bullet
        if (_slate.Text.isText(selectedLeaf) && String(selectedLeaf.text).length === 0) {
            _slate.Transforms.unwrapNodes(editor, {
                match: function(n) {
                    return _slate.Element.isElement(n) && _listTypes.default.includes(n.type);
                },
                split: true,
                mode: "lowest"
            });
            _slate.Transforms.setNodes(editor, {
                type: undefined
            });
        } else {
            // Otherwise, we need to unset li on all lis in the parent list
            // and unwrap the parent list itself
            var _getCommonBlock1 = _sliced_to_array((0, _getCommonBlock.getCommonBlock)(editor, function(n) {
                return _slate.Element.isElement(n) && n.type === format;
            }), 2), listPath = _getCommonBlock1[1];
            (0, _unwrapList.unwrapList)(editor, listPath);
        }
    // Otherwise, if a list is active and we are changing it,
    // change it
    } else if (currentListFormat && currentListFormat !== format) {
        _slate.Transforms.setNodes(editor, {
            type: format
        }, {
            match: function(node) {
                return _slate.Element.isElement(node) && _listTypes.default.includes(node.type);
            },
            mode: "lowest"
        });
    // Otherwise we can assume that we should just activate the list
    } else {
        _slate.Transforms.wrapNodes(editor, {
            type: format,
            children: []
        });
        var _getCommonBlock2 = _sliced_to_array((0, _getCommonBlock.getCommonBlock)(editor, function(node) {
            return _slate.Element.isElement(node) && node.type === format;
        }), 2), parentNodePath = _getCommonBlock2[1];
        // Only set li on nodes that don't have type
        _slate.Transforms.setNodes(editor, {
            type: "li"
        }, {
            voids: true,
            match: function(node, path) {
                var match = _slate.Element.isElement(node) && typeof node.type === "undefined" && path.length === parentNodePath.length + 1;
                return match;
            }
        });
        // Wrap nodes that do have a type with an li
        // so as to not lose their existing formatting
        var nodesToWrap = Array.from(_slate.Editor.nodes(editor, {
            match: function(node, path) {
                var match = _slate.Element.isElement(node) && typeof node.type !== "undefined" && node.type !== "li" && path.length === parentNodePath.length + 1;
                return match;
            }
        }));
        nodesToWrap.forEach(function(param) {
            var _param = _sliced_to_array(param, 2), path = _param[1];
            _slate.Transforms.wrapNodes(editor, {
                type: "li",
                children: []
            }, {
                at: path
            });
        });
    }
    _slatereact.ReactEditor.focus(editor);
};
var _default = toggleList;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL3RvZ2dsZUxpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVkaXRvciwgRWxlbWVudCwgTm9kZSwgVGV4dCwgVHJhbnNmb3JtcyB9IGZyb20gJ3NsYXRlJztcbmltcG9ydCB7IFJlYWN0RWRpdG9yIH0gZnJvbSAnc2xhdGUtcmVhY3QnO1xuaW1wb3J0IHsgZ2V0Q29tbW9uQmxvY2sgfSBmcm9tICcuL2dldENvbW1vbkJsb2NrJztcbmltcG9ydCBpc0xpc3RBY3RpdmUgZnJvbSAnLi9pc0xpc3RBY3RpdmUnO1xuaW1wb3J0IGxpc3RUeXBlcyBmcm9tICcuL2xpc3RUeXBlcyc7XG5pbXBvcnQgeyB1bndyYXBMaXN0IH0gZnJvbSAnLi91bndyYXBMaXN0JztcblxuY29uc3QgdG9nZ2xlTGlzdCA9IChlZGl0b3I6IEVkaXRvciwgZm9ybWF0OiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgbGV0IGN1cnJlbnRMaXN0Rm9ybWF0OiBzdHJpbmc7XG5cbiAgaWYgKGlzTGlzdEFjdGl2ZShlZGl0b3IsICdvbCcpKSBjdXJyZW50TGlzdEZvcm1hdCA9ICdvbCc7XG4gIGlmIChpc0xpc3RBY3RpdmUoZWRpdG9yLCAndWwnKSkgY3VycmVudExpc3RGb3JtYXQgPSAndWwnO1xuXG4gIC8vIElmIHRoZSBmb3JtYXQgaXMgY3VycmVudGx5IGFjdGl2ZSxcbiAgLy8gcmVtb3ZlIHRoZSBsaXN0XG4gIGlmIChjdXJyZW50TGlzdEZvcm1hdCA9PT0gZm9ybWF0KSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRMZWFmID0gTm9kZS5kZXNjZW5kYW50KGVkaXRvciwgZWRpdG9yLnNlbGVjdGlvbi5hbmNob3IucGF0aCk7XG5cbiAgICAvLyBJZiBvbiBhbiBlbXB0eSBidWxsZXQsIGxlYXZlIHRoZSBhYm92ZSBsaXN0IGFsb25lXG4gICAgLy8gYW5kIHVud3JhcCBvbmx5IHRoZSBhY3RpdmUgYnVsbGV0XG4gICAgaWYgKFRleHQuaXNUZXh0KHNlbGVjdGVkTGVhZikgJiYgU3RyaW5nKHNlbGVjdGVkTGVhZi50ZXh0KS5sZW5ndGggPT09IDApIHtcbiAgICAgIFRyYW5zZm9ybXMudW53cmFwTm9kZXMoZWRpdG9yLCB7XG4gICAgICAgIG1hdGNoOiAobikgPT4gRWxlbWVudC5pc0VsZW1lbnQobikgJiYgbGlzdFR5cGVzLmluY2x1ZGVzKG4udHlwZSksXG4gICAgICAgIHNwbGl0OiB0cnVlLFxuICAgICAgICBtb2RlOiAnbG93ZXN0JyxcbiAgICAgIH0pO1xuXG4gICAgICBUcmFuc2Zvcm1zLnNldE5vZGVzKGVkaXRvciwgeyB0eXBlOiB1bmRlZmluZWQgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE90aGVyd2lzZSwgd2UgbmVlZCB0byB1bnNldCBsaSBvbiBhbGwgbGlzIGluIHRoZSBwYXJlbnQgbGlzdFxuICAgICAgLy8gYW5kIHVud3JhcCB0aGUgcGFyZW50IGxpc3QgaXRzZWxmXG4gICAgICBjb25zdCBbLCBsaXN0UGF0aF0gPSBnZXRDb21tb25CbG9jayhlZGl0b3IsIChuKSA9PiBFbGVtZW50LmlzRWxlbWVudChuKSAmJiBuLnR5cGUgPT09IGZvcm1hdCk7XG4gICAgICB1bndyYXBMaXN0KGVkaXRvciwgbGlzdFBhdGgpO1xuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSwgaWYgYSBsaXN0IGlzIGFjdGl2ZSBhbmQgd2UgYXJlIGNoYW5naW5nIGl0LFxuICAgIC8vIGNoYW5nZSBpdFxuICB9IGVsc2UgaWYgKGN1cnJlbnRMaXN0Rm9ybWF0ICYmIGN1cnJlbnRMaXN0Rm9ybWF0ICE9PSBmb3JtYXQpIHtcbiAgICBUcmFuc2Zvcm1zLnNldE5vZGVzKFxuICAgICAgZWRpdG9yLFxuICAgICAge1xuICAgICAgICB0eXBlOiBmb3JtYXQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBtYXRjaDogKG5vZGUpID0+IEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpICYmIGxpc3RUeXBlcy5pbmNsdWRlcyhub2RlLnR5cGUpLFxuICAgICAgICBtb2RlOiAnbG93ZXN0JyxcbiAgICAgIH0sXG4gICAgKTtcbiAgICAvLyBPdGhlcndpc2Ugd2UgY2FuIGFzc3VtZSB0aGF0IHdlIHNob3VsZCBqdXN0IGFjdGl2YXRlIHRoZSBsaXN0XG4gIH0gZWxzZSB7XG4gICAgVHJhbnNmb3Jtcy53cmFwTm9kZXMoZWRpdG9yLCB7IHR5cGU6IGZvcm1hdCwgY2hpbGRyZW46IFtdIH0pO1xuXG4gICAgY29uc3QgWywgcGFyZW50Tm9kZVBhdGhdID0gZ2V0Q29tbW9uQmxvY2soZWRpdG9yLCAobm9kZSkgPT4gRWxlbWVudC5pc0VsZW1lbnQobm9kZSkgJiYgbm9kZS50eXBlID09PSBmb3JtYXQpO1xuXG4gICAgLy8gT25seSBzZXQgbGkgb24gbm9kZXMgdGhhdCBkb24ndCBoYXZlIHR5cGVcbiAgICBUcmFuc2Zvcm1zLnNldE5vZGVzKGVkaXRvciwgeyB0eXBlOiAnbGknIH0sIHtcbiAgICAgIHZvaWRzOiB0cnVlLFxuICAgICAgbWF0Y2g6IChub2RlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gRWxlbWVudC5pc0VsZW1lbnQobm9kZSlcbiAgICAgICAgICAmJiB0eXBlb2Ygbm9kZS50eXBlID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICYmIHBhdGgubGVuZ3RoID09PSBwYXJlbnROb2RlUGF0aC5sZW5ndGggKyAxO1xuXG4gICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBXcmFwIG5vZGVzIHRoYXQgZG8gaGF2ZSBhIHR5cGUgd2l0aCBhbiBsaVxuICAgIC8vIHNvIGFzIHRvIG5vdCBsb3NlIHRoZWlyIGV4aXN0aW5nIGZvcm1hdHRpbmdcbiAgICBjb25zdCBub2Rlc1RvV3JhcCA9IEFycmF5LmZyb20oRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgbWF0Y2g6IChub2RlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gRWxlbWVudC5pc0VsZW1lbnQobm9kZSlcbiAgICAgICAgICAmJiB0eXBlb2Ygbm9kZS50eXBlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICYmIG5vZGUudHlwZSAhPT0gJ2xpJ1xuICAgICAgICAgICYmIHBhdGgubGVuZ3RoID09PSBwYXJlbnROb2RlUGF0aC5sZW5ndGggKyAxO1xuXG4gICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgIH0sXG4gICAgfSkpO1xuXG4gICAgbm9kZXNUb1dyYXAuZm9yRWFjaCgoWywgcGF0aF0pID0+IHtcbiAgICAgIFRyYW5zZm9ybXMud3JhcE5vZGVzKGVkaXRvciwgeyB0eXBlOiAnbGknLCBjaGlsZHJlbjogW10gfSwgeyBhdDogcGF0aCB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIFJlYWN0RWRpdG9yLmZvY3VzKGVkaXRvcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b2dnbGVMaXN0O1xuIl0sIm5hbWVzIjpbInRvZ2dsZUxpc3QiLCJlZGl0b3IiLCJmb3JtYXQiLCJjdXJyZW50TGlzdEZvcm1hdCIsImlzTGlzdEFjdGl2ZSIsInNlbGVjdGVkTGVhZiIsIk5vZGUiLCJkZXNjZW5kYW50Iiwic2VsZWN0aW9uIiwiYW5jaG9yIiwicGF0aCIsIlRleHQiLCJpc1RleHQiLCJTdHJpbmciLCJ0ZXh0IiwibGVuZ3RoIiwiVHJhbnNmb3JtcyIsInVud3JhcE5vZGVzIiwibWF0Y2giLCJuIiwiRWxlbWVudCIsImlzRWxlbWVudCIsImxpc3RUeXBlcyIsImluY2x1ZGVzIiwidHlwZSIsInNwbGl0IiwibW9kZSIsInNldE5vZGVzIiwidW5kZWZpbmVkIiwiZ2V0Q29tbW9uQmxvY2siLCJsaXN0UGF0aCIsInVud3JhcExpc3QiLCJub2RlIiwid3JhcE5vZGVzIiwiY2hpbGRyZW4iLCJwYXJlbnROb2RlUGF0aCIsInZvaWRzIiwibm9kZXNUb1dyYXAiLCJBcnJheSIsImZyb20iLCJFZGl0b3IiLCJub2RlcyIsImZvckVhY2giLCJhdCIsIlJlYWN0RWRpdG9yIiwiZm9jdXMiXSwibWFwcGluZ3MiOiI7Ozs7K0JBdUZBOzs7ZUFBQTs7O3FCQXZGd0Q7MEJBQzVCOzhCQUNHO21FQUNOO2dFQUNIOzBCQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQU1BLGFBQWEsU0FBQ0MsUUFBZ0JDO0lBQ2xDLElBQUlDO0lBRUosSUFBSUMsSUFBQUEscUJBQVksRUFBQ0gsUUFBUSxPQUFPRSxvQkFBb0I7SUFDcEQsSUFBSUMsSUFBQUEscUJBQVksRUFBQ0gsUUFBUSxPQUFPRSxvQkFBb0I7SUFFcEQscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixJQUFJQSxzQkFBc0JELFFBQVE7UUFDaEMsSUFBTUcsZUFBZUMsV0FBSSxDQUFDQyxVQUFVLENBQUNOLFFBQVFBLE9BQU9PLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJO1FBRXpFLG9EQUFvRDtRQUNwRCxvQ0FBb0M7UUFDcEMsSUFBSUMsV0FBSSxDQUFDQyxNQUFNLENBQUNQLGlCQUFpQlEsT0FBT1IsYUFBYVMsSUFBSSxFQUFFQyxNQUFNLEtBQUssR0FBRztZQUN2RUMsaUJBQVUsQ0FBQ0MsV0FBVyxDQUFDaEIsUUFBUTtnQkFDN0JpQixPQUFPLFNBQUNDOzJCQUFNQyxjQUFPLENBQUNDLFNBQVMsQ0FBQ0YsTUFBTUcsa0JBQVMsQ0FBQ0MsUUFBUSxDQUFDSixFQUFFSyxJQUFJOztnQkFDL0RDLE9BQU87Z0JBQ1BDLE1BQU07WUFDUjtZQUVBVixpQkFBVSxDQUFDVyxRQUFRLENBQUMxQixRQUFRO2dCQUFFdUIsTUFBTUk7WUFBVTtRQUNoRCxPQUFPO1lBQ0wsK0RBQStEO1lBQy9ELG9DQUFvQztZQUNwQyxJQUFxQkMsb0NBQUFBLElBQUFBLDhCQUFjLEVBQUM1QixRQUFRLFNBQUNrQjt1QkFBTUMsY0FBTyxDQUFDQyxTQUFTLENBQUNGLE1BQU1BLEVBQUVLLElBQUksS0FBS3RCO29CQUE3RTRCLFdBQVlEO1lBQ3JCRSxJQUFBQSxzQkFBVSxFQUFDOUIsUUFBUTZCO1FBQ3JCO0lBRUEseURBQXlEO0lBQ3pELFlBQVk7SUFDZCxPQUFPLElBQUkzQixxQkFBcUJBLHNCQUFzQkQsUUFBUTtRQUM1RGMsaUJBQVUsQ0FBQ1csUUFBUSxDQUNqQjFCLFFBQ0E7WUFDRXVCLE1BQU10QjtRQUNSLEdBQ0E7WUFDRWdCLE9BQU8sU0FBQ2M7dUJBQVNaLGNBQU8sQ0FBQ0MsU0FBUyxDQUFDVyxTQUFTVixrQkFBUyxDQUFDQyxRQUFRLENBQUNTLEtBQUtSLElBQUk7O1lBQ3hFRSxNQUFNO1FBQ1I7SUFFRixnRUFBZ0U7SUFDbEUsT0FBTztRQUNMVixpQkFBVSxDQUFDaUIsU0FBUyxDQUFDaEMsUUFBUTtZQUFFdUIsTUFBTXRCO1lBQVFnQyxVQUFVLEVBQUU7UUFBQztRQUUxRCxJQUEyQkwsb0NBQUFBLElBQUFBLDhCQUFjLEVBQUM1QixRQUFRLFNBQUMrQjttQkFBU1osY0FBTyxDQUFDQyxTQUFTLENBQUNXLFNBQVNBLEtBQUtSLElBQUksS0FBS3RCO2dCQUE1RmlDLGlCQUFrQk47UUFFM0IsNENBQTRDO1FBQzVDYixpQkFBVSxDQUFDVyxRQUFRLENBQUMxQixRQUFRO1lBQUV1QixNQUFNO1FBQUssR0FBRztZQUMxQ1ksT0FBTztZQUNQbEIsT0FBTyxTQUFDYyxNQUFNdEI7Z0JBQ1osSUFBTVEsUUFBUUUsY0FBTyxDQUFDQyxTQUFTLENBQUNXLFNBQzNCLE9BQU9BLEtBQUtSLElBQUksS0FBSyxlQUNyQmQsS0FBS0ssTUFBTSxLQUFLb0IsZUFBZXBCLE1BQU0sR0FBRztnQkFFN0MsT0FBT0c7WUFDVDtRQUNGO1FBRUEsNENBQTRDO1FBQzVDLDhDQUE4QztRQUM5QyxJQUFNbUIsY0FBY0MsTUFBTUMsSUFBSSxDQUFDQyxhQUFNLENBQUNDLEtBQUssQ0FBQ3hDLFFBQVE7WUFDbERpQixPQUFPLFNBQUNjLE1BQU10QjtnQkFDWixJQUFNUSxRQUFRRSxjQUFPLENBQUNDLFNBQVMsQ0FBQ1csU0FDM0IsT0FBT0EsS0FBS1IsSUFBSSxLQUFLLGVBQ3JCUSxLQUFLUixJQUFJLEtBQUssUUFDZGQsS0FBS0ssTUFBTSxLQUFLb0IsZUFBZXBCLE1BQU0sR0FBRztnQkFFN0MsT0FBT0c7WUFDVDtRQUNGO1FBRUFtQixZQUFZSyxPQUFPLENBQUM7cURBQUloQztZQUN0Qk0saUJBQVUsQ0FBQ2lCLFNBQVMsQ0FBQ2hDLFFBQVE7Z0JBQUV1QixNQUFNO2dCQUFNVSxVQUFVLEVBQUU7WUFBQyxHQUFHO2dCQUFFUyxJQUFJakM7WUFBSztRQUN4RTtJQUNGO0lBRUFrQyx1QkFBVyxDQUFDQyxLQUFLLENBQUM1QztBQUNwQjtJQUVBLFdBQWVEIn0=