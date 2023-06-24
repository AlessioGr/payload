import { Config as GeneratedTypes } from 'payload/generated-types';
import { Payload } from '../../../payload';
import { Document } from '../../../types';
import { PayloadRequest, PayloadRequestContext } from '../../../express/types';
import { TypeWithVersion } from '../../../versions/types';
import { CollectionSlug } from '../../config/types';
export type Options<T extends CollectionSlug> = {
    collection: T;
    id: string;
    depth?: number;
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
export default function findVersionByIDLocal<T extends CollectionSlug>(payload: Payload, options: Options<T>): Promise<TypeWithVersion<GeneratedTypes['collections'][T]>>;
