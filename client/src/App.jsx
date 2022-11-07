import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import { getPosts } from "./actions/posts";
import Home from "./Components/Home/Home";
import Auth from "./Components/Auth/Auth";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home currentId={currentId} setCurrentId={setCurrentId} />
          </Route>
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
