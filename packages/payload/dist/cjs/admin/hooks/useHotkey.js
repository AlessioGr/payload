/* eslint-disable no-shadow */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _react = require("react");
var _modal = /*#__PURE__*/ _interop_require_default(require("@faceless-ui/modal"));
var _setsAreEqual = require("../utilities/setsAreEqual");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
// Required to be outside of hook, else debounce would be necessary
// and then one could not prevent the default behaviour.
var pressedKeys = new Set([]);
var map = {
    metaleft: "meta",
    metaright: "meta",
    osleft: "meta",
    osright: "meta",
    shiftleft: "shift",
    shiftright: "shift",
    ctrlleft: "ctrl",
    ctrlright: "ctrl",
    controlleft: "ctrl",
    controlright: "ctrl",
    altleft: "alt",
    altright: "alt",
    escape: "esc"
};
var stripKey = function(key) {
    return (map[key.toLowerCase()] || key).trim().toLowerCase().replace("key", "");
};
var pushToKeys = function(code) {
    var key = stripKey(code);
    // There is a weird bug with macos that if the keys are not cleared they remain in the
    // pressed keys set.
    if (key === "meta") {
        pressedKeys.forEach(function(pressedKey) {
            return pressedKey !== "meta" && pressedKeys.delete(pressedKey);
        });
    }
    pressedKeys.add(key);
};
var removeFromKeys = function(code) {
    var key = stripKey(code);
    // There is a weird bug with macos that if the keys are not cleared they remain in the
    // pressed keys set.
    if (key === "meta") {
        pressedKeys.clear();
    }
    pressedKeys.delete(key);
};
/**
 * Hook function to work with hotkeys.
 * @param param0.keyCode {string[]} The keys to listen for (`Event.code` without `'Key'` and lowercased)
 * @param param0.cmdCtrlKey {boolean} Whether Ctrl on windows or Cmd on mac must be pressed
 * @param param0.editDepth {boolean} This ensures that the hotkey is only triggered for the most top-level drawer in case there are nested drawers
 * @param func The callback function
 */ var useHotkey = function(options, func) {
    var keyCodes = options.keyCodes, cmdCtrlKey = options.cmdCtrlKey, editDepth = options.editDepth;
    var useModal = _modal.default.useModal;
    var modalState = useModal().modalState;
    var keydown = (0, _react.useCallback)(function(event) {
        var _event_detail;
        var e = ((_event_detail = event.detail) === null || _event_detail === void 0 ? void 0 : _event_detail.key) ? event.detail : event;
        if (e.key === undefined) {
            // Autofill events, or other synthetic events, can be ignored
            return;
        }
        if (e.code) pushToKeys(e.code);
        // Check for Mac and iPad
        var hasCmd = window.navigator.userAgent.includes("Mac OS X");
        var pressedWithoutModifier = _to_consumable_array(pressedKeys).filter(function(key) {
            return ![
                "meta",
                "ctrl",
                "alt",
                "shift"
            ].includes(key);
        });
        // Check whether arrays contain the same values (regardless of number of occurrences)
        if ((0, _setsAreEqual.setsAreEqual)(new Set(pressedWithoutModifier), new Set(keyCodes)) && (!cmdCtrlKey || hasCmd && pressedKeys.has("meta") || !hasCmd && e.ctrlKey)) {
            var _Object_keys_filter;
            var _ref;
            // get the maximum edit depth by counting the number of open drawers. modalState is and object which contains the state of all drawers.
            var maxEditDepth = (_ref = ((_Object_keys_filter = Object.keys(modalState).filter(function(key) {
                var _modalState_key;
                return (_modalState_key = modalState[key]) === null || _modalState_key === void 0 ? void 0 : _modalState_key.isOpen;
            })) === null || _Object_keys_filter === void 0 ? void 0 : _Object_keys_filter.length) + 1) !== null && _ref !== void 0 ? _ref : 1;
            if (maxEditDepth !== editDepth) {
                // We only want to execute the hotkey from the most top-level drawer / edit depth.
                return;
            }
            // execute the function associated with the maximum edit depth
            func(e);
        }
    }, [
        keyCodes,
        cmdCtrlKey,
        editDepth,
        modalState,
        func
    ]);
    var keyup = (0, _react.useCallback)(function(e) {
        if (e.code) removeFromKeys(e.code);
    }, []);
    (0, _react.useEffect)(function() {
        document.addEventListener("keydown", keydown, false);
        document.addEventListener("bypassKeyDown", keydown, false); // this is called if the keydown event's propagation is stopped by react-select
        document.addEventListener("keyup", keyup, false);
        return function() {
            document.removeEventListener("keydown", keydown);
            document.removeEventListener("bypassKeyDown", keydown);
            document.removeEventListener("keyup", keyup);
        };
    }, [
        keydown,
        keyup
    ]);
};
var _default = useHotkey;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZG1pbi9ob29rcy91c2VIb3RrZXkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXNoYWRvdyAqL1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmYWNlbGVzc3VpIGZyb20gJ0BmYWNlbGVzcy11aS9tb2RhbCc7XG5pbXBvcnQgeyBzZXRzQXJlRXF1YWwgfSBmcm9tICcuLi91dGlsaXRpZXMvc2V0c0FyZUVxdWFsJztcblxuLy8gUmVxdWlyZWQgdG8gYmUgb3V0c2lkZSBvZiBob29rLCBlbHNlIGRlYm91bmNlIHdvdWxkIGJlIG5lY2Vzc2FyeVxuLy8gYW5kIHRoZW4gb25lIGNvdWxkIG5vdCBwcmV2ZW50IHRoZSBkZWZhdWx0IGJlaGF2aW91ci5cbmNvbnN0IHByZXNzZWRLZXlzID0gbmV3IFNldDxzdHJpbmc+KFtdKTtcblxuY29uc3QgbWFwID0ge1xuICBtZXRhbGVmdDogJ21ldGEnLFxuICBtZXRhcmlnaHQ6ICdtZXRhJyxcbiAgb3NsZWZ0OiAnbWV0YScsXG4gIG9zcmlnaHQ6ICdtZXRhJyxcbiAgc2hpZnRsZWZ0OiAnc2hpZnQnLFxuICBzaGlmdHJpZ2h0OiAnc2hpZnQnLFxuICBjdHJsbGVmdDogJ2N0cmwnLFxuICBjdHJscmlnaHQ6ICdjdHJsJyxcbiAgY29udHJvbGxlZnQ6ICdjdHJsJyxcbiAgY29udHJvbHJpZ2h0OiAnY3RybCcsXG4gIGFsdGxlZnQ6ICdhbHQnLFxuICBhbHRyaWdodDogJ2FsdCcsXG4gIGVzY2FwZTogJ2VzYycsXG59O1xuXG5jb25zdCBzdHJpcEtleSA9IChrZXk6IHN0cmluZykgPT4ge1xuICByZXR1cm4gKG1hcFtrZXkudG9Mb3dlckNhc2UoKV0gfHwga2V5KS50cmltKClcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5yZXBsYWNlKCdrZXknLCAnJyk7XG59O1xuXG5jb25zdCBwdXNoVG9LZXlzID0gKGNvZGU6IHN0cmluZykgPT4ge1xuICBjb25zdCBrZXkgPSBzdHJpcEtleShjb2RlKTtcblxuICAvLyBUaGVyZSBpcyBhIHdlaXJkIGJ1ZyB3aXRoIG1hY29zIHRoYXQgaWYgdGhlIGtleXMgYXJlIG5vdCBjbGVhcmVkIHRoZXkgcmVtYWluIGluIHRoZVxuICAvLyBwcmVzc2VkIGtleXMgc2V0LlxuICBpZiAoa2V5ID09PSAnbWV0YScpIHtcbiAgICBwcmVzc2VkS2V5cy5mb3JFYWNoKChwcmVzc2VkS2V5KSA9PiBwcmVzc2VkS2V5ICE9PSAnbWV0YScgJiYgcHJlc3NlZEtleXMuZGVsZXRlKHByZXNzZWRLZXkpKTtcbiAgfVxuXG4gIHByZXNzZWRLZXlzLmFkZChrZXkpO1xufTtcblxuY29uc3QgcmVtb3ZlRnJvbUtleXMgPSAoY29kZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGtleSA9IHN0cmlwS2V5KGNvZGUpO1xuICAvLyBUaGVyZSBpcyBhIHdlaXJkIGJ1ZyB3aXRoIG1hY29zIHRoYXQgaWYgdGhlIGtleXMgYXJlIG5vdCBjbGVhcmVkIHRoZXkgcmVtYWluIGluIHRoZVxuICAvLyBwcmVzc2VkIGtleXMgc2V0LlxuICBpZiAoa2V5ID09PSAnbWV0YScpIHtcbiAgICBwcmVzc2VkS2V5cy5jbGVhcigpO1xuICB9XG4gIHByZXNzZWRLZXlzLmRlbGV0ZShrZXkpO1xufTtcblxuLyoqXG4gKiBIb29rIGZ1bmN0aW9uIHRvIHdvcmsgd2l0aCBob3RrZXlzLlxuICogQHBhcmFtIHBhcmFtMC5rZXlDb2RlIHtzdHJpbmdbXX0gVGhlIGtleXMgdG8gbGlzdGVuIGZvciAoYEV2ZW50LmNvZGVgIHdpdGhvdXQgYCdLZXknYCBhbmQgbG93ZXJjYXNlZClcbiAqIEBwYXJhbSBwYXJhbTAuY21kQ3RybEtleSB7Ym9vbGVhbn0gV2hldGhlciBDdHJsIG9uIHdpbmRvd3Mgb3IgQ21kIG9uIG1hYyBtdXN0IGJlIHByZXNzZWRcbiAqIEBwYXJhbSBwYXJhbTAuZWRpdERlcHRoIHtib29sZWFufSBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgaG90a2V5IGlzIG9ubHkgdHJpZ2dlcmVkIGZvciB0aGUgbW9zdCB0b3AtbGV2ZWwgZHJhd2VyIGluIGNhc2UgdGhlcmUgYXJlIG5lc3RlZCBkcmF3ZXJzXG4gKiBAcGFyYW0gZnVuYyBUaGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAqL1xuY29uc3QgdXNlSG90a2V5ID0gKG9wdGlvbnM6IHtcbiAga2V5Q29kZXM6IHN0cmluZ1tdXG4gIGNtZEN0cmxLZXk6IGJvb2xlYW5cbiAgZWRpdERlcHRoOiBudW1iZXJcbn0sIGZ1bmM6IChlOiBLZXlib2FyZEV2ZW50KSA9PiB2b2lkKTogdm9pZCA9PiB7XG4gIGNvbnN0IHsga2V5Q29kZXMsIGNtZEN0cmxLZXksIGVkaXREZXB0aCB9ID0gb3B0aW9ucztcbiAgY29uc3QgeyB1c2VNb2RhbCB9ID0gZmFjZWxlc3N1aTtcblxuICBjb25zdCB7IG1vZGFsU3RhdGUgfSA9IHVzZU1vZGFsKCk7XG5cblxuICBjb25zdCBrZXlkb3duID0gdXNlQ2FsbGJhY2soKGV2ZW50OiBLZXlib2FyZEV2ZW50IHwgQ3VzdG9tRXZlbnQpID0+IHtcbiAgICBjb25zdCBlOiBLZXlib2FyZEV2ZW50ID0gZXZlbnQuZGV0YWlsPy5rZXkgPyBldmVudC5kZXRhaWwgOiBldmVudDtcbiAgICBpZiAoZS5rZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQXV0b2ZpbGwgZXZlbnRzLCBvciBvdGhlciBzeW50aGV0aWMgZXZlbnRzLCBjYW4gYmUgaWdub3JlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlKSBwdXNoVG9LZXlzKGUuY29kZSk7XG5cbiAgICAvLyBDaGVjayBmb3IgTWFjIGFuZCBpUGFkXG4gICAgY29uc3QgaGFzQ21kID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoJ01hYyBPUyBYJyk7XG4gICAgY29uc3QgcHJlc3NlZFdpdGhvdXRNb2RpZmllciA9IFsuLi5wcmVzc2VkS2V5c10uZmlsdGVyKChrZXkpID0+ICFbJ21ldGEnLCAnY3RybCcsICdhbHQnLCAnc2hpZnQnXS5pbmNsdWRlcyhrZXkpKTtcblxuICAgIC8vIENoZWNrIHdoZXRoZXIgYXJyYXlzIGNvbnRhaW4gdGhlIHNhbWUgdmFsdWVzIChyZWdhcmRsZXNzIG9mIG51bWJlciBvZiBvY2N1cnJlbmNlcylcbiAgICBpZiAoXG4gICAgICBzZXRzQXJlRXF1YWwobmV3IFNldChwcmVzc2VkV2l0aG91dE1vZGlmaWVyKSwgbmV3IFNldChrZXlDb2RlcykpXG4gICAgICAmJiAoIWNtZEN0cmxLZXkgfHwgKGhhc0NtZCAmJiBwcmVzc2VkS2V5cy5oYXMoJ21ldGEnKSkgfHwgKCFoYXNDbWQgJiYgZS5jdHJsS2V5KSlcbiAgICApIHtcbiAgICAgIC8vIGdldCB0aGUgbWF4aW11bSBlZGl0IGRlcHRoIGJ5IGNvdW50aW5nIHRoZSBudW1iZXIgb2Ygb3BlbiBkcmF3ZXJzLiBtb2RhbFN0YXRlIGlzIGFuZCBvYmplY3Qgd2hpY2ggY29udGFpbnMgdGhlIHN0YXRlIG9mIGFsbCBkcmF3ZXJzLlxuICAgICAgY29uc3QgbWF4RWRpdERlcHRoID0gT2JqZWN0LmtleXMobW9kYWxTdGF0ZSkuZmlsdGVyKChrZXkpID0+IG1vZGFsU3RhdGVba2V5XT8uaXNPcGVuKT8ubGVuZ3RoICsgMSA/PyAxO1xuXG4gICAgICBpZiAobWF4RWRpdERlcHRoICE9PSBlZGl0RGVwdGgpIHtcbiAgICAgICAgLy8gV2Ugb25seSB3YW50IHRvIGV4ZWN1dGUgdGhlIGhvdGtleSBmcm9tIHRoZSBtb3N0IHRvcC1sZXZlbCBkcmF3ZXIgLyBlZGl0IGRlcHRoLlxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBleGVjdXRlIHRoZSBmdW5jdGlvbiBhc3NvY2lhdGVkIHdpdGggdGhlIG1heGltdW0gZWRpdCBkZXB0aFxuICAgICAgZnVuYyhlKTtcbiAgICB9XG4gIH0sIFtrZXlDb2RlcywgY21kQ3RybEtleSwgZWRpdERlcHRoLCBtb2RhbFN0YXRlLCBmdW5jXSk7XG5cbiAgY29uc3Qga2V5dXAgPSB1c2VDYWxsYmFjaygoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmIChlLmNvZGUpIHJlbW92ZUZyb21LZXlzKGUuY29kZSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlkb3duLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYnlwYXNzS2V5RG93bicsIGtleWRvd24sIGZhbHNlKTsgLy8gdGhpcyBpcyBjYWxsZWQgaWYgdGhlIGtleWRvd24gZXZlbnQncyBwcm9wYWdhdGlvbiBpcyBzdG9wcGVkIGJ5IHJlYWN0LXNlbGVjdFxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5dXAsIGZhbHNlKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5ZG93bik7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdieXBhc3NLZXlEb3duJywga2V5ZG93bik7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleXVwKTtcbiAgICB9O1xuICB9LCBba2V5ZG93biwga2V5dXBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUhvdGtleTtcbiJdLCJuYW1lcyI6WyJwcmVzc2VkS2V5cyIsIlNldCIsIm1hcCIsIm1ldGFsZWZ0IiwibWV0YXJpZ2h0Iiwib3NsZWZ0Iiwib3NyaWdodCIsInNoaWZ0bGVmdCIsInNoaWZ0cmlnaHQiLCJjdHJsbGVmdCIsImN0cmxyaWdodCIsImNvbnRyb2xsZWZ0IiwiY29udHJvbHJpZ2h0IiwiYWx0bGVmdCIsImFsdHJpZ2h0IiwiZXNjYXBlIiwic3RyaXBLZXkiLCJrZXkiLCJ0b0xvd2VyQ2FzZSIsInRyaW0iLCJyZXBsYWNlIiwicHVzaFRvS2V5cyIsImNvZGUiLCJmb3JFYWNoIiwicHJlc3NlZEtleSIsImRlbGV0ZSIsImFkZCIsInJlbW92ZUZyb21LZXlzIiwiY2xlYXIiLCJ1c2VIb3RrZXkiLCJvcHRpb25zIiwiZnVuYyIsImtleUNvZGVzIiwiY21kQ3RybEtleSIsImVkaXREZXB0aCIsInVzZU1vZGFsIiwiZmFjZWxlc3N1aSIsIm1vZGFsU3RhdGUiLCJrZXlkb3duIiwidXNlQ2FsbGJhY2siLCJldmVudCIsImUiLCJkZXRhaWwiLCJ1bmRlZmluZWQiLCJoYXNDbWQiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmNsdWRlcyIsInByZXNzZWRXaXRob3V0TW9kaWZpZXIiLCJmaWx0ZXIiLCJzZXRzQXJlRXF1YWwiLCJoYXMiLCJjdHJsS2V5IiwiT2JqZWN0IiwibWF4RWRpdERlcHRoIiwia2V5cyIsImlzT3BlbiIsImxlbmd0aCIsImtleXVwIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCOzs7OytCQXFINUI7OztlQUFBOzs7cUJBcEh1Qzs0REFDaEI7NEJBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsbUVBQW1FO0FBQ25FLHdEQUF3RDtBQUN4RCxJQUFNQSxjQUFjLElBQUlDLElBQVksRUFBRTtBQUV0QyxJQUFNQyxNQUFNO0lBQ1ZDLFVBQVU7SUFDVkMsV0FBVztJQUNYQyxRQUFRO0lBQ1JDLFNBQVM7SUFDVEMsV0FBVztJQUNYQyxZQUFZO0lBQ1pDLFVBQVU7SUFDVkMsV0FBVztJQUNYQyxhQUFhO0lBQ2JDLGNBQWM7SUFDZEMsU0FBUztJQUNUQyxVQUFVO0lBQ1ZDLFFBQVE7QUFDVjtBQUVBLElBQU1DLFdBQVcsU0FBQ0M7SUFDaEIsT0FBTyxBQUFDZixDQUFBQSxHQUFHLENBQUNlLElBQUlDLFdBQVcsR0FBRyxJQUFJRCxHQUFFLEVBQUdFLElBQUksR0FDeENELFdBQVcsR0FDWEUsT0FBTyxD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