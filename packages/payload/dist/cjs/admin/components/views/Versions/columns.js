"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "buildVersionColumns", {
    enumerable: true,
    get: function() {
        return buildVersionColumns;
    }
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _reactrouterdom = require("react-router-dom");
var _reacti18next = require("react-i18next");
var _Config = require("../../utilities/Config");
var _SortColumn = /*#__PURE__*/ _interop_require_default(require("../../elements/SortColumn"));
var _ = require("../..");
var _formatDate = require("../../../utilities/formatDate");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var CreatedAtCell = function(param) {
    var collection = param.collection, global = param.global, id = param.id, date = param.date;
    var _i18n;
    var _useConfig = (0, _Config.useConfig)(), admin = _useConfig.routes.admin, dateFormat = _useConfig.admin.dateFormat;
    var _useRouteMatch = (0, _reactrouterdom.useRouteMatch)(), _useRouteMatch_params = _useRouteMatch.params, docID = _useRouteMatch_params.id;
    var i18n = (0, _reacti18next.useTranslation)().i18n;
    var to;
    if (collection) to = "".concat(admin, "/collections/").concat(collection.slug, "/").concat(docID, "/versions/").concat(id);
    if (global) to = "".concat(admin, "/globals/").concat(global.slug, "/versions/").concat(id);
    return /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Link, {
        to: to
    }, date && (0, _formatDate.formatDate)(date, dateFormat, (_i18n = i18n) === null || _i18n === void 0 ? void 0 : _i18n.language));
};
var TextCell = function(param) {
    var children = param.children;
    return /*#__PURE__*/ _react.default.createElement("span", null, children);
};
var buildVersionColumns = function(collection, global, t) {
    return [
        {
            accessor: "updatedAt",
            active: true,
            label: "",
            name: "",
            components: {
                Heading: /*#__PURE__*/ _react.default.createElement(_SortColumn.default, {
                    label: t("general:updatedAt"),
                    name: "updatedAt"
                }),
                renderCell: function(row, data) {
                    var _row;
                    return /*#__PURE__*/ _react.default.createElement(CreatedAtCell, {
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
                Heading: /*#__PURE__*/ _react.default.createElement(_SortColumn.default, {
                    label: t("versionID"),
                    disable: true,
                    name: "id"
                }),
                renderCell: function(row, data) {
                    return /*#__PURE__*/ _react.default.createElement(TextCell, null, data);
                }
            }
        },
        {
            accessor: "autosave",
            active: true,
            label: "",
            name: "",
            components: {
                Heading: /*#__PURE__*/ _react.default.createElement(_SortColumn.default, {
                    label: t("type"),
                    name: "autosave",
                    disable: true
                }),
                renderCell: function(row) {
                    var _row, _row1, _row2;
                    return /*#__PURE__*/ _react.default.createElement(TextCell, null, ((_row = row) === null || _row === void 0 ? void 0 : _row.autosave) && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_.Pill, null, t("autosave")), "\xa0\xa0"), ((_row1 = row) === null || _row1 === void 0 ? void 0 : _row1.version._status) === "published" && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_.Pill, {
                        pillStyle: "success"
                    }, t("published")), "\xa0\xa0"), ((_row2 = row) === null || _row2 === void 0 ? void 0 : _row2.version._status) === "draft" && /*#__PURE__*/ _react.default.createElement(_.Pill, null, t("draft")));
                }
            }
        }
    ];
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb25zL2NvbHVtbnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCB1c2VSb3V0ZU1hdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBURnVuY3Rpb24sIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL1RhYmxlL3R5cGVzJztcbmltcG9ydCBTb3J0Q29sdW1uIGZyb20gJy4uLy4uL2VsZW1lbnRzL1NvcnRDb2x1bW4nO1xuaW1wb3J0IHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9nbG9iYWxzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBQaWxsIH0gZnJvbSAnLi4vLi4nO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9mb3JtYXREYXRlJztcblxudHlwZSBDcmVhdGVkQXRDZWxsUHJvcHMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgZGF0ZTogc3RyaW5nXG4gIGNvbGxlY3Rpb24/OiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnXG4gIGdsb2JhbD86IFNhbml0aXplZEdsb2JhbENvbmZpZ1xufVxuXG5jb25zdCBDcmVhdGVkQXRDZWxsOiBSZWFjdC5GQzxDcmVhdGVkQXRDZWxsUHJvcHM+ID0gKHsgY29sbGVjdGlvbiwgZ2xvYmFsLCBpZCwgZGF0ZSB9KSA9PiB7XG4gIGNvbnN0IHsgcm91dGVzOiB7IGFkbWluIH0sIGFkbWluOiB7IGRhdGVGb3JtYXQgfSB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgcGFyYW1zOiB7IGlkOiBkb2NJRCB9IH0gPSB1c2VSb3V0ZU1hdGNoPHsgaWQ6IHN0cmluZyB9PigpO1xuXG4gIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICBsZXQgdG86IHN0cmluZztcblxuICBpZiAoY29sbGVjdGlvbikgdG8gPSBgJHthZG1pbn0vY29sbGVjdGlvbnMvJHtjb2xsZWN0aW9uLnNsdWd9LyR7ZG9jSUR9L3ZlcnNpb25zLyR7aWR9YDtcbiAgaWYgKGdsb2JhbCkgdG8gPSBgJHthZG1pbn0vZ2xvYmFscy8ke2dsb2JhbC5zbHVnfS92ZXJzaW9ucy8ke2lkfWA7XG5cbiAgcmV0dXJuIChcbiAgICA8TGluayB0bz17dG99PlxuICAgICAge2RhdGUgJiYgZm9ybWF0RGF0ZShkYXRlLCBkYXRlRm9ybWF0LCBpMThuPy5sYW5ndWFnZSl9XG4gICAgPC9MaW5rPlxuICApO1xufTtcblxuY29uc3QgVGV4dENlbGw6IFJlYWN0LkZDPHtjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZX0+ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8c3Bhbj5cbiAgICB7Y2hpbGRyZW59XG4gIDwvc3Bhbj5cbik7XG5cbmV4cG9ydCBjb25zdCBidWlsZFZlcnNpb25Db2x1bW5zID0gKFxuICBjb2xsZWN0aW9uOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnLFxuICBnbG9iYWw6IFNhbml0aXplZEdsb2JhbENvbmZpZyxcbiAgdDogVEZ1bmN0aW9uLFxuKTogQ29sdW1uW10gPT4gW1xuICB7XG4gICAgYWNjZXNzb3I6ICd1cGRhdGVkQXQnLFxuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBsYWJlbDogJycsXG4gICAgbmFtZTogJycsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgSGVhZGluZzogKFxuICAgICAgICA8U29ydENvbHVtblxuICAgICAgICAgIGxhYmVsPXt0KCdnZW5lcmFsOnVwZGF0ZWRBdCcpfVxuICAgICAgICAgIG5hbWU9XCJ1cGRhdGVkQXRcIlxuICAgICAgICAvPlxuICAgICAgKSxcbiAgICAgIHJlbmRlckNlbGw6IChyb3csIGRhdGEpID0+IChcbiAgICAgICAgPENyZWF0ZWRBdENlbGxcbiAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufVxuICAgICAgICAgIGdsb2JhbD17Z2xvYmFsfVxuICAgICAgICAgIGlkPXtyb3c/LmlkfVxuICAgICAgICAgIGRhdGU9e2RhdGF9XG4gICAgICAgIC8+XG4gICAgICApLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBhY2Nlc3NvcjogJ2lkJyxcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgbGFiZWw6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIEhlYWRpbmc6IChcbiAgICAgICAgPFNvcnRDb2x1bW5cbiAgICAgICAgICBsYWJlbD17dCgndmVyc2lvbklEJyl9XG4gICAgICAgICAgZGlzYWJsZVxuICAgICAgICAgIG5hbWU9XCJpZFwiXG4gICAgICAgIC8+XG4gICAgICApLFxuICAgICAgcmVuZGVyQ2VsbDogKHJvdywgZGF0YSkgPT4gPFRleHRDZWxsPntkYXRhfTwvVGV4dENlbGw+LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBhY2Nlc3NvcjogJ2F1dG9zYXZlJyxcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgbGFiZWw6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIEhlYWRpbmc6IChcbiAgICAgICAgPFNvcnRDb2x1bW5cbiAgICAgICAgICBsYWJlbD17dCgndHlwZScpfVxuICAgICAgICAgIG5hbWU9XCJhdXRvc2F2ZVwiXG4gICAgICAgICAgZGlzYWJsZVxuICAgICAgICAvPlxuICAgICAgKSxcbiAgICAgIHJlbmRlckNlbGw6IChyb3cpID0+IChcbiAgICAgICAgPFRleHRDZWxsPlxuICAgICAgICAgIHtyb3c/LmF1dG9zYXZlICYmIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgPFBpbGw+XG4gICAgICAgICAgICAgICAge3QoJ2F1dG9zYXZlJyl9XG4gICAgICAgICAgICAgIDwvUGlsbD5cbiAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3Jvdz8udmVyc2lvbi5fc3RhdHVzID09PSAncHVibGlzaGVkJyAmJiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDxQaWxsIHBpbGxTdHlsZT1cInN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICB7dCgncHVibGlzaGVkJyl9XG4gICAgICAgICAgICAgIDwvUGlsbD5cbiAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3Jvdz8udmVyc2lvbi5fc3RhdHVzID09PSAnZHJhZnQnICYmIChcbiAgICAgICAgICAgIDxQaWxsPlxuICAgICAgICAgICAgICB7dCgnZHJhZnQnKX1cbiAgICAgICAgICAgIDwvUGlsbD5cbiAgICAgICAgICApfVxuICAgICAgICA8L1RleHRDZWxsPlxuICAgICAgKSxcbiAgICB9LFxuICB9LFxuXTtcbiJdLCJuYW1lcyI6WyJidWlsZFZlcnNpb25Db2x1bW5zIiwiQ3JlYXRlZEF0Q2VsbCIsImNvbGxlY3Rpb24iLCJnbG9iYWwiLCJpZCIsImRhdGUiLCJpMThuIiwidXNlQ29uZmlnIiwicm91dGVzIiwiYWRtaW4iLCJkYXRlRm9ybWF0IiwidXNlUm91dGVNYXRjaCIsInBhcmFtcyIsImRvY0lEIiwidXNlVHJhbnNsYXRpb24iLCJ0byIsInNsdWciLCJMaW5rIiwiZm9ybWF0RGF0ZSIsImxhbmd1YWdlIiwiVGV4dENlbGwiLCJjaGlsZHJlbiIsInNwYW4iLCJ0IiwiYWNjZXNzb3IiLCJhY3RpdmUiLCJsYWJlbCIsIm5hbWUiLCJjb21wb25lbnRzIiwiSGVhZGluZyIsIlNvcnRDb2x1bW4iLCJyZW5kZXJDZWxsIiwicm93IiwiZGF0YSIsImRpc2FibGUiLCJhdXRvc2F2ZSIsIlJlYWN0IiwiRnJhZ21lbnQiLCJQaWxsIiwidmVyc2lvbiIsIl9zdGF0dXMiLCJwaWxsU3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7K0JBMENhQTs7O2VBQUFBOzs7NERBMUNLOzhCQUNrQjs0QkFDTTtzQkFDaEI7aUVBRUg7Z0JBR0Y7MEJBQ007Ozs7OztBQVMzQixJQUFNQyxnQkFBOEM7UUFBR0MsbUJBQUFBLFlBQVlDLGVBQUFBLFFBQVFDLFdBQUFBLElBQUlDLGFBQUFBO1FBYW5DQztJQVoxQyxJQUFxREMsYUFBQUEsSUFBQUEsaUJBQVMsS0FBdERDLEFBQVVDLFFBQW1DRixXQUE3Q0MsT0FBVUMsT0FBU0EsQUFBU0MsYUFBaUJILFdBQTFCRSxNQUFTQztJQUNwQyxJQUFrQ0MsaUJBQUFBLElBQUFBLDZCQUFhLDZCQUFiQSxlQUExQkMsUUFBVVIsQUFBSVMsOEJBQUpUO0lBRWxCLElBQU0sQUFBRUUsT0FBU1EsSUFBQUEsNEJBQWMsSUFBdkJSO0lBRVIsSUFBSVM7SUFFSixJQUFJYixZQUFZYSxLQUFLLEFBQUMsR0FBdUJiLE9BQXJCTyxPQUFNLGlCQUFrQ0ksT0FBbkJYLFdBQVdjLElBQUksRUFBQyxLQUFxQlosT0FBbEJTLE9BQU0sY0FBZSxPQUFIVDtJQUNsRixJQUFJRCxRQUFRWSxLQUFLLEFBQUMsR0FBbUJaLE9BQWpCTSxPQUFNLGFBQW1DTCxPQUF4QkQsT0FBT2EsSUFBSSxFQUFDLGNBQWUsT0FBSFo7SUFFN0QscUJBQ0UsNkJBQUNhLG9CQUFJO1FBQUNGLElBQUlBO09BQ1BWLFFBQVFhLElBQUFBLHNCQUFVLEVBQUNiLE1BQU1LLGFBQVlKLFFBQUFBLGtCQUFBQSw0QkFBQUEsTUFBTWEsUUFBUTtBQUcxRDtBQUVBLElBQU1DLFdBQW1EO1FBQUdDLGlCQUFBQTt5QkFDMUQsNkJBQUNDLGNBQ0VEOztBQUlFLElBQU1yQixzQkFBc0IsU0FDakNFLFlBQ0FDLFFBQ0FvQjtXQUNhO1FBQ2I7WUFDRUMsVUFBVTtZQUNWQyxRQUFRO1lBQ1JDLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxZQUFZO2dCQUNWQyx1QkFDRSw2QkFBQ0MsbUJBQVU7b0JBQ1RKLE9BQU9ILEVBQUU7b0JBQ1RJLE1BQUs7O2dCQUdUSSxZQUFZLFNBQUNDLEtBQUtDO3dCQUlWRDt5Q0FITiw2QkFBQy9CO3dCQUNDQyxZQUFZQTt3QkFDWkMsUUFBUUE7d0JBQ1JDLEVBQUUsR0FBRTRCLE9BQUFBLGlCQUFBQSwyQkFBQUEsS0FBSzVCLEVBQUU7d0JBQ1hDLE1BQU00Qjs7O1lBR1o7UUFDRjtRQUNBO1lBQ0VULFVBQVU7WUFDVkMsUUFBUTtZQUNSQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsWUFBWTtnQkFDVkMsdUJBQ0UsNkJBQUNDLG1CQUFVO29CQUNUSixPQUFPSCxFQUFFO29CQUNUVyxTQUFBQTtvQkFDQVAsTUFBSzs7Z0JBR1RJLFlBQVksU0FBQ0MsS0FBS0M7eUNBQVMsNkJBQUNiLGdCQUFVYTs7WUFDeEM7UUFDRjtRQUNBO1lBQ0VULFVBQVU7WUFDVkMsUUFBUTtZQUNSQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsWUFBWTtnQkFDVkMsdUJBQ0UsNkJBQUNDLG1CQUFVO29CQUNUSixPQUFPSCxFQUFFO29CQUNUSSxNQUFLO29CQUNMTyxTQUFBQTs7Z0JBR0pILFlBQVksU0FBQ0M7d0JBRVJBLE1BUUFBLE9BUUFBO3lDQWpCSCw2QkFBQ1osZ0JBQ0VZLEVBQUFBLE9BQUFBLGlCQUFBQSwyQkFBQUEsS0FBS0csUUFBUSxtQkFDWiw2QkFBQ0MsY0FBSyxDQUFDQyxRQUFRLHNCQUNiLDZCQUFDQyxNQUFJLFFBQ0ZmLEVBQUUsY0FDRSxhQUlWUyxFQUFBQSxRQUFBQSxpQkFBQUEsNEJBQUFBLE1BQUtPLE9BQU8sQ0FBQ0MsT0FBTyxNQUFLLDZCQUN4Qiw2QkFBQ0osY0FBSyxDQUFDQyxRQUFRLHNCQUNiLDZCQUFDQyxNQUFJO3dCQUFDRyxXQUFVO3VCQUNibEIsRUFBRSxlQUNFLGFBSVZTLEVBQUFBLFFBQUFBLGlCQUFBQSw0QkFBQUEsTUFBS08sT0FBTyxDQUFDQyxPQUFPLE1BQUsseUJBQ3hCLDZCQUFDRixNQUFJLFFBQ0ZmLEVBQUU7O1lBS2I7UUFDRjtLQUNEIn0=