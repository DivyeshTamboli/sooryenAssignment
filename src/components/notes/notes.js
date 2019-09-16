import React, { Component } from 'react'
import NotesForm from './notes-form';
import EditNote from './edit-note';
import AllNotes from './all-notes';
import { Header } from './header';
import { toast } from 'react-toastify';
import { ToastProvider } from 'react-toast-notifications';
import 'react-toastify/dist/ReactToastify.css';
import "./notes.styles.scss";
export class Notes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      edit: false
    }
  }
  editNote(i, note) {
    this.setState({ edit: true, note, index: i })
  }

  updateNote(i, note) {
    toast.success('Succesfully Updated !', {
      autoClose: 2000,
      hideProgressBar: false
    });
    this.setState({ edit: false, note, index: i });


  }



  render() {
    return (
      <ToastProvider>

        <React.Fragment>

          <div class="container">
            <Header />

            <div class="row">
            </div>
            <div class="row">
              <div class="col-3 mt-2">
                <AllNotes editNoteForm={this.editNote.bind(this)} />
              </div>
              <div class="vl"></div>
              <div class="col-9">
                <div class="row mt-2">
                  <div class="col">
                    {this.state.edit ? <EditNote updateNoteForm={this.updateNote.bind(this)} index={this.state.index} note={this.state.note} /> : <NotesForm />}

                  </div>
                </div>


              </div>
            </div>
          </div>



        </React.Fragment>
      </ToastProvider>
    )
  }
}

export default Notes;
