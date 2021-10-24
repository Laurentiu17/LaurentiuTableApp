import React, { useState, useEffect } from 'react';

import api from '@api';
import Button from '@components/Button';

import * as S from './styles';

/* eslint react/prop-types: 0 */

const PropertiesModal = ({ pkey, url, onClose }) => {
  const [lineProperties, setLineProperties] = useState({});

  const getCardData = (url, pkey) => {
    return api.get(url + '/' + pkey);
  };

  useEffect(() => {
    if (!pkey || !url) {
      return;
    }

    getCardData(url, pkey).then(
      ({
        userDateCreated,
        userDateModified,
        userIdCreated,
        userIdModified,
        userLastModified,
      }) => {
        setLineProperties({
          userDateCreated,
          userDateModified,
          userIdCreated,
          userIdModified,
          userLastModified,
        });
      }
    );
  }, [url, pkey]);

  return (
    <S.ModalContainer>
      <S.ModalTopBar>
        <S.ModalTitle>{pkey} Properties</S.ModalTitle>
      </S.ModalTopBar>
      <S.ModalContent>
        <p>User ID Created: {lineProperties.userIdCreated}</p>
        <p>Date Created: {lineProperties.userDateCreated}</p>
        <p>User Id Changed: {lineProperties.userIdModified}</p>
        <p>Date Changed: {lineProperties.userDateModified}</p>
      </S.ModalContent>
      <S.ModalFooter>
        <Button default onClick={() => onClose && onClose()}>
          OK
        </Button>
      </S.ModalFooter>
    </S.ModalContainer>
  );
};

export default PropertiesModal;
