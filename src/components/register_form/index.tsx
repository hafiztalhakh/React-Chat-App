import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../lib/firebase';
import Button from '../../atoms/button';
import InputField from '../../atoms/input_field';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    profilePicture: '',
  });

  const navigateToLoginScreen = () => {
    navigate('/login');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const createAccount = () => {
    const { email, password, name } = state;

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        console.log(result);
        // Add a new document in collection "users"
        const result2 = await setDoc(doc(db, 'users', result?.user?.uid), {
          name,
          email,
        });
        console.log(result2);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form id='registerForm'>
      <div className='profilePicture'>
        <label htmlFor='imageUploader'>
          <div className='avatar'>
            <img src='/assets/user.png' alt='UploadPlaceholder' />
          </div>
          <input
            id='imageUploader'
            type='file'
            accept='image/png, image/jpeg, image/jpg'
          />
          <span>Upload profile picture</span>
        </label>
      </div>
      <InputField
        type='text'
        id='name'
        label='Full Name'
        name='name'
        placeholder='Enter your Full Name'
        value={state.name}
        onChange={handleChange}
      />
      <InputField
        id='email'
        label='Email'
        type='email'
        name='email'
        placeholder='Enter your email address'
        value={state.email}
        onChange={handleChange}
      />
      <InputField
        id='password'
        label='Password'
        type='password'
        name='password'
        placeholder='Enter your password'
        value={state.password}
        onChange={handleChange}
      />

      <div className='registerBtn'>
        <Button onClick={createAccount}>Register</Button>
      </div>
      <div className='loginBtn'>
        <p>Already have an account?</p>
        <Button onClick={navigateToLoginScreen}>Login</Button>
      </div>
    </form>
  );
};

export default RegisterForm;
