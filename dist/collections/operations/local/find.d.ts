import { Config as GeneratedTypes } from 'payload/generated-types';
import { PaginatedDocs } from '../../../mongoose/types';
import { Document, Where } from '../../../types';
import { Payload } from '../../../payload';
import { PayloadRequest, PayloadRequestContext } from '../../../express/types';
import { CollectionSlug } from '../../config/types';
export type Options<T extends CollectionSlug> = {
    collection: T;
    depth?: number;
    currentDepth?: number;
    page?: number;
    limit?: number;
    locale?: string;
    fallbackLocale?: string;
    user?: Document;
    overrideAccess?: boolean;
    disableErrors?: boolean;
    showHiddenFields?: boolean;
    pagination?: boolean;
    sort?: string;
    where?: Where;
    draft?: boolean;
    req?: PayloadRequest;
    /**
     * context, which will then be passed to req.payloadContext, which can be read by hooks
     */
    context?: PayloadRequestContext;
};
export default function findLocal<T extends CollectionSlug>(payload: Payload, options: Options<T>): Promise<PaginatedDocs<GeneratedTypes['collections'][T]>>;
