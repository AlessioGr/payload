import { Transforms, Range, Element } from "slate";
import { getBaseFields } from "./LinkDrawer/baseFields";
export var unwrapLink = function(editor) {
    Transforms.unwrapNodes(editor, {
        match: function(n) {
            return Element.isElement(n) && n.type === "link";
        }
    });
};
export var wrapLink = function(editor) {
    var selection = editor.selection;
    var isCollapsed = selection && Range.isCollapsed(selection);
    var link = {
        type: "link",
        url: undefined,
        newTab: false,
        children: isCollapsed ? [
            {
                text: ""
            }
        ] : []
    };
    if (isCollapsed) {
        Transforms.insertNodes(editor, link);
    } else {
        Transforms.wrapNodes(editor, link, {
            split: true
        });
        Transforms.collapse(editor, {
            edge: "end"
        });
    }
};
export var withLinks = function(incomingEditor) {
    var editor = incomingEditor;
    var isInline = editor.isInline;
    editor.isInline = function(element) {
        if (element.type === "link") {
            return true;
        }
        return isInline(element);
    };
    return editor;
};
/**
 * This function is run to enrich the basefields which every link has with potential, custom user-added fields.
 */ export function transformExtraFields(customFieldSchema, config, i18n) {
    var baseFields = getBaseFields(config);
    var fields = typeof customFieldSchema === "function" ? customFieldSchema({
        defaultFields: baseFields,
        config: config,
        i18n: i18n
    }) : baseFields;
    // Wrap fields which are not part of the base schema in a group named 'fields' - otherwise they will be rendered but not saved
    var extraFields = [];
    fields.forEach(function(field) {
        if ("name" in field) {
            if (!baseFields.find(function(baseField) {
                return !("name" in baseField) || baseField.name === field.name;
            })) {
                if (field.name !== "fields" && field.type !== "group") {
                    extraFields.push(field);
                    // Remove from fields from now, as they need to be part of the fields group below
                    fields.splice(fields.indexOf(field), 1);
                }
            }
        }
    });
    if (Array.isArray(customFieldSchema) || fields.length > 0) {
        fields.push({
            name: "fields",
            type: "group",
            admin: {
                style: {
                    margin: 0,
                    padding: 0,
                    borderTop: 0,
                    borderBottom: 0
                }
            },
            fields: Array.isArray(customFieldSchema) ? customFieldSchema.concat(extraFields) : extraFields
        });
    }
    return fields;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL2xpbmsvdXRpbGl0aWVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFZGl0b3IsIFRyYW5zZm9ybXMsIFJhbmdlLCBFbGVtZW50IH0gZnJvbSAnc2xhdGUnO1xuaW1wb3J0IHR5cGUgeyBpMThuIH0gZnJvbSAnaTE4bmV4dCc7XG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZENvbmZpZyB9IGZyb20gJ3BheWxvYWQvY29uZmlnJztcbmltcG9ydCB7IGdldEJhc2VGaWVsZHMgfSBmcm9tICcuL0xpbmtEcmF3ZXIvYmFzZUZpZWxkcyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgdW53cmFwTGluayA9IChlZGl0b3I6IEVkaXRvcik6IHZvaWQgPT4ge1xuICBUcmFuc2Zvcm1zLnVud3JhcE5vZGVzKGVkaXRvciwgeyBtYXRjaDogKG4pID0+IEVsZW1lbnQuaXNFbGVtZW50KG4pICYmIG4udHlwZSA9PT0gJ2xpbmsnIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHdyYXBMaW5rID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGNvbnN0IHsgc2VsZWN0aW9uIH0gPSBlZGl0b3I7XG4gIGNvbnN0IGlzQ29sbGFwc2VkID0gc2VsZWN0aW9uICYmIFJhbmdlLmlzQ29sbGFwc2VkKHNlbGVjdGlvbik7XG5cbiAgY29uc3QgbGluayA9IHtcbiAgICB0eXBlOiAnbGluaycsXG4gICAgdXJsOiB1bmRlZmluZWQsXG4gICAgbmV3VGFiOiBmYWxzZSxcbiAgICBjaGlsZHJlbjogaXNDb2xsYXBzZWQgPyBbeyB0ZXh0OiAnJyB9XSA6IFtdLFxuICB9O1xuXG4gIGlmIChpc0NvbGxhcHNlZCkge1xuICAgIFRyYW5zZm9ybXMuaW5zZXJ0Tm9kZXMoZWRpdG9yLCBsaW5rKTtcbiAgfSBlbHNlIHtcbiAgICBUcmFuc2Zvcm1zLndyYXBOb2RlcyhlZGl0b3IsIGxpbmssIHsgc3BsaXQ6IHRydWUgfSk7XG4gICAgVHJhbnNmb3Jtcy5jb2xsYXBzZShlZGl0b3IsIHsgZWRnZTogJ2VuZCcgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoTGlua3MgPSAoaW5jb21pbmdFZGl0b3I6IEVkaXRvcik6IEVkaXRvciA9PiB7XG4gIGNvbnN0IGVkaXRvciA9IGluY29taW5nRWRpdG9yO1xuICBjb25zdCB7IGlzSW5saW5lIH0gPSBlZGl0b3I7XG5cbiAgZWRpdG9yLmlzSW5saW5lID0gKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudC50eXBlID09PSAnbGluaycpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBpc0lubGluZShlbGVtZW50KTtcbiAgfTtcblxuICByZXR1cm4gZWRpdG9yO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHJ1biB0byBlbnJpY2ggdGhlIGJhc2VmaWVsZHMgd2hpY2ggZXZlcnkgbGluayBoYXMgd2l0aCBwb3RlbnRpYWwsIGN1c3RvbSB1c2VyLWFkZGVkIGZpZWxkcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybUV4dHJhRmllbGRzKGN1c3RvbUZpZWxkU2NoZW1hOiBGaWVsZFtdIHwgKChhcmdzOiB7XG4gIGRlZmF1bHRGaWVsZHM6IEZpZWxkW107XG4gIGNvbmZpZzogU2FuaXRpemVkQ29uZmlnO1xuICBpMThuOiBpMThuO1xufSkgPT4gRmllbGRbXSksIGNvbmZpZzogU2FuaXRpemVkQ29uZmlnLCBpMThuOiBpMThuKTogRmllbGRbXSB7XG4gIGNvbnN0IGJhc2VGaWVsZHM6IEZpZWxkW10gPSBnZXRCYXNlRmllbGRzKGNvbmZpZyk7XG5cbiAgY29uc3QgZmllbGRzID0gdHlwZW9mIGN1c3RvbUZpZWxkU2NoZW1hID09PSAnZnVuY3Rpb24nID8gY3VzdG9tRmllbGRTY2hlbWEoeyBkZWZhdWx0RmllbGRzOiBiYXNlRmllbGRzLCBjb25maWcsIGkxOG4gfSkgOiBiYXNlRmllbGRzO1xuXG4gIC8vIFdyYXAgZmllbGRzIHdoaWNoIGFyZSBub3QgcGFydCBvZiB0aGUgYmFzZSBzY2hlbWEgaW4gYSBncm91cCBuYW1lZCAnZmllbGRzJyAtIG90aGVyd2lzZSB0aGV5IHdpbGwgYmUgcmVuZGVyZWQgYnV0IG5vdCBzYXZlZFxuICBjb25zdCBleHRyYUZpZWxkcyA9IFtdO1xuICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpZiAoJ25hbWUnIGluIGZpZWxkKSB7XG4gICAgICBpZiAoIWJhc2VGaWVsZHMuZmluZCgoYmFzZUZpZWxkKSA9PiAhKCduYW1lJyBpbiBiYXNlRmllbGQpIHx8IGJhc2VGaWVsZC5uYW1lID09PSBmaWVsZC5uYW1lKSkge1xuICAgICAgICBpZiAoZmllbGQubmFtZSAhPT0gJ2ZpZWxkcycgJiYgZmllbGQudHlwZSAhPT0gJ2dyb3VwJykge1xuICAgICAgICAgIGV4dHJhRmllbGRzLnB1c2goZmllbGQpO1xuICAgICAgICAgIC8vIFJlbW92ZSBmcm9tIGZpZWxkcyBmcm9tIG5vdywgYXMgdGhleSBuZWVkIHRvIGJlIHBhcnQgb2YgdGhlIGZpZWxkcyBncm91cCBiZWxvd1xuICAgICAgICAgIGZpZWxkcy5zcGxpY2UoZmllbGRzLmluZGV4T2YoZmllbGQpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cblxuICBpZiAoQXJyYXkuaXNBcnJheShjdXN0b21GaWVsZFNjaGVtYSkgfHwgZmllbGRzLmxlbmd0aCA+IDApIHtcbiAgICBmaWVsZHMucHVzaCh7XG4gICAgICBuYW1lOiAnZmllbGRzJyxcbiAgICAgIHR5cGU6ICdncm91cCcsXG4gICAgICBhZG1pbjoge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgIGJvcmRlclRvcDogMCxcbiAgICAgICAgICBib3JkZXJCb3R0b206IDAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZmllbGRzOiBBcnJheS5pc0FycmF5KGN1c3RvbUZpZWxkU2NoZW1hKSA/IGN1c3RvbUZpZWxkU2NoZW1hLmNvbmNhdChleHRyYUZpZWxkcykgOiBleHRyYUZpZWxkcyxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZmllbGRzO1xufVxuIl0sIm5hbWVzIjpbIlRyYW5zZm9ybXMiLCJSYW5nZSIsIkVsZW1lbnQiLCJnZXRCYXNlRmllbGRzIiwidW53cmFwTGluayIsImVkaXRvciIsInVud3JhcE5vZGVzIiwibWF0Y2giLCJuIiwiaXNFbGVtZW50IiwidHlwZSIsIndyYXBMaW5rIiwic2VsZWN0aW9uIiwiaXNDb2xsYXBzZWQiLCJsaW5rIiwidXJsIiwidW5kZWZpbmVkIiwibmV3VGFiIiwiY2hpbGRyZW4iLCJ0ZXh0IiwiaW5zZXJ0Tm9kZXMiLCJ3cmFwTm9kZXMiLCJzcGxpdCIsImNvbGxhcHNlIiwiZWRnZSIsIndpdGhMaW5rcyIsImluY29taW5nRWRpdG9yIiwiaXNJbmxpbmUiLCJlbGVtZW50IiwidHJhbnNmb3JtRXh0cmFGaWVsZHMiLCJjdXN0b21GaWVsZFNjaGVtYSIsImNvbmZpZyIsImkxOG4iLCJiYXNlRmllbGRzIiwiZmllbGRzIiwiZGVmYXVsdEZpZWxkcyIsImV4dHJhRmllbGRzIiwiZm9yRWFjaCIsImZpZWxkIiwiZmluZCIsImJhc2VGaWVsZCIsIm5hbWUiLCJwdXNoIiwic3BsaWNlIiwiaW5kZXhPZiIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImFkbWluIiwic3R5bGUiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyVG9wIiwiYm9yZGVyQm90dG9tIiwiY29uY2F0Il0sIm1hcHBpbmdzIjoiQUFBQSxTQUFpQkEsVUFBVSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sUUFBUSxRQUFRO0FBRzNELFNBQVNDLGFBQWEs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