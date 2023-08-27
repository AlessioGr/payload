import type { TFunction } from 'i18next';
import { User } from '../../../../../auth/types.js';
import { Field as FieldSchema } from '../../../../../fields/config/types.js';
import { Fields, Data } from '../types.js';
import { iterateFields } from './iterateFields.js';

type Args = {
  fieldSchema: FieldSchema[]
  data?: Data,
  siblingData?: Data,
  user?: User,
  id?: string | number,
  operation?: 'create' | 'update'
  locale: string
  t: TFunction
  preferences: {
    [key: string]: unknown
  }
}

const buildStateFromSchema = async (args: Args): Promise<Fields> => {
  const {
    fieldSchema,
    data: fullData = {},
    user,
    id,
    operation,
    locale,
    t,
    preferences,
  } = args;

  if (fieldSchema) {
    const state: Fields = {};

    await iterateFields({
      state,
      fields: fieldSchema,
      id,
      locale,
      operation,
      path: '',
      user,
      data: fullData,
      fullData,
      parentPassesCondition: true,
      t,
      preferences,
    });

    return state;
  }

  return {};
};


export default buildStateFromSchema;
