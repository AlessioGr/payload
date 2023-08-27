import pluralize from "pluralize-esm";
var singular = pluralize.singular, isPlural = pluralize.isPlural;
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
        plural: pluralize(words)
    };
};
var formatNames = function(slug) {
    var words = toWords(slug, true);
    return isPlural(slug) ? {
        singular: singular(words),
        plural: words
    } : {
        singular: words,
        plural: pluralize(words)
    };
};
export { formatNames, formatLabels, toWords };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvZm9ybWF0TGFiZWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwbHVyYWxpemUgZnJvbSAncGx1cmFsaXplLWVzbSc7XG5jb25zdCB7IHNpbmd1bGFyLCBpc1BsdXJhbCB9ID0gcGx1cmFsaXplO1xuXG5jb25zdCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSAoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuXG5jb25zdCB0b1dvcmRzID0gKGlucHV0U3RyaW5nOiBzdHJpbmcsIGpvaW5Xb3JkcyA9IGZhbHNlKTogc3RyaW5nID0+IHtcbiAgY29uc3Qgbm90TnVsbFN0cmluZyA9IGlucHV0U3RyaW5nIHx8ICcnO1xuICBjb25zdCB0cmltbWVkU3RyaW5nID0gbm90TnVsbFN0cmluZy50cmltKCk7XG4gIGNvbnN0IGFycmF5T2ZTdHJpbmdzID0gdHJpbW1lZFN0cmluZy5zcGxpdCgvW1xccy1dLyk7XG5cbiAgY29uc3Qgc3BsaXRTdHJpbmdzQXJyYXkgPSBbXTtcbiAgYXJyYXlPZlN0cmluZ3MuZm9yRWFjaCgodGVtcFN0cmluZykgPT4ge1xuICAgIGlmICh0ZW1wU3RyaW5nICE9PSAnJykge1xuICAgICAgY29uc3Qgc3BsaXRXb3JkcyA9IHRlbXBTdHJpbmcuc3BsaXQoLyg/PVtBLVpdKS8pLmpvaW4oJyAnKTtcbiAgICAgIHNwbGl0U3RyaW5nc0FycmF5LnB1c2goY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHNwbGl0V29yZHMpKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBqb2luV29yZHNcbiAgICA/IHNwbGl0U3RyaW5nc0FycmF5LmpvaW4oJycpLnJlcGxhY2UoL1xccy9naSwgJycpXG4gICAgOiBzcGxpdFN0cmluZ3NBcnJheS5qb2luKCcgJyk7XG59O1xuXG5jb25zdCBmb3JtYXRMYWJlbHMgPSAoKHNsdWc6IHN0cmluZyk6IHsgc2luZ3VsYXI6IHN0cmluZywgcGx1cmFsOiBzdHJpbmcgfSA9PiB7XG4gIGNvbnN0IHdvcmRzID0gdG9Xb3JkcyhzbHVnKTtcbiAgcmV0dXJuIChpc1BsdXJhbChzbHVnKSlcbiAgICA/IHtcbiAgICAgIHNpbmd1bGFyOiBzaW5ndWxhcih3b3JkcyksXG4gICAgICBwbHVyYWw6IHdvcmRzLFxuICAgIH1cbiAgICA6IHtcbiAgICAgIHNpbmd1bGFyOiB3b3JkcyxcbiAgICAgIHBsdXJhbDogcGx1cmFsaXplKHdvcmRzKSxcbiAgICB9O1xufSk7XG5cbmNvbnN0IGZvcm1hdE5hbWVzID0gKChzbHVnOiBzdHJpbmcpOiB7IHNpbmd1bGFyOiBzdHJpbmcsIHBsdXJhbDogc3RyaW5nIH0gPT4ge1xuICBjb25zdCB3b3JkcyA9IHRvV29yZHMoc2x1ZywgdHJ1ZSk7XG4gIHJldHVybiAoaXNQbHVyYWwoc2x1ZykpXG4gICAgPyB7XG4gICAgICBzaW5ndWxhcjogc2luZ3VsYXIod29yZHMpLFxuICAgICAgcGx1cmFsOiB3b3JkcyxcbiAgICB9XG4gICAgOiB7XG4gICAgICBzaW5ndWxhcjogd29yZHMsXG4gICAgICBwbHVyYWw6IHBsdXJhbGl6ZSh3b3JkcyksXG4gICAgfTtcbn0pO1xuXG5leHBvcnQge1xuICBmb3JtYXROYW1lcyxcbiAgZm9ybWF0TGFiZWxzLFxuICB0b1dvcmRzLFxufTtcbiJdLCJuYW1lcyI6WyJwbHVyYWxpemUiLCJzaW5ndWxhciIsImlzUGx1cmFsIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwic3RyaW5nIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInRvV29yZHMiLCJpbnB1dFN0cmluZyIsImpvaW5Xb3JkcyIsIm5vdE51bGxTdHJpbmciLCJ0cmltbWVkU3RyaW5nIiwidHJpbSIsImFycmF5T2ZTdHJpbmdzIiwic3BsaXQiLCJzcGxpdFN0cmluZ3NBcnJheSIsImZvckVhY2giLCJ0ZW1wU3RyaW5nIiwic3BsaXRXb3JkcyIsImpvaW4iLCJwdXNoIiwicmVwbGFjZSIsImZvcm1hdExhYmVscyIsInNsdWciLCJ3b3JkcyIsInBsdXJhbCIsImZvcm1hdE5hbWVzIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxlQUFlLGdCQUFnQjtBQUN0QyxJQUFRQyxXQUF1QkQsVUFBdkJDLFVBQVVDLFdBQWFGLFVBQWJFO0FBRWxCLElBQU1DLHdCQUF3QixTQUFDQztXQUEyQkEsT0FBT0MsTUFBTSxDQUFDLEdBQUdDLFdBQVcsS0FBS0YsT0FBT0csS0FBSyxDQUFDOztBQUV4RyxJQUFNQyxVQUFVLFNBQUNDO1FBQXFCQyw2RUFBWTtJQUNoRCxJQUFNQyxnQkFBZ0JGLGVBQWU7SUFDckMsSUFBTUcsZ0JBQWdCRCxjQUFjRSxJQUFJO0lBQ3hDLElBQU1DLGlCQUFpQkYsY0FBY0csS0FBSyxDQUFDO0lBRTNDLElBQU1DLG9CQUFvQixFQUFFO0lBQzVCRixlQUFlRyxPQUFPLENBQUMsU0FBQ0M7UUFDdEIsSUFBSUEsZUFBZSxJQUFJO1lBQ3JCLElBQU1DLGFBQWFELFdBQVdILEtBQUssQ0FBQyxhQUFhSyxJQUFJLENBQUM7WUFDdERKLGtCQUFrQkssSUFBSSxDQUFDbEIsc0JBQXNCZ0I7UUFDL0M7SUFDRjtJQUVBLE9BQU9ULFlBQ0hNLGtCQUFrQkksSUFBSSxDQUFDLElBQUlFLE9BQU8sQ0FBQyxRQUFRLE1BQzNDTixrQkFBa0JJLElBQUksQ0FBQztBQUM3QjtBQUVBLElBQU1HLGVBQWdCLFNBQUNDO0lBQ3JCLElBQU1DLFFBQVFqQixRQUFRZ0I7SUFDdEIsT0FBTyxBQUFDdEIsU0FBU3NCLFFBQ2I7UUFDQXZCLFVBQVVBLFNBQVN3QjtRQUNuQkMsUUFBUUQ7SUFDVixJQUNFO1FBQ0F4QixVQUFVd0I7UUFDVkMsUUFBUTFCLFVBQVV5QjtJQUNwQjtBQUNKO0FBRUEsSUFBTUUsY0FBZSxTQUFDSDtJQUNwQixJQUFNQyxRQUFRakIsUUFBUWdCLE1BQU07SUFDNUIsT0FBTyxBQUFDdEIsU0FBU3NCLFFBQ2I7UUFDQXZCLFVBQVVBLFNBQVN3QjtRQUNuQkMsUUFBUUQ7SUFDVixJQUNFO1FBQ0F4QixVQUFVd0I7UUFDVkMsUUFBUTFCLFVBQVV5QjtJQUNwQjtBQUNKO0FBRUEsU0FDRUUsV0FBVyxFQUNYSixZQUFZLEVBQ1pmLE9BQU8sR0FDUCJ9