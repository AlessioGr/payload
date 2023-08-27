import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import RadioGroupInput from "../../../forms/field-types/RadioGroup/Input";
import { useTheme } from "../../../utilities/Theme";
export var ToggleTheme = function() {
    var _useTheme = useTheme(), theme = _useTheme.theme, setTheme = _useTheme.setTheme, autoMode = _useTheme.autoMode;
    var t = useTranslation("general").t;
    var onChange = useCallback(function(newTheme) {
        setTheme(newTheme);
    }, [
        setTheme
    ]);
    return /*#__PURE__*/ React.createElement(RadioGroupInput, {
        name: "theme",
        label: t("adminTheme"),
        value: autoMode ? "auto" : theme,
        onChange: onChange,
        options: [
            {
                label: t("automatic"),
                value: "auto"
            },
            {
                label: t("light"),
                value: "light"
            },
            {
                label: t("dark"),
                value: "dark"
            }
        ]
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0FjY291bnQvVG9nZ2xlVGhlbWUvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgUmFkaW9Hcm91cElucHV0IGZyb20gJy4uLy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzL1JhZGlvR3JvdXAvSW5wdXQnO1xuaW1wb3J0IHsgT25DaGFuZ2UgfSBmcm9tICcuLi8uLi8uLi9mb3Jtcy9maWVsZC10eXBlcy9SYWRpb0dyb3VwL3R5cGVzJztcbmltcG9ydCB7IFRoZW1lLCB1c2VUaGVtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9UaGVtZSc7XG5cbmV4cG9ydCBjb25zdCBUb2dnbGVUaGVtZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lLCBhdXRvTW9kZSB9ID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuXG4gIGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2s8T25DaGFuZ2U8VGhlbWU+PigobmV3VGhlbWUpID0+IHtcbiAgICBzZXRUaGVtZShuZXdUaGVtZSk7XG4gIH0sIFtzZXRUaGVtZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJhZGlvR3JvdXBJbnB1dFxuICAgICAgbmFtZT1cInRoZW1lXCJcbiAgICAgIGxhYmVsPXt0KCdhZG1pblRoZW1lJyl9XG4gICAgICB2YWx1ZT17YXV0b01vZGUgPyAnYXV0bycgOiB0aGVtZX1cbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiB0KCdhdXRvbWF0aWMnKSxcbiAgICAgICAgICB2YWx1ZTogJ2F1dG8nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IHQoJ2xpZ2h0JyksXG4gICAgICAgICAgdmFsdWU6ICdsaWdodCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogdCgnZGFyaycpLFxuICAgICAgICAgIHZhbHVlOiAnZGFyaycsXG4gICAgICAgIH0sXG4gICAgICBdfVxuICAgIC8+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VUcmFuc2xhdGlvbiIsIlJhZGlvR3JvdXBJbnB1dCIsInVzZVRoZW1lIiwiVG9nZ2xlVGhlbWUiLCJ0aGVtZSIsInNldFRoZW1lIiwiYXV0b01vZGUiLCJ0Iiwib25DaGFuZ2UiLCJuZXdUaGVtZSIsIm5hbWUiLCJsYWJlbCIsInZhbHVlIiwib3B0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsU0FBU0MsV0FBVyxRQUFRLFFBQVE7QUFDM0MsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxPQUFPQyxxQkFBcUIsOENBQThDO0FBRTFFLFNBQWdCQyxRQUFRLFFBQVEsMkJBQTJCO0FBRTNELE9BQU8sSUFBTUMsY0FBd0I7SUFDbkMsSUFBc0NELFlBQUFBLFlBQTlCRSxRQUE4QkYsVUFBOUJFLE9BQU9DLFdBQXVCSCxVQUF2QkcsVUFBVUMsV0FBYUosVUFBYkk7SUFDekIsSUFBTSxBQUFFQyxJQUFNUCxlQUFlLFdBQXJCTztJQUVSLElBQU1DLFdBQVdULFlBQTZCLFNBQUNVO1FBQzdDSixTQUFTSTtJQUNYLEdBQUc7UUFBQ0o7S0FBUztJQUViLHFCQUNFLG9CQUFDSjtRQUNDUyxNQUFLO1FBQ0xDLE9BQU9KLEVBQUU7UUFDVEssT0FBT04sV0FBVyxTQUFTRjtRQUMzQkksVUFBVUE7UUFDVkssU0FBUztZQUNQO2dCQUNFRixPQUFPSixFQUFFO2dCQUNUSyxPQUFPO1lBQ1Q7WUFDQTtnQkFDRUQsT0FBT0osRUFBRTtnQkFDVEssT0FBTztZQUNUO1lBQ0E7Z0JBQ0VELE9BQU9KLEVBQUU7Z0JBQ1RLLE9BQU87WUFDVDtTQUNEOztBQUdQLEVBQUUifQ==