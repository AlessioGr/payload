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
import Thumbnail from "../../../../../../elements/Thumbnail";
import "./index.scss";
var baseClass = "file";
var File = function(param) {
    var rowData = param.rowData, data = param.data, collection = param.collection;
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ React.createElement(Thumbnail, {
        size: "small",
        className: "".concat(baseClass, "__thumbnail"),
        doc: _object_spread_props(_object_spread({}, rowData), {
            filename: data
        }),
        collection: collection
    }), /*#__PURE__*/ React.createElement("span", {
        className: "".concat(baseClass, "__filename")
    }, String(data)));
};
export default File;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC9maWVsZC10eXBlcy9GaWxlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRodW1ibmFpbCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9lbGVtZW50cy9UaHVtYm5haWwnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdmaWxlJztcblxuY29uc3QgRmlsZSA9ICh7IHJvd0RhdGEsIGRhdGEsIGNvbGxlY3Rpb24gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPFRodW1ibmFpbFxuICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3RodW1ibmFpbGB9XG4gICAgICAgIGRvYz17e1xuICAgICAgICAgIC4uLnJvd0RhdGEsXG4gICAgICAgICAgZmlsZW5hbWU6IGRhdGEsXG4gICAgICAgIH19XG4gICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAvPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19maWxlbmFtZWB9PnsgU3RyaW5nKGRhdGEpIH08L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWxlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGh1bWJuYWlsIiwiYmFzZUNsYXNzIiwiRmlsZSIsInJvd0RhdGEiLCJkYXRhIiwiY29sbGVjdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsInNpemUiLCJkb2MiLCJmaWxlbmFtZSIsInNwYW4iLCJTdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxXQUFXLFFBQVE7QUFDMUIsT0FBT0MsZUFBZSx1Q0FBdUM7QUFFN0QsT0FBTyxlQUFlO0FBRXRCLElBQU1DLFlBQVk7QUFFbEIsSUFBTUMsT0FBTztRQUFHQyxnQkFBQUEsU0FBU0MsYUFBQUEsTUFBTUMsbUJBQUFBO0lBQzdCLHFCQUNFLG9CQUFDQztRQUFJQyxXQUFXTjtxQkFDZCxvQkFBQ0Q7UUFDQ1EsTUFBSztRQUNMRCxXQUFXLEFBQUMsR0FBWSxPQUFWTixXQUFVO1FBQ3hCUSxLQUFLLHdDQUNBTjtZQUNITyxVQUFVTjs7UUFFWkMsWUFBWUE7c0JBRWQsb0JBQUNNO1FBQUtKLFdBQVcsQUFBQyxHQUFZLE9BQVZOLFdBQVU7T0FBZVcsT0FBT1I7QUFHMUQ7QUFFQSxlQUFlRixLQUFLIn0=