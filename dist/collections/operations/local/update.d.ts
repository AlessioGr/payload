import { Config as GeneratedTypes } from 'payload/generated-types';
import { DeepPartial } from 'ts-essentials';
import { Payload } from '../../../payload';
import { Document, Where } from '../../../types';
import { PayloadRequestContext } from '../../../express/types';
import { File } from '../../../uploads/types';
import { BulkOperationResult, CollectionSlug } from '../../config/types';
export type BaseOptions<TSlug extends CollectionSlug> = {
    collection: TSlug;
    data: DeepPartial<GeneratedTypes['collections'][TSlug]>;
    depth?: number;
    locale?: string;
    fallbackLocale?: string;
    user?: Document;
    overrideAccess?: boolean;
    showHiddenFields?: boolean;
    filePath?: string;
    file?: File;
    overwriteExistingFiles?: boolean;
    draft?: boolean;
    autosave?: boolean;
    /**
     * context, which will then be passed to req.payloadContext, which can be read by hooks
     */
    context?: PayloadRequestContext;
};
export type ByIDOptions<TSlug extends CollectionSlug> = BaseOptions<TSlug> & {
    id: string | number;
    where?: never;
};
export type ManyOptions<TSlug extends CollectionSlug> = BaseOptions<TSlug> & {
    where: Where;
    id?: never;
};
export type Options<TSlug extends CollectionSlug> = ByIDOptions<TSlug> | ManyOptions<TSlug>;
declare function updateLocal<TSlug extends CollectionSlug>(payload: Payload, options: ByIDOptions<TSlug>): Promise<GeneratedTypes['collections'][TSlug]>;
declare function updateLocal<TSlug extends CollectionSlug>(payload: Payload, options: ManyOptions<TSlug>): Promise<BulkOperationResult<TSlug>>;
declare function updateLocal<TSlug extends CollectionSlug>(payload: Payload, options: Options<TSlug>): Promise<GeneratedTypes['collections'][TSlug] | BulkOperationResult<TSlug>>;
export default updateLocal;
