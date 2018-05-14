import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

const initialState = {
  messages: [],
  users: {}
}

export function reducer(state, action = {}) {
    switch (action.type) {
    case 'MESSAGES_LOADING_FULFILLED':
      return Object.assign({}, state, {
        messages: action.payload
      })
    case 'USER_LOADING_FULFILLED':
      return Object.assign({}, state, {
        users: action.payload.reduce((obj, user) => Object.assign({}, obj, {
          [user.id]: user
        }), {})
      })
    default:
      return state
  }
}

export const store = createStore(reducer, initialState, applyMiddleware(
  promiseMiddleware()
));