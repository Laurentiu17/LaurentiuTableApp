import React from 'react';

import { ToastInfo, ToastNegative, ToastPositive, ToastWarning } from '@icons';

import * as S from './styles';

/* eslint react/prop-types: 0 */

const ToastMessage = ({ title, content, type }) => {
  const renderIcon = () => {
    switch (type) {
      case 'positive':
        return <ToastPositive />;
      case 'info':
        return <ToastInfo />;
      case 'negative':
        return <ToastNegative />;
      case 'warning':
        return <ToastWarning />;
      default:
    }
  };
  return (
    <S.ToastContainer className="content">
      {renderIcon()}
      <S.ToastContent>
        <S.ToastTitle className="title">{title}</S.ToastTitle>
        <div>{content}</div>
      </S.ToastContent>
    </S.ToastContainer>
  );
};

export default ToastMessage;
