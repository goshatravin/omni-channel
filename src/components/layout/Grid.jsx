import styled from 'styled-components';

const Grid = styled.div`
  background: ${(props) => props.theme.colors.primary};
`;
const Row = styled.div`
  display: flex;
`;
const Col = styled.div`
  padding: 1rem;
  box-sizing: border-box;
  flex: ${(props) => props.size};
  height: calc(100vh - 0.1rem);
  display: flex;
  flex-direction: column;
  border-right: 1px solid #dfe1e5;
`;
const BlockOverflow = styled.div`
  overflow-y: scroll;
  flex: 1;
`;
const FlexBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 2rem);
`;
const Block = styled.div`
  padding-bottom: 1rem;
`;
export { Grid, Row, Col, Block, BlockOverflow, FlexBlock };
