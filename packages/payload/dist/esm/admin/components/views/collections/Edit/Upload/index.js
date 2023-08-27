function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDocumentInfo } from "../../../../utilities/DocumentInfo";
import useField from "../../../../forms/useField";
import Button from "../../../../elements/Button";
import FileDetails from "../../../../elements/FileDetails";
import Error from "../../../../forms/Error";
import reduceFieldsToValues from "../../../../forms/Form/reduceFieldsToValues";
import Label from "../../../../forms/Label";
import "./index.scss";
var baseClass = "file-field";
var handleDrag = function(e) {
    e.preventDefault();
    e.stopPropagation();
};
var validate = function(value) {
    if (!value && value !== undefined) {
        return "A file is required.";
    }
    return true;
};
var Upload = function(props) {
    var _docPermissions_update, _docPermissions, _docPermissions_delete, _docPermissions1, _collection_upload_mimeTypes, _collection_upload, _collection;
    var collection = props.collection, internalState = props.internalState;
    var inputRef = useRef(null);
    var dropRef = useRef(null);
    var _useState = _sliced_to_array(useState(false), 2), selectingFile = _useState[0], setSelectingFile = _useState[1];
    var _useState1 = _sliced_to_array(useState(false), 2), dragging = _useState1[0], setDragging = _useState1[1];
    var _useState2 = _sliced_to_array(useState(0), 2), dragCounter = _useState2[0], setDragCounter = _useState2[1];
    var _useState3 = _sliced_to_array(useState(false), 2), replacingFile = _useState3[0], setReplacingFile = _useState3[1];
    var t = useTranslation([
        "upload",
        "general"
    ]).t;
    var _useState4 = _sliced_to_array(useState(reduceFieldsToValues(internalState || {}, true)), 2), doc = _useState4[0], setDoc = _useState4[1];
    var docPermissions = useDocumentInfo().docPermissions;
    var _useField = useField({
        path: "file",
        validate: validate
    }), value = _useField.value, setValue = _useField.setValue, showError = _useField.showError, errorMessage = _useField.errorMessage;
    var handleDragIn = useCallback(function(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragCounter(function(count) {
            return count + 1;
        });
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            setDragging(true);
        }
    }, []);
    var handleDragOut = useCallback(function(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragCounter(function(count) {
            return count - 1;
        });
        if (dragCounter > 1) return;
        setDragging(false);
    }, [
        dragCounter
    ]);
    var handleDrop = useCallback(function(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setValue(e.dataTransfer.files[0]);
            setDragging(false);
            e.dataTransfer.clearData();
            setDragCounter(0);
        } else {
            setDragging(false);
        }
    }, [
        setValue
    ]);
    var handleFileNameChange = function(e) {
        var updatedFileName = e.target.value;
        if (value) {
            var fileValue = value;
            // Creating a new File object with updated properties
            var newFile = new File([
                fileValue
            ], updatedFileName, {
                type: fileValue.type
            });
            setValue(newFile); // Updating the state with the new File object
        }
    };
    // Only called when input is interacted with directly
    // Not called when drag + drop is used
    // Or when input is cleared
    var handleInputChange = useCallback(function() {
        var _inputRef_current_files, _inputRef_current, _inputRef;
        setSelectingFile(false);
        setValue(((_inputRef = inputRef) === null || _inputRef === void 0 ? void 0 : (_inputRef_current = _inputRef.current) === null || _inputRef_current === void 0 ? void 0 : (_inputRef_current_files = _inputRef_current.files) === null || _inputRef_current_files === void 0 ? void 0 : _inputRef_current_files[0]) || null);
    }, [
        inputRef,
        setValue
    ]);
    useEffect(function() {
        if (selectingFile) {
            inputRef.current.click();
            setSelectingFile(false);
        }
    }, [
        selectingFile,
        inputRef,
        setSelectingFile
    ]);
    useEffect(function() {
        setDoc(reduceFieldsToValues(internalState || {}, true));
        setReplacingFile(false);
    }, [
        internalState
    ]);
    useEffect(function() {
        var div = dropRef.current;
        if (div) {
            div.addEventListener("dragenter", handleDragIn);
            div.addEventListener("dragleave", handleDragOut);
            div.addEventListener("dragover", handleDrag);
            div.addEventListener("drop", handleDrop);
            return function() {
                div.removeEventListener("dragenter", handleDragIn);
                div.removeEventListener("dragleave", handleDragOut);
                div.removeEventListener("dragover", handleDrag);
                div.removeEventListener("drop", handleDrop);
            };
        }
        return function() {
            return null;
        };
    }, [
        handleDragIn,
        handleDragOut,
        handleDrop,
        value
    ]);
    var classes = [
        baseClass,
        dragging && "".concat(baseClass, "--dragging"),
        "field-type"
    ].filter(Boolean).join(" ");
    var canRemoveUpload = ((_docPermissions = docPermissions) === null || _docPermissions === void 0 ? void 0 : (_docPermissions_update = _docPermissions.update) === null || _docPermissions_update === void 0 ? void 0 : _docPermissions_update.permission) && "delete" in docPermissions && ((_docPermissions1 = docPermissions) === null || _docPermissions1 === void 0 ? void 0 : (_docPermissions_delete = _docPermissions1.delete) === null || _docPermissions_delete === void 0 ? void 0 : _docPermissions_delete.permission);
    return /*#__PURE__*/ React.createElement("div", {
        className: classes
    }, /*#__PURE__*/ React.createElement(Error, {
        showError: showError,
        message: errorMessage
    }), doc.filename && !replacingFile && /*#__PURE__*/ React.createElement(FileDetails, {
        doc: doc,
        collection: collection,
        handleRemove: canRemoveUpload ? function() {
            setReplacingFile(true);
            setValue(null);
        } : undefined
    }), (!doc.filename || replacingFile) && /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__upload")
    }, value && /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__file-selected")
    }, /*#__PURE__*/ React.createElement(Label, {
        label: t("fileName"),
        required: true
    }), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__file-upload")
    }, /*#__PURE__*/ React.createElement("input", {
        type: "text",
        className: "".concat(baseClass, "__filename"),
        value: value.name,
        onChange: handleFileNameChange
    }), /*#__PURE__*/ React.createElement(Button, {
        icon: "x",
        buttonStyle: "none",
        tooltip: t("general:cancel"),
        onClick: function() {
            setValue(null);
            inputRef.current.value = null;
        }
    }))), !value && /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__drop-zone"),
        ref: dropRef,
        onPaste: function(e) {
            var _e_clipboardData, _e;
            if ((_e = e) === null || _e === void 0 ? void 0 : (_e_clipboardData = _e.clipboardData) === null || _e_clipboardData === void 0 ? void 0 : _e_clipboardData.files.length) {
                var fileObject = e.clipboardData.files[0];
                if (fileObject) setValue(fileObject);
            }
        }
    }, /*#__PURE__*/ React.createElement(Button, {
        size: "small",
        buttonStyle: "secondary",
        onClick: function() {
            return setSelectingFile(true);
        },
        className: "".concat(baseClass, "__file-button")
    }, t("selectFile")), /*#__PURE__*/ React.createElement("p", {
        className: "".concat(baseClass, "__drag-label")
    }, t("general:or"), " ", t("dragAndDrop")))), /*#__PURE__*/ React.createElement("input", {
        ref: inputRef,
        type: "file",
        accept: (_collection = collection) === null || _collection === void 0 ? void 0 : (_collection_upload = _collection.upload) === null || _collection_upload === void 0 ? void 0 : (_collection_upload_mimeTypes = _collection_upload.mimeTypes) === null || _collection_upload_mimeTypes === void 0 ? void 0 : _collection_upload_mimeTypes.join(","),
        onChange: handleInputChange
    })));
};
export default Upload;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0VkaXQvVXBsb2FkL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZURvY3VtZW50SW5mbyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9Eb2N1bWVudEluZm8nO1xuaW1wb3J0IHVzZUZpZWxkIGZyb20gJy4uLy4uLy4uLy4uL2Zvcm1zL3VzZUZpZWxkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vLi4vLi4vZWxlbWVudHMvQnV0dG9uJztcbmltcG9ydCBGaWxlRGV0YWlscyBmcm9tICcuLi8uLi8uLi8uLi9lbGVtZW50cy9GaWxlRGV0YWlscyc7XG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vLi4vLi4vLi4vZm9ybXMvRXJyb3InO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCByZWR1Y2VGaWVsZHNUb1ZhbHVlcyBmcm9tICcuLi8uLi8uLi8uLi9mb3Jtcy9Gb3JtL3JlZHVjZUZpZWxkc1RvVmFsdWVzJztcbmltcG9ydCBMYWJlbCBmcm9tICcuLi8uLi8uLi8uLi9mb3Jtcy9MYWJlbCc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2ZpbGUtZmllbGQnO1xuXG5jb25zdCBoYW5kbGVEcmFnID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xufTtcblxuY29uc3QgdmFsaWRhdGUgPSAodmFsdWUpID0+IHtcbiAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICdBIGZpbGUgaXMgcmVxdWlyZWQuJztcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgVXBsb2FkOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbGxlY3Rpb24sXG4gICAgaW50ZXJuYWxTdGF0ZSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBkcm9wUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbc2VsZWN0aW5nRmlsZSwgc2V0U2VsZWN0aW5nRmlsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkcmFnZ2luZywgc2V0RHJhZ2dpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZHJhZ0NvdW50ZXIsIHNldERyYWdDb3VudGVyXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcmVwbGFjaW5nRmlsZSwgc2V0UmVwbGFjaW5nRmlsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oWyd1cGxvYWQnLCAnZ2VuZXJhbCddKTtcbiAgY29uc3QgW2RvYywgc2V0RG9jXSA9IHVzZVN0YXRlKHJlZHVjZUZpZWxkc1RvVmFsdWVzKGludGVybmFsU3RhdGUgfHwge30sIHRydWUpKTtcbiAgY29uc3QgeyBkb2NQZXJtaXNzaW9ucyB9ID0gdXNlRG9jdW1lbnRJbmZvKCk7XG5cbiAgY29uc3Qge1xuICAgIHZhbHVlLFxuICAgIHNldFZhbHVlLFxuICAgIHNob3dFcnJvcixcbiAgICBlcnJvck1lc3NhZ2UsXG4gIH0gPSB1c2VGaWVsZDx7IG5hbWU6IHN0cmluZyB9Pih7XG4gICAgcGF0aDogJ2ZpbGUnLFxuICAgIHZhbGlkYXRlLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVEcmFnSW4gPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHNldERyYWdDb3VudGVyKChjb3VudCkgPT4gY291bnQgKyAxKTtcbiAgICBpZiAoZS5kYXRhVHJhbnNmZXIuaXRlbXMgJiYgZS5kYXRhVHJhbnNmZXIuaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgc2V0RHJhZ2dpbmcodHJ1ZSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlRHJhZ091dCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgc2V0RHJhZ0NvdW50ZXIoKGNvdW50KSA9PiBjb3VudCAtIDEpO1xuICAgIGlmIChkcmFnQ291bnRlciA+IDEpIHJldHVybjtcbiAgICBzZXREcmFnZ2luZyhmYWxzZSk7XG4gIH0sIFtkcmFnQ291bnRlcl0pO1xuXG4gIGNvbnN0IGhhbmRsZURyb3AgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHNldERyYWdnaW5nKGZhbHNlKTtcblxuICAgIGlmIChlLmRhdGFUcmFuc2Zlci5maWxlcyAmJiBlLmRhdGFUcmFuc2Zlci5maWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBzZXRWYWx1ZShlLmRhdGFUcmFuc2Zlci5maWxlc1swXSk7XG4gICAgICBzZXREcmFnZ2luZyhmYWxzZSk7XG5cbiAgICAgIGUuZGF0YVRyYW5zZmVyLmNsZWFyRGF0YSgpO1xuICAgICAgc2V0RHJhZ0NvdW50ZXIoMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldERyYWdnaW5nKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtzZXRWYWx1ZV0pO1xuXG4gIGNvbnN0IGhhbmRsZUZpbGVOYW1lQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZEZpbGVOYW1lID0gZS50YXJnZXQudmFsdWU7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBjb25zdCBmaWxlVmFsdWUgPSB2YWx1ZSBhcyBGaWxlO1xuICAgICAgLy8gQ3JlYXRpbmcgYSBuZXcgRmlsZSBvYmplY3Qgd2l0aCB1cGRhdGVkIHByb3BlcnRpZXNcbiAgICAgIGNvbnN0IG5ld0ZpbGUgPSBuZXcgRmlsZShbZmlsZVZhbHVlXSwgdXBkYXRlZEZpbGVOYW1lLCB7IHR5cGU6IGZpbGVWYWx1ZS50eXBlIH0pO1xuICAgICAgc2V0VmFsdWUobmV3RmlsZSk7IC8vIFVwZGF0aW5nIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgRmlsZSBvYmplY3RcbiAgICB9XG4gIH07XG5cbiAgLy8gT25seSBjYWxsZWQgd2hlbiBpbnB1dCBpcyBpbnRlcmFjdGVkIHdpdGggZGlyZWN0bHlcbiAgLy8gTm90IGNhbGxlZCB3aGVuIGRyYWcgKyBkcm9wIGlzIHVzZWRcbiAgLy8gT3Igd2hlbiBpbnB1dCBpcyBjbGVhcmVkXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNlbGVjdGluZ0ZpbGUoZmFsc2UpO1xuICAgIHNldFZhbHVlKGlucHV0UmVmPy5jdXJyZW50Py5maWxlcz8uWzBdIHx8IG51bGwpO1xuICB9LCBbaW5wdXRSZWYsIHNldFZhbHVlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2VsZWN0aW5nRmlsZSkge1xuICAgICAgaW5wdXRSZWYuY3VycmVudC5jbGljaygpO1xuICAgICAgc2V0U2VsZWN0aW5nRmlsZShmYWxzZSk7XG4gICAgfVxuICB9LCBbc2VsZWN0aW5nRmlsZSwgaW5wdXRSZWYsIHNldFNlbGVjdGluZ0ZpbGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldERvYyhyZWR1Y2VGaWVsZHNUb1ZhbHVlcyhpbnRlcm5hbFN0YXRlIHx8IHt9LCB0cnVlKSk7XG4gICAgc2V0UmVwbGFjaW5nRmlsZShmYWxzZSk7XG4gIH0sIFtpbnRlcm5hbFN0YXRlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkcm9wUmVmLmN1cnJlbnQ7XG4gICAgaWYgKGRpdikge1xuICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGhhbmRsZURyYWdJbik7XG4gICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgaGFuZGxlRHJhZ091dCk7XG4gICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBoYW5kbGVEcmFnKTtcbiAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgaGFuZGxlRHJvcCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGRpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBoYW5kbGVEcmFnSW4pO1xuICAgICAgICBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgaGFuZGxlRHJhZ091dCk7XG4gICAgICAgIGRpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGhhbmRsZURyYWcpO1xuICAgICAgICBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIGhhbmRsZURyb3ApO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4gbnVsbDtcbiAgfSwgW2hhbmRsZURyYWdJbiwgaGFuZGxlRHJhZ091dCwgaGFuZGxlRHJvcCwgdmFsdWVdKTtcblxuICBjb25zdCBjbGFzc2VzID0gW1xuICAgIGJhc2VDbGFzcyxcbiAgICBkcmFnZ2luZyAmJiBgJHtiYXNlQ2xhc3N9LS1kcmFnZ2luZ2AsXG4gICAgJ2ZpZWxkLXR5cGUnLFxuICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cbiAgY29uc3QgY2FuUmVtb3ZlVXBsb2FkID0gZG9jUGVybWlzc2lvbnM/LnVwZGF0ZT8ucGVybWlzc2lvbiAmJiAnZGVsZXRlJyBpbiBkb2NQZXJtaXNzaW9ucyAmJiBkb2NQZXJtaXNzaW9ucz8uZGVsZXRlPy5wZXJtaXNzaW9uO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgPEVycm9yXG4gICAgICAgIHNob3dFcnJvcj17c2hvd0Vycm9yfVxuICAgICAgICBtZXNzYWdlPXtlcnJvck1lc3NhZ2V9XG4gICAgICAvPlxuICAgICAgeyhkb2MuZmlsZW5hbWUgJiYgIXJlcGxhY2luZ0ZpbGUpICYmIChcbiAgICAgICAgPEZpbGVEZXRhaWxzXG4gICAgICAgICAgZG9jPXtkb2N9XG4gICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbn1cbiAgICAgICAgICBoYW5kbGVSZW1vdmU9e2NhblJlbW92ZVVwbG9hZCA/ICgpID0+IHtcbiAgICAgICAgICAgIHNldFJlcGxhY2luZ0ZpbGUodHJ1ZSk7XG4gICAgICAgICAgICBzZXRWYWx1ZShudWxsKTtcbiAgICAgICAgICB9IDogdW5kZWZpbmVkfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHsoIWRvYy5maWxlbmFtZSB8fCByZXBsYWNpbmdGaWxlKSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X191cGxvYWRgfT5cbiAgICAgICAgICB7dmFsdWUgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2ZpbGUtc2VsZWN0ZWRgfT5cbiAgICAgICAgICAgICAgPExhYmVsXG4gICAgICAgICAgICAgICAgbGFiZWw9e3QoJ2ZpbGVOYW1lJyl9XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2ZpbGUtdXBsb2FkYH0+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2ZpbGVuYW1lYH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVOYW1lQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgaWNvbj1cInhcIlxuICAgICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgIHRvb2x0aXA9e3QoJ2dlbmVyYWw6Y2FuY2VsJyl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dFJlZi5jdXJyZW50LnZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHshdmFsdWUgJiYgKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19kcm9wLXpvbmVgfVxuICAgICAgICAgICAgICAgIHJlZj17ZHJvcFJlZn1cbiAgICAgICAgICAgICAgICBvblBhc3RlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGU/LmNsaXBib2FyZERhdGE/LmZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlT2JqZWN0ID0gZS5jbGlwYm9hcmREYXRhLmZpbGVzWzBdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZU9iamVjdCkgc2V0VmFsdWUoZmlsZU9iamVjdCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RpbmdGaWxlKHRydWUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19maWxlLWJ1dHRvbmB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3QoJ3NlbGVjdEZpbGUnKX1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2RyYWctbGFiZWxgfT5cbiAgICAgICAgICAgICAgICAgIHt0KCdnZW5lcmFsOm9yJyl9XG4gICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAge3QoJ2RyYWdBbmREcm9wJyl9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICBhY2NlcHQ9e2NvbGxlY3Rpb24/LnVwbG9hZD8ubWltZVR5cGVzPy5qb2luKCcsJyl9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsInVzZVRyYW5zbGF0aW9uIiwidXNlRG9jdW1lbnRJbmZvIiwidXNlRmllbGQiLCJCdXR0b24iLCJGaWxlRGV0YWlscyIsIkVycm9yIiwicmVkdWNlRmllbGRzVG9WYWx1ZXMiLCJMYWJlbCIsImJhc2VDbGFzcyIsImhhbmRsZURyYWciLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ2YWxpZGF0ZSIsInZhbHVlIiwidW5kZWZpbmVkIiwiVXBsb2FkIiwicHJvcHMiLCJkb2NQZXJtaXNzaW9ucyIsImNvbGxlY3Rpb24iLCJpbnRlcm5hbFN0YXRlIiwiaW5wdXRSZWYiLCJkcm9wUmVmIiwic2VsZWN0aW5nRmlsZSIsInNldFNlbGVjdGluZ0ZpbGUiLCJkcmFnZ2luZyIsInNldERyYWdnaW5nIiwiZHJhZ0NvdW50ZXIiLCJzZXREcmFnQ291bnRlciIsInJlcGxhY2luZ0ZpbGUiLCJzZXRSZXBsYWNpbmdGaWxlIiwidCIsImRvYyIsInNldERvYyIsInBhdGgiLCJzZXRWYWx1ZSIsInNob3dFcnJvciIsImVycm9yTWVzc2FnZSIsImhhbmRsZURyYWdJbiIsImNvdW50IiwiZGF0YVRyYW5zZmVyIiwiaXRlbXMiLCJsZW5ndGgiLCJoYW5kbGVEcmFnT3V0IiwiaGFuZGxlRHJvcCIsImZpbGVzIiwiY2xlYXJEYXRhIiwiaGFuZGxlRmlsZU5hbWVDaGFuZ2UiLCJ1cGRhdGVkRmlsZU5hbWUiLCJ0YXJnZXQiLCJmaWxlVmFsdWUiLCJuZXdGaWxlIiwiRmlsZSIsInR5cGUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImN1cnJlbnQiLCJjbGljayIsImRpdiIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiY2FuUmVtb3ZlVXBsb2FkIiwidXBkYXRlIiwicGVybWlzc2lvbiIsImRlbGV0ZSIsImNsYXNzTmFtZSIsIm1lc3NhZ2UiLCJmaWxlbmFtZSIsImhhbmRsZVJlbW92ZSIsImxhYmVsIiwicmVxdWlyZWQiLCJpbnB1dCIsIm5hbWUiLCJvbkNoYW5nZSIsImljb24iLCJidXR0b25TdHlsZSIsInRvb2x0aXAiLCJvbkNsaWNrIiwiRnJhZ21lbnQiLCJyZWYiLCJvblBhc3RlIiwiY2xpcGJvYXJkRGF0YSIsImZpbGVPYmplY3QiLCJzaXplIiwicCIsImFjY2VwdCIsInVwbG9hZCIsIm1pbWVUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQ0xDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsUUFDbkMsUUFBUTtBQUNmLFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDL0MsU0FBU0MsZUFBZSxRQUFRLHFDQUFxQztBQUNyRSxPQUFPQyxjQUFjLDZCQUE2QjtBQUNsRCxPQUFPQyxZQUFZLDhCQUE4QjtBQUNqRCxPQUFPQyxpQkFBaUIsbUNBQW1DO0FBQzNELE9BQU9DLFdBQVcsMEJBQTBCO0FBRTVDLE9BQU9DLDBCQUEwQiw4Q0FBOEM7QUFDL0UsT0FBT0MsV0FBVywwQkFBMEI7QUFFNUMsT0FBTyxlQUFlO0FBRXRCLElBQU1DLFlBQVk7QUFFbEIsSUFBTUMsYUFBYSxTQUFDQztJQUNsQkEsRUFBRUMsY0FBYztJQUNoQkQsRUFBRUUsZUFBZTtBQUNuQjtBQUVBLElBQU1DLFdBQVcsU0FBQ0M7SUFDaEIsSUFBSSxDQUFDQSxTQUFTQSxVQUFVQyxXQUFXO1FBQ2pDLE9BQU87SUFDVDtJQUVBLE9BQU87QUFDVDtBQUVBLElBQU1DLFNBQTBCLFNBQUNDO1FBa0hQQyx3QkFBQUEsaUJBQW9FQSx3QkFBQUEsa0JBNEUxRUMsOEJBQUFBLG9CQUFBQTtJQTdMbEIsSUFDRUEsYUFFRUYsTUFGRkUsWUFDQUMsZ0JBQ0VILE1BREZHO0lBR0YsSUFBTUMsV0FBV3hCLE9BQU87SUFDeEIsSUFBTXlCLFVBQVV6QixPQUFPO0lBQ3ZCLElBQTBDRCw2QkFBQUEsU0FBUyxZQUE1QzJCLGdCQUFtQzNC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