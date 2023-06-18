import { Response } from 'express';
import { Config as GeneratedTypes } from 'payload/generated-types';
import { Collection, CollectionSlug } from '../../config/types';
import { PayloadRequest } from '../../../express/types';
export type Resolver<TSlug extends CollectionSlug> = (_: unknown, args: {
    id: string | number;
    data: GeneratedTypes['collections'][TSlug];
    locale?: string;
    draft: boolean;
    autosave: boolean;
}, context: {
    req: PayloadRequest;
    res: Response;
}) => Promise<GeneratedTypes['collections'][TSlug]>;
export default function updateResolver<TSlug extends CollectionSlug>(collection: Collection): Resolver<TSlug>;
