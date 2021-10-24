import React, { useCallback } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import * as S from './styles';
import { Hamburger } from '@icons';
import update from 'immutability-helper';

const GridSettingsItem = ({ column, setHeadersCopy, headersCopy }) => {
  const { position } = column;

  // Finding the Header selected first
  const findHeader = position => {
    const header = headersCopy.filter(c => c.position == position)[0];
    return {
      header: { ...header },
      index: headersCopy.indexOf(header),
    };
  };

  // Hiding and Showing Columns
  const handleVisibleCheckBox = useCallback(
    column => {
      setHeadersCopy(_prev => {
        const prev = JSON.parse(JSON.stringify(_prev));
        const index = prev.map(({ name }) => name).indexOf(column.name);
        prev[index].visible = prev[index].visible ? false : true;

        return [...prev];
      });
    },
    [setHeadersCopy]
  );

  // Modifying the position of the column in the oject
  const handleDragAndDrop = useCallback(
    (position, hoverIndex) => {
      const { header, index } = findHeader(position);

      setHeadersCopy(
        update(headersCopy, {
          $splice: [
            [index, 1],
            [hoverIndex, 0, header],
          ],
        })
      );
    },
    [setHeadersCopy, headersCopy]
  );

  // Finding the original index of the column
  const originalIndex = findHeader(position).index;

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'header',
      item: { position, originalIndex },
      collect: monitor => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          handleDragAndDrop(droppedId, originalIndex);
        }

        setHeadersCopy(prev => {
          return prev.map((header, index) => ({
            ...header,
            position: index + 1,
          }));
        });
      },
    }),
    [position, originalIndex, handleDragAndDrop, headersCopy]
  );

  const [, drop] = useDrop(
    () => ({
      accept: 'header',
      canDrop: () => false,
      hover({ position: draggedId }) {
        if (draggedId !== position) {
          const { index: overIndex } = findHeader(position);
          handleDragAndDrop(draggedId, overIndex);
        }
      },
    }),
    [findHeader, handleDragAndDrop]
  );

  return (
    <S.ColumnSetting>
      <S.Input
        type={'checkbox'}
        checked={column.visible}
        onChange={() => handleVisibleCheckBox(column)}
      />
      <p>{column.label}</p>
      <S.Hamburger ref={node => drag(drop(node))} isDragging={isDragging}>
        <Hamburger />
      </S.Hamburger>
    </S.ColumnSetting>
  );
};

export default GridSettingsItem;
