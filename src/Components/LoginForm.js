import { useState } from 'react'

const LoginForm = () => {
     <h1> Login Form</h1>
     //React states 
     const [errorMessages, setErrorMessages ] = useState({});
     const [isSubmitted, setIsSubmitted] = useState(false);
     //User Login info
     const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass:  "invalid password"
    };

    const handleSubmit = (e) => {
        // prevent Page Reload
        e.preventDefault();

        let {uname, pass} = document.forms[0];
        // Find user login info 
        const userData = database.find((user) => user.username === uname.value);
        //COMPARE USER INFO 
         if(userData){
            if (userData.password !== pass.value) {
              // invalid password
              setErrorMessages({name: "pass", message: errors.pass});
            } else{
                setIsSubmitted(true);
            }
         } else {
            //Username not found
            setErrorMessages({name: "uname", message: errors.uname});           
         }
    };

     //GENERATE JSX CODE FOR ERROR MESSAGE
      const renderErrorMessage = (name) => name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );

      //JSX CODE FOR LOGIN FORM
      const renderForm = (
        <div className='form'>

            <form onSubmit={handleSubmit}>
                <div className='input-container'>
                    <label>Username</label>
                    <input type='text' name='uname' required />
                     {renderErrorMessage('uname')}
                </div>
                <div className='input-container'>
                    <label>Password</label>
                     <input type='password' name='pass' required />
                     {renderErrorMessage('pass')}
                </div>
                <div className='button-container'>
                    <input type='submit' />
                </div>
               
            </form>
             
        </div>
      );
  return (
    <div className='LoginForm'>
        <div className='login-form'>
           <div className='title'>Sign In</div>
            {isSubmitted ? <div> User is successfully loged in</div>: renderForm}
        </div>

    </div>
  )
}

export default LoginForm