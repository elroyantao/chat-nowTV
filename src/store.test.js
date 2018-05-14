import { reducer } from './store';

describe('store.js', () => {
  it('should set messages in the store', () => {
    const messages = [{
      id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
      userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
      message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
      timestamp: '2017-02-09T04:27:38Z'
    }]

    const updatedStore = reducer({}, { type: 'MESSAGES_LOADING_FULFILLED', payload: messages });

    expect(updatedStore.messages).toEqual(messages);
  });
  it('should set users to the store as objects', () => {
    const users = [{
      id: 'e837c9f5-247f-445f-bcc3-7d434348336b',
      firstName: 'Martin',
      lastName: 'Bradley',
      email: 'mbradley0@google.it',
      avatar: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
      ip: '166.124.172.160'
    },
    {
      id: 'cae5d3af-9ac7-471e-9061-e2e9d75f00e4',
      firstName: 'Helen',
      lastName: 'Hawkins',
      email: 'hhawkins1@posterous.com',
      avatar: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
      ip: '179.239.189.173'
    }]
    const updatedStore = reducer({}, { type: 'USER_LOADING_FULFILLED', payload: users });
    expect(updatedStore.users).toEqual({
      'e837c9f5-247f-445f-bcc3-7d434348336b': {
        id: 'e837c9f5-247f-445f-bcc3-7d434348336b',
        firstName: 'Martin',
        lastName: 'Bradley',
        email: 'mbradley0@google.it',
        avatar: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
        ip: '166.124.172.160'
      },
      'cae5d3af-9ac7-471e-9061-e2e9d75f00e4': {
        id: 'cae5d3af-9ac7-471e-9061-e2e9d75f00e4',
        firstName: 'Helen',
        lastName: 'Hawkins',
        email: 'hhawkins1@posterous.com',
        avatar: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
        ip: '179.239.189.173'
      }
    })
  })
})

