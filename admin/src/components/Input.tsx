import { Field, Box, TextInput} from '@strapi/design-system';
import { useIntl } from 'react-intl';

interface InputProps {
  name: string;
  onChange: (event: { target: { name: string; value: string; type: string } }) => void;
  value: string;
  attribute: {
    required: boolean;
    options: {
      blocks?: any;
    };
  };
  description?: string;
  disabled?: boolean;
  error?: string;
  intlLabel: {
    id: string;
    defaultMessage: string;
  };
  labelAction?: React.ReactNode;
}

const Input = ({
  name,
  onChange,
  value,
  attribute,
  description,
  disabled,
  error,
  intlLabel,
  labelAction,
}: InputProps) => {
  const { formatMessage } = useIntl();

  return (
    <Field
      name={name}
      id={name}
      error={error}
      hint={description && formatMessage({ id: description, defaultMessage: description })}
    >
      <Field.Label action={labelAction}>
        {formatMessage(intlLabel)}
      </Field.Label>
      <Box padding={4} background="neutral100">
        <TextInput
          name={name}
          onChange={onChange}
          value={value}
          disabled={disabled}
          required={attribute.required}
        />
      </Box>
      <Field.Error />
      <Field.Hint />
    </Field>
  );
};

export { Input }; 