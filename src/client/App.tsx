import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Components/Home'
import AllBooks from './Components/AllBooks';
import BookDetails from './Components/BookDetails';

export interface AppProps {

}

const App: React.SFC<AppProps> = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/books'component={AllBooks} />
                <Route exact path='/:id/details' component={BookDetails} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;