import { Config as GeneratedTypes } from 'payload/generated-types';
import { PayloadRequest, PayloadRequestContext } from '../../../express/types';
import { Document } from '../../../types';
import { Payload } from '../../../payload';
import { CollectionSlug } from '../../config/types';
export type Options<T extends CollectionSlug> = {
    collection: T;
    id: string | number;
    depth?: number;
    currentDepth?: number;
    locale?: string;
    fallbackLocale?: string;
    user?: Document;
    overrideAccess?: boolean;
    showHiddenFields?: boolean;
    disableErrors?: boolean;
    req?: PayloadRequest;
    draft?: boolean;
    /**
     * context, which will then be passed to req.payloadContext, which can be read by hooks
     */
    context?: PayloadRequestContext;
};
export default function findByIDLocal<T extends CollectionSlug>(payload: Payload, options: Options<T>): Promise<GeneratedTypes['collections'][T]>;
