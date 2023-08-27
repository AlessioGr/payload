"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    StepNavProvider: function() {
        return StepNavProvider;
    },
    useStepNav: function() {
        return useStepNav;
    },
    default: function() {
        return _default;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _reactrouterdom = require("react-router-dom");
var _reacti18next = require("react-i18next");
var _Chevron = /*#__PURE__*/ _interop_require_default(require("../../icons/Chevron"));
var _getTranslation = require("../../../../utilities/getTranslation");
var _Config = require("../../utilities/Config");
require("./index.scss");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var Context = /*#__PURE__*/ (0, _react.createContext)({});
var StepNavProvider = function(param) {
    var children = param.children;
    var _useState = _sliced_to_array((0, _react.useState)([]), 2), stepNav = _useState[0], setStepNav = _useState[1];
    return /*#__PURE__*/ _react.default.createElement(Context.Provider, {
        value: {
            stepNav: stepNav,
            setStepNav: setStepNav
        }
    }, children);
};
var useStepNav = function() {
    return (0, _react.useContext)(Context);
};
var StepNav = function() {
    var _useTranslation = (0, _reacti18next.useTranslation)(), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var dashboardLabel = /*#__PURE__*/ _react.default.createElement("span", null, t("general:dashboard"));
    var stepNav = useStepNav().stepNav;
    var config = (0, _Config.useConfig)();
    var admin = config.routes.admin;
    return /*#__PURE__*/ _react.default.createElement("nav", {
        className: "step-nav"
    }, stepNav.length > 0 ? /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Link, {
        to: admin
    }, dashboardLabel, /*#__PURE__*/ _react.default.createElement(_Chevron.default, null)) : dashboardLabel, stepNav.map(function(item, i) {
        var StepLabel = /*#__PURE__*/ _react.default.createElement("span", {
            key: i
        }, (0, _getTranslation.getTranslation)(item.label, i18n));
        var Step = stepNav.length === i + 1 ? StepLabel : /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Link, {
            to: item.url,
            key: i
        }, StepLabel, /*#__PURE__*/ _react.default.createElement(_Chevron.default, null));
        return Step;
    }));
};
var _default = StepNav;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1N0ZXBOYXYvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCBDaGV2cm9uIGZyb20gJy4uLy4uL2ljb25zL0NoZXZyb24nO1xuaW1wb3J0IHsgQ29udGV4dCBhcyBDb250ZXh0VHlwZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ29udGV4dFR5cGUpO1xuXG5jb25zdCBTdGVwTmF2UHJvdmlkZXI6IFJlYWN0LkZDPHtjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZX0+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc3RlcE5hdiwgc2V0U3RlcE5hdl0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgc3RlcE5hdixcbiAgICAgIHNldFN0ZXBOYXYsXG4gICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuY29uc3QgdXNlU3RlcE5hdiA9ICgpOiBDb250ZXh0VHlwZSA9PiB1c2VDb250ZXh0KENvbnRleHQpO1xuXG5jb25zdCBTdGVwTmF2OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCBkYXNoYm9hcmRMYWJlbCA9IDxzcGFuPnt0KCdnZW5lcmFsOmRhc2hib2FyZCcpfTwvc3Bhbj47XG4gIGNvbnN0IHsgc3RlcE5hdiB9ID0gdXNlU3RlcE5hdigpO1xuICBjb25zdCBjb25maWcgPSB1c2VDb25maWcoKTtcbiAgY29uc3QgeyByb3V0ZXM6IHsgYWRtaW4gfSB9ID0gY29uZmlnO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJzdGVwLW5hdlwiPlxuICAgICAge3N0ZXBOYXYubGVuZ3RoID4gMFxuICAgICAgICA/IChcbiAgICAgICAgICA8TGluayB0bz17YWRtaW59PlxuICAgICAgICAgICAge2Rhc2hib2FyZExhYmVsfVxuICAgICAgICAgICAgPENoZXZyb24gLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIClcbiAgICAgICAgOiBkYXNoYm9hcmRMYWJlbH1cbiAgICAgIHtzdGVwTmF2Lm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICBjb25zdCBTdGVwTGFiZWwgPSA8c3BhbiBrZXk9e2l9PntnZXRUcmFuc2xhdGlvbihpdGVtLmxhYmVsLCBpMThuKX08L3NwYW4+O1xuXG4gICAgICAgIGNvbnN0IFN0ZXAgPSBzdGVwTmF2Lmxlbmd0aCA9PT0gaSArIDFcbiAgICAgICAgICA/IFN0ZXBMYWJlbFxuICAgICAgICAgIDogKFxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgdG89e2l0ZW0udXJsfVxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtTdGVwTGFiZWx9XG4gICAgICAgICAgICAgIDxDaGV2cm9uIC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gU3RlcDtcbiAgICAgIH0pfVxuICAgIDwvbmF2PlxuICApO1xufTtcblxuZXhwb3J0IHtcbiAgU3RlcE5hdlByb3ZpZGVyLFxuICB1c2VTdGVwTmF2LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RlcE5hdjtcbiJdLCJuYW1lcyI6WyJTdGVwTmF2UHJvdmlkZXIiLCJ1c2VTdGVwTmF2IiwiQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwic3RlcE5hdiIsInNldFN0ZXBOYXYiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQ29udGV4dCIsIlN0ZXBOYXYiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJpMThuIiwiZGFzaGJvYXJkTGFiZWwiLCJzcGFuIiwiY29uZmlnIiwidXNlQ29uZmlnIiwicm91dGVzIiwiYWRtaW4iLCJuYXYiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJMaW5rIiwidG8iLCJDaGV2cm9uIiwibWFwIiwiaXRlbSIsImkiLCJTdGVwTGFiZWwiLCJrZXkiLCJnZXRUcmFuc2xhdGlvbiIsImxhYmVsIiwiU3RlcCIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFxRUVBLGVBQWU7ZUFBZkE7O0lBQ0FDLFVBQVU7ZUFBVkE7O0lBR0YsT0FBdUI7ZUFBdkI7Ozs2REF2RU87OEJBQ2M7NEJBQ1U7OERBQ1g7OEJBRVc7c0JBQ0w7UUFFbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFNQyx3QkFBVUMsSUFBQUEsb0JBQWEsRUFBQyxDQUFDO0FBRS9CLElBQU1ILGtCQUEwRDtRQUFHSSxpQkFBQUE7SUFDakUsSUFBOEJDLDZCQUFBQSxJQUFBQSxlQUFRLEVBQUMsRUFBRSxPQUFsQ0MsVUFBdUJELGNBQWRFLGFBQWNGO0lBRTlCLHFCQUNFLDZCQUFDSCxRQUFRTSxRQUFRO1FBQUNDLE9BQU87WUFDdkJILFNBQUFBO1lBQ0FDLFlBQUFBO1FBQ0Y7T0FFR0g7QUFHUDtBQUVBLElBQU1ILGFBQWE7V0FBbUJTLElBQUFBLGlCQUFVLEVBQUNSOztBQUVqRCxJQUFNUyxVQUFvQjtJQUN4QixJQUFvQkMsa0JBQUFBLElBQUFBLDRCQUFjLEtBQTFCQyxJQUFZRCxnQkFBWkMsR0FBR0MsT0FBU0YsZ0JBQVRFO0lBQ1gsSUFBTUMsK0JBQWlCLDZCQUFDQyxjQUFNSCxFQUFFO0lBQ2hDLElBQU0sQUFBRVAsVUFBWUwsYUFBWks7SUFDUixJQUFNVyxTQUFTQyxJQUFBQSxpQkFBUztJQUN4QixJQUFRQyxBQUFVQyxRQUFZSCxPQUF0QkUsT0FBVUM7SUFFbEIscUJBQ0UsNkJBQUNDO1FBQUlDLFdBQVU7T0FDWmhCLFFBQVFpQixNQUFNLEdBQUcsa0JBRWQsNkJBQUNDLG9CQUFJO1FBQUNDLElBQUlMO09BQ1BMLDhCQUNELDZCQUFDVyxnQkFBTyxXQUdWWCxnQkFDSFQsUUFBUXFCLEdBQUcsQ0FBQyxTQUFDQyxNQUFNQztRQUNsQixJQUFNQywwQkFBWSw2QkFBQ2Q7WUFBS2UsS0FBS0Y7V0FBSUcsSUFBQUEsOEJBQWMsRUFBQ0osS0FBS0ssS0FBSyxFQUFFbkI7UUFFNUQsSUFBTW9CLE9BQU81QixRQUFRaUIsTUFBTSxLQUFLTSxJQUFJLElBQ2hDQywwQkFFQSw2QkFBQ04sb0JBQUk7WUFDSEMsSUFBSUcsS0FBS08sR0FBRztZQUNaSixLQUFLRjtXQUVKQyx5QkFDRCw2QkFBQ0osZ0JBQU87UUFJZCxPQUFPUTtJQUNUO0FBR047SUFPQSxXQUFldkIifQ==