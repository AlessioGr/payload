import React from 'react';
import RenderFieldsToDiff from '../../index.js';
import { Props } from '../types.js';
import { TabsField } from '../../../../../../../fields/config/types.js';
import Nested from '../Nested/index.js';

const baseClass = 'tabs-diff';

const Tabs: React.FC<Props & { field: TabsField }> = ({
  version,
  comparison,
  permissions,
  field,
  locales,
  fieldComponents,
}) => (
  <div className={baseClass}>
    <div className={`${baseClass}__wrap`}>
      {field.tabs.map((tab, i) => {
        if ('name' in tab) {
          return (
            <Nested
              key={i}
              version={version?.[tab.name]}
              comparison={comparison?.[tab.name]}
              permissions={permissions}
              field={tab}
              locales={locales}
              fieldComponents={fieldComponents}
            />
          );
        }

        return (
          <RenderFieldsToDiff
            key={i}
            locales={locales}
            version={version}
            comparison={comparison}
            fieldPermissions={permissions}
            fields={tab.fields}
            fieldComponents={fieldComponents}
          />
        );
      })}
    </div>
  </div>
);

export default Tabs;
