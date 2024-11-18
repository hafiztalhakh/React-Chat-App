import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const navigateToChats = () => {
    navigate('/');
  };

  const navigateToForgotPasswordScreen = () => {
    navigate('/forgot-password');
  };

  const navigateToRegisterScreen = () => {
    navigate('/register');
  };

  return (
    <form id='loginForm'>
      <div className='formGroup'>
        <label htmlFor='email'>Email</label>
        <div className='textField'>
          <input
            id='email'
            type='text'
            placeholder='Enter your email address'
          />
        </div>
      </div>
      <div className='formGroup'>
        <label htmlFor='password'>Password</label>
        <div className='textField'>
          <input id='password' type='text' placeholder='Enter your password' />
        </div>
      </div>
      <div className='forgotPasswodWrapper'>
        <button type='button' onClick={navigateToForgotPasswordScreen}>
          Forgot Password
        </button>
      </div>
      <div className='loginBtn'>
        <button type='button' onClick={navigateToChats}>
          Login
        </button>
      </div>
      <div className='registerBtn'>
        <p>Don't have an account?</p>
        <button type='button' onClick={navigateToRegisterScreen}>
          Register
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
