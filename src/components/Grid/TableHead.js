import React, { useContext } from 'react';
import TableHeaderCell from './TableHeaderCell';
import { GridContext } from '@context';
import * as S from './styles';

const TableHead = () => {
  const {
    options,
    selectAllRows,
    headers,
    selectedAll,
    setSelectedAll,
  } = useContext(GridContext);
  const { selectable } = options;
  const headersLength = headers.filter(header => header.visible).length;
  const checkBoxHandler = event => {
    setSelectedAll(event.target.checked);
    selectAllRows(event.target.checked);
  };
  return (
    <S.TableHead>
      {selectable && (
        <S.TableHeadCell checkbox>
          <S.CheckBox
            type={'checkbox'}
            onChange={checkBoxHandler}
            checked={selectedAll}
          />
        </S.TableHeadCell>
      )}
      {headers?.map((cell, i) => (
        <React.Fragment key={i}>
          {cell.visible && (
            <TableHeaderCell
              cell={cell}
              key={i}
              headersLength={headersLength}
            />
          )}
        </React.Fragment>
      ))}
    </S.TableHead>
  );
};

export default TableHead;
