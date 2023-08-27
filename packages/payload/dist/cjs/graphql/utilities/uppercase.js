"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
function uppercase(str) {
    var array1 = str.split(" ");
    var newarray1 = [];
    for(var x = 0; x < array1.length; x += 1){
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newarray1.join(" ");
}
var _default = uppercase;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmFwaHFsL3V0aWxpdGllcy91cHBlcmNhc2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdXBwZXJjYXNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgYXJyYXkxID0gc3RyLnNwbGl0KCcgJyk7XG4gIGNvbnN0IG5ld2FycmF5MSA9IFtdO1xuXG4gIGZvciAobGV0IHggPSAwOyB4IDwgYXJyYXkxLmxlbmd0aDsgeCArPSAxKSB7XG4gICAgbmV3YXJyYXkxLnB1c2goYXJyYXkxW3hdLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgYXJyYXkxW3hdLnNsaWNlKDEpKTtcbiAgfVxuICByZXR1cm4gbmV3YXJyYXkxLmpvaW4oJyAnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXBwZXJjYXNlO1xuIl0sIm5hbWVzIjpbInVwcGVyY2FzZSIsInN0ciIsImFycmF5MSIsInNwbGl0IiwibmV3YXJyYXkxIiwieCIsImxlbmd0aCIsInB1c2giLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFVQTs7O2VBQUE7OztBQVZBLFNBQVNBLFVBQVVDLEdBQVc7SUFDNUIsSUFBTUMsU0FBU0QsSUFBSUUsS0FBSyxDQUFDO0lBQ3pCLElBQU1DLFlBQVksRUFBRTtJQUVwQixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUgsT0FBT0ksTUFBTSxFQUFFRCxLQUFLLEVBQUc7UUFDekNELFVBQVVHLElBQUksQ0FBQ0wsTUFBTSxDQUFDRyxFQUFFLENBQUNHLE1BQU0sQ0FBQyxHQUFHQyxXQUFXLEtBQUtQLE1BQU0sQ0FBQ0csRUFBRSxDQUFDSyxLQUFLLENBQUM7SUFDckU7SUFDQSxPQUFPTixVQUFVTyxJQUFJLENBQUM7QUFDeEI7SUFFQSxXQUFlWCJ9