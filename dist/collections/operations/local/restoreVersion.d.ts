import { Config as GeneratedTypes } from 'payload/generated-types';
import { Payload } from '../../../payload';
import { PayloadRequestContext } from '../../../express/types';
import { Document } from '../../../types';
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
    draft?: boolean;
    /**
     * context, which will then be passed to req.payloadContext, which can be read by hooks
     */
    context?: PayloadRequestContext;
};
export default function restoreVersionLocal<T extends CollectionSlug>(payload: Payload, options: Options<T>): Promise<GeneratedTypes['collections'][T]>;
