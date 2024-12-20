import React from 'react';

export default function Con() {
  return (
    <div>
        <h1 className='rinput'>LOGIN</h1>
        <div className='custom-container'>
            <form className='form-black' action="" method='post'></form>
            <div className='rien'>
                <label className='rien' htmlFor="">Email</label>
                <input type="email" className='form-controle'/>
            </div>
            <br />
            <div className='rien'>
                <label className='rien' htmlFor="">Password</label>
                <input type="password" className='form-controle' />
            </div>
            <br />
            <div className='rien'>
               <button className='buttonto'>
              Sign In 
                </button> 
            </div>
            <a href="#" class="forgot-password">Forgot password?</a>
        </div>
    </div>
  )
}
