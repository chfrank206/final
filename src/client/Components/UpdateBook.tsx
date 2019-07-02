import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { json } from '../utils/api';


export interface UpdateBookProps extends RouteComponentProps<{ id: string }> {

}

const UpdateBook: React.SFC<UpdateBookProps> = props => {

    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [categories, setCategories] = useState<Array<Categories>>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('0');

    const getBook = async () => {
        let r = await fetch(`/api/books/${props.match.params.id}`)
        let book = await r.json();
        setTitle(book.title);
        setAuthor(book.author);
        setPrice(book.price);
    }

    useEffect(() => {
        getBook()
    }, []);

    const handleEdit = async () => {
        let id = props.match.params.id
        let body = {
            author,
            price,
            title,
            categoryid: selectedCategory
        }
        try {
            await json(`/api/books/${id}`, 'PUT', body)
            props.history.push('/books');
        } catch (error) {
            console.log(error);
        }
    }

    const getCategories = async () => {
        let r = await fetch('/api/categories')
        let categories = await r.json();
        setCategories(categories);
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <>
            <section className="row">
                <article className="col-md-12">
                    Title 
                    <textarea rows={1} value={title} onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setTitle(event.target.value)}></textarea>
                    Author 
                    <textarea rows={1} value={author} onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setAuthor(event.target.value)}></textarea>
                    Price $
                    <textarea rows={1} value={price} onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setPrice(event.target.value)}></textarea>
                    <select value={selectedCategory} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setSelectedCategory(event.target.value)}>
                        <option value="0">Select Category</option>
                        {categories.map(category => {
                            return (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            )
                        })};
                    </select>
                </article>
                <button onClick={() => handleEdit()}>Submit Edit</button>
            </section>
        </>
    );

    interface Categories {
        id: number,
        name: string
    }

}



export default UpdateBook;