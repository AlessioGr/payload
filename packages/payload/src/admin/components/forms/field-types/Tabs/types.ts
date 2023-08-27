import { TabsField } from '../../../../../fields/config/types.js';
import { FieldTypes } from '../index.js';
import { FieldPermissions } from '../../../../../auth/types.js';

export type Props = Omit<TabsField, 'type'> & {
  path?: string
  fieldTypes: FieldTypes
  permissions: FieldPermissions
  indexPath: string
}
