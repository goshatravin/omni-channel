import axios from 'axios';
import actionTypes from '../actionTypes';

const ticketRequest = () => ({
  type: actionTypes.TICKET_REQUEST
});
const ticketFailed = (data: object) => ({
  type: actionTypes.TICKET_FAILURE,
  payload: data
});
const ticketSuccess = (data: object) => ({
  type: actionTypes.TICKET_SUCCESS,
  payload: data
});
const getTickets = (query: string, pageNumber: string) => async (
  dispatch: any
) => {
  dispatch(ticketRequest());
  return axios('http://quasartest.accidentlaw.ru/api/v1/omnichannel/tickets', {
    method: 'GET',
    params: { q: query, page: pageNumber }
  })
    .then((response) => {
      const { data } = response;
      if (data.error) {
        throw data;
      }
      dispatch(ticketSuccess(data));
    })
    .catch((error) => {
      dispatch(ticketFailed(error));
    });
};
export { ticketRequest, ticketFailed, ticketSuccess };
