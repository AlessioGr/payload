"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "EnabledRelationshipsCondition", {
    enumerable: true,
    get: function() {
        return EnabledRelationshipsCondition;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _Config = require("../../../../utilities/Config");
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
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
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
var filterRichTextCollections = function(collections, options) {
    return collections.filter(function(param) {
        var enableRichTextRelationship = param.admin.enableRichTextRelationship, upload = param.upload;
        var _options;
        if ((_options = options) === null || _options === void 0 ? void 0 : _options.uploads) {
            return enableRichTextRelationship && Boolean(upload) === true;
        }
        return upload ? false : enableRichTextRelationship;
    });
};
var EnabledRelationshipsCondition = function(props) {
    var children = props.children, _props_uploads = props.uploads, uploads = _props_uploads === void 0 ? false : _props_uploads, rest = _object_without_properties(props, [
        "children",
        "uploads"
    ]);
    var collections = (0, _Config.useConfig)().collections;
    var _React_useState = _sliced_to_array(_react.useState(function() {
        return filterRichTextCollections(collections, {
            uploads: uploads
        }).map(function(param) {
            var slug = param.slug;
            return slug;
        });
    }), 1), enabledCollectionSlugs = _React_useState[0];
    if (!enabledCollectionSlugs.length) {
        return null;
    }
    return /*#__PURE__*/ _react.cloneElement(children, _object_spread_props(_object_spread({}, rest), {
        enabledCollectionSlugs: enabledCollectionSlugs
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL0VuYWJsZWRSZWxhdGlvbnNoaXBzQ29uZGl0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuXG50eXBlIG9wdGlvbnMgPSB7IHVwbG9hZHM6IGJvb2xlYW4gfTtcblxudHlwZSBGaWx0ZXJlZENvbGxlY3Rpb25zVCA9IChjb2xsZWN0aW9uczogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1tdLCBvcHRpb25zPzogb3B0aW9ucykgPT4gU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1tdO1xuY29uc3QgZmlsdGVyUmljaFRleHRDb2xsZWN0aW9uczogRmlsdGVyZWRDb2xsZWN0aW9uc1QgPSAoY29sbGVjdGlvbnMsIG9wdGlvbnMpID0+IHtcbiAgcmV0dXJuIGNvbGxlY3Rpb25zLmZpbHRlcigoeyBhZG1pbjogeyBlbmFibGVSaWNoVGV4dFJlbGF0aW9uc2hpcCB9LCB1cGxvYWQgfSkgPT4ge1xuICAgIGlmIChvcHRpb25zPy51cGxvYWRzKSB7XG4gICAgICByZXR1cm4gZW5hYmxlUmljaFRleHRSZWxhdGlvbnNoaXAgJiYgQm9vbGVhbih1cGxvYWQpID09PSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB1cGxvYWQgPyBmYWxzZSA6IGVuYWJsZVJpY2hUZXh0UmVsYXRpb25zaGlwO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBFbmFibGVkUmVsYXRpb25zaGlwc0NvbmRpdGlvbjogUmVhY3QuRkM8YW55PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCB1cGxvYWRzID0gZmFsc2UsIC4uLnJlc3QgfSA9IHByb3BzO1xuICBjb25zdCB7IGNvbGxlY3Rpb25zIH0gPSB1c2VDb25maWcoKTtcbiAgY29uc3QgW2VuYWJsZWRDb2xsZWN0aW9uU2x1Z3NdID0gUmVhY3QudXNlU3RhdGUoKCkgPT4gZmlsdGVyUmljaFRleHRDb2xsZWN0aW9ucyhjb2xsZWN0aW9ucywgeyB1cGxvYWRzIH0pLm1hcCgoeyBzbHVnIH0pID0+IHNsdWcpKTtcblxuICBpZiAoIWVuYWJsZWRDb2xsZWN0aW9uU2x1Z3MubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7IC4uLnJlc3QsIGVuYWJsZWRDb2xsZWN0aW9uU2x1Z3MgfSk7XG59O1xuIl0sIm5hbWVzIjpbIkVuYWJsZWRSZWxhdGlvbnNoaXBzQ29uZGl0aW9uIiwiZmlsdGVyUmljaFRleHRDb2xsZWN0aW9ucyIsImNvbGxlY3Rpb25zIiwib3B0aW9ucyIsImZpbHRlciIsImFkbWluIiwiZW5hYmxlUmljaFRleHRSZWxhdGlvbnNoaXAiLCJ1cGxvYWQiLCJ1cGxvYWRzIiwiQm9vbGVhbiIsInByb3BzIiwiY2hpbGRyZW4iLCJyZXN0IiwidXNlQ29uZmlnIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1hcCIsInNsdWciLCJlbmFibGVkQ29sbGVjdGlvblNsdWdzIiwibGVuZ3RoIiwiY2xvbmVFbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7OytCQWlCYUE7OztlQUFBQTs7OzZEQWpCVTtzQkFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzFCLElBQU1DLDRCQUFrRCxTQUFDQyxhQUFhQztJQUNwRSxPQUFPRCxZQUFZRSxNQUFNLENBQUM7WUFBR0MsQUFBU0MsbUNBQVRELE1BQVNDLDRCQUE4QkMsZUFBQUE7WUFDOURKO1FBQUosS0FBSUEsV0FBQUEscUJBQUFBLCtCQUFBQSxTQUFTSyxPQUFPLEVBQUU7WUFDcEIsT0FBT0YsOEJBQThCRyxRQUFRRixZQUFZO1FBQzNEO1FBRUEsT0FBT0EsU0FBUyxRQUFRRDtJQUMxQjtBQUNGO0FBRU8sSUFBTU4sZ0NBQStDLFNBQUNVO0lBQzNELElBQVFDLFdBQXVDRCxNQUF2Q0MsMkJBQXVDRCxNQUE3QkYsU0FBQUEsc0NBQVUsd0JBQVVJLGtDQUFTRjtRQUF2Q0M7UUFBVUg7O0lBQ2xCLElBQU0sQUFBRU4sY0FBZ0JXLElBQUFBLGlCQUFTLElBQXpCWDtJQUNSLElBQWlDWSxtQ0FBQUEsT0FBTUMsUUFBUSxDQUFDO2VBQU1kLDBCQUEwQkMsYUFBYTtZQUFFTSxTQUFBQTtRQUFRLEdBQUdRLEdBQUcsQ0FBQztnQkFBR0MsYUFBQUE7bUJBQVdBOztZQUFySEMseUJBQTBCSjtJQUVqQyxJQUFJLENBQUNJLHVCQUF1QkMsTUFBTSxFQUFFO1FBQ2xDLE9BQU87SUFDVDtJQUVBLHFCQUFPTCxPQUFNTSxZQUFZLENBQUNULFVBQVUsd0NBQUtDO1FBQU1NLHdCQUFBQTs7QUFDakQifQ==