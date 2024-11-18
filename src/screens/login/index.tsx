import LoginForm from '../../components/login_form';

const Login = () => {
  return (
    <div className='loginContainer'>
      <div className='loginWrapper'>
        <div className='text'>
          <h2>Login</h2>
          <p>React Realtime-Chat Application</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
