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
import React, { Fragment, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../../../../../../utilities/Config";
import { useAuth } from "../../../../../../../utilities/Auth";
import { useFormFields } from "../../../../../../Form/context";
import Relationship from "../../../../../Relationship";
import Select from "../../../../../Select";
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
    var collections = useConfig().collections;
    var permissions = useAuth().permissions;
    var t = useTranslation("fields").t;
    var _useState = _sliced_to_array(useState(function() {
        return createOptions(collections, permissions);
    }), 2), options = _useState[0], setOptions = _useState[1];
    var relationTo = useFormFields(function(param) {
        var _param = _sliced_to_array(param, 1), fields = _param[0];
        var _fields_relationTo;
        return (_fields_relationTo = fields.relationTo) === null || _fields_relationTo === void 0 ? void 0 : _fields_relationTo.value;
    });
    useEffect(function() {
        setOptions(createOptions(collections, permissions));
    }, [
        collections,
        permissions
    ]);
    return /*#__PURE__*/ React.createElement(Fragment, null, /*#__PURE__*/ React.createElement(Select, {
        required: true,
        label: t("relationTo"),
        name: "relationTo",
        options: options
    }), relationTo && /*#__PURE__*/ React.createElement(Relationship, {
        label: t("relatedDocument"),
        name: "value",
        relationTo: relationTo,
        required: true
    }));
};
export default RelationshipFields;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL3JlbGF0aW9uc2hpcC9CdXR0b24vRmllbGRzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuaW1wb3J0IHsgdXNlRm9ybUZpZWxkcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL0Zvcm0vY29udGV4dCc7XG5pbXBvcnQgUmVsYXRpb25zaGlwIGZyb20gJy4uLy4uLy4uLy4uLy4uL1JlbGF0aW9uc2hpcCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4uLy4uLy4uLy4uLy4uL1NlbGVjdCc7XG5cbmNvbnN0IGNyZWF0ZU9wdGlvbnMgPSAoY29sbGVjdGlvbnMsIHBlcm1pc3Npb25zKSA9PiBjb2xsZWN0aW9ucy5yZWR1Y2UoKG9wdGlvbnMsIGNvbGxlY3Rpb24pID0+IHtcbiAgaWYgKHBlcm1pc3Npb25zPy5jb2xsZWN0aW9ucz8uW2NvbGxlY3Rpb24uc2x1Z10/LnJlYWQ/LnBlcm1pc3Npb24gJiYgY29sbGVjdGlvbj8uYWRtaW4/LmVuYWJsZVJpY2hUZXh0UmVsYXRpb25zaGlwKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBjb2xsZWN0aW9uLmxhYmVscy5wbHVyYWwsXG4gICAgICAgIHZhbHVlOiBjb2xsZWN0aW9uLnNsdWcsXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucztcbn0sIFtdKTtcblxuY29uc3QgUmVsYXRpb25zaGlwRmllbGRzID0gKCkgPT4ge1xuICBjb25zdCB7IGNvbGxlY3Rpb25zIH0gPSB1c2VDb25maWcoKTtcbiAgY29uc3QgeyBwZXJtaXNzaW9ucyB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdmaWVsZHMnKTtcblxuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZSgoKSA9PiBjcmVhdGVPcHRpb25zKGNvbGxlY3Rpb25zLCBwZXJtaXNzaW9ucykpO1xuICBjb25zdCByZWxhdGlvblRvID0gdXNlRm9ybUZpZWxkczxzdHJpbmc+KChbZmllbGRzXSkgPT4gZmllbGRzLnJlbGF0aW9uVG8/LnZhbHVlIGFzIHN0cmluZyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRPcHRpb25zKGNyZWF0ZU9wdGlvbnMoY29sbGVjdGlvbnMsIHBlcm1pc3Npb25zKSk7XG4gIH0sIFtjb2xsZWN0aW9ucywgcGVybWlzc2lvbnNdKTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgbGFiZWw9e3QoJ3JlbGF0aW9uVG8nKX1cbiAgICAgICAgbmFtZT1cInJlbGF0aW9uVG9cIlxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgLz5cbiAgICAgIHtyZWxhdGlvblRvICYmIChcbiAgICAgICAgPFJlbGF0aW9uc2hpcFxuICAgICAgICAgIGxhYmVsPXt0KCdyZWxhdGVkRG9jdW1lbnQnKX1cbiAgICAgICAgICBuYW1lPVwidmFsdWVcIlxuICAgICAgICAgIHJlbGF0aW9uVG89e3JlbGF0aW9uVG99XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlbGF0aW9uc2hpcEZpZWxkcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZyYWdtZW50IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUNvbmZpZyIsInVzZUF1dGgiLCJ1c2VGb3JtRmllbGRzIiwiUmVsYXRpb25zaGlwIiwiU2VsZWN0IiwiY3JlYXRlT3B0aW9ucyIsImNvbGxlY3Rpb25zIiwicGVybWlzc2lvbnMiLCJyZWR1Y2UiLCJvcHRpb25zIiwiY29sbGVjdGlvbiIsInNsdWciLCJyZWFkIiwicGVybWlzc2lvbiIsImFkbWluIiwiZW5hYmxlUmljaFRleHRSZWxhdGlvbnNoaXAiLCJsYWJlbCIsImxhYmVscyIsInBsdXJhbCIsInZhbHVlIiwiUmVsYXRpb25zaGlwRmllbGRzIiwidCIsInNldE9wdGlvbnMiLCJyZWxhdGlvblRvIiwiZmllbGRzIiwicmVxdWlyZWQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsUUFBUSxRQUFRO0FBQzdELFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDL0MsU0FBU0MsU0FBUyxRQUFRLHdDQUF3QztBQUNsRSxTQUFTQyxPQUFPLFFBQVEsc0NBQXNDO0FBQzlELFNBQVNDLGFBQWEsUUFBUSxpQ0FBaUM7QUFDL0QsT0FBT0Msa0JBQWtCLDhCQUE4QjtBQUN2RCxPQUFPQyxZQUFZLHdCQUF3QjtBQUUzQyxJQUFNQyxnQkFBZ0IsU0FBQ0MsYUFBYUM7V0FBZ0JELFlBQVlFLE1BQU0sQ0FBQyxTQUFDQyxTQUFTQztZQUMzRUgsK0NBQUFBLDBDQUFBQSwwQkFBQUEsY0FBaUVHLG1CQUFBQTtRQUFyRSxJQUFJSCxFQUFBQSxlQUFBQSx5QkFBQUEsb0NBQUFBLDJCQUFBQSxhQUFhRCxXQUFXLGNBQXhCQyxnREFBQUEsMkNBQUFBLHdCQUEwQixDQUFDRyxXQUFXQyxJQUFJLENBQUMsY0FBM0NKLGdFQUFBQSxnREFBQUEseUNBQTZDSyxJQUFJLGNBQWpETCxvRUFBQUEsOENBQW1ETSxVQUFVLE9BQUlILGNBQUFBLHdCQUFBQSxtQ0FBQUEsb0JBQUFBLFlBQVlJLEtBQUssY0FBakJKLHdDQUFBQSxrQkFBbUJLLDBCQUEwQixHQUFFO1lBQ2xILE9BQU8sQUFDTCxxQkFBR04sZ0JBREU7Z0JBRUw7b0JBQ0VPLE9BQU9OLFdBQVdPLE1BQU0sQ0FBQ0MsTUFBTTtvQkFDL0JDLE9BQU9ULFdBQVdDLElBQUk7Z0JBQ3hCO2FBQ0Q7UUFDSDtRQUVBLE9BQU9GO0lBQ1QsR0FBRyxFQUFFOztBQUVMLElBQU1XLHFCQUFxQjtJQUN6QixJQUFNLEFBQUVkLGNBQWdCTixZQUFoQk07SUFDUixJQUFNLEFBQUVDLGNBQWdCTixVQUFoQk07SUFDUixJQUFNLEFBQUVjLElBQU10QixlQUFlLFVBQXJCc0I7SUFFUixJQUE4QnhCLDZCQUFBQSxTQUFTO2VBQU1RLGNBQWNDLGFBQWFDO1lBQWpFRSxVQUF1QlosY0FBZHlCLGFBQWN6QjtJQUM5QixJQUFNMEIsYUFBYXJCLGNBQXNCO2lEQUFFc0I7WUFBWUE7Z0JBQUFBLHFCQUFBQSxPQUFPRCxVQUFVLGNBQWpCQyx5Q0FBQUEsbUJBQW1CTCxLQUFLOztJQUUvRXJCLFVBQVU7UUFDUndCLFdBQVdqQixjQUFjQyxhQUFhQztJQUN4QyxHQUFHO1FBQUNEO1FBQWFDO0tBQVk7SUFFN0IscUJBQ0Usb0JBQUNYLDhCQUNDLG9CQUFDUTtRQUNDcUIsVUFBQUE7UUFDQVQsT0FBT0ssRUFBRTtRQUNUSyxNQUFLO1FBQ0xqQixTQUFTQTtRQUVWYyw0QkFDQyxvQkFBQ3BCO1FBQ0NhLE9BQU9LLEVBQUU7UUFDVEssTUFBSztRQUNMSCxZQUFZQTtRQUNaRSxVQUFBQTs7QUFLVjtBQUVBLGVBQWVMLG1CQUFtQiJ9