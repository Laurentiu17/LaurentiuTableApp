import keyMirror from 'key-mirror-nested';

export default keyMirror(
  {
    PRODUCTS: {
      FETCH: null,
      SELECT: null,
    },
  },
  { connChar: '_' }
);
