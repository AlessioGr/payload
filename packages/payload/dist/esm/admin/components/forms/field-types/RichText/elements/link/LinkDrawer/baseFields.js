import { extractTranslations } from "../../../../../../../../translations/extractTranslations";
var translations = extractTranslations([
    "fields:textToDisplay",
    "fields:linkType",
    "fields:chooseBetweenCustomTextOrDocument",
    "fields:customURL",
    "fields:internalLink",
    "fields:enterURL",
    "fields:chooseDocumentToLink",
    "fields:openInNewTab"
]);
export var getBaseFields = function(config) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL2xpbmsvTGlua0RyYXdlci9iYXNlRmllbGRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgZXh0cmFjdFRyYW5zbGF0aW9ucyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RyYW5zbGF0aW9ucy9leHRyYWN0VHJhbnNsYXRpb25zJztcblxuY29uc3QgdHJhbnNsYXRpb25zID0gZXh0cmFjdFRyYW5zbGF0aW9ucyhbXG4gICdmaWVsZHM6dGV4dFRvRGlzcGxheScsXG4gICdmaWVsZHM6bGlua1R5cGUnLFxuICAnZmllbGRzOmNob29zZUJldHdlZW5DdXN0b21UZXh0T3JEb2N1bWVudCcsXG4gICdmaWVsZHM6Y3VzdG9tVVJMJyxcbiAgJ2ZpZWxkczppbnRlcm5hbExpbmsnLFxuICAnZmllbGRzOmVudGVyVVJMJyxcbiAgJ2ZpZWxkczpjaG9vc2VEb2N1bWVudFRvTGluaycsXG4gICdmaWVsZHM6b3BlbkluTmV3VGFiJyxcbl0pO1xuXG5leHBvcnQgY29uc3QgZ2V0QmFzZUZpZWxkcyA9IChjb25maWc6IENvbmZpZyk6IEZpZWxkW10gPT4gW1xuICB7XG4gICAgbmFtZTogJ3RleHQnLFxuICAgIGxhYmVsOiB0cmFuc2xhdGlvbnNbJ2ZpZWxkczp0ZXh0VG9EaXNwbGF5J10sXG4gICAgdHlwZTogJ3RleHQnLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2xpbmtUeXBlJyxcbiAgICBsYWJlbDogdHJhbnNsYXRpb25zWydmaWVsZHM6bGlua1R5cGUnXSxcbiAgICB0eXBlOiAncmFkaW8nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGFkbWluOiB7XG4gICAgICBkZXNjcmlwdGlvbjogdHJhbnNsYXRpb25zWydmaWVsZHM6Y2hvb3NlQmV0d2VlbkN1c3RvbVRleHRPckRvY3VtZW50J10sXG4gICAgfSxcbiAgICBkZWZhdWx0VmFsdWU6ICdjdXN0b20nLFxuICAgIG9wdGlvbnM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IHRyYW5zbGF0aW9uc1snZmllbGRzOmN1c3RvbVVSTCddLFxuICAgICAgICB2YWx1ZTogJ2N1c3RvbScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogdHJhbnNsYXRpb25zWydmaWVsZHM6aW50ZXJuYWxMaW5rJ10sXG4gICAgICAgIHZhbHVlOiAnaW50ZXJuYWwnLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ3VybCcsXG4gICAgbGFiZWw6IHRyYW5zbGF0aW9uc1snZmllbGRzOmVudGVyVVJMJ10sXG4gICAgdHlwZTogJ3RleHQnLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGFkbWluOiB7XG4gICAgICBjb25kaXRpb246ICh7IGxpbmtUeXBlIH0pID0+IGxpbmtUeXBlICE9PSAnaW50ZXJuYWwnLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZG9jJyxcbiAgICBsYWJlbDogdHJhbnNsYXRpb25zWydmaWVsZHM6Y2hvb3NlRG9jdW1lbnRUb0xpbmsnXSxcbiAgICB0eXBlOiAncmVsYXRpb25zaGlwJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICByZWxhdGlvblRvOiBjb25maWcuY29sbGVjdGlvbnMuZmlsdGVyKCh7IGFkbWluOiB7IGVuYWJsZVJpY2hUZXh0TGluayB9IH0pID0+IGVuYWJsZVJpY2hUZXh0TGluaykubWFwKCh7IHNsdWcgfSkgPT4gc2x1ZyksXG4gICAgYWRtaW46IHtcbiAgICAgIGNvbmRpdGlvbjogKHsgbGlua1R5cGUgfSkgPT4ge1xuICAgICAgICByZXR1cm4gbGlua1R5cGUgPT09ICdpbnRlcm5hbCc7XG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbmV3VGFiJyxcbiAgICBsYWJlbDogdHJhbnNsYXRpb25zWydmaWVsZHM6b3BlbkluTmV3VGFiJ10sXG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgfSxcbl07XG4iXSwibmFtZXMiOlsiZXh0cmFjdFRyYW5zbGF0aW9ucyIsInRyYW5zbGF0aW9ucyIsImdldEJhc2VGaWVsZHMiLCJjb25maWciLCJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicmVxdWlyZWQiLCJhZG1pbiIsImRlc2NyaXB0aW9uIiwiZGVmYXVsdFZhbHVlIiwib3B0aW9ucyIsInZhbHVlIiwiY29uZGl0aW9uIiwibGlua1R5cGUiLCJyZWxhdGlvblRvIiwiY29sbGVjdGlvbnMiLCJmaWx0ZXIiLCJlbmFibGVSaWNoVGV4dExpbmsiLCJtYXAiLCJzbHVnIl0sIm1hcHBpbmdzIjoiQUFFQSxTQUFTQSxtQkFBbUIsUUFBUSwyREFBMkQ7QUFFL0YsSUFBTUMsZUFBZUQsb0JBQW9CO0lBQ3ZDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRDtBQUVELE9BQU8sSUFBTUUsZ0JBQWdCLFNBQUNDO1dBQTRCO1FBQ3hEO1lBQ0VDLE1BQU07WUFDTkMsT0FBT0osWUFBWSxDQUFDLHVCQUF1QjtZQUMzQ0ssTUFBTTtZQUNOQyxVQUFVO1FBQ1o7UUFDQTtZQUNFSCxNQUFNO1lBQ05DLE9BQU9KLFlBQVksQ0FBQyxrQkFBa0I7WUFDdENLLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxPQUFPO2dCQUNMQyxhQUFhUixZQUFZLENBQUMsMkNBQTJDO1lBQ3ZFO1lBQ0FTLGNBQWM7WUFDZEMsU0FBUztnQkFDUDtvQkFDRU4sT0FBT0osWUFBWSxDQUFDLG1CQUFtQjtvQkFDdkNXLE9BQU87Z0JBQ1Q7Z0JBQ0E7b0JBQ0VQLE9BQU9KLFlBQVksQ0FBQyxzQkFBc0I7b0JBQzFDVyxPQUFPO2dCQUNUO2FBQ0Q7UUFDSDtRQUNBO1lBQ0VSLE1BQU07WUFDTkMsT0FBT0osWUFBWSxDQUFDLGtCQUFrQjtZQUN0Q0ssTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLE9BQU87Z0JBQ0xLLFdBQVc7d0JBQUdDLGlCQUFBQTsyQkFBZUEsYUFBYTs7WUFDNUM7UUFDRjtRQUNBO1lBQ0VWLE1BQU07WUFDTkMsT0FBT0osWUFBWSxDQUFDLDhCQUE4QjtZQUNsREssTUFBTTtZQUNOQyxVQUFVO1lBQ1ZRLFlBQVlaLE9BQU9hLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDO29CQUFHVCxBQUFTVSwyQkFBVFYsTUFBU1U7dUJBQTJCQTtlQUFvQkMsR0FBRyxDQUFDO29CQUFHQyxhQUFBQTt1QkFBV0E7O1lBQ25IWixPQUFPO2dCQUNMSyxXQUFXO3dCQUFHQyxpQkFBQUE7b0JBQ1osT0FBT0EsYUFBYTtnQkFDdEI7WUFDRjtRQUNGO1FBQ0E7WUFDRVYsTUFBTTtZQUNOQyxPQUFPSixZQUFZLENBQUMsc0JBQXNCO1lBQzFDSyxNQUFNO1FBQ1I7S0FDRDtFQUFDIn0=