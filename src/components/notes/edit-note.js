import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateNote } from '../../redux/actions/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./notes.styles.scss";

export class EditNote extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.note.title,
      content: this.props.note.content
    };
  }



  componentDidMount() {
    this._isMounted = true;
    this.setState({
      title: this.props.note.title,
      content: this.props.note.content
    })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }



  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleUpdate = (e) => {

    e.preventDefault();
    this.props.updateNote(this.props.index, this.state);
    this.props.updateNoteForm(this.props.index, this.state);
    this.setState({ title: '', content: '' });

  }

  render() {
    return (
      <React.Fragment>
        <div class="container">
          <ToastContainer hideProgressBar={false} position={toast.POSITION.BOTTOM_LEFT} />
          <div class="row">

          </div>


          <div class="row">
            <div class="col">
              <form>
                <div class="float-right add-button">
                  <span class="btn-outline-secondary float-right" >
                    <span></span> Update Note
                  </span>
                </div>
                <div>
                  <div class="form-group">
                    <label for="title"><b>Title</b></label>
                    <input required type="text" class="form-control" id="text" name="title" value={this.state.title} onChange={this.handleChange} />
                  </div>
                  <div class="form-group">
                    <label for="body"><b>Body</b></label>
                    <input required type="text" class="form-control" id="body" name="content" value={this.state.content} onChange={this.handleChange} />
                  </div>

                  <div class="float-right">
                    <button class="btn btn-primary" onClick={this.handleUpdate}>Update</button>
                  </div>
                </div>

              </form>
            </div>

          </div>

        </div>



      </React.Fragment>
    )
  }

}

export default connect(
  null,
  {
    updateNote: updateNote
  }
)(EditNote);