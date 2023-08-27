var numbers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
];
var formatName = function(string) {
    var sanitizedString = String(string);
    var firstLetter = sanitizedString.substring(0, 1);
    if (numbers.indexOf(firstLetter) > -1) {
        sanitizedString = "_".concat(sanitizedString);
    }
    var formatted = sanitizedString// Convert accented characters
    .normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/\./g, "_").replace(/-|\//g, "_").replace(/\+/g, "_").replace(/,/g, "_").replace(/\(/g, "_").replace(/\)/g, "_").replace(/'/g, "_").replace(/ /g, "");
    return formatted || "_";
};
export default formatName;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmFwaHFsL3V0aWxpdGllcy9mb3JtYXROYW1lLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG51bWJlcnMgPSBbJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknXTtcblxuY29uc3QgZm9ybWF0TmFtZSA9IChzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGxldCBzYW5pdGl6ZWRTdHJpbmcgPSBTdHJpbmcoc3RyaW5nKTtcblxuICBjb25zdCBmaXJzdExldHRlciA9IHNhbml0aXplZFN0cmluZy5zdWJzdHJpbmcoMCwgMSk7XG5cbiAgaWYgKG51bWJlcnMuaW5kZXhPZihmaXJzdExldHRlcikgPiAtMSkge1xuICAgIHNhbml0aXplZFN0cmluZyA9IGBfJHtzYW5pdGl6ZWRTdHJpbmd9YDtcbiAgfVxuXG4gIGNvbnN0IGZvcm1hdHRlZCA9IHNhbml0aXplZFN0cmluZ1xuICAgIC8vIENvbnZlcnQgYWNjZW50ZWQgY2hhcmFjdGVyc1xuICAgIC5ub3JtYWxpemUoJ05GS0QnKVxuICAgIC5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCAnJylcblxuICAgIC5yZXBsYWNlKC9cXC4vZywgJ18nKVxuICAgIC5yZXBsYWNlKC8tfFxcLy9nLCAnXycpXG4gICAgLnJlcGxhY2UoL1xcKy9nLCAnXycpXG4gICAgLnJlcGxhY2UoLywvZywgJ18nKVxuICAgIC5yZXBsYWNlKC9cXCgvZywgJ18nKVxuICAgIC5yZXBsYWNlKC9cXCkvZywgJ18nKVxuICAgIC5yZXBsYWNlKC8nL2csICdfJylcbiAgICAucmVwbGFjZSgvIC9nLCAnJyk7XG5cbiAgcmV0dXJuIGZvcm1hdHRlZCB8fCAnXyc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXROYW1lO1xuIl0sIm5hbWVzIjpbIm51bWJlcnMiLCJmb3JtYXROYW1lIiwic3RyaW5nIiwic2FuaXRpemVkU3RyaW5nIiwiU3RyaW5nIiwiZmlyc3RMZXR0ZXIiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwiZm9ybWF0dGVkIiwibm9ybWFsaXplIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsVUFBVTtJQUFDO0lBQUs7SUFBSztJQUFLO0lBQUs7SUFBSztJQUFLO0lBQUs7SUFBSztJQUFLO0NBQUk7QUFFbEUsSUFBTUMsYUFBYSxTQUFDQztJQUNsQixJQUFJQyxrQkFBa0JDLE9BQU9GO0lBRTdCLElBQU1HLGNBQWNGLGdCQUFnQkcsU0FBUyxDQUFDLEdBQUc7SUFFakQsSUFBSU4sUUFBUU8sT0FBTyxDQUFDRixlQUFlLENBQUMsR0FBRztRQUNyQ0Ysa0JBQWtCLEFBQUMsSUFBbUIsT0FBaEJBO0lBQ3hCO0lBRUEsSUFBTUssWUFBWUwsZUFDaEIsOEJBQThCO0tBQzdCTSxTQUFTLENBQUMsUUFDVkMsT0FBTyxDQUFDLG9CQUFvQixJQUU1QkEsT0FBTyxDQUFDLE9BQU8sS0FDZkEsT0FBTyxDQUFDLFNBQVMsS0FDakJBLE9BQU8sQ0FBQyxPQUFPLEtBQ2ZBLE9BQU8sQ0FBQyxNQUFNLEtBQ2RBLE9BQU8sQ0FBQyxPQUFPLEtBQ2ZBLE9BQU8sQ0FBQyxPQUFPLEtBQ2ZBLE9BQU8sQ0FBQyxNQUFNLEtBQ2RBLE9BQU8sQ0FBQyxNQUFNO0lBRWpCLE9BQU9GLGFBQWE7QUFDdEI7QUFFQSxlQUFlUCxXQUFXIn0=