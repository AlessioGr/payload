import React from "react";
import RenderFieldsToDiff from "../..";
import Nested from "../Nested";
var baseClass = "tabs-diff";
var Tabs = function(param) {
    var version = param.version, comparison = param.comparison, permissions = param.permissions, field = param.field, locales = param.locales, fieldComponents = param.fieldComponents;
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__wrap")
    }, field.tabs.map(function(tab, i) {
        if ("name" in tab) {
            var _version, _comparison;
            return /*#__PURE__*/ React.createElement(Nested, {
                key: i,
                version: (_version = version) === null || _version === void 0 ? void 0 : _version[tab.name],
                comparison: (_comparison = comparison) === null || _comparison === void 0 ? void 0 : _comparison[tab.name],
                permissions: permissions,
                field: tab,
                locales: locales,
                fieldComponents: fieldComponents
            });
        }
        return /*#__PURE__*/ React.createElement(RenderFieldsToDiff, {
            key: i,
            locales: locales,
            version: version,
            comparison: comparison,
            fieldPermissions: permissions,
            fields: tab.fields,
            fieldComponents: fieldComponents
        });
    })));
};
export default Tabs;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vUmVuZGVyRmllbGRzVG9EaWZmL2ZpZWxkcy9UYWJzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlbmRlckZpZWxkc1RvRGlmZiBmcm9tICcuLi8uLic7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IFRhYnNGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IE5lc3RlZCBmcm9tICcuLi9OZXN0ZWQnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAndGFicy1kaWZmJztcblxuY29uc3QgVGFiczogUmVhY3QuRkM8UHJvcHMgJiB7IGZpZWxkOiBUYWJzRmllbGQgfT4gPSAoe1xuICB2ZXJzaW9uLFxuICBjb21wYXJpc29uLFxuICBwZXJtaXNzaW9ucyxcbiAgZmllbGQsXG4gIGxvY2FsZXMsXG4gIGZpZWxkQ29tcG9uZW50cyxcbn0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3dyYXBgfT5cbiAgICAgIHtmaWVsZC50YWJzLm1hcCgodGFiLCBpKSA9PiB7XG4gICAgICAgIGlmICgnbmFtZScgaW4gdGFiKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxOZXN0ZWRcbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICB2ZXJzaW9uPXt2ZXJzaW9uPy5bdGFiLm5hbWVdfVxuICAgICAgICAgICAgICBjb21wYXJpc29uPXtjb21wYXJpc29uPy5bdGFiLm5hbWVdfVxuICAgICAgICAgICAgICBwZXJtaXNzaW9ucz17cGVybWlzc2lvbnN9XG4gICAgICAgICAgICAgIGZpZWxkPXt0YWJ9XG4gICAgICAgICAgICAgIGxvY2FsZXM9e2xvY2FsZXN9XG4gICAgICAgICAgICAgIGZpZWxkQ29tcG9uZW50cz17ZmllbGRDb21wb25lbnRzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmVuZGVyRmllbGRzVG9EaWZmXG4gICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICBsb2NhbGVzPXtsb2NhbGVzfVxuICAgICAgICAgICAgdmVyc2lvbj17dmVyc2lvbn1cbiAgICAgICAgICAgIGNvbXBhcmlzb249e2NvbXBhcmlzb259XG4gICAgICAgICAgICBmaWVsZFBlcm1pc3Npb25zPXtwZXJtaXNzaW9uc31cbiAgICAgICAgICAgIGZpZWxkcz17dGFiLmZpZWxkc31cbiAgICAgICAgICAgIGZpZWxkQ29tcG9uZW50cz17ZmllbGRDb21wb25lbnRzfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUYWJzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVuZGVyRmllbGRzVG9EaWZmIiwiTmVzdGVkIiwiYmFzZUNsYXNzIiwiVGFicyIsInZlcnNpb24iLCJjb21wYXJpc29uIiwicGVybWlzc2lvbnMiLCJmaWVsZCIsImxvY2FsZXMiLCJmaWVsZENvbXBvbmVudHMiLCJkaXYiLCJjbGFzc05hbWUiLCJ0YWJzIiwibWFwIiwidGFiIiwiaSIsImtleSIsIm5hbWUiLCJmaWVsZFBlcm1pc3Npb25zIiwiZmllbGRzIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFXLFFBQVE7QUFDMUIsT0FBT0Msd0JBQXdCLFFBQVE7QUFHdkMsT0FBT0MsWUFBWSxZQUFZO0FBRS9CLElBQU1DLFlBQVk7QUFFbEIsSUFBTUMsT0FBK0M7UUFDbkRDLGdCQUFBQSxTQUNBQyxtQkFBQUEsWUFDQUMsb0JBQUFBLGFBQ0FDLGNBQUFBLE9BQ0FDLGdCQUFBQSxTQUNBQyx3QkFBQUE7eUJBRUEsb0JBQUNDO1FBQUlDLFdBQVdUO3FCQUNkLG9CQUFDUTtRQUFJQyxXQUFXLEFBQUMsR0FBWSxPQUFWVCxXQUFVO09BQzFCSyxNQUFNSyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxLQUFLQztRQUNwQixJQUFJLFVBQVVELEtBQUs7Z0JBSUpWLFVBQ0dDO1lBSmhCLHFCQUNFLG9CQUFDSjtnQkFDQ2UsS0FBS0Q7Z0JBQ0xYLE9BQU8sR0FBRUEsV0FBQUEscUJBQUFBLCtCQUFBQSxRQUFTLENBQUNVLElBQUlHLElBQUksQ0FBQztnQkFDNUJaLFVBQVUsR0FBRUEsY0FBQUEsd0JBQUFBLGtDQUFBQSxXQUFZLENBQUNTLElBQUlHLElBQUksQ0FBQztnQkFDbENYLGFBQWFBO2dCQUNiQyxPQUFPTztnQkFDUE4sU0FBU0E7Z0JBQ1RDLGlCQUFpQkE7O1FBR3ZCO1FBRUEscUJBQ0Usb0JBQUNUO1lBQ0NnQixLQUFLRDtZQUNMUCxTQUFTQTtZQUNUSixTQUFTQTtZQUNUQyxZQUFZQTtZQUNaYSxrQkFBa0JaO1lBQ2xCYSxRQUFRTCxJQUFJSyxNQUFNO1lBQ2xCVixpQkFBaUJBOztJQUd2Qjs7QUFLTixlQUFlTixLQUFLIn0=