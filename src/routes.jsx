import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import HomePage from './components/home/HomePage.jsx';
import AboutPage from './components/about/AboutPage.jsx';
import CoursesPage from './components/course/CoursesPage.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
