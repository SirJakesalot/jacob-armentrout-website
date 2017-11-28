import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Articles from './scenes/Articles';
import Portfolio from './scenes/Portfolio';
import Home from './scenes/Home';
import PageView from './components/PageView';
import Header from './components/Header';
import Footer from './components/Footer';
import AnsibleHelloWorld from './scenes/AnsibleHelloWorld';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <PageView>
                    <div className="App">
                        <Header />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/portfolio" component={Portfolio} />
                        <Route exact path="/articles" component={Articles} />
                        <Route exact path="/ansible-hello-world" component={AnsibleHelloWorld} />
                        <Footer />
                    </div>
                </PageView>
            </BrowserRouter>
        );
    }
}

export default App;
