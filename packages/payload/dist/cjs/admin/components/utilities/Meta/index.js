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
var _reacthelmet = /*#__PURE__*/ _interop_require_default(require("react-helmet"));
var _reacti18next = require("react-i18next");
var _Config = require("../Config");
var _faviconsvg = /*#__PURE__*/ _interop_require_default(require("../../../assets/images/favicon.svg"));
var _ogimagepng = /*#__PURE__*/ _interop_require_default(require("../../../assets/images/og-image.png"));
var _useMountEffect = /*#__PURE__*/ _interop_require_default(require("../../../hooks/useMountEffect"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var rtlLanguages = [
    "ar",
    "fa",
    "ha",
    "ku",
    "ur",
    "ps",
    "dv",
    "ks",
    "khw",
    "he",
    "yi"
];
var Meta = function(param) {
    var description = param.description, _param_meta = param.// lang = 'en',
    meta, meta = _param_meta === void 0 ? [] : _param_meta, title = param.title, _param_keywords = param.keywords, keywords = _param_keywords === void 0 ? "CMS, Admin, Dashboard" : _param_keywords;
    var _config_admin_meta;
    var i18n = (0, _reacti18next.useTranslation)().i18n;
    var currentLanguage = i18n.language;
    var currentDirection = rtlLanguages.includes(currentLanguage) ? "RTL" : "LTR";
    var config = (0, _Config.useConfig)();
    var _config_admin_meta_titleSuffix;
    var titleSuffix = (_config_admin_meta_titleSuffix = (_config_admin_meta = config.admin.meta) === null || _config_admin_meta === void 0 ? void 0 : _config_admin_meta.titleSuffix) !== null && _config_admin_meta_titleSuffix !== void 0 ? _config_admin_meta_titleSuffix : "- Payload";
    var _config_admin_meta_favicon;
    var favicon = (_config_admin_meta_favicon = config.admin.meta.favicon) !== null && _config_admin_meta_favicon !== void 0 ? _config_admin_meta_favicon : _faviconsvg.default;
    var _config_admin_meta_ogImage;
    var ogImage = (_config_admin_meta_ogImage = config.admin.meta.ogImage) !== null && _config_admin_meta_ogImage !== void 0 ? _config_admin_meta_ogImage : _ogimagepng.default;
    (0, _useMountEffect.default)(function() {
        var faviconElement = document.querySelector("link[data-placeholder-favicon]");
        if (faviconElement) {
            faviconElement.remove();
        }
    });
    return /*#__PURE__*/ _react.default.createElement(_reacthelmet.default, {
        htmlAttributes: {
            lang: currentLanguage,
            dir: currentDirection
        },
        title: "".concat(title, " ").concat(titleSuffix),
        meta: [
            {
                name: "description",
                content: description
            },
            {
                name: "keywords",
                content: keywords
            },
            {
                property: "og:title",
                content: "".concat(title, " ").concat(titleSuffix)
            },
            {
                property: "og:image",
                content: ogImage
            },
            {
                property: "og:description",
                content: description
            },
            {
                property: "og:type",
                content: "website"
            },
            {
                name: "twitter:card",
                content: "summary"
            },
            {
                name: "twitter:title",
                content: title
            },
            {
                name: "twitter:description",
                content: description
            }
        ].concat(meta),
        link: [
            {
                rel: "icon",
                type: "image/svg+xml",
                href: favicon
            }
        ]
    });
};
var _default = Meta;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9NZXRhL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uL0NvbmZpZyc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHBheWxvYWRGYXZpY29uIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmF2aWNvbi5zdmcnO1xuaW1wb3J0IHBheWxvYWRPZ0ltYWdlIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvb2ctaW1hZ2UucG5nJztcbmltcG9ydCB1c2VNb3VudEVmZmVjdCBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VNb3VudEVmZmVjdCc7XG5cbmNvbnN0IHJ0bExhbmd1YWdlcyA9IFtcbiAgJ2FyJyxcbiAgJ2ZhJyxcbiAgJ2hhJyxcbiAgJ2t1JyxcbiAgJ3VyJyxcbiAgJ3BzJyxcbiAgJ2R2JyxcbiAgJ2tzJyxcbiAgJ2todycsXG4gICdoZScsXG4gICd5aScsXG5dO1xuXG5jb25zdCBNZXRhOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBkZXNjcmlwdGlvbixcbiAgLy8gbGFuZyA9ICdlbicsXG4gIG1ldGEgPSBbXSxcbiAgdGl0bGUsXG4gIGtleXdvcmRzID0gJ0NNUywgQWRtaW4sIERhc2hib2FyZCcsXG59KSA9PiB7XG4gIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgY3VycmVudExhbmd1YWdlID0gaTE4bi5sYW5ndWFnZTtcbiAgY29uc3QgY3VycmVudERpcmVjdGlvbiA9IHJ0bExhbmd1YWdlcy5pbmNsdWRlcyhjdXJyZW50TGFuZ3VhZ2UpID8gJ1JUTCcgOiAnTFRSJztcblxuICBjb25zdCBjb25maWcgPSB1c2VDb25maWcoKTtcbiAgY29uc3QgdGl0bGVTdWZmaXggPSBjb25maWcuYWRtaW4ubWV0YT8udGl0bGVTdWZmaXggPz8gJy0gUGF5bG9hZCc7XG4gIGNvbnN0IGZhdmljb24gPSBjb25maWcuYWRtaW4ubWV0YS5mYXZpY29uID8/IHBheWxvYWRGYXZpY29uO1xuICBjb25zdCBvZ0ltYWdlID0gY29uZmlnLmFkbWluLm1ldGEub2dJbWFnZSA/PyBwYXlsb2FkT2dJbWFnZTtcblxuICB1c2VNb3VudEVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmF2aWNvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxMaW5rRWxlbWVudD4oJ2xpbmtbZGF0YS1wbGFjZWhvbGRlci1mYXZpY29uXScpO1xuICAgIGlmIChmYXZpY29uRWxlbWVudCkge1xuICAgICAgZmF2aWNvbkVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxIZWxtZXRcbiAgICAgIGh0bWxBdHRyaWJ1dGVzPXt7XG4gICAgICAgIGxhbmc6IGN1cnJlbnRMYW5ndWFnZSxcbiAgICAgICAgZGlyOiBjdXJyZW50RGlyZWN0aW9uLFxuICAgICAgfX1cbiAgICAgIHRpdGxlPXtgJHt0aXRsZX0gJHt0aXRsZVN1ZmZpeH1gfVxuICAgICAgbWV0YT17W1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdrZXl3b3JkcycsXG4gICAgICAgICAgY29udGVudDoga2V5d29yZHMsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm9wZXJ0eTogJ29nOnRpdGxlJyxcbiAgICAgICAgICBjb250ZW50OiBgJHt0aXRsZX0gJHt0aXRsZVN1ZmZpeH1gLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvcGVydHk6ICdvZzppbWFnZScsXG4gICAgICAgICAgY29udGVudDogb2dJbWFnZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3BlcnR5OiAnb2c6ZGVzY3JpcHRpb24nLFxuICAgICAgICAgIGNvbnRlbnQ6IGRlc2NyaXB0aW9uLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvcGVydHk6ICdvZzp0eXBlJyxcbiAgICAgICAgICBjb250ZW50OiAnd2Vic2l0ZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAndHdpdHRlcjpjYXJkJyxcbiAgICAgICAgICBjb250ZW50OiAnc3VtbWFyeScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAndHdpdHRlcjp0aXRsZScsXG4gICAgICAgICAgY29udGVudDogdGl0bGUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAndHdpdHRlcjpkZXNjcmlwdGlvbicsXG4gICAgICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXG4gICAgICAgIH0sXG4gICAgICBdLmNvbmNhdChtZXRhKX1cbiAgICAgIGxpbms9e1tcbiAgICAgICAge1xuICAgICAgICAgIHJlbDogJ2ljb24nLFxuICAgICAgICAgIHR5cGU6ICdpbWFnZS9zdmcreG1sJyxcbiAgICAgICAgICBocmVmOiBmYXZpY29uLFxuICAgICAgICB9LFxuICAgICAgXX1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWV0YTtcbiJdLCJuYW1lcyI6WyJydGxMYW5ndWFnZXMiLCJNZXRhIiwiZGVzY3JpcHRpb24iLCJtZXRhIiwidGl0bGUiLCJrZXl3b3JkcyIsImNvbmZpZyIsImkxOG4iLCJ1c2VUcmFuc2xhdGlvbiIsImN1cnJlbnRMYW5ndWFnZSIsImxhbmd1YWdlIiwiY3VycmVudERpcmVjdGlvbiIsImluY2x1ZGVzIiwidXNlQ29uZmlnIiwidGl0bGVTdWZmaXgiLCJhZG1pbiIsImZhdmljb24iLCJwYXlsb2FkRmF2aWNvbiIsIm9nSW1hZ2UiLCJwYXlsb2FkT2dJbWFnZSIsInVzZU1vdW50RWZmZWN0IiwiZmF2aWNvbkVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmUiLCJIZWxtZXQiLCJodG1sQXR0cmlidXRlcyIsImxhbmciLCJkaXIiLCJuYW1lIiwiY29udGVudCIsInByb3BlcnR5IiwiY29uY2F0IiwibGluayIsInJlbCIsInR5cGUiLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7OytCQXNHQTs7O2VBQUE7Ozs0REF0R2tCO2tFQUNDOzRCQUNZO3NCQUNMO2lFQUVDO2lFQUNBO3FFQUNBOzs7Ozs7QUFFM0IsSUFBTUEsZUFBZTtJQUNuQjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFRCxJQUFNQyxPQUF3QjtRQUM1QkMsb0JBQUFBLGlDQUNBLGVBQWU7SUFDZkMsTUFBQUEsZ0NBQU8sRUFBRSxnQkFDVEMsY0FBQUEsK0JBQ0FDLFVBQUFBLHdDQUFXO1FBT1NDO0lBTHBCLElBQU0sQUFBRUMsT0FBU0MsSUFBQUEsNEJBQWMsSUFBdkJEO0lBQ1IsSUFBTUUsa0JBQWtCRixLQUFLRyxRQUFRO0lBQ3JDLElBQU1DLG1CQUFtQlgsYUFBYVksUUFBUSxDQUFDSCxtQkFBbUIsUUFBUTtJQUUxRSxJQUFNSCxTQUFTTyxJQUFBQSxpQkFBUztRQUNKUDtJQUFwQixJQUFNUSxjQUFjUixDQUFBQSxrQ0FBQUEscUJBQUFBLE9BQU9TLEtBQUssQ0FBQ1osSUFBSSxjQUFqQkcseUNBQUFBLG1CQUFtQlEsV0FBVyxjQUE5QlIsNENBQUFBLGlDQUFrQztRQUN0Q0E7SUFBaEIsSUFBTVUsVUFBVVYsQ0FBQUEsNkJBQUFBLE9BQU9TLEtBQUssQ0FBQ1osSUFBSSxDQUFDYSxPQUFPLGNBQXpCVix3Q0FBQUEsNkJBQTZCVyxtQkFBYztRQUMzQ1g7SUFBaEIsSUFBTVksVUFBVVosQ0FBQUEsNkJBQUFBLE9BQU9TLEtBQUssQ0FBQ1osSUFBSSxDQUFDZSxPQUFPLGNBQXpCWix3Q0FBQUEsNkJBQTZCYSxtQkFBYztJQUUzREMsSUFBQUEsdUJBQWMsRUFBQztRQUNiLElBQU1DLGlCQUFpQkMsU0FBU0MsYUFBYSxDQUFrQjtRQUMvRCxJQUFJRixnQkFBZ0I7WUFDbEJBLGVBQWVHLE1BQU07UUFDdkI7SUFDRjtJQUVBLHFCQUNFLDZCQUFDQyxvQkFBTTtRQUNMQyxnQkFBZ0I7WUFDZEMsTUFBTWxCO1lBQ05tQixLQUFLakI7UUFDUDtRQUNBUCxPQUFPLEFBQUMsR0FBV1UsT0FBVFYsT0FBTSxLQUFlLE9BQVpVO1FBQ25CWCxNQUFNO1lBQ0o7Z0JBQ0UwQixNQUFNO2dCQUNOQyxTQUFTNUI7WUFDWDtZQUNBO2dCQUNFMkIsTUFBTTtnQkFDTkMsU0FBU3pCO1lBQ1g7WUFDQTtnQkFDRTBCLFVBQVU7Z0JBQ1ZELFNBQVMsQUFBQyxHQUFXaEIsT0FBVFYsT0FBTSxLQUFlLE9BQVpVO1lBQ3ZCO1lBQ0E7Z0JBQ0VpQixVQUFVO2dCQUNWRCxTQUFTWjtZQUNYO1lBQ0E7Z0JBQ0VhLFVBQVU7Z0JBQ1ZELFNBQVM1QjtZQUNYO1lBQ0E7Z0JBQ0U2QixVQUFVO2dCQUNWRCxTQUFTO1lBQ1g7WUFDQTtnQkFDRUQsTUFBTTtnQkFDTkMsU0FBUztZQUNYO1lBQ0E7Z0JBQ0VELE1BQU07Z0JBQ05DLFNBQVMxQjtZQUNYO1lBQ0E7Z0JBQ0V5QixNQUFNO2dCQUNOQyxTQUFTNUI7WUFDWDtTQUNELENBQUM4QixNQUFNLENBQUM3QjtRQUNUOEIsTUFBTTtZQUNKO2dCQUNFQyxLQUFLO2dCQUNMQyxNQUFNO2dCQUNOQyxNQUFNcEI7WUFDUjtTQUNEOztBQUdQO0lBRUEsV0FBZWYifQ==