import React from 'react'
import PropTypes from 'prop-types'
import './Todo.css'
import EditTodoModal from "./EditTodoModal";
import {connect} from 'react-redux';
import {changeTodoText, changeTodoDate} from '../redux/actions';

class Todo extends React.Component {
  state = {
    isOpen: false,
    text: "",
    date: ""
  }

  openModal = () => {
    this.setState({isOpen: true});
  }

  handleSubmit = () => {
    if (this.state.text !== "") {
      this.props.changeTodoText({id: this.props.id, text: this.state.text})
    }
    if (this.state.date !== "") {
      this.props.changeTodoDate({id: this.props.id, date: this.state.date})
    }
    this.setState({isOpen: false, text: "", date: ""});
  }

  handleCancel = () => {
    this.setState({isOpen: false});
    this.setState({isOpen: false, text: "", date: ""});
  }

  handleTextChange = event => {
    this.setState({
      text: event.target.value
    });
  }

  handleDateChange = event => {
    this.setState({
      date: event.target.value
    });
  }

  render() {
    const {onClick, onDelete, completed, text, id, date} = this.props;
    return (
      <div className="todo">
        <div className="todo__item">{id}</div>
        <div className="todo__item">{text}</div>
        <div className="todo__item">{date}</div>
        <div className="todo__item"><input type="checkbox" onChange={onClick} checked={completed}/></div>
        <div className="todo__item">
          <span className="todo__action" onClick={this.openModal}>[редактировать]</span>
          <span className="todo__action" onClick={onDelete}>[удалить]</span>
        </div>
        <EditTodoModal
          title="Редактирование"
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
          date={this.state.date}
          text={this.state.text}
        >
          <div>
            <div>
              {text}
              <input
                type="text"
                onChange={this.handleTextChange}
                value={this.state.text}/>
            </div>
            <div>
              {date}
              <input type="text" onChange={this.handleDateChange} value={this.state.date}/>
            </div>
          </div>
        </EditTodoModal>
      </div>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  changeTodoText: PropTypes.func.isRequired,
  changeTodoDate: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  changeTodoText: payload => dispatch(changeTodoText(payload)),
  changeTodoDate: payload => dispatch(changeTodoDate(payload))
})

export default connect(null, mapDispatchToProps)(Todo)
