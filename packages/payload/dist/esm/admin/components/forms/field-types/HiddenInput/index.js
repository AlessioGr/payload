import React, { useEffect } from "react";
import useField from "../../useField";
import withCondition from "../../withCondition";
var HiddenInput = function(props) {
    var name = props.name, pathFromProps = props.path, valueFromProps = props.value, _props_disableModifyingForm = props.disableModifyingForm, disableModifyingForm = _props_disableModifyingForm === void 0 ? true : _props_disableModifyingForm;
    var path = pathFromProps || name;
    var _useField = useField({
        path: path
    }), value = _useField.value, setValue = _useField.setValue;
    useEffect(function() {
        if (valueFromProps !== undefined) {
            setValue(valueFromProps, disableModifyingForm);
        }
    }, [
        valueFromProps,
        setValue,
        disableModifyingForm
    ]);
    return /*#__PURE__*/ React.createElement("input", {
        id: "field-".concat(path.replace(/\./gi, "__")),
        type: "hidden",
        value: value || "",
        onChange: setValue,
        name: path
    });
};
export default withCondition(HiddenInput);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0hpZGRlbklucHV0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUZpZWxkIGZyb20gJy4uLy4uL3VzZUZpZWxkJztcbmltcG9ydCB3aXRoQ29uZGl0aW9uIGZyb20gJy4uLy4uL3dpdGhDb25kaXRpb24nO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgSGlkZGVuSW5wdXQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgbmFtZSxcbiAgICBwYXRoOiBwYXRoRnJvbVByb3BzLFxuICAgIHZhbHVlOiB2YWx1ZUZyb21Qcm9wcyxcbiAgICBkaXNhYmxlTW9kaWZ5aW5nRm9ybSA9IHRydWUsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBwYXRoID0gcGF0aEZyb21Qcm9wcyB8fCBuYW1lO1xuXG4gIGNvbnN0IHsgdmFsdWUsIHNldFZhbHVlIH0gPSB1c2VGaWVsZCh7XG4gICAgcGF0aCxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmFsdWVGcm9tUHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0VmFsdWUodmFsdWVGcm9tUHJvcHMsIGRpc2FibGVNb2RpZnlpbmdGb3JtKTtcbiAgICB9XG4gIH0sIFt2YWx1ZUZyb21Qcm9wcywgc2V0VmFsdWUsIGRpc2FibGVNb2RpZnlpbmdGb3JtXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIGlkPXtgZmllbGQtJHtwYXRoLnJlcGxhY2UoL1xcLi9naSwgJ19fJyl9YH1cbiAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgdmFsdWU9e3ZhbHVlIGFzIHN0cmluZyB8fCAnJ31cbiAgICAgIG9uQ2hhbmdlPXtzZXRWYWx1ZX1cbiAgICAgIG5hbWU9e3BhdGh9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhDb25kaXRpb24oSGlkZGVuSW5wdXQpO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlRmllbGQiLCJ3aXRoQ29uZGl0aW9uIiwiSGlkZGVuSW5wdXQiLCJwcm9wcyIsIm5hbWUiLCJwYXRoIiwicGF0aEZyb21Qcm9wcyIsInZhbHVlIiwidmFsdWVGcm9tUHJvcHMiLCJkaXNhYmxlTW9kaWZ5aW5nRm9ybSIsInNldFZhbHVlIiwidW5kZWZpbmVkIiwiaW5wdXQiLCJpZCIsInJlcGxhY2UiLCJ0eXBlIiwib25DaGFuZ2UiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFNBQVNDLFNBQVMsUUFBUSxRQUFRO0FBQ3pDLE9BQU9DLGNBQWMsaUJBQWlCO0FBQ3RDLE9BQU9DLG1CQUFtQixzQkFBc0I7QUFHaEQsSUFBTUMsY0FBK0IsU0FBQ0M7SUFDcEMsSUFDRUMsT0FJRUQsTUFKRkMsTUFDQUMsQUFBTUMsZ0JBR0pILE1BSEZFLE1BQ0FFLEFBQU9DLGlCQUVMTCxNQUZGSSxxQ0FFRUosTUFERk0sc0JBQUFBLGdFQUF1QjtJQUd6QixJQUFNSixPQUFPQyxpQkFBaUJGO0lBRTlCLElBQTRCSixZQUFBQSxTQUFTO1FBQ25DSyxNQUFBQTtJQUNGLElBRlFFLFFBQW9CUCxVQUFwQk8sT0FBT0csV0FBYVYsVUFBYlU7SUFJZlgsVUFBVTtRQUNSLElBQUlTLG1CQUFtQkcsV0FBVztZQUNoQ0QsU0FBU0YsZ0JBQWdCQztRQUMzQjtJQUNGLEdBQUc7UUFBQ0Q7UUFBZ0JFO1FBQVVEO0tBQXFCO0lBRW5ELHFCQUNFLG9CQUFDRztRQUNDQyxJQUFJLEFBQUMsU0FBbUMsT0FBM0JSLEtBQUtTLE9BQU8sQ0FBQyxRQUFRO1FBQ2xDQyxNQUFLO1FBQ0xSLE9BQU9BLFNBQW1CO1FBQzFCUyxVQUFVTjtRQUNWTixNQUFNQzs7QUFHWjtBQUVBLGVBQWVKLGNBQWNDLGFBQWEifQ==