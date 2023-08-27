import type { UpdateGlobal } from '@alessiogr/payloadtest/database';
import sanitizeInternalFields from './utilities/sanitizeInternalFields.js';
import type { PayloadRequest } from '@alessiogr/payloadtest/types';
import type { MongooseAdapter } from './index.js';
import { withSession } from './withSession.js';

export const updateGlobal: UpdateGlobal = async function updateGlobal(
  this: MongooseAdapter,
  { slug, data, req = {} as PayloadRequest },
) {
  const Model = this.globals;
  const options = {
    ...withSession(this, req.transactionID),
    new: true,
    lean: true,
  };

  let result;
  result = await Model.findOneAndUpdate(
    { globalType: slug },
    data,
    options,
  );

  result = JSON.parse(JSON.stringify(result));

  // custom id type reset
  result.id = result._id;
  result = sanitizeInternalFields(result);

  return result;
};
