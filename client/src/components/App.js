import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './Header';
import Landing from './pages/Landing';
import Chatbot from './chatbot/Chatbot';

const App = () => (
    <div>
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Route exact path="/" component={Landing}/>
                <Chatbot/>
            </div>
        </BrowserRouter>
    </div>
)

export default App;