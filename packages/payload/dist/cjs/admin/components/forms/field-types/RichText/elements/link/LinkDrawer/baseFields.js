"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getBaseFields", {
    enumerable: true,
    get: function() {
        return getBaseFields;
    }
});
var _extractTranslations = require("../../../../../../../../translations/extractTranslations");
var translations = (0, _extractTranslations.extractTranslations)([
    "fields:textToDisplay",
    "fields:linkType",
    "fields:chooseBetweenCustomTextOrDocument",
    "fields:customURL",
    "fields:internalLink",
    "fields:enterURL",
    "fields:chooseDocumentToLink",
    "fields:openInNewTab"
]);
var getBaseFields = function(config) {
    return [
        {
            name: "text",
            label: translations["fields:textToDisplay"],
            type: "text",
            required: true
        },
        {
            name: "linkType",
            label: translations["fields:linkType"],
            type: "radio",
            required: true,
            admin: {
                description: translations["fields:chooseBetweenCustomTextOrDocument"]
            },
            defaultValue: "custom",
            options: [
                {
                    label: translations["fields:customURL"],
                    value: "custom"
                },
                {
                    label: translations["fields:internalLink"],
                    value: "internal"
                }
            ]
        },
        {
            name: "url",
            label: translations["fields:enterURL"],
            type: "text",
            required: true,
            admin: {
                condition: function(param) {
                    var linkType = param.linkType;
                    return linkType !== "internal";
                }
            }
        },
        {
            name: "doc",
            label: translations["fields:chooseDocumentToLink"],
            type: "relationship",
            required: true,
            relationTo: config.collections.filter(function(param) {
                var enableRichTextLink = param.admin.enableRichTextLink;
                return enableRichTextLink;
            }).map(function(param) {
                var slug = param.slug;
                return slug;
            }),
            admin: {
                condition: function(param) {
                    var linkType = param.linkType;
                    return linkType === "internal";
                }
            }
        },
        {
            name: "newTab",
            label: translations["fields:openInNewTab"],
            type: "checkbox"
        }
    ];
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL2xpbmsvTGlua0RyYXdlci9iYXNlRmllbGRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgZXh0cmFjdFRyYW5zbGF0aW9ucyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RyYW5zbGF0aW9ucy9leHRyYWN0VHJhbnNsYXRpb25zJztcblxuY29uc3QgdHJhbnNsYXRpb25zID0gZXh0cmFjdFRyYW5zbGF0aW9ucyhbXG4gICdmaWVsZHM6dGV4dFRvRGlzcGxheScsXG4gICdmaWVsZHM6bGlua1R5cGUnLFxuICAnZmllbGRzOmNob29zZUJldHdlZW5DdXN0b21UZXh0T3JEb2N1bWVudCcsXG4gICdmaWVsZHM6Y3VzdG9tVVJMJyxcbiAgJ2ZpZWxkczppbnRlcm5hbExpbmsnLFxuICAnZmllbGRzOmVudGVyVVJMJyxcbiAgJ2ZpZWxkczpjaG9vc2VEb2N1bWVudFRvTGluaycsXG4gICdmaWVsZHM6b3BlbkluTmV3VGFiJyxcbl0pO1xuXG5leHBvcnQgY29uc3QgZ2V0QmFzZUZpZWxkcyA9IChjb25maWc6IENvbmZpZyk6IEZpZWxkW10gPT4gW1xuICB7XG4gICAgbmFtZTogJ3RleHQnLFxuICAgIGxhYmVsOiB0cmFuc2xhdGlvbnNbJ2ZpZWxkczp0ZXh0VG9EaXNwbGF5J10sXG4gICAgdHlwZTogJ3RleHQnLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2xpbmtUeXBlJyxcbiAgICBsYWJlbDogdHJhbnNsYXRpb25zWydmaWVsZHM6bGlua1R5cGUnXSxcbiAgICB0eXBlOiAncmFkaW8nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGFkbWluOiB7XG4gICAgICBkZXNjcmlwdGlvbjogdHJhbnNsYXRpb25zWydmaWVsZHM6Y2hvb3NlQmV0d2VlbkN1c3RvbVRleHRPckRvY3VtZW50J10sXG4gICAgfSxcbiAgICBkZWZhdWx0VmFsdWU6ICdjdXN0b20nLFxuICAgIG9wdGlvbnM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IHRyYW5zbGF0aW9uc1snZmllbGRzOmN1c3RvbVVSTCddLFxuICAgICAgICB2YWx1ZTogJ2N1c3RvbScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogdHJhbnNsYXRpb25zWydmaWVsZHM6aW50ZXJuYWxMaW5rJ10sXG4gICAgICAgIHZhbHVlOiAnaW50ZXJuYWwnLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ3VybCcsXG4gICAgbGFiZWw6IHRyYW5zbGF0aW9uc1snZmllbGRzOmVudGVyVVJMJ10sXG4gICAgdHlwZTogJ3RleHQnLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGFkbWluOiB7XG4gICAgICBjb25kaXRpb246ICh7IGxpbmtUeXBlIH0pID0+IGxpbmtUeXBlICE9PSAnaW50ZXJuYWwnLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZG9jJyxcbiAgICBsYWJlbDogdHJhbnNsYXRpb25zWydmaWVsZHM6Y2hvb3NlRG9jdW1lbnRUb0xpbmsnXSxcbiAgICB0eXBlOiAncmVsYXRpb25zaGlwJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICByZWxhdGlvblRvOiBjb25maWcuY29sbGVjdGlvbnMuZmlsdGVyKCh7IGFkbWluOiB7IGVuYWJsZVJpY2hUZXh0TGluayB9IH0pID0+IGVuYWJsZVJpY2hUZXh0TGluaykubWFwKCh7IHNsdWcgfSkgPT4gc2x1ZyksXG4gICAgYWRtaW46IHtcbiAgICAgIGNvbmRpdGlvbjogKHsgbGlua1R5cGUgfSkgPT4ge1xuICAgICAgICByZXR1cm4gbGlua1R5cGUgPT09ICdpbnRlcm5hbCc7XG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbmV3VGFiJyxcbiAgICBsYWJlbDogdHJhbnNsYXRpb25zWydmaWVsZHM6b3BlbkluTmV3VGFiJ10sXG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgfSxcbl07XG4iXSwibmFtZXMiOlsiZ2V0QmFzZUZpZWxkcyIsInRyYW5zbGF0aW9ucyIsImV4dHJhY3RUcmFuc2xhdGlvbnMiLCJjb25maWciLCJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicmVxdWlyZWQiLCJhZG1pbiIsImRlc2NyaXB0aW9uIiwiZGVmYXVsdFZhbHVlIiwib3B0aW9ucyIsInZhbHVlIiwiY29uZGl0aW9uIiwibGlua1R5cGUiLCJyZWxhdGlvblRvIiwiY29sbGVjdGlvbnMiLCJmaWx0ZXIiLCJlbmFibGVSaWNoVGV4dExpbmsiLCJtYXAiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7OytCQWVhQTs7O2VBQUFBOzs7bUNBYnVCO0FBRXBDLElBQU1DLGVBQWVDLElBQUFBLHdDQUFtQixFQUFDO0lBQ3ZDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRDtBQUVNLElBQU1GLGdCQUFnQixTQUFDRztXQUE0QjtRQUN4RDtZQUNFQyxNQUFNO1lBQ05DLE9BQU9KLFlBQVksQ0FBQyx1QkFBdUI7WUFDM0NLLE1BQU07WUFDTkMsVUFBVTtRQUNaO1FBQ0E7WUFDRUgsTUFBTTtZQUNOQyxPQUFPSixZQUFZLENBQUMsa0JBQWtCO1lBQ3RDSyxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsT0FBTztnQkFDTEMsYUFBYVIsWUFBWSxDQUFDLDJDQUEyQztZQUN2RTtZQUNBUyxjQUFjO1lBQ2RDLFNBQVM7Z0JBQ1A7b0JBQ0VOLE9BQU9KLFlBQVksQ0FBQyxtQkFBbUI7b0JBQ3ZDVyxPQUFPO2dCQUNUO2dCQUNBO29CQUNFUCxPQUFPSixZQUFZLENBQUMsc0JBQXNCO29CQUMxQ1csT0FBTztnQkFDVDthQUNEO1FBQ0g7UUFDQTtZQUNFUixNQUFNO1lBQ05DLE9BQU9KLFlBQVksQ0FBQyxrQkFBa0I7WUFDdENLLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxPQUFPO2dCQUNMSyxXQUFXO3dCQUFHQyxpQkFBQUE7MkJBQWVBLGFBQWE7O1lBQzVDO1FBQ0Y7UUFDQTtZQUNFVixNQUFNO1lBQ05DLE9BQU9KLFlBQVksQ0FBQyw4QkFBOEI7WUFDbERLLE1BQU07WUFDTkMsVUFBVTtZQUNWUSxZQUFZWixPQUFPYSxXQUFXLENBQUNDLE1BQU0sQ0FBQztvQkFBR1QsQUFBU1UsMkJBQVRWLE1BQVNVO3VCQUEyQkE7ZUFBb0JDLEdBQUcsQ0FBQztvQkFBR0MsYUFBQUE7dUJBQVdBOztZQUNuSFosT0FBTztnQkFDTEssV0FBVzt3QkFBR0MsaUJBQUFBO29CQUNaLE9BQU9BLGFBQWE7Z0JBQ3RCO1lBQ0Y7UUFDRjtRQUNBO1lBQ0VWLE1BQU07WUFDTkMsT0FBT0osWUFBWSxDQUFDLHNCQUFzQjtZQUMxQ0ssTUFBTTtRQUNSO0tBQ0QifQ==