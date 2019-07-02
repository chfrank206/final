import * as React from 'react';
import { useState, useEffect } from 'react';
import { json } from '../utils/api';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

export interface BookDetailsProps extends RouteComponentProps<{id: string}> {

}

const BookDetails: React.SFC<BookDetailsProps> = props => {

    const [book, setBook] = useState<any>([]);

    useEffect(() => {
        json(`/api/books/${props.match.params.id}`)
        .then(book => setBook(book))
    }, []);

    const handleDelete = async () => {
        let id = props.match.params.id;
        try {
            await json(`/api/books/${id}`, 'DELETE')
            props.history.push('/books');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <section className="row">
                <article className="text-center col-md-12">
                    <h1>{book.title}</h1>
                    <p>By: {book.author}</p>
                    <p>Genre: {book.name}</p>
                    <p>price: ${book.price}</p>
                    <button className="btn" onClick={() => handleDelete()}>Delete Book</button>
                    
                </article>
            </section>
        </>
    );
}

export default BookDetails;