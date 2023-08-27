function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
import React from "react";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../utilities/Config";
import { useAuth } from "../../utilities/Auth";
import MinimalTemplate from "../../templates/Minimal";
import Meta from "../../utilities/Meta";
import Form from "../../forms/Form";
import RenderFields from "../../forms/RenderFields";
import fieldTypes from "../../forms/field-types";
import FormSubmit from "../../forms/Submit";
import "./index.scss";
var baseClass = "create-first-user";
var CreateFirstUser = function(props) {
    var setInitialized = props.setInitialized;
    var setToken = useAuth().setToken;
    var _useConfig = useConfig(), _useConfig_admin = _useConfig.admin, userSlug = _useConfig_admin.user, collections = _useConfig.collections, serverURL = _useConfig.serverURL, _useConfig_routes = _useConfig.routes, admin = _useConfig_routes.admin, api = _useConfig_routes.api;
    var t = useTranslation("authentication").t;
    var userConfig = collections.find(function(collection) {
        return collection.slug === userSlug;
    });
    var onSuccess = function(json) {
        var _json_user, _json;
        if ((_json = json) === null || _json === void 0 ? void 0 : (_json_user = _json.user) === null || _json_user === void 0 ? void 0 : _json_user.token) {
            setToken(json.user.token);
        }
        setInitialized(true);
    };
    var fields = [
        {
            name: "email",
            label: t("general:emailAddress"),
            type: "email",
            required: true
        },
        {
            name: "password",
            label: t("general:password"),
            type: "password",
            required: true
        },
        {
            name: "confirm-password",
            label: t("confirmPassword"),
            type: "confirmPassword",
            required: true
        }
    ];
    return /*#__PURE__*/ React.createElement(MinimalTemplate, {
        className: baseClass
    }, /*#__PURE__*/ React.createElement("h1", null, t("general:welcome")), /*#__PURE__*/ React.createElement("p", null, t("beginCreateFirstUser")), /*#__PURE__*/ React.createElement(Meta, {
        title: t("createFirstUser"),
        description: t("createFirstUser"),
        keywords: t("general:create")
    }), /*#__PURE__*/ React.createElement(Form, {
        onSuccess: onSuccess,
        method: "post",
        redirect: admin,
        action: "".concat(serverURL).concat(api, "/").concat(userSlug, "/first-register"),
        validationOperation: "create"
    }, /*#__PURE__*/ React.createElement(RenderFields, {
        fieldSchema: _to_consumable_array(fields).concat(_to_consumable_array(userConfig.fields)),
        fieldTypes: fieldTypes
    }), /*#__PURE__*/ React.createElement(FormSubmit, null, t("general:create"))));
};
export default CreateFirstUser;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0NyZWF0ZUZpcnN0VXNlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQXV0aCc7XG5pbXBvcnQgTWluaW1hbFRlbXBsYXRlIGZyb20gJy4uLy4uL3RlbXBsYXRlcy9NaW5pbWFsJztcbmltcG9ydCBNZXRhIGZyb20gJy4uLy4uL3V0aWxpdGllcy9NZXRhJztcbmltcG9ydCBGb3JtIGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0nO1xuaW1wb3J0IFJlbmRlckZpZWxkcyBmcm9tICcuLi8uLi9mb3Jtcy9SZW5kZXJGaWVsZHMnO1xuaW1wb3J0IGZpZWxkVHlwZXMgZnJvbSAnLi4vLi4vZm9ybXMvZmllbGQtdHlwZXMnO1xuaW1wb3J0IEZvcm1TdWJtaXQgZnJvbSAnLi4vLi4vZm9ybXMvU3VibWl0JztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdjcmVhdGUtZmlyc3QtdXNlcic7XG5cbmNvbnN0IENyZWF0ZUZpcnN0VXNlcjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgc2V0SW5pdGlhbGl6ZWQgfSA9IHByb3BzO1xuICBjb25zdCB7IHNldFRva2VuIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IHtcbiAgICBhZG1pbjogeyB1c2VyOiB1c2VyU2x1ZyB9LCBjb2xsZWN0aW9ucywgc2VydmVyVVJMLCByb3V0ZXM6IHsgYWRtaW4sIGFwaSB9LFxuICB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2F1dGhlbnRpY2F0aW9uJyk7XG5cbiAgY29uc3QgdXNlckNvbmZpZyA9IGNvbGxlY3Rpb25zLmZpbmQoKGNvbGxlY3Rpb24pID0+IGNvbGxlY3Rpb24uc2x1ZyA9PT0gdXNlclNsdWcpO1xuXG4gIGNvbnN0IG9uU3VjY2VzcyA9IChqc29uKSA9PiB7XG4gICAgaWYgKGpzb24/LnVzZXI/LnRva2VuKSB7XG4gICAgICBzZXRUb2tlbihqc29uLnVzZXIudG9rZW4pO1xuICAgIH1cblxuICAgIHNldEluaXRpYWxpemVkKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGZpZWxkcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnZW1haWwnLFxuICAgICAgbGFiZWw6IHQoJ2dlbmVyYWw6ZW1haWxBZGRyZXNzJyksXG4gICAgICB0eXBlOiAnZW1haWwnLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSwge1xuICAgICAgbmFtZTogJ3Bhc3N3b3JkJyxcbiAgICAgIGxhYmVsOiB0KCdnZW5lcmFsOnBhc3N3b3JkJyksXG4gICAgICB0eXBlOiAncGFzc3dvcmQnLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSwge1xuICAgICAgbmFtZTogJ2NvbmZpcm0tcGFzc3dvcmQnLFxuICAgICAgbGFiZWw6IHQoJ2NvbmZpcm1QYXNzd29yZCcpLFxuICAgICAgdHlwZTogJ2NvbmZpcm1QYXNzd29yZCcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICBdIGFzIEZpZWxkW107XG5cbiAgcmV0dXJuIChcbiAgICA8TWluaW1hbFRlbXBsYXRlIGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIDxoMT57dCgnZ2VuZXJhbDp3ZWxjb21lJyl9PC9oMT5cbiAgICAgIDxwPnt0KCdiZWdpbkNyZWF0ZUZpcnN0VXNlcicpfTwvcD5cbiAgICAgIDxNZXRhXG4gICAgICAgIHRpdGxlPXt0KCdjcmVhdGVGaXJzdFVzZXInKX1cbiAgICAgICAgZGVzY3JpcHRpb249e3QoJ2NyZWF0ZUZpcnN0VXNlcicpfVxuICAgICAgICBrZXl3b3Jkcz17dCgnZ2VuZXJhbDpjcmVhdGUnKX1cbiAgICAgIC8+XG4gICAgICA8Rm9ybVxuICAgICAgICBvblN1Y2Nlc3M9e29uU3VjY2Vzc31cbiAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgIHJlZGlyZWN0PXthZG1pbn1cbiAgICAgICAgYWN0aW9uPXtgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7dXNlclNsdWd9L2ZpcnN0LXJlZ2lzdGVyYH1cbiAgICAgICAgdmFsaWRhdGlvbk9wZXJhdGlvbj1cImNyZWF0ZVwiXG4gICAgICA+XG4gICAgICAgIDxSZW5kZXJGaWVsZHNcbiAgICAgICAgICBmaWVsZFNjaGVtYT17W1xuICAgICAgICAgICAgLi4uZmllbGRzLFxuICAgICAgICAgICAgLi4udXNlckNvbmZpZy5maWVsZHMsXG4gICAgICAgICAgXX1cbiAgICAgICAgICBmaWVsZFR5cGVzPXtmaWVsZFR5cGVzfVxuICAgICAgICAvPlxuICAgICAgICA8Rm9ybVN1Ym1pdD57dCgnZ2VuZXJhbDpjcmVhdGUnKX08L0Zvcm1TdWJtaXQ+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9NaW5pbWFsVGVtcGxhdGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVGaXJzdFVzZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUNvbmZpZyIsInVzZUF1dGgiLCJNaW5pbWFsVGVtcGxhdGUiLCJNZXRhIiwiRm9ybSIsIlJlbmRlckZpZWxkcyIsImZpZWxkVHlwZXMiLCJGb3JtU3VibWl0IiwiYmFzZUNsYXNzIiwiQ3JlYXRlRmlyc3RVc2VyIiwicHJvcHMiLCJzZXRJbml0aWFsaXplZCIsInNldFRva2VuIiwiYWRtaW4iLCJ1c2VyIiwidXNlclNsdWciLCJjb2xsZWN0aW9ucyIsInNlcnZlclVSTCIsInJvdXRlcyIsImFwaSIsInQiLCJ1c2VyQ29uZmlnIiwiZmluZCIsImNvbGxlY3Rpb24iLCJzbHVnIiwib25TdWNjZXNzIiwianNvbiIsInRva2VuIiwiZmllbGRzIiwibmFtZSIsImxhYmVsIiwidHlwZSIsInJlcXVpcmVkIiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImtleXdvcmRzIiwibWV0aG9kIiwicmVkaXJlY3QiLCJhY3Rpb24iLCJ2YWxpZGF0aW9uT3BlcmF0aW9uIiwiZmllbGRTY2hlbWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxXQUFXLFFBQVE7QUFDMUIsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxTQUFTQyxTQUFTLFFBQVEseUJBQXlCO0FBQ25ELFNBQVNDLE9BQU8sUUFBUSx1QkFBdUI7QUFDL0MsT0FBT0MscUJBQXFCLDBCQUEwQjtBQUN0RCxPQUFPQyxVQUFVLHVCQUF1QjtBQUN4QyxPQUFPQyxVQUFVLG1CQUFtQjtBQUNwQyxPQUFPQyxrQkFBa0IsMkJBQTJCO0FBQ3BELE9BQU9DLGdCQUFnQiwwQkFBMEI7QUFDakQsT0FBT0MsZ0JBQWdCLHFCQUFxQjtBQUk1QyxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxrQkFBbUMsU0FBQ0M7SUFDeEMsSUFBTSxBQUFFQyxpQkFBbUJELE1BQW5CQztJQUNSLElBQU0sQUFBRUMsV0FBYVgsVUFBYlc7SUFDUixJQUVJWixhQUFBQSxnQ0FBQUEsV0FERmEsT0FBU0MsQUFBTUMsNEJBQU5ELE1BQWtCRSxjQUN6QmhCLFdBRHlCZ0IsYUFBYUMsWUFDdENqQixXQURzQ2lCLCtCQUN0Q2pCLFdBRGlEa0IsUUFBVUwsMEJBQUFBLE9BQU9NLHdCQUFBQTtJQUV0RSxJQUFNLEFBQUVDLElBQU1yQixlQUFlLGtCQUFyQnFCO0lBRVIsSUFBTUMsYUFBYUwsWUFBWU0sSUFBSSxDQUFDLFNBQUNDO2VBQWVBLFdBQVdDLElBQUksS0FBS1Q7O0lBRXhFLElBQU1VLFlBQVksU0FBQ0M7WUFDYkEsWUFBQUE7UUFBSixLQUFJQSxRQUFBQSxrQkFBQUEsNkJBQUFBLGFBQUFBLE1BQU1aLElBQUksY0FBVlksaUNBQUFBLFdBQVlDLEtBQUssRUFBRTtZQUNyQmYsU0FBU2MsS0FBS1osSUFBSSxDQUFDYSxLQUFLO1FBQzFCO1FBRUFoQixlQUFlO0lBQ2pCO0lBRUEsSUFBTWlCLFNBQVM7UUFDYjtZQUNFQyxNQUFNO1lBQ05DLE9BQU9WLEVBQUU7WUFDVFcsTUFBTTtZQUNOQyxVQUFVO1FBQ1o7UUFBRztZQUNESCxNQUFNO1lBQ05DLE9BQU9WLEVBQUU7WUFDVFcsTUFBTTtZQUNOQyxVQUFVO1FBQ1o7UUFBRztZQUNESCxNQUFNO1lBQ05DLE9BQU9WLEVBQUU7WUFDVFcsTUFBTTtZQUNOQyxVQUFVO1FBQ1o7S0FDRDtJQUVELHFCQUNFLG9CQUFDOUI7UUFBZ0IrQixXQUFXekI7cUJBQzFCLG9CQUFDMEIsWUFBSWQsRUFBRSxtQ0FDUCxvQkFBQ2UsV0FBR2YsRUFBRSx3Q0FDTixvQkFBQ2pCO1FBQ0NpQyxPQUFPaEIsRUFBRTtRQUNUaUIsYUFBYWpCLEVBQUU7UUFDZmtCLFVBQVVsQixFQUFFO3NCQUVkLG9CQUFDaEI7UUFDQ3FCLFdBQVdBO1FBQ1hjLFFBQU87UUFDUEMsVUFBVTNCO1FBQ1Y0QixRQUFRLEFBQUMsR0FBY3RCLE9BQVpGLFdBQW1CRixPQUFQSSxLQUFJLEtBQVksT0FBVEosVUFBUztRQUN2QzJCLHFCQUFvQjtxQkFFcEIsb0JBQUNyQztRQUNDc0MsYUFBYSxBQUNYLHFCQUFHZixlQUNILHFCQUFHUCxXQUFXTyxNQUFNO1FBRXRCdEIsWUFBWUE7c0JBRWQsb0JBQUNDLGtCQUFZYSxFQUFFO0FBSXZCO0FBRUEsZUFBZVgsZ0JBQWdCIn0=