import { Config as GeneratedTypes } from 'payload/generated-types';
import { Response } from 'express';
import { PayloadRequest } from '../../../express/types';
import { Collection, CollectionSlug } from '../../config/types';
export type Resolver<TSlug extends CollectionSlug> = (_: unknown, args: {
    locale?: string;
    fallbackLocale?: string;
}, context: {
    req: PayloadRequest;
    res: Response;
}) => Promise<GeneratedTypes['collections'][TSlug]>;
export default function getDeleteResolver<TSlug extends CollectionSlug>(collection: Collection): Resolver<TSlug>;
