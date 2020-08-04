import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    border: none;
    padding: 10px 8px 10px 160px;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Label = styled.label``;
Label.Text = styled.span`
  color: var(--primary);
  cursor: pointer;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;

  transition: 0.1s ease-in-out;
`;

const Input = styled.input`
  background: #bfcad9;
  color: var(--primary);
  cursor: pointer;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  font-weight: 400;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 6px solid #bfcad9;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus:not([type="color"]) {
    border-bottom-color: var(--primary);
    padding-top: 25px;
  }

  &:focus:not([type="color"]) + ${Label.Text} {
    transform: scale(0.6) translateY(-10px);
  }

  /* Feito para manter a label em cima quando tiver algo digitado */
  ${({ value }) => {
    const hasValue = value.length > 0;
    return (
      hasValue
      && css`
        &:not([type="color"]) + ${Label.Text} {
          transform: scale(0.6) translateY(-10px);
        }
      `
    );
  }}
`;

function FormField({
  label, type, name, value, onChange, suggestions,
}) {
  const fieldId = `id_${name}`;
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input'; // para deixar a tag dinâmica

  const hasSuggestions = Boolean(suggestions.length);

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          as={tag} // para deixar a tag dinâmica, passamos o atributo as={}
          id={fieldId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          autoComplet={hasSuggestions ? 'off' : 'on'}
          list={`suggestionFor_${fieldId}`}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
        {
          hasSuggestions && (
          <datalist id={`suggestionFor_${fieldId}`}>
            {suggestions.map((suggestion) => (
              <option value={suggestion} key={`suggestionFor_${fieldId}_option:${suggestion}`}>
                {suggestion}
              </option>
            ))}
          </datalist>
          )
        }
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
