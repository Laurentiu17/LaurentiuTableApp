import React, { useContext } from 'react';
import { GridContext } from '@context';
import TableRow from './TableRow';
import * as S from './styles';

const TableContent = () => {
  const { options, data, headers } = useContext(GridContext);
  const { selectable } = options;
  return (
    <S.TableContent>
      {data?.map((row, i) => {
        return (
          <TableRow
            row={row}
            key={i}
            headers={headers}
            selectable={selectable}
          />
        );
      })}
    </S.TableContent>
  );
};

export default TableContent;
