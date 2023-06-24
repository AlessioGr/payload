import { Response } from 'express';
import { Config as GeneratedTypes } from 'payload/generated-types';
import { Result } from '../login';
import { PayloadRequest } from '../../../express/types';
import { Payload } from '../../../payload';
import { CollectionSlug } from '../../../collections/config/types';
export type Options<TSlug extends CollectionSlug> = {
    collection: TSlug;
    data: {
        email: string;
        password: string;
    };
    req?: PayloadRequest;
    res?: Response;
    depth?: number;
    locale?: string;
    fallbackLocale?: string;
    overrideAccess?: boolean;
    showHiddenFields?: boolean;
};
declare function localLogin<TSlug extends CollectionSlug>(payload: Payload, options: Options<TSlug>): Promise<Result & {
    user: GeneratedTypes['collections'][TSlug];
}>;
export default localLogin;
