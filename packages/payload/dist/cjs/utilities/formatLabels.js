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
    formatNames: function() {
        return formatNames;
    },
    formatLabels: function() {
        return formatLabels;
    },
    toWords: function() {
        return toWords;
    }
});
var _pluralizeesm = /*#__PURE__*/ _interop_require_default(require("pluralize-esm"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var singular = _pluralizeesm.default.singular, isPlural = _pluralizeesm.default.isPlural;
var capitalizeFirstLetter = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
var toWords = function(inputString) {
    var joinWords = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var notNullString = inputString || "";
    var trimmedString = notNullString.trim();
    var arrayOfStrings = trimmedString.split(/[\s-]/);
    var splitStringsArray = [];
    arrayOfStrings.forEach(function(tempString) {
        if (tempString !== "") {
            var splitWords = tempString.split(/(?=[A-Z])/).join(" ");
            splitStringsArray.push(capitalizeFirstLetter(splitWords));
        }
    });
    return joinWords ? splitStringsArray.join("").replace(/\s/gi, "") : splitStringsArray.join(" ");
};
var formatLabels = function(slug) {
    var words = toWords(slug);
    return isPlural(slug) ? {
        singular: singular(words),
        plural: words
    } : {
        singular: words,
        plural: (0, _pluralizeesm.default)(words)
    };
};
var formatNames = function(slug) {
    var words = toWords(slug, true);
    return isPlural(slug) ? {
        singular: singular(words),
        plural: words
    } : {
        singular: words,
        plural: (0, _pluralizeesm.default)(words)
    };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvZm9ybWF0TGFiZWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwbHVyYWxpemUgZnJvbSAncGx1cmFsaXplLWVzbSc7XG5jb25zdCB7IHNpbmd1bGFyLCBpc1BsdXJhbCB9ID0gcGx1cmFsaXplO1xuXG5jb25zdCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSAoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuXG5jb25zdCB0b1dvcmRzID0gKGlucHV0U3RyaW5nOiBzdHJpbmcsIGpvaW5Xb3JkcyA9IGZhbHNlKTogc3RyaW5nID0+IHtcbiAgY29uc3Qgbm90TnVsbFN0cmluZyA9IGlucHV0U3RyaW5nIHx8ICcnO1xuICBjb25zdCB0cmltbWVkU3RyaW5nID0gbm90TnVsbFN0cmluZy50cmltKCk7XG4gIGNvbnN0IGFycmF5T2ZTdHJpbmdzID0gdHJpbW1lZFN0cmluZy5zcGxpdCgvW1xccy1dLyk7XG5cbiAgY29uc3Qgc3BsaXRTdHJpbmdzQXJyYXkgPSBbXTtcbiAgYXJyYXlPZlN0cmluZ3MuZm9yRWFjaCgodGVtcFN0cmluZykgPT4ge1xuICAgIGlmICh0ZW1wU3RyaW5nICE9PSAnJykge1xuICAgICAgY29uc3Qgc3BsaXRXb3JkcyA9IHRlbXBTdHJpbmcuc3BsaXQoLyg/PVtBLVpdKS8pLmpvaW4oJyAnKTtcbiAgICAgIHNwbGl0U3RyaW5nc0FycmF5LnB1c2goY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHNwbGl0V29yZHMpKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBqb2luV29yZHNcbiAgICA/IHNwbGl0U3RyaW5nc0FycmF5LmpvaW4oJycpLnJlcGxhY2UoL1xccy9naSwgJycpXG4gICAgOiBzcGxpdFN0cmluZ3NBcnJheS5qb2luKCcgJyk7XG59O1xuXG5jb25zdCBmb3JtYXRMYWJlbHMgPSAoKHNsdWc6IHN0cmluZyk6IHsgc2luZ3VsYXI6IHN0cmluZywgcGx1cmFsOiBzdHJpbmcgfSA9PiB7XG4gIGNvbnN0IHdvcmRzID0gdG9Xb3JkcyhzbHVnKTtcbiAgcmV0dXJuIChpc1BsdXJhbChzbHVnKSlcbiAgICA/IHtcbiAgICAgIHNpbmd1bGFyOiBzaW5ndWxhcih3b3JkcyksXG4gICAgICBwbHVyYWw6IHdvcmRzLFxuICAgIH1cbiAgICA6IHtcbiAgICAgIHNpbmd1bGFyOiB3b3JkcyxcbiAgICAgIHBsdXJhbDogcGx1cmFsaXplKHdvcmRzKSxcbiAgICB9O1xufSk7XG5cbmNvbnN0IGZvcm1hdE5hbWVzID0gKChzbHVnOiBzdHJpbmcpOiB7IHNpbmd1bGFyOiBzdHJpbmcsIHBsdXJhbDogc3RyaW5nIH0gPT4ge1xuICBjb25zdCB3b3JkcyA9IHRvV29yZHMoc2x1ZywgdHJ1ZSk7XG4gIHJldHVybiAoaXNQbHVyYWwoc2x1ZykpXG4gICAgPyB7XG4gICAgICBzaW5ndWxhcjogc2luZ3VsYXIod29yZHMpLFxuICAgICAgcGx1cmFsOiB3b3JkcyxcbiAgICB9XG4gICAgOiB7XG4gICAgICBzaW5ndWxhcjogd29yZHMsXG4gICAgICBwbHVyYWw6IHBsdXJhbGl6ZSh3b3JkcyksXG4gICAgfTtcbn0pO1xuXG5leHBvcnQge1xuICBmb3JtYXROYW1lcyxcbiAgZm9ybWF0TGFiZWxzLFxuICB0b1dvcmRzLFxufTtcbiJdLCJuYW1lcyI6WyJmb3JtYXROYW1lcyIsImZvcm1hdExhYmVscyIsInRvV29yZHMiLCJzaW5ndWxhciIsInBsdXJhbGl6ZSIsImlzUGx1cmFsIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwic3RyaW5nIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImlucHV0U3RyaW5nIiwiam9pbldvcmRzIiwibm90TnVsbFN0cmluZyIsInRyaW1tZWRTdHJpbmciLCJ0cmltIiwiYXJyYXlPZlN0cmluZ3MiLCJzcGxpdCIsInNwbGl0U3RyaW5nc0FycmF5IiwiZm9yRWFjaCIsInRlbXBTdHJpbmciLCJzcGxpdFdvcmRzIiwiam9pbiIsInB1c2giLCJyZXBsYWNlIiwic2x1ZyIsIndvcmRzIiwicGx1cmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQWtERUEsV0FBVztlQUFYQTs7SUFDQUMsWUFBWTtlQUFaQTs7SUFDQUMsT0FBTztlQUFQQTs7O21FQXBEb0I7Ozs7OztBQUN0QixJQUFRQyxXQUF1QkMscUJBQVMsQ0FBaENELFVBQVVFLFdBQWFELHFCQUFTLENBQXRCQztBQUVsQixJQUFNQyx3QkFBd0IsU0FBQ0M7V0FBMkJBLE9BQU9DLE1BQU0sQ0FBQyxHQUFHQyxXQUFXLEtBQUtGLE9BQU9HLEtBQUssQ0FBQzs7QUFFeEcsSUFBTVIsVUFBVSxTQUFDUztRQUFxQkMsNkVBQVk7SUFDaEQsSUFBTUMsZ0JBQWdCRixlQUFlO0lBQ3JDLElBQU1HLGdCQUFnQkQsY0FBY0UsSUFBSTtJQUN4QyxJQUFNQyxpQkFBaUJGLGNBQWNHLEtBQUssQ0FBQztJQUUzQyxJQUFNQyxvQkFBb0IsRUFBRTtJQUM1QkYsZUFBZUcsT0FBTyxDQUFDLFNBQUNDO1FBQ3RCLElBQUlBLGVBQWUsSUFBSTtZQUNyQixJQUFNQyxhQUFhRCxXQUFXSCxLQUFLLENBQUMsYUFBYUssSUFBSSxDQUFDO1lBQ3RESixrQkFBa0JLLElBQUksQ0FBQ2pCLHNCQUFzQmU7UUFDL0M7SUFDRjtJQUVBLE9BQU9ULFlBQ0hNLGtCQUFrQkksSUFBSSxDQUFDLElBQUlFLE9BQU8sQ0FBQyxRQUFRLE1BQzNDTixrQkFBa0JJLElBQUksQ0FBQztBQUM3QjtBQUVBLElBQU1yQixlQUFnQixTQUFDd0I7SUFDckIsSUFBTUMsUUFBUXhCLFFBQVF1QjtJQUN0QixPQUFPLEFBQUNwQixTQUFTb0IsUUFDYjtRQUNBdEIsVUFBVUEsU0FBU3VCO1FBQ25CQyxRQUFRRDtJQUNWLElBQ0U7UUFDQXZCLFVBQVV1QjtRQUNWQyxRQUFRdkIsSUFBQUEscUJBQVMsRUFBQ3NCO0lBQ3BCO0FBQ0o7QUFFQSxJQUFNMUIsY0FBZSxTQUFDeUI7SUFDcEIsSUFBTUMsUUFBUXhCLFFBQVF1QixNQUFNO0lBQzVCLE9BQU8sQUFBQ3BCLFNBQVNvQixRQUNiO1FBQ0F0QixVQUFVQSxTQUFTdUI7UUFDbkJDLFFBQVFEO0lBQ1YsSUFDRTtRQUNBdkIsVUFBVXVCO1FBQ1ZDLFFBQVF2QixJQUFBQSxxQkFBUyxFQUFDc0I7SUFDcEI7QUFDSiJ9