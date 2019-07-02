import * as React from 'react';
import { Link } from 'react-router-dom';

const Home: React.SFC<HomeProps> = () => {
    return (
        <>
        <section className="row">
            <article className="col-md-12">
                <h1 className="text-center m-3">Welcome to the Bookstore for Kids Who Can't Read So Good!</h1>
                <Link to='/books' className="btn my-2 mx-2">View all books</Link>
                <Link to='/auth/register' className="btn my-2 mx-2">Register new user</Link>
                <Link to='/auth/login' className="btn">Login</Link>
            </article>
        </section>
        </>
    );
}

export interface HomeProps{}

export default Home;