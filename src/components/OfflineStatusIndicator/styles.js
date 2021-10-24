import styled from 'styled-components/macro';

export const OfflineStatus = styled.div`
  visibility: ${props => (props.offline ? 'visible' : 'hidden')};
  background-color: rgba(234, 84, 40, 0.2);
  border-radius: 20px;
  width: 100px;
  height: 36px;
  padding: 6px 15px;
  color: #ea5428;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
