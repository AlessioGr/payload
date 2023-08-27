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
import { useState } from "react";
import { useConfig } from "../../../../utilities/Config";
export var useRelatedCollections = function(relationTo) {
    var config = useConfig();
    var _useState = _sliced_to_array(useState(function() {
        if (relationTo) {
            var relations = typeof relationTo === "string" ? [
                relationTo
            ] : relationTo;
            return relations.map(function(relation) {
                return config.collections.find(function(collection) {
                    return collection.slug === relation;
                });
            });
        }
        return [];
    }), 1), relatedCollections = _useState[0];
    return relatedCollections;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JlbGF0aW9uc2hpcC9BZGROZXcvdXNlUmVsYXRlZENvbGxlY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcblxuZXhwb3J0IGNvbnN0IHVzZVJlbGF0ZWRDb2xsZWN0aW9ucyA9IChyZWxhdGlvblRvOiBzdHJpbmcgfCBzdHJpbmdbXSk6IFNhbml0aXplZENvbGxlY3Rpb25Db25maWdbXSA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IHVzZUNvbmZpZygpO1xuICBjb25zdCBbcmVsYXRlZENvbGxlY3Rpb25zXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICBpZiAocmVsYXRpb25Ubykge1xuICAgICAgY29uc3QgcmVsYXRpb25zID0gdHlwZW9mIHJlbGF0aW9uVG8gPT09ICdzdHJpbmcnID8gW3JlbGF0aW9uVG9dIDogcmVsYXRpb25UbztcbiAgICAgIHJldHVybiByZWxhdGlvbnMubWFwKChyZWxhdGlvbikgPT4gY29uZmlnLmNvbGxlY3Rpb25zLmZpbmQoKGNvbGxlY3Rpb24pID0+IGNvbGxlY3Rpb24uc2x1ZyA9PT0gcmVsYXRpb24pKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9KTtcblxuICByZXR1cm4gcmVsYXRlZENvbGxlY3Rpb25zO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUNvbmZpZyIsInVzZVJlbGF0ZWRDb2xsZWN0aW9ucyIsInJlbGF0aW9uVG8iLCJjb25maWciLCJyZWxhdGlvbnMiLCJtYXAiLCJyZWxhdGlvbiIsImNvbGxlY3Rpb25zIiwiZmluZCIsImNvbGxlY3Rpb24iLCJzbHVnIiwicmVsYXRlZENvbGxlY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsUUFBUSxRQUFRLFFBQVE7QUFFakMsU0FBU0MsU0FBUyxRQUFRLCtCQUErQjtBQUV6RCxPQUFPLElBQU1DLHdCQUF3QixTQUFDQztJQUNwQyxJQUFNQyxTQUFTSDtJQUNmLElBQTZCRCw2QkFBQUEsU0FBUztRQUNwQyxJQUFJRyxZQUFZO1lBQ2QsSUFBTUUsWUFBWSxPQUFPRixlQUFlLFdBQVc7Z0JBQUNBO2FBQVcsR0FBR0E7WUFDbEUsT0FBT0UsVUFBVUMsR0FBRyxDQUFDLFNBQUNDO3VCQUFhSCxPQUFPSSxXQUFXLENBQUNDLElBQUksQ0FBQyxTQUFDQzsyQkFBZUEsV0FBV0MsSUFBSSxLQUFLSjs7O1FBQ2pHO1FBQ0EsT0FBTyxFQUFFO0lBQ1gsUUFOT0sscUJBQXNCWjtJQVE3QixPQUFPWTtBQUNULEVBQUUifQ==