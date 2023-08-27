function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
import React from "react";
import { useTranslation } from "react-i18next";
import { isComponent } from "./types";
import { useWatchForm } from "../Form/context";
import { getTranslation } from "../../../../utilities/getTranslation";
var baseClass = "row-label";
export var RowLabel = function(_param) {
    var className = _param.className, rest = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("span", {
        style: {
            pointerEvents: "none"
        },
        className: [
            baseClass,
            className
        ].filter(Boolean).join(" ")
    }, /*#__PURE__*/ React.createElement(RowLabelContent, rest));
};
var RowLabelContent = function(props) {
    var path = props.path, label = props.label, rowNumber = props.rowNumber;
    var i18n = useTranslation().i18n;
    var _useWatchForm = useWatchForm(), getDataByPath = _useWatchForm.getDataByPath, getSiblingData = _useWatchForm.getSiblingData;
    var collapsibleData = getSiblingData(path);
    var arrayData = getDataByPath(path);
    var data = arrayData || collapsibleData;
    if (isComponent(label)) {
        var Label = label;
        return /*#__PURE__*/ React.createElement(Label, {
            data: data,
            path: path,
            index: rowNumber
        });
    }
    return /*#__PURE__*/ React.createElement(React.Fragment, null, typeof label === "function" ? label({
        data: data,
        path: path,
        index: rowNumber
    }) : getTranslation(label, i18n));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL1Jvd0xhYmVsL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IGlzQ29tcG9uZW50LCBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgdXNlV2F0Y2hGb3JtIH0gZnJvbSAnLi4vRm9ybS9jb250ZXh0JztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3Jvdy1sYWJlbCc7XG5cbmV4cG9ydCBjb25zdCBSb3dMYWJlbDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2xhc3NOYW1lLCAuLi5yZXN0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3BhblxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgfX1cbiAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICBiYXNlQ2xhc3MsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX1cbiAgICA+XG4gICAgICA8Um93TGFiZWxDb250ZW50IHsuLi5yZXN0fSAvPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn07XG5cbmNvbnN0IFJvd0xhYmVsQ29udGVudDogUmVhY3QuRkM8T21pdDxQcm9wcywgJ2NsYXNzTmFtZSc+PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgcGF0aCxcbiAgICBsYWJlbCxcbiAgICByb3dOdW1iZXIsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IHsgZ2V0RGF0YUJ5UGF0aCwgZ2V0U2libGluZ0RhdGEgfSA9IHVzZVdhdGNoRm9ybSgpO1xuICBjb25zdCBjb2xsYXBzaWJsZURhdGEgPSBnZXRTaWJsaW5nRGF0YShwYXRoKTtcbiAgY29uc3QgYXJyYXlEYXRhID0gZ2V0RGF0YUJ5UGF0aChwYXRoKTtcbiAgY29uc3QgZGF0YSA9IGFycmF5RGF0YSB8fCBjb2xsYXBzaWJsZURhdGE7XG5cbiAgaWYgKGlzQ29tcG9uZW50KGxhYmVsKSkge1xuICAgIGNvbnN0IExhYmVsID0gbGFiZWw7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYWJlbFxuICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICBwYXRoPXtwYXRofVxuICAgICAgICBpbmRleD17cm93TnVtYmVyfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICB7dHlwZW9mIGxhYmVsID09PSAnZnVuY3Rpb24nID8gbGFiZWwoe1xuICAgICAgICBkYXRhLFxuICAgICAgICBwYXRoLFxuICAgICAgICBpbmRleDogcm93TnVtYmVyLFxuICAgICAgfSkgOiBnZXRUcmFuc2xhdGlvbihsYWJlbCwgaTE4bil9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VUcmFuc2xhdGlvbiIsImlzQ29tcG9uZW50IiwidXNlV2F0Y2hGb3JtIiwiZ2V0VHJhbnNsYXRpb24iLCJiYXNlQ2xhc3MiLCJSb3dMYWJlbCIsImNsYXNzTmFtZSIsInJlc3QiLCJzcGFuIiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJSb3dMYWJlbENvbnRlbnQiLCJwcm9wcyIsInBhdGgiLCJsYWJlbCIsInJvd051bWJlciIsImkxOG4iLCJnZXREYXRhQnlQYXRoIiwiZ2V0U2libGluZ0RhdGEiLCJjb2xsYXBzaWJsZURhdGEiLCJhcnJheURhdGEiLCJkYXRhIiwiTGFiZWwiLCJpbmRleCIsIkZyYWdtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxXQUFXLFFBQVE7QUFDMUIsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxTQUFTQyxXQUFXLFFBQWUsVUFBVTtBQUM3QyxTQUFTQyxZQUFZLFFBQVEsa0JBQWtCO0FBQy9DLFNBQVNDLGNBQWMsUUFBUSx1Q0FBdUM7QUFFdEUsSUFBTUMsWUFBWTtBQUVsQixPQUFPLElBQU1DLFdBQTRCO1FBQUdDLG1CQUFBQSxXQUFjQztRQUFkRDs7SUFDMUMscUJBQ0Usb0JBQUNFO1FBQ0NDLE9BQU87WUFDTEMsZUFBZTtRQUNqQjtRQUNBSixXQUFXO1lBQ1RGO1lBQ0FFO1NBQ0QsQ0FBQ0ssTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7cUJBRXZCLG9CQUFDQyxpQkFBb0JQO0FBRzNCLEVBQUU7QUFFRixJQUFNTyxrQkFBc0QsU0FBQ0M7SUFDM0QsSUFDRUMsT0FHRUQsTUFIRkMsTUFDQUMsUUFFRUYsTUFGRkUsT0FDQUMsWUFDRUgsTUFERkc7SUFHRixJQUFNLEFBQUVDLE9BQVNuQixpQkFBVG1CO0lBQ1IsSUFBMENqQixnQkFBQUEsZ0JBQWxDa0IsZ0JBQWtDbEIsY0FBbENrQixlQUFlQyxpQkFBbUJuQixjQUFuQm1CO0lBQ3ZCLElBQU1DLGtCQUFrQkQsZUFBZUw7SUFDdkMsSUFBTU8sWUFBWUgsY0FBY0o7SUFDaEMsSUFBTVEsT0FBT0QsYUFBYUQ7SUFFMUIsSUFBSXJCLFlBQVlnQixRQUFRO1FBQ3RCLElBQU1RLFFBQVFSO1FBQ2QscUJBQ0Usb0JBQUNRO1lBQ0NELE1BQU1BO1lBQ05SLE1BQU1BO1lBQ05VLE9BQU9SOztJQUdiO0lBRUEscUJBQ0Usb0JBQUNuQixNQUFNNEIsUUFBUSxRQUNaLE9BQU9WLFVBQVUsYUFBYUEsTUFBTTtRQUNuQ08sTUFBQUE7UUFDQVIsTUFBQUE7UUFDQVUsT0FBT1I7SUFDVCxLQUFLZixlQUFlYyxPQUFPRTtBQUdqQyJ9