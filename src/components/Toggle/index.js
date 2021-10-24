// @flow

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';

type Props = {};

function Toggle(props: Props) {
  const {
    disabled,
    onColor,
    offColor,
    handleDiameter,
    uncheckedIcon,
    checkedIcon,
    boxShadow,
    activeBoxShadow,
    width,
    height,
    required,
  } = props;
  const [checked, setChecked] = useState(true);
  return (
    <Switch
      onChange={() => setChecked(!checked)}
      checked={checked}
      disabled={disabled}
      offColor={offColor}
      onColor={onColor}
      handleDiameter={handleDiameter}
      uncheckedIcon={uncheckedIcon}
      checkedIcon={checkedIcon}
      boxShadow={boxShadow}
      activeBoxShadow={activeBoxShadow}
      width={width}
      height={height}
      required={required}
    />
  );
}

Toggle.propTypes = {
  /**  Sets toggle's state */
  disabled: PropTypes.bool,
  /**  The switch will take on this color when it is not checked. Only accepts hex-colors.
   */
  offColor: PropTypes.string,
  /**  The switch will take on this color when it is checked. Only accepts hex-colors.
   */
  onColor: PropTypes.string,
  /**  The diameter of the handle, measured in pixels. By default it will be 2 pixels smaller than the height of the switch.
   */
  handleDiameter: PropTypes.number,
  /**  An icon that will be shown on the switch when it is not checked. Pass in false if you don't want any icon.
   */
  uncheckedIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
  /**  An icon that will be shown on the switch when it is checked. Pass in false if you don't want any icon.
   */
  checkedIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
  /** The default box-shadow of the handle. You can read up on the box-shadow syntax on MDN.
   */
  boxShadow: PropTypes.string,
  /** The box-shadow of the handle when it is active or focused. Do not set this to null, since it is important for accessibility.
   */
  activeBoxShadow: PropTypes.string,
  /** The height of the background of the switch, measured in pixels.
   */
  height: PropTypes.number,
  /**  The width of the background of the switch, measured in pixels.
   */
  width: PropTypes.number,
  /**  Additional prop. Useful while using the toggle in a form. This forces the user to select an option for the toggle before submitting the form. */
  required: PropTypes.bool,
};

Toggle.defaultProps = {
  disabled: false,
  offColor: '#888',
  onColor: '#080',
  activeBoxShadow: '0 0 2px 3px #3bf',
  height: 28,
  width: 56,
  required: false,
};
export default Toggle;
