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
var _Config = require("../../utilities/Config");
var _Auth = require("../../utilities/Auth");
var _StepNav = require("../../elements/StepNav");
var _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../utilities/RenderCustomComponent"));
var _Default = /*#__PURE__*/ _interop_require_default(require("./Default"));
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
var Dashboard = function() {
    var _useAuth = (0, _Auth.useAuth)(), permissions = _useAuth.permissions, user = _useAuth.user;
    var setStepNav = (0, _StepNav.useStepNav)().setStepNav;
    var _useState = _sliced_to_array((0, _react.useState)([]), 2), filteredGlobals = _useState[0], setFilteredGlobals = _useState[1];
    var _useConfig = (0, _Config.useConfig)(), collections = _useConfig.collections, globals = _useConfig.globals, tmp = _useConfig.admin, _ref = tmp === void 0 ? {} : tmp, tmp1 = _ref.components, _ref1 = tmp1 === void 0 ? {} : tmp1, tmp2 = _ref1.views, _ref2 = tmp2 === void 0 ? {
        Dashboard: undefined
    } : tmp2, CustomDashboard = _ref2.Dashboard;
    (0, _react.useEffect)(function() {
        setFilteredGlobals(globals.filter(function(global) {
            var _permissions_globals_global_slug_read, _permissions_globals_global_slug, _permissions_globals, _permissions;
            return (_permissions = permissions) === null || _permissions === void 0 ? void 0 : (_permissions_globals = _permissions.globals) === null || _permissions_globals === void 0 ? void 0 : (_permissions_globals_global_slug = _permissions_globals[global.slug]) === null || _permissions_globals_global_slug === void 0 ? void 0 : (_permissions_globals_global_slug_read = _permissions_globals_global_slug.read) === null || _permissions_globals_global_slug_read === void 0 ? void 0 : _permissions_globals_global_slug_read.permission;
        }));
    }, [
        permissions,
        globals
    ]);
    (0, _react.useEffect)(function() {
        setStepNav([]);
    }, [
        setStepNav
    ]);
    return /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        DefaultComponent: _Default.default,
        CustomComponent: CustomDashboard,
        componentProps: {
            globals: filteredGlobals,
            collections: collections.filter(function(collection) {
                var _permissions_collections_collection_slug_read, _permissions_collections_collection_slug, _permissions_collections, _permissions;
                return (_permissions = permissions) === null || _permissions === void 0 ? void 0 : (_permissions_collections = _permissions.collections) === null || _permissions_collections === void 0 ? void 0 : (_permissions_collections_collection_slug = _permissions_collections[collection.slug]) === null || _permissions_collections_collection_slug === void 0 ? void 0 : (_permissions_collections_collection_slug_read = _permissions_collections_collection_slug.read) === null || _permissions_collections_collection_slug_read === void 0 ? void 0 : _permissions_collections_collection_slug_read.permission;
            }),
            permissions: permissions,
            user: user
        }
    });
};
var _default = Dashboard;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0Rhc2hib2FyZC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQXV0aCc7XG5pbXBvcnQgeyB1c2VTdGVwTmF2IH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvU3RlcE5hdic7XG5pbXBvcnQgUmVuZGVyQ3VzdG9tQ29tcG9uZW50IGZyb20gJy4uLy4uL3V0aWxpdGllcy9SZW5kZXJDdXN0b21Db21wb25lbnQnO1xuaW1wb3J0IERlZmF1bHREYXNoYm9hcmQgZnJvbSAnLi9EZWZhdWx0JztcblxuY29uc3QgRGFzaGJvYXJkOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgeyBwZXJtaXNzaW9ucywgdXNlciB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB7IHNldFN0ZXBOYXYgfSA9IHVzZVN0ZXBOYXYoKTtcbiAgY29uc3QgW2ZpbHRlcmVkR2xvYmFscywgc2V0RmlsdGVyZWRHbG9iYWxzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCB7XG4gICAgY29sbGVjdGlvbnMsXG4gICAgZ2xvYmFscyxcbiAgICBhZG1pbjoge1xuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIERhc2hib2FyZDogQ3VzdG9tRGFzaGJvYXJkLFxuICAgICAgICB9ID0ge1xuICAgICAgICAgIERhc2hib2FyZDogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgfSA9IHt9LFxuICAgIH0gPSB7fSxcbiAgfSA9IHVzZUNvbmZpZygpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RmlsdGVyZWRHbG9iYWxzKFxuICAgICAgZ2xvYmFscy5maWx0ZXIoKGdsb2JhbCkgPT4gcGVybWlzc2lvbnM/Lmdsb2JhbHM/LltnbG9iYWwuc2x1Z10/LnJlYWQ/LnBlcm1pc3Npb24pLFxuICAgICk7XG4gIH0sIFtwZXJtaXNzaW9ucywgZ2xvYmFsc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3RlcE5hdihbXSk7XG4gIH0sIFtzZXRTdGVwTmF2XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVuZGVyQ3VzdG9tQ29tcG9uZW50XG4gICAgICBEZWZhdWx0Q29tcG9uZW50PXtEZWZhdWx0RGFzaGJvYXJkfVxuICAgICAgQ3VzdG9tQ29tcG9uZW50PXtDdXN0b21EYXNoYm9hcmR9XG4gICAgICBjb21wb25lbnRQcm9wcz17e1xuICAgICAgICBnbG9iYWxzOiBmaWx0ZXJlZEdsb2JhbHMsXG4gICAgICAgIGNvbGxlY3Rpb25zOiBjb2xsZWN0aW9ucy5maWx0ZXIoKGNvbGxlY3Rpb24pID0+IHBlcm1pc3Npb25zPy5jb2xsZWN0aW9ucz8uW2NvbGxlY3Rpb24uc2x1Z10/LnJlYWQ/LnBlcm1pc3Npb24pLFxuICAgICAgICBwZXJtaXNzaW9ucyxcbiAgICAgICAgdXNlcixcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiJdLCJuYW1lcyI6WyJEYXNoYm9hcmQiLCJ1c2VBdXRoIiwicGVybWlzc2lvbnMiLCJ1c2VyIiwic2V0U3RlcE5hdiIsInVzZVN0ZXBOYXYiLCJ1c2VTdGF0ZSIsImZpbHRlcmVkR2xvYmFscyIsInNldEZpbHRlcmVkR2xvYmFscyIsInVzZUNvbmZpZyIsImNvbGxlY3Rpb25zIiwiZ2xvYmFscyIsImFkbWluIiwiY29tcG9uZW50cyIsInZpZXdzIiwidW5kZWZpbmVkIiwiQ3VzdG9tRGFzaGJvYXJkIiwidXNlRWZmZWN0IiwiZmlsdGVyIiwiZ2xvYmFsIiwic2x1ZyIsInJlYWQiLCJwZXJtaXNzaW9uIiwiUmVuZGVyQ3VzdG9tQ29tcG9uZW50IiwiRGVmYXVsdENvbXBvbmVudCIsIkRlZmF1bHREYXNoYm9hcmQiLCJDdXN0b21Db21wb25lbnQiLCJjb21wb25lbnRQcm9wcyIsImNvbGxlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBa0RBOzs7ZUFBQTs7OzZEQWxEMkM7c0JBQ2pCO29CQUNGO3VCQUNHOzRFQUNPOzhEQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQU1BLFlBQXNCO0lBQzFCLElBQThCQyxXQUFBQSxJQUFBQSxhQUFPLEtBQTdCQyxjQUFzQkQsU0FBdEJDLGFBQWFDLE9BQVNGLFNBQVRFO0lBQ3JCLElBQU0sQUFBRUMsYUFBZUMsSUFBQUEsbUJBQVUsSUFBekJEO0lBQ1IsSUFBOENFLDZCQUFBQSxJQUFBQSxlQUFRLEVBQUMsRUFBRSxPQUFsREMsa0JBQXVDRCxjQUF0QkUscUJBQXNCRjtJQUU5QyxJQVlJRyxhQUFBQSxJQUFBQSxpQkFBUyxLQVhYQyxjQVdFRCxXQVhGQyxhQUNBQyxVQVVFRixXQVZGRSxTQUNPLE1BU0xGLFdBVEZHLGNBQU8saUJBUUgsQ0FBQyxJQVJFLEtBQ08sWUFBWkMsb0JBQVksa0JBTVIsQ0FBQyxJQU5PLE1BQ0gsYUFBUEMsZUFBTyxrQkFFSDtRQUNGZCxXQUFXZTtJQUNiLElBSk8sTUFDTGYsQUFBV2dCLHdCQUFYaEI7SUFRUmlCLElBQUFBLGdCQUFTLEVBQUM7UUFDUlQsbUJBQ0VHLFFBQVFPLE1BQU0sQ0FBQyxTQUFDQztnQkFBV2pCLHVDQUFBQSxrQ0FBQUEsc0JBQUFBO29CQUFBQSxlQUFBQSx5QkFBQUEsb0NBQUFBLHVCQUFBQSxhQUFhUyxPQUFPLGNBQXBCVCw0Q0FBQUEsbUNBQUFBLG9CQUFzQixDQUFDaUIsT0FBT0MsSUFBSSxDQUFDLGNBQW5DbEIsd0RBQUFBLHdDQUFBQSxpQ0FBcUNtQixJQUFJLGNBQXpDbkIsNERBQUFBLHNDQUEyQ29CLFVBQVU7O0lBRXBGLEdBQUc7UUFBQ3BCO1FBQWFTO0tBQVE7SUFFekJNLElBQUFBLGdCQUFTLEVBQUM7UUFDUmIsV0FBVyxFQUFFO0lBQ2YsR0FBRztRQUFDQTtLQUFXO0lBRWYscUJBQ0UsNkJBQUNtQiw4QkFBcUI7UUFDcEJDLGtCQUFrQkMsZ0JBQWdCO1FBQ2xDQyxpQkFBaUJWO1FBQ2pCVyxnQkFBZ0I7WUFDZGhCLFNBQVNKO1lBQ1RHLGFBQWFBLFlBQVlRLE1BQU0sQ0FBQyxTQUFDVTtvQkFBZTFCLCtDQUFBQSwwQ0FBQUEsMEJBQUFBO3dCQUFBQSxlQUFBQSx5QkFBQUEsb0NBQUFBLDJCQUFBQSxhQUFhUSxXQUFXLGNBQXhCUixnREFBQUEsMkNBQUFBLHdCQUEwQixDQUFDMEIsV0FBV1IsSUFBSSxDQUFDLGNBQTNDbEIsZ0VBQUFBLGdEQUFBQSx5Q0FBNkNtQixJQUFJLGNBQWpEbkIsb0VBQUFBLDhDQUFtRG9CLFVBQVU7O1lBQzdHcEIsYUFBQUE7WUFDQUMsTUFBQUE7UUFDRjs7QUFHTjtJQUVBLFdBQWVIIn0=