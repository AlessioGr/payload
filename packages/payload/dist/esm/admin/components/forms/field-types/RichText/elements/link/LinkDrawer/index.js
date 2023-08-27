import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Drawer } from "../../../../../../elements/Drawer";
import Form from "../../../../../Form";
import FormSubmit from "../../../../../Submit";
import fieldTypes from "../../../..";
import RenderFields from "../../../../../RenderFields";
import useHotkey from "../../../../../../../hooks/useHotkey";
import { useEditDepth } from "../../../../../../utilities/EditDepth";
import "./index.scss";
var baseClass = "rich-text-link-edit-modal";
export var LinkDrawer = function(param) {
    var handleModalSubmit = param.handleModalSubmit, initialState = param.initialState, fieldSchema = param.fieldSchema, drawerSlug = param.drawerSlug;
    var t = useTranslation("fields").t;
    return /*#__PURE__*/ React.createElement(Drawer, {
        slug: drawerSlug,
        className: baseClass,
        title: t("editLink")
    }, /*#__PURE__*/ React.createElement(Form, {
        onSubmit: handleModalSubmit,
        initialState: initialState
    }, /*#__PURE__*/ React.createElement(RenderFields, {
        fieldTypes: fieldTypes,
        readOnly: false,
        fieldSchema: fieldSchema,
        forceRender: true
    }), /*#__PURE__*/ React.createElement(LinkSubmit, null)));
};
var LinkSubmit = function() {
    var t = useTranslation("fields").t;
    var ref = useRef(null);
    var editDepth = useEditDepth();
    useHotkey({
        keyCodes: [
            "s"
        ],
        cmdCtrlKey: true,
        editDepth: editDepth
    }, function(e) {
        var _ref;
        e.preventDefault();
        e.stopPropagation();
        if ((_ref = ref) === null || _ref === void 0 ? void 0 : _ref.current) {
            ref.current.click();
        }
    });
    return /*#__PURE__*/ React.createElement(FormSubmit, {
        ref: ref
    }, t("general:submit"));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL2xpbmsvTGlua0RyYXdlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBEcmF3ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9lbGVtZW50cy9EcmF3ZXInO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vRm9ybSc7XG5pbXBvcnQgRm9ybVN1Ym1pdCBmcm9tICcuLi8uLi8uLi8uLi8uLi9TdWJtaXQnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBmaWVsZFR5cGVzIGZyb20gJy4uLy4uLy4uLy4uJztcbmltcG9ydCBSZW5kZXJGaWVsZHMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vUmVuZGVyRmllbGRzJztcbmltcG9ydCB1c2VIb3RrZXkgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vaG9va3MvdXNlSG90a2V5JztcbmltcG9ydCB7IHVzZUVkaXREZXB0aCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9FZGl0RGVwdGgnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdyaWNoLXRleHQtbGluay1lZGl0LW1vZGFsJztcblxuZXhwb3J0IGNvbnN0IExpbmtEcmF3ZXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIGhhbmRsZU1vZGFsU3VibWl0LFxuICBpbml0aWFsU3RhdGUsXG4gIGZpZWxkU2NoZW1hLFxuICBkcmF3ZXJTbHVnLFxufSkgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdmaWVsZHMnKTtcblxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJcbiAgICAgIHNsdWc9e2RyYXdlclNsdWd9XG4gICAgICBjbGFzc05hbWU9e2Jhc2VDbGFzc31cbiAgICAgIHRpdGxlPXt0KCdlZGl0TGluaycpfVxuICAgID5cbiAgICAgIDxGb3JtXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVNb2RhbFN1Ym1pdH1cbiAgICAgICAgaW5pdGlhbFN0YXRlPXtpbml0aWFsU3RhdGV9XG4gICAgICA+XG4gICAgICAgIDxSZW5kZXJGaWVsZHNcbiAgICAgICAgICBmaWVsZFR5cGVzPXtmaWVsZFR5cGVzfVxuICAgICAgICAgIHJlYWRPbmx5PXtmYWxzZX1cbiAgICAgICAgICBmaWVsZFNjaGVtYT17ZmllbGRTY2hlbWF9XG4gICAgICAgICAgZm9yY2VSZW5kZXJcbiAgICAgICAgLz5cbiAgICAgICAgPExpbmtTdWJtaXQgLz5cbiAgICAgIDwvRm9ybT5cbiAgICA8L0RyYXdlcj5cbiAgKTtcbn07XG5cblxuY29uc3QgTGlua1N1Ym1pdDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2ZpZWxkcycpO1xuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBlZGl0RGVwdGggPSB1c2VFZGl0RGVwdGgoKTtcblxuICB1c2VIb3RrZXkoeyBrZXlDb2RlczogWydzJ10sIGNtZEN0cmxLZXk6IHRydWUsIGVkaXREZXB0aCB9LCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmIChyZWY/LmN1cnJlbnQpIHtcbiAgICAgIHJlZi5jdXJyZW50LmNsaWNrKCk7XG4gICAgfVxuICB9KTtcblxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1TdWJtaXRcbiAgICAgIHJlZj17cmVmfVxuICAgID5cbiAgICAgIHt0KCdnZW5lcmFsOnN1Ym1pdCcpfVxuICAgIDwvRm9ybVN1Ym1pdD5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VUcmFuc2xhdGlvbiIsIkRyYXdlciIsIkZvcm0iLCJGb3JtU3VibWl0IiwiZmllbGRUeXBlcyIsIlJlbmRlckZpZWxkcyIsInVzZUhvdGtleSIsInVzZUVkaXREZXB0aCIsImJhc2VDbGFzcyIsIkxpbmtEcmF3ZXIiLCJoYW5kbGVNb2RhbFN1Ym1pdCIsImluaXRpYWxTdGF0ZSIsImZpZWxkU2NoZW1hIiwiZHJhd2VyU2x1ZyIsInQiLCJzbHVnIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJvblN1Ym1pdCIsInJlYWRPbmx5IiwiZm9yY2VSZW5kZXIiLCJMaW5rU3VibWl0IiwicmVmIiwiZWRpdERlcHRoIiwia2V5Q29kZXMiLCJjbWRDdHJsS2V5IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsImNsaWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxTQUFTQyxNQUFNLFFBQVEsUUFBUTtBQUN0QyxTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBQy9DLFNBQVNDLE1BQU0sUUFBUSxvQ0FBb0M7QUFDM0QsT0FBT0MsVUFBVSxzQkFBc0I7QUFDdkMsT0FBT0MsZ0JBQWdCLHdCQUF3QjtBQUUvQyxPQUFPQyxnQkFBZ0IsY0FBYztBQUNyQyxPQUFPQyxrQkFBa0IsOEJBQThCO0FBQ3ZELE9BQU9DLGVBQWUsdUNBQXVDO0FBQzdELFNBQVNDLFlBQVksUUFBUSx3Q0FBd0M7QUFFckUsT0FBTyxlQUFlO0FBRXRCLElBQU1DLFlBQVk7QUFFbEIsT0FBTyxJQUFNQyxhQUE4QjtRQUN6Q0MsMEJBQUFBLG1CQUNBQyxxQkFBQUEsY0FDQUMsb0JBQUFBLGFBQ0FDLG1CQUFBQTtJQUVBLElBQU0sQUFBRUMsSUFBTWQsZUFBZSxVQUFyQmM7SUFFUixxQkFDRSxvQkFBQ2I7UUFDQ2MsTUFBTUY7UUFDTkcsV0FBV1I7UUFDWFMsT0FBT0gsRUFBRTtxQkFFVCxvQkFBQ1o7UUFDQ2dCLFVBQVVSO1FBQ1ZDLGNBQWNBO3FCQUVkLG9CQUFDTjtRQUNDRCxZQUFZQTtRQUNaZSxVQUFVO1FBQ1ZQLGFBQWFBO1FBQ2JRLGFBQUFBO3NCQUVGLG9CQUFDQztBQUlULEVBQUU7QUFHRixJQUFNQSxhQUF1QjtJQUMzQixJQUFNLEFBQUVQLElBQU1kLGVBQWUsVUFBckJjO0lBQ1IsSUFBTVEsTUFBTXZCLE9BQTBCO0lBQ3RDLElBQU13QixZQUFZaEI7SUFFbEJELFVBQVU7UUFBRWtCLFVBQVU7WUFBQztTQUFJO1FBQUVDLFlBQVk7UUFBTUYsV0FBQUE7SUFBVSxHQUFHLFNBQUNHO1lBR3ZESjtRQUZKSSxFQUFFQyxjQUFjO1FBQ2hCRCxFQUFFRSxlQUFlO1FBQ2pCLEtBQUlOLE9BQUFBLGlCQUFBQSwyQkFBQUEsS0FBS08sT0FBTyxFQUFFO1lBQ2hCUCxJQUFJTyxPQUFPLENBQUNDLEtBQUs7UUFDbkI7SUFDRjtJQUdBLHFCQUNFLG9CQUFDM0I7UUFDQ21CLEtBQUtBO09BRUpSLEVBQUU7QUFHVCJ9