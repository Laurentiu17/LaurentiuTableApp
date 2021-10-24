import React, { useContext } from 'react';
import TableHead from './TableHead';
import TableContent from './TableContent';
import { GridContext, DefaultDatas } from '@context';
import * as S from './styles';

// Made the Table Pure Component for the grid functionality
class Table extends React.PureComponent {
  render() {
    return (
      <S.TableComplete
        fullscreen={this.props.hiddenSideBar}
        forPrinting={this.props.forPrinting}
        openNavBar={this.props.openNavBar}
      >
        <TableHead />
        <TableContent />
      </S.TableComplete>
    );
  }
}

const Grid = ({ hiddenSideBar }) => {
  const { componentRef } = useContext(GridContext);
  const { openNavBar } = useContext(DefaultDatas);
  return (
    <>
      <div style={{ display: 'none' }}>
        <Table ref={componentRef} forPrinting />
      </div>
      <Table hiddenSideBar={hiddenSideBar} openNavBar={openNavBar} />
    </>
  );
};

export default Grid;
