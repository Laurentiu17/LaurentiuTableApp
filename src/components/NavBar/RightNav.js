import React, { useState, useContext } from 'react';
import SearchInput from '@components/SearchInput';
import * as S from './styles';
import * as I from '@icons';
import Button from '@components/Button/';
import { DefaultDatas, GridContext } from '@context';
import ReactTooltip from 'react-tooltip';
import GridSettings from '@components/Grid/GridSettings';
import Modal from 'react-modal';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ReactToPrint from 'react-to-print';

const RightNav = () => {
  const { setHiddenSideBar, hiddenSideBar, isMobile } = useContext(
    DefaultDatas
  );
  const { filterGrid, componentRef, resetKeybordNavigation } = useContext(
    GridContext
  );
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState('');

  const sortTheGrid = e => {
    setValue(e.target.value);
    filterGrid(e.target.value);
  };

  return (
    <>
      <S.RightNav>
        <S.NavLine>
          <SearchInput
            className={'navbar_search'}
            dataTip="Search in the entire table"
            onChange={sortTheGrid}
            value={value}
          />
          <Button default className={'small-btn'} dataTip="Download Table">
            <I.Download />
          </Button>
          <ReactToPrint
            onBeforeGetContent={() => resetKeybordNavigation()}
            trigger={() => (
              <Button default className={'small-btn'} dataTip="Print Table">
                <I.Print />
              </Button>
            )}
            content={() => componentRef.current}
          />

          <Button label={'Create New Cost'} primary />
        </S.NavLine>
        <S.NavLine>
          <Button
            default
            disabled
            className={'small-btn revert-arrow'}
            dataTip="Previous Page"
          >
            <I.Arrow />
          </Button>
          <Button default disabled className={'small-btn '} dataTip="Next Page">
            <I.Arrow />
          </Button>
          {!isMobile && (
            <Button
              default
              className={'small-btn'}
              dataTip="Full Screen"
              onClick={() => {
                setHiddenSideBar(!hiddenSideBar);
              }}
            >
              <I.FullScreen />
            </Button>
          )}
          <Button
            default
            className={'small-btn'}
            dataTip="Settings"
            onClick={() => setModal(true)}
          >
            <I.Settings />
          </Button>
        </S.NavLine>
      </S.RightNav>
      <ReactTooltip effect={'solid'} id={'tooltip'} />
      {modal && (
        <Modal
          isOpen={true}
          onRequestClose={() => setModal(false)}
          contentLabel="Grid Settings"
          ariaHideApp={false}
          style={{
            content: {
              height: '65vh',
            },
          }}
        >
          <DndProvider backend={HTML5Backend}>
            <GridSettings close={() => setModal(false)} />
          </DndProvider>
        </Modal>
      )}
    </>
  );
};

export default RightNav;
