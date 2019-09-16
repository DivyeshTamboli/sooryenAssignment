import { ADD_NOTE, REMOVE_NOTE, UPDATE_NOTE } from '../actions/actions';

const initialState = {
  notes: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        notes: [
          ...state.notes,
          {
            title: action.title,
            content: action.content
          }
        ]
      };
    case REMOVE_NOTE:
      return {
        notes: state.notes.filter((note, index) => index !== action.id)
      };

    case UPDATE_NOTE:

      return {

        notes: state.notes.map((note, index) => {
          if (index === action.id) {
            return {
              ...note,
              title: action.note.title,
              content: action.note.content,
            }
          } else return note;
        })
      }






    default:
      return state;
  };
}

export default rootReducer;