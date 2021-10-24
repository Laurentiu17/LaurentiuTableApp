// @flow

import React from 'react';
import Calendar from 'react-calendar';
import PropTypes from 'prop-types';

import { BaseDatepicker } from './BaseDatepicker';
import { getFormattedDate } from './utils';

type Props = {
  input: {
    value: string,
  },
  value: string,
  type?: string,
  placeholder?: string,
  locale?: string,
  handleDateChange: string => void,
  testSelector: ?string,
  onFocus?: FocusEventHandler,
  minDate: string,
  maxDate: string,
  dateValue: string,
};

type State = {
  showCalendar: boolean,
  dateValue: ?string,
  formattedDateValue: string,
};

class FullDatePicker extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showCalendar: false,
      dateValue: null,
      formattedDateValue: '',
    };
  }

  componentWillUpdate(nextProps: Props) {
    if (this.state.dateValue && this.props.locale !== nextProps.locale) {
      this.props.handleDateChange(
        getFormattedDate(this.state.dateValue, nextProps.locale)
      );
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.onClick);
    if (this.props.dateValue) {
      this.setState({
        dateValue: this.props.dateValue,
        formattedDateValue: getFormattedDate(this.props.dateValue),
      });
      this.props.handleDateChange(
        getFormattedDate(this.props.dateValue, this.props.locale)
      );
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onClick);
  }

  onClick = (event: Event) => {
    if (this.wrapper && !this.wrapper.contains(event.target)) {
      this.toggleCalendar(false);
    }
  };

  toggleCalendar(toggle: boolean) {
    this.setState({
      showCalendar: toggle,
    });
  }

  handleDateChange = (e: string) => {
    this.setState({
      showCalendar: false,
      dateValue: e,
      formattedDateValue: getFormattedDate(e),
    });
    this.props.handleDateChange(getFormattedDate(e, this.props.locale));
  };

  render() {
    return (
      <div
        className="datepicker__calendar"
        onFocus={this.onFocus}
        ref={ref => {
          if (!ref) {
            return;
          }

          this.wrapper = ref;
        }}
      >
        {this.state.showCalendar && (
          <Calendar
            className="calendar"
            locale={this.props.locale}
            onChange={e => this.handleDateChange(e)}
            value={this.state.dateValue}
            minDate={this.props.minDate}
            maxDate={this.props.maxDate}
            showNavigation={this.props.showNavigation}
            selectRange={this.props.selectRange}
          />
        )}
        <BaseDatepicker
          {...this.props.input}
          value={this.state.formattedDateValue}
          readOnly
          className="date-input"
          type={this.props.type}
          placeholder={this.props.placeholder}
          onFocus={() => this.toggleCalendar(true)}
        />
      </div>
    );
  }
}

FullDatePicker.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  /** Defines which locale should be used by the calendar. Can be any IETF language tag. Defaults to user's browser settings.	*/
  locale: PropTypes.string,
  /**  Function called on change. Formats the date from value */
  handleDateChange: PropTypes.func,
  /**  Function called to toggle the Calendar */
  onFocus: PropTypes.func,
  /**  Defines minimum date that the user can select. Periods partially overlapped by minDate will also be selectable, although react-calendar will ensure that no earlier date is selected.	*/
  minDate: PropTypes.string,
  /** Defines maximum date that the user can select. Periods partially overlapped by maxDate will also be selectable, although react-calendar will ensure that no later date is selected.	 */
  maxDate: PropTypes.string,
  dateValue: PropTypes.string,
  /**  Defines whether a navigation bar with arrows and title shall be rendered. Defaults to true.	*/
  showNavigation: PropTypes.bool,
  /** Defines whether the user shall select two dates forming a range instead of just one. Note: This feature will make React-Calendar return array with two dates regardless of returnValue setting. Defaults to false.	 */
  selectRange: PropTypes.bool,
};

FullDatePicker.defaultProps = {
  value: '',
  type: '',
  placeholder: '',
  locale: 'en-US',
  minDate: undefined,
  maxDate: undefined,
  onFocus: () => {},
  dateValue: '',
  showNavigation: true,
  selectRange: false,
};

export default FullDatePicker;
