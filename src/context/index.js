import { createContext } from 'react';

export const AuthContext = createContext({
  auth: null,
  authenticate: () => {},
  lang: null,
  setLang: () => {},
});

export const QuickLinks = createContext({
  addQuickLink: () => {},
  quickLinks: [],
});

export const DefaultDatas = createContext({
  setOpenNavBar: () => {},
  isMobile: null,
  openNavBar: null,
  hideSideBar: null,
  setHideSideBar: () => {},
});

export const General = createContext({
  selectedNavItem: null,
  setSelectedNavItem: () => {},
  selectedSubLink: null,
  setSelectedSubLink: () => {},
});

export const GridContext = createContext({
  options: null,
  targetAll: () => {},
  targetRow: () => {},
  data: null,
  filterColumn: () => {},
  headers: null,
  sort: () => {},
  title: '',
  clearFilters: () => {},
  editCell: () => {},
  filterGrid: () => {},
  handleVisibleCheckBox: () => {},
  handleDragAndDrop: () => {},
  findHeader: () => {},
  setHeaders: () => {},
  initialHeaders: null,
  filterByDate: () => {},
  navigationKeybord: () => {},
  componentRef: null,
  resetKeybordNavigation: () => {},
  symbol: null,
  handleCheckboxField: () => {},
  reset: null,
  selectedRows: null,
  filterGridByStatus: () => {},
  initialData: null,
});
