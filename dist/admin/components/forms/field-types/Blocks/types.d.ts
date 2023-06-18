import { BlockField } from '../../../../../fields/config/types';
import { FieldTypes } from '..';
import { FieldPermissions } from '../../../../../auth/types';
export type Props = Omit<BlockField, 'type'> & {
    path?: string;
    fieldTypes: FieldTypes;
    permissions: FieldPermissions;
    indexPath: string;
};
