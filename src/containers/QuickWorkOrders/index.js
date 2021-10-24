import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
} from 'react';

import { GridContext, AuthContext, DefaultDatas } from '@context';
import * as R from 'ramda';
import moment from 'moment';
import update from 'immutability-helper';
import Grid from '@components/Grid';
import { Breadcrumb } from '@components/Breadcrumbs';
import { dataHeaders, dataTable } from '@components/Grid/tableData';
import NavBar from '@components/NavBar';

const WorkOrders = () => {
  const [tableOptions] = useState({
    headers: dataHeaders,
    data: dataTable,
    selectable: true,
    title: 'Quick Work Orders',
  });

  const [options, setOptions] = useState({});
  const [data, setData] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [initialHeaders, setInitialHeaders] = useState([]);
  const [selectedAll, setSelectedAll] = useState(false);
  const [symbol, setSymbol] = useState();
  const [reset, setReset] = useState(false);
  const componentRef = useRef();
  const { lang } = useContext(AuthContext);
  const { hiddenSideBar } = useContext(DefaultDatas);
  const symbols = { en: '$', ru: 'p', zh: '£', fr: '€', es: '€' };
  const [selectedRows, setSelectedRows] = useState(0);

  // Setting all the states and options
  useEffect(() => {
    const optionCopy = { ...tableOptions };
    optionCopy.data = tableOptions.data.map(row => ({
      ...row,
      tableRowId: (Math.random() * 160).toString(), //adding an id to every row
      selected: false,
      selectedCell: { selected: false, columnIndex: null },
    }));

    optionCopy.headers = tableOptions.headers.map(col => ({
      ...col,
      sorted: null,
    }));

    setData(optionCopy.data);
    setInitialData(optionCopy.data);
    setHeaders(optionCopy.headers);
    setInitialHeaders([...optionCopy.headers]);

    delete optionCopy.data;
    delete optionCopy.headers;

    setOptions(optionCopy);
  }, [tableOptions]);

  // Detecting any changes in data, and if it changes, we turn off the reset state, so we can toggle it on the next clearFilters button
  useEffect(() => {
    reset && setReset(false);
    setSelectedRows(data.filter(row => row?.selected).length);
  }, [data]);

  // Selects all rows
  const selectAllRows = useCallback(
    checked => {
      setData(prev => {
        const newData = prev.map(row => ({
          ...row,
          selected: checked,
        }));
        return [...newData];
      });
    },
    [setData]
  );

  // Targets one row
  const targetRow = useCallback(
    (checked, tableRowId) => {
      setData(prev => {
        const rowIndex = prev
          .map(({ tableRowId }) => tableRowId)
          .indexOf(tableRowId); // Detects the row clicked

        const prevCopy = [...prev];
        prevCopy[rowIndex] = {
          // Changes the copied Object and then returns it
          ...prevCopy[rowIndex],
          selected: checked,
        };

        return [...prevCopy];
      });
    },
    [setOptions]
  );

  // Sorting the column
  const sort = useCallback(
    (dataKey, direction, dataType) => {
      setData(prev => {
        const prevCopy = [...prev]; // Making a copy of the prev
        if (dataType !== 'checkbox') {
          prevCopy.sort((a, b) => {
            let _a =
              dataType === 'number' // Detecting the type of the data we filter
                ? parseInt(a[dataKey] || 0)
                : dataType === 'currency'
                ? parseFloat(a[dataKey] || 0)
                : dataType === 'date'
                ? moment(a[dataKey]).format('YYYYMMDD')
                : a[dataKey] && a[dataKey].toString().toLowerCase();
            let _b =
              dataType === 'number'
                ? parseInt(b[dataKey] || 0)
                : dataType === 'currency'
                ? parseFloat(b[dataKey] || 0)
                : dataType === 'date'
                ? moment(b[dataKey]).format('YYYYMMDD')
                : b[dataKey] && b[dataKey].toString().toLowerCase();
            return direction === 'asc' ? (_a > _b ? 1 : -1) : _a < _b ? 1 : -1; // Final sort functionality by the direction we send from the component (ASC or DSC)
          });
        } else {
          prevCopy.sort((a, b) =>
            direction === 'asc'
              ? a[dataKey] === b[dataKey]
                ? 0
                : a[dataKey]
                ? -1
                : 1
              : a[dataKey] === b[dataKey]
              ? 0
              : a[dataKey]
              ? 1
              : -1
          );
        }

        return [...prevCopy];
      });

      // Modifies the state for global styling and toggling
      setHeaders(prev =>
        prev.map(cell => {
          if (cell.name === dataKey) {
            return { ...cell, sorted: direction };
          }
          return cell;
        })
      );
    },
    [setData, setHeaders]
  );

  // Filters the column
  const filterColumn = useCallback(
    (value, datakey) => {
      if (value.length === 0) {
        // If the input's value length is equal to 0, then we set the grid to his initial value
        setData([...initialData]);
      } else {
        setData(
          initialData.filter(row => {
            return row[datakey]
              .toString()
              .toLowerCase()
              .slice(0, value.length)
              .includes(value);
          })
        );
      }
    },
    [setData, initialData]
  );

  // Filters through all the columns and rows
  const filterGrid = useCallback(
    value => {
      const containsValue = n => {
        return (
          n &&
          n
            .toString()
            .toLowerCase()
            .slice(0, value.length) === value
        );
      };
      const prevCopy = R.clone(data);
      let filterItems = prevCopy.filter(row => {
        let filterElem = R.filter(containsValue, row);
        if (Object.keys(filterElem).length) return row;
      });
      setData(filterItems);
    },
    [setData, data]
  );

  // Setting the Grid to his initial values
  const clearFilters = useCallback(() => {
    setData([...initialData]);
    setSelectedAll(false);
    setReset(true);
    setHeaders(prev => {
      prev.map(elem => (elem.sorted = null));
      return [...prev];
    });
  }, [setData, initialData, setReset]);

  // Inline editing the cell
  const editCell = useCallback(
    (rowId, cellName, inputValue, dataType) => {
      let updatedValue;
      cellName === 'cost' &&
      inputValue &&
      Object.values(symbols).indexOf(inputValue.toString().charAt(0)) >= 0
        ? (updatedValue = inputValue.toString().substring(1))
        : dataType && dataType === 'date'
        ? (updatedValue = moment(inputValue).format('LLLL'))
        : (updatedValue = inputValue);

      setInitialData(prev => {
        const rowIndex = prev
          .map(({ tableRowId }) => tableRowId)
          .indexOf(rowId);

        // Selecting the row which was clicked
        prev[rowIndex][cellName] = updatedValue; // Modifies the object's data
        setData(prev);
        return [...prev];
      });
    },
    [setInitialData, setData]
  );

  // Filters the Grid by the date selected
  const filterByDate = useCallback(
    (date, cellName) => {
      if (date !== null) {
        setData(prev => {
          const updatedTable = prev.filter(
            row =>
              moment(row[cellName]).format('YYYY-MM-DD') ===
              moment(date).format('YYYY-MM-DD') // Getting both values at the same format to compare them
          );
          return [...updatedTable];
        });
      } else {
        setData([...initialData]); // If the date input is empty, we set the grid to his initial value.
      }
    },
    [setData, initialData]
  );

  // Navigates through the Grid, using arrows
  const navigationKeybord = useCallback(
    (rowId, headerIndex, key) => {
      const columnLength = headers.filter(cell => cell.visible).length;
      setData(prev => {
        let rowIndex = prev.map(({ tableRowId }) => tableRowId).indexOf(rowId); // Detects the index of the row selected
        let rowsUpdated = [...prev]; // Makes a copy of the prev state

        // Clean-up function
        prev
          .filter(row => row.selectedCell.selected)
          .forEach(elem => {
            const selectedRowIndex = prev.indexOf(elem); // Detects the index of the row selected before and disables it
            if (selectedRowIndex > 0) {
              rowsUpdated = update(rowsUpdated, {
                $splice: [
                  [selectedRowIndex, 1],
                  [
                    selectedRowIndex,
                    0,
                    {
                      ...rowsUpdated[selectedRowIndex],
                      selectedCell: { selected: false, columnIndex: null },
                    },
                  ],
                ],
              });
            }
          });

        // Navigation function
        const navigate = (_headerIndex, _rowIndex) => {
          rowsUpdated = update(rowsUpdated, {
            $splice: [
              [_rowIndex, 1],
              [
                _rowIndex,
                0,
                {
                  ...rowsUpdated[_rowIndex],
                  selectedCell: { selected: true, columnIndex: _headerIndex },
                },
              ],
            ],
          });
        };

        // Detecting if it's either a click or a keydown event. If it is a keydown event, we send different attributes in dependence of which arrow was pressed.
        switch (key) {
          case 'click':
            navigate(headerIndex, rowIndex);
            break;
          case 'ArrowDown':
            if (rowIndex + 1 < prev.length) {
              navigate(headerIndex, rowIndex + 1);
            }
            break;
          case 'ArrowUp':
            if (rowIndex - 1 >= 0) {
              navigate(headerIndex, rowIndex - 1);
            }
            break;
          case 'ArrowRight':
            if (headerIndex + 1 < columnLength) {
              navigate(headerIndex + 1, rowIndex);
            }
            break;
          case 'ArrowLeft':
            if (headerIndex - 1 >= 0) {
              navigate(headerIndex - 1, rowIndex);
            }
            break;
          default:
            navigate(headerIndex, rowIndex);
            break;
        }
        return [...rowsUpdated];
      });
    },
    [setData, headers]
  );

  // Resets the Grid before he gets printed and disables the keybord navigation.
  const resetKeybordNavigation = useCallback(() => {
    setData(prev =>
      prev.map(row => {
        return { ...row, selectedCell: { selected: false, columnIndex: null } };
      })
    );
  }, [setData]);

  // Sets the symbol of the currency columns in the Grid
  useEffect(() => {
    setSymbol(symbols[lang]);
  }, [lang]);

  // Changes the Checked-In Status
  const handleCheckboxField = useCallback(
    (rowId, cellName) => {
      setData(prev => {
        const rowIndex = prev
          .map(({ tableRowId }) => tableRowId)
          .indexOf(rowId); // Selecting the row which was clicked
        prev[rowIndex][cellName] = !prev[rowIndex][cellName]; // Modifies the object's data
        return [...prev];
      });
    },
    [setData]
  );

  // Sorts the Table by the status we select
  const filterGridByStatus = useCallback(
    status => {
      if (status.value === 'all') {
        setData(initialData);
      } else {
        setData(initialData.filter(row => row.progress === status.value));
      }
    },
    [setData, initialData]
  );

  return (
    <GridContext.Provider
      value={{
        options,
        selectAllRows,
        targetRow,
        data,
        headers,
        setHeaders,
        sort,
        clearFilters,
        selectedAll,
        setSelectedAll,
        editCell,
        filterColumn,
        filterGrid,
        initialHeaders,
        filterByDate,
        navigationKeybord,
        componentRef,
        resetKeybordNavigation,
        symbol,
        handleCheckboxField,
        reset,
        selectedRows,
        filterGridByStatus,
        initialData,
      }}
    >
      <Breadcrumb links={['Work Orders', 'Quick Work Orders']} />
      <NavBar />
      <Grid options={tableOptions} hiddenSideBar={hiddenSideBar} />
    </GridContext.Provider>
  );
};

export default WorkOrders;
