import React from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
} from 'react-router-dom';
import './App.css';
import { store } from './modules';
import { SearchPage } from './pages';

const App: React.FC = () => (
    <Provider store={store}>
        <Router>
            <Route path="/" component={SearchPage} />
        </Router>
    </Provider>
);

export default App;
