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
var _qs = /*#__PURE__*/ _interop_require_default(require("qs"));
var _Page = /*#__PURE__*/ _interop_require_default(require("./Page"));
var _Separator = /*#__PURE__*/ _interop_require_default(require("./Separator"));
var _ClickableArrow = /*#__PURE__*/ _interop_require_default(require("./ClickableArrow"));
var _SearchParams = require("../../utilities/SearchParams");
require("./index.scss");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var nodeTypes = {
    Page: _Page.default,
    Separator: _Separator.default,
    ClickableArrow: _ClickableArrow.default
};
var baseClass = "paginator";
var Pagination = function(props) {
    var history = (0, _reactrouterdom.useHistory)();
    var params = (0, _SearchParams.useSearchParams)();
    var _props_totalPages = props.totalPages, totalPages = _props_totalPages === void 0 ? null : _props_totalPages, currentPage = props.page, _props_hasPrevPage = props.hasPrevPage, hasPrevPage = _props_hasPrevPage === void 0 ? false : _props_hasPrevPage, _props_hasNextPage = props.hasNextPage, hasNextPage = _props_hasNextPage === void 0 ? false : _props_hasNextPage, _props_prevPage = props.prevPage, prevPage = _props_prevPage === void 0 ? null : _props_prevPage, _props_nextPage = props.nextPage, nextPage = _props_nextPage === void 0 ? null : _props_nextPage, _props_numberOfNeighbors = props.numberOfNeighbors, numberOfNeighbors = _props_numberOfNeighbors === void 0 ? 1 : _props_numberOfNeighbors, _props_disableHistoryChange = props.disableHistoryChange, disableHistoryChange = _props_disableHistoryChange === void 0 ? false : _props_disableHistoryChange, onChange = props.onChange;
    if (!totalPages || totalPages <= 1) return null;
    // uses react router to set the current page
    var updatePage = function(page) {
        if (!disableHistoryChange) {
            var newParams = _object_spread({}, params);
            newParams.page = page;
            history.push({
                search: _qs.default.stringify(newParams, {
                    addQueryPrefix: true
                })
            });
        }
        if (typeof onChange === "function") onChange(page);
    };
    // Create array of integers for each page
    var pages = Array.from({
        length: totalPages
    }, function(_, index) {
        return index + 1;
    });
    // Assign indices for start and end of the range of pages that should be shown in paginator
    var rangeStartIndex = currentPage - 1 - numberOfNeighbors;
    // Sanitize rangeStartIndex in case it is less than zero for safe split
    if (rangeStartIndex <= 0) rangeStartIndex = 0;
    var rangeEndIndex = currentPage - 1 + numberOfNeighbors + 1;
    // Slice out the range of pages that we want to render
    var nodes = pages.slice(rangeStartIndex, rangeEndIndex);
    // Add prev separator if necessary
    if (currentPage - numberOfNeighbors - 1 >= 2) nodes.unshift({
        type: "Separator"
    });
    // Add first page if necessary
    if (currentPage > numberOfNeighbors + 1) {
        nodes.unshift({
            type: "Page",
            props: {
                page: 1,
                updatePage: updatePage,
                isFirstPage: true
            }
        });
    }
    // Add next separator if necessary
    if (currentPage + numberOfNeighbors + 1 < totalPages) nodes.push({
        type: "Separator"
    });
    // Add last page if necessary
    if (rangeEndIndex < totalPages) {
        nodes.push({
            type: "Page",
            props: {
                page: totalPages,
                updatePage: updatePage,
                isLastPage: true
            }
        });
    }
    // Add prev and next arrows based on necessity
    nodes.unshift({
        type: "ClickableArrow",
        props: {
            updatePage: function() {
                return updatePage(nextPage);
            },
            isDisabled: !hasNextPage,
            direction: "right"
        }
    });
    nodes.unshift({
        type: "ClickableArrow",
        props: {
            updatePage: function() {
                return updatePage(prevPage);
            },
            isDisabled: !hasPrevPage,
            direction: "left"
        }
    });
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, nodes.map(function(node, i) {
        if (typeof node === "number") {
            return /*#__PURE__*/ _react.default.createElement(_Page.default, {
                key: i,
                page: node,
                updatePage: updatePage,
                isCurrent: currentPage === node
            });
        }
        var NodeType = nodeTypes[node.type];
        return /*#__PURE__*/ _react.default.createElement(NodeType, _object_spread({
            key: i
        }, node.props));
    }));
};
var _default = Pagination;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1BhZ2luYXRvci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tICdxcyc7XG5pbXBvcnQgeyBQcm9wcywgTm9kZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQgUGFnZSBmcm9tICcuL1BhZ2UnO1xuaW1wb3J0IFNlcGFyYXRvciBmcm9tICcuL1NlcGFyYXRvcic7XG5pbXBvcnQgQ2xpY2thYmxlQXJyb3cgZnJvbSAnLi9DbGlja2FibGVBcnJvdyc7XG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvU2VhcmNoUGFyYW1zJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBub2RlVHlwZXMgPSB7XG4gIFBhZ2UsXG4gIFNlcGFyYXRvcixcbiAgQ2xpY2thYmxlQXJyb3csXG59O1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAncGFnaW5hdG9yJztcblxuY29uc3QgUGFnaW5hdGlvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gIGNvbnN0IHBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuXG4gIGNvbnN0IHtcbiAgICB0b3RhbFBhZ2VzID0gbnVsbCxcbiAgICBwYWdlOiBjdXJyZW50UGFnZSxcbiAgICBoYXNQcmV2UGFnZSA9IGZhbHNlLFxuICAgIGhhc05leHRQYWdlID0gZmFsc2UsXG4gICAgcHJldlBhZ2UgPSBudWxsLFxuICAgIG5leHRQYWdlID0gbnVsbCxcbiAgICBudW1iZXJPZk5laWdoYm9ycyA9IDEsXG4gICAgZGlzYWJsZUhpc3RvcnlDaGFuZ2UgPSBmYWxzZSxcbiAgICBvbkNoYW5nZSxcbiAgfSA9IHByb3BzO1xuXG4gIGlmICghdG90YWxQYWdlcyB8fCB0b3RhbFBhZ2VzIDw9IDEpIHJldHVybiBudWxsO1xuXG4gIC8vIHVzZXMgcmVhY3Qgcm91dGVyIHRvIHNldCB0aGUgY3VycmVudCBwYWdlXG4gIGNvbnN0IHVwZGF0ZVBhZ2UgPSAocGFnZSkgPT4ge1xuICAgIGlmICghZGlzYWJsZUhpc3RvcnlDaGFuZ2UpIHtcbiAgICAgIGNvbnN0IG5ld1BhcmFtcyA9IHtcbiAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgfTtcblxuICAgICAgbmV3UGFyYW1zLnBhZ2UgPSBwYWdlO1xuICAgICAgaGlzdG9yeS5wdXNoKHsgc2VhcmNoOiBxdWVyeVN0cmluZy5zdHJpbmdpZnkobmV3UGFyYW1zLCB7IGFkZFF1ZXJ5UHJlZml4OiB0cnVlIH0pIH0pO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb25DaGFuZ2UgPT09ICdmdW5jdGlvbicpIG9uQ2hhbmdlKHBhZ2UpO1xuICB9O1xuXG4gIC8vIENyZWF0ZSBhcnJheSBvZiBpbnRlZ2VycyBmb3IgZWFjaCBwYWdlXG4gIGNvbnN0IHBhZ2VzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogdG90YWxQYWdlcyB9LCAoXywgaW5kZXgpID0+IGluZGV4ICsgMSk7XG5cbiAgLy8gQXNzaWduIGluZGljZXMgZm9yIHN0YXJ0IGFuZCBlbmQgb2YgdGhlIHJhbmdlIG9mIHBhZ2VzIHRoYXQgc2hvdWxkIGJlIHNob3duIGluIHBhZ2luYXRvclxuICBsZXQgcmFuZ2VTdGFydEluZGV4ID0gKGN1cnJlbnRQYWdlIC0gMSkgLSBudW1iZXJPZk5laWdoYm9ycztcblxuICAvLyBTYW5pdGl6ZSByYW5nZVN0YXJ0SW5kZXggaW4gY2FzZSBpdCBpcyBsZXNzIHRoYW4gemVybyBmb3Igc2FmZSBzcGxpdFxuICBpZiAocmFuZ2VTdGFydEluZGV4IDw9IDApIHJhbmdlU3RhcnRJbmRleCA9IDA7XG5cbiAgY29uc3QgcmFuZ2VFbmRJbmRleCA9IChjdXJyZW50UGFnZSAtIDEpICsgbnVtYmVyT2ZOZWlnaGJvcnMgKyAxO1xuXG4gIC8vIFNsaWNlIG91dCB0aGUgcmFuZ2Ugb2YgcGFnZXMgdGhhdCB3ZSB3YW50IHRvIHJlbmRlclxuICBjb25zdCBub2RlczogTm9kZVtdID0gcGFnZXMuc2xpY2UocmFuZ2VTdGFydEluZGV4LCByYW5nZUVuZEluZGV4KTtcblxuICAvLyBBZGQgcHJldiBzZXBhcmF0b3IgaWYgbmVjZXNzYXJ5XG4gIGlmIChjdXJyZW50UGFnZSAtIG51bWJlck9mTmVpZ2hib3JzIC0gMSA+PSAyKSBub2Rlcy51bnNoaWZ0KHsgdHlwZTogJ1NlcGFyYXRvcicgfSk7XG4gIC8vIEFkZCBmaXJzdCBwYWdlIGlmIG5lY2Vzc2FyeVxuICBpZiAoY3VycmVudFBhZ2UgPiBudW1iZXJPZk5laWdoYm9ycyArIDEpIHtcbiAgICBub2Rlcy51bnNoaWZ0KHtcbiAgICAgIHR5cGU6ICdQYWdlJyxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIHVwZGF0ZVBhZ2UsXG4gICAgICAgIGlzRmlyc3RQYWdlOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEFkZCBuZXh0IHNlcGFyYXRvciBpZiBuZWNlc3NhcnlcbiAgaWYgKGN1cnJlbnRQYWdlICsgbnVtYmVyT2ZOZWlnaGJvcnMgKyAxIDwgdG90YWxQYWdlcykgbm9kZXMucHVzaCh7IHR5cGU6ICdTZXBhcmF0b3InIH0pO1xuICAvLyBBZGQgbGFzdCBwYWdlIGlmIG5lY2Vzc2FyeVxuICBpZiAocmFuZ2VFbmRJbmRleCA8IHRvdGFsUGFnZXMpIHtcbiAgICBub2Rlcy5wdXNoKHtcbiAgICAgIHR5cGU6ICdQYWdlJyxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHBhZ2U6IHRvdGFsUGFnZXMsXG4gICAgICAgIHVwZGF0ZVBhZ2UsXG4gICAgICAgIGlzTGFzdFBhZ2U6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgLy8gQWRkIHByZXYgYW5kIG5leHQgYXJyb3dzIGJhc2VkIG9uIG5lY2Vzc2l0eVxuICBub2Rlcy51bnNoaWZ0KHtcbiAgICB0eXBlOiAnQ2xpY2thYmxlQXJyb3cnLFxuICAgIHByb3BzOiB7XG4gICAgICB1cGRhdGVQYWdlOiAoKSA9PiB1cGRhdGVQYWdlKG5leHRQYWdlKSxcbiAgICAgIGlzRGlzYWJsZWQ6ICFoYXNOZXh0UGFnZSxcbiAgICAgIGRpcmVjdGlvbjogJ3JpZ2h0JyxcbiAgICB9LFxuICB9KTtcblxuICBub2Rlcy51bnNoaWZ0KHtcbiAgICB0eXBlOiAnQ2xpY2thYmxlQXJyb3cnLFxuICAgIHByb3BzOiB7XG4gICAgICB1cGRhdGVQYWdlOiAoKSA9PiB1cGRhdGVQYWdlKHByZXZQYWdlKSxcbiAgICAgIGlzRGlzYWJsZWQ6ICFoYXNQcmV2UGFnZSxcbiAgICAgIGRpcmVjdGlvbjogJ2xlZnQnLFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICB7bm9kZXMubWFwKChub2RlLCBpKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhZ2VcbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICBwYWdlPXtub2RlfVxuICAgICAgICAgICAgICB1cGRhdGVQYWdlPXt1cGRhdGVQYWdlfVxuICAgICAgICAgICAgICBpc0N1cnJlbnQ9e2N1cnJlbnRQYWdlID09PSBub2RlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgTm9kZVR5cGUgPSBub2RlVHlwZXNbbm9kZS50eXBlXTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxOb2RlVHlwZVxuICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgey4uLm5vZGUucHJvcHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcbiJdLCJuYW1lcyI6WyJub2RlVHlwZXMiLCJQYWdlIiwiU2VwYXJhdG9yIiwiQ2xpY2thYmxlQXJyb3ciLCJiYXNlQ2xhc3MiLCJQYWdpbmF0aW9uIiwicHJvcHMiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsInBhcmFtcyIsInVzZVNlYXJjaFBhcmFtcyIsInRvdGFsUGFnZXMiLCJwYWdlIiwiY3VycmVudFBhZ2UiLCJoYXNQcmV2UGFnZSIsImhhc05leHRQYWdlIiwicHJldlBhZ2UiLCJuZXh0UGFnZSIsIm51bWJlck9mTmVpZ2hib3JzIiwiZGlzYWJsZUhpc3RvcnlDaGFuZ2UiLCJvbkNoYW5nZSIsInVwZGF0ZVBhZ2UiLCJuZXdQYXJhbXMiLCJwdXNoIiwic2VhcmNoIiwicXVlcnlTdHJpbmciLCJzdHJpbmdpZnkiLCJhZGRRdWVyeVByZWZpeCIsInBhZ2VzIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImluZGV4IiwicmFuZ2VTdGFydEluZGV4IiwicmFuZ2VFbmRJbmRleCIsIm5vZGVzIiwic2xpY2UiLCJ1bnNoaWZ0IiwidHlwZSIsImlzRmlyc3RQYWdlIiwiaXNMYXN0UGFnZSIsImlzRGlzYWJsZWQiLCJkaXJlY3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJub2RlIiwiaSIsImtleSIsImlzQ3VycmVudCIsIk5vZGVUeXBlIl0sIm1hcHBpbmdzIjoiOzs7OytCQTRJQTs7O2VBQUE7Ozs0REE1SWtCOzhCQUNTO3lEQUNIOzJEQUdQO2dFQUNLO3FFQUNLOzRCQUNLO1FBRXpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUEsWUFBWTtJQUNoQkMsTUFBQUEsYUFBSTtJQUNKQyxXQUFBQSxrQkFBUztJQUNUQyxnQkFBQUEsdUJBQWM7QUFDaEI7QUFFQSxJQUFNQyxZQUFZO0FBRWxCLElBQU1DLGFBQThC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