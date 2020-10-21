import React from 'react';

function Login(){

    
       const user= {
            firstName: '',
            lastName: '',
            username: '',
            password: ''
        },
        submitted= false;
  
    function handleChange(e){
       console.log(e.target.value);
    }
    function handleSubmit(){

    }
   
    return         <div className="col-md-6 col-md-offset-3">
    <h2>Register</h2>
    <form name="form" onSubmit={handleSubmit}>
        <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" name="firstName"  onChange={handleChange} />
            {submitted && !user.firstName &&
                <div className="help-block">First Name is required</div>
            }
        </div>
        <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" name="lastName"  onChange={handleChange} />
            {submitted && !user.lastName &&
                <div className="help-block">Last Name is required</div>
            }
        </div>
        <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" name="username"  onChange={handleChange} />
            {submitted && !user.username &&
                <div className="help-block">Username is required</div>
            }
        </div>
        <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password"  onChange={handleChange} />
            {submitted && !user.password &&
                <div className="help-block">Password is required</div>
            }
        </div>
        <div className="form-group">
            <button className="btn btn-primary">Register</button>
           
        </div>
    </form>
</div>;
}

export default Login;