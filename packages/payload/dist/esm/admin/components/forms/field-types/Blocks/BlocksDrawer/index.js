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
import React, { useState, useEffect } from "react";
import { useModal } from "@faceless-ui/modal";
import { useTranslation } from "react-i18next";
import BlockSearch from "./BlockSearch";
import { Drawer } from "../../../../elements/Drawer";
import { getTranslation } from "../../../../../../utilities/getTranslation";
import { ThumbnailCard } from "../../../../elements/ThumbnailCard";
import DefaultBlockImage from "../../../../graphics/DefaultBlockImage";
import "./index.scss";
var baseClass = "blocks-drawer";
var getBlockLabel = function(block, i18n) {
    if (typeof block.labels.singular === "string") return block.labels.singular.toLowerCase();
    if (typeof block.labels.singular === "object") {
        return getTranslation(block.labels.singular, i18n).toLowerCase();
    }
    return "";
};
export var BlocksDrawer = function(props) {
    var _filteredBlocks;
    var blocks = props.blocks, addRow = props.addRow, addRowIndex = props.addRowIndex, drawerSlug = props.drawerSlug, labels = props.labels;
    var _useState = _sliced_to_array(useState(""), 2), searchTerm = _useState[0], setSearchTerm = _useState[1];
    var _useState1 = _sliced_to_array(useState(blocks), 2), filteredBlocks = _useState1[0], setFilteredBlocks = _useState1[1];
    var _useModal = useModal(), closeModal = _useModal.closeModal, isModalOpen = _useModal.isModalOpen;
    var _useTranslation = useTranslation("fields"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    useEffect(function() {
        if (!isModalOpen) {
            setSearchTerm("");
        }
    }, [
        isModalOpen
    ]);
    useEffect(function() {
        var searchTermToUse = searchTerm.toLowerCase();
        var matchingBlocks = blocks.reduce(function(matchedBlocks, block) {
            var blockLabel = getBlockLabel(block, i18n);
            if (blockLabel.includes(searchTermToUse)) matchedBlocks.push(block);
            return matchedBlocks;
        }, []);
        setFilteredBlocks(matchingBlocks);
    }, [
        searchTerm,
        blocks,
        i18n
    ]);
    return /*#__PURE__*/ React.createElement(Drawer, {
        slug: drawerSlug,
        title: t("addLabel", {
            label: getTranslation(labels.singular, i18n)
        })
    }, /*#__PURE__*/ React.createElement(BlockSearch, {
        setSearchTerm: setSearchTerm
    }), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__blocks-wrapper")
    }, /*#__PURE__*/ React.createElement("ul", {
        className: "".concat(baseClass, "__blocks")
    }, (_filteredBlocks = filteredBlocks) === null || _filteredBlocks === void 0 ? void 0 : _filteredBlocks.map(function(block, index) {
        var blockLabels = block.labels, slug = block.slug, imageURL = block.imageURL, imageAltText = block.imageAltText;
        return /*#__PURE__*/ React.createElement("li", {
            key: index,
            className: "".concat(baseClass, "__block")
        }, /*#__PURE__*/ React.createElement(ThumbnailCard, {
            onClick: function() {
                addRow(addRowIndex, slug);
                closeModal(drawerSlug);
            },
            thumbnail: imageURL ? /*#__PURE__*/ React.createElement("img", {
                src: imageURL,
                alt: imageAltText
            }) : /*#__PURE__*/ React.createElement("div", {
                className: "".concat(baseClass, "__default-image")
            }, /*#__PURE__*/ React.createElement(DefaultBlockImage, null)),
            label: getTranslation(blockLabels.singular, i18n),
            alignLabel: "center"
        }));
    }))));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0Jsb2Nrcy9CbG9ja3NEcmF3ZXIvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdAZmFjZWxlc3MtdWkvbW9kYWwnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB0eXBlIHsgaTE4biB9IGZyb20gJ2kxOG5leHQnO1xuaW1wb3J0IEJsb2NrU2VhcmNoIGZyb20gJy4vQmxvY2tTZWFyY2gnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IERyYXdlciB9IGZyb20gJy4uLy4uLy4uLy4uL2VsZW1lbnRzL0RyYXdlcic7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5pbXBvcnQgeyBUaHVtYm5haWxDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZWxlbWVudHMvVGh1bWJuYWlsQ2FyZCc7XG5pbXBvcnQgRGVmYXVsdEJsb2NrSW1hZ2UgZnJvbSAnLi4vLi4vLi4vLi4vZ3JhcGhpY3MvRGVmYXVsdEJsb2NrSW1hZ2UnO1xuaW1wb3J0IHsgQmxvY2sgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnYmxvY2tzLWRyYXdlcic7XG5cbmNvbnN0IGdldEJsb2NrTGFiZWwgPSAoYmxvY2s6IEJsb2NrLCBpMThuOiBpMThuKSA9PiB7XG4gIGlmICh0eXBlb2YgYmxvY2subGFiZWxzLnNpbmd1bGFyID09PSAnc3RyaW5nJykgcmV0dXJuIGJsb2NrLmxhYmVscy5zaW5ndWxhci50b0xvd2VyQ2FzZSgpO1xuICBpZiAodHlwZW9mIGJsb2NrLmxhYmVscy5zaW5ndWxhciA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZ2V0VHJhbnNsYXRpb24oYmxvY2subGFiZWxzLnNpbmd1bGFyLCBpMThuKS50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIHJldHVybiAnJztcbn07XG5cbmV4cG9ydCBjb25zdCBCbG9ja3NEcmF3ZXI6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgYmxvY2tzLFxuICAgIGFkZFJvdyxcbiAgICBhZGRSb3dJbmRleCxcbiAgICBkcmF3ZXJTbHVnLFxuICAgIGxhYmVscyxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2ZpbHRlcmVkQmxvY2tzLCBzZXRGaWx0ZXJlZEJsb2Nrc10gPSB1c2VTdGF0ZShibG9ja3MpO1xuICBjb25zdCB7IGNsb3NlTW9kYWwsIGlzTW9kYWxPcGVuIH0gPSB1c2VNb2RhbCgpO1xuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdmaWVsZHMnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNNb2RhbE9wZW4pIHtcbiAgICAgIHNldFNlYXJjaFRlcm0oJycpO1xuICAgIH1cbiAgfSwgW2lzTW9kYWxPcGVuXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzZWFyY2hUZXJtVG9Vc2UgPSBzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgbWF0Y2hpbmdCbG9ja3MgPSBibG9ja3MucmVkdWNlKChtYXRjaGVkQmxvY2tzLCBibG9jaykgPT4ge1xuICAgICAgY29uc3QgYmxvY2tMYWJlbCA9IGdldEJsb2NrTGFiZWwoYmxvY2ssIGkxOG4pO1xuICAgICAgaWYgKGJsb2NrTGFiZWwuaW5jbHVkZXMoc2VhcmNoVGVybVRvVXNlKSkgbWF0Y2hlZEJsb2Nrcy5wdXNoKGJsb2NrKTtcbiAgICAgIHJldHVybiBtYXRjaGVkQmxvY2tzO1xuICAgIH0sIFtdKTtcblxuICAgIHNldEZpbHRlcmVkQmxvY2tzKG1hdGNoaW5nQmxvY2tzKTtcbiAgfSwgW3NlYXJjaFRlcm0sIGJsb2NrcywgaTE4bl0pO1xuXG4gIHJldHVybiAoXG4gICAgPERyYXdlclxuICAgICAgc2x1Zz17ZHJhd2VyU2x1Z31cbiAgICAgIHRpdGxlPXt0KCdhZGRMYWJlbCcsIHsgbGFiZWw6IGdldFRyYW5zbGF0aW9uKGxhYmVscy5zaW5ndWxhciwgaTE4bikgfSl9XG4gICAgPlxuICAgICAgPEJsb2NrU2VhcmNoIHNldFNlYXJjaFRlcm09e3NldFNlYXJjaFRlcm19IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYmxvY2tzLXdyYXBwZXJgfT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYmxvY2tzYH0+XG4gICAgICAgICAge2ZpbHRlcmVkQmxvY2tzPy5tYXAoKGJsb2NrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICBsYWJlbHM6IGJsb2NrTGFiZWxzLFxuICAgICAgICAgICAgICBzbHVnLFxuICAgICAgICAgICAgICBpbWFnZVVSTCxcbiAgICAgICAgICAgICAgaW1hZ2VBbHRUZXh0LFxuICAgICAgICAgICAgfSA9IGJsb2NrO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYmxvY2tgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRodW1ibmFpbENhcmRcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkUm93KGFkZFJvd0luZGV4LCBzbHVnKTtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VNb2RhbChkcmF3ZXJTbHVnKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB0aHVtYm5haWw9e2ltYWdlVVJMID8gKFxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVVSTH1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2ltYWdlQWx0VGV4dH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19kZWZhdWx0LWltYWdlYH0+XG4gICAgICAgICAgICAgICAgICAgICAgPERlZmF1bHRCbG9ja0ltYWdlIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtnZXRUcmFuc2xhdGlvbihibG9ja0xhYmVscy5zaW5ndWxhciwgaTE4bil9XG4gICAgICAgICAgICAgICAgICBhbGlnbkxhYmVsPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvRHJhd2VyPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlTW9kYWwiLCJ1c2VUcmFuc2xhdGlvbiIsIkJsb2NrU2VhcmNoIiwiRHJhd2VyIiwiZ2V0VHJhbnNsYXRpb24iLCJUaHVtYm5haWxDYXJkIiwiRGVmYXVsdEJsb2NrSW1hZ2UiLCJiYXNlQ2xhc3MiLCJnZXRCbG9ja0xhYmVsIiwiYmxvY2siLCJpMThuIiwibGFiZWxzIiwic2luZ3VsYXIiLCJ0b0xvd2VyQ2FzZSIsIkJsb2Nrc0RyYXdlciIsInByb3BzIiwiZmlsdGVyZWRCbG9ja3MiLCJibG9ja3MiLCJhZGRSb3ciLCJhZGRSb3dJbmRleCIsImRyYXdlclNsdWciLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInNldEZpbHRlcmVkQmxvY2tzIiwiY2xvc2VNb2RhbCIsImlzTW9kYWxPcGVuIiwidCIsInNlYXJjaFRlcm1Ub1VzZSIsIm1hdGNoaW5nQmxvY2tzIiwicmVkdWNlIiwibWF0Y2hlZEJsb2NrcyIsImJsb2NrTGFiZWwiLCJpbmNsdWRlcyIsInB1c2giLCJzbHVnIiwidGl0bGUiLCJsYWJlbCIsImRpdiIsImNsYXNzTmFtZSIsInVsIiwibWFwIiwiaW5kZXgiLCJibG9ja0xhYmVscyIsImltYWdlVVJMIiwiaW1hZ2VBbHRUZXh0IiwibGkiLCJrZXkiLCJvbkNsaWNrIiwidGh1bWJuYWlsIiwiaW1nIiwic3JjIiwiYWx0IiwiYWxpZ25MYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQVNDLFFBQVEsRUFBRUMsU0FBUyxRQUFRLFFBQVE7QUFDbkQsU0FBU0MsUUFBUSxRQUFRLHFCQUFxQjtBQUM5QyxTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBRS9DLE9BQU9DLGlCQUFpQixnQkFBZ0I7QUFFeEMsU0FBU0MsTUFBTSxRQUFRLDhCQUE4QjtBQUNyRCxTQUFTQyxjQUFjLFFBQVEsNkNBQTZDO0FBQzVFLFNBQVNDLGFBQWEsUUFBUSxxQ0FBcUM7QUFDbkUsT0FBT0MsdUJBQXVCLHlDQUF5QztBQUd2RSxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxnQkFBZ0IsU0FBQ0MsT0FBY0M7SUFDbkMsSUFBSSxPQUFPRCxNQUFNRSxNQUFNLENBQUNDLFFBQVEsS0FBSyxVQUFVLE9BQU9ILE1BQU1FLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxX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