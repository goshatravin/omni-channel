import actionTypes from '../constants';

const ticketUpdate = (data) => {
  if (data.new_assigned_ticket) {
    return {
      type: actionTypes.SOCKET_NEW_ASSIGNED_TICKET,
      payload: {
        data: data.new_assigned_ticket,
      },
    };
  }
  return {
    type: actionTypes.SOCKET_NEW_ASSIGNED_TICKET,
    payload: {
      data,
    },
  };
};
export default ticketUpdate;
