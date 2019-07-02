import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './scss/app';

import './scss/app';
import Home from './Components/Home'
import AllBooks from './Components/AllBooks';
import BookDetails from './Components/BookDetails';
import NewBook from './Components/NewBook';
import UpdateBook from './Components/UpdateBook';
import Register from './Components/Register';
import Login from './Components/Login';

export interface AppProps {

}

const App: React.SFC<AppProps> = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/books'component={AllBooks} />
                <Route exact path='/:id/details' component={BookDetails} />
                <Route exact path='/newBook' component={NewBook} />
                <Route exact path='/:id/update' component={UpdateBook} />
                <Route exact path='/auth/register' component={Register} />
                <Route exact path='/auth/login' component={Login} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;