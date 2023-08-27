import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import useField from '../../useField/index.js';
import withCondition from '../../withCondition/index.js';
import Error from '../../Error/index.js';
import { checkbox } from '../../../../../fields/validations.js';
import FieldDescription from '../../FieldDescription/index.js';
import { Props } from './types.js';
import { getTranslation } from '../../../../../utilities/getTranslation.js';
import { CheckboxInput } from './Input.js';

import './index.scss';

const baseClass = 'checkbox';

const Checkbox: React.FC<Props> = (props) => {
  const {
    name,
    path: pathFromProps,
    validate = checkbox,
    label,
    onChange,
    disableFormData,
    required,
    admin: {
      readOnly,
      style,
      className,
      width,
      description,
      condition,
    } = {},
  } = props;

  const { i18n } = useTranslation();

  const path = pathFromProps || name;

  const memoizedValidate = useCallback((value, options) => {
    return validate(value, { ...options, required });
  }, [validate, required]);

  const {
    value,
    showError,
    errorMessage,
    setValue,
  } = useField({
    path,
    validate: memoizedValidate,
    disableFormData,
    condition,
  });

  const onToggle = useCallback(() => {
    if (!readOnly) {
      setValue(!value);
      if (typeof onChange === 'function') onChange(!value);
    }
  }, [onChange, readOnly, setValue, value]);

  const fieldID = `field-${path.replace(/\./gi, '__')}`;

  return (
    <div
      className={[
        'field-type',
        baseClass,
        showError && 'error',
        className,
        value && `${baseClass}--checked`,
        readOnly && `${baseClass}--read-only`,
      ].filter(Boolean).join(' ')}
      style={{
        ...style,
        width,
      }}
    >
      <div className={`${baseClass}__error-wrap`}>
        <Error
          showError={showError}
          message={errorMessage}
        />
      </div>
      <CheckboxInput
        onToggle={onToggle}
        id={fieldID}
        label={getTranslation(label || name, i18n)}
        name={path}
        checked={Boolean(value)}
        readOnly={readOnly}
      />
      <FieldDescription
        value={value}
        description={description}
      />
    </div>
  );
};

export default withCondition(Checkbox);
