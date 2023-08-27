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
var _reacti18next = require("react-i18next");
var _Config = require("../../../../../../../utilities/Config");
var _Auth = require("../../../../../../../utilities/Auth");
var _context = require("../../../../../../Form/context");
var _Relationship = /*#__PURE__*/ _interop_require_default(require("../../../../../Relationship"));
var _Select = /*#__PURE__*/ _interop_require_default(require("../../../../../Select"));
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
var createOptions = function(collections, permissions) {
    return collections.reduce(function(options, collection) {
        var _permissions_collections_collection_slug_read, _permissions_collections_collection_slug, _permissions_collections, _permissions, _collection_admin, _collection;
        if (((_permissions = permissions) === null || _permissions === void 0 ? void 0 : (_permissions_collections = _permissions.collections) === null || _permissions_collections === void 0 ? void 0 : (_permissions_collections_collection_slug = _permissions_collections[collection.slug]) === null || _permissions_collections_collection_slug === void 0 ? void 0 : (_permissions_collections_collection_slug_read = _permissions_collections_collection_slug.read) === null || _permissions_collections_collection_slug_read === void 0 ? void 0 : _permissions_collections_collection_slug_read.permission) && ((_collection = collection) === null || _collection === void 0 ? void 0 : (_collection_admin = _collection.admin) === null || _collection_admin === void 0 ? void 0 : _collection_admin.enableRichTextRelationship)) {
            return _to_consumable_array(options).concat([
                {
                    label: collection.labels.plural,
                    value: collection.slug
                }
            ]);
        }
        return options;
    }, []);
};
var RelationshipFields = function() {
    var collections = (0, _Config.useConfig)().collections;
    var permissions = (0, _Auth.useAuth)().permissions;
    var t = (0, _reacti18next.useTranslation)("fields").t;
    var _useState = _sliced_to_array((0, _react.useState)(function() {
        return createOptions(collections, permissions);
    }), 2), options = _useState[0], setOptions = _useState[1];
    var relationTo = (0, _context.useFormFields)(function(param) {
        var _param = _sliced_to_array(param, 1), fields = _param[0];
        var _fields_relationTo;
        return (_fields_relationTo = fields.relationTo) === null || _fields_relationTo === void 0 ? void 0 : _fields_relationTo.value;
    });
    (0, _react.useEffect)(function() {
        setOptions(createOptions(collections, permissions));
    }, [
        collections,
        permissions
    ]);
    return /*#__PURE__*/ _react.default.createElement(_react.Fragment, null, /*#__PURE__*/ _react.default.createElement(_Select.default, {
        required: true,
        label: t("relationTo"),
        name: "relationTo",
        options: options
    }), relationTo && /*#__PURE__*/ _react.default.createElement(_Relationship.default, {
        label: t("relatedDocument"),
        name: "value",
        relationTo: relationTo,
        required: true
    }));
};
var _default = RelationshipFields;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL3JlbGF0aW9uc2hpcC9CdXR0b24vRmllbGRzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuaW1wb3J0IHsgdXNlRm9ybUZpZWxkcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL0Zvcm0vY29udGV4dCc7XG5pbXBvcnQgUmVsYXRpb25zaGlwIGZyb20gJy4uLy4uLy4uLy4uLy4uL1JlbGF0aW9uc2hpcCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4uLy4uLy4uLy4uLy4uL1NlbGVjdCc7XG5cbmNvbnN0IGNyZWF0ZU9wdGlvbnMgPSAoY29sbGVjdGlvbnMsIHBlcm1pc3Npb25zKSA9PiBjb2xsZWN0aW9ucy5yZWR1Y2UoKG9wdGlvbnMsIGNvbGxlY3Rpb24pID0+IHtcbiAgaWYgKHBlcm1pc3Npb25zPy5jb2xsZWN0aW9ucz8uW2NvbGxlY3Rpb24uc2x1Z10/LnJlYWQ/LnBlcm1pc3Npb24gJiYgY29sbGVjdGlvbj8uYWRtaW4/LmVuYWJsZVJpY2hUZXh0UmVsYXRpb25zaGlwKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBjb2xsZWN0aW9uLmxhYmVscy5wbHVyYWwsXG4gICAgICAgIHZhbHVlOiBjb2xsZWN0aW9uLnNsdWcsXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucztcbn0sIFtdKTtcblxuY29uc3QgUmVsYXRpb25zaGlwRmllbGRzID0gKCkgPT4ge1xuICBjb25zdCB7IGNvbGxlY3Rpb25zIH0gPSB1c2VDb25maWcoKTtcbiAgY29uc3QgeyBwZXJtaXNzaW9ucyB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdmaWVsZHMnKTtcblxuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZSgoKSA9PiBjcmVhdGVPcHRpb25zKGNvbGxlY3Rpb25zLCBwZXJtaXNzaW9ucykpO1xuICBjb25zdCByZWxhdGlvblRvID0gdXNlRm9ybUZpZWxkczxzdHJpbmc+KChbZmllbGRzXSkgPT4gZmllbGRzLnJlbGF0aW9uVG8/LnZhbHVlIGFzIHN0cmluZyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRPcHRpb25zKGNyZWF0ZU9wdGlvbnMoY29sbGVjdGlvbnMsIHBlcm1pc3Npb25zKSk7XG4gIH0sIFtjb2xsZWN0aW9ucywgcGVybWlzc2lvbnNdKTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgbGFiZWw9e3QoJ3JlbGF0aW9uVG8nKX1cbiAgICAgICAgbmFtZT1cInJlbGF0aW9uVG9cIlxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgLz5cbiAgICAgIHtyZWxhdGlvblRvICYmIChcbiAgICAgICAgPFJlbGF0aW9uc2hpcFxuICAgICAgICAgIGxhYmVsPXt0KCdyZWxhdGVkRG9jdW1lbnQnKX1cbiAgICAgICAgICBuYW1lPVwidmFsdWVcIlxuICAgICAgICAgIHJlbGF0aW9uVG89e3JlbGF0aW9uVG99XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlbGF0aW9uc2hpcEZpZWxkcztcbiJdLCJuYW1lcyI6WyJjcmVhdGVPcHRpb25zIiwiY29sbGVjdGlvbnMiLCJwZXJtaXNzaW9ucyIsInJlZHVjZSIsIm9wdGlvbnMiLCJjb2xsZWN0aW9uIiwic2x1ZyIsInJlYWQiLCJwZXJtaXNzaW9uIiwiYWRtaW4iLCJlbmFibGVSaWNoVGV4dFJlbGF0aW9uc2hpcCIsImxhYmVsIiwibGFiZWxzIiwicGx1cmFsIiwidmFsdWUiLCJSZWxhdGlvbnNoaXBGaWVsZHMiLCJ1c2VDb25maWciLCJ1c2VBdXRoIiwidCIsInVzZVRyYW5zbGF0aW9uIiwidXNlU3RhdGUiLCJzZXRPcHRpb25zIiwicmVsYXRpb25UbyIsInVzZUZvcm1GaWVsZHMiLCJmaWVsZHMiLCJ1c2VFZmZlY3QiLCJGcmFnbWVudCIsIlNlbGVjdCIsInJlcXVpcmVkIiwibmFtZSIsIlJlbGF0aW9uc2hpcCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFzREE7OztlQUFBOzs7NkRBdERxRDs0QkFDdEI7c0JBQ0w7b0JBQ0Y7dUJBQ007bUVBQ0w7NkRBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkIsSUFBTUEsZ0JBQWdCLFNBQUNDLGFBQWFDO1dBQWdCRCxZQUFZRSxNQUFNLENBQUMsU0FBQ0MsU0FBU0M7WUFDM0VILCtDQUFBQSwwQ0FBQUEsMEJBQUFBLGNBQWlFRyxtQkFBQUE7UUFBckUsSUFBSUgsRUFBQUEsZUFBQUEseUJBQUFBLG9DQUFBQSwyQkFBQUEsYUFBYUQsV0FBVyxjQUF4QkMsZ0RBQUFBLDJDQUFBQSx3QkFBMEIsQ0FBQ0csV0FBV0MsSUFBSSxDQUFDLGNBQTNDSixnRUFBQUEsZ0RBQUFBLHlDQUE2Q0ssSUFBSSxjQUFqREwsb0VBQUFBLDhDQUFtRE0sVUFBVSxPQUFJSCxjQUFBQSx3QkFBQUEsbUNBQUFBLG9CQUFBQSxZQUFZSSxLQUFLLGNBQWpCSix3Q0FBQUEsa0JBQW1CSywwQkFBMEIsR0FBRTtZQUNsSCxPQUFPLEFBQ0wscUJBQUdOLGdCQURFO2dCQUVMO29CQUNFTyxPQUFPTixXQUFXTyxNQUFNLENBQUNDLE1BQU07b0JBQy9CQyxPQUFPVCxXQUFXQyxJQUFJO2dCQUN4QjthQUNEO1FBQ0g7UUFFQSxPQUFPRjtJQUNULEdBQUcsRUFBRTs7QUFFTCxJQUFNVyxxQkFBcUI7SUFDekIsSUFBTSxBQUFFZCxjQUFnQmUsSUFBQUEsaUJBQVMsSUFBekJmO0lBQ1IsSUFBTSxBQUFFQyxjQUFnQmUsSUFBQUEsYUFBTyxJQUF2QmY7SUFDUixJQUFNLEFBQUVnQixJQUFNQyxJQUFBQSw0QkFBYyxFQUFDLFVBQXJCRDtJQUVSLElBQThCRSw2QkFBQUEsSUFBQUEsZUFBUSxFQUFDO2VBQU1wQixjQUFjQyxhQUFhQztZQUFqRUUsVUFBdUJnQixjQUFkQyxhQUFjRDtJQUM5QixJQUFNRSxhQUFhQyxJQUFBQSxzQkFBYSxFQUFTO2lEQUFFQztZQUFZQTtnQkFBQUEscUJBQUFBLE9BQU9GLFVBQVUsY0FBakJFLHlDQUFBQSxtQkFBbUJWLEtBQUs7O0lBRS9FVyxJQUFBQSxnQkFBUyxFQUFDO1FBQ1JKLFdBQVdyQixjQUFjQyxhQUFhQztJQUN4QyxHQUFHO1FBQUNEO1FBQWFDO0tBQVk7SUFFN0IscUJBQ0UsNkJBQUN3QixlQUFRLHNCQUNQLDZCQUFDQyxlQUFNO1FBQ0xDLFVBQUFBO1FBQ0FqQixPQUFPTyxFQUFFO1FBQ1RXLE1BQUs7UUFDTHpCLFNBQVNBO1FBRVZrQiw0QkFDQyw2QkFBQ1EscUJBQVk7UUFDWG5CLE9BQU9PLEVBQUU7UUFDVFcsTUFBSztRQUNMUCxZQUFZQTtRQUNaTSxVQUFBQTs7QUFLVjtJQUVBLFdBQWViIn0=