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
import React, { useState, createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Chevron from "../../icons/Chevron";
import { getTranslation } from "../../../../utilities/getTranslation";
import { useConfig } from "../../utilities/Config";
import "./index.scss";
var Context = /*#__PURE__*/ createContext({});
var StepNavProvider = function(param) {
    var children = param.children;
    var _useState = _sliced_to_array(useState([]), 2), stepNav = _useState[0], setStepNav = _useState[1];
    return /*#__PURE__*/ React.createElement(Context.Provider, {
        value: {
            stepNav: stepNav,
            setStepNav: setStepNav
        }
    }, children);
};
var useStepNav = function() {
    return useContext(Context);
};
var StepNav = function() {
    var _useTranslation = useTranslation(), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var dashboardLabel = /*#__PURE__*/ React.createElement("span", null, t("general:dashboard"));
    var stepNav = useStepNav().stepNav;
    var config = useConfig();
    var admin = config.routes.admin;
    return /*#__PURE__*/ React.createElement("nav", {
        className: "step-nav"
    }, stepNav.length > 0 ? /*#__PURE__*/ React.createElement(Link, {
        to: admin
    }, dashboardLabel, /*#__PURE__*/ React.createElement(Chevron, null)) : dashboardLabel, stepNav.map(function(item, i) {
        var StepLabel = /*#__PURE__*/ React.createElement("span", {
            key: i
        }, getTranslation(item.label, i18n));
        var Step = stepNav.length === i + 1 ? StepLabel : /*#__PURE__*/ React.createElement(Link, {
            to: item.url,
            key: i
        }, StepLabel, /*#__PURE__*/ React.createElement(Chevron, null));
        return Step;
    }));
};
export { StepNavProvider, useStepNav };
export default StepNav;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1N0ZXBOYXYvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCBDaGV2cm9uIGZyb20gJy4uLy4uL2ljb25zL0NoZXZyb24nO1xuaW1wb3J0IHsgQ29udGV4dCBhcyBDb250ZXh0VHlwZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ29udGV4dFR5cGUpO1xuXG5jb25zdCBTdGVwTmF2UHJvdmlkZXI6IFJlYWN0LkZDPHtjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZX0+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc3RlcE5hdiwgc2V0U3RlcE5hdl0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgc3RlcE5hdixcbiAgICAgIHNldFN0ZXBOYXYsXG4gICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuY29uc3QgdXNlU3RlcE5hdiA9ICgpOiBDb250ZXh0VHlwZSA9PiB1c2VDb250ZXh0KENvbnRleHQpO1xuXG5jb25zdCBTdGVwTmF2OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCBkYXNoYm9hcmRMYWJlbCA9IDxzcGFuPnt0KCdnZW5lcmFsOmRhc2hib2FyZCcpfTwvc3Bhbj47XG4gIGNvbnN0IHsgc3RlcE5hdiB9ID0gdXNlU3RlcE5hdigpO1xuICBjb25zdCBjb25maWcgPSB1c2VDb25maWcoKTtcbiAgY29uc3QgeyByb3V0ZXM6IHsgYWRtaW4gfSB9ID0gY29uZmlnO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJzdGVwLW5hdlwiPlxuICAgICAge3N0ZXBOYXYubGVuZ3RoID4gMFxuICAgICAgICA/IChcbiAgICAgICAgICA8TGluayB0bz17YWRtaW59PlxuICAgICAgICAgICAge2Rhc2hib2FyZExhYmVsfVxuICAgICAgICAgICAgPENoZXZyb24gLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIClcbiAgICAgICAgOiBkYXNoYm9hcmRMYWJlbH1cbiAgICAgIHtzdGVwTmF2Lm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICBjb25zdCBTdGVwTGFiZWwgPSA8c3BhbiBrZXk9e2l9PntnZXRUcmFuc2xhdGlvbihpdGVtLmxhYmVsLCBpMThuKX08L3NwYW4+O1xuXG4gICAgICAgIGNvbnN0IFN0ZXAgPSBzdGVwTmF2Lmxlbmd0aCA9PT0gaSArIDFcbiAgICAgICAgICA/IFN0ZXBMYWJlbFxuICAgICAgICAgIDogKFxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgdG89e2l0ZW0udXJsfVxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtTdGVwTGFiZWx9XG4gICAgICAgICAgICAgIDxDaGV2cm9uIC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gU3RlcDtcbiAgICAgIH0pfVxuICAgIDwvbmF2PlxuICApO1xufTtcblxuZXhwb3J0IHtcbiAgU3RlcE5hdlByb3ZpZGVyLFxuICB1c2VTdGVwTmF2LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RlcE5hdjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJMaW5rIiwidXNlVHJhbnNsYXRpb24iLCJDaGV2cm9uIiwiZ2V0VHJhbnNsYXRpb24iLCJ1c2VDb25maWciLCJDb250ZXh0IiwiU3RlcE5hdlByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGVwTmF2Iiwic2V0U3RlcE5hdiIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VTdGVwTmF2IiwiU3RlcE5hdiIsInQiLCJpMThuIiwiZGFzaGJvYXJkTGFiZWwiLCJzcGFuIiwiY29uZmlnIiwicm91dGVzIiwiYWRtaW4iLCJuYXYiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJ0byIsIm1hcCIsIml0ZW0iLCJpIiwiU3RlcExhYmVsIiwia2V5IiwibGFiZWwiLCJTdGVwIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FDTEMsUUFBUSxFQUFFQyxhQUFhLEVBQUVDLFVBQVUsUUFDOUIsUUFBUTtBQUNmLFNBQVNDLElBQUksUUFBUSxtQkFBbUI7QUFDeEMsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxPQUFPQyxhQUFhLHNCQUFzQjtBQUUxQyxTQUFTQyxjQUFjLFFBQVEsdUNBQXVDO0FBQ3RFLFNBQVNDLFNBQVMsUUFBUSx5QkFBeUI7QUFFbkQsT0FBTyxlQUFlO0FBRXRCLElBQU1DLHdCQUFVUCxjQUFjLENBQUM7QUFFL0IsSUFBTVEsa0JBQTBEO1FBQUdDLGlCQUFBQTtJQUNqRSxJQUE4QlYsNkJBQUFBLFNBQVMsRUFBRSxPQUFsQ1csVUFBdUJYLGNBQWRZLGFBQWNaO0lBRTlCLHFCQUNFLG9CQUFDUSxRQUFRSyxRQUFRO1FBQUNDLE9BQU87WUFDdkJILFNBQUFBO1lBQ0FDLFlBQUFBO1FBQ0Y7T0FFR0Y7QUFHUDtBQUVBLElBQU1LLGFBQWE7V0FBbUJiLFdBQVdNOztBQUVqRCxJQUFNUSxVQUFvQjtJQUN4QixJQUFvQlosa0JBQUFBLGtCQUFaYSxJQUFZYixnQkFBWmEsR0FBR0MsT0FBU2QsZ0JBQVRjO0lBQ1gsSUFBTUMsK0JBQWlCLG9CQUFDQyxjQUFNSCxFQUFFO0lBQ2hDLElBQU0sQUFBRU4sVUFBWUksYUFBWko7SUFDUixJQUFNVSxTQUFTZDtJQUNmLElBQVFlLEFBQVVDLFFBQVlGLE9BQXRCQyxPQUFVQztJQUVsQixxQkFDRSxvQkFBQ0M7UUFBSUMsV0FBVTtPQUNaZCxRQUFRZSxNQUFNLEdBQUcsa0JBRWQsb0JBQUN2QjtRQUFLd0IsSUFBSUo7T0FDUEosOEJBQ0Qsb0JBQUNkLGtCQUdIYyxnQkFDSFIsUUFBUWlCLEdBQUcsQ0FBQyxTQUFDQyxNQUFNQztRQUNsQixJQUFNQywwQkFBWSxvQkFBQ1g7WUFBS1ksS0FBS0Y7V0FBSXhCLGVBQWV1QixLQUFLSSxLQUFLLEVBQUVmO1FBRTVELElBQU1nQixPQUFPdkIsUUFBUWUsTUFBTSxLQUFLSSxJQUFJLElBQ2hDQywwQkFFQSxvQkFBQzVCO1lBQ0N3QixJQUFJRSxLQUFLTSxHQUFHO1lBQ1pILEtBQUtGO1dBRUpDLHlCQUNELG9CQUFDMUI7UUFJUCxPQUFPNkI7SUFDVDtBQUdOO0FBRUEsU0FDRXpCLGVBQWUsRUFDZk0sVUFBVSxHQUNWO0FBRUYsZUFBZUMsUUFBUSJ9