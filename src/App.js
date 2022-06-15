import React, {Component} from "react";
import CourseForm from "./component/CourseForm/CourseForm";
import CourseList from "./component/CourseList/CourseList";


class App extends Component {
  state = {
    courses : [

    ],
    current : "",
    itemToShow: true
  }

  // Updata Courses
  updateCourse = (e) => {
    this.setState({
      current: e.target.value
    }); 
  }

  // Add Course Function
  addCourse = (e) => {
    e.preventDefault();
    if(this.state.current != "") {
      let current = this.state.current;
      let courses = this.state.courses;
      courses.push({name: current});
      this.setState({
        courses,
        current:"",
        itemToShow: false
      });
    }
  }

  // Delete Course Function
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses
    });
    if(this.state.courses == "") {
      let itemToShow = this.state.itemToShow;
      itemToShow = true;
      this.setState({
        itemToShow
      });
    }
  }

  // Edit Course Function 
  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course["name"] = value;
    this.setState({
      courses
    })
  }

  render() {
    const {courses} = this.state;
    const courseList = courses.map((course, index) => {
      return <CourseList details={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>;
    });
    return (
      <section className="App">
        <h2>Add Course</h2>
        <CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current}/>
        <ul>{this.state.itemToShow == false ? courseList : <li>There is No Item To Show</li> }</ul>
      </section>
    );
  }
}

export default App;
