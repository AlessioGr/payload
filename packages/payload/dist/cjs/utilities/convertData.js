/* eslint-disable no-param-reassign */ "use strict";
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
    convertArrayToHash: function() {
        return convertArrayToHash;
    },
    convertObjectToArray: function() {
        return convertObjectToArray;
    },
    convertArrayToObject: function() {
        return convertArrayToObject;
    }
});
var convertArrayToObject = function(arr, key) {
    return arr.reduce(function(obj, item) {
        if (key) {
            obj[item[key]] = item;
            return obj;
        }
        obj[item] = {};
        return obj;
    }, {});
};
var convertObjectToArray = function(arr) {
    return Object.values(arr);
};
var convertArrayToHash = function(arr, key) {
    return arr.reduce(function(obj, item, i) {
        obj[item[key]] = i;
        return obj;
    }, {});
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvY29udmVydERhdGEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmNvbnN0IGNvbnZlcnRBcnJheVRvT2JqZWN0ID0gKGFyciwga2V5KSA9PiBhcnIucmVkdWNlKChvYmosIGl0ZW0pID0+IHtcbiAgaWYgKGtleSkge1xuICAgIG9ialtpdGVtW2tleV1dID0gaXRlbTtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgb2JqW2l0ZW1dID0ge307XG4gIHJldHVybiBvYmo7XG59LCB7fSk7XG5cbmNvbnN0IGNvbnZlcnRPYmplY3RUb0FycmF5ID0gKGFycikgPT4gT2JqZWN0LnZhbHVlcyhhcnIpO1xuXG5jb25zdCBjb252ZXJ0QXJyYXlUb0hhc2ggPSAoYXJyLCBrZXkpID0+IGFyci5yZWR1Y2UoKG9iaiwgaXRlbSwgaSkgPT4ge1xuICBvYmpbaXRlbVtrZXldXSA9IGk7XG4gIHJldHVybiBvYmo7XG59LCB7fSk7XG5cbmV4cG9ydCB7XG4gIGNvbnZlcnRBcnJheVRvSGFzaCxcbiAgY29udmVydE9iamVjdFRvQXJyYXksXG4gIGNvbnZlcnRBcnJheVRvT2JqZWN0LFxufTtcbiJdLCJuYW1lcyI6WyJjb252ZXJ0QXJyYXlUb0hhc2giLCJjb252ZXJ0T2JqZWN0VG9BcnJheSIsImNvbnZlcnRBcnJheVRvT2JqZWN0IiwiYXJyIiwia2V5IiwicmVkdWNlIiwib2JqIiwiaXRlbSIsIk9iamVjdCIsInZhbHVlcyIsImkiXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7Ozs7Ozs7Ozs7SUFtQmxDQSxrQkFBa0I7ZUFBbEJBOztJQUNBQyxvQkFBb0I7ZUFBcEJBOztJQUNBQyxvQkFBb0I7ZUFBcEJBOzs7QUFwQkYsSUFBTUEsdUJBQXVCLFNBQUNDLEtBQUtDO1dBQVFELElBQUlFLE1BQU0sQ0FBQyxTQUFDQyxLQUFLQztRQUMxRCxJQUFJSCxLQUFLO1lBQ1BFLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDSCxJQUFJLENBQUMsR0FBR0c7WUFDakIsT0FBT0Q7UUFDVDtRQUVBQSxHQUFHLENBQUNDLEtBQUssR0FBRyxDQUFDO1FBQ2IsT0FBT0Q7SUFDVCxHQUFHLENBQUM7O0FBRUosSUFBTUwsdUJBQXVCLFNBQUNFO1dBQVFLLE9BQU9DLE1BQU0sQ0FBQ047O0FBRXBELElBQU1ILHFCQUFxQixTQUFDRyxLQUFLQztXQUFRRCxJQUFJRSxNQUFNLENBQUMsU0FBQ0MsS0FBS0MsTUFBTUc7UUFDOURKLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDSCxJQUFJLENBQUMsR0FBR007UUFDakIsT0FBT0o7SUFDVCxHQUFHLENBQUMifQ==