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
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _reactrouterdom = require("react-router-dom");
var _reacti18next = require("react-i18next");
var _Config = require("../../../../utilities/Config");
var _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../../../utilities/RenderCustomComponent"));
var _fieldtypes = /*#__PURE__*/ _interop_require_default(require("./field-types"));
var _getTranslation = require("../../../../../../utilities/getTranslation");
var _types = require("../../../../../../fields/config/types");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var DefaultCell = function(props) {
    var field = props.field, collection = props.collection, slug = props.collection.slug, cellData = props.cellData, rowData = props.rowData, tmp = props.rowData, id = (tmp === void 0 ? {} : tmp).id, _props_link = props.link, link = _props_link === void 0 ? true : _props_link, onClick = props.onClick, className = props.className;
    var _useConfig = (0, _Config.useConfig)(), admin = _useConfig.routes.admin;
    var _useTranslation = (0, _reacti18next.useTranslation)("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var WrapElement = "span";
    var wrapElementProps = {
        className: className
    };
    if (link) {
        WrapElement = _reactrouterdom.Link;
        wrapElementProps.to = "".concat(admin, "/collections/").concat(slug, "/").concat(id);
    }
    if (typeof onClick === "function") {
        WrapElement = "button";
        wrapElementProps.type = "button";
        wrapElementProps.onClick = function() {
            onClick(props);
        };
    }
    var CellComponent = cellData && _fieldtypes.default[field.type];
    if (!CellComponent) {
        if (collection.upload && (0, _types.fieldAffectsData)(field) && field.name === "filename") {
            CellComponent = _fieldtypes.default.File;
        } else {
            return /*#__PURE__*/ _react.default.createElement(WrapElement, wrapElementProps, (cellData === "" || typeof cellData === "undefined") && "label" in field && t("noLabel", {
                label: (0, _getTranslation.getTranslation)(typeof field.label === "function" ? "data" : field.label || "data", i18n)
            }), typeof cellData === "string" && cellData, typeof cellData === "number" && cellData, typeof cellData === "object" && JSON.stringify(cellData));
        }
    }
    return /*#__PURE__*/ _react.default.createElement(WrapElement, wrapElementProps, /*#__PURE__*/ _react.default.createElement(CellComponent, {
        field: field,
        data: cellData,
        collection: collection,
        rowData: rowData
    }));
};
var Cell = function(props) {
    var colIndex = props.colIndex, collection = props.collection, cellData = props.cellData, rowData = props.rowData, field = props.field, _props_field = props.field, tmp = _props_field.admin, _ref = tmp === void 0 ? {} : tmp, tmp1 = _ref.components, _ref1 = tmp1 === void 0 ? {} : tmp1, CustomCell = _ref1.Cell, link = props.link, onClick = props.onClick, className = props.className;
    return /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        componentProps: {
            rowData: rowData,
            colIndex: colIndex,
            cellData: cellData,
            collection: collection,
            field: field,
            link: link,
            onClick: onClick,
            className: className
        },
        CustomComponent: CustomCell,
        DefaultComponent: DefaultCell
    });
};
var _default = Cell;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCBSZW5kZXJDdXN0b21Db21wb25lbnQgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL1JlbmRlckN1c3RvbUNvbXBvbmVudCc7XG5pbXBvcnQgY2VsbENvbXBvbmVudHMgZnJvbSAnLi9maWVsZC10eXBlcyc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgZmllbGRBZmZlY3RzRGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuXG5jb25zdCBEZWZhdWx0Q2VsbDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBmaWVsZCxcbiAgICBjb2xsZWN0aW9uLFxuICAgIGNvbGxlY3Rpb246IHtcbiAgICAgIHNsdWcsXG4gICAgfSxcbiAgICBjZWxsRGF0YSxcbiAgICByb3dEYXRhLFxuICAgIHJvd0RhdGE6IHtcbiAgICAgIGlkLFxuICAgIH0gPSB7fSxcbiAgICBsaW5rID0gdHJ1ZSxcbiAgICBvbkNsaWNrLFxuICAgIGNsYXNzTmFtZSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHsgcm91dGVzOiB7IGFkbWluIH0gfSA9IHVzZUNvbmZpZygpO1xuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG5cbiAgbGV0IFdyYXBFbGVtZW50OiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT4gfCBzdHJpbmcgPSAnc3Bhbic7XG5cbiAgY29uc3Qgd3JhcEVsZW1lbnRQcm9wczoge1xuICAgIHRvPzogc3RyaW5nXG4gICAgb25DbGljaz86ICgpID0+IHZvaWRcbiAgICB0eXBlPzogJ2J1dHRvbidcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgfSA9IHtcbiAgICBjbGFzc05hbWUsXG4gIH07XG5cbiAgaWYgKGxpbmspIHtcbiAgICBXcmFwRWxlbWVudCA9IExpbms7XG4gICAgd3JhcEVsZW1lbnRQcm9wcy50byA9IGAke2FkbWlufS9jb2xsZWN0aW9ucy8ke3NsdWd9LyR7aWR9YDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFdyYXBFbGVtZW50ID0gJ2J1dHRvbic7XG4gICAgd3JhcEVsZW1lbnRQcm9wcy50eXBlID0gJ2J1dHRvbic7XG4gICAgd3JhcEVsZW1lbnRQcm9wcy5vbkNsaWNrID0gKCkgPT4ge1xuICAgICAgb25DbGljayhwcm9wcyk7XG4gICAgfTtcbiAgfVxuXG4gIGxldCBDZWxsQ29tcG9uZW50ID0gY2VsbERhdGEgJiYgY2VsbENvbXBvbmVudHNbZmllbGQudHlwZV07XG5cbiAgaWYgKCFDZWxsQ29tcG9uZW50KSB7XG4gICAgaWYgKGNvbGxlY3Rpb24udXBsb2FkICYmIGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpICYmIGZpZWxkLm5hbWUgPT09ICdmaWxlbmFtZScpIHtcbiAgICAgIENlbGxDb21wb25lbnQgPSBjZWxsQ29tcG9uZW50cy5GaWxlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcEVsZW1lbnQgey4uLndyYXBFbGVtZW50UHJvcHN9PlxuICAgICAgICAgIHsoKGNlbGxEYXRhID09PSAnJyB8fCB0eXBlb2YgY2VsbERhdGEgPT09ICd1bmRlZmluZWQnKSAmJiAnbGFiZWwnIGluIGZpZWxkKSAmJiB0KCdub0xhYmVsJywgeyBsYWJlbDogZ2V0VHJhbnNsYXRpb24odHlwZW9mIGZpZWxkLmxhYmVsID09PSAnZnVuY3Rpb24nID8gJ2RhdGEnIDogZmllbGQubGFiZWwgfHwgJ2RhdGEnLCBpMThuKSB9KX1cbiAgICAgICAgICB7dHlwZW9mIGNlbGxEYXRhID09PSAnc3RyaW5nJyAmJiBjZWxsRGF0YX1cbiAgICAgICAgICB7dHlwZW9mIGNlbGxEYXRhID09PSAnbnVtYmVyJyAmJiBjZWxsRGF0YX1cbiAgICAgICAgICB7dHlwZW9mIGNlbGxEYXRhID09PSAnb2JqZWN0JyAmJiBKU09OLnN0cmluZ2lmeShjZWxsRGF0YSl9XG4gICAgICAgIDwvV3JhcEVsZW1lbnQ+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFdyYXBFbGVtZW50IHsuLi53cmFwRWxlbWVudFByb3BzfT5cbiAgICAgIDxDZWxsQ29tcG9uZW50XG4gICAgICAgIGZpZWxkPXtmaWVsZH1cbiAgICAgICAgZGF0YT17Y2VsbERhdGF9XG4gICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgIHJvd0RhdGE9e3Jvd0RhdGF9XG4gICAgICAvPlxuICAgIDwvV3JhcEVsZW1lbnQ+XG4gICk7XG59O1xuXG5jb25zdCBDZWxsOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbEluZGV4LFxuICAgIGNvbGxlY3Rpb24sXG4gICAgY2VsbERhdGEsXG4gICAgcm93RGF0YSxcbiAgICBmaWVsZCxcbiAgICBmaWVsZDoge1xuICAgICAgYWRtaW46IHtcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgIENlbGw6IEN1c3RvbUNlbGwsXG4gICAgICAgIH0gPSB7fSxcbiAgICAgIH0gPSB7fSxcbiAgICB9LFxuICAgIGxpbmssXG4gICAgb25DbGljayxcbiAgICBjbGFzc05hbWUsXG4gIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxSZW5kZXJDdXN0b21Db21wb25lbnRcbiAgICAgIGNvbXBvbmVudFByb3BzPXt7XG4gICAgICAgIHJvd0RhdGEsXG4gICAgICAgIGNvbEluZGV4LFxuICAgICAgICBjZWxsRGF0YSxcbiAgICAgICAgY29sbGVjdGlvbixcbiAgICAgICAgZmllbGQsXG4gICAgICAgIGxpbmssXG4gICAgICAgIG9uQ2xpY2ssXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgIH19XG4gICAgICBDdXN0b21Db21wb25lbnQ9e0N1c3RvbUNlbGx9XG4gICAgICBEZWZhdWx0Q29tcG9uZW50PXtEZWZhdWx0Q2VsbH1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2VsbDtcbiJdLCJuYW1lcyI6WyJEZWZhdWx0Q2VsbCIsInByb3BzIiwiZmllbGQiLCJjb2xsZWN0aW9uIiwic2x1ZyIsImNlbGxEYXRhIiwicm93RGF0YSIsImlkIiwibGluayIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJ1c2VDb25maWciLCJyb3V0ZXMiLCJhZG1pbiIsInVzZVRyYW5zbGF0aW9uIiwidCIsImkxOG4iLCJXcmFwRWxlbWVudCIsIndyYXBFbGVtZW50UHJvcHMiLCJMaW5rIiwidG8iLCJ0eXBlIiwiQ2VsbENvbXBvbmVudCIsImNlbGxDb21wb25lbnRzIiwidXBsb2FkIiwiZmllbGRBZmZlY3RzRGF0YSIsIm5hbWUiLCJGaWxlIiwibGFiZWwiLCJnZXRUcmFuc2xhdGlvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiQ2VsbCIsImNvbEluZGV4IiwiY29tcG9uZW50cyIsIkN1c3RvbUNlbGwiLCJSZW5kZXJDdXN0b21Db21wb25lbnQiLCJjb21wb25lbnRQcm9wcyIsIkN1c3RvbUNvbXBvbmVudCIsIkRlZmF1bHRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBd0hBOzs7ZUFBQTs7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