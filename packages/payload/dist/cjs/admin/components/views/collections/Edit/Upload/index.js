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
var _reacti18next = require("react-i18next");
var _DocumentInfo = require("../../../../utilities/DocumentInfo");
var _useField = /*#__PURE__*/ _interop_require_default(require("../../../../forms/useField"));
var _Button = /*#__PURE__*/ _interop_require_default(require("../../../../elements/Button"));
var _FileDetails = /*#__PURE__*/ _interop_require_default(require("../../../../elements/FileDetails"));
var _Error = /*#__PURE__*/ _interop_require_default(require("../../../../forms/Error"));
var _reduceFieldsToValues = /*#__PURE__*/ _interop_require_default(require("../../../../forms/Form/reduceFieldsToValues"));
var _Label = /*#__PURE__*/ _interop_require_default(require("../../../../forms/Label"));
require("./index.scss");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
    var inputRef = (0, _react.useRef)(null);
    var dropRef = (0, _react.useRef)(null);
    var _useState = _sliced_to_array((0, _react.useState)(false), 2), selectingFile = _useState[0], setSelectingFile = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)(false), 2), dragging = _useState1[0], setDragging = _useState1[1];
    var _useState2 = _sliced_to_array((0, _react.useState)(0), 2), dragCounter = _useState2[0], setDragCounter = _useState2[1];
    var _useState3 = _sliced_to_array((0, _react.useState)(false), 2), replacingFile = _useState3[0], setReplacingFile = _useState3[1];
    var t = (0, _reacti18next.useTranslation)([
        "upload",
        "general"
    ]).t;
    var _useState4 = _sliced_to_array((0, _react.useState)((0, _reduceFieldsToValues.default)(internalState || {}, true)), 2), doc = _useState4[0], setDoc = _useState4[1];
    var docPermissions = (0, _DocumentInfo.useDocumentInfo)().docPermissions;
    var _useField1 = (0, _useField.default)({
        path: "file",
        validate: validate
    }), value = _useField1.value, setValue = _useField1.setValue, showError = _useField1.showError, errorMessage = _useField1.errorMessage;
    var handleDragIn = (0, _react.useCallback)(function(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragCounter(function(count) {
            return count + 1;
        });
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            setDragging(true);
        }
    }, []);
    var handleDragOut = (0, _react.useCallback)(function(e) {
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
    var handleDrop = (0, _react.useCallback)(function(e) {
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
    var handleInputChange = (0, _react.useCallback)(function() {
        var _inputRef_current_files, _inputRef_current, _inputRef;
        setSelectingFile(false);
        setValue(((_inputRef = inputRef) === null || _inputRef === void 0 ? void 0 : (_inputRef_current = _inputRef.current) === null || _inputRef_current === void 0 ? void 0 : (_inputRef_current_files = _inputRef_current.files) === null || _inputRef_current_files === void 0 ? void 0 : _inputRef_current_files[0]) || null);
    }, [
        inputRef,
        setValue
    ]);
    (0, _react.useEffect)(function() {
        if (selectingFile) {
            inputRef.current.click();
            setSelectingFile(false);
        }
    }, [
        selectingFile,
        inputRef,
        setSelectingFile
    ]);
    (0, _react.useEffect)(function() {
        setDoc((0, _reduceFieldsToValues.default)(internalState || {}, true));
        setReplacingFile(false);
    }, [
        internalState
    ]);
    (0, _react.useEffect)(function() {
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
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: classes
    }, /*#__PURE__*/ _react.default.createElement(_Error.default, {
        showError: showError,
        message: errorMessage
    }), doc.filename && !replacingFile && /*#__PURE__*/ _react.default.createElement(_FileDetails.default, {
        doc: doc,
        collection: collection,
        handleRemove: canRemoveUpload ? function() {
            setReplacingFile(true);
            setValue(null);
        } : undefined
    }), (!doc.filename || replacingFile) && /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__upload")
    }, value && /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__file-selected")
    }, /*#__PURE__*/ _react.default.createElement(_Label.default, {
        label: t("fileName"),
        required: true
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__file-upload")
    }, /*#__PURE__*/ _react.default.createElement("input", {
        type: "text",
        className: "".concat(baseClass, "__filename"),
        value: value.name,
        onChange: handleFileNameChange
    }), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        icon: "x",
        buttonStyle: "none",
        tooltip: t("general:cancel"),
        onClick: function() {
            setValue(null);
            inputRef.current.value = null;
        }
    }))), !value && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__drop-zone"),
        ref: dropRef,
        onPaste: function(e) {
            var _e_clipboardData, _e;
            if ((_e = e) === null || _e === void 0 ? void 0 : (_e_clipboardData = _e.clipboardData) === null || _e_clipboardData === void 0 ? void 0 : _e_clipboardData.files.length) {
                var fileObject = e.clipboardData.files[0];
                if (fileObject) setValue(fileObject);
            }
        }
    }, /*#__PURE__*/ _react.default.createElement(_Button.default, {
        size: "small",
        buttonStyle: "secondary",
        onClick: function() {
            return setSelectingFile(true);
        },
        className: "".concat(baseClass, "__file-button")
    }, t("selectFile")), /*#__PURE__*/ _react.default.createElement("p", {
        className: "".concat(baseClass, "__drag-label")
    }, t("general:or"), " ", t("dragAndDrop")))), /*#__PURE__*/ _react.default.createElement("input", {
        ref: inputRef,
        type: "file",
        accept: (_collection = collection) === null || _collection === void 0 ? void 0 : (_collection_upload = _collection.upload) === null || _collection_upload === void 0 ? void 0 : (_collection_upload_mimeTypes = _collection_upload.mimeTypes) === null || _collection_upload_mimeTypes === void 0 ? void 0 : _collection_upload_mimeTypes.join(","),
        onChange: handleInputChange
    })));
};
var _default = Upload;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0VkaXQvVXBsb2FkL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZURvY3VtZW50SW5mbyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9Eb2N1bWVudEluZm8nO1xuaW1wb3J0IHVzZUZpZWxkIGZyb20gJy4uLy4uLy4uLy4uL2Zvcm1zL3VzZUZpZWxkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vLi4vLi4vZWxlbWVudHMvQnV0dG9uJztcbmltcG9ydCBGaWxlRGV0YWlscyBmcm9tICcuLi8uLi8uLi8uLi9lbGVtZW50cy9GaWxlRGV0YWlscyc7XG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vLi4vLi4vLi4vZm9ybXMvRXJyb3InO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCByZWR1Y2VGaWVsZHNUb1ZhbHVlcyBmcm9tICcuLi8uLi8uLi8uLi9mb3Jtcy9Gb3JtL3JlZHVjZUZpZWxkc1RvVmFsdWVzJztcbmltcG9ydCBMYWJlbCBmcm9tICcuLi8uLi8uLi8uLi9mb3Jtcy9MYWJlbCc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2ZpbGUtZmllbGQnO1xuXG5jb25zdCBoYW5kbGVEcmFnID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xufTtcblxuY29uc3QgdmFsaWRhdGUgPSAodmFsdWUpID0+IHtcbiAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICdBIGZpbGUgaXMgcmVxdWlyZWQuJztcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgVXBsb2FkOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbGxlY3Rpb24sXG4gICAgaW50ZXJuYWxTdGF0ZSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBkcm9wUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbc2VsZWN0aW5nRmlsZSwgc2V0U2VsZWN0aW5nRmlsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkcmFnZ2luZywgc2V0RHJhZ2dpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZHJhZ0NvdW50ZXIsIHNldERyYWdDb3VudGVyXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcmVwbGFjaW5nRmlsZSwgc2V0UmVwbGFjaW5nRmlsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oWyd1cGxvYWQnLCAnZ2VuZXJhbCddKTtcbiAgY29uc3QgW2RvYywgc2V0RG9jXSA9IHVzZVN0YXRlKHJlZHVjZUZpZWxkc1RvVmFsdWVzKGludGVybmFsU3RhdGUgfHwge30sIHRydWUpKTtcbiAgY29uc3QgeyBkb2NQZXJtaXNzaW9ucyB9ID0gdXNlRG9jdW1lbnRJbmZvKCk7XG5cbiAgY29uc3Qge1xuICAgIHZhbHVlLFxuICAgIHNldFZhbHVlLFxuICAgIHNob3dFcnJvcixcbiAgICBlcnJvck1lc3NhZ2UsXG4gIH0gPSB1c2VGaWVsZDx7IG5hbWU6IHN0cmluZyB9Pih7XG4gICAgcGF0aDogJ2ZpbGUnLFxuICAgIHZhbGlkYXRlLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVEcmFnSW4gPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHNldERyYWdDb3VudGVyKChjb3VudCkgPT4gY291bnQgKyAxKTtcbiAgICBpZiAoZS5kYXRhVHJhbnNmZXIuaXRlbXMgJiYgZS5kYXRhVHJhbnNmZXIuaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgc2V0RHJhZ2dpbmcodHJ1ZSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlRHJhZ091dCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgc2V0RHJhZ0NvdW50ZXIoKGNvdW50KSA9PiBjb3VudCAtIDEpO1xuICAgIGlmIChkcmFnQ291bnRlciA+IDEpIHJldHVybjtcbiAgICBzZXREcmFnZ2luZyhmYWxzZSk7XG4gIH0sIFtkcmFnQ291bnRlcl0pO1xuXG4gIGNvbnN0IGhhbmRsZURyb3AgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHNldERyYWdnaW5nKGZhbHNlKTtcblxuICAgIGlmIChlLmRhdGFUcmFuc2Zlci5maWxlcyAmJiBlLmRhdGFUcmFuc2Zlci5maWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBzZXRWYWx1ZShlLmRhdGFUcmFuc2Zlci5maWxlc1swXSk7XG4gICAgICBzZXREcmFnZ2luZyhmYWxzZSk7XG5cbiAgICAgIGUuZGF0YVRyYW5zZmVyLmNsZWFyRGF0YSgpO1xuICAgICAgc2V0RHJhZ0NvdW50ZXIoMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldERyYWdnaW5nKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtzZXRWYWx1ZV0pO1xuXG4gIGNvbnN0IGhhbmRsZUZpbGVOYW1lQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZEZpbGVOYW1lID0gZS50YXJnZXQudmFsdWU7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBjb25zdCBmaWxlVmFsdWUgPSB2YWx1ZSBhcyBGaWxlO1xuICAgICAgLy8gQ3JlYXRpbmcgYSBuZXcgRmlsZSBvYmplY3Qgd2l0aCB1cGRhdGVkIHByb3BlcnRpZXNcbiAgICAgIGNvbnN0IG5ld0ZpbGUgPSBuZXcgRmlsZShbZmlsZVZhbHVlXSwgdXBkYXRlZEZpbGVOYW1lLCB7IHR5cGU6IGZpbGVWYWx1ZS50eXBlIH0pO1xuICAgICAgc2V0VmFsdWUobmV3RmlsZSk7IC8vIFVwZGF0aW5nIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgRmlsZSBvYmplY3RcbiAgICB9XG4gIH07XG5cbiAgLy8gT25seSBjYWxsZWQgd2hlbiBpbnB1dCBpcyBpbnRlcmFjdGVkIHdpdGggZGlyZWN0bHlcbiAgLy8gTm90IGNhbGxlZCB3aGVuIGRyYWcgKyBkcm9wIGlzIHVzZWRcbiAgLy8gT3Igd2hlbiBpbnB1dCBpcyBjbGVhcmVkXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNlbGVjdGluZ0ZpbGUoZmFsc2UpO1xuICAgIHNldFZhbHVlKGlucHV0UmVmPy5jdXJyZW50Py5maWxlcz8uWzBdIHx8IG51bGwpO1xuICB9LCBbaW5wdXRSZWYsIHNldFZhbHVlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2VsZWN0aW5nRmlsZSkge1xuICAgICAgaW5wdXRSZWYuY3VycmVudC5jbGljaygpO1xuICAgICAgc2V0U2VsZWN0aW5nRmlsZShmYWxzZSk7XG4gICAgfVxuICB9LCBbc2VsZWN0aW5nRmlsZSwgaW5wdXRSZWYsIHNldFNlbGVjdGluZ0ZpbGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldERvYyhyZWR1Y2VGaWVsZHNUb1ZhbHVlcyhpbnRlcm5hbFN0YXRlIHx8IHt9LCB0cnVlKSk7XG4gICAgc2V0UmVwbGFjaW5nRmlsZShmYWxzZSk7XG4gIH0sIFtpbnRlcm5hbFN0YXRlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkcm9wUmVmLmN1cnJlbnQ7XG4gICAgaWYgKGRpdikge1xuICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGhhbmRsZURyYWdJbik7XG4gICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgaGFuZGxlRHJhZ091dCk7XG4gICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBoYW5kbGVEcmFnKTtcbiAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgaGFuZGxlRHJvcCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGRpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBoYW5kbGVEcmFnSW4pO1xuICAgICAgICBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgaGFuZGxlRHJhZ091dCk7XG4gICAgICAgIGRpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGhhbmRsZURyYWcpO1xuICAgICAgICBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIGhhbmRsZURyb3ApO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4gbnVsbDtcbiAgfSwgW2hhbmRsZURyYWdJbiwgaGFuZGxlRHJhZ091dCwgaGFuZGxlRHJvcCwgdmFsdWVdKTtcblxuICBjb25zdCBjbGFzc2VzID0gW1xuICAgIGJhc2VDbGFzcyxcbiAgICBkcmFnZ2luZyAmJiBgJHtiYXNlQ2xhc3N9LS1kcmFnZ2luZ2AsXG4gICAgJ2ZpZWxkLXR5cGUnLFxuICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cbiAgY29uc3QgY2FuUmVtb3ZlVXBsb2FkID0gZG9jUGVybWlzc2lvbnM/LnVwZGF0ZT8ucGVybWlzc2lvbiAmJiAnZGVsZXRlJyBpbiBkb2NQZXJtaXNzaW9ucyAmJiBkb2NQZXJtaXNzaW9ucz8uZGVsZXRlPy5wZXJtaXNzaW9uO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgPEVycm9yXG4gICAgICAgIHNob3dFcnJvcj17c2hvd0Vycm9yfVxuICAgICAgICBtZXNzYWdlPXtlcnJvck1lc3NhZ2V9XG4gICAgICAvPlxuICAgICAgeyhkb2MuZmlsZW5hbWUgJiYgIXJlcGxhY2luZ0ZpbGUpICYmIChcbiAgICAgICAgPEZpbGVEZXRhaWxzXG4gICAgICAgICAgZG9jPXtkb2N9XG4gICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbn1cbiAgICAgICAgICBoYW5kbGVSZW1vdmU9e2NhblJlbW92ZVVwbG9hZCA/ICgpID0+IHtcbiAgICAgICAgICAgIHNldFJlcGxhY2luZ0ZpbGUodHJ1ZSk7XG4gICAgICAgICAgICBzZXRWYWx1ZShudWxsKTtcbiAgICAgICAgICB9IDogdW5kZWZpbmVkfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHsoIWRvYy5maWxlbmFtZSB8fCByZXBsYWNpbmdGaWxlKSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X191cGxvYWRgfT5cbiAgICAgICAgICB7dmFsdWUgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2ZpbGUtc2VsZWN0ZWRgfT5cbiAgICAgICAgICAgICAgPExhYmVsXG4gICAgICAgICAgICAgICAgbGFiZWw9e3QoJ2ZpbGVOYW1lJyl9XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2ZpbGUtdXBsb2FkYH0+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2ZpbGVuYW1lYH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVOYW1lQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgaWNvbj1cInhcIlxuICAgICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgIHRvb2x0aXA9e3QoJ2dlbmVyYWw6Y2FuY2VsJyl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dFJlZi5jdXJyZW50LnZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHshdmFsdWUgJiYgKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19kcm9wLXpvbmVgfVxuICAgICAgICAgICAgICAgIHJlZj17ZHJvcFJlZn1cbiAgICAgICAgICAgICAgICBvblBhc3RlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGU/LmNsaXBib2FyZERhdGE/LmZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlT2JqZWN0ID0gZS5jbGlwYm9hcmREYXRhLmZpbGVzWzBdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZU9iamVjdCkgc2V0VmFsdWUoZmlsZU9iamVjdCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RpbmdGaWxlKHRydWUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19maWxlLWJ1dHRvbmB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3QoJ3NlbGVjdEZpbGUnKX1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2RyYWctbGFiZWxgfT5cbiAgICAgICAgICAgICAgICAgIHt0KCdnZW5lcmFsOm9yJyl9XG4gICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAge3QoJ2RyYWdBbmREcm9wJyl9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICBhY2NlcHQ9e2NvbGxlY3Rpb24/LnVwbG9hZD8ubWltZVR5cGVzPy5qb2luKCcsJyl9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkO1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsImhhbmRsZURyYWciLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ2YWxpZGF0ZSIsInZhbHVlIiwidW5kZWZpbmVkIiwiVXBsb2FkIiwicHJvcHMiLCJkb2NQZXJtaXNzaW9ucyIsImNvbGxlY3Rpb24iLCJpbnRlcm5hbFN0YXRlIiwiaW5wdXRSZWYiLCJ1c2VSZWYiLCJkcm9wUmVmIiwidXNlU3RhdGUiLCJzZWxlY3RpbmdGaWxlIiwic2V0U2VsZWN0aW5nRmlsZSIsImRyYWdnaW5nIiwic2V0RHJhZ2dpbmciLCJkcmFnQ291bnRlciIsInNldERyYWdDb3VudGVyIiwicmVwbGFjaW5nRmlsZSIsInNldFJlcGxhY2luZ0ZpbGUiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJyZWR1Y2VGaWVsZHNUb1ZhbHVlcyIsImRvYyIsInNldERvYyIsInVzZURvY3VtZW50SW5mbyIsInVzZUZpZWxkIiwicGF0aCIsInNldFZhbHVlIiwic2hvd0Vycm9yIiwiZXJyb3JNZXNzYWdlIiwiaGFuZGxlRHJhZ0luIiwidXNlQ2FsbGJhY2siLCJjb3VudCIsImRhdGFUcmFuc2ZlciIsIml0ZW1zIiwibGVuZ3RoIiwiaGFuZGxlRHJhZ091dCIsImhhbmRsZURyb3AiLCJmaWxlcyIsImNsZWFyRGF0YSIsImhhbmRsZUZpbGVOYW1lQ2hhbmdlIiwidXBkYXRlZEZpbGVOYW1lIiwidGFyZ2V0IiwiZmlsZVZhbHVlIiwibmV3RmlsZSIsIkZpbGUiLCJ0eXBlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJjdXJyZW50IiwidXNlRWZmZWN0IiwiY2xpY2siLCJkaXYiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImNhblJlbW92ZVVwbG9hZCIsInVwZGF0ZSIsInBlcm1pc3Npb24iLCJkZWxldGUiLCJjbGFzc05hbWUiLCJFcnJvciIsIm1lc3NhZ2UiLCJmaWxlbmFtZSIsIkZpbGVEZXRhaWxzIiwiaGFuZGxlUmVtb3ZlIiwiTGFiZWwiLCJsYWJlbCIsInJlcXVpcmVkIiwiaW5wdXQiLCJuYW1lIiwib25DaGFuZ2UiLCJCdXR0b24iLCJpY29uIiwiYnV0dG9uU3R5bGUiLCJ0b29sdGlwIiwib25DbGljayIsIlJlYWN0IiwiRnJhZ21lbnQiLCJyZWYiLCJvblBhc3RlIiwiY2xpcGJvYXJkRGF0YSIsImZpbGVPYmplY3QiLCJzaXplIiwicCIsImFjY2VwdCIsInVwbG9hZCIsIm1pbWVUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFxT0E7OztlQUFBOzs7NkRBbk9POzRCQUN3Qjs0QkFDQzsrREFDWDs2REFDRjtrRUFDSzs0REFDTjsyRUFFZTs0REFDZjtRQUVYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUEsWUFBWTtBQUVsQixJQUFNQyxhQUFhLFNBQUNDO0lBQ2xCQSxFQUFFQyxjQUFjO0lBQ2hCRCxFQUFFRSxlQUFlO0FBQ25CO0FBRUEsSUFBTUMsV0FBVyxTQUFDQztJQUNoQixJQUFJLENBQUNBLFNBQVNBLFVBQVVDLFdBQVc7UUFDakMsT0FBTztJQUNUO0lBRUEsT0FBTztBQUNUO0FBRUEsSUFBTUMsU0FBMEIsU0FBQ0M7UUFrSFBDLHdCQUFBQSxpQkFBb0VBLHdCQUFBQSxrQkE0RTFFQyw4QkFBQUEsb0JBQUFBO0lBN0xsQixJQUNFQSxhQUVFRixNQUZGRSxZQUNBQyxnQkFDRUgsTUFERkc7SUFHRixJQUFNQyxXQUFXQyxJQUFBQSxhQUFNLEVBQUM7SUFDeEIsSUFBTUMsVUFBVUQsSUFBQUEsYUFBTSxFQUFDO0lBQ3ZCLElBQTBDRSw2QkFBQUEsSUFBQUEsZUFBUSxFQUFDLFlBQTVDQyxnQkFBbUNELGNBQXBCRSxtQkFBb0JGO0lBQzFDLElBQWdDQSw4QkFBQUEsSUFBQUEsZUFBUSxFQUFDLFlBQWxDRyxXQUF5QkgsZUFBZkksY0FBZUo7SUFDaEMsSUFBc0NBLDhCQUFBQSxJQUFBQSxlQUFRLEVBQUMsUUFBeENLLGNBQStCTCxlQUFsQk0s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