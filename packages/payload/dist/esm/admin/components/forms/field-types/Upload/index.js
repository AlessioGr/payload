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
import React, { useCallback } from "react";
import { useConfig } from "../../../utilities/Config";
import useField from "../../useField";
import withCondition from "../../withCondition";
import { upload } from "../../../../../fields/validations";
import UploadInput from "./Input";
import "./index.scss";
var Upload = function(props) {
    var _useConfig = useConfig(), collections = _useConfig.collections, serverURL = _useConfig.serverURL, api = _useConfig.routes.api;
    var path = props.path, name = props.name, required = props.required, tmp = props.admin, _ref = tmp === void 0 ? {} : tmp, readOnly = _ref.readOnly, style = _ref.style, className = _ref.className, width = _ref.width, description = _ref.description, condition = _ref.condition, label = props.label, _props_validate = props.validate, validate = _props_validate === void 0 ? upload : _props_validate, relationTo = props.relationTo, fieldTypes = props.fieldTypes, filterOptions = props.filterOptions;
    var collection = collections.find(function(coll) {
        return coll.slug === relationTo;
    });
    var memoizedValidate = useCallback(function(value, options) {
        return validate(value, _object_spread_props(_object_spread({}, options), {
            required: required
        }));
    }, [
        validate,
        required
    ]);
    var field = useField({
        path: path,
        validate: memoizedValidate,
        condition: condition
    });
    var value = field.value, showError = field.showError, setValue = field.setValue, errorMessage = field.errorMessage;
    var onChange = useCallback(function(incomingValue) {
        var _incomingValue;
        var incomingID = ((_incomingValue = incomingValue) === null || _incomingValue === void 0 ? void 0 : _incomingValue.id) || incomingValue;
        setValue(incomingID);
    }, [
        setValue
    ]);
    if (collection.upload) {
        return /*#__PURE__*/ React.createElement(UploadInput, {
            path: path,
            value: value,
            onChange: onChange,
            description: description,
            label: label,
            required: required,
            showError: showError,
            serverURL: serverURL,
            api: api,
            errorMessage: errorMessage,
            readOnly: readOnly,
            style: style,
            className: className,
            width: width,
            collection: collection,
            fieldTypes: fieldTypes,
            name: name,
            relationTo: relationTo,
            filterOptions: filterOptions
        });
    }
    return null;
};
export default withCondition(Upload);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1VwbG9hZC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgdXNlRmllbGQgZnJvbSAnLi4vLi4vdXNlRmllbGQnO1xuaW1wb3J0IHdpdGhDb25kaXRpb24gZnJvbSAnLi4vLi4vd2l0aENvbmRpdGlvbic7XG5pbXBvcnQgeyB1cGxvYWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZHMvdmFsaWRhdGlvbnMnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBVcGxvYWRJbnB1dCBmcm9tICcuL0lucHV0JztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBVcGxvYWQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY29sbGVjdGlvbnMsXG4gICAgc2VydmVyVVJMLFxuICAgIHJvdXRlczoge1xuICAgICAgYXBpLFxuICAgIH0sXG4gIH0gPSB1c2VDb25maWcoKTtcblxuICBjb25zdCB7XG4gICAgcGF0aCxcbiAgICBuYW1lLFxuICAgIHJlcXVpcmVkLFxuICAgIGFkbWluOiB7XG4gICAgICByZWFkT25seSxcbiAgICAgIHN0eWxlLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgd2lkdGgsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGNvbmRpdGlvbixcbiAgICB9ID0ge30sXG4gICAgbGFiZWwsXG4gICAgdmFsaWRhdGUgPSB1cGxvYWQsXG4gICAgcmVsYXRpb25UbyxcbiAgICBmaWVsZFR5cGVzLFxuICAgIGZpbHRlck9wdGlvbnMsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBjb2xsZWN0aW9uID0gY29sbGVjdGlvbnMuZmluZCgoY29sbCkgPT4gY29sbC5zbHVnID09PSByZWxhdGlvblRvKTtcblxuICBjb25zdCBtZW1vaXplZFZhbGlkYXRlID0gdXNlQ2FsbGJhY2soKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIHZhbGlkYXRlKHZhbHVlLCB7IC4uLm9wdGlvbnMsIHJlcXVpcmVkIH0pO1xuICB9LCBbdmFsaWRhdGUsIHJlcXVpcmVkXSk7XG5cbiAgY29uc3QgZmllbGQgPSB1c2VGaWVsZCh7XG4gICAgcGF0aCxcbiAgICB2YWxpZGF0ZTogbWVtb2l6ZWRWYWxpZGF0ZSxcbiAgICBjb25kaXRpb24sXG4gIH0pO1xuXG4gIGNvbnN0IHtcbiAgICB2YWx1ZSxcbiAgICBzaG93RXJyb3IsXG4gICAgc2V0VmFsdWUsXG4gICAgZXJyb3JNZXNzYWdlLFxuICB9ID0gZmllbGQ7XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjaygoaW5jb21pbmdWYWx1ZSkgPT4ge1xuICAgIGNvbnN0IGluY29taW5nSUQgPSBpbmNvbWluZ1ZhbHVlPy5pZCB8fCBpbmNvbWluZ1ZhbHVlO1xuICAgIHNldFZhbHVlKGluY29taW5nSUQpO1xuICB9LCBbXG4gICAgc2V0VmFsdWUsXG4gIF0pO1xuXG4gIGlmIChjb2xsZWN0aW9uLnVwbG9hZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8VXBsb2FkSW5wdXRcbiAgICAgICAgcGF0aD17cGF0aH1cbiAgICAgICAgdmFsdWU9e3ZhbHVlIGFzIHN0cmluZ31cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICBzaG93RXJyb3I9e3Nob3dFcnJvcn1cbiAgICAgICAgc2VydmVyVVJMPXtzZXJ2ZXJVUkx9XG4gICAgICAgIGFwaT17YXBpfVxuICAgICAgICBlcnJvck1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cbiAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgIGZpZWxkVHlwZXM9e2ZpZWxkVHlwZXN9XG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIHJlbGF0aW9uVG89e3JlbGF0aW9uVG99XG4gICAgICAgIGZpbHRlck9wdGlvbnM9e2ZpbHRlck9wdGlvbnN9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5leHBvcnQgZGVmYXVsdCB3aXRoQ29uZGl0aW9uKFVwbG9hZCk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUNvbmZpZyIsInVzZUZpZWxkIiwid2l0aENvbmRpdGlvbiIsInVwbG9hZCIsIlVwbG9hZElucHV0IiwiVXBsb2FkIiwicHJvcHMiLCJjb2xsZWN0aW9ucyIsInNlcnZlclVSTCIsInJvdXRlcyIsImFwaSIsInBhdGgiLCJuYW1lIiwicmVxdWlyZWQiLCJhZG1pbiIsInJlYWRPbmx5Iiwic3R5bGUiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImRlc2NyaXB0aW9uIiwiY29uZGl0aW9uIiwibGFiZWwiLCJ2YWxpZGF0ZSIsInJlbGF0aW9uVG8iLCJmaWVsZFR5cGVzIiwiZmlsdGVyT3B0aW9ucyIsImNvbGxlY3Rpb24iLCJmaW5kIiwiY29sbCIsInNsdWciLCJtZW1vaXplZFZhbGlkYXRlIiwidmFsdWUiLCJvcHRpb25zIiwiZmllbGQiLCJzaG93RXJyb3IiLCJzZXRWYWx1ZSIsImVycm9yTWVzc2FnZSIsIm9uQ2hhbmdlIiwiaW5jb21pbmdWYWx1ZSIsImluY29taW5nSUQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQVNDLFdBQVcsUUFBUSxRQUFRO0FBQzNDLFNBQVNDLFNBQVMsUUFBUSw0QkFBNEI7QUFDdEQsT0FBT0MsY0FBYyxpQkFBaUI7QUFDdEMsT0FBT0MsbUJBQW1CLHNCQUFzQjtBQUNoRCxTQUFTQyxNQUFNLFFBQVEsb0NBQW9DO0FBRTNELE9BQU9DLGlCQUFpQixVQUFVO0FBRWxDLE9BQU8sZUFBZTtBQUV0QixJQUFNQyxTQUEwQixTQUFDQztJQUMvQixJQU1JTixhQUFBQSxhQUxGTyxjQUtFUCxXQUxGTyxhQUNBQyxZQUlFUixXQUpGUSxXQUNBQyxBQUNFQyxNQUVBVixXQUhGUyxPQUNFQztJQUlKLElBQ0VDLE9BZ0JFTCxNQWhCRkssTUFDQUMsT0FlRU4sTUFmRk0sTUFDQUMsV0FjRVAsTUFkRk8sVUFDTyxNQWFMUCxNQWJGUSxjQUFPLGlCQU9ILENBQUMsSUFQRSxLQUNMQyxnQkFBQUEsVUFDQUMsYUFBQUEsT0FDQUMsaUJBQUFBLFdBQ0FDLGFBQUFBLE9BQ0FDLG1CQUFBQSxhQUNBQyxpQkFBQUEsV0FFRkMsUUFLRWYsTUFMRmUseUJBS0VmLE1BSkZnQixVQUFBQSx3Q0FBV25CLDBCQUNYb0IsYUFHRWpCLE1BSEZpQixZQUNBQyxhQUVFbEIsTUFGRmtCLFlBQ0FDLGdCQUNFbkIsTUFERm1CO0lBR0YsSUFBTUMsYUFBYW5CLFlBQVlvQixJQUFJLENBQUMsU0FBQ0M7ZUFBU0EsS0FBS0MsSUFBSSxLQUFLTjs7SUFFNUQsSUFBTU8sbUJBQW1CL0IsWUFBWSxTQUFDZ0MsT0FBT0M7UUFDM0MsT0FBT1YsU0FBU1MsT0FBTyx3Q0FBS0M7WUFBU25CLFVBQUFBOztJQUN2QyxHQUFHO1FBQUNTO1FBQVVUO0tBQVM7SUFFdkIsSUFBTW9CLFFBQVFoQyxTQUFTO1FBQ3JCVSxNQUFBQTtRQUNBVyxVQUFVUTtRQUNWVixXQUFBQTtJQUNGO0lBRUEsSUFDRVcsUUFJRUUsTUFKRkYsT0FDQUcsWUFHRUQsTUFIRkMsV0FDQUMsV0FFRUYsTUFGRkUsVUFDQUMsZUFDRUgsTUFERkc7SUFHRixJQUFNQyxXQUFXdEMsWUFBWSxTQUFDdUM7WUFDVEE7UUFBbkIsSUFBTUMsYUFBYUQsRUFBQUEsaUJBQUFBLDJCQUFBQSxxQ0FBQUEsZUFBZUUsRUFBRSxLQUFJRjtRQUN4Q0gsU0FBU0k7SUFDWCxHQUFHO1FBQ0RKO0tBQ0Q7SUFFRCxJQUFJVCxXQUFXdkIsTUFBTSxFQUFFO1FBQ3JCLHFCQUNFLG9CQUFDQztZQUNDTyxNQUFNQTtZQUNOb0IsT0FBT0E7WUFDUE0sVUFBVUE7WUFDVmxCLGFBQWFBO1lBQ2JFLE9BQU9BO1lBQ1BSLFVBQVVBO1lBQ1ZxQixXQUFXQTtZQUNYMUIsV0FBV0E7WUFDWEUsS0FBS0E7WUFDTDBCLGNBQWNBO1lBQ2RyQixVQUFVQTtZQUNWQyxPQUFPQTtZQUNQQyxXQUFXQTtZQUNYQyxPQUFPQTtZQUNQUSxZQUFZQTtZQUNaRixZQUFZQTtZQUNaWixNQUFNQTtZQUNOVyxZQUFZQTtZQUNaRSxlQUFlQTs7SUFHckI7SUFFQSxPQUFPO0FBQ1Q7QUFDQSxlQUFldkIsY0FBY0csUUFBUSJ9