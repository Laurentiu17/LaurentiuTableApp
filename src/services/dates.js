import moment from 'moment';

export const formatDate = value => (value ? moment(value).format('LLLL') : '');
