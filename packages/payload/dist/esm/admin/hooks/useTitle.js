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
import { useTranslation } from "react-i18next";
import { useFormFields } from "../components/forms/Form/context";
import { useConfig } from "../components/utilities/Config";
import { formatDate } from "../utilities/formatDate";
import { getObjectDotNotation } from "../../utilities/getObjectDotNotation";
// either send the `useAsTitle` field itself
// or an object to dynamically extract the `useAsTitle` field from
export var formatUseAsTitle = function(args) {
    var _field, _collection_fields, _collection, _fieldConfig;
    var fieldFromProps = args.field, doc = args.doc, collection = args.collection, _args_collection = args.collection, useAsTitle = _args_collection.admin.useAsTitle, i18n = args.i18n, _args_config = args.config, _args_config_admin = _args_config.admin, dateFormatFromConfig = _args_config_admin.dateFormat;
    if (!fieldFromProps && !doc) {
        return "";
    }
    var field = fieldFromProps || getObjectDotNotation(doc, collection.admin.useAsTitle);
    var title = typeof field === "string" ? field : (_field = field) === null || _field === void 0 ? void 0 : _field.value;
    var fieldConfig = (_collection = collection) === null || _collection === void 0 ? void 0 : (_collection_fields = _collection.fields) === null || _collection_fields === void 0 ? void 0 : _collection_fields.find(function(f) {
        var _f;
        return "name" in f && ((_f = f) === null || _f === void 0 ? void 0 : _f.name) === useAsTitle;
    });
    var isDate = ((_fieldConfig = fieldConfig) === null || _fieldConfig === void 0 ? void 0 : _fieldConfig.type) === "date";
    if (title && isDate) {
        var _fieldConfig_admin_date, _fieldConfig_admin, _fieldConfig1, _i18n;
        var dateFormat = ((_fieldConfig1 = fieldConfig) === null || _fieldConfig1 === void 0 ? void 0 : (_fieldConfig_admin = _fieldConfig1.admin) === null || _fieldConfig_admin === void 0 ? void 0 : (_fieldConfig_admin_date = _fieldConfig_admin.date) === null || _fieldConfig_admin_date === void 0 ? void 0 : _fieldConfig_admin_date.displayFormat) || dateFormatFromConfig;
        title = formatDate(title, dateFormat, (_i18n = i18n) === null || _i18n === void 0 ? void 0 : _i18n.language);
    }
    return title;
};
var useTitle = function(collection) {
    var i18n = useTranslation().i18n;
    var field = useFormFields(function(param) {
        var _param = _sliced_to_array(param, 1), formFields = _param[0];
        var _collection_admin, _collection;
        return formFields[(_collection = collection) === null || _collection === void 0 ? void 0 : (_collection_admin = _collection.admin) === null || _collection_admin === void 0 ? void 0 : _collection_admin.useAsTitle];
    });
    var config = useConfig();
    return formatUseAsTitle({
        field: field,
        collection: collection,
        i18n: i18n,
        config: config
    });
};
export default useTitle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZG1pbi9ob29rcy91c2VUaXRsZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGkxOG5leHQgZnJvbSAnaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgU2FuaXRpemVkQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgdXNlRm9ybUZpZWxkcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybXMvRm9ybS9jb250ZXh0JztcbmltcG9ydCB7IEZvcm1GaWVsZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybXMvRm9ybS90eXBlcyc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi9jb21wb25lbnRzL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4uL3V0aWxpdGllcy9mb3JtYXREYXRlJztcbmltcG9ydCB7IGdldE9iamVjdERvdE5vdGF0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2dldE9iamVjdERvdE5vdGF0aW9uJztcblxuLy8gZWl0aGVyIHNlbmQgdGhlIGB1c2VBc1RpdGxlYCBmaWVsZCBpdHNlbGZcbi8vIG9yIGFuIG9iamVjdCB0byBkeW5hbWljYWxseSBleHRyYWN0IHRoZSBgdXNlQXNUaXRsZWAgZmllbGQgZnJvbVxuZXhwb3J0IGNvbnN0IGZvcm1hdFVzZUFzVGl0bGUgPSAoYXJnczoge1xuICBmaWVsZD86IEZvcm1GaWVsZFxuICBkb2M/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGNvbGxlY3Rpb246IFNhbml0aXplZENvbGxlY3Rpb25Db25maWdcbiAgaTE4bjogdHlwZW9mIGkxOG5leHRcbiAgY29uZmlnOiBTYW5pdGl6ZWRDb25maWdcbn0pOiBzdHJpbmcgPT4ge1xuICBjb25zdCB7XG4gICAgZmllbGQ6IGZpZWxkRnJvbVByb3BzLFxuICAgIGRvYyxcbiAgICBjb2xsZWN0aW9uLFxuICAgIGNvbGxlY3Rpb246IHtcbiAgICAgIGFkbWluOiB7IHVzZUFzVGl0bGUgfSxcbiAgICB9LFxuICAgIGkxOG4sXG4gICAgY29uZmlnOiB7XG4gICAgICBhZG1pbjoge1xuICAgICAgICBkYXRlRm9ybWF0OiBkYXRlRm9ybWF0RnJvbUNvbmZpZyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSA9IGFyZ3M7XG5cbiAgaWYgKCFmaWVsZEZyb21Qcm9wcyAmJiAhZG9jKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY29uc3QgZmllbGQgPSBmaWVsZEZyb21Qcm9wcyB8fCBnZXRPYmplY3REb3ROb3RhdGlvbjxGb3JtRmllbGQ+KGRvYywgY29sbGVjdGlvbi5hZG1pbi51c2VBc1RpdGxlKTtcblxuICBsZXQgdGl0bGUgPSB0eXBlb2YgZmllbGQgPT09ICdzdHJpbmcnID8gZmllbGQgOiBmaWVsZD8udmFsdWUgYXMgc3RyaW5nO1xuXG4gIGNvbnN0IGZpZWxkQ29uZmlnID0gY29sbGVjdGlvbj8uZmllbGRzPy5maW5kKChmKSA9PiAnbmFtZScgaW4gZiAmJiBmPy5uYW1lID09PSB1c2VBc1RpdGxlKTtcbiAgY29uc3QgaXNEYXRlID0gZmllbGRDb25maWc/LnR5cGUgPT09ICdkYXRlJztcblxuICBpZiAodGl0bGUgJiYgaXNEYXRlKSB7XG4gICAgY29uc3QgZGF0ZUZvcm1hdCA9IGZpZWxkQ29uZmlnPy5hZG1pbj8uZGF0ZT8uZGlzcGxheUZvcm1hdCB8fCBkYXRlRm9ybWF0RnJvbUNvbmZpZztcbiAgICB0aXRsZSA9IGZvcm1hdERhdGUodGl0bGUsIGRhdGVGb3JtYXQsIGkxOG4/Lmxhbmd1YWdlKTtcbiAgfVxuXG4gIHJldHVybiB0aXRsZTtcbn07XG5cbmNvbnN0IHVzZVRpdGxlID0gKGNvbGxlY3Rpb246IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IGZpZWxkID0gdXNlRm9ybUZpZWxkcygoW2Zvcm1GaWVsZHNdKSA9PiBmb3JtRmllbGRzW2NvbGxlY3Rpb24/LmFkbWluPy51c2VBc1RpdGxlXSk7XG4gIGNvbnN0IGNvbmZpZyA9IHVzZUNvbmZpZygpO1xuXG4gIHJldHVybiBmb3JtYXRVc2VBc1RpdGxlKHsgZmllbGQsIGNvbGxlY3Rpb24sIGkxOG4sIGNvbmZpZyB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVRpdGxlO1xuIl0sIm5hbWVzIjpbInVzZVRyYW5zbGF0aW9uIiwidXNlRm9ybUZpZWxkcyIsInVzZUNvbmZpZyIsImZvcm1hdERhdGUiLCJnZXRPYmplY3REb3ROb3RhdGlvbiIsImZvcm1hdFVzZUFzVGl0bGUiLCJhcmdzIiwiZmllbGQiLCJjb2xsZWN0aW9uIiwiZmllbGRDb25maWciLCJmaWVsZEZyb21Qcm9wcyIsImRvYyIsImFkbWluIiwidXNlQXNUaXRsZSIsImkxOG4iLCJjb25maWciLCJkYXRlRm9ybWF0IiwiZGF0ZUZvcm1hdEZyb21Db25maWciLCJ0aXRsZSIsInZhbHVlIiwiZmllbGRzIiwiZmluZCIsImYiLCJuYW1lIiwiaXNEYXRlIiwidHlwZSIsImRhdGUiLCJkaXNwbGF5Rm9ybWF0IiwibGFuZ3VhZ2UiLCJ1c2VUaXRsZSIsImZvcm1GaWVsZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxTQUFTQSxjQUFjLFFBQVEsZ0JBQWdCO0FBRy9DLFNBQVNDLGFBQWEsUUFBUSxtQ0FBbUM7QUFFakUsU0FBU0MsU0FBUyxRQUFRLGlDQUFpQztBQUMzRCxTQUFTQyxVQUFVLFFBQVEsMEJBQTBCO0FBQ3JELFNBQVNDLG9CQUFvQixRQUFRLHVDQUF1QztBQUU1RSw0Q0FBNEM7QUFDNUMsa0VBQWtFO0FBQ2xFLE9BQU8sSUFBTUMsbUJBQW1CLFNBQUNDO1FBNEJpQkMsUUFFNUJDLG9CQUFBQSxhQUNMQztJQXhCZixJQUNFRixBQUFPRyxpQkFZTEosS0FaRkMsT0FDQUksTUFXRUwsS0FYRkssS0FDQUgsYUFVRUYsS0FWRkUsK0JBVUVGLEtBVEZFLFlBQ0VJLEFBQVNDLDhCQUFURCxNQUFTQyxZQUVYQyxPQU1FUixLQU5GUSxxQkFNRVIsS0FMRlMsMENBQ0VILE9BQ0VJLEFBQVlDLDBDQUFaRDtJQUtOLElBQUksQ0FBQ04sa0JBQWtCLENBQUNDLEtBQUs7UUFDM0IsT0FBTztJQUNUO0lBRUEsSUFBTUosUUFBUUcsa0JBQWtCTixxQkFBZ0NPLEtBQUtILFdBQVdJLEtBQUssQ0FBQ0MsVUFBVTtJQUVoRyxJQUFJSyxRQUFRLE9BQU9YLFVBQVUsV0FBV0EsU0FBUUEsU0FBQUEsbUJBQUFBLDZCQUFBQSxPQUFPWSxLQUFLO0lBRTVELElBQU1WLGVBQWNELGNBQUFBLHdCQUFBQSxtQ0FBQUEscUJBQUFBLFlBQVlZLE1BQU0sY0FBbEJaLHlDQUFBQSxtQkFBb0JhLElBQUksQ0FBQyxTQUFDQztZQUFxQkE7ZUFBZixVQUFVQSxLQUFLQSxFQUFBQSxLQUFBQSxlQUFBQSx5QkFBQUEsR0FBR0MsSUFBSSxNQUFLVjs7SUFDL0UsSUFBTVcsU0FBU2YsRUFBQUEsZUFBQUEseUJBQUFBLG1DQUFBQSxhQUFhZ0IsSUFBSSxNQUFLO0lBRXJDLElBQUlQLFNBQVNNLFFBQVE7WUFDQWYseUJBQUFBLG9CQUFBQSxlQUNtQks7UUFEdEMsSUFBTUUsYUFBYVAsRUFBQUEsZ0JBQUFBLHlCQUFBQSxxQ0FBQUEscUJBQUFBLGNBQWFHLEtBQUssY0FBbEJILDBDQUFBQSwwQkFBQUEsbUJBQW9CaUIsSUFBSSxjQUF4QmpCLDhDQUFBQSx3QkFBMEJrQixhQUFhLEtBQUlWO1FBQzlEQyxRQUFRZixXQUFXZSxPQUFPRixhQUFZRixRQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU1jLFFBQVE7SUFDdEQ7SUFFQSxPQUFPVjtBQUNULEVBQUU7QUFFRixJQUFNVyxXQUFXLFNBQUNyQjtJQUNoQixJQUFNLEFBQUVNLE9BQVNkLGlCQUFUYztJQUNSLElBQU1QLFFBQVFOLGNBQWM7aURBQUU2QjtZQUEyQnRCLG1CQUFBQTtlQUFYc0IsVUFBVSxFQUFDdEIsY0FBQUEsd0JBQUFBLG1DQUFBQSxvQkFBQUEsWUFBWUksS0FBSyxjQUFqQkosd0NBQUFBLGtCQUFtQkssVUFBVSxDQUFDOztJQUN2RixJQUFNRSxTQUFTYjtJQUVmLE9BQU9HLGlCQUFpQjtRQUFFRSxPQUFBQTtRQUFPQyxZQUFBQTtRQUFZTSxNQUFBQTtRQUFNQyxRQUFBQTtJQUFPO0FBQzVEO0FBRUEsZUFBZWMsU0FBUyJ9