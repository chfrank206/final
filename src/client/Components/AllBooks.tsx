import * as React from 'react';
import { useState, useEffect } from 'react';
import { json } from '../utils/api';
import { Link } from 'react-router-dom';

export interface AllBooksProps {

}

const AllBooks: React.SFC<AllBooksProps> = () => {

    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        json('/api/books')
            .then(books => setBooks(books));
    }, []);

    return (
        <>
            <section className="row">
                <article className="col-md-12 text-center">
                    <ul className="list-group">
                        {books.map(book => (
                            <li key={book.id}>
                                {book.title} <Link to={`/${book.id}/details`}>Details</Link>
                            </li>
                        ))}
                    </ul>
                    <Link to={'/newBook'}>New Book</Link>
                </article>
            </section>
        </>
    );
}

export interface Book {
    id: number,
    categoryid: number,
    title: string,
    author: string,
    price: string,
    _created: Date
}
export default AllBooks;