import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import data from '../data.json';

export const useOfflineStatus = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleStatusChange = e => {
      setIsOffline(!navigator.onLine);
    };

    window.addEventListener('online', handleStatusChange);
    window.addEventListener('offline', handleStatusChange);
    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  });

  return isOffline;
};

export const useSideBar = () => {
  const [sideBar, setSideBar] = useState(
    JSON.parse(window.localStorage.getItem('sideBar'))
  );

  useEffect(() => {
    if (!sideBar) {
      window.localStorage.setItem('sideBar', JSON.stringify(data.nodes));
      setSideBar(data.nodes);
    } else {
      window.localStorage.setItem('sideBar', JSON.stringify(sideBar));
    }
  }, [sideBar]);

  const addQuickLinks = useCallback(
    item => {
      const sideBarCopy = [...sideBar];
      if (sideBar[0].nodes.filter(elem => elem.url === item.url).length === 0) {
        sideBarCopy[0].nodes.push(item);
        setSideBar([...sideBarCopy]);
      } else {
        sideBarCopy[0].nodes = sideBarCopy[0].nodes.filter(
          elem => elem.url !== item.url
        );
        setSideBar([...sideBarCopy]);
      }
    },
    [sideBar, setSideBar]
  );

  return { sideBar, addQuickLinks };
};

export const useDebounce = (value, delay) => {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    // This is how we prevent debounced value from updating if value is changed ...
    // .. within the delay period. Timeout gets cleared and restarted.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Only re-call effect if value or delay changes

  return debouncedValue;
};

export const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};

export const useOutsideContextClick = (ref, callback) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener('contextmenu', handleClickOutside);

    return () => {
      document.removeEventListener('contextmenu', handleClickOutside);
    };
  }, [ref, callback]);
};

export const useOutsideEnter = (ref, callback) => {
  useEffect(() => {
    function handleEnterOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        event.key === 'Enter'
      ) {
        callback();
      }
    }
    document.addEventListener('keypress', handleEnterOutside);

    return () => {
      document.removeEventListener('keypress', handleEnterOutside);
    };
  }, [ref, callback]);
};

export const getODataForNumbersValue = (id, value) => {
  if (value.includes('<=')) {
    let newValue = value.replace(/\s+/g, '').split('<=');
    let splitValue = newValue[0] ? newValue[0] : newValue[1];
    const finalValue = `${id} le ${splitValue.replace(/\s+/g, '')}`;
    return finalValue;
  }

  if (value.includes('>=')) {
    let newValue = value.replace(/\s+/g, '').split('>=');
    let splitValue = newValue[0] ? newValue[0] : newValue[1];
    const finalValue = `${id} ge ${splitValue.replace(/\s+/g, '')}`;
    return finalValue;
  }

  if (value.includes('-')) {
    let newValue = value.replace(/\s+/g, '').split('-');
    let splitValue = newValue[0] ? newValue[0] : newValue[1];
    const finalValue = `${id} ge ${splitValue[0].replace(
      /\s+/g,
      ''
    )} and ${id} le ${splitValue[1].replace(/\s+/g, '')}`;
    return finalValue;
  }

  if (value.includes('!=')) {
    let newValue = value.replace(/\s+/g, '').split('!=');
    let splitValue = newValue[0] ? newValue[0] : newValue[1];
    const finalValue = `${id} ne ${splitValue.replace(/\s+/g, '')}`;
    return finalValue;
  }

  if (value.includes('=')) {
    let newValue = value.replace(/\s+/g, '').split('=');
    let splitValue = newValue[0] ? newValue[0] : newValue[1];
    const finalValue = `${id} eq ${splitValue.replace(/\s+/g, '')}`;
    return finalValue;
  }

  if (value.includes('<')) {
    let newValue = value.replace(/\s+/g, '').split('<');
    let splitValue = newValue[0] ? newValue[0] : newValue[1];
    const finalValue = `${id} lt ${splitValue.replace(/\s+/g, '')}`;
    return finalValue;
  }

  if (value.includes('>')) {
    let newValue = value.replace(/\s+/g, '').split('>');
    let splitValue = newValue[0] ? newValue[0] : newValue[1];
    const finalValue = `${id} gt ${splitValue.replace(/\s+/g, '')}`;
    return finalValue;
  }

  return `${id} eq ${value}`;
};

// hook that returns the pagePkey
// it uses the paths dictionary already built when creating the menu
// to get the corresponding pagePkey for the current route
export const usePageConfiguration = () => {
  const pathsDictionary = useSelector(state => state.menu.dictionary);
  let location = useLocation();
  const currentPath = location.pathname.substring(1);
  const result = Object.keys(pathsDictionary).find(path =>
    currentPath.startsWith(path)
  );

  return pathsDictionary[result];
};

export const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};
