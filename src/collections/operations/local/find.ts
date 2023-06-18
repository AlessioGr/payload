import { Config as GeneratedTypes } from 'payload/generated-types';
import { PaginatedDocs } from '../../../mongoose/types';
import { Document, Where } from '../../../types';
import { Payload } from '../../../payload';
import { PayloadRequest, PayloadRequestContext } from '../../../express/types';
import find from '../find';
import { getDataLoader } from '../../dataloader';
import i18n from '../../../translations/init';
import { APIError } from '../../../errors';
import { CollectionSlug } from '../../config/types';
import { populateDefaultRequest } from '../../../express/defaultRequest';

export type Options<T extends CollectionSlug> = {
  collection: T
  depth?: number
  currentDepth?: number
  page?: number
  limit?: number
  locale?: string
  fallbackLocale?: string
  user?: Document
  overrideAccess?: boolean
  disableErrors?: boolean
  showHiddenFields?: boolean
  pagination?: boolean
  sort?: string
  where?: Where
  draft?: boolean
  req?: PayloadRequest
  /**
   * context, which will then be passed to req.payloadContext, which can be read by hooks
   */
  context?: PayloadRequestContext
}

export default async function findLocal<T extends CollectionSlug>(
  payload: Payload,
  options: Options<T>,
): Promise<PaginatedDocs<GeneratedTypes['collections'][T]>> {
  const {
    collection: collectionSlug,
    depth,
    currentDepth,
    page,
    limit,
    where,
    locale = null,
    fallbackLocale = null,
    user,
    overrideAccess = true,
    disableErrors,
    showHiddenFields,
    sort,
    draft = false,
    pagination = true,
    req = {} as PayloadRequest,
    context,
  } = options;
  populateDefaultRequest(options.req, context);

  const collection = payload.collections[collectionSlug];
  const defaultLocale = payload?.config?.localization ? payload?.config?.localization?.defaultLocale : null;

  if (!collection) {
    throw new APIError(`The collection with slug ${String(collectionSlug)} can't be found.`);
  }

  req.payloadAPI = 'local';
  req.locale = locale ?? req?.locale ?? defaultLocale;
  req.fallbackLocale = fallbackLocale ?? req?.fallbackLocale ?? defaultLocale;
  req.i18n = i18n(payload.config.i18n);
  req.payload = payload;

  if (!req.t) req.t = req.i18n.t;
  if (!req.payloadDataLoader) req.payloadDataLoader = getDataLoader(req);

  if (typeof user !== 'undefined') req.user = user;

  return find<GeneratedTypes['collections'][T]>({
    depth,
    currentDepth,
    sort,
    page,
    limit,
    where,
    collection,
    overrideAccess,
    disableErrors,
    showHiddenFields,
    draft,
    pagination,
    req,
  });
}
