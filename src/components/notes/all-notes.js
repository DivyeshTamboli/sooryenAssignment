import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removeNote } from '../../redux/actions/actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AllNotes extends Component {


  removeNote = (index) => {
    this.props.removeNote(index);
    toast.warn('Note Succesfully Removed !', {
      autoClose: 2000,
      hideProgressBar: false
    });
  }

  editNote = (i, note) => {
    this.props.editNoteForm(i, note);
  }





  render() {



    var notesItems = this.props.notes.map((note, index) =>
      <div>
        <div class="row" key={index}>
          <div class="col">
            <h5>
              <span class="title notes"><b>{note.title}</b></span>
              <span class="float-right close" onClick={() => this.removeNote(index)}><i class="fas fa-times"></i></span>
              <span class="float-right close" onClick={() => this.editNote(index, note)}><i class="fas fa-edit"></i>
              </span>
            </h5>
          </div>
        </div>
        <div class="row">
          <div class="col notes">{note.content}</div>
        </div>
        <hr />
      </div>
    );

    return (
      <React.Fragment>
        {notesItems}
      </React.Fragment>
    )
  }

}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

const mapDispatchToProprs = {
  removeNote: removeNote
};

export default connect(mapStateToProps, mapDispatchToProprs)(AllNotes);