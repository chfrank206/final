import * as React from 'react';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { json, SetToken } from '../utils/api';

export interface RegisterProps extends RouteComponentProps {
    email: string,
    password: string,
    name: string
}

const Register: React.SFC<RegisterProps> = props => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');

    const handleRegister = async () => {
        event.preventDefault();

        try {
            let result = await json('/auth/register', 'POST', {
                email,
                name,
                password
            });

            if (result) {
                SetToken(result.token, { userid: result.userid, role: result.role });
                props.history.push('/');
            }
        } catch (error) {
            throw (error)
        }
    };

    return (
        <>
            <section className="row">
                <article className="col-md-12 text-center">
                    <div className="input-group">
                        <p>Register for use, you filthy animal.</p>
                        <input type="text" placeholder="Name" value={name} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)} />
                        <input type="email" placeholder="Email" value={email} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} />
                        <input type="password" placeholder="Password" value={password} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} />
                    </div>
                    <div>
                        <button className="btn" onClick={() => handleRegister()}>Register</button>
                    </div>
                </article>
            </section>
        </>
    )

}

export default Register;