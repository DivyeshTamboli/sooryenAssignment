import * as actions from './actions'

describe('actions', () => {
  it('should create an action to add a note', () => {
    const expectedAction = {
      type: actions.ADD_NOTE,
      title: "title",
      content: "content"
    }
    expect(actions.addNote("title", "content")).toEqual(expectedAction)
  })

  it('should create an action to remove a note', () => {
    const expectedAction = {
      type: actions.REMOVE_NOTE,
      id: '0'
    }
    expect(actions.removeNote('0')).toEqual(expectedAction)
  })


  it('should create an action to update a note', () => {
    const expectedAction = {
      type: actions.UPDATE_NOTE,
      id: '0',
      note: { title: "title", content: "content" }
    }
    const inputNote = { title: "title", content: "content" };
    expect(actions.updateNote('0', inputNote)).toEqual(expectedAction)
  })
})
