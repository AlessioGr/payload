function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
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
export function reducer(state, action) {
    switch(action.type){
        case "REQUEST":
            {
                var newState = _object_spread({}, state);
                action.docs.forEach(function(param) {
                    var relationTo = param.relationTo, value = param.value;
                    if (typeof newState[relationTo] !== "object") {
                        newState[relationTo] = {};
                    }
                    newState[relationTo][value] = null;
                });
                return newState;
            }
        case "ADD_LOADED":
            {
                var newState1 = _object_spread({}, state);
                if (typeof newState1[action.relationTo] !== "object") {
                    newState1[action.relationTo] = {};
                }
                var unreturnedIDs = _to_consumable_array(action.idsToLoad);
                if (Array.isArray(action.docs)) {
                    action.docs.forEach(function(doc) {
                        unreturnedIDs.splice(unreturnedIDs.indexOf(doc.id), 1);
                        newState1[action.relationTo][doc.id] = doc;
                    });
                }
                unreturnedIDs.forEach(function(id) {
                    newState1[action.relationTo][id] = false;
                });
                return newState1;
            }
        default:
            {
                return state;
            }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvUmVsYXRpb25zaGlwUHJvdmlkZXIvcmVkdWNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2N1bWVudHMgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IFR5cGVXaXRoSUQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuXG50eXBlIFJlcXVlc3REb2N1bWVudHMgPSB7XG4gIHR5cGU6ICdSRVFVRVNUJyxcbiAgZG9jczogeyByZWxhdGlvblRvOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfVtdLFxufVxuXG50eXBlIEFkZExvYWRlZERvY3VtZW50cyA9IHtcbiAgdHlwZTogJ0FERF9MT0FERUQnLFxuICByZWxhdGlvblRvOiBzdHJpbmcsXG4gIGRvY3M6IFR5cGVXaXRoSURbXSxcbiAgaWRzVG9Mb2FkOiAoc3RyaW5nIHwgbnVtYmVyKVtdXG59XG5cbnR5cGUgQWN0aW9uID0gUmVxdWVzdERvY3VtZW50cyB8IEFkZExvYWRlZERvY3VtZW50cztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGU6IERvY3VtZW50cywgYWN0aW9uOiBBY3Rpb24pOiBEb2N1bWVudHMge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnUkVRVUVTVCc6IHtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0geyAuLi5zdGF0ZSB9O1xuXG4gICAgICBhY3Rpb24uZG9jcy5mb3JFYWNoKCh7IHJlbGF0aW9uVG8sIHZhbHVlIH0pID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBuZXdTdGF0ZVtyZWxhdGlvblRvXSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBuZXdTdGF0ZVtyZWxhdGlvblRvXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIG5ld1N0YXRlW3JlbGF0aW9uVG9dW3ZhbHVlXSA9IG51bGw7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH1cblxuICAgIGNhc2UgJ0FERF9MT0FERUQnOiB7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcbiAgICAgIGlmICh0eXBlb2YgbmV3U3RhdGVbYWN0aW9uLnJlbGF0aW9uVG9dICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBuZXdTdGF0ZVthY3Rpb24ucmVsYXRpb25Ub10gPSB7fTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHVucmV0dXJuZWRJRHMgPSBbLi4uYWN0aW9uLmlkc1RvTG9hZF07XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFjdGlvbi5kb2NzKSkge1xuICAgICAgICBhY3Rpb24uZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICB1bnJldHVybmVkSURzLnNwbGljZSh1bnJldHVybmVkSURzLmluZGV4T2YoZG9jLmlkKSwgMSk7XG4gICAgICAgICAgbmV3U3RhdGVbYWN0aW9uLnJlbGF0aW9uVG9dW2RvYy5pZF0gPSBkb2M7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB1bnJldHVybmVkSURzLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgIG5ld1N0YXRlW2FjdGlvbi5yZWxhdGlvblRvXVtpZF0gPSBmYWxzZTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJuZXdTdGF0ZSIsImRvY3MiLCJmb3JFYWNoIiwicmVsYXRpb25UbyIsInZhbHVlIiwidW5yZXR1cm5lZElEcyIsImlkc1RvTG9hZCIsIkFycmF5IiwiaXNBcnJheSIsImRvYyIsInNwbGljZSIsImluZGV4T2YiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsT0FBTyxTQUFTQSxRQUFRQyxLQUFnQixFQUFFQyxNQUFjO0lBQ3RELE9BQVFBLE9BQU9DLElBQUk7UUFDakIsS0FBSztZQUFXO2dCQUNkLElBQU1DLFdBQVcsbUJBQUtIO2dCQUV0QkMsT0FBT0csSUFBSSxDQUFDQyxPQUFPLENBQUM7d0JBQUdDLG1CQUFBQSxZQUFZQyxjQUFBQTtvQkFDakMsSUFBSSxPQUFPSixRQUFRLENBQUNHLFdBQVcsS0FBSyxVQUFVO3dCQUM1Q0gsUUFBUSxDQUFDRyxXQUFXLEdBQUcsQ0FBQztvQkFDMUI7b0JBQ0FILFFBQVEsQ0FBQ0csV0FBVyxDQUFDQyxNQUFNLEdBQUc7Z0JBQ2hDO2dCQUVBLE9BQU9KO1lBQ1Q7UUFFQSxLQUFLO1lBQWM7Z0JBQ2pCLElBQU1BLFlBQVcsbUJBQUtIO2dCQUN0QixJQUFJLE9BQU9HLFNBQVEsQ0FBQ0YsT0FBT0ssVUFBVSxDQUFDLEtBQUssVUFBVTtvQkFDbkRILFNBQVEsQ0FBQ0YsT0FBT0ssVUFBVSxDQUFDLEdBQUcsQ0FBQztnQkFDakM7Z0JBQ0EsSUFBTUUsZ0JBQWlCLHFCQUFHUCxPQUFPUSxTQUFTO2dCQUUxQyxJQUFJQyxNQUFNQyxPQUFPLENBQUNWLE9BQU9HLElBQUksR0FBRztvQkFDOUJILE9BQU9HLElBQUksQ0FBQ0MsT0FBTyxDQUFDLFNBQUNPO3dCQUNuQkosY0FBY0ssTUFBTSxDQUFDTCxjQUFjTSxPQUFPLENBQUNGLElBQUlHLEVBQUUsR0FBRzt3QkFDcERaLFNBQVEsQ0FBQ0YsT0FBT0ssVUFBVSxDQUFDLENBQUNNLElBQUlHLEVBQUUsQ0FBQyxHQUFHSDtvQkFDeEM7Z0JBQ0Y7Z0JBRUFKLGNBQWNILE9BQU8sQ0FBQyxTQUFDVTtvQkFDckJaLFNBQVEsQ0FBQ0YsT0FBT0ssVUFBVSxDQUFDLENBQUNTLEdBQUcsR0FBRztnQkFDcEM7Z0JBRUEsT0FBT1o7WUFDVDtRQUVBO1lBQVM7Z0JBQ1AsT0FBT0g7WUFDVDtJQUNGO0FBQ0YifQ==