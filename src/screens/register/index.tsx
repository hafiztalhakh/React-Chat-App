import RegisterForm from '../../components/register_form';

const Register = () => {
  return (
    <div className='registerContainer'>
      <div className='registerWrapper'>
        <div className='text'>
          <h2>Create Account</h2>
          <p>React Realtime-Chat Application</p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
