import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import actionTypes from '../store/constants';
import axios from '../store/services/axios';
import {
  loginFailure,
  loginSuccess,
  loginRequest,
  authUser,
} from '../store/actions/loginAction';

axios.defaults.adapter = require('axios/lib/adapters/http');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('Login async actions', () => {
  it(`should return ${actionTypes.LOGIN_REQUEST}`, () => {
    const expectedAction = {
      type: actionTypes.LOGIN_REQUEST,
    };
    expect(loginRequest()).toEqual(expectedAction);
  });
  it(`should return ${actionTypes.LOGIN_SUCCESS}`, () => {
    const data = {
      error: false,
      id: 343,
      login: 'kek',
      password: 'vorobek',
      status: '245',
      text: 'some text',
    };
    const expectedAction = {
      type: actionTypes.LOGIN_SUCCESS,
      payload: {
        data,
      },
    };
    expect(loginSuccess(data)).toEqual(expectedAction);
  });
  it(`should return ${actionTypes.LOGIN_FAILURE}`, () => {
    const error = {
      error: true,
      status: '02',
      text: 'Authentication failed',
      value: null,
    };
    const expectedAction = {
      type: actionTypes.LOGIN_FAILURE,
      payload: {
        error,
      },
    };
    expect(loginFailure(error)).toEqual(expectedAction);
  });
  it('should retrun LOGIN_SUCCESS middleware', () => {
    mock.onPost('/login').replyOnce(200, {
      error: false,
      status: '00',
      text: 'OK',
      value:
        'eyJlcnJvciI6ZmFsc2UsImlkIjozNDMsImxvZ2luIjoia2VrIiwicGFzc3dvcmQiOiJ2b3JvYmVrIiwic3RhdHVzIjoiMjQ1IiwidGV4dCI6InNvbWUgdGV4dCJ9',
    });
    const expectedActions = [
      { type: actionTypes.LOGIN_REQUEST },
      {
        type: actionTypes.LOGIN_SUCCESS,
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

    return store.dispatch(authUser('kek', 'vorobek')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
