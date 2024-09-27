const Login = () => {
  return (
    <div className='loginWrapper'>
      <div className='text'>
        <h2>Login</h2>
        <p>React Realtime-Chat Application</p>
      </div>
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
            <input
              id='password'
              type='text'
              placeholder='Enter your password'
            />
          </div>
        </div>
        <div className='forgotPasswodWrapper'>
          <button type='button'>Forgot Password</button>
        </div>
        <div className='loginBtn'>
          <button type='button'>Login</button>
        </div>
        <div className='registerBtn'>
          <p>Don't have an account?</p>
          <button type='button'>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
