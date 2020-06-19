import Styled from 'styled-components';

const Wrapper = Styled.div`
  display: flex;
  height: 100vh;
  `;
const SectionTicket = Styled.div`
  /* border: 1px solid black; */
  padding-left: 10px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 325px;
`;
const SectionMessage = Styled.div`
  flex: 2;
`;
const SectionInfo = Styled.div`
  flex: 1;
`;
export { Wrapper, SectionTicket, SectionMessage, SectionInfo };
