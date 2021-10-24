import React, {
  useContext,
  useState,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import { GridContext } from '@context';
import {
  useOutsideClick,
  useOutsideContextClick,
  useOutsideEnter,
} from '@services/utils';
import RightClickContext from './RightClickContext';
import Modal from 'react-modal';
import CommentModal from './CommentModal';
import * as S from './styles';
import moment from 'moment';
import ReactToPrint from 'react-to-print';
import * as I from '@icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TableCell = ({ children, index, header, row, headersLength }) => {
  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(children || '');
  const [modal, setModal] = useState(false);
  const [rightClick, setRightClick] = useState(false);
  const [datePicker, setDatePicker] = useState(false);
  const [startDate, setStartDate] = useState(new Date(children));
  const {
    editCell,
    navigationKeybord,
    symbol,
    handleCheckboxField,
  } = useContext(GridContext);
  const [previewImage, setPreviewImage] = useState(false);
  const activeCell =
    row.selectedCell.selected && row.selectedCell.columnIndex === index;
  const inputRef = useRef();
  const { tableRowId } = row;
  const { name, dataType } = header;
  const datePickerRef = useRef();

  useEffect(() => {
    submitCell();
  }, [startDate]);

  // Disables the format warning
  moment.suppressDeprecationWarnings = true;

  // Saving the changes of the edited cell
  const submitCell = useCallback(() => {
    if (dataType === 'date') {
      editCell(tableRowId, name, startDate, dataType);
    } else {
      editCell(tableRowId, name, inputValue, dataType);
    }
    setModal(false);
    setDatePicker(false);
  }, [editCell, setModal, inputValue, startDate]);
  // On Enter key, submits the changes or enters in Edit Mode. If it's the comments column, it opens the modal.
  const handleEnterSubmitCell = e => {
    if (e?.key === 'Enter' && !header?.readOnly) {
      setRightClick(false);
      if (editMode) {
        submitCell();
        setEditMode(false);
      } else if (name === 'comments') {
        setModal(true);
      } else if (dataType === 'date') {
        setDatePicker(true);
      } else if (dataType === 'checkbox') {
        handleCheckboxChange();
      } else {
        setEditMode(true);
      }
    } else if (e?.key === 'Enter' && dataType === 'url') {
      window.open(children, '_blank');
    }
  };

  // Navigate through Grid, and verifies if it's either a click or a keydown.
  const handleNavigationTroughtGrid = useCallback(
    e => {
      const arrows = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];
      if (e === 'Click') {
        navigationKeybord(tableRowId, index, 'click');
      } else if (arrows.includes(e.key)) {
        setDatePicker(false);
        setEditMode(false);
        navigationKeybord(tableRowId, index, e?.key);
      }
    },
    [tableRowId, index, navigationKeybord, setEditMode, setDatePicker]
  );

  // Adding an event listener for every cell we are navigating from the arrows,
  // and makes it focused, so the event could be handled more times.
  useEffect(() => {
    if (activeCell) {
      inputRef?.current?.addEventListener('keyup', handleNavigationTroughtGrid);
      inputRef?.current?.focus();
    } else {
      inputRef?.current?.removeEventListener(
        'keydown',
        handleNavigationTroughtGrid
      );
    }
  }, [activeCell]);

  // On clicking on cell, either the modal is opening if it's the comments column, or
  // it modifies the object and makes it navigable.
  const handleChangingCell = e => {
    if (name === 'comments' && !modal) {
      setModal(true);
    } else if (dataType === 'url') {
      window.open(children, '_blank');
    } else {
      handleNavigationTroughtGrid('Click');
    }
  };

  // Opens the right click context menu and prevents from opening the default menu from the browser
  const handleRightClick = e => {
    e.preventDefault();
    setRightClick(!rightClick);
  };

  // Sets automatic the value of the input as the original object changes
  useEffect(() => {
    setInputValue(children);
  }, [children]);

  // Outside Click functions and Outside Context Click functions :
  const outsideFunc = () => {
    setRightClick(false);
    setEditMode(false);
    submitCell();
  };

  useOutsideClick(inputRef, () => {
    editMode ? outsideFunc : setRightClick(false);
  });

  useOutsideClick(datePickerRef, () => setDatePicker(false));

  useOutsideContextClick(inputRef, () => {
    rightClick && setRightClick(false);
  });

  useOutsideEnter(datePickerRef, () => setDatePicker(false));

  // Image Preview Component
  const LinkPreview = () => {
    return (
      <S.TooltipPreview>
        <I.Close onClick={() => setPreviewImage(false)} />
        <img src="../../../assets/images/preview.png" />
      </S.TooltipPreview>
    );
  };

  const handleCheckboxChange = () => {
    handleCheckboxField(tableRowId, name);
  };
  // Verifies the type of the data, and formats it as it's needed
  useEffect(() => {
    setInputValue(
      dataType === 'date' && children !== null
        ? moment(children).format('LLLL')
        : dataType === 'currency' && children
        ? `${symbol}${children}`
        : children
    );
  }, [children, symbol]);

  return (
    <S.CellDiv
      headersLength={headersLength}
      onMouseEnter={() => dataType === 'image-url' && setPreviewImage(true)}
      onMouseLeave={() => dataType === 'image-url' && setPreviewImage(false)}
      onContextMenu={handleRightClick}
      onClick={handleChangingCell}
      onKeyPress={e => handleEnterSubmitCell(e)}
    >
      {previewImage && <LinkPreview />}
      {dataType === 'progress' && (
        <S.ProgressImg
          src={`../../../assets/images/${children.toLowerCase()}.png`}
        />
      )}
      {dataType === 'checkbox' ? (
        <S.CheckboxField
          ref={inputRef}
          type="checkbox"
          checked={children}
          onChange={handleCheckboxChange}
        />
      ) : (
        <S.Input
          ref={inputRef}
          onChange={e => setInputValue(e.target.value)}
          type={'text'}
          value={inputValue || ''}
          progress={name === 'progress'}
          link={dataType === 'image-url' || dataType === 'url'}
          readOnly={editMode ? false : true}
        />
      )}
      {datePicker && (
        <S.DatePickerCell ref={datePickerRef}>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            open
          />
        </S.DatePickerCell>
      )}
      {dataType === 'image-url' && (
        <S.ImageLogo src="../../../assets/images/img.png" />
      )}

      {modal && (
        <Modal
          isOpen={true}
          onRequestClose={() => setModal(false)}
          contentLabel="Comments Cell"
          ariaHideApp={false}
        >
          <CommentModal
            content={children}
            setInputValue={setInputValue}
            ariaHideApp={false}
            submit={() => submitCell()}
            close={() => setModal(false)}
          />
        </Modal>
      )}
      {rightClick && <RightClickContext />}
      <ReactToPrint effect={'solid'} id={'tooltip'} />
    </S.CellDiv>
  );
};

export default TableCell;
