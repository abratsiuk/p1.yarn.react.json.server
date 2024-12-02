import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './layout/Header';
import { Main } from './pages/Main';
import { Footer } from './layout/Footer';
import { Hotels } from './component/Hotels';
import { Hotel } from './pages/Hotel';
import { NotFound } from './pages/NotFound';

function App() {
    return (
        <>
            <Router basename='/p1.yarn.react.json.server'>
                <Header />
                <main className='container content'>
                    <Switch>
                        <Route
                            exact
                            path='/'
                            component={Main}
                        />
                        <Route
                            path='/hotel/:id'
                            component={Hotel}
                        />
                        <Route
                            path='*'
                            component={NotFound}
                        />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
