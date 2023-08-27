"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Control", {
    enumerable: true,
    get: function() {
        return Control;
    }
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _reactselect = require("react-select");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var Control = function(props) {
    var children = props.children, innerProps = props.innerProps, tmp = props.selectProps, _ref = tmp === void 0 ? {} : tmp, tmp1 = _ref.// @ts-ignore // TODO: Fix types
    customProps, _ref1 = tmp1 === void 0 ? {} : tmp1, // @ts-ignore // TODO: Fix types
    disableMouseDown = _ref1.disableMouseDown, // @ts-ignore // TODO: Fix types
    disableKeyDown = _ref1.disableKeyDown;
    return /*#__PURE__*/ _react.default.createElement(_reactselect.components.Control, _object_spread_props(_object_spread({}, props), {
        innerProps: _object_spread_props(_object_spread({}, innerProps), {
            onMouseDown: function(e) {
                // we need to prevent react-select from hijacking the 'onMouseDown' event while modals are open (i.e. the 'Relationship' field component)
                if (!disableMouseDown) {
                    innerProps.onMouseDown(e);
                }
            },
            // react-select has this typed incorrectly so we disable the linting rule
            // we need to prevent react-select from hijacking the 'onKeyDown' event while modals are open (i.e. the 'Relationship' field component)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            onKeyDown: function(e) {
                if (disableKeyDown) {
                    e.stopPropagation();
                    // Create event for keydown listeners which specifically want to bypass this stopPropagation
                    var bypassEvent = new CustomEvent("bypassKeyDown", {
                        detail: e
                    });
                    document.dispatchEvent(bypassEvent);
                }
            }
        })
    }), children);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1JlYWN0U2VsZWN0L0NvbnRyb2wvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21wb25lbnRzIGFzIFNlbGVjdENvbXBvbmVudHMsIENvbnRyb2xQcm9wcyB9IGZyb20gJ3JlYWN0LXNlbGVjdCc7XG5pbXBvcnQgdHlwZSB7IE9wdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IENvbnRyb2w6IFJlYWN0LkZDPENvbnRyb2xQcm9wczxPcHRpb24sIGFueT4+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbixcbiAgICBpbm5lclByb3BzLFxuICAgIHNlbGVjdFByb3BzOiB7XG4gICAgICAvLyBAdHMtaWdub3JlIC8vIFRPRE86IEZpeCB0eXBlc1xuICAgICAgY3VzdG9tUHJvcHM6IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZSAvLyBUT0RPOiBGaXggdHlwZXNcbiAgICAgICAgZGlzYWJsZU1vdXNlRG93bixcbiAgICAgICAgLy8gQHRzLWlnbm9yZSAvLyBUT0RPOiBGaXggdHlwZXNcbiAgICAgICAgZGlzYWJsZUtleURvd24sXG4gICAgICB9ID0ge30sXG4gICAgfSA9IHt9LFxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VsZWN0Q29tcG9uZW50cy5Db250cm9sXG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBpbm5lclByb3BzPXt7XG4gICAgICAgIC4uLmlubmVyUHJvcHMsXG4gICAgICAgIG9uTW91c2VEb3duOiAoZSkgPT4ge1xuICAgICAgICAgIC8vIHdlIG5lZWQgdG8gcHJldmVudCByZWFjdC1zZWxlY3QgZnJvbSBoaWphY2tpbmcgdGhlICdvbk1vdXNlRG93bicgZXZlbnQgd2hpbGUgbW9kYWxzIGFyZSBvcGVuIChpLmUuIHRoZSAnUmVsYXRpb25zaGlwJyBmaWVsZCBjb21wb25lbnQpXG4gICAgICAgICAgaWYgKCFkaXNhYmxlTW91c2VEb3duKSB7XG4gICAgICAgICAgICBpbm5lclByb3BzLm9uTW91c2VEb3duKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8gcmVhY3Qtc2VsZWN0IGhhcyB0aGlzIHR5cGVkIGluY29ycmVjdGx5IHNvIHdlIGRpc2FibGUgdGhlIGxpbnRpbmcgcnVsZVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHByZXZlbnQgcmVhY3Qtc2VsZWN0IGZyb20gaGlqYWNraW5nIHRoZSAnb25LZXlEb3duJyBldmVudCB3aGlsZSBtb2RhbHMgYXJlIG9wZW4gKGkuZS4gdGhlICdSZWxhdGlvbnNoaXAnIGZpZWxkIGNvbXBvbmVudClcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIG9uS2V5RG93bjogKGUpID0+IHtcbiAgICAgICAgICBpZiAoZGlzYWJsZUtleURvd24pIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAvLyBDcmVhdGUgZXZlbnQgZm9yIGtleWRvd24gbGlzdGVuZXJzIHdoaWNoIHNwZWNpZmljYWxseSB3YW50IHRvIGJ5cGFzcyB0aGlzIHN0b3BQcm9wYWdhdGlvblxuICAgICAgICAgICAgY29uc3QgYnlwYXNzRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2J5cGFzc0tleURvd24nLCB7IGRldGFpbDogZSB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoYnlwYXNzRXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU2VsZWN0Q29tcG9uZW50cy5Db250cm9sPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJDb250cm9sIiwicHJvcHMiLCJjaGlsZHJlbiIsImlubmVyUHJvcHMiLCJzZWxlY3RQcm9wcyIsImN1c3RvbVByb3BzIiwiZGlzYWJsZU1vdXNlRG93biIsImRpc2FibGVLZXlEb3duIiwiU2VsZWN0Q29tcG9uZW50cyIsIm9uTW91c2VEb3duIiwiZSIsIm9uS2V5RG93biIsInN0b3BQcm9wYWdhdGlvbiIsImJ5cGFzc0V2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJkb2N1bWVudCIsImRpc3BhdGNoRXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBSWFBOzs7ZUFBQUE7Ozs0REFKSzsyQkFDMkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHdEQsSUFBTUEsVUFBK0MsU0FBQ0M7SUFDM0QsSUFDRUMsV0FXRUQsTUFYRkMsVUFDQUMsYUFVRUYsTUFWRkUsWUFDYSxNQVNYRixNQVRGRyxvQkFBYSxpQkFRVCxDQUFDLElBUlEsS0FFRSxZQURiLGdDQUFnQztJQUNoQ0MscUJBQWEsa0JBS1QsQ0FBQyxJQUxRLE1BQ1gsZ0NBQWdDO0lBQ2hDQyx5QkFBQUEsa0JBQ0EsZ0NBQWdDO0lBQ2hDQyx1QkFBQUE7SUFLTixxQkFDRSw2QkFBQ0MsdUJBQWdCLENBQUNSLE9BQU8sMENBQ25CQztRQUNKRSxZQUFZLHdDQUNQQTtZQUNITSxhQUFhLFNBQUNDO2dCQUNaLHlJQUF5STtnQkFDekksSUFBSSxDQUFDSixrQkFBa0I7b0JBQ3JCSCxXQUFXTSxXQUFXLENBQUNDO2dCQUN6QjtZQUNGO1lBQ0EseUVBQXlFO1lBQ3pFLHVJQUF1STtZQUN2SSw2REFBNkQ7WUFDN0QsYUFBYTtZQUNiQyxXQUFXLFNBQUNEO2dCQUNWLElBQUlILGdCQUFnQjtvQkFDbEJHLEVBQUVFLGVBQWU7b0JBQ2pCLDRGQUE0RjtvQkFDNUYsSUFBTUMsY0FBYyxJQUFJQyxZQUFZLGlCQUFpQjt3QkFBRUMsUUFBUUw7b0JBQUU7b0JBQ2pFTSxTQUFTQyxhQUFhLENBQUNKO2dCQUN6QjtZQUNGOztRQUdEWDtBQUdQIn0=