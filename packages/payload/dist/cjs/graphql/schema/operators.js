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
var operators = {
    equality: [
        "equals",
        "not_equals"
    ],
    partial: [
        "like",
        "contains"
    ],
    contains: [
        "in",
        "not_in",
        "all"
    ],
    comparison: [
        "greater_than_equal",
        "greater_than",
        "less_than_equal",
        "less_than"
    ],
    geo: [
        "near"
    ],
    geojson: [
        "within",
        "intersects"
    ]
};
var _default = operators;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS9vcGVyYXRvcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgb3BlcmF0b3JzID0ge1xuICBlcXVhbGl0eTogWydlcXVhbHMnLCAnbm90X2VxdWFscyddLFxuICBwYXJ0aWFsOiBbJ2xpa2UnLCAnY29udGFpbnMnXSxcbiAgY29udGFpbnM6IFsnaW4nLCAnbm90X2luJywgJ2FsbCddLFxuICBjb21wYXJpc29uOiBbJ2dyZWF0ZXJfdGhhbl9lcXVhbCcsICdncmVhdGVyX3RoYW4nLCAnbGVzc190aGFuX2VxdWFsJywgJ2xlc3NfdGhhbiddLFxuICBnZW86IFsnbmVhciddLFxuICBnZW9qc29uOiBbJ3dpdGhpbicsICdpbnRlcnNlY3RzJ10sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBvcGVyYXRvcnM7XG4iXSwibmFtZXMiOlsib3BlcmF0b3JzIiwiZXF1YWxpdHkiLCJwYXJ0aWFsIiwiY29udGFpbnMiLCJjb21wYXJpc29uIiwiZ2VvIiwiZ2VvanNvbiJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFTQTs7O2VBQUE7OztBQVRBLElBQU1BLFlBQVk7SUFDaEJDLFVBQVU7UUFBQztRQUFVO0tBQWE7SUFDbENDLFNBQVM7UUFBQztRQUFRO0tBQVc7SUFDN0JDLFVBQVU7UUFBQztRQUFNO1FBQVU7S0FBTTtJQUNqQ0MsWUFBWTtRQUFDO1FBQXNCO1FBQWdCO1FBQW1CO0tBQVk7SUFDbEZDLEtBQUs7UUFBQztLQUFPO0lBQ2JDLFNBQVM7UUFBQztRQUFVO0tBQWE7QUFDbkM7SUFFQSxXQUFlTiJ9