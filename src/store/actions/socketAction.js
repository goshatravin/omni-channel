import actionTypes from '../constants';

const ticketUpdate = (data) => {
  return {
    type: actionTypes.SOCKET_NEW_ASSIGNED_TICKET,
    payload: {
      data,
    },
  };
};
export default ticketUpdate;
