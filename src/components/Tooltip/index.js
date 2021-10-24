// @flow

import React from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

import { BaseTooltipWrapper, BaseTargetElement } from './styles';

function Tooltip(props) {
  const { place, type, effect, tooltipMessage, targetElement } = props;
  return (
    <BaseTooltipWrapper>
      <BaseTargetElement href="#" data-tip="React-tooltip">
        {targetElement}
      </BaseTargetElement>
      <ReactTooltip place={place} type={type} effect={effect}>
        {tooltipMessage}
      </ReactTooltip>
    </BaseTooltipWrapper>
  );
}

Tooltip.propTypes = {
  /** Placement of the tooltip message */
  place: PropTypes.string,
  /** Theme */
  type: PropTypes.string,
  /** Behaviour of tooltip */
  effect: PropTypes.string,
  /** Message displayed in tooltip */
  tooltipMessage: PropTypes.string,
  /** Element on which the tooltip is displayed on hover */
  targetElement: PropTypes.string,
};

Tooltip.defaultProps = {
  place: '',
  type: '',
  effect: '',
  tooltipMessage: '',
  targetElement: '',
};

export default Tooltip;
