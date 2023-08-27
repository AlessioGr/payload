import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../utilities/Config";
import SortColumn from "../../elements/SortColumn";
import { Pill } from "../..";
import { formatDate } from "../../../utilities/formatDate";
var CreatedAtCell = function(param) {
    var collection = param.collection, global = param.global, id = param.id, date = param.date;
    var _i18n;
    var _useConfig = useConfig(), admin = _useConfig.routes.admin, dateFormat = _useConfig.admin.dateFormat;
    var _useRouteMatch = useRouteMatch(), _useRouteMatch_params = _useRouteMatch.params, docID = _useRouteMatch_params.id;
    var i18n = useTranslation().i18n;
    var to;
    if (collection) to = "".concat(admin, "/collections/").concat(collection.slug, "/").concat(docID, "/versions/").concat(id);
    if (global) to = "".concat(admin, "/globals/").concat(global.slug, "/versions/").concat(id);
    return /*#__PURE__*/ React.createElement(Link, {
        to: to
    }, date && formatDate(date, dateFormat, (_i18n = i18n) === null || _i18n === void 0 ? void 0 : _i18n.language));
};
var TextCell = function(param) {
    var children = param.children;
    return /*#__PURE__*/ React.createElement("span", null, children);
};
export var buildVersionColumns = function(collection, global, t) {
    return [
        {
            accessor: "updatedAt",
            active: true,
            label: "",
            name: "",
            components: {
                Heading: /*#__PURE__*/ React.createElement(SortColumn, {
                    label: t("general:updatedAt"),
                    name: "updatedAt"
                }),
                renderCell: function(row, data) {
                    var _row;
                    return /*#__PURE__*/ React.createElement(CreatedAtCell, {
                        collection: collection,
                        global: global,
                        id: (_row = row) === null || _row === void 0 ? void 0 : _row.id,
                        date: data
                    });
                }
            }
        },
        {
            accessor: "id",
            active: true,
            label: "",
            name: "",
            components: {
                Heading: /*#__PURE__*/ React.createElement(SortColumn, {
                    label: t("versionID"),
                    disable: true,
                    name: "id"
                }),
                renderCell: function(row, data) {
                    return /*#__PURE__*/ React.createElement(TextCell, null, data);
                }
            }
        },
        {
            accessor: "autosave",
            active: true,
            label: "",
            name: "",
            components: {
                Heading: /*#__PURE__*/ React.createElement(SortColumn, {
                    label: t("type"),
                    name: "autosave",
                    disable: true
                }),
                renderCell: function(row) {
                    var _row, _row1, _row2;
                    return /*#__PURE__*/ React.createElement(TextCell, null, ((_row = row) === null || _row === void 0 ? void 0 : _row.autosave) && /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Pill, null, t("autosave")), "\xa0\xa0"), ((_row1 = row) === null || _row1 === void 0 ? void 0 : _row1.version._status) === "published" && /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Pill, {
                        pillStyle: "success"
                    }, t("published")), "\xa0\xa0"), ((_row2 = row) === null || _row2 === void 0 ? void 0 : _row2.version._status) === "draft" && /*#__PURE__*/ React.createElement(Pill, null, t("draft")));
                }
            }
        }
    ];
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb25zL2NvbHVtbnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCB1c2VSb3V0ZU1hdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBURnVuY3Rpb24sIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL1RhYmxlL3R5cGVzJztcbmltcG9ydCBTb3J0Q29sdW1uIGZyb20gJy4uLy4uL2VsZW1lbnRzL1NvcnRDb2x1bW4nO1xuaW1wb3J0IHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9nbG9iYWxzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBQaWxsIH0gZnJvbSAnLi4vLi4nO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9mb3JtYXREYXRlJztcblxudHlwZSBDcmVhdGVkQXRDZWxsUHJvcHMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgZGF0ZTogc3RyaW5nXG4gIGNvbGxlY3Rpb24/OiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnXG4gIGdsb2JhbD86IFNhbml0aXplZEdsb2JhbENvbmZpZ1xufVxuXG5jb25zdCBDcmVhdGVkQXRDZWxsOiBSZWFjdC5GQzxDcmVhdGVkQXRDZWxsUHJvcHM+ID0gKHsgY29sbGVjdGlvbiwgZ2xvYmFsLCBpZCwgZGF0ZSB9KSA9PiB7XG4gIGNvbnN0IHsgcm91dGVzOiB7IGFkbWluIH0sIGFkbWluOiB7IGRhdGVGb3JtYXQgfSB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgcGFyYW1zOiB7IGlkOiBkb2NJRCB9IH0gPSB1c2VSb3V0ZU1hdGNoPHsgaWQ6IHN0cmluZyB9PigpO1xuXG4gIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICBsZXQgdG86IHN0cmluZztcblxuICBpZiAoY29sbGVjdGlvbikgdG8gPSBgJHthZG1pbn0vY29sbGVjdGlvbnMvJHtjb2xsZWN0aW9uLnNsdWd9LyR7ZG9jSUR9L3ZlcnNpb25zLyR7aWR9YDtcbiAgaWYgKGdsb2JhbCkgdG8gPSBgJHthZG1pbn0vZ2xvYmFscy8ke2dsb2JhbC5zbHVnfS92ZXJzaW9ucy8ke2lkfWA7XG5cbiAgcmV0dXJuIChcbiAgICA8TGluayB0bz17dG99PlxuICAgICAge2RhdGUgJiYgZm9ybWF0RGF0ZShkYXRlLCBkYXRlRm9ybWF0LCBpMThuPy5sYW5ndWFnZSl9XG4gICAgPC9MaW5rPlxuICApO1xufTtcblxuY29uc3QgVGV4dENlbGw6IFJlYWN0LkZDPHtjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZX0+ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8c3Bhbj5cbiAgICB7Y2hpbGRyZW59XG4gIDwvc3Bhbj5cbik7XG5cbmV4cG9ydCBjb25zdCBidWlsZFZlcnNpb25Db2x1bW5zID0gKFxuICBjb2xsZWN0aW9uOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnLFxuICBnbG9iYWw6IFNhbml0aXplZEdsb2JhbENvbmZpZyxcbiAgdDogVEZ1bmN0aW9uLFxuKTogQ29sdW1uW10gPT4gW1xuICB7XG4gICAgYWNjZXNzb3I6ICd1cGRhdGVkQXQnLFxuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBsYWJlbDogJycsXG4gICAgbmFtZTogJycsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgSGVhZGluZzogKFxuICAgICAgICA8U29ydENvbHVtblxuICAgICAgICAgIGxhYmVsPXt0KCdnZW5lcmFsOnVwZGF0ZWRBdCcpfVxuICAgICAgICAgIG5hbWU9XCJ1cGRhdGVkQXRcIlxuICAgICAgICAvPlxuICAgICAgKSxcbiAgICAgIHJlbmRlckNlbGw6IChyb3csIGRhdGEpID0+IChcbiAgICAgICAgPENyZWF0ZWRBdENlbGxcbiAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufVxuICAgICAgICAgIGdsb2JhbD17Z2xvYmFsfVxuICAgICAgICAgIGlkPXtyb3c/LmlkfVxuICAgICAgICAgIGRhdGU9e2RhdGF9XG4gICAgICAgIC8+XG4gICAgICApLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBhY2Nlc3NvcjogJ2lkJyxcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgbGFiZWw6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIEhlYWRpbmc6IChcbiAgICAgICAgPFNvcnRDb2x1bW5cbiAgICAgICAgICBsYWJlbD17dCgndmVyc2lvbklEJyl9XG4gICAgICAgICAgZGlzYWJsZVxuICAgICAgICAgIG5hbWU9XCJpZFwiXG4gICAgICAgIC8+XG4gICAgICApLFxuICAgICAgcmVuZGVyQ2VsbDogKHJvdywgZGF0YSkgPT4gPFRleHRDZWxsPntkYXRhfTwvVGV4dENlbGw+LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBhY2Nlc3NvcjogJ2F1dG9zYXZlJyxcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgbGFiZWw6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIEhlYWRpbmc6IChcbiAgICAgICAgPFNvcnRDb2x1bW5cbiAgICAgICAgICBsYWJlbD17dCgndHlwZScpfVxuICAgICAgICAgIG5hbWU9XCJhdXRvc2F2ZVwiXG4gICAgICAgICAgZGlzYWJsZVxuICAgICAgICAvPlxuICAgICAgKSxcbiAgICAgIHJlbmRlckNlbGw6IChyb3cpID0+IChcbiAgICAgICAgPFRleHRDZWxsPlxuICAgICAgICAgIHtyb3c/LmF1dG9zYXZlICYmIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgPFBpbGw+XG4gICAgICAgICAgICAgICAge3QoJ2F1dG9zYXZlJyl9XG4gICAgICAgICAgICAgIDwvUGlsbD5cbiAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3Jvdz8udmVyc2lvbi5fc3RhdHVzID09PSAncHVibGlzaGVkJyAmJiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDxQaWxsIHBpbGxTdHlsZT1cInN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICB7dCgncHVibGlzaGVkJyl9XG4gICAgICAgICAgICAgIDwvUGlsbD5cbiAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3Jvdz8udmVyc2lvbi5fc3RhdHVzID09PSAnZHJhZnQnICYmIChcbiAgICAgICAgICAgIDxQaWxsPlxuICAgICAgICAgICAgICB7dCgnZHJhZnQnKX1cbiAgICAgICAgICAgIDwvUGlsbD5cbiAgICAgICAgICApfVxuICAgICAgICA8L1RleHRDZWxsPlxuICAgICAgKSxcbiAgICB9LFxuICB9LFxuXTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJ1c2VSb3V0ZU1hdGNoIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VDb25maWciLCJTb3J0Q29sdW1uIiwiUGlsbCIsImZvcm1hdERhdGUiLCJDcmVhdGVkQXRDZWxsIiwiY29sbGVjdGlvbiIsImdsb2JhbCIsImlkIiwiZGF0ZSIsImkxOG4iLCJyb3V0ZXMiLCJhZG1pbiIsImRhdGVGb3JtYXQiLCJwYXJhbXMiLCJkb2NJRCIsInRvIiwic2x1ZyIsImxhbmd1YWdlIiwiVGV4dENlbGwiLCJjaGlsZHJlbiIsInNwYW4iLCJidWlsZFZlcnNpb25Db2x1bW5zIiwidCIsImFjY2Vzc29yIiwiYWN0aXZlIiwibGFiZWwiLCJuYW1lIiwiY29tcG9uZW50cyIsIkhlYWRpbmciLCJyZW5kZXJDZWxsIiwicm93IiwiZGF0YSIsImRpc2FibGUiLCJhdXRvc2F2ZSIsIkZyYWdtZW50IiwidmVyc2lvbiIsIl9zdGF0dXMiLCJwaWxsU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVcsUUFBUTtBQUMxQixTQUFTQyxJQUFJLEVBQUVDLGFBQWEsUUFBUSxtQkFBbUI7QUFDdkQsU0FBb0JDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDMUQsU0FBU0MsU0FBUyxRQUFRLHlCQUF5QjtBQUVuRCxPQUFPQyxnQkFBZ0IsNEJBQTRCO0FBR25ELFNBQVNDLElBQUksUUFBUSxRQUFRO0FBQzdCLFNBQVNDLFVBQVUsUUFBUSxnQ0FBZ0M7QUFTM0QsSUFBTUMsZ0JBQThDO1FBQUdDLG1CQUFBQSxZQUFZQyxlQUFBQSxRQUFRQyxXQUFBQSxJQUFJQyxhQUFBQTtRQWFuQ0M7SUFaMUMsSUFBcURULGFBQUFBLGFBQTdDVSxBQUFVQyxRQUFtQ1gsV0FBN0NVLE9BQVVDLE9BQVNBLEFBQVNDLGFBQWlCWixXQUExQlcsTUFBU0M7SUFDcEMsSUFBa0NkLGlCQUFBQSx5Q0FBQUEsZUFBMUJlLFFBQVVOLEFBQUlPLDhCQUFKUDtJQUVsQixJQUFNLEFBQUVFLE9BQVNWLGlCQUFUVTtJQUVSLElBQUlNO0lBRUosSUFBSVYsWUFBWVUsS0FBSyxBQUFDLEdBQXVCVixPQUFyQk0sT0FBTSxpQkFBa0NHLE9BQW5CVCxXQUFXVyxJQUFJLEVBQUMsS0FBcUJULE9BQWxCTyxPQUFNLGNBQWUsT0FBSFA7SUFDbEYsSUFBSUQsUUFBUVMsS0FBSyxBQUFDLEdBQW1CVCxPQUFqQkssT0FBTSxhQUFtQ0osT0FBeEJELE9BQU9VLElBQUksRUFBQyxjQUFlLE9BQUhUO0lBRTdELHFCQUNFLG9CQUFDVjtRQUFLa0IsSUFBSUE7T0FDUFAsUUFBUUwsV0FBV0ssTUFBTUksYUFBWUgsUUFBQUEsa0JBQUFBLDRCQUFBQSxNQUFNUSxRQUFRO0FBRzFEO0FBRUEsSUFBTUMsV0FBbUQ7UUFBR0MsaUJBQUFBO3lCQUMxRCxvQkFBQ0MsY0FDRUQ7O0FBSUwsT0FBTyxJQUFNRSxzQkFBc0IsU0FDakNoQixZQUNBQyxRQUNBZ0I7V0FDYTtRQUNiO1lBQ0VDLFVBQVU7WUFDVkMsUUFBUTtZQUNSQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsWUFBWTtnQkFDVkMsdUJBQ0Usb0JBQUMzQjtvQkFDQ3dCLE9BQU9ILEVBQUU7b0JBQ1RJLE1BQUs7O2dCQUdURyxZQUFZLFNBQUNDLEtBQUtDO3dCQUlWRDt5Q0FITixvQkFBQzFCO3dCQUNDQyxZQUFZQTt3QkFDWkMsUUFBUUE7d0JBQ1JDLEVBQUUsR0FBRXVCLE9BQUFBLGlCQUFBQSwyQkFBQUEsS0FBS3ZCLEVBQUU7d0JBQ1hDLE1BQU11Qjs7O1lBR1o7UUFDRjtRQUNBO1lBQ0VSLFVBQVU7WUFDVkMsUUFBUTtZQUNSQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsWUFBWTtnQkFDVkMsdUJBQ0Usb0JBQUMzQjtvQkFDQ3dCLE9BQU9ILEVBQUU7b0JBQ1RVLFNBQUFBO29CQUNBTixNQUFLOztnQkFHVEcsWUFBWSxTQUFDQyxLQUFLQzt5Q0FBUyxvQkFBQ2IsZ0JBQVVhOztZQUN4QztRQUNGO1FBQ0E7WUFDRVIsVUFBVTtZQUNWQyxRQUFRO1lBQ1JDLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxZQUFZO2dCQUNWQyx1QkFDRSxvQkFBQzNCO29CQUNDd0IsT0FBT0gsRUFBRTtvQkFDVEksTUFBSztvQkFDTE0sU0FBQUE7O2dCQUdKSCxZQUFZLFNBQUNDO3dCQUVSQSxNQVFBQSxPQVFBQTt5Q0FqQkgsb0JBQUNaLGdCQUNFWSxFQUFBQSxPQUFBQSxpQkFBQUEsMkJBQUFBLEtBQUtHLFFBQVEsbUJBQ1osb0JBQUNyQyxNQUFNc0MsUUFBUSxzQkFDYixvQkFBQ2hDLFlBQ0VvQixFQUFFLGNBQ0UsYUFJVlEsRUFBQUEsUUFBQUEsaUJBQUFBLDRCQUFBQSxNQUFLSyxPQUFPLENBQUNDLE9BQU8sTUFBSyw2QkFDeEIsb0JBQUN4QyxNQUFNc0MsUUFBUSxzQkFDYixvQkFBQ2hDO3dCQUFLbUMsV0FBVTt1QkFDYmYsRUFBRSxlQUNFLGFBSVZRLEVBQUFBLFFBQUFBLGlCQUFBQSw0QkFBQUEsTUFBS0ssT0FBTyxDQUFDQyxPQUFPLE1BQUsseUJBQ3hCLG9CQUFDbEMsWUFDRW9CLEVBQUU7O1lBS2I7UUFDRjtLQUNEO0VBQUMifQ==