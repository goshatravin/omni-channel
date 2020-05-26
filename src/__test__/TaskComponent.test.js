import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import TaskComponent from '../components/TasksComponents';

describe('Component: TaskComponent', () => {
  const referenceValue = [
    { channel_type_id: '1', name: 'Viber' },
    { channel_type_id: '2', name: 'WhatsApp' },
    { channel_type_id: '3', name: 'Telegram' },
    { channel_type_id: '4', name: 'Skype' },
  ];
  const ticketHandler = () => {};
  const ticketValue = {
    count: 21,
    next: 'http://127.0.0.1:8000/api/v1/ticket/?page=5',
    previous: 'http://127.0.0.1:8000/api/v1/ticket/?page=3',
    results: [
      {
        assigned_to: '784',
        case_id: '1567899',
        channel_id: '00ca4f0a-a133-4907-8a89-f565e2611285',
        created_at: '2020-05-04 10:34:49',
        created_by: '123',
        customer_id: 'f2b12e92-2711-4ec8-bf66-9aea645e0c5f',
        remark: 'Переписка идет с преставителем ЗЛ',
        status_type_id: '1',
        ticket_id: '1e3551f1-a939-4c32-a9da-fb86168198f5',
        updated_at: '2020-05-04 11:27:56',
      },
      {
        assigned_to: '235',
        case_id: '2385585',
        channel_id: '00ca4f0a-a133-4907-8a89-f565e2611285',
        created_at: '2020-05-04 10:34:49',
        created_by: '123',
        customer_id: '21418d70-9e2a-4ca1-93be-1fea433298f1',
        remark: 'Говорит, что обращался ранее, надо найти дело.',
        status_type_id: '1',
        ticket_id: '5ef54883-f15c-4091-a092-f6b545eafe18',
        updated_at: '2020-05-04 11:27:56',
      },
      {
        assigned_to: '435',
        case_id: '4385585',
        channel_id: '00ca4f0a-a133-4907-8a89-f565e2611285',
        created_at: '2020-05-04 10:34:49',
        created_by: '123',
        customer_id: '41418d70-9e2a-4ca1-93be-1fea433298f1',
        remark: 'Говорит, что обращался ранее, надо найти дело.',
        status_type_id: '1',
        ticket_id: '4ef54883-f15c-4091-a092-f6b545eafe18',
        updated_at: '2020-05-04 11:27:56',
      },
    ],
  };
  const lightColors = {
    colors: {
      primary: '#F6F6F6',
      active: '#266CD7',
      input_border: '#EBEFF3',
      input_placeholder: '#9fa9ad',
      text: '#393F47',
      error: '#ff767e',
    },
  };
  it('should render', () => {
    const component = (
      <ThemeProvider theme={lightColors}>
        <TaskComponent
          referenceValue={referenceValue}
          ticketValue={ticketValue}
          ticketHandler={ticketHandler}
        />
      </ThemeProvider>
    );
    const tree = mount(component);
    // console.log(tree.debug());
    expect(tree.find('.TaskDiv').hostNodes().length).toEqual(3);
    // Проверка Created_by
    expect(tree.find('.created').hostNodes().length).toEqual(3);
    expect(tree.find('.Operator').hostNodes().length).toEqual(3);

    // expect(tree).toMatchSnapshot();
  });
});
