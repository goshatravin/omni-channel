import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import actionTypes from '../store/constants';
import axios from '../store/services/axios';
import {
  sessionAuth,
  sessionRequest,
  sessionSuccess,
  sessionFailure,
} from '../store/actions/sessionAction';

axios.defaults.adapter = require('axios/lib/adapters/http');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('Session async actions', () => {
  it(`should return ${actionTypes.SESSION_REQUEST}`, () => {
    const expectedAction = {
      type: actionTypes.SESSION_REQUEST,
    };
    expect(sessionRequest()).toEqual(expectedAction);
  });
  it(`should return ${actionTypes.SESSION_SUCCESS}`, () => {
    const data = {
      error: false,
      id: 343,
      login: 'kek',
      password: 'vorobek',
      status: '245',
      text: 'some text',
    };
    const expectedAction = {
      type: actionTypes.SESSION_SUCCESS,
      payload: {
        data,
      },
    };
    expect(sessionSuccess(data)).toEqual(expectedAction);
  });
  it(`should return ${actionTypes.SESSION_FAILURE}`, () => {
    const data = {
      error: true,
      status: '02',
      text: 'Not authorized session',
      value: null,
    };
    const expectedAction = {
      type: actionTypes.SESSION_FAILURE,
      payload: {
        data,
      },
    };
    expect(sessionFailure(data)).toEqual(expectedAction);
  });
  it('should retrun LOGIN_SUCCESS middleware', () => {
    mock.onPost('/main').replyOnce(200, {
      error: false,
      status: '00',
      text: 'OK',
      value:
        'eyJlcnJvciI6ZmFsc2UsImlkIjozNDMsImxvZ2luIjoia2VrIiwicGFzc3dvcmQiOiJ2b3JvYmVrIiwic3RhdHVzIjoiMjQ1IiwidGV4dCI6InNvbWUgdGV4dCJ9',
    });
    const expectedActions = [
      { type: actionTypes.SESSION_REQUEST },
      {
        type: actionTypes.SESSION_SUCCESS,
        payload: {
          data: {
            error: false,
            id: 343,
            login: 'kek',
            password: 'vorobek',
            status: '245',
            text: 'some text',
          },
        },
      },
    ];
    const store = mockStore({});

    return store.dispatch(sessionAuth('/main')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
