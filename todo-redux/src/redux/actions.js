// Action Types
export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";

// Action Creators
export const addTask = (description) => ({
  type: ADD_TASK,
  payload: { id: Date.now(), description, isDone: false },
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const editTask = (id, newDescription) => ({
  type: EDIT_TASK,
  payload: { id, newDescription },
});
