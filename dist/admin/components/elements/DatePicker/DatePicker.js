"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_datepicker_1 = __importStar(require("react-datepicker"));
const Locales = __importStar(require("date-fns/locale"));
const react_i18next_1 = require("react-i18next");
const date_fns_1 = require("date-fns");
const Calendar_1 = __importDefault(require("../../icons/Calendar"));
const X_1 = __importDefault(require("../../icons/X"));
const getSupportedDateLocale_1 = require("../../../utilities/formatDate/getSupportedDateLocale");
require("react-datepicker/dist/react-datepicker.css");
require("./index.scss");
const baseClass = 'date-time-picker';
const DateTime = (props) => {
    var _a;
    const { value, onChange, displayFormat, pickerAppearance, minDate, maxDate, monthsToShow = 1, minTime, maxTime, timeIntervals = 30, timeFormat = 'h:mm aa', readOnly, placeholder: placeholderText, } = props;
    // Use the user's AdminUI language preference for the locale
    const { i18n } = (0, react_i18next_1.useTranslation)();
    const locale = (0, getSupportedDateLocale_1.getSupportedDateLocale)(i18n.language);
    try {
        (0, react_datepicker_1.registerLocale)(locale, Locales[locale]);
    }
    catch (e) {
        console.warn(`Could not find DatePicker locale for ${locale}`);
    }
    let dateTimeFormat = displayFormat;
    if (dateTimeFormat === undefined && pickerAppearance) {
        if (pickerAppearance === 'dayAndTime')
            dateTimeFormat = 'MMM d, yyy h:mm a';
        else if (pickerAppearance === 'timeOnly')
            dateTimeFormat = 'h:mm a';
        else if (pickerAppearance === 'dayOnly')
            dateTimeFormat = 'dd';
        else if (pickerAppearance === 'monthOnly')
            dateTimeFormat = 'MMMM';
        else
            dateTimeFormat = 'MMM d, yyy';
    }
    const defaultMinYear = 1990;
    let minYear = (_a = minDate === null || minDate === void 0 ? void 0 : minDate.getFullYear()) !== null && _a !== void 0 ? _a : defaultMinYear;
    // Years state:
    const [years, setYears] = (0, react_1.useState)(Array.from({ length: (0, date_fns_1.getYear)(maxDate !== null && maxDate !== void 0 ? maxDate : new Date()) - minYear + 1 }, (_, i) => i + minYear));
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const dateTimePickerProps = {
        minDate,
        maxDate,
        dateFormat: dateTimeFormat,
        monthsShown: Math.min(2, monthsToShow),
        showTimeSelect: pickerAppearance === 'dayAndTime' || pickerAppearance === 'timeOnly',
        minTime,
        maxTime,
        timeIntervals,
        timeFormat,
        placeholderText,
        disabled: readOnly,
        onChange,
        showPopperArrow: false,
        selected: value && new Date(value),
        customInputRef: 'ref',
        showMonthYearPicker: pickerAppearance === 'monthOnly',
        renderCustomHeader: ({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled, }) => (react_1.default.createElement("div", { className: "react-datepicker__current-month", style: {
                display: 'flex',
                justifyContent: 'center',
            } },
            react_1.default.createElement("button", { type: "button", onClick: () => {
                    const futureDate = (0, date_fns_1.sub)(date, { months: 1 }); // This is necessary, because increaseMonth() doesn't update the date immediately
                    decreaseMonth();
                    if (!minDate && (0, date_fns_1.getYear)(futureDate) < minYear) {
                        minYear = (0, date_fns_1.getYear)(futureDate);
                        const newYears = Array.from({ length: (0, date_fns_1.getYear)(maxDate !== null && maxDate !== void 0 ? maxDate : new Date()) - minYear + 1 }, (_, i) => i + minYear);
                        setYears(newYears);
                    }
                }, disabled: prevMonthButtonDisabled, "aria-label": "Previous Month", className: "react-datepicker__navigation react-datepicker__navigation--previous" },
                react_1.default.createElement("span", { className: "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous" }, "Previous Month")),
            react_1.default.createElement("div", { style: {
                    display: 'flex',
                    gap: 4,
                } },
                pickerAppearance !== 'monthOnly' && (react_1.default.createElement("select", { value: months[(0, date_fns_1.getMonth)(date)], onChange: ({ target }) => changeMonth(months.indexOf(target.value)) }, months.map((option) => (react_1.default.createElement("option", { key: option, value: option }, option))))),
                react_1.default.createElement("select", { value: (0, date_fns_1.getYear)(date), onChange: ({ target }) => changeYear(target.value) }, years.map((option) => (react_1.default.createElement("option", { key: option, value: option }, option))))),
            react_1.default.createElement("button", { type: "button", onClick: () => {
                    const futureDate = (0, date_fns_1.add)(date, { months: 1 }); // This is necessary, because increaseMonth() doesn't update the date immediately
                    increaseMonth();
                    if (!maxDate && (0, date_fns_1.getYear)(futureDate) > (0, date_fns_1.getYear)(new Date())) {
                        const newYears = Array.from({ length: (0, date_fns_1.getYear)(futureDate) - minYear + 1 }, (_, i) => i + minYear);
                        setYears(newYears);
                    }
                }, disabled: nextMonthButtonDisabled, "aria-label": "Next Month", className: "react-datepicker__navigation react-datepicker__navigation--next" },
                react_1.default.createElement("span", { className: "react-datepicker__navigation-icon react-datepicker__navigation-icon--next" }, "Next Month")))),
    };
    const classes = [
        baseClass,
        `${baseClass}__appearance--${pickerAppearance}`,
    ].filter(Boolean).join(' ');
    return (react_1.default.createElement("div", { className: classes },
        react_1.default.createElement("div", { className: `${baseClass}__icon-wrap` },
            dateTimePickerProps.selected && (react_1.default.createElement("button", { type: "button", className: `${baseClass}__clear-button`, onClick: () => onChange(null) },
                react_1.default.createElement(X_1.default, null))),
            react_1.default.createElement(Calendar_1.default, null)),
        react_1.default.createElement("div", { className: `${baseClass}__input-wrapper` },
            react_1.default.createElement(react_datepicker_1.default, { ...dateTimePickerProps, onChange: (val) => onChange(val), locale: locale, popperModifiers: [
                    {
                        name: 'preventOverflow',
                        enabled: true,
                    },
                ] }))));
};
exports.default = DateTime;
//# sourceMappingURL=DatePicker.js.map