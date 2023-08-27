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
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _uuid = require("uuid");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var DefaultBlockImage = function() {
    var _useState = _sliced_to_array((0, _react.useState)("pattern".concat((0, _uuid.v4)())), 1), patternID = _useState[0];
    var _useState1 = _sliced_to_array((0, _react.useState)("image".concat((0, _uuid.v4)())), 1), imageID = _useState1[0];
    return /*#__PURE__*/ _react.default.createElement("svg", {
        width: "82",
        height: "53",
        viewBox: "0 0 82 53",
        fill: "none"
    }, /*#__PURE__*/ _react.default.createElement("rect", {
        x: "0.713013",
        width: "80.574",
        height: "52.7791",
        fill: "url(#".concat(patternID, ")")
    }), /*#__PURE__*/ _react.default.createElement("defs", null, /*#__PURE__*/ _react.default.createElement("pattern", {
        id: "".concat(patternID),
        patternContentUnits: "objectBoundingBox",
        width: "1",
        height: "1"
    }, /*#__PURE__*/ _react.default.createElement("use", {
        xlinkHref: "#".concat(imageID),
        transform: "scale(0.00387597 0.00591716)"
    })), /*#__PURE__*/ _react.default.createElement("image", {
        id: imageID,
        width: "258",
        height: "169",
        xlinkHref: "data:image/png;base64,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"
    })));
};
var _default = DefaultBlockImage;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2dyYXBoaWNzL0RlZmF1bHRCbG9ja0ltYWdlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5cbmNvbnN0IERlZmF1bHRCbG9ja0ltYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3BhdHRlcm5JRF0gPSB1c2VTdGF0ZShgcGF0dGVybiR7dXVpZCgpfWApO1xuICBjb25zdCBbaW1hZ2VJRF0gPSB1c2VTdGF0ZShgaW1hZ2Uke3V1aWQoKX1gKTtcblxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiODJcIlxuICAgICAgaGVpZ2h0PVwiNTNcIlxuICAgICAgdmlld0JveD1cIjAgMCA4MiA1M1wiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgPlxuICAgICAgPHJlY3RcbiAgICAgICAgeD1cIjAuNzEzMDEzXCJcbiAgICAgICAgd2lkdGg9XCI4MC41NzRcIlxuICAgICAgICBoZWlnaHQ9XCI1Mi43NzkxXCJcbiAgICAgICAgZmlsbD17YHVybCgjJHtwYXR0ZXJuSUR9KWB9XG4gICAgICAvPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxwYXR0ZXJuXG4gICAgICAgICAgaWQ9e2Ake3BhdHRlcm5JRH1gfVxuICAgICAgICAgIHBhdHRlcm5Db250ZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiXG4gICAgICAgICAgd2lkdGg9XCIxXCJcbiAgICAgICAgICBoZWlnaHQ9XCIxXCJcbiAgICAgICAgPlxuICAgICAgICAgIDx1c2VcbiAgICAgICAgICAgIHhsaW5rSHJlZj17YCMke2ltYWdlSUR9YH1cbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInNjYWxlKDAuMDAzODc1OTcgMC4wMDU5MTcxNilcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcGF0dGVybj5cbiAgICAgICAgPGltYWdlXG4gICAgICAgICAgaWQ9e2ltYWdlSUR9XG4gICAgICAgICAgd2lkdGg9XCIyNThcIlxuICAgICAgICAgIGhlaWdodD1cIjE2OVwiXG4gICAgICAgICAgeGxpbmtIcmVmPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFRSUFBQUNwQ0FZQUFBREE0elBKQUFBTHBrbEVRVlI0QWUyZFNZL1VPaFNGKy8vL0RDU0dIUXVFZ0FWSTdCQklUQUkyekNDR1p1aG1wcUVCUDUzVzh5T3ZLMVVkTzNaeXIvTkZpbEpkWGFseVRvNC9YOTg0emxaZ1FRRVVXTHdDVzR0WEFBRlFBQVVDSU1BRUtJQUNnQUFQb0FBS0JFQ0FDVkFBQlFBQkhrQUJGQWlBQUJPZ0FBb0FBanlBQWlnZ0JiaHFnQTlRQUFVQUFSNUFBUlFnSXNBREtJQUNkQTN3QUFxZ2dCUWdSNEFQVUFBRkFBRWVRQUVVSUNMQUF5aUFBblFOOEFBS29JQVVJRWVBRDFBQUJRQUJIa0FCRkNBaXdBTW9nQUowRGZBQUNxQ0FGQ0JIZ0E5UUFBVUFBUjVBQVJRZ0lzQURLSUFDZEEzd0FBcWdnQlFnUjRBUFVBQUZBQUVlUUFFVUlDTEFBeWlBQW5RTjhBQUtvSUFVSUVlQUQxQUFCUUFCSGtBQkZDQWl3QU1vZ0FKMERmQUFDcUNBRkNCSGdBOVFBQVVBQVI1QUFSUWdJc0FES0lBQ2RBM3dBQXFnZ0JRZ1I0QVBVQUFGQUFFZVFBRVVJQ0xBQXlpQUFuUU44QUFLb0lBVUlFZUFEMUFBQlFBQkhrQUJGQ0Fpd0FNTFZtQi9mejk4Ky9ZdGZQcjBLWHo0OENIczd1NkduWjJkZyszSGp4L0QxNjlmdzQ4ZlA4S2ZQMythVjRtdVFmT25tQVBzS3FES3I0ci85dTNic0wyOVBYZ1ZLUGIyOXBxRkFpRG91b1RYelNydzgrZlBnNVkrcGZMM2ZmYmR1M2ZoKy9mdnpla0VDSm83cFJ4UVZ3R0Y5WW9BK2lyMW1QZlVoVkIwMGNvQ0NGbzVreHpIaWdLcXFHckJ4MVQ0VGZ1K2VmT21tZWdBRUt6WWh6ZGFVRUJkQVZYVVRSVzUxUCtVVlBTK0FBTHZaNUR5cnlpZ1NHQXFDRVNZZUljQklGaXhFVzk0VnVEWHIxL0pWd1JpWlI2NzFWVUZyd3NnOEhybUtQZUtBa29NS29rM3RrTG43cThvUkNEeXVBQUNqMmVOTXZjcW9NRkJ1Wlc0MUg0YWxPUnhBUVFlenhwbFhsSGc5Ky9maytjRjFzSERZeGNCRUt4WWlqYzhLdkRseTVmWm80RUlodmZ2Mzd1VEVCQzRPMlVVK0xBQ3lnMmtEaG1PbGJiV1ZwY3ZQUzJBd05QWm9xeTlDaWdVcjFXaGM3OVhveGs5TFlEQTA5bWlyTDBLMUJoQ25BdUF1SjhpRkU4TElQQjB0aWhycndJMWh4SEhpcDJ6OVhRcEVSRDBXb3MzdlNpZy9FQk9KWjFpSDA5WER3Q0JGOGRUemw0Rk5KeDRpa3FkOHh1Nmt1RmxBUVJlemhUbDdGVkFNd2psVk5JcDl2bjgrWE52bVMyK2FSNEU2bWQ1Nm10WlBNa3RsOG5pRllNSUdVOVhEa3lEUUNkWjQ3ZTFldXB2dFZ6eHJCMGJFVUdaTTJJU0JFb0FhZkxJU05hNEZXSDFQeFlVaUFwbzRFNzBoN1V0T1lKNGxqSzJPckdiTGdmcGZ5MU5FWlVoRWJ0MEZOQTlCdFlBRU12amFXNURNeEdCV25wTjdoQkZQR3JyZlNLSWpwZDVPVklCYThPTG8zYzlEVE0yQVFKUlhiZHZSZ0dIYnJXUDltVlp0Z0thYW55b1o2YjZuUEphbnJxeHM0TWdKZ1J6VHhDSnhHVkRRRWV2RUR6WFA3WDJFNXc4TGJPQlFMUXNPVVo4VENMeDlldlg0ZkhqeCtIUm8wZXNUalc0ZWZObUtMM2V1M2N2eUJzNXNQQjJsV3NXRU5TYVpscjNnYWNtRWk5ZnZoeU9IVHZHaWdhOUhqaDc5bXd5REpTejhOUXRVT1F5T1FoU0VvSTVKTlkrbXJKcXlQTHk1Y3Zla3c4WUFHUFhBN2R1M1VxS0NvYjZiNGhIcC9yTVpDRElUUWptd21CSUl2SCsvZnVBZ0VqZ1NBOWN1WEpsTUFoMGVkdGJOQ0RZVEFJQ2pmNmE0eEtQZmxPL3ZXNEJCTFQ4M1paLzNlc1VFSGk2Wk5pdEYxVkJJRExxeG92Y1ZyM1VmaXBESDZVQkFTQllWL203N3c4RmdhZVJoRjBJNkhVMUVDaHBwK1JkcWNvODludjZFb21BQUJCMEsveTYxME5Bb0NIeGZZM040UXBuOWU4cUlMQXd2M3dmT0RUbW9KdkllZjc4K1pIOXczWG00UDNsUU9UR2pSc2JHelNOR2ZBTWdlSVJnUktDRmtkNUhZYUN5cWl5YWoxLy9qd3dJR0c0MWdPblQ1OE91cnAwMkVQeDd6SGpWeXhGQjhVaWdya1NndkdFcEc1aklsRXcwRUNpTzNmdXNEYW93ZTNidDhQVnExZUR3dnZVOWZyMTYyc2gwTnFJMXRFZ3NKSVFUQVZCL1B5NlJLSWxXbE9XY1FySW8rb1NscnB5cFNoQURVaEx5eWdRYU9ZZ1N3bkJXTGxUdHpvR1prRnF5ZGI5eHhLQmtPTlpRVVNOUnFzK3lRYUJidlJRZUpSYTZheCtYc2ZpNmY3eGZxdno3bEFGVktFVkpTamJMekNvb2tjL2E2dUJRY29sNlpLZ3hnWjRUd1llcFVzeUNCUVNlVWdJNWdKSHhtZ3Q3RHZLQlB3ZkJaSkFJREtXNm1mbFZ0UXA5dE14ZWgwaGhxVlJJRWVCUVNCUVdLUVFhWXBLYU9rM2RNeXRoNFE1cG1HZjloUTRFZ1RxUyszczdDd09BaEZJT3ZaV0UwVHQyWmtqeWxWZ0l3aGFTd2pHeXAyNkpaR1lheS8yODZKQUx3aVVMT3ViVGp5MUFyWDJlZS9qeWIyWWtuSk9yOEFLQ0pRazA2V1QxaXB4cWVPUk5pUVNwemNxdjFoWGdmOUFzTlNFWUM0Z1NDVFdOU2JmUHEwQ0J5Qllla0l3RndZa0VxYzFLNzlXVDRHdHNkT0o1MWFpVnZaVEl0SGJqTFgxN01RM2UxVmdxNVVLT2ZkeHRISTdhalN5N2lZbEZ4TFZhSDhMQ0xhM2l5VkdsVWhNblU3ZG1zV1VLK3BPTDZkWnB4bFVaZTBzbFM4UElDZ0lnaGlWNkY0TTNjdCs2ZElsVit2Rml4Y1BKbW81ZCs1YzZLNFhMbHdJK3AvbDQ3bDI3UnBkdEJGOEFBUVZRSERtekptMU05NHd4Vm05S2M2a096ZU01ZEVBRUJRR2dSNmRSbVd2VjltUDBsYmRNNVowQlFCQllSQThlUEFBRU13NEI2S2VWY2lTcmdBZ0FBUk5nUXNRcEVOQWV3QUNRQUFJOHVwT1Uzc0Jnc0lnZVBqd1lWTVY2NmcrdWJYL0V4SGs4UWtRRkFhQjVzQS9jZUlFTUpnaFQzRDgrSEhtbmN6akFGMkRlTzIvNVBidTNidmgxS2xUd0dCQ0dKdzhlVEk4ZWZJa3N4cXdHeEZCNFlnZ0F1WFZxMWZoMmJObjRlblRwMGV1TDE2OE9Kai9RYVA0U3EyNk8xSnpMdzc1L1JxZjBjekFwWTVseVBjd2ZtQWN6QUJCSlJCRUlBemQ2dWFsN25NWng1eFdLM2VUeGtmTGpUa1c5cDFHQVVCZ0JBUVJHR01yajdXN1NSV1Y2QVltRnRzS0FBSmpJQkFRY2lxUGJneXlQTDBjajVZREJNWHU3b3V0NWxLMlF5dVBsK25sZUxTY1hSZ1FFUmlNQ0xxZzJ6UUxrcUlBSmRLNm43ZittaG1oYmNJQUVCZ0hnU3AyWCtWUmxueDNkOWNWQkxxUUdwc0xzVm1kL0pZS0VEZ0FRYXhBOGJtTTFoS0NzWHlwV3g0dFp3Y2NnTUFSQ0ZUUkZCMmtWampybjJkRzZQbUJBQWljZ2NCNnBjNHQzNlpjeVB6VnBQMFNBQUpBWUNiQzZNdUZ0RjhGYlJ3aElBQUVaa0FRb3drZUxUYzlIQUFCSURBSEFnR0JSOHROQ3dOQUFBaE1naUJHQnlRU3B3RUNJQUFFcGtFZ0lKQklyQThEUUFBSXpJTkFNRkFpa1VmTDFRTUNJQUFFTGtBUXV3cXRQVnF1WHRWTysyWkFBQWhjZ1VCQWFPSFJjbW5WdFA2bkFRRWdjQWVDR0Izb2hpdVdNZ29BQWtEZ0ZnUUNnbTY4WXBxeThUQUFCSURBTlFnRUF4S0pnTUM5aVdPWXkzYjg0K2xKSk9ZRGdZaUFpS0FwbUdvV3BQMzkvZndhc2RBOUFRRWdhQW9FTWJJcU5TUDBVcmdBQ0FCQmt5QVFFRWdrRHNjWUlBQUV6WUpBTU1pWkVYcDQ5V25uazRBQUVEUU5ndGhWR0RvamREdFZPKzFJQUFFZ1dBUUlCQVFTaWV2aEFBZ0F3V0pBSUJob3pBR0p4RlVnQUFKQXNDZ1F4SzRDMDZuL0h3YUFBQkFzRWdRQ0FvbkV2ekFBQklCZ3NTQ0kwUUdKeEJBQUFTQllQQWdFaEtVL2x4RVFBQUpBOEs4SGxqeWRPaUFBQklEZ2tBZmlvK1grOXFEYmZ3VUlEcGtnOWh2WmpyOGIwTE9HUzNzdUl5QUFCRVFFR3p5d2xPblVBY0VHRTNodTBTaDd1WWhtQ2RPcEF3SkFRRVF3d0FPdEp4SUJ3UUFUMExxV2ExMjlhOW5xY3hrQkFTQWdJa2owUUl2UFpRUUVpU2J3M3FKUi9uTFJUVXVKUkVBQUNJZ0lSbmlnbFVRaUlCaGhBbHJYY3Eyclp5MWJtRTRkRUFBQ0lvSkNIdkE4blRvZ0tHUUN6eTBhWlM4WDJYaDlMaU1nQUFSRUJCVTg0TzI1aklDZ2dnbG9ZY3Uxc0o2MTlEU2RPaUFBQkVRRUZUM2dKWkVJQ0NxYXdITnJSdG5MUmpYV0U0bUFBQkFRRVV6a0FjdlRxUU9DaVV4QUMxdTJoZldzcDhYcDFBRUJJQ0FpbU1FRDFoS0pnR0FHRTNodXpTaDd1Y2pHMG5UcWdBQVFFQkhNN0FFTDA2a0RncGxOUUF0YnJvWDFyT1hjaVVSQUFBaUlDSXg0UUdNTzVrb2tBZ0lqSnZEY21sSDJzbEhOSE05bEJBU0FnSWpBb0FlbVRpUUNBb01tb0lVdDI4SjYxbk9xUkNJZ0FBUkVCTVk5TU1Vc1NJREF1QWs4dDJhVXZWeGtVM3M2ZFVBQUNJZ0lISG1nMW5NWkFZRWpFOURDbG10aFBXdFpZenAxUUFBSWlBaWNlcURrZE9xQXdLa0pQTGRvbEwxY1pGTXFrYmlsa1V5c2FJQUgvSHBnYjI4dmpGMytBYlNiNDhtY1hPOXRBQUFBQUVsRlRrU3VRbUNDXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGVmcz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlZmF1bHRCbG9ja0ltYWdlO1xuIl0sIm5hbWVzIjpbIkRlZmF1bHRCbG9ja0ltYWdlIiwidXNlU3RhdGUiLCJ1dWlkIiwicGF0dGVybklEIiwiaW1hZ2VJRCIsInN2ZyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJyZWN0IiwieCIsImRlZnMiLCJwYXR0ZXJuIiwiaWQiLCJwYXR0ZXJuQ29udGVudFVuaXRzIiwidXNlIiwieGxpbmtIcmVmIiwidHJhbnNmb3JtIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7K0JBMkNBOzs7ZUFBQTs7OzZEQTNDZ0M7b0JBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQU1BLG9CQUE4QjtJQUNsQyxJQUFvQkMsNkJBQUFBLElBQUFBLGVBQVEsRUFBQyxBQUFDLFVBQWdCLE9BQVBDLElBQUFBLFFBQUksV0FBcENDLFlBQWFGO0lBQ3BCLElBQWtCQSw4QkFBQUEsSUFBQUEsZUFBUSxFQUFDLEFBQUMsUUFBYyxPQUFQQyxJQUFBQSxRQUFJLFdBQWhDRSxVQUFXSDtJQUVsQixxQkFDRSw2QkFBQ0k7UUFDQ0MsT0FBTTtRQUNOQyxRQUFPO1FBQ1BDLFNBQVE7UUFDUkMsTUFBSztxQkFFTCw2QkFBQ0M7UUFDQ0MsR0FBRTtRQUNGTCxPQUFNO1FBQ05DLFFBQU87UUFDUEUsTUFBTSxBQUFDLFFBQWlCLE9BQVZOLFdBQVU7c0JBRTFCLDZCQUFDUyw0QkFDQyw2QkFBQ0M7UUFDQ0MsSUFBSSxBQUFDLEdBQVksT0FBVlg7UUFDUFkscUJBQW9CO1FBQ3BCVCxPQUFNO1FBQ05DLFFBQU87cUJBRVAsNkJBQUNTO1FBQ0NDLFdBQVcsQUFBQyxJQUFXLE9BQVJiO1FBQ2ZjLFdBQVU7dUJBR2QsNkJBQUNDO1FBQ0NMLElBQUlWO1FBQ0pFLE9BQU07UUFDTkMsUUFBTztRQUNQVSxXQUFVOztBQUtwQjtJQUVBLFdBQWVqQiJ9