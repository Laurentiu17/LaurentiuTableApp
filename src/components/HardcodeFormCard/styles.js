import styled from 'styled-components/macro';
/*
  When using the Card Component, add this styling to the wrapper:

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
*/

export const CardContainer = styled.div`
  width: ${props => (props.half ? 'calc(50% - 8px)' : '100%')};
  border-radius: 4px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column;
  border: 1px solid #dde4ee;
  margin-bottom: 16px;
`;
export const CardTopBar = styled.div`
  max-height: 40px;
  padding: 12px 16px;
  background: #e9ecf0;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 500;
  color: #515d79;
  letter-spacing: -0.41px;
`;
export const CardContent = styled.div`
  padding: 12px 16px;
`;
