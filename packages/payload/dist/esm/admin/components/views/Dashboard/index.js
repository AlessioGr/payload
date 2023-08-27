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
import React, { useEffect, useState } from "react";
import { useConfig } from "../../utilities/Config";
import { useAuth } from "../../utilities/Auth";
import { useStepNav } from "../../elements/StepNav";
import RenderCustomComponent from "../../utilities/RenderCustomComponent";
import DefaultDashboard from "./Default";
var Dashboard = function() {
    var _useAuth = useAuth(), permissions = _useAuth.permissions, user = _useAuth.user;
    var setStepNav = useStepNav().setStepNav;
    var _useState = _sliced_to_array(useState([]), 2), filteredGlobals = _useState[0], setFilteredGlobals = _useState[1];
    var _useConfig = useConfig(), collections = _useConfig.collections, globals = _useConfig.globals, tmp = _useConfig.admin, _ref = tmp === void 0 ? {} : tmp, tmp1 = _ref.components, _ref1 = tmp1 === void 0 ? {} : tmp1, tmp2 = _ref1.views, _ref2 = tmp2 === void 0 ? {
        Dashboard: undefined
    } : tmp2, CustomDashboard = _ref2.Dashboard;
    useEffect(function() {
        setFilteredGlobals(globals.filter(function(global) {
            var _permissions_globals_global_slug_read, _permissions_globals_global_slug, _permissions_globals, _permissions;
            return (_permissions = permissions) === null || _permissions === void 0 ? void 0 : (_permissions_globals = _permissions.globals) === null || _permissions_globals === void 0 ? void 0 : (_permissions_globals_global_slug = _permissions_globals[global.slug]) === null || _permissions_globals_global_slug === void 0 ? void 0 : (_permissions_globals_global_slug_read = _permissions_globals_global_slug.read) === null || _permissions_globals_global_slug_read === void 0 ? void 0 : _permissions_globals_global_slug_read.permission;
        }));
    }, [
        permissions,
        globals
    ]);
    useEffect(function() {
        setStepNav([]);
    }, [
        setStepNav
    ]);
    return /*#__PURE__*/ React.createElement(RenderCustomComponent, {
        DefaultComponent: DefaultDashboard,
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
export default Dashboard;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0Rhc2hib2FyZC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQXV0aCc7XG5pbXBvcnQgeyB1c2VTdGVwTmF2IH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvU3RlcE5hdic7XG5pbXBvcnQgUmVuZGVyQ3VzdG9tQ29tcG9uZW50IGZyb20gJy4uLy4uL3V0aWxpdGllcy9SZW5kZXJDdXN0b21Db21wb25lbnQnO1xuaW1wb3J0IERlZmF1bHREYXNoYm9hcmQgZnJvbSAnLi9EZWZhdWx0JztcblxuY29uc3QgRGFzaGJvYXJkOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgeyBwZXJtaXNzaW9ucywgdXNlciB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB7IHNldFN0ZXBOYXYgfSA9IHVzZVN0ZXBOYXYoKTtcbiAgY29uc3QgW2ZpbHRlcmVkR2xvYmFscywgc2V0RmlsdGVyZWRHbG9iYWxzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCB7XG4gICAgY29sbGVjdGlvbnMsXG4gICAgZ2xvYmFscyxcbiAgICBhZG1pbjoge1xuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIERhc2hib2FyZDogQ3VzdG9tRGFzaGJvYXJkLFxuICAgICAgICB9ID0ge1xuICAgICAgICAgIERhc2hib2FyZDogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgfSA9IHt9LFxuICAgIH0gPSB7fSxcbiAgfSA9IHVzZUNvbmZpZygpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RmlsdGVyZWRHbG9iYWxzKFxuICAgICAgZ2xvYmFscy5maWx0ZXIoKGdsb2JhbCkgPT4gcGVybWlzc2lvbnM/Lmdsb2JhbHM/LltnbG9iYWwuc2x1Z10/LnJlYWQ/LnBlcm1pc3Npb24pLFxuICAgICk7XG4gIH0sIFtwZXJtaXNzaW9ucywgZ2xvYmFsc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3RlcE5hdihbXSk7XG4gIH0sIFtzZXRTdGVwTmF2XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVuZGVyQ3VzdG9tQ29tcG9uZW50XG4gICAgICBEZWZhdWx0Q29tcG9uZW50PXtEZWZhdWx0RGFzaGJvYXJkfVxuICAgICAgQ3VzdG9tQ29tcG9uZW50PXtDdXN0b21EYXNoYm9hcmR9XG4gICAgICBjb21wb25lbnRQcm9wcz17e1xuICAgICAgICBnbG9iYWxzOiBmaWx0ZXJlZEdsb2JhbHMsXG4gICAgICAgIGNvbGxlY3Rpb25zOiBjb2xsZWN0aW9ucy5maWx0ZXIoKGNvbGxlY3Rpb24pID0+IHBlcm1pc3Npb25zPy5jb2xsZWN0aW9ucz8uW2NvbGxlY3Rpb24uc2x1Z10/LnJlYWQ/LnBlcm1pc3Npb24pLFxuICAgICAgICBwZXJtaXNzaW9ucyxcbiAgICAgICAgdXNlcixcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ29uZmlnIiwidXNlQXV0aCIsInVzZVN0ZXBOYXYiLCJSZW5kZXJDdXN0b21Db21wb25lbnQiLCJEZWZhdWx0RGFzaGJvYXJkIiwiRGFzaGJvYXJkIiwicGVybWlzc2lvbnMiLCJ1c2VyIiwic2V0U3RlcE5hdiIsImZpbHRlcmVkR2xvYmFscyIsInNldEZpbHRlcmVkR2xvYmFscyIsImNvbGxlY3Rpb25zIiwiZ2xvYmFscyIsImFkbWluIiwiY29tcG9uZW50cyIsInZpZXdzIiwidW5kZWZpbmVkIiwiQ3VzdG9tRGFzaGJvYXJkIiwiZmlsdGVyIiwiZ2xvYmFsIiwic2x1ZyIsInJlYWQiLCJwZXJtaXNzaW9uIiwiRGVmYXVsdENvbXBvbmVudCIsIkN1c3RvbUNvbXBvbmVudCIsImNvbXBvbmVudFByb3BzIiwiY29sbGVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQVNDLFNBQVMsRUFBRUMsUUFBUSxRQUFRLFFBQVE7QUFDbkQsU0FBU0MsU0FBUyxRQUFRLHlCQUF5QjtBQUNuRCxTQUFTQyxPQUFPLFFBQVEsdUJBQXVCO0FBQy9DLFNBQVNDLFVBQVUsUUFBUSx5QkFBeUI7QUFDcEQsT0FBT0MsMkJBQTJCLHdDQUF3QztBQUMxRSxPQUFPQyxzQkFBc0IsWUFBWTtBQUV6QyxJQUFNQyxZQUFzQjtJQUMxQixJQUE4QkosV0FBQUEsV0FBdEJLLGNBQXNCTCxTQUF0QkssYUFBYUMsT0FBU04sU0FBVE07SUFDckIsSUFBTSxBQUFFQyxhQUFlTixhQUFmTTtJQUNSLElBQThDVCw2QkFBQUEsU0FBUyxFQUFFLE9BQWxEVSxrQkFBdUNWLGNBQXRCVyxxQkFBc0JYO0lBRTlDLElBWUlDLGFBQUFBLGFBWEZXLGNBV0VYLFdBWEZXLGFBQ0FDLFVBVUVaLFdBVkZZLFNBQ08sTUFTTFosV0FURmEsY0FBTyxpQkFRSCxDQUFDLElBUkUsS0FDTyxZQUFaQyxvQkFBWSxrQkFNUixDQUFDLElBTk8sTUFDSCxhQUFQQyxlQUFPLGtCQUVIO1FBQ0ZWLFdBQVdXO0lBQ2IsSUFKTyxNQUNMWCxBQUFXWSx3QkFBWFo7SUFRUlAsVUFBVTtRQUNSWSxtQkFDRUUsUUFBUU0sTUFBTSxDQUFDLFNBQUNDO2dCQUFXYix1Q0FBQUEsa0NBQUFBLHNCQUFBQTtvQkFBQUEsZUFBQUEseUJBQUFBLG9DQUFBQSx1QkFBQUEsYUFBYU0sT0FBTyxjQUFwQk4sNENBQUFBLG1DQUFBQSxvQkFBc0IsQ0FBQ2EsT0FBT0MsSUFBSSxDQUFDLGNBQW5DZCx3REFBQUEsd0NBQUFBLGlDQUFxQ2UsSUFBSSxjQUF6Q2YsNERBQUFBLHNDQUEyQ2dCLFVBQVU7O0lBRXBGLEdBQUc7UUFBQ2hCO1FBQWFNO0tBQVE7SUFFekJkLFVBQVU7UUFDUlUsV0FBVyxFQUFFO0lBQ2YsR0FBRztRQUFDQTtLQUFXO0lBRWYscUJBQ0Usb0JBQUNMO1FBQ0NvQixrQkFBa0JuQjtRQUNsQm9CLGlCQUFpQlA7UUFDakJRLGdCQUFnQjtZQUNkYixTQUFTSDtZQUNURSxhQUFhQSxZQUFZTyxNQUFNLENBQUMsU0FBQ1E7b0JBQWVwQiwrQ0FBQUEsMENBQUFBLDBCQUFBQTt3QkFBQUEsZUFBQUEseUJBQUFBLG9DQUFBQSwyQkFBQUEsYUFBYUssV0FBVyxjQUF4QkwsZ0RBQUFBLDJDQUFBQSx3QkFBMEIsQ0FBQ29CLFdBQVdOLElBQUksQ0FBQyxjQUEzQ2QsZ0VBQUFBLGdEQUFBQSx5Q0FBNkNlLElBQUksY0FBakRmLG9FQUFBQSw4Q0FBbURnQixVQUFVOztZQUM3R2hCLGFBQUFBO1lBQ0FDLE1BQUFBO1FBQ0Y7O0FBR047QUFFQSxlQUFlRixVQUFVIn0=