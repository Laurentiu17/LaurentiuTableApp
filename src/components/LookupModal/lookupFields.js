const operatorMapping = [
  { value: 'equal', oData: 'eq' },
  { value: 'not_equal', oData: 'ne' },
  { value: 'starts_with', oData: 'startswith' },
  { value: 'contains', oData: 'contains' },
  { value: 'not_contains', oData: 'not contains' },
  { value: 'greater', oData: 'gt' },
  { value: 'less', oData: 'lt' },
  { value: 'greater_or_equal', oData: 'ge' },
  { value: 'less_or_equal', oData: 'le' },
  { value: 'is_empty', oData: 'blank' },
  { value: 'is_not_empty', oData: 'notBlank' },
  { value: 'between', oData: '' },
  { value: 'this_hour', oData: '' },
  { value: 'next_hour', oData: '' },
  { value: 'last_hour', oData: '' },
  { value: 'next_x_hours', oData: '' },
  { value: 'last_x_hours', oData: '' },
  { value: 'today', oData: '' },
  { value: 'yesterday', oData: '' },
  { value: 'tomorrow', oData: '' },
  { value: 'next_7_days', oData: '' },
  { value: 'last_7_days', oData: '' },
  { value: 'next_x_days', oData: '' },
  { value: 'last_x_days', oData: '' },
  { value: 'next_week', oData: '' },
  { value: 'last_week', oData: '' },
  { value: 'this_week', oData: '' },
  { value: 'next_x_weeks', oData: '' },
  { value: 'last_x_weeks', oData: '' },
  { value: 'this_month', oData: '' },
  { value: 'next_month', oData: '' },
  { value: 'last_month', oData: '' },
  { value: 'next_x_months', oData: '' },
  { value: 'last_x_months', oData: '' },
  { value: 'this_quarter', oData: '' },
  { value: 'next_quarter', oData: '' },
  { value: 'last_quarter', oData: '' },
  { value: 'this_half', oData: '' },
  { value: 'next_half', oData: '' },
  { value: 'last_half', oData: '' },
  { value: 'this_year', oData: '' },
  { value: 'next_year', oData: '' },
  { value: 'last_year', oData: '' },
  { value: 'next_x_years', oData: '' },
  { value: 'last_x_years', oData: '' },
  { value: 'older_than_x_months', oData: '' },
];

export function formatOperators(fieldProperties) {
  if (!fieldProperties) {
    return;
  }

  const fieldOperators = fieldProperties.operators;

  const result = fieldOperators.map(fieldOperator => {
    const operatorDetails = operatorMapping[fieldOperator.type];

    return {
      label: fieldOperator.displayName,
      oData: operatorDetails.oData,
      value: operatorDetails.value,
    };
  });

  return result;
}
