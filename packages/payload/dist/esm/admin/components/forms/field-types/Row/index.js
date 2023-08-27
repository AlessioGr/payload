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
import React from "react";
import RenderFields from "../../RenderFields";
import withCondition from "../../withCondition";
import { createNestedFieldPath } from "../../Form/createNestedFieldPath";
import { RowProvider } from "./provider";
import "./index.scss";
var Row = function(props) {
    var fields = props.fields, fieldTypes = props.fieldTypes, path = props.path, permissions = props.permissions, _props_admin = props.admin, readOnly = _props_admin.readOnly, className = _props_admin.className, indexPath = props.indexPath;
    var classes = [
        "field-type",
        "row",
        className
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ React.createElement(RowProvider, null, /*#__PURE__*/ React.createElement(RenderFields, {
        readOnly: readOnly,
        className: classes,
        permissions: permissions,
        fieldTypes: fieldTypes,
        indexPath: indexPath,
        fieldSchema: fields.map(function(field) {
            return _object_spread_props(_object_spread({}, field), {
                path: createNestedFieldPath(path, field)
            });
        })
    }));
};
export default withCondition(Row);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1Jvdy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZW5kZXJGaWVsZHMgZnJvbSAnLi4vLi4vUmVuZGVyRmllbGRzJztcbmltcG9ydCB3aXRoQ29uZGl0aW9uIGZyb20gJy4uLy4uL3dpdGhDb25kaXRpb24nO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGNyZWF0ZU5lc3RlZEZpZWxkUGF0aCB9IGZyb20gJy4uLy4uL0Zvcm0vY3JlYXRlTmVzdGVkRmllbGRQYXRoJztcbmltcG9ydCB7IFJvd1Byb3ZpZGVyIH0gZnJvbSAnLi9wcm92aWRlcic7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgUm93OiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGZpZWxkcyxcbiAgICBmaWVsZFR5cGVzLFxuICAgIHBhdGgsXG4gICAgcGVybWlzc2lvbnMsXG4gICAgYWRtaW46IHtcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgY2xhc3NOYW1lLFxuICAgIH0sXG4gICAgaW5kZXhQYXRoLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAnZmllbGQtdHlwZScsXG4gICAgJ3JvdycsXG4gICAgY2xhc3NOYW1lLFxuICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8Um93UHJvdmlkZXI+XG4gICAgICA8UmVuZGVyRmllbGRzXG4gICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgICBwZXJtaXNzaW9ucz17cGVybWlzc2lvbnN9XG4gICAgICAgIGZpZWxkVHlwZXM9e2ZpZWxkVHlwZXN9XG4gICAgICAgIGluZGV4UGF0aD17aW5kZXhQYXRofVxuICAgICAgICBmaWVsZFNjaGVtYT17ZmllbGRzLm1hcCgoZmllbGQpID0+ICh7XG4gICAgICAgICAgLi4uZmllbGQsXG4gICAgICAgICAgcGF0aDogY3JlYXRlTmVzdGVkRmllbGRQYXRoKHBhdGgsIGZpZWxkKSxcbiAgICAgICAgfSkpfVxuICAgICAgLz5cbiAgICA8L1Jvd1Byb3ZpZGVyPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhDb25kaXRpb24oUm93KTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlbmRlckZpZWxkcyIsIndpdGhDb25kaXRpb24iLCJjcmVhdGVOZXN0ZWRGaWVsZFBhdGgiLCJSb3dQcm92aWRlciIsIlJvdyIsInByb3BzIiwiZmllbGRzIiwiZmllbGRUeXBlcyIsInBhdGgiLCJwZXJtaXNzaW9ucyIsImFkbWluIiwicmVhZE9ubHkiLCJjbGFzc05hbWUiLCJpbmRleFBhdGgiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJmaWVsZFNjaGVtYSIsIm1hcCIsImZpZWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLE9BQU9DLGtCQUFrQixxQkFBcUI7QUFDOUMsT0FBT0MsbUJBQW1CLHNCQUFzQjtBQUVoRCxTQUFTQyxxQkFBcUIsUUFBUSxtQ0FBbUM7QUFDekUsU0FBU0MsV0FBVyxRQUFRLGFBQWE7QUFFekMsT0FBTyxlQUFlO0FBRXRCLElBQU1DLE1BQXVCLFNBQUNDO0lBQzVCLElBQ0VDLFNBU0VELE1BVEZDLFFBQ0FDLGFBUUVGLE1BUkZFLFlBQ0FDLE9BT0VILE1BUEZHLE1BQ0FDLGNBTUVKLE1BTkZJLDRCQU1FSixNQUxGSyxPQUNFQyx3QkFBQUEsVUFDQUMseUJBQUFBLFdBRUZDLFlBQ0VSLE1BREZRO0lBR0YsSUFBTUMsVUFBVTtRQUNkO1FBQ0E7UUFDQUY7S0FDRCxDQUFDRyxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztJQUV2QixxQkFDRSxvQkFBQ2QsaUNBQ0Msb0JBQUNIO1FBQ0NXLFVBQVVBO1FBQ1ZDLFdBQVdFO1FBQ1hMLGFBQWFBO1FBQ2JGLFlBQVlBO1FBQ1pNLFdBQVdBO1FBQ1hLLGFBQWFaLE9BQU9hLEdBQUcsQ0FBQyxTQUFDQzttQkFBVyx3Q0FDL0JBO2dCQUNIWixNQUFNTixzQkFBc0JNLE1BQU1ZOzs7O0FBSzVDO0FBQ0EsZUFBZW5CLGNBQWNHLEtBQUsifQ==