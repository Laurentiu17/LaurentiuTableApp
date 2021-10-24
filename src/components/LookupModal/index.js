import React, { useState, useEffect, useCallback } from 'react';
import apiCall from '@components/Grid/api';

import Modal from '@components/ModalDialog';
import { usePageConfiguration } from '@services/utils';

import { formatOperators } from './lookupFields';
import ModalContent from './ModalContent';

/* eslint react/prop-types: 0 */

const LookupModal = ({
  id,
  lookupApi,
  onModalClose,
  onValueSelected,
  searchValue,
}) => {
  const [columns, setColumns] = useState();
  const [operators, setOperators] = useState();
  const [tableData, setTableData] = useState();

  const pagePkey = usePageConfiguration();

  /**
   * Fetch operators details
   */
  useEffect(() => {
    apiCall.getOperators().then(response => {
      const values = response.reduce((acc, data) => {
        return {
          ...acc,
          [data.fieldType]: formatOperators(data),
        };
      }, {});

      setOperators(values);
    });
  }, []);

  /**
   * Fetch columns details
   */
  useEffect(() => {
    if (pagePkey && id) {
      apiCall.getLookupProperties(pagePkey, id).then(response => {
        // Q for backend: Why is this array?
        const res = response[0];

        setColumns(
          res.filterFields.map(x => ({
            value: x.displayName,
            label: x.displayName,
            fieldType: x.fieldType,
          }))
        );
      });
    }
  }, [pagePkey, id]);

  /**
   * Fetch initial table data
   */
  // useEffect(() => {
  //   if (!tableData && !!lookupApi) {
  //     apiCall.getAllLookupData(lookupApi).then(response => {
  //       setTableData(response.response);
  //     });
  //   }
  // }, [tableData, lookupApi]);

  /**
   * Fetch table data on search
   */
  const searchData = useCallback(
    (column, comparison, value) => {
      if (!!lookupApi) {
        apiCall
          .getLookupDataProd(lookupApi, column, comparison, value)
          .then(response => setTableData(response.response))
          .catch(error => {});
      }
    },
    [lookupApi]
  );

  /**
   * Close modal
   */
  const closeModal = () => {
    onModalClose && onModalClose();
  };

  /**
   * On select value
   */
  const selectValue = item => {
    onValueSelected && onValueSelected(item);
  };

  return (
    <>
      <Modal
        isOpen={true}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <ModalContent
          columns={columns}
          operators={operators}
          tableData={tableData}
          searchValue={searchValue}
          onSearch={searchData}
          onSave={selectValue}
          onCancel={closeModal}
        />
      </Modal>
    </>
  );
};

export default LookupModal;
