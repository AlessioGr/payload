/// <reference types="react" />
declare const _default: {
    text: import("react").FC<import("./types").Props>;
    textarea: import("react").FC<import("./types").Props>;
    number: import("react").FC<import("./types").Props>;
    email: import("react").FC<import("./types").Props>;
    code: import("react").FC<import("./types").Props>;
    json: import("react").FC<import("./types").Props>;
    checkbox: import("react").FC<import("./types").Props>;
    radio: import("react").FC<import("./types").Props>;
    row: import("react").FC<import("./types").Props & {
        field: import("../../../../../../fields/config/types").FieldWithSubFields<any>;
    }>;
    collapsible: import("react").FC<import("./types").Props & {
        field: import("../../../../../../fields/config/types").FieldWithSubFields<any>;
    }>;
    group: import("react").FC<import("./types").Props & {
        field: import("../../../../../../fields/config/types").FieldWithSubFields<any>;
    }>;
    array: import("react").FC<import("./types").Props & {
        field: import("../../../../../../fields/config/types").BlockField<any> | import("../../../../../../fields/config/types").ArrayField<any>;
    }>;
    blocks: import("react").FC<import("./types").Props & {
        field: import("../../../../../../fields/config/types").BlockField<any> | import("../../../../../../fields/config/types").ArrayField<any>;
    }>;
    date: import("react").FC<import("./types").Props>;
    select: import("react").FC<import("./types").Props>;
    richText: import("react").FC<import("./types").Props>;
    relationship: import("react").FC<import("./types").Props & {
        field: import("../../../../../../fields/config/types").RelationshipField<any>;
    }>;
    upload: import("react").FC<import("./types").Props & {
        field: import("../../../../../../fields/config/types").RelationshipField<any>;
    }>;
    point: import("react").FC<import("./types").Props>;
    tabs: import("react").FC<import("./types").Props & {
        field: import("../../../../../../fields/config/types").TabsField<any>;
    }>;
};
export default _default;
