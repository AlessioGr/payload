"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SetStepNav", {
    enumerable: true,
    get: function() {
        return SetStepNav;
    }
});
var _react = require("react");
var _reacti18next = require("react-i18next");
var _getTranslation = require("../../../../../utilities/getTranslation");
var _useTitle = /*#__PURE__*/ _interop_require_default(require("../../../../hooks/useTitle"));
var _StepNav = require("../../../elements/StepNav");
var _Config = require("../../../utilities/Config");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var SetStepNav = function(param) {
    var collection = param.collection, isEditing = param.isEditing, id = param.id;
    var slug = collection.slug, _collection_labels = collection.labels, pluralLabel = _collection_labels.plural, useAsTitle = collection.admin.useAsTitle;
    var setStepNav = (0, _StepNav.useStepNav)().setStepNav;
    var _useTranslation = (0, _reacti18next.useTranslation)("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useConfig = (0, _Config.useConfig)(), admin = _useConfig.routes.admin;
    var title = (0, _useTitle.default)(collection);
    (0, _react.useEffect)(function() {
        var nav = [
            {
                url: "".concat(admin, "/collections/").concat(slug),
                label: (0, _getTranslation.getTranslation)(pluralLabel, i18n)
            }
        ];
        if (isEditing) {
            nav.push({
                label: useAsTitle && useAsTitle !== "id" ? title || "[".concat(t("untitled"), "]") : id
            });
        } else {
            nav.push({
                label: t("createNew")
            });
        }
        setStepNav(nav);
    }, [
        setStepNav,
        isEditing,
        pluralLabel,
        id,
        slug,
        useAsTitle,
        admin,
        t,
        i18n,
        title
    ]);
    return null;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0VkaXQvU2V0U3RlcE5hdi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IHVzZVRpdGxlIGZyb20gJy4uLy4uLy4uLy4uL2hvb2tzL3VzZVRpdGxlJztcbmltcG9ydCB7IHVzZVN0ZXBOYXYgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9TdGVwTmF2JztcbmltcG9ydCB7IFN0ZXBOYXZJdGVtIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvU3RlcE5hdi90eXBlcyc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcblxuZXhwb3J0IGNvbnN0IFNldFN0ZXBOYXY6IFJlYWN0LkZDPHtcbiAgY29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1xuICBpc0VkaXRpbmc6IGJvb2xlYW5cbiAgaWQ6IHN0cmluZ1xufT4gPSAoeyBjb2xsZWN0aW9uLCBpc0VkaXRpbmcsIGlkIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIHNsdWcsXG4gICAgbGFiZWxzOiB7XG4gICAgICBwbHVyYWw6IHBsdXJhbExhYmVsLFxuICAgIH0sXG4gICAgYWRtaW46IHtcbiAgICAgIHVzZUFzVGl0bGUsXG4gICAgfSxcbiAgfSA9IGNvbGxlY3Rpb247XG5cbiAgY29uc3QgeyBzZXRTdGVwTmF2IH0gPSB1c2VTdGVwTmF2KCk7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKTtcbiAgY29uc3QgeyByb3V0ZXM6IHsgYWRtaW4gfSB9ID0gdXNlQ29uZmlnKCk7XG5cbiAgY29uc3QgdGl0bGUgPSB1c2VUaXRsZShjb2xsZWN0aW9uKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG5hdjogU3RlcE5hdkl0ZW1bXSA9IFt7XG4gICAgICB1cmw6IGAke2FkbWlufS9jb2xsZWN0aW9ucy8ke3NsdWd9YCxcbiAgICAgIGxhYmVsOiBnZXRUcmFuc2xhdGlvbihwbHVyYWxMYWJlbCwgaTE4biksXG4gICAgfV07XG5cbiAgICBpZiAoaXNFZGl0aW5nKSB7XG4gICAgICBuYXYucHVzaCh7XG4gICAgICAgIGxhYmVsOiAodXNlQXNUaXRsZSAmJiB1c2VBc1RpdGxlICE9PSAnaWQnKSA/IHRpdGxlIHx8IGBbJHt0KCd1bnRpdGxlZCcpfV1gIDogaWQsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmF2LnB1c2goe1xuICAgICAgICBsYWJlbDogdCgnY3JlYXRlTmV3JyksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRTdGVwTmF2KG5hdik7XG4gIH0sIFtzZXRTdGVwTmF2LCBpc0VkaXRpbmcsIHBsdXJhbExhYmVsLCBpZCwgc2x1ZywgdXNlQXNUaXRsZSwgYWRtaW4sIHQsIGkxOG4sIHRpdGxlXSk7XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuIl0sIm5hbWVzIjpbIlNldFN0ZXBOYXYiLCJjb2xsZWN0aW9uIiwiaXNFZGl0aW5nIiwiaWQiLCJzbHVnIiwibGFiZWxzIiwicGx1cmFsIiwicGx1cmFsTGFiZWwiLCJhZG1pbiIsInVzZUFzVGl0bGUiLCJzZXRTdGVwTmF2IiwidXNlU3RlcE5hdiIsInVzZVRyYW5zbGF0aW9uIiwidCIsImkxOG4iLCJ1c2VDb25maWciLCJyb3V0ZXMiLCJ0aXRsZSIsInVzZVRpdGxlIiwidXNlRWZmZWN0IiwibmF2IiwidXJsIiwibGFiZWwiLCJnZXRUcmFuc2xhdGlvbiIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7K0JBU2FBOzs7ZUFBQUE7OztxQkFUYTs0QkFDSzs4QkFFQTsrREFDVjt1QkFDTTtzQkFFRDs7Ozs7O0FBRW5CLElBQU1BLGFBSVI7UUFBR0MsbUJBQUFBLFlBQVlDLGtCQUFBQSxXQUFXQyxXQUFBQTtJQUM3QixJQUNFQyxPQU9FSCxXQVBGRywyQkFPRUgsV0FORkksUUFDRUMsQUFBUUMsaUNBQVJELFFBRUZFLEFBQ0VDLGFBRUFSLFdBSEZPLE1BQ0VDO0lBSUosSUFBTSxBQUFFQyxhQUFlQyxJQUFBQSxtQkFBVSxJQUF6QkQ7SUFDUixJQUFvQkUsa0JBQUFBLElBQUFBLDRCQUFjLEVBQUMsWUFBM0JDLElBQVlELGdCQUFaQyxHQUFHQyxPQUFTRixnQkFBVEU7SUFDWCxJQUE4QkMsYUFBQUEsSUFBQUEsaUJBQVMsS0FBL0JDLEFBQVVSLFFBQVlPLFdBQXRCQyxPQUFVUjtJQUVsQixJQUFNUyxRQUFRQyxJQUFBQSxpQkFBUSxFQUFDakI7SUFFdkJrQixJQUFBQSxnQkFBUyxFQUFDO1FBQ1IsSUFBTUMsTUFBcUI7WUFBQztnQkFDMUJDLEtBQUssQUFBQyxHQUF1QmpCLE9BQXJCSSxPQUFNLGlCQUFvQixPQUFMSjtnQkFDN0JrQixPQUFPQyxJQUFBQSw4QkFBYyxFQUFDaEIsYUFBYU87WUFDckM7U0FBRTtRQUVGLElBQUlaLFdBQVc7WUFDYmtCLElBQUlJLElBQUksQ0FBQztnQkFDUEYsT0FBTyxBQUFDYixjQUFjQSxlQUFlLE9BQVFRLFNBQVMsQUFBQyxJQUFpQixPQUFkSixFQUFFLGFBQVksT0FBS1Y7WUFDL0U7UUFDRixPQUFPO1lBQ0xpQixJQUFJSSxJQUFJLENBQUM7Z0JBQ1BGLE9BQU9ULEVBQUU7WUFDWDtRQUNGO1FBRUFILFdBQVdVO0lBQ2IsR0FBRztRQUFDVjtRQUFZUjtRQUFXSztRQUFhSjtRQUFJQztRQUFNSztRQUFZRDtRQUFPSztRQUFHQztRQUFNRztLQUFNO0lBRXBGLE9BQU87QUFDVCJ9