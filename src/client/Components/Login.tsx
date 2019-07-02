import * as React from 'react';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { json, SetToken } from '../utils/api'

export interface LoginProps extends RouteComponentProps {
    email: string,
    password: string
};

const Login: React.SFC<LoginProps> = props => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('')

    const handleLogin = async () => {
        event.preventDefault();

        try {
            let result = await json('/auth/login', 'POST', {
                email,
                password
            });

            if (result) {
                SetToken(result.token, { userid: result.userid, role: result.role });
                props.history.push('/');
            } else {
            }

        } catch (error) {
            throw (error)
        }
    }

    return (
        <section className="row">
            <div className="col-md-12">
                <div className="input-group">
                    <input type="email" placeholder="Email" value={email} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} />
                </div>
                <div>
                    <button className="btn" onClick={() => handleLogin()}>Login</button>
                </div>
            </div>
        </section>
    )
}



export default Login;