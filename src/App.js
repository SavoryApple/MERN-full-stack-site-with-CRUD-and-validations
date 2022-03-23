import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AuthorList from './components/AuthorList';
import Update from './views/Update';
import 'bootstrap/dist/css/bootstrap.min.css'
import Create from './views/Create';

function App() {
  return (
    //localhost:3000
    <BrowserRouter>
      <div className="App">
        <Route exact path="/new">
          <Create/>
        </Route>
        <Route path="/author/:id/edit">
          <Update />
        </Route>
        <Route exact path="/">
          <AuthorList />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;