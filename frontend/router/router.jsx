import React from 'react';
import { Router,
         Route,
         hashHistory,
         IndexRoute
       } from 'react-router';
import App from '../components/app';

import LoginContainer from '../components/auth/login_container';
import SignupContainer from '../components/auth/signup_container';
import LessonsIndexContainer from '../components/lessons/lessons_index_container';
import CreateLessonContainer from '../components/lessons/create_lesson_container';
import EditLessonContainer from '../components/lessons/edit_lesson_container';
import FullLessonContainer from '../components/lessons/full_lesson_container';
import ProfileContainer from '../components/profile/profile_container';
import FilteredIndexContainer from '../components/lessons/filtered_index_container';


class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this._populateFilterIndex = this._populateFilterIndex.bind(this);
    this._populateIndex = this._populateIndex.bind(this);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._clearErrors = this._clearErrors.bind(this);
    this._requestLesson = this._requestLesson.bind(this);
    this._requestProfile = this._requestProfile.bind(this);
    this.routes = this.createRoutes.bind(this)();
  }

  _populateIndex(){
    this.props.requestAllLessons();
  }

  _ensureLoggedIn(nextState, replace){
    const currentUser = this.props.currentUser;
    if (!currentUser) {
      this.props.openLogin();
    }
  }

  _populateFilterIndex(nextState){
    this.props.findSubject(nextState.params.field);
  }

  _requestLesson(nextState){
    this.props.requestLesson(parseInt(nextState.params.lessonId));
  }

  _requestProfile(nextState) {
    this.props.requestProfile(parseInt(nextState.params.userId));
  }

  _clearErrors(){
    this.props.clearErrors();
  }


  createRoutes() {
    return (
      <Route path="/" component={ App } >
        <IndexRoute component = { LessonsIndexContainer }
          onEnter={this._populateIndex} />
        <Route path="filter/:field" component={ FilteredIndexContainer }
          onEnter={this._populateFilterIndex}/>
        <Route path="create-lesson" component={ CreateLessonContainer }
          onEnter={ this._ensureLoggedIn }
          onLeave={this._clearErrors}/>
        <Route path="lessons/:lessonId" component={ FullLessonContainer } />
        <Route path="lessons/:lessonId/edit" component={ EditLessonContainer }
          onEnter={ this._ensureLoggedIn }
          onEnter={ this._requestLesson}
          onLeave={this._clearErrors}/>
        <Route path="/profiles/:userId" component={ ProfileContainer }
          onEnter={this._requestProfile}/>
      </Route>
    );
  }

  render() {
    return(
      <Router history={ hashHistory }>
        {this.routes}
      </Router>
    );
  }
}

export default AppRouter;
