import React, { useContext, useState, useEffect } from 'react';
import * as I from '@icons';
import SearchInput from '@components/SearchInput';
import * as S from './styles';
import { GridContext } from '@context';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactTooltip from 'react-tooltip';
import Select from 'react-select';

const TableHeaderCell = ({ cell, headersLength }) => {
  const {
    sort,
    clearFilters,
    filterColumn,
    filterByDate,
    reset,
    data,
    filterGridByStatus,
  } = useContext(GridContext);
  const [startDate, setStartDate] = useState('');
  const [value, setValue] = useState('');
  const [progressOptions, setProgressOptions] = useState([]);
  const [progressValue, setProgressValue] = useState({
    value: 'all',
    label: 'All',
  });

  useEffect(() => {
    if (reset) {
      setValue('');
      setProgressValue({
        value: 'all',
        label: 'All',
      });
      setStartDate('');
    }
  }, [reset]);

  // Verifying if the column is sorted already or not, and if it is, we reset the object
  const handleSorting = direction => {
    if (cell.sorted === null || cell.sorted !== direction) {
      sort(cell.name, direction, cell.dataType);
    } else {
      clearFilters();
    }
  };

  // Adding directly from the original object the types of the progress, and adding them the the array that it is used for the select.
  useEffect(() => {
    const progressTypes = data.map(({ progress }) => progress);
    const progressTypesFiltered = progressTypes.filter(
      (elem, i) => progressTypes.indexOf(elem) === i
    );
    setProgressOptions([
      { value: 'all', label: 'All' },
      ...progressTypesFiltered.map(status => ({
        value: status,
        label: status,
      })),
    ]);
  }, []);

  // Gets live the value of the input and filters it
  const filterColumnByInput = e => {
    setValue(e.target.value);
    filterColumn(e.target.value, cell.name);
  };

  return (
    <>
      <S.TableHeadCell headersLength={headersLength}>
        <S.HeadCell>
          <S.HeadTitle>{cell.label}</S.HeadTitle>
          {cell.sortable && (
            <S.SortingArrow sorted={cell.sorted}>
              <I.DropdownArrow
                onClick={() => handleSorting('desc')}
                dataTip="Sort Descending"
              />
              <I.DropdownArrow
                onClick={() => handleSorting('asc')}
                dataTip="Sort Ascending"
              />
            </S.SortingArrow>
          )}
        </S.HeadCell>
        {cell?.searchable && (
          <SearchInput
            className={'searchable_cell'}
            onChange={filterColumnByInput}
            value={value}
          />
        )}
        {cell?.dataType === 'date' && (
          <S.CalendarHeaderCell>
            <DatePicker
              selected={startDate}
              date={startDate}
              onChange={date => {
                setStartDate(date);
                filterByDate(date, cell.name);
              }}
            />
            <I.Calendar />
          </S.CalendarHeaderCell>
        )}
        {cell?.dataType === 'progress' && (
          <Select
            options={progressOptions}
            value={progressValue}
            onChange={value => {
              filterGridByStatus(value);
              setProgressValue(value);
            }}
          />
        )}
      </S.TableHeadCell>
      <ReactTooltip effect={'solid'} />
    </>
  );
};

export default TableHeaderCell;
