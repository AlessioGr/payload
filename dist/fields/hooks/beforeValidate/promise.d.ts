import { Field, TabAsField } from '../../config/types';
import { PayloadRequest, PayloadRequestContext } from '../../../express/types';
type Args<T> = {
    data: T;
    doc: T;
    field: Field | TabAsField;
    id?: string | number;
    operation: 'create' | 'update';
    overrideAccess: boolean;
    req: PayloadRequest;
    siblingData: Record<string, unknown>;
    siblingDoc: Record<string, unknown>;
    context: PayloadRequestContext;
};
export declare const promise: <T>({ data, doc, field, id, operation, overrideAccess, req, siblingData, siblingDoc, context, }: Args<T>) => Promise<void>;
export {};
