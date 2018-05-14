import { getMessages, getMembers } from './data';

export function getChatLog() {
  return {
    type: 'MESSAGES_LOADING',
    payload: getMessages()
  };
}

export function getUsersLog() {
  return {
    type: 'USER_LOADING',
    payload: getMembers()
  }
}
