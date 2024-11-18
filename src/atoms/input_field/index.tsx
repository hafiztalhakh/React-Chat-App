interface IInputField {
  label?: React.ReactNode;
  type?: 'text' | 'number' | 'email' | 'password';
  id: string;
  name?: string;
  placeholder?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
}

const InputField: React.FC<IInputField> = (props) => {
  const {
    label,
    type = 'text',
    id,
    name,
    placeholder,
    value,
    onChange,
    disabled = false,
  } = props;

  return (
    <div className='formGroup'>
      {label && <label htmlFor={id}>{label}</label>}
      <div className='textField'>
        <input
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default InputField;
