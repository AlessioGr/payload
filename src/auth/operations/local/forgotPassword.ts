import { Config as GeneratedTypes } from 'payload/generated-types';
import { PayloadRequest } from '../../../express/types';
import forgotPassword, { Result } from '../forgotPassword';
import { Payload } from '../../../payload';
import { getDataLoader } from '../../../collections/dataloader';
import i18n from '../../../translations/init';
import { APIError } from '../../../errors';
import { CollectionSlug } from '../../../collections/config/types';
import { populateDefaultRequest } from '../../../express/defaultRequest';

export type Options<T extends CollectionSlug> = {
  collection: T
  data: {
    email: string
  }
  expiration?: number
  disableEmail?: boolean
  req?: PayloadRequest
}

async function localForgotPassword<T extends CollectionSlug>(
  payload: Payload,
  options: Options<T>,
): Promise<Result> {
  const {
    collection: collectionSlug,
    data,
    expiration,
    disableEmail,
    req = {} as PayloadRequest,
  } = options;
  populateDefaultRequest(options.req);

  const collection = payload.collections[collectionSlug];

  if (!collection) {
    throw new APIError(`The collection with slug ${String(collectionSlug)} can't be found.`);
  }

  req.payloadAPI = 'local';
  req.payload = payload;
  req.i18n = i18n(payload.config.i18n);

  if (!req.t) req.t = req.i18n.t;
  if (!req.payloadDataLoader) req.payloadDataLoader = getDataLoader(req);

  return forgotPassword({
    data,
    collection,
    disableEmail,
    expiration,
    req,
  });
}

export default localForgotPassword;
