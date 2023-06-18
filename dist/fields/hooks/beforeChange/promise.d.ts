import { Field, TabAsField } from '../../config/types';
import { Operation } from '../../../types';
import { PayloadRequest, PayloadRequestContext } from '../../../express/types';
type Args = {
    data: Record<string, unknown>;
    doc: Record<string, unknown>;
    docWithLocales: Record<string, unknown>;
    errors: {
        message: string;
        field: string;
    }[];
    field: Field | TabAsField;
    id?: string | number;
    mergeLocaleActions: (() => void)[];
    operation: Operation;
    path: string;
    req: PayloadRequest;
    siblingData: Record<string, unknown>;
    siblingDoc: Record<string, unknown>;
    siblingDocWithLocales?: Record<string, unknown>;
    skipValidation: boolean;
    context: PayloadRequestContext;
};
export declare const promise: ({ data, doc, docWithLocales, errors, field, id, mergeLocaleActions, operation, path, req, siblingData, siblingDoc, siblingDocWithLocales, skipValidation, context, }: Args) => Promise<void>;
export {};
