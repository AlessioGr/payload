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
import { Transforms } from "slate";
import { jsx } from "slate-hyperscript";
var ELEMENT_TAGS = {
    A: function(el) {
        return {
            type: "link",
            newTab: el.getAttribute("target") === "_blank",
            url: el.getAttribute("href")
        };
    },
    BLOCKQUOTE: function() {
        return {
            type: "blockquote"
        };
    },
    H1: function() {
        return {
            type: "h1"
        };
    },
    H2: function() {
        return {
            type: "h2"
        };
    },
    H3: function() {
        return {
            type: "h3"
        };
    },
    H4: function() {
        return {
            type: "h4"
        };
    },
    H5: function() {
        return {
            type: "h5"
        };
    },
    H6: function() {
        return {
            type: "h6"
        };
    },
    LI: function() {
        return {
            type: "li"
        };
    },
    OL: function() {
        return {
            type: "ol"
        };
    },
    P: function() {
        return {};
    },
    PRE: function() {
        return {
            type: "code"
        };
    },
    UL: function() {
        return {
            type: "ul"
        };
    }
};
var TEXT_TAGS = {
    CODE: function() {
        return {
            code: true
        };
    },
    DEL: function() {
        return {
            strikethrough: true
        };
    },
    EM: function() {
        return {
            italic: true
        };
    },
    I: function() {
        return {
            italic: true
        };
    },
    S: function() {
        return {
            strikethrough: true
        };
    },
    STRONG: function() {
        return {
            bold: true
        };
    },
    U: function() {
        return {
            underline: true
        };
    }
};
var deserialize = function(el) {
    if (el.nodeType === 3) {
        return el.textContent;
    }
    if (el.nodeType !== 1) {
        return null;
    }
    if (el.nodeName === "BR") {
        return "\n";
    }
    var nodeName = el.nodeName;
    var parent = el;
    if (nodeName === "PRE" && el.childNodes[0] && el.childNodes[0].nodeName === "CODE") {
        var ref;
        ref = _sliced_to_array(el.childNodes, 1), parent = ref[0], ref;
    }
    var children = Array.from(parent.childNodes).map(deserialize).flat();
    if (children.length === 0) {
        children = [
            {
                text: ""
            }
        ];
    }
    if (el.nodeName === "BODY") {
        return jsx("fragment", {}, children);
    }
    if (ELEMENT_TAGS[nodeName]) {
        var attrs = ELEMENT_TAGS[nodeName](el);
        return jsx("element", attrs, children);
    }
    if (TEXT_TAGS[nodeName]) {
        var attrs1 = TEXT_TAGS[nodeName](el);
        return children.map(function(child) {
            return jsx("text", attrs1, child);
        });
    }
    return children;
};
var withHTML = function(incomingEditor) {
    var insertData = incomingEditor.insertData;
    var editor = incomingEditor;
    editor.insertData = function(data) {
        if (!data.types.includes("application/x-slate-fragment")) {
            var html = data.getData("text/html");
            if (html) {
                var parsed = new DOMParser().parseFromString(html, "text/html");
                var fragment = deserialize(parsed.body);
                Transforms.insertFragment(editor, fragment);
                return;
            }
        }
        insertData(data);
    };
    return editor;
};
export default withHTML;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L3BsdWdpbnMvd2l0aEhUTUwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zZm9ybXMgfSBmcm9tICdzbGF0ZSc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdzbGF0ZS1oeXBlcnNjcmlwdCc7XG5cbmNvbnN0IEVMRU1FTlRfVEFHUyA9IHtcbiAgQTogKGVsKSA9PiAoeyB0eXBlOiAnbGluaycsIG5ld1RhYjogZWwuZ2V0QXR0cmlidXRlKCd0YXJnZXQnKSA9PT0gJ19ibGFuaycsIHVybDogZWwuZ2V0QXR0cmlidXRlKCdocmVmJykgfSksXG4gIEJMT0NLUVVPVEU6ICgpID0+ICh7IHR5cGU6ICdibG9ja3F1b3RlJyB9KSxcbiAgSDE6ICgpID0+ICh7IHR5cGU6ICdoMScgfSksXG4gIEgyOiAoKSA9PiAoeyB0eXBlOiAnaDInIH0pLFxuICBIMzogKCkgPT4gKHsgdHlwZTogJ2gzJyB9KSxcbiAgSDQ6ICgpID0+ICh7IHR5cGU6ICdoNCcgfSksXG4gIEg1OiAoKSA9PiAoeyB0eXBlOiAnaDUnIH0pLFxuICBINjogKCkgPT4gKHsgdHlwZTogJ2g2JyB9KSxcbiAgTEk6ICgpID0+ICh7IHR5cGU6ICdsaScgfSksXG4gIE9MOiAoKSA9PiAoeyB0eXBlOiAnb2wnIH0pLFxuICBQOiAoKSA9PiAoe30pLFxuICBQUkU6ICgpID0+ICh7IHR5cGU6ICdjb2RlJyB9KSxcbiAgVUw6ICgpID0+ICh7IHR5cGU6ICd1bCcgfSksXG59O1xuXG5jb25zdCBURVhUX1RBR1MgPSB7XG4gIENPREU6ICgpID0+ICh7IGNvZGU6IHRydWUgfSksXG4gIERFTDogKCkgPT4gKHsgc3RyaWtldGhyb3VnaDogdHJ1ZSB9KSxcbiAgRU06ICgpID0+ICh7IGl0YWxpYzogdHJ1ZSB9KSxcbiAgSTogKCkgPT4gKHsgaXRhbGljOiB0cnVlIH0pLFxuICBTOiAoKSA9PiAoeyBzdHJpa2V0aHJvdWdoOiB0cnVlIH0pLFxuICBTVFJPTkc6ICgpID0+ICh7IGJvbGQ6IHRydWUgfSksXG4gIFU6ICgpID0+ICh7IHVuZGVybGluZTogdHJ1ZSB9KSxcbn07XG5cbmNvbnN0IGRlc2VyaWFsaXplID0gKGVsKSA9PiB7XG4gIGlmIChlbC5ub2RlVHlwZSA9PT0gMykge1xuICAgIHJldHVybiBlbC50ZXh0Q29udGVudDtcbiAgfSBpZiAoZWwubm9kZVR5cGUgIT09IDEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBpZiAoZWwubm9kZU5hbWUgPT09ICdCUicpIHtcbiAgICByZXR1cm4gJ1xcbic7XG4gIH1cblxuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlbDtcbiAgbGV0IHBhcmVudCA9IGVsO1xuXG4gIGlmIChcbiAgICBub2RlTmFtZSA9PT0gJ1BSRSdcbiAgICAmJiBlbC5jaGlsZE5vZGVzWzBdXG4gICAgJiYgZWwuY2hpbGROb2Rlc1swXS5ub2RlTmFtZSA9PT0gJ0NPREUnXG4gICkge1xuICAgIFtwYXJlbnRdID0gZWwuY2hpbGROb2RlcztcbiAgfVxuXG4gIGxldCBjaGlsZHJlbiA9IEFycmF5LmZyb20ocGFyZW50LmNoaWxkTm9kZXMpXG4gICAgLm1hcChkZXNlcmlhbGl6ZSlcbiAgICAuZmxhdCgpO1xuXG4gIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICBjaGlsZHJlbiA9IFt7IHRleHQ6ICcnIH1dO1xuICB9XG5cbiAgaWYgKGVsLm5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICByZXR1cm4ganN4KCdmcmFnbWVudCcsIHt9LCBjaGlsZHJlbik7XG4gIH1cblxuICBpZiAoRUxFTUVOVF9UQUdTW25vZGVOYW1lXSkge1xuICAgIGNvbnN0IGF0dHJzID0gRUxFTUVOVF9UQUdTW25vZGVOYW1lXShlbCk7XG4gICAgcmV0dXJuIGpzeCgnZWxlbWVudCcsIGF0dHJzLCBjaGlsZHJlbik7XG4gIH1cblxuICBpZiAoVEVYVF9UQUdTW25vZGVOYW1lXSkge1xuICAgIGNvbnN0IGF0dHJzID0gVEVYVF9UQUdTW25vZGVOYW1lXShlbCk7XG4gICAgcmV0dXJuIGNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGpzeCgndGV4dCcsIGF0dHJzLCBjaGlsZCkpO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufTtcblxuY29uc3Qgd2l0aEhUTUwgPSAoaW5jb21pbmdFZGl0b3IpID0+IHtcbiAgY29uc3QgeyBpbnNlcnREYXRhIH0gPSBpbmNvbWluZ0VkaXRvcjtcblxuICBjb25zdCBlZGl0b3IgPSBpbmNvbWluZ0VkaXRvcjtcblxuICBlZGl0b3IuaW5zZXJ0RGF0YSA9IChkYXRhKSA9PiB7XG4gICAgaWYgKCFkYXRhLnR5cGVzLmluY2x1ZGVzKCdhcHBsaWNhdGlvbi94LXNsYXRlLWZyYWdtZW50JykpIHtcbiAgICAgIGNvbnN0IGh0bWwgPSBkYXRhLmdldERhdGEoJ3RleHQvaHRtbCcpO1xuXG4gICAgICBpZiAoaHRtbCkge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGh0bWwsICd0ZXh0L2h0bWwnKTtcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkZXNlcmlhbGl6ZShwYXJzZWQuYm9keSk7XG4gICAgICAgIFRyYW5zZm9ybXMuaW5zZXJ0RnJhZ21lbnQoZWRpdG9yLCBmcmFnbWVudCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbnNlcnREYXRhKGRhdGEpO1xuICB9O1xuXG4gIHJldHVybiBlZGl0b3I7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoSFRNTDtcbiJdLCJuYW1lcyI6WyJUcmFuc2Zvcm1zIiwianN4IiwiRUxFTUVOVF9UQUdTIiwiQSIsImVsIiwidHlwZSIsIm5ld1RhYiIsImdldEF0dHJpYnV0ZSIsInVybCIsIkJMT0NLUVVPVEUiLCJIMSIsIkgyIiwiSDMiLCJINCIsIkg1IiwiSDYiLCJMSSIsIk9MIiwiUCIsIlBSRSIsIlVMIiwiVEVYVF9UQUdTIiwiQ09ERSIsImNvZGUiLCJERUwiLCJzdHJpa2V0aHJvdWdoIiwiRU0iLCJpdGFsaWMiLCJJIiwiUyIsIlNUUk9ORyIsImJvbGQiLCJVIiwidW5kZXJsaW5lIiwiZGVzZXJpYWxpemUiLCJub2RlVHlwZSIsInRleHRDb250ZW50Iiwibm9kZU5hbWUiLCJwYXJlbnQiLCJjaGlsZE5vZGVzIiwiY2hpbGRyZW4iLCJBcnJheSIsImZyb20iLCJtYXAiLCJmbGF0IiwibGVuZ3RoIiwidGV4dCIsImF0dHJzIiwiY2hpbGQiLCJ3aXRoSFRNTCIsImluY29taW5nRWRpdG9yIiwiaW5zZXJ0RGF0YSIsImVkaXRvciIsImRhdGEiLCJ0eXBlcyIsImluY2x1ZGVzIiwiaHRtbCIsImdldERhdGEiLCJwYXJzZWQiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJmcmFnbWVudCIsImJvZHkiLCJpbnNlcnRGcmFnbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLFVBQVUsUUFBUSxRQUFRO0FBQ25DLFNBQVNDLEdBQUcsUUFBUSxvQkFBb0I7QUFFeEMsSUFBTUMsZUFBZTtJQUNuQkMsR0FBRyxTQUFDQztlQUFRO1lBQUVDLE1BQU07WUFBUUMsUUFBUUYsR0FBR0csWUFBWSxDQUFDLGNBQWM7WUFBVUMsS0FBS0osR0FBR0csWUFBWSxDQUFDO1FBQVE7O0lBQ3pHRSxZQUFZO2VBQU87WUFBRUosTUFBTTtRQUFhOztJQUN4Q0ssSUFBSTtlQUFPO1lBQUVMLE1BQU07UUFBSzs7SUFDeEJNLElBQUk7ZUFBTztZQUFFTixNQUFNO1FBQUs7O0lBQ3hCTyxJQUFJO2VBQU87WUFBRVAsTUFBTTtRQUFLOztJQUN4QlEsSUFBSTtlQUFPO1lBQUVSLE1BQU07UUFBSzs7SUFDeEJTLElBQUk7ZUFBTztZQUFFVCxNQUFNO1FBQUs7O0lBQ3hCVSxJQUFJO2VBQU87WUFBRVYsTUFBTTtRQUFLOztJQUN4QlcsSUFBSTtlQUFPO1lBQUVY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