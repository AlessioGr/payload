import React from "react";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";
import { useConfig } from "../Config";
import payloadFavicon from "../../../assets/images/favicon.svg";
import payloadOgImage from "../../../assets/images/og-image.png";
import useMountEffect from "../../../hooks/useMountEffect";
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
    var i18n = useTranslation().i18n;
    var currentLanguage = i18n.language;
    var currentDirection = rtlLanguages.includes(currentLanguage) ? "RTL" : "LTR";
    var config = useConfig();
    var _config_admin_meta_titleSuffix;
    var titleSuffix = (_config_admin_meta_titleSuffix = (_config_admin_meta = config.admin.meta) === null || _config_admin_meta === void 0 ? void 0 : _config_admin_meta.titleSuffix) !== null && _config_admin_meta_titleSuffix !== void 0 ? _config_admin_meta_titleSuffix : "- Payload";
    var _config_admin_meta_favicon;
    var favicon = (_config_admin_meta_favicon = config.admin.meta.favicon) !== null && _config_admin_meta_favicon !== void 0 ? _config_admin_meta_favicon : payloadFavicon;
    var _config_admin_meta_ogImage;
    var ogImage = (_config_admin_meta_ogImage = config.admin.meta.ogImage) !== null && _config_admin_meta_ogImage !== void 0 ? _config_admin_meta_ogImage : payloadOgImage;
    useMountEffect(function() {
        var faviconElement = document.querySelector("link[data-placeholder-favicon]");
        if (faviconElement) {
            faviconElement.remove();
        }
    });
    return /*#__PURE__*/ React.createElement(Helmet, {
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
export default Meta;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9NZXRhL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uL0NvbmZpZyc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHBheWxvYWRGYXZpY29uIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmF2aWNvbi5zdmcnO1xuaW1wb3J0IHBheWxvYWRPZ0ltYWdlIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvb2ctaW1hZ2UucG5nJztcbmltcG9ydCB1c2VNb3VudEVmZmVjdCBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VNb3VudEVmZmVjdCc7XG5cbmNvbnN0IHJ0bExhbmd1YWdlcyA9IFtcbiAgJ2FyJyxcbiAgJ2ZhJyxcbiAgJ2hhJyxcbiAgJ2t1JyxcbiAgJ3VyJyxcbiAgJ3BzJyxcbiAgJ2R2JyxcbiAgJ2tzJyxcbiAgJ2todycsXG4gICdoZScsXG4gICd5aScsXG5dO1xuXG5jb25zdCBNZXRhOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBkZXNjcmlwdGlvbixcbiAgLy8gbGFuZyA9ICdlbicsXG4gIG1ldGEgPSBbXSxcbiAgdGl0bGUsXG4gIGtleXdvcmRzID0gJ0NNUywgQWRtaW4sIERhc2hib2FyZCcsXG59KSA9PiB7XG4gIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgY3VycmVudExhbmd1YWdlID0gaTE4bi5sYW5ndWFnZTtcbiAgY29uc3QgY3VycmVudERpcmVjdGlvbiA9IHJ0bExhbmd1YWdlcy5pbmNsdWRlcyhjdXJyZW50TGFuZ3VhZ2UpID8gJ1JUTCcgOiAnTFRSJztcblxuICBjb25zdCBjb25maWcgPSB1c2VDb25maWcoKTtcbiAgY29uc3QgdGl0bGVTdWZmaXggPSBjb25maWcuYWRtaW4ubWV0YT8udGl0bGVTdWZmaXggPz8gJy0gUGF5bG9hZCc7XG4gIGNvbnN0IGZhdmljb24gPSBjb25maWcuYWRtaW4ubWV0YS5mYXZpY29uID8/IHBheWxvYWRGYXZpY29uO1xuICBjb25zdCBvZ0ltYWdlID0gY29uZmlnLmFkbWluLm1ldGEub2dJbWFnZSA/PyBwYXlsb2FkT2dJbWFnZTtcblxuICB1c2VNb3VudEVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmF2aWNvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxMaW5rRWxlbWVudD4oJ2xpbmtbZGF0YS1wbGFjZWhvbGRlci1mYXZpY29uXScpO1xuICAgIGlmIChmYXZpY29uRWxlbWVudCkge1xuICAgICAgZmF2aWNvbkVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxIZWxtZXRcbiAgICAgIGh0bWxBdHRyaWJ1dGVzPXt7XG4gICAgICAgIGxhbmc6IGN1cnJlbnRMYW5ndWFnZSxcbiAgICAgICAgZGlyOiBjdXJyZW50RGlyZWN0aW9uLFxuICAgICAgfX1cbiAgICAgIHRpdGxlPXtgJHt0aXRsZX0gJHt0aXRsZVN1ZmZpeH1gfVxuICAgICAgbWV0YT17W1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdrZXl3b3JkcycsXG4gICAgICAgICAgY29udGVudDoga2V5d29yZHMsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm9wZXJ0eTogJ29nOnRpdGxlJyxcbiAgICAgICAgICBjb250ZW50OiBgJHt0aXRsZX0gJHt0aXRsZVN1ZmZpeH1gLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvcGVydHk6ICdvZzppbWFnZScsXG4gICAgICAgICAgY29udGVudDogb2dJbWFnZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3BlcnR5OiAnb2c6ZGVzY3JpcHRpb24nLFxuICAgICAgICAgIGNvbnRlbnQ6IGRlc2NyaXB0aW9uLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvcGVydHk6ICdvZzp0eXBlJyxcbiAgICAgICAgICBjb250ZW50OiAnd2Vic2l0ZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAndHdpdHRlcjpjYXJkJyxcbiAgICAgICAgICBjb250ZW50OiAnc3VtbWFyeScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAndHdpdHRlcjp0aXRsZScsXG4gICAgICAgICAgY29udGVudDogdGl0bGUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAndHdpdHRlcjpkZXNjcmlwdGlvbicsXG4gICAgICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXG4gICAgICAgIH0sXG4gICAgICBdLmNvbmNhdChtZXRhKX1cbiAgICAgIGxpbms9e1tcbiAgICAgICAge1xuICAgICAgICAgIHJlbDogJ2ljb24nLFxuICAgICAgICAgIHR5cGU6ICdpbWFnZS9zdmcreG1sJyxcbiAgICAgICAgICBocmVmOiBmYXZpY29uLFxuICAgICAgICB9LFxuICAgICAgXX1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWV0YTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlbG1ldCIsInVzZVRyYW5zbGF0aW9uIiwidXNlQ29uZmlnIiwicGF5bG9hZEZhdmljb24iLCJwYXlsb2FkT2dJbWFnZSIsInVzZU1vdW50RWZmZWN0IiwicnRsTGFuZ3VhZ2VzIiwiTWV0YSIsImRlc2NyaXB0aW9uIiwibWV0YSIsInRpdGxlIiwia2V5d29yZHMiLCJjb25maWciLCJpMThuIiwiY3VycmVudExhbmd1YWdlIiwibGFuZ3VhZ2UiLCJjdXJyZW50RGlyZWN0aW9uIiwiaW5jbHVkZXMiLCJ0aXRsZVN1ZmZpeCIsImFkbWluIiwiZmF2aWNvbiIsIm9nSW1hZ2UiLCJmYXZpY29uRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlbW92ZSIsImh0bWxBdHRyaWJ1dGVzIiwibGFuZyIsImRpciIsIm5hbWUiLCJjb250ZW50IiwicHJvcGVydHkiLCJjb25jYXQiLCJsaW5rIiwicmVsIiwidHlwZSIsImhyZWYiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVcsUUFBUTtBQUMxQixPQUFPQyxZQUFZLGVBQWU7QUFDbEMsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxTQUFTQyxTQUFTLFFBQVEsWUFBWTtBQUV0QyxPQUFPQyxvQkFBb0IscUNBQXFDO0FBQ2hFLE9BQU9DLG9CQUFvQixzQ0FBc0M7QUFDakUsT0FBT0Msb0JBQW9CLGdDQUFnQztBQUUzRCxJQUFNQyxlQUFlO0lBQ25CO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRDtBQUVELElBQU1DLE9BQXdCO1FBQzVCQyxvQkFBQUEsaUNBQ0EsZUFBZTtJQUNmQyxNQUFBQSxnQ0FBTyxFQUFFLGdCQUNUQyxjQUFBQSwrQkFDQUMsVUFBQUEsd0NBQVc7UUFPU0M7SUFMcEIsSUFBTSxBQUFFQyxPQUFTWixpQkFBVFk7SUFDUixJQUFNQyxrQkFBa0JELEtBQUtFLFFBQVE7SUFDckMsSUFBTUMsbUJBQW1CVixhQUFhVyxRQUFRLENBQUNILG1CQUFtQixRQUFRO0lBRTFFLElBQU1GLFNBQVNWO1FBQ0tVO0lBQXBCLElBQU1NLGNBQWNOLENBQUFBLGtDQUFBQSxxQkFBQUEsT0FBT08sS0FBSyxDQUFDVixJQUFJLGNBQWpCRyx5Q0FBQUEsbUJBQW1CTSxXQUFXLGNBQTlCTiw0Q0FBQUEsaUNBQWtDO1FBQ3RDQTtJQUFoQixJQUFNUSxVQUFVUixDQUFBQSw2QkFBQUEsT0FBT08sS0FBSyxDQUFDVixJQUFJLENBQUNXLE9BQU8sY0FBekJSLHdDQUFBQSw2QkFBNkJUO1FBQzdCUztJQUFoQixJQUFNUyxVQUFVVCxDQUFBQSw2QkFBQUEsT0FBT08sS0FBSyxDQUFDVixJQUFJLENBQUNZLE9BQU8sY0FBekJULHdDQUFBQSw2QkFBNkJSO0lBRTdDQyxlQUFlO1FBQ2IsSUFBTWlCLGlCQUFpQkMsU0FBU0MsYUFBYSxDQUFrQjtRQUMvRCxJQUFJRixnQkFBZ0I7WUFDbEJBLGVBQWVHLE1BQU07UUFDdkI7SUFDRjtJQUVBLHFCQUNFLG9CQUFDekI7UUFDQzBCLGdCQUFnQjtZQUNkQyxNQUFNYjtZQUNOYyxLQUFLWjtRQUNQO1FBQ0FOLE9BQU8sQUFBQyxHQUFXUSxPQUFUUixPQUFNLEtBQWUsT0FBWlE7UUFDbkJULE1BQU07WUFDSjtnQkFDRW9CLE1BQU07Z0JBQ05DLFNBQVN0QjtZQUNYO1lBQ0E7Z0JBQ0VxQixNQUFNO2dCQUNOQyxTQUFTbkI7WUFDWDtZQUNBO2dCQUNFb0IsVUFBVTtnQkFDVkQsU0FBUyxBQUFDLEdBQVdaLE9BQVRSLE9BQU0sS0FBZSxPQUFaUTtZQUN2QjtZQUNBO2dCQUNFYSxVQUFVO2dCQUNWRCxTQUFTVDtZQUNYO1lBQ0E7Z0JBQ0VVLFVBQVU7Z0JBQ1ZELFNBQVN0QjtZQUNYO1lBQ0E7Z0JBQ0V1QixVQUFVO2dCQUNWRCxTQUFTO1lBQ1g7WUFDQTtnQkFDRUQsTUFBTTtnQkFDTkMsU0FBUztZQUNYO1lBQ0E7Z0JBQ0VELE1BQU07Z0JBQ05DLFNBQVNwQjtZQUNYO1lBQ0E7Z0JBQ0VtQixNQUFNO2dCQUNOQyxTQUFTdEI7WUFDWDtTQUNELENBQUN3QixNQUFNLENBQUN2QjtRQUNUd0IsTUFBTTtZQUNKO2dCQUNFQyxLQUFLO2dCQUNMQyxNQUFNO2dCQUNOQyxNQUFNaEI7WUFDUjtTQUNEOztBQUdQO0FBRUEsZUFBZWIsS0FBSyJ9