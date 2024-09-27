const Register = () => {
  return (
    <div className='registerWrapper'>
      <div className='text'>
        <h2>Create Account</h2>
        <p>React Realtime-Chat Application</p>
      </div>
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
        <div className='formGroup'>
          <label htmlFor='name'>Full Name</label>
          <div className='textField'>
            <input id='name' type='text' placeholder='Enter your Full Name' />
          </div>
        </div>
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
        <div className='registerBtn'>
          <button type='button'>Register</button>
        </div>
        <div className='loginBtn'>
          <p>Already have an account?</p>
          <button type='button'>Login</button>
        </div>
      </form>

      {/* <div className='profilePictureWrapper'>
        <p>Upload your profile picture</p>
        <div className='profilePicture'>
          <label htmlFor='imageUploader'>
            <img src='/assets/avatar.png' alt='UploadPlaceholder' />
            <input
              id='imageUploader'
              type='file'
              accept='image/png, image/jpeg, image/jpg'
            />
          </label>
        </div>
      </div> */}
    </div>
  );
};

export default Register;
