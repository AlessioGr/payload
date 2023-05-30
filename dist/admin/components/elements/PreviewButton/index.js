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
const react_i18next_1 = require("react-i18next");
const react_toastify_1 = require("react-toastify");
const Auth_1 = require("../../utilities/Auth");
const Button_1 = __importDefault(require("../Button"));
const Locale_1 = require("../../utilities/Locale");
const DocumentInfo_1 = require("../../utilities/DocumentInfo");
const Config_1 = require("../../utilities/Config");
const RenderCustomComponent_1 = __importDefault(require("../../utilities/RenderCustomComponent"));
const baseClass = 'preview-btn';
const DefaultPreviewButton = ({ preview, disabled, label }) => {
    return (react_1.default.createElement(Button_1.default, { className: baseClass, buttonStyle: "secondary", onClick: preview, disabled: disabled }, label));
};
const PreviewButton = ({ CustomComponent, generatePreviewURL, }) => {
    const { id, collection, global } = (0, DocumentInfo_1.useDocumentInfo)();
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const locale = (0, Locale_1.useLocale)();
    const { token } = (0, Auth_1.useAuth)();
    const { serverURL, routes: { api } } = (0, Config_1.useConfig)();
    const { t } = (0, react_i18next_1.useTranslation)('version');
    const isGeneratingPreviewURL = (0, react_1.useRef)(false);
    // we need to regenerate the preview URL every time the button is clicked
    // to do this we need to fetch the document data fresh from the API
    // this will ensure the latest data is used when generating the preview URL
    const preview = (0, react_1.useCallback)(async () => {
        if (!generatePreviewURL || isGeneratingPreviewURL.current)
            return;
        isGeneratingPreviewURL.current = true;
        try {
            setIsLoading(true);
            let url = `${serverURL}${api}`;
            if (collection)
                url = `${url}/${collection.slug}/${id}`;
            if (global)
                url = `${url}/globals/${global.slug}`;
            const data = await fetch(`${url}?draft=true&locale=${locale}&fallback-locale=null`).then((res) => res.json());
            const previewURL = await generatePreviewURL(data, { locale, token });
            if (!previewURL)
                throw new Error();
            setIsLoading(false);
            isGeneratingPreviewURL.current = false;
            window.open(previewURL, '_blank');
        }
        catch (err) {
            setIsLoading(false);
            isGeneratingPreviewURL.current = false;
            react_toastify_1.toast.error(t('error:previewing'));
        }
    }, [serverURL, api, collection, global, id, generatePreviewURL, locale, token, t]);
    return (react_1.default.createElement(RenderCustomComponent_1.default, { CustomComponent: CustomComponent, DefaultComponent: DefaultPreviewButton, componentProps: {
            preview,
            disabled: isLoading || !generatePreviewURL,
            label: isLoading ? t('general:loading') : t('preview'),
            DefaultButton: DefaultPreviewButton,
        } }));
};
exports.default = PreviewButton;
//# sourceMappingURL=index.js.map