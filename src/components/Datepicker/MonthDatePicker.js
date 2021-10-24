// @flow

import React from "react";
import Calendar from "react-calendar";
import PropTypes from "prop-types";

import { BaseDatepicker } from "./BaseDatepicker";
import { getFormattedDate, formattedMonthValue } from "./utils";

type Props = {
  input: {
    value: string
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
  dateValue: string
};

type State = {
  showCalendar: boolean,
  dateValue: ?string,
  formattedDateValue: string,
  placeholder: string
};

class MonthDatePicker extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      showCalendar: false,
      dateValue: null,
      formattedDateValue: "",
      placeholder: "mm/yy"
    };
    this.onClick = this.onClick.bind(this);
  }

  componentWillUpdate(nextProps: Props) {
    if (this.state.dateValue && this.props.locale !== nextProps.locale) {
      this.props.handleDateChange(
        getFormattedDate(this.state.dateValue, nextProps.locale)
      );
    }
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.onClick);
    if (this.props.dateValue) {
      this.setState({
        dateValue: this.props.dateValue,
        formattedDateValue: getFormattedDate(this.props.dateValue)
      });
      this.props.handleDateChange(
        getFormattedDate(this.props.dateValue, this.props.locale)
      );
    }
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.onClick);
  }

  onClick = (event: Event) => {
    if (this.wrapper && !this.wrapper.contains(event.target)) {
      this.toggleCalendar(false);
    }
  };

  toggleCalendar(toggle: boolean) {
    this.setState({
      showCalendar: toggle
    });
  }

  handleDateChange = (e: string) => {
    this.setState({
      showCalendar: false,
      dateValue: e,
      formattedDateValue: formattedMonthValue(e)
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
            maxDetail="year"
            formatMonth={(locale, date) =>
              date.toLocaleDateString(this.props.locale, {
                month: this.props.monthFormat
              })
            }
          />
        )}
        <BaseDatepicker
          {...this.props.input}
          readOnly
          className={this.props.className}
          type={this.props.type}
          placeholder={this.state.placeholder}
          value={this.state.formattedDateValue}
          onClick={() => this.toggleCalendar(true)}
        />
      </div>
    );
  }
}

MonthDatePicker.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  locale: PropTypes.string,
  handleDateChange: PropTypes.string,
  testSelector: PropTypes.string,
  onFocus: PropTypes.func,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
  dateValue: PropTypes.string
};

export default MonthDatePicker;
