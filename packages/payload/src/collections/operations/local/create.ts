import { Config as GeneratedTypes } from 'payload/generated-types';
import { UploadedFile } from 'express-fileupload';
import { MarkOptional } from 'ts-essentials';
import { Payload } from '../../../payload.js';
import { PayloadRequest, RequestContext } from '../../../express/types.js';
import { Document } from '../../../types/index.js';
import getFileByPath from '../../../uploads/getFileByPath.js';
import create from '../create.js';
import { getDataLoader } from '../../dataloader.js';
import { File } from '../../../uploads/types.js';
import { i18nInit } from '../../../translations/init.js';
import { APIError } from '../../../errors/index.js';
import { setRequestContext } from '../../../express/setRequestContext.js';

export type Options<TSlug extends keyof GeneratedTypes['collections']> = {
  collection: TSlug
  data: MarkOptional<GeneratedTypes['collections'][TSlug], 'id' | 'updatedAt' | 'createdAt' | 'sizes'>
  depth?: number
  locale?: string
  fallbackLocale?: string
  user?: Document
  overrideAccess?: boolean
  disableVerificationEmail?: boolean
  showHiddenFields?: boolean
  filePath?: string
  file?: File
  overwriteExistingFiles?: boolean
  req?: PayloadRequest
  draft?: boolean
  /**
   * context, which will then be passed to req.context, which can be read by hooks
   */
  context?: RequestContext
}

export default async function createLocal<TSlug extends keyof GeneratedTypes['collections']>(
  payload: Payload,
  options: Options<TSlug>,
): Promise<GeneratedTypes['collections'][TSlug]> {
  const {
    collection: collectionSlug,
    depth,
    locale = null,
    fallbackLocale = null,
    data,
    user,
    overrideAccess = true,
    disableVerificationEmail,
    showHiddenFields,
    filePath,
    file,
    overwriteExistingFiles = false,
    req = {} as PayloadRequest,
    draft,
    context,
  } = options;
  setRequestContext(req, context);

  const collection = payload.collections[collectionSlug];
  const defaultLocale = payload?.config?.localization ? payload?.config?.localization?.defaultLocale : null;

  if (!collection) {
    throw new APIError(`The collection with slug ${String(collectionSlug)} can't be found. Create Operation.`);
  }

  req.payloadAPI = req.payloadAPI || 'local';
  req.locale = locale ?? req?.locale ?? defaultLocale;
  req.fallbackLocale = fallbackLocale ?? req?.fallbackLocale ?? defaultLocale;
  req.payload = payload;
  req.i18n = i18nInit(payload.config.i18n);
  req.files = {
    file: (file ?? (await getFileByPath(filePath))) as UploadedFile,
  };

  if (typeof user !== 'undefined') req.user = user;

  if (!req.t) req.t = req.i18n.t;
  if (!req.payloadDataLoader) req.payloadDataLoader = getDataLoader(req);

  return create<TSlug>({
    depth,
    data,
    collection,
    overrideAccess,
    disableVerificationEmail,
    showHiddenFields,
    overwriteExistingFiles,
    draft,
    req,
  });
}
