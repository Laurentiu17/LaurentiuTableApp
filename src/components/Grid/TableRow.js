import React, { useContext, useState } from 'react';
import * as S from './styles';
import * as I from '@icons';
import { GridContext } from '@context';
import TableCell from './TableCell';

const TableRow = ({ row, headers, selectable = false }) => {
  const { targetRow } = useContext(GridContext);

  //Targets the Row and makes it
  const checkBoxHandler = event => {
    targetRow(event.target.checked, row.tableRowId);
  };

  return (
    <S.TableRow>
      {selectable && (
        <S.TableRowCell checkbox>
          <S.CheckBox
            type={'checkbox'}
            checked={row?.selected}
            onChange={checkBoxHandler}
          />
          <I.Edit />
        </S.TableRowCell>
      )}
      {headers
        .filter(cell => cell.visible)
        .map((cell, key) => (
          <TableCell
            key={key}
            headersLength={headers.filter(cell => cell.visible).length}
            header={cell}
            row={row}
            index={key}
          >
            {row[cell.name]}
          </TableCell>
        ))}
    </S.TableRow>
  );
};

export default TableRow;
