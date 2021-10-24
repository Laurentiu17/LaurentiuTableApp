export const getFormattedDate = (date, locale) => {
  if (date.length > 1) {
    const startD = new Date(date[0]);
    const endD = new Date(date[1]);

    return `${startD.toLocaleDateString(
      locale,
      dateFormats[locale]
    )} - ${endD.toLocaleDateString(locale, dateFormats[locale])}`;
  } else {
    if (date === undefined || date === null) return null;
    const d = new Date(date);
    return d.toLocaleDateString(locale, dateFormats[locale]);
  }
};

export const formattedMonthValue = (date, locale) => {
  debugger;
  if (date === undefined || date === null) return null;
  const d = new Date(date);
  return `${d.toLocaleDateString(locale, {
    month: 'short',
  })} / ${d.getFullYear()}`;
};

const dateFormats = {
  'en-US': {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  },
};
