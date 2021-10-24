import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Modal from '@components/ModalDialog';
import Button from '@components/Button';
import Checkbox from '@components/Checkbox';

import * as S from './styles';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const getListStyle = isDraggingOver => ({
  // background: isDraggingOver ? 'lightblue' : 'lightgrey',
  width: '100%',
});

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  // change background colour if dragging
  background: isDragging ? '#fff' : 'transparent',
  boxShadow: isDragging ? '0 2px 5px 0 rgba(0, 0, 0, 0.13)' : '',
  padding: isDragging ? '0 8px' : 'inherit',
  borderBottom: isDragging ? 'none' : ' 1px solid #dbe4ee',

  // styles we need to apply on draggables
  ...draggableStyle,
});

/* eslint react/prop-types: 0 */
const SettingsModal = ({
  columns,
  onModalClose,
  onColumnReset,
  onColumnSave,
}) => {
  const [editableColumns, setEditableColumns] = useState(
    columns.map(c => ({ ...c }))
  );

  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      editableColumns,
      result.source.index,
      result.destination.index
    );

    items.map((item, idx) => (item.position = idx));
    setEditableColumns(items);
  };

  const renderDragDrop = () => {
    if (editableColumns) {
      return (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {editableColumns.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <S.DraggableItem>
                          <S.DraggableNameWrapper>
                            <Checkbox
                              checked={item.visible}
                              onChange={() => handleCheckbox(item)}
                            />
                            <S.DraggableName>{item.name}</S.DraggableName>
                          </S.DraggableNameWrapper>
                          <S.DraggableIcon />
                        </S.DraggableItem>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      );
    }
  };

  const handleCheckbox = item => {
    item.visible = item.visible ? false : true;
    setEditableColumns([...editableColumns]);
  };

  return (
    <Modal
      isOpen={true}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <S.ModalWrapper>
        <S.ModalTopBar>
          <S.TopbarUpper>
            <S.ModalTitle>Customize table</S.ModalTitle>
            <S.ModalActions>
              <Button primary onClick={() => onColumnReset()}>
                Reset Default
              </Button>
              <Button primary onClick={() => onColumnSave(editableColumns)}>
                Save
              </Button>
              <Button default onClick={() => onModalClose()}>
                Cancel
              </Button>
            </S.ModalActions>
          </S.TopbarUpper>
          <S.TopbarBottom>
            Use drag and drop functionality by clicking an row, then moving it
            to desired position in the vertical list.
          </S.TopbarBottom>
        </S.ModalTopBar>
        <S.ModalContent>{renderDragDrop()}</S.ModalContent>
      </S.ModalWrapper>
    </Modal>
  );
};

export default SettingsModal;
