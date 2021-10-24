import React from 'react';
import * as R from 'ramda';

import Grid from '@components/Grid';

import * as S from './styles';

/* eslint react/prop-types: 0 */

class PrintComponent extends React.Component {
  render() {
    const { tableData, configDetails, printTitle } = this.props;

    return (
      <>
        {!R.isEmpty(configDetails) ? (
          <S.PrintWrapper>
            {printTitle && <h1>{printTitle}</h1>}
            <Grid
              config={configDetails}
              tableData={tableData}
              loadTableData={() => {}}
              goNextPage={() => {}}
              goPrevPage={() => {}}
              setNextPage={false}
              setPrevPage={false}
              pagination={{ prev: false, next: false }}
              setPagination={() => {}}
              pageNr={0}
              updateTableData={() => {}}
              isBatchActionsVisible={false}
              setBatchActionsVisibile={() => {}}
              setSelectedRows={() => {}}
              setIndividualActionsVisibile={() => {}}
              refreshGrid={false}
              setRefreshGrid={() => {}}
              resetPage={false}
              setResetPage={() => {}}
              isPrintMode
            />
          </S.PrintWrapper>
        ) : null}
      </>
    );
  }
}

export default PrintComponent;
