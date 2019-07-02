import * as React from 'react';
import { Link } from 'react-router-dom';

export interface HomeProps {

}

const Home: React.SFC<HomeProps> = () => {
    return (
        <>
            <section className="row">
                <article className="col-md-12">
                    <h1 className="text-center">Welcome to the Bookstore for the Illiterate and Kids Who Can't Read So Good!</h1>
                    <Link to='/books' className="btn btn-secondary">View All Books</Link>
                </article>
            </section>
        </>
    );
}

export default Home;