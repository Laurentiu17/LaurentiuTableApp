import styled from 'styled-components/macro';

export const ToastWrapper = styled.div`
  .Toastify {
    .Toastify__toast-container {
      background: #fff;
      margin: 0;
      padding: 0;

      .Toastify__toast {
        border-radius: 4px;
        box-shadow: 0 0 1px 0 rgba(67, 90, 111, 0.47);
        margin: 0 0 16px 0;
        padding: 6px;
        &--info {
          border-left: 4px solid #306ed8;
          background: inherit;
        }

        &--error {
          border-left: 4px solid #ea5428;
          background: inherit;
        }

        &--success {
          border-left: 4px solid #5db082;
          background: inherit;
        }

        &--warning {
          border-left: 4px solid #f19d39;
          background: inherit;
        }

        .Toastify__toast-body {
          display: flex;
          flex-direction: column;
          padding: 0.8rem;

          .title {
            color: #515d79;
            font-size: 1.6rem;
            font-weight: 500;
            margin-bottom: 8px;
          }

          .content {
            font-size: 1.4rem;
            color: #515d79;
          }
        }
      }
    }
  }
`;

export const ToastContainer = styled.div`
  font-size: 1.4rem;
  color: #515d79;
  display: flex;
`;

export const ToastTitle = styled.div`
  color: #515d79;
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const ToastContent = styled.div`
  margin-left: 16px;
`;
