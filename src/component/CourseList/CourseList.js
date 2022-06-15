import React, {Component} from "react";

class CourseList extends Component {
  state = {
    isEdit: false
  }

  // Render Course Function
  renderCourse = () => {
    return (
      <li>
      <span>{this.props.details.name}</span>
      <button onClick={() => {this.toggleState()}}>Edit Course</button>
      <button onClick={() => {this.props.deleteCourse(this.props.index)}}>Delete Course</button>
    </li>
    )
  }

  // ToggleState Function
  toggleState = () => {
    let {isEdit} = this.state;
    this.setState({
      isEdit: !isEdit
    })
  }

  updataCourseItem = (e) => {
    e.preventDefault();
    this.props.editCourse(this.props.index, this.input.value);
    this.toggleState();
  }

  // Render Update Course Function
  renderUpdateForm = () => {
    return (
      <form onSubmit={this.updataCourseItem}>
        <input type="text" ref={(v) => {this.input = v}} defaultValue={this.props.details.name}/> 
        <button>Update Course</button>
      </form>
    )
  }

  render() {
    let {isEdit} = this.state;
    return (
      <React.Fragment>
        {isEdit ? this.renderUpdateForm() : this.renderCourse()}
      </React.Fragment>
    );
  }
}

export default CourseList;