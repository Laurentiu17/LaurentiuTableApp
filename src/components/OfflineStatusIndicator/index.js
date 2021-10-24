import React from 'react';

import { useOfflineStatus } from '@services/utils';
import { OfflineIcon } from '@icons';

import * as S from './styles';

const OfflineStatusIndicator = () => {
  const isOffline = useOfflineStatus();
  return (
    <S.OfflineStatus offline={isOffline}>
      <OfflineIcon /> Offline
    </S.OfflineStatus>
  );
};

export default OfflineStatusIndicator;
