import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../../../utilities/Config";
import RenderCustomComponent from "../../../../utilities/RenderCustomComponent";
import cellComponents from "./field-types";
import { getTranslation } from "../../../../../../utilities/getTranslation";
import { fieldAffectsData } from "../../../../../../fields/config/types";
var DefaultCell = function(props) {
    var field = props.field, collection = props.collection, slug = props.collection.slug, cellData = props.cellData, rowData = props.rowData, tmp = props.rowData, id = (tmp === void 0 ? {} : tmp).id, _props_link = props.link, link = _props_link === void 0 ? true : _props_link, onClick = props.onClick, className = props.className;
    var _useConfig = useConfig(), admin = _useConfig.routes.admin;
    var _useTranslation = useTranslation("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var WrapElement = "span";
    var wrapElementProps = {
        className: className
    };
    if (link) {
        WrapElement = Link;
        wrapElementProps.to = "".concat(admin, "/collections/").concat(slug, "/").concat(id);
    }
    if (typeof onClick === "function") {
        WrapElement = "button";
        wrapElementProps.type = "button";
        wrapElementProps.onClick = function() {
            onClick(props);
        };
    }
    var CellComponent = cellData && cellComponents[field.type];
    if (!CellComponent) {
        if (collection.upload && fieldAffectsData(field) && field.name === "filename") {
            CellComponent = cellComponents.File;
        } else {
            return /*#__PURE__*/ React.createElement(WrapElement, wrapElementProps, (cellData === "" || typeof cellData === "undefined") && "label" in field && t("noLabel", {
                label: getTranslation(typeof field.label === "function" ? "data" : field.label || "data", i18n)
            }), typeof cellData === "string" && cellData, typeof cellData === "number" && cellData, typeof cellData === "object" && JSON.stringify(cellData));
        }
    }
    return /*#__PURE__*/ React.createElement(WrapElement, wrapElementProps, /*#__PURE__*/ React.createElement(CellComponent, {
        field: field,
        data: cellData,
        collection: collection,
        rowData: rowData
    }));
};
var Cell = function(props) {
    var colIndex = props.colIndex, collection = props.collection, cellData = props.cellData, rowData = props.rowData, field = props.field, _props_field = props.field, tmp = _props_field.admin, _ref = tmp === void 0 ? {} : tmp, tmp1 = _ref.components, _ref1 = tmp1 === void 0 ? {} : tmp1, CustomCell = _ref1.Cell, link = props.link, onClick = props.onClick, className = props.className;
    return /*#__PURE__*/ React.createElement(RenderCustomComponent, {
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
export default Cell;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCBSZW5kZXJDdXN0b21Db21wb25lbnQgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL1JlbmRlckN1c3RvbUNvbXBvbmVudCc7XG5pbXBvcnQgY2VsbENvbXBvbmVudHMgZnJvbSAnLi9maWVsZC10eXBlcyc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgZmllbGRBZmZlY3RzRGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuXG5jb25zdCBEZWZhdWx0Q2VsbDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBmaWVsZCxcbiAgICBjb2xsZWN0aW9uLFxuICAgIGNvbGxlY3Rpb246IHtcbiAgICAgIHNsdWcsXG4gICAgfSxcbiAgICBjZWxsRGF0YSxcbiAgICByb3dEYXRhLFxuICAgIHJvd0RhdGE6IHtcbiAgICAgIGlkLFxuICAgIH0gPSB7fSxcbiAgICBsaW5rID0gdHJ1ZSxcbiAgICBvbkNsaWNrLFxuICAgIGNsYXNzTmFtZSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHsgcm91dGVzOiB7IGFkbWluIH0gfSA9IHVzZUNvbmZpZygpO1xuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG5cbiAgbGV0IFdyYXBFbGVtZW50OiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT4gfCBzdHJpbmcgPSAnc3Bhbic7XG5cbiAgY29uc3Qgd3JhcEVsZW1lbnRQcm9wczoge1xuICAgIHRvPzogc3RyaW5nXG4gICAgb25DbGljaz86ICgpID0+IHZvaWRcbiAgICB0eXBlPzogJ2J1dHRvbidcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgfSA9IHtcbiAgICBjbGFzc05hbWUsXG4gIH07XG5cbiAgaWYgKGxpbmspIHtcbiAgICBXcmFwRWxlbWVudCA9IExpbms7XG4gICAgd3JhcEVsZW1lbnRQcm9wcy50byA9IGAke2FkbWlufS9jb2xsZWN0aW9ucy8ke3NsdWd9LyR7aWR9YDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFdyYXBFbGVtZW50ID0gJ2J1dHRvbic7XG4gICAgd3JhcEVsZW1lbnRQcm9wcy50eXBlID0gJ2J1dHRvbic7XG4gICAgd3JhcEVsZW1lbnRQcm9wcy5vbkNsaWNrID0gKCkgPT4ge1xuICAgICAgb25DbGljayhwcm9wcyk7XG4gICAgfTtcbiAgfVxuXG4gIGxldCBDZWxsQ29tcG9uZW50ID0gY2VsbERhdGEgJiYgY2VsbENvbXBvbmVudHNbZmllbGQudHlwZV07XG5cbiAgaWYgKCFDZWxsQ29tcG9uZW50KSB7XG4gICAgaWYgKGNvbGxlY3Rpb24udXBsb2FkICYmIGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpICYmIGZpZWxkLm5hbWUgPT09ICdmaWxlbmFtZScpIHtcbiAgICAgIENlbGxDb21wb25lbnQgPSBjZWxsQ29tcG9uZW50cy5GaWxlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcEVsZW1lbnQgey4uLndyYXBFbGVtZW50UHJvcHN9PlxuICAgICAgICAgIHsoKGNlbGxEYXRhID09PSAnJyB8fCB0eXBlb2YgY2VsbERhdGEgPT09ICd1bmRlZmluZWQnKSAmJiAnbGFiZWwnIGluIGZpZWxkKSAmJiB0KCdub0xhYmVsJywgeyBsYWJlbDogZ2V0VHJhbnNsYXRpb24odHlwZW9mIGZpZWxkLmxhYmVsID09PSAnZnVuY3Rpb24nID8gJ2RhdGEnIDogZmllbGQubGFiZWwgfHwgJ2RhdGEnLCBpMThuKSB9KX1cbiAgICAgICAgICB7dHlwZW9mIGNlbGxEYXRhID09PSAnc3RyaW5nJyAmJiBjZWxsRGF0YX1cbiAgICAgICAgICB7dHlwZW9mIGNlbGxEYXRhID09PSAnbnVtYmVyJyAmJiBjZWxsRGF0YX1cbiAgICAgICAgICB7dHlwZW9mIGNlbGxEYXRhID09PSAnb2JqZWN0JyAmJiBKU09OLnN0cmluZ2lmeShjZWxsRGF0YSl9XG4gICAgICAgIDwvV3JhcEVsZW1lbnQ+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFdyYXBFbGVtZW50IHsuLi53cmFwRWxlbWVudFByb3BzfT5cbiAgICAgIDxDZWxsQ29tcG9uZW50XG4gICAgICAgIGZpZWxkPXtmaWVsZH1cbiAgICAgICAgZGF0YT17Y2VsbERhdGF9XG4gICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgIHJvd0RhdGE9e3Jvd0RhdGF9XG4gICAgICAvPlxuICAgIDwvV3JhcEVsZW1lbnQ+XG4gICk7XG59O1xuXG5jb25zdCBDZWxsOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbEluZGV4LFxuICAgIGNvbGxlY3Rpb24sXG4gICAgY2VsbERhdGEsXG4gICAgcm93RGF0YSxcbiAgICBmaWVsZCxcbiAgICBmaWVsZDoge1xuICAgICAgYWRtaW46IHtcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgIENlbGw6IEN1c3RvbUNlbGwsXG4gICAgICAgIH0gPSB7fSxcbiAgICAgIH0gPSB7fSxcbiAgICB9LFxuICAgIGxpbmssXG4gICAgb25DbGljayxcbiAgICBjbGFzc05hbWUsXG4gIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxSZW5kZXJDdXN0b21Db21wb25lbnRcbiAgICAgIGNvbXBvbmVudFByb3BzPXt7XG4gICAgICAgIHJvd0RhdGEsXG4gICAgICAgIGNvbEluZGV4LFxuICAgICAgICBjZWxsRGF0YSxcbiAgICAgICAgY29sbGVjdGlvbixcbiAgICAgICAgZmllbGQsXG4gICAgICAgIGxpbmssXG4gICAgICAgIG9uQ2xpY2ssXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgIH19XG4gICAgICBDdXN0b21Db21wb25lbnQ9e0N1c3RvbUNlbGx9XG4gICAgICBEZWZhdWx0Q29tcG9uZW50PXtEZWZhdWx0Q2VsbH1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2VsbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUNvbmZpZyIsIlJlbmRlckN1c3RvbUNvbXBvbmVudCIsImNlbGxDb21wb25lbnRzIiwiZ2V0VHJhbnNsYXRpb24iLCJmaWVsZEFmZmVjdHNEYXRhIiwiRGVmYXVsdENlbGwiLCJwcm9wcyIsImZpZWxkIiwiY29sbGVjdGlvbiIsInNsdWciLCJjZWxsRGF0YSIsInJvd0RhdGEiLCJpZCIsImxpbmsiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwicm91dGVzIiwiYWRtaW4iLCJ0IiwiaTE4biIsIldyYXBFbGVtZW50Iiwid3JhcEVsZW1lbnRQcm9wcyIsInRvIiwidHlwZSIsIkNlbGxDb21wb25lbnQiLCJ1cGxvYWQiLCJuYW1lIiwiRmlsZSIsImxhYmVsIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJDZWxsIiwiY29sSW5kZXgiLCJjb21wb25lbnRzIiwiQ3VzdG9tQ2VsbCIsImNvbXBvbmVudFByb3BzIiwiQ3VzdG9tQ29tcG9uZW50IiwiRGVmYXVsdENvbXBvbmVudCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLFNBQVNDLElBQUksUUFBUSxtQkFBbUI7QUFDeEMsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxTQUFTQyxTQUFTLFFBQVEsK0JBQStCO0FBQ3pELE9BQU9DLDJCQUEyQiw4Q0FBOEM7QUFDaEYsT0FBT0Msb0JBQW9CLGdCQUFnQjtBQUUzQyxTQUFTQyxjQUFjLFFBQVEsNkNBQTZDO0FBQzVFLFNBQVNDLGdCQUFnQixRQUFRLHdDQUF3QztBQUV6RSxJQUFNQyxjQUErQixTQUFDQztJQUNwQyxJQUNFQyxRQWFFRCxNQWJGQyxPQUNBQyxhQVlFRixNQVpGRSxZQUNBQSxBQUNFQyxPQVVBSCxNQVhGRSxXQUNFQyxNQUVGQyxXQVFFSixNQVJGSSxVQUNBQyxVQU9FTCxNQVBGSyxTQUNTLE1BTVBMLE1BTkZLLFNBQVMsQUFDUEMsTUFETyxpQkFFTCxDQUFDLElBRkksS0FDUEEsa0JBS0FOLE1BSEZPLE1BQUFBLGdDQUFPLG9CQUNQQyxVQUVFUixNQUZGUSxTQUNBQyxZQUNFVCxNQURGUztJQUdGLElBQThCZixhQUFBQSxhQUF0QmdCLEFBQVVDLFFBQVlqQixXQUF0QmdCLE9BQVVDO0lBQ2xCLElBQW9CbEIsa0JBQUFBLGVBQWUsWUFBM0JtQixJQUFZbkIsZ0JBQVptQixHQUFHQyxPQUFTcEIsZ0JBQVRvQjtJQUVYLElBQUlDLGNBQWlEO0lBRXJELElBQU1DLG1CQUtGO1FBQ0ZOLFdBQUFBO0lBQ0Y7SUFFQSxJQUFJRixNQUFNO1FBQ1JPLGNBQWN0QjtRQUNkdUIsaUJBQWlCQyxFQUFFLEdBQUcsQUFBQyxHQUF1QmIsT0FBckJRLE9BQU0saUJBQXVCTCxPQUFSSCxNQUFLLEtBQU0sT0FBSEc7SUFDeEQ7SUFFQSxJQUFJLE9BQU9FLFlBQVksWUFBWTtRQUNqQ00sY0FBYztRQUNkQyxpQkFBaUJFLElBQUksR0FBRztRQUN4QkYsaUJBQWlCUCxPQUFPLEdBQUc7WUFDekJBLFFBQVFSO1FBQ1Y7SUFDRjtJQUVBLElBQUlrQixnQkFBZ0JkLFlBQVlSLGNBQWMsQ0FBQ0ssTUFBTWdCLElBQUksQ0FBQztJQUUxRCxJQUFJLENBQUNDLGVBQWU7UUFDbEIsSUFBSWhCLFdBQVdpQixNQUFNLElBQUlyQixpQkFBaUJHLFVBQVVBLE1BQU1tQixJQUFJLEtBQUssWUFBWTtZQUM3RUYsZ0JBQWdCdEIsZUFBZXlCLElBQUk7UUFDckMsT0FBTztZQUNMLHFCQUNFLG9CQUFDUCxhQUFnQkMsa0JBQ2QsQUFBRVgsQ0FBQUEsYUFBYSxNQUFNLE9BQU9BLGFBQWEsV0FBVSxLQUFNLFdBQVdILFNBQVVXLEVBQUUsV0FBVztnQkFBRVUsT0FBT3pCLGVBQWUsT0FBT0ksTUFBTXFCLEtBQUssS0FBSyxhQUFhLFNBQVNyQixNQUFNcUIsS0FBSyxJQUFJLFFBQVFUO1lBQU0sSUFDN0wsT0FBT1QsYUFBYSxZQUFZQSxVQUNoQyxPQUFPQSxhQUFhLFlBQVlBLFVBQ2hDLE9BQU9BLGFBQWEsWUFBWW1CLEtBQUtDLFNBQVMsQ0FBQ3BCO1FBR3REO0lBQ0Y7SUFFQSxxQkFDRSxvQkFBQ1UsYUFBZ0JDLGdDQUNmLG9CQUFDRztRQUNDakIsT0FBT0E7UUFDUHdCLE1BQU1yQjtRQUNORixZQUFZQTtRQUNaRyxTQUFTQTs7QUFJakI7QUFFQSxJQUFNcUIsT0FBd0IsU0FBQzFCO0lBQzdCLElBQ0UyQixXQWVFM0IsTUFmRjJCLFVBQ0F6QixhQWNFRixNQWRGRSxZQUNBRSxXQWFFSixNQWJGSSxVQUNBQyxVQVlFTCxNQVpGSyxTQUNBSixRQVdFRCxNQVhGQyxzQkFXRUQsTUFWRkMsT0FDUyxtQkFBUFUsY0FBTyxpQkFJSCxDQUFDLElBSkUsS0FDTyxZQUFaaUIsb0JBQVksa0JBRVIsQ0FBQyxJQUZPLE1BQ1ZGLEFBQU1HLG1CQUFOSCxNQUlObkIsT0FHRVAsTUFIRk8sTUFDQUMsVUFFRVIsTUFGRlEsU0FDQUMsWUFDRVQsTUFERlM7SUFHRixxQkFDRSxvQkFBQ2Q7UUFDQ21DLGdCQUFnQjtZQUNkekIsU0FBQUE7WUFDQXNCLFVBQUFBO1lBQ0F2QixVQUFBQTtZQUNBRixZQUFBQTtZQUNBRCxPQUFBQTtZQUNBTSxNQUFBQTtZQUNBQyxTQUFBQTtZQUNBQyxXQUFBQTtRQUNGO1FBQ0FzQixpQkFBaUJGO1FBQ2pCRyxrQkFBa0JqQzs7QUFHeEI7QUFFQSxlQUFlMkIsS0FBSyJ9