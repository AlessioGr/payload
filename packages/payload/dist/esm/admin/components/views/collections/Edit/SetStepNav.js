import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getTranslation } from "../../../../../utilities/getTranslation";
import useTitle from "../../../../hooks/useTitle";
import { useStepNav } from "../../../elements/StepNav";
import { useConfig } from "../../../utilities/Config";
export var SetStepNav = function(param) {
    var collection = param.collection, isEditing = param.isEditing, id = param.id;
    var slug = collection.slug, _collection_labels = collection.labels, pluralLabel = _collection_labels.plural, useAsTitle = collection.admin.useAsTitle;
    var setStepNav = useStepNav().setStepNav;
    var _useTranslation = useTranslation("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useConfig = useConfig(), admin = _useConfig.routes.admin;
    var title = useTitle(collection);
    useEffect(function() {
        var nav = [
            {
                url: "".concat(admin, "/collections/").concat(slug),
                label: getTranslation(pluralLabel, i18n)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0VkaXQvU2V0U3RlcE5hdi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IHVzZVRpdGxlIGZyb20gJy4uLy4uLy4uLy4uL2hvb2tzL3VzZVRpdGxlJztcbmltcG9ydCB7IHVzZVN0ZXBOYXYgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9TdGVwTmF2JztcbmltcG9ydCB7IFN0ZXBOYXZJdGVtIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvU3RlcE5hdi90eXBlcyc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcblxuZXhwb3J0IGNvbnN0IFNldFN0ZXBOYXY6IFJlYWN0LkZDPHtcbiAgY29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1xuICBpc0VkaXRpbmc6IGJvb2xlYW5cbiAgaWQ6IHN0cmluZ1xufT4gPSAoeyBjb2xsZWN0aW9uLCBpc0VkaXRpbmcsIGlkIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIHNsdWcsXG4gICAgbGFiZWxzOiB7XG4gICAgICBwbHVyYWw6IHBsdXJhbExhYmVsLFxuICAgIH0sXG4gICAgYWRtaW46IHtcbiAgICAgIHVzZUFzVGl0bGUsXG4gICAgfSxcbiAgfSA9IGNvbGxlY3Rpb247XG5cbiAgY29uc3QgeyBzZXRTdGVwTmF2IH0gPSB1c2VTdGVwTmF2KCk7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKTtcbiAgY29uc3QgeyByb3V0ZXM6IHsgYWRtaW4gfSB9ID0gdXNlQ29uZmlnKCk7XG5cbiAgY29uc3QgdGl0bGUgPSB1c2VUaXRsZShjb2xsZWN0aW9uKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG5hdjogU3RlcE5hdkl0ZW1bXSA9IFt7XG4gICAgICB1cmw6IGAke2FkbWlufS9jb2xsZWN0aW9ucy8ke3NsdWd9YCxcbiAgICAgIGxhYmVsOiBnZXRUcmFuc2xhdGlvbihwbHVyYWxMYWJlbCwgaTE4biksXG4gICAgfV07XG5cbiAgICBpZiAoaXNFZGl0aW5nKSB7XG4gICAgICBuYXYucHVzaCh7XG4gICAgICAgIGxhYmVsOiAodXNlQXNUaXRsZSAmJiB1c2VBc1RpdGxlICE9PSAnaWQnKSA/IHRpdGxlIHx8IGBbJHt0KCd1bnRpdGxlZCcpfV1gIDogaWQsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmF2LnB1c2goe1xuICAgICAgICBsYWJlbDogdCgnY3JlYXRlTmV3JyksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRTdGVwTmF2KG5hdik7XG4gIH0sIFtzZXRTdGVwTmF2LCBpc0VkaXRpbmcsIHBsdXJhbExhYmVsLCBpZCwgc2x1ZywgdXNlQXNUaXRsZSwgYWRtaW4sIHQsIGkxOG4sIHRpdGxlXSk7XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVRyYW5zbGF0aW9uIiwiZ2V0VHJhbnNsYXRpb24iLCJ1c2VUaXRsZSIsInVzZVN0ZXBOYXYiLCJ1c2VDb25maWciLCJTZXRTdGVwTmF2IiwiY29sbGVjdGlvbiIsImlzRWRpdGluZyIsImlkIiwic2x1ZyIsImxhYmVscyIsInBsdXJhbCIsInBsdXJhbExhYmVsIiwiYWRtaW4iLCJ1c2VBc1RpdGxlIiwic2V0U3RlcE5hdiIsInQiLCJpMThuIiwicm91dGVzIiwidGl0bGUiLCJuYXYiLCJ1cmwiLCJsYWJlbCIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFNBQVMsUUFBUSxRQUFRO0FBQ2xDLFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFFL0MsU0FBU0MsY0FBYyxRQUFRLDBDQUEwQztBQUN6RSxPQUFPQyxjQUFjLDZCQUE2QjtBQUNsRCxTQUFTQyxVQUFVLFFBQVEsNEJBQTRCO0FBRXZELFNBQVNDLFNBQVMsUUFBUSw0QkFBNEI7QUFFdEQsT0FBTyxJQUFNQyxhQUlSO1FBQUdDLG1CQUFBQSxZQUFZQyxrQkFBQUEsV0FBV0MsV0FBQUE7SUFDN0IsSUFDRUMsT0FPRUgsV0FQRkcsMkJBT0VILFdBTkZJLFFBQ0VDLEFBQVFDLGlDQUFSRCxRQUVGRSxBQUNFQyxhQUVBUixXQUhGTyxNQUNFQztJQUlKLElBQU0sQUFBRUMsYUFBZVosYUFBZlk7SUFDUixJQUFvQmYsa0JBQUFBLGVBQWUsWUFBM0JnQixJQUFZaEIsZ0JBQVpnQixHQUFHQyxPQUFTakIsZ0JBQVRpQjtJQUNYLElBQThCYixhQUFBQSxhQUF0QmMsQUFBVUwsUUFBWVQsV0FBdEJjLE9BQVVMO0lBRWxCLElBQU1NLFFBQVFqQixTQUFTSTtJQUV2QlAsVUFBVTtRQUNSLElBQU1xQixNQUFxQjtZQUFDO2dCQUMxQkMsS0FBSyxBQUFDLEdBQXVCWixPQUFyQkksT0FBTSxpQkFBb0IsT0FBTEo7Z0JBQzdCYSxPQUFPckIsZUFBZVcsYUFBYUs7WUFDckM7U0FBRTtRQUVGLElBQUlWLFdBQVc7WUFDYmEsSUFBSUcsSUFBSSxDQUFDO2dCQUNQRCxPQUFPLEFBQUNSLGNBQWNBLGVBQWUsT0FBUUssU0FBUyxBQUFDLElBQWlCLE9BQWRILEVBQUUsYUFBWSxPQUFLUjtZQUMvRTtRQUNGLE9BQU87WUFDTFksSUFBSUcsSUFBSSxDQUFDO2dCQUNQRCxPQUFPTixFQUFFO1lBQ1g7UUFDRjtRQUVBRCxXQUFXSztJQUNiLEdBQUc7UUFBQ0w7UUFBWVI7UUFBV0s7UUFBYUo7UUFBSUM7UUFBTUs7UUFBWUQ7UUFBT0c7UUFBR0M7UUFBTUU7S0FBTTtJQUVwRixPQUFPO0FBQ1QsRUFBRSJ9