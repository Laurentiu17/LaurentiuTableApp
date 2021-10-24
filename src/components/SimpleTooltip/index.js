import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import * as S from './styles';

class SimpleTooltip extends React.Component {
  render() {
    return (
      <S.TooltipWrapper>
        <ReactTooltip
          id={this.props.id}
          place={this.props.place}
          type={this.props.type}
          effect={this.props.effect}
          className={this.props.className}
          html={this.props.html}
        >
          <span>{this.props.message}</span>
        </ReactTooltip>
      </S.TooltipWrapper>
    );
  }
}
SimpleTooltip.propTypes = {
  type: PropTypes.string,
  place: PropTypes.string,
  effect: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  message: PropTypes.string,
  html: PropTypes.bool,
};
SimpleTooltip.defaultProps = {
  type: 'info',
  place: 'bottom',
  effect: 'solid',
  className: 'tooltip',
  html: false,
  message: '',
};
export default SimpleTooltip;
