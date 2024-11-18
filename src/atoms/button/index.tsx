interface IButton {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<IButton> = (props) => {
  const { children, type = 'button', id, onClick, loading, disabled } = props;

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {children}
    </button>
  );
};

export default Button;
