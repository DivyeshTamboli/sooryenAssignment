import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../../redux/actions/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./notes.styles.scss";

export class NotesForm extends Component {

  constructor(props) {
    super(props);


    this.state = {
      title: '',
      content: '',
      showDiv: false
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmission = (e) => {

    e.preventDefault();
    let { title, content } = this.state;
    this.props.addNote(title, content);
    this.setState({ title: '', content: '' });
    toast.success('Note Succesfully Added !', {
      autoClose: 2000,
      hideProgressBar: false
    });
  }

  onClick = () => {
    this.setState({ title: '', content: '', showDiv: true });
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
                  <button onClick={this.onClick} class="btn btn-outline-secondary float-right add-button" >
                    <span><i class="fas fa-plus"></i></span> Add Note
                  </button>
                </div>
                {this.state.showDiv && <div>
                  <div class="form-group">
                    <label for="title"><b>Title</b></label>
                    <input required type="text" class="form-control" id="text" name="title" value={this.state.title} onChange={this.handleChange} />
                  </div>
                  <div class="form-group">
                    <label for="body"><b>Body</b></label>
                    <input required type="text" class="form-control" id="body" name="content" value={this.state.content} onChange={this.handleChange} />
                  </div>

                  <div class="float-right">
                    <button type="submit" class="btn btn-primary" onClick={this.handleSubmission}>Save</button>
                  </div>
                </div>}

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
    addNote: addNote
  }
)(NotesForm);