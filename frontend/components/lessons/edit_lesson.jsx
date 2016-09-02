import React from 'react';
import Errors from '../errors';
import LessonForm from './lesson_form';

class EditLesson extends React.Component {
  // componentDidMount(){
  //   let lessonId = this.props.params.lessonId;
  //   this.props.requestLesson(lessonId);
  // }

  _handleUpdateLesson(e){
    e.preventDefault();
    let lesson = { lesson:
      {
        title: e.target.title.value,
        user_id: this.props.currentUser.id,
        subject: this._checkForNullSubject(e),
        grade: this._checkForNullGrade(e),
        lesson_date: e.target.lesson_date.value
      }
    };
    this.props.updateLesson(lesson);
  }

  _checkForNullGrade(e){
    if (e.target.grade.value === "(optional)") {
      return null;
    } else {
      return e.target.grade.value;
    }
  }


  _checkForNullSubject(e){
    if (e.target.subject.value === "(optional)") {
      return null;
    } else {
      return e.target.subject.value;
    }
  }

  render(){
    // let template = {
    //   title: "",
    //   grade: undefined,
    //   subject: undefined,
    //   date: undefined
    // };
    let template;
    if (this.props.singleLesson) {
      // let lessonDate = new Date(`${this.props.singleLesson.lesson_date}`);
      template = {
        title: this.props.singleLesson.title,
        grade: this.props.singleLesson.grade,
        subject: this.props.singleLesson.subject,
        date: this.props.singleLesson.lesson_date
      };
    }
    return(
      <LessonForm template={template}
        handleSubmit={this._handleUpdateLesson.bind(this)}
        errors={this.props.errors}
        />
    );
  }
}

export default EditLesson;
