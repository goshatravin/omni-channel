import loginReducer from '../store/reducers/loginReducer';
import actionTypes from '../store/constants';

describe('login reducer', () => {
  const initialState = {
    loggedIn: false,
    isLoading: false,
    data: null,
    error: null,
  };
  it('should return the initial state', () => {
    expect(loginReducer(undefined, {})).toEqual(initialState);
  });
  it(`should handle ${actionTypes.LOGIN_REQUEST}`, () => {
    expect(
      loginReducer(initialState, {
        type: actionTypes.LOGIN_REQUEST,
      })
    ).toEqual({ loggedIn: false, isLoading: true, data: null, error: null });
  });
  it(`should handle ${actionTypes.LOGIN_SUCCESS}`, () => {
    const data = {
      error: false,
      id: 343,
      login: 'kek',
      password: 'vorobek',
      status: '245',
      text: 'some text',
    };
    expect(
      loginReducer(
        {
          loggedIn: false,
          isLoading: true,
          data: null,
          error: null,
        },
        {
          type: actionTypes.LOGIN_SUCCESS,
          payload: {
            data,
          },
        }
      )
    ).toEqual({ loggedIn: true, isLoading: false, data, error: null });
  });
  it(`should handle ${actionTypes.LOGIN_FAILURE}`, () => {
    const error = {
      error: true,
      status: '02',
      text: 'Authentication failed',
      value: null,
    };
    expect(
      loginReducer(
        {
          loggedIn: false,
          isLoading: true,
          data: null,
          error: null,
        },
        {
          type: actionTypes.LOGIN_FAILURE,
          payload: {
            error,
          },
        }
      )
    ).toEqual({ loggedIn: false, isLoading: false, error, data: null });
  });
  it(`should handle ${actionTypes.SESSION_REQUEST}`, () => {
    expect(
      loginReducer(initialState, {
        type: actionTypes.SESSION_REQUEST,
      })
    ).toEqual({ loggedIn: false, isLoading: true, data: null, error: null });
  });
  it(`should handle ${actionTypes.SESSION_SUCCESS}`, () => {
    const data = {
      error: false,
      id: 343,
      login: 'kek',
      password: 'vorobek',
      status: '245',
      text: 'some text',
    };
    expect(
      loginReducer(
        {
          loggedIn: false,
          isLoading: true,
          data: null,
          error: null,
        },
        {
          type: actionTypes.SESSION_SUCCESS,
          payload: {
            data,
          },
        }
      )
    ).toEqual({ loggedIn: true, isLoading: false, data, error: null });
  });
  it(`should handle ${actionTypes.SESSION_FAILURE}`, () => {
    const error = {
      error: true,
      status: '02',
      text: 'Authentication failed',
      value: null,
    };
    expect(
      loginReducer(
        {
          loggedIn: false,
          isLoading: true,
          data: null,
          error: null,
        },
        {
          type: actionTypes.SESSION_FAILURE,
          payload: {
            error,
          },
        }
      )
    ).toEqual({ loggedIn: false, isLoading: false, error, data: null });
  });
});
