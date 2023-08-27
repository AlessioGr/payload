"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    unwrapLink: function() {
        return unwrapLink;
    },
    wrapLink: function() {
        return wrapLink;
    },
    withLinks: function() {
        return withLinks;
    },
    transformExtraFields: function() {
        return transformExtraFields;
    }
});
var _slate = require("slate");
var _baseFields = require("./LinkDrawer/baseFields");
var unwrapLink = function(editor) {
    _slate.Transforms.unwrapNodes(editor, {
        match: function(n) {
            return _slate.Element.isElement(n) && n.type === "link";
        }
    });
};
var wrapLink = function(editor) {
    var selection = editor.selection;
    var isCollapsed = selection && _slate.Range.isCollapsed(selection);
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
        _slate.Transforms.insertNodes(editor, link);
    } else {
        _slate.Transforms.wrapNodes(editor, link, {
            split: true
        });
        _slate.Transforms.collapse(editor, {
            edge: "end"
        });
    }
};
var withLinks = function(incomingEditor) {
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
function transformExtraFields(customFieldSchema, config, i18n) {
    var baseFields = (0, _baseFields.getBaseFields)(config);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL2xpbmsvdXRpbGl0aWVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFZGl0b3IsIFRyYW5zZm9ybXMsIFJhbmdlLCBFbGVtZW50IH0gZnJvbSAnc2xhdGUnO1xuaW1wb3J0IHR5cGUgeyBpMThuIH0gZnJvbSAnaTE4bmV4dCc7XG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZENvbmZpZyB9IGZyb20gJ3BheWxvYWQvY29uZmlnJztcbmltcG9ydCB7IGdldEJhc2VGaWVsZHMgfSBmcm9tICcuL0xpbmtEcmF3ZXIvYmFzZUZpZWxkcyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgdW53cmFwTGluayA9IChlZGl0b3I6IEVkaXRvcik6IHZvaWQgPT4ge1xuICBUcmFuc2Zvcm1zLnVud3JhcE5vZGVzKGVkaXRvciwgeyBtYXRjaDogKG4pID0+IEVsZW1lbnQuaXNFbGVtZW50KG4pICYmIG4udHlwZSA9PT0gJ2xpbmsnIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHdyYXBMaW5rID0gKGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gIGNvbnN0IHsgc2VsZWN0aW9uIH0gPSBlZGl0b3I7XG4gIGNvbnN0IGlzQ29sbGFwc2VkID0gc2VsZWN0aW9uICYmIFJhbmdlLmlzQ29sbGFwc2VkKHNlbGVjdGlvbik7XG5cbiAgY29uc3QgbGluayA9IHtcbiAgICB0eXBlOiAnbGluaycsXG4gICAgdXJsOiB1bmRlZmluZWQsXG4gICAgbmV3VGFiOiBmYWxzZSxcbiAgICBjaGlsZHJlbjogaXNDb2xsYXBzZWQgPyBbeyB0ZXh0OiAnJyB9XSA6IFtdLFxuICB9O1xuXG4gIGlmIChpc0NvbGxhcHNlZCkge1xuICAgIFRyYW5zZm9ybXMuaW5zZXJ0Tm9kZXMoZWRpdG9yLCBsaW5rKTtcbiAgfSBlbHNlIHtcbiAgICBUcmFuc2Zvcm1zLndyYXBOb2RlcyhlZGl0b3IsIGxpbmssIHsgc3BsaXQ6IHRydWUgfSk7XG4gICAgVHJhbnNmb3Jtcy5jb2xsYXBzZShlZGl0b3IsIHsgZWRnZTogJ2VuZCcgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoTGlua3MgPSAoaW5jb21pbmdFZGl0b3I6IEVkaXRvcik6IEVkaXRvciA9PiB7XG4gIGNvbnN0IGVkaXRvciA9IGluY29taW5nRWRpdG9yO1xuICBjb25zdCB7IGlzSW5saW5lIH0gPSBlZGl0b3I7XG5cbiAgZWRpdG9yLmlzSW5saW5lID0gKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudC50eXBlID09PSAnbGluaycpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBpc0lubGluZShlbGVtZW50KTtcbiAgfTtcblxuICByZXR1cm4gZWRpdG9yO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHJ1biB0byBlbnJpY2ggdGhlIGJhc2VmaWVsZHMgd2hpY2ggZXZlcnkgbGluayBoYXMgd2l0aCBwb3RlbnRpYWwsIGN1c3RvbSB1c2VyLWFkZGVkIGZpZWxkcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybUV4dHJhRmllbGRzKGN1c3RvbUZpZWxkU2NoZW1hOiBGaWVsZFtdIHwgKChhcmdzOiB7XG4gIGRlZmF1bHRGaWVsZHM6IEZpZWxkW107XG4gIGNvbmZpZzogU2FuaXRpemVkQ29uZmlnO1xuICBpMThuOiBpMThuO1xufSkgPT4gRmllbGRbXSksIGNvbmZpZzogU2FuaXRpemVkQ29uZmlnLCBpMThuOiBpMThuKTogRmllbGRbXSB7XG4gIGNvbnN0IGJhc2VGaWVsZHM6IEZpZWxkW10gPSBnZXRCYXNlRmllbGRzKGNvbmZpZyk7XG5cbiAgY29uc3QgZmllbGRzID0gdHlwZW9mIGN1c3RvbUZpZWxkU2NoZW1hID09PSAnZnVuY3Rpb24nID8gY3VzdG9tRmllbGRTY2hlbWEoeyBkZWZhdWx0RmllbGRzOiBiYXNlRmllbGRzLCBjb25maWcsIGkxOG4gfSkgOiBiYXNlRmllbGRzO1xuXG4gIC8vIFdyYXAgZmllbGRzIHdoaWNoIGFyZSBub3QgcGFydCBvZiB0aGUgYmFzZSBzY2hlbWEgaW4gYSBncm91cCBuYW1lZCAnZmllbGRzJyAtIG90aGVyd2lzZSB0aGV5IHdpbGwgYmUgcmVuZGVyZWQgYnV0IG5vdCBzYXZlZFxuICBjb25zdCBleHRyYUZpZWxkcyA9IFtdO1xuICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpZiAoJ25hbWUnIGluIGZpZWxkKSB7XG4gICAgICBpZiAoIWJhc2VGaWVsZHMuZmluZCgoYmFzZUZpZWxkKSA9PiAhKCduYW1lJyBpbiBiYXNlRmllbGQpIHx8IGJhc2VGaWVsZC5uYW1lID09PSBmaWVsZC5uYW1lKSkge1xuICAgICAgICBpZiAoZmllbGQubmFtZSAhPT0gJ2ZpZWxkcycgJiYgZmllbGQudHlwZSAhPT0gJ2dyb3VwJykge1xuICAgICAgICAgIGV4dHJhRmllbGRzLnB1c2goZmllbGQpO1xuICAgICAgICAgIC8vIFJlbW92ZSBmcm9tIGZpZWxkcyBmcm9tIG5vdywgYXMgdGhleSBuZWVkIHRvIGJlIHBhcnQgb2YgdGhlIGZpZWxkcyBncm91cCBiZWxvd1xuICAgICAgICAgIGZpZWxkcy5zcGxpY2UoZmllbGRzLmluZGV4T2YoZmllbGQpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cblxuICBpZiAoQXJyYXkuaXNBcnJheShjdXN0b21GaWVsZFNjaGVtYSkgfHwgZmllbGRzLmxlbmd0aCA+IDApIHtcbiAgICBmaWVsZHMucHVzaCh7XG4gICAgICBuYW1lOiAnZmllbGRzJyxcbiAgICAgIHR5cGU6ICdncm91cCcsXG4gICAgICBhZG1pbjoge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgIGJvcmRlclRvcDogMCxcbiAgICAgICAgICBib3JkZXJCb3R0b206IDAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZmllbGRzOiBBcnJheS5pc0FycmF5KGN1c3RvbUZpZWxkU2NoZW1hKSA/IGN1c3RvbUZpZWxkU2NoZW1hLmNvbmNhdChleHRyYUZpZWxkcykgOiBleHRyYUZpZWxkcyxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZmllbGRzO1xufVxuIl0sIm5hbWVzIjpbInVud3JhcExpbmsiLCJ3cmFwTGluayIsIndpdGhMaW5rcyIsInRyYW5zZm9ybUV4dHJhRmllbGRzIiwiZWRpdG9yIiwiVHJhbnNmb3JtcyIsInVud3JhcE5vZGVzIiwibWF0Y2giLCJuIiwiRWxlbWVudCIsImlzRWxlbWVudCIsInR5cGUiLCJzZWxlY3Rpb24iLCJpc0NvbGxhcHNlZCIsIlJhbmdlIiwibGluayIsInVybCIsInVuZGVmaW5lZCIsIm5ld1RhYiIsImNoaWxkcmVuIiwidGV4dCIsImluc2VydE5vZGVzIiwid3JhcE5vZGVzIiwic3BsaXQiLCJjb2xsYXBzZSIsImVkZ2UiLCJpbmNvbWluZ0VkaXRvciIsImlzSW5saW5lIiwiZWxlbWVudCIsImN1c3RvbUZpZWxkU2NoZW1hIiwiY29uZmlnIiwiaTE4biIsImJhc2VGaWVsZHMiLCJnZXRCYXNlRmllbGRzIiwiZmllbGRzIiwiZGVmYXVsdEZpZWxkcyIsImV4dHJhRmllbGRzIiwiZm9yRWFjaCIsImZpZWxkIiwiZmluZCIsImJhc2VGaWVsZCIsIm5hbWUiLCJwdXNoIiwic3BsaWNlIiwiaW5kZXhPZiIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImFkbWluIiwic3R5bGUiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyVG9wIiwiYm9yZGVyQm90dG9tIiwiY29uY2F0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQU1hQSxVQUFVO2VBQVZBOztJQUlBQyxRQUFRO2VBQVJBOztJQW1CQUMsU0FBUztlQUFUQTs7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