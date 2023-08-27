import { DeleteVersions } from '@alessiogr/payloadtest/database';
import { PayloadRequest } from '@alessiogr/payloadtest/types';
import type { MongooseAdapter } from './index.js';
import { withSession } from './withSession.js';

export const deleteVersions: DeleteVersions = async function deleteVersions(this: MongooseAdapter,
  { collection, where, locale, req = {} as PayloadRequest }) {
  const VersionsModel = this.versions[collection];
  const options = {
    ...withSession(this, req.transactionID),
    lean: true,
  };

  const query = await VersionsModel.buildQuery({
    payload: this.payload,
    locale,
    where,
  });

  await VersionsModel.deleteMany(query, options);
};
