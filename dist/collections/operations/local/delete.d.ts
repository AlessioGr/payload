import { Config as GeneratedTypes } from '../../../generated-types';
import { Document, Where } from '../../../types';
import { PayloadRequestContext } from '../../../express/types';
import { Payload } from '../../../payload';
import { BulkOperationResult, CollectionSlug } from '../../config/types';
export type BaseOptions<T extends CollectionSlug> = {
    collection: T;
    depth?: number;
    locale?: string;
    fallbackLocale?: string;
    user?: Document;
    overrideAccess?: boolean;
    showHiddenFields?: boolean;
    /**
     * context, which will then be passed to req.payloadContext, which can be read by hooks
     */
    context?: PayloadRequestContext;
};
export type ByIDOptions<T extends CollectionSlug> = BaseOptions<T> & {
    id: string | number;
    where?: never;
};
export type ManyOptions<T extends CollectionSlug> = BaseOptions<T> & {
    where: Where;
    id?: never;
};
export type Options<TSlug extends CollectionSlug> = ByIDOptions<TSlug> | ManyOptions<TSlug>;
declare function deleteLocal<TSlug extends CollectionSlug>(payload: Payload, options: ByIDOptions<TSlug>): Promise<GeneratedTypes['collections'][TSlug]>;
declare function deleteLocal<TSlug extends CollectionSlug>(payload: Payload, options: ManyOptions<TSlug>): Promise<BulkOperationResult<TSlug>>;
declare function deleteLocal<TSlug extends CollectionSlug>(payload: Payload, options: Options<TSlug>): Promise<GeneratedTypes['collections'][TSlug] | BulkOperationResult<TSlug>>;
export default deleteLocal;
