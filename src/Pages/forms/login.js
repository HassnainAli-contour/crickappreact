import React from "react";

export default function LoginForm(){
    return ( <div className="Form" >
        <form className="form" >
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="nome@email.com.br" />
            </div>
            <div className="input-group">
                <label htmlFor="password">password</label>
                <input type="password" name="password" />
            </div>
            <button className="primary">Login</button>
    </form>

  </div>
    )
}