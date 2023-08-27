export default function(input) {
    var words = input.split(" ");
    // Regex word boundaries that work for cyrillic characters - https://stackoverflow.com/a/47062016/1717697
    var wordBoundaryBefore = "(?:(?:[^\\p{L}\\p{N}])|^)"; // Converted to a non-matching group instead of positive lookbehind for Safari
    var wordBoundaryAfter = "(?=[^\\p{L}\\p{N}]|$)";
    var regex = words.reduce(function(pattern, word, i) {
        var escapedWord = word.replace(/[\\^$*+?\\.()|[\]{}]/g, "\\$&");
        return "".concat(pattern, "(?=.*").concat(wordBoundaryBefore, ".*").concat(escapedWord, ".*").concat(wordBoundaryAfter, ")").concat(i + 1 === words.length ? ".+" : "");
    }, "");
    return new RegExp(regex, "i");
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvd29yZEJvdW5kYXJpZXNSZWdleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoaW5wdXQ6IHN0cmluZyk6IFJlZ0V4cCA9PiB7XG4gIGNvbnN0IHdvcmRzID0gaW5wdXQuc3BsaXQoJyAnKTtcblxuICAvLyBSZWdleCB3b3JkIGJvdW5kYXJpZXMgdGhhdCB3b3JrIGZvciBjeXJpbGxpYyBjaGFyYWN0ZXJzIC0gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ3MDYyMDE2LzE3MTc2OTdcbiAgY29uc3Qgd29yZEJvdW5kYXJ5QmVmb3JlID0gJyg/Oig/OlteXFxcXHB7TH1cXFxccHtOfV0pfF4pJzsgLy8gQ29udmVydGVkIHRvIGEgbm9uLW1hdGNoaW5nIGdyb3VwIGluc3RlYWQgb2YgcG9zaXRpdmUgbG9va2JlaGluZCBmb3IgU2FmYXJpXG4gIGNvbnN0IHdvcmRCb3VuZGFyeUFmdGVyID0gJyg/PVteXFxcXHB7TH1cXFxccHtOfV18JCknO1xuICBjb25zdCByZWdleCA9IHdvcmRzLnJlZHVjZSgocGF0dGVybiwgd29yZCwgaSkgPT4ge1xuICAgIGNvbnN0IGVzY2FwZWRXb3JkID0gd29yZC5yZXBsYWNlKC9bXFxcXF4kKis/XFxcXC4oKXxbXFxde31dL2csICdcXFxcJCYnKTtcbiAgICByZXR1cm4gYCR7cGF0dGVybn0oPz0uKiR7d29yZEJvdW5kYXJ5QmVmb3JlfS4qJHtlc2NhcGVkV29yZH0uKiR7d29yZEJvdW5kYXJ5QWZ0ZXJ9KSR7aSArIDEgPT09IHdvcmRzLmxlbmd0aCA/ICcuKycgOiAnJ31gO1xuICB9LCAnJyk7XG4gIHJldHVybiBuZXcgUmVnRXhwKHJlZ2V4LCAnaScpO1xufTtcbiJdLCJuYW1lcyI6WyJpbnB1dCIsIndvcmRzIiwic3BsaXQiLCJ3b3JkQm91bmRhcnlCZWZvcmUiLCJ3b3JkQm91bmRhcnlBZnRlciIsInJlZ2V4IiwicmVkdWNlIiwicGF0dGVybiIsIndvcmQiLCJpIiwiZXNjYXBlZFdvcmQiLCJyZXBsYWNlIiwibGVuZ3RoIiwiUmVnRXhwIl0sIm1hcHBpbmdzIjoiQUFBQSxlQUFlLFNBQUNBO0lBQ2QsSUFBTUMsUUFBUUQsTUFBTUUsS0FBSyxDQUFDO0lBRTFCLHlHQUF5RztJQUN6RyxJQUFNQyxxQkFBcUIsNkJBQTZCLDhFQUE4RTtJQUN0SSxJQUFNQyxvQkFBb0I7SUFDMUIsSUFBTUMsUUFBUUosTUFBTUssTUFBTSxDQUFDLFNBQUNDLFNBQVNDLE1BQU1DO1FBQ3pDLElBQU1DLGNBQWNGLEtBQUtHLE9BQU8sQ0FBQyx5QkFBeUI7UUFDMUQsT0FBTyxBQUFDLEdBQWlCUixPQUFmSSxTQUFRLFNBQThCRyxPQUF2QlAsb0JBQW1CLE1BQW9CQyxPQUFoQk0sYUFBWSxNQUF5QkQsT0FBckJMLG1CQUFrQixLQUFzQyxPQUFuQ0ssSUFBSSxNQUFNUixNQUFNVyxNQUFNLEdBQUcsT0FBTztJQUN2SCxHQUFHO0lBQ0gsT0FBTyxJQUFJQyxPQUFPUixPQUFPO0FBQzNCLEVBQUUifQ==