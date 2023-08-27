"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getTranslation", {
    enumerable: true,
    get: function() {
        return getTranslation;
    }
});
var getTranslation = function(label, i18n) {
    if (typeof label === "object") {
        if (label[i18n.language]) {
            return label[i18n.language];
        }
        var fallbacks = [];
        if (typeof i18n.options.fallbackLng === "string") {
            fallbacks = [
                i18n.options.fallbackLng
            ];
        } else if (Array.isArray(i18n.options.fallbackLng)) {
            fallbacks = i18n.options.fallbackLng;
        } else if (typeof i18n.options.fallbackLng === "object") {
            fallbacks = Object.keys(i18n.options.fallbackLng);
        } else if (typeof i18n.options.fallbackLng === "function") {
            console.warn("Use of i18next fallbackLng functions are not supported.");
        }
        var _label_fallbacks_find;
        return (_label_fallbacks_find = label[fallbacks.find(function(language) {
            return label[language];
        })]) !== null && _label_fallbacks_find !== void 0 ? _label_fallbacks_find : label[Object.keys(label)[0]];
    }
    return label;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBpMThuIGFzIElpMThuIH0gZnJvbSAnaTE4bmV4dCc7XG5cbmV4cG9ydCBjb25zdCBnZXRUcmFuc2xhdGlvbiA9IChsYWJlbDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB8IHN0cmluZyB8IEpTWC5FbGVtZW50LCBpMThuOiBJaTE4bik6IHN0cmluZyA9PiB7XG4gIGlmICh0eXBlb2YgbGFiZWwgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKGxhYmVsW2kxOG4ubGFuZ3VhZ2VdKSB7XG4gICAgICByZXR1cm4gbGFiZWxbaTE4bi5sYW5ndWFnZV07XG4gICAgfVxuICAgIGxldCBmYWxsYmFja3MgPSBbXTtcbiAgICBpZiAodHlwZW9mIGkxOG4ub3B0aW9ucy5mYWxsYmFja0xuZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGZhbGxiYWNrcyA9IFtpMThuLm9wdGlvbnMuZmFsbGJhY2tMbmddO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShpMThuLm9wdGlvbnMuZmFsbGJhY2tMbmcpKSB7XG4gICAgICBmYWxsYmFja3MgPSBpMThuLm9wdGlvbnMuZmFsbGJhY2tMbmc7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaTE4bi5vcHRpb25zLmZhbGxiYWNrTG5nID09PSAnb2JqZWN0Jykge1xuICAgICAgZmFsbGJhY2tzID0gT2JqZWN0LmtleXMoaTE4bi5vcHRpb25zLmZhbGxiYWNrTG5nKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpMThuLm9wdGlvbnMuZmFsbGJhY2tMbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignVXNlIG9mIGkxOG5leHQgZmFsbGJhY2tMbmcgZnVuY3Rpb25zIGFyZSBub3Qgc3VwcG9ydGVkLicpO1xuICAgIH1cbiAgICByZXR1cm4gbGFiZWxbZmFsbGJhY2tzLmZpbmQoKGxhbmd1YWdlKSA9PiAobGFiZWxbbGFuZ3VhZ2VdKSldID8/IGxhYmVsW09iamVjdC5rZXlzKGxhYmVsKVswXV07XG4gIH1cbiAgcmV0dXJuIGxhYmVsO1xufTtcbiJdLCJuYW1lcyI6WyJnZXRUcmFuc2xhdGlvbiIsImxhYmVsIiwiaTE4biIsImxhbmd1YWdlIiwiZmFsbGJhY2tzIiwib3B0aW9ucyIsImZhbGxiYWNrTG5nIiwiQXJyYXkiLCJpc0FycmF5IiwiT2JqZWN0Iiwia2V5cyIsImNvbnNvbGUiLCJ3YXJuIiwiZmluZCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFFYUE7OztlQUFBQTs7O0FBQU4sSUFBTUEsaUJBQWlCLFNBQUNDLE9BQXNEQztJQUNuRixJQUFJLE9BQU9ELFVBQVUsVUFBVTtRQUM3QixJQUFJQSxLQUFLLENBQUNDLEtBQUtDLFFBQVEsQ0FBQyxFQUFFO1lBQ3hCLE9BQU9GLEtBQUssQ0FBQ0MsS0FBS0MsUUFBUSxDQUFDO1FBQzdCO1FBQ0EsSUFBSUMsWUFBWSxFQUFFO1FBQ2xCLElBQUksT0FBT0YsS0FBS0csT0FBTyxDQUFDQyxXQUFXLEtBQUssVUFBVTtZQUNoREYsWUFBWTtnQkFBQ0YsS0FBS0csT0FBTyxDQUFDQyxXQUFXO2FBQUM7UUFDeEMsT0FBTyxJQUFJQyxNQUFNQyxPQUFPLENBQUNOLEtBQUtHLE9BQU8sQ0FBQ0MsV0FBVyxHQUFHO1lBQ2xERixZQUFZRixLQUFLRyxPQUFPLENBQUNDLFdBQVc7UUFDdEMsT0FBTyxJQUFJLE9BQU9KLEtBQUtHLE9BQU8sQ0FBQ0MsV0FBVyxLQUFLLFVBQVU7WUFDdkRGLFlBQVlLLE9BQU9DLElBQUksQ0FBQ1IsS0FBS0csT0FBTyxDQUFDQyxXQUFXO1FBQ2xELE9BQU8sSUFBSSxPQUFPSixLQUFLRyxPQUFPLENBQUNDLFdBQVcsS0FBSyxZQUFZO1lBQ3pESyxRQUFRQyxJQUFJLENBQUM7UUFDZjtZQUNPWDtRQUFQLE9BQU9BLENBQUFBLHdCQUFBQSxLQUFLLENBQUNHLFVBQVVTLElBQUksQ0FBQyxTQUFDVjttQkFBY0YsS0FBSyxDQUFDRSxTQUFTO1dBQUcsY0FBdERGLG1DQUFBQSx3QkFBMERBLEtBQUssQ0FBQ1EsT0FBT0MsSUFBSSxDQUFDVCxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQy9GO0lBQ0EsT0FBT0E7QUFDVCJ9