import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { json, User } from '../utils/api';


const NewBook: React.SFC<NewBookProps> = props => {

    const [newBookTitle, setNewBookTitle] = useState<string>('');
    const [newBookAuthor, setNewBookAuthor] = useState<string>('');
    const [newBookPrice, setNewBookPrice] = useState<string>('');
    const [categories, setCategories] = useState<Array<Categories>>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('0');

    const newBook = async () => {
        event.preventDefault();
        let body = {
            author: newBookAuthor,
            title: newBookTitle,
            price: newBookPrice,
            categoryid: selectedCategory
        }
        try {
            await json('/api/books', 'POST', body)
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

    useEffect(() => {
        if(!User || User.userid === null || User.role !== 'admin') {
            props.history.replace('/auth/login');
        }
    }, []);

    return (
        <>
            <section className="row">
                <article className="col-md-12 text-center">
                    <textarea placeholder="Title" name="" id="" cols={20} rows={1} value={newBookTitle} onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setNewBookTitle(event.target.value)}></textarea>
                    <textarea placeholder="Author" name="" id="" cols={20} rows={1} onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setNewBookAuthor(event.target.value)}></textarea>
                    <textarea placeholder="Price" name="" id="" cols={20} rows={1} onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setNewBookPrice(event.target.value)}></textarea>
                    <select value={selectedCategory} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setSelectedCategory(event.target.value)}>
                        <option value="0">Select Category</option>
                        {categories.map(category => {
                            return (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            )
                        })};
                    </select>
                    <button className="btn" onClick={() => newBook()}>Sumbit Book</button>
                </article>
            </section>
        </>
    );
}

interface NewBookProps extends RouteComponentProps {

}

interface Categories {
    id: number,
    name: string
}
export default NewBook