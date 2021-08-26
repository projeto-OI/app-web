import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useField } from '@unform/core';
import ReactInputMask, { Props } from 'react-input-mask';

import { IconBaseProps } from 'react-icons';

import { FiAlertCircle } from 'react-icons/fi';
import { Container, Error } from './styles';

interface InputProps extends Props {
  name: string;
  containerStyle?: object;
  icon?: React.ComponentType<IconBaseProps>;
  maskPlaceholder?: string;
  dark?: boolean;
  border?: boolean;
  label?: string;
}
const InputMask: React.FC<InputProps> = ({
  name,
  containerStyle = {},
  icon: Icon,
  maskPlaceholder = '_',
  dark = true,
  border = true,
  label,
  ...rest
}) => {
  const inputRef = useRef<ReactInputMask>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsField(!!inputRef.current?.props.value);
  }, []);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container
      style={containerStyle}
      isFocused={isFocused}
      isFilled={isField}
      isErrored={!!error}
      dark={dark}
      border={border}
    >
      {label && <label htmlFor={fieldName}>{label}</label>}
      <div>
        {Icon && <Icon size={16} />}

        <ReactInputMask
          name={name}
          onFocus={() => setIsFocused(true)}
          onBlur={handleInputBlur}
          id={fieldName}
          ref={inputRef}
          maskPlaceholder={maskPlaceholder}
          defaultValue={defaultValue}
          {...rest}
        />
        {error && (
          <Error title={error} className="err">
            <FiAlertCircle color="#c53030" size={20} />
          </Error>
        )}
      </div>
    </Container>
  );
};

export default InputMask;
