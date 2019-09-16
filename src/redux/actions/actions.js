export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';


export function addNote(title, content) {
  return { type: ADD_NOTE, title: title, content: content };
}

export function removeNote(id) {
  return { type: REMOVE_NOTE, id: id };
}


export function updateNote(id, note) {
  return { type: UPDATE_NOTE, id: id, note: note };
}