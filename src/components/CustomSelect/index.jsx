import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import { ColorUtils } from 'utils/Utils';
import styles from './styles.css';

const propTypes = {
  menuTop: PropTypes.bool,
  color: PropTypes.string,
  value: PropTypes.number.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  synthParams: PropTypes.object.isRequired,
  instNamesList: PropTypes.array.isRequired,
};

function CustomSelect (props) {
  const backgroundColor = props.color || '#f1f1f1';

  const borderColor = props.color 
    ? ColorUtils.getDarker(props.color)
    : '#fff';
  
  // TODO theme colors
  const foreground = props.color ? '#fff' : '#242424';

  const arrowRenderer = ({ isOpen }) => (
    <div
      style={{
        color: foreground,
        fontSize: 15,
      }}
    >
      {isOpen
        ? <i className="ion-chevron-up" />
        : <i className="ion-chevron-down" />
      }
    </div>
  );
  arrowRenderer.propTypes = { isOpen: PropTypes.bool };

  const position = props.menuTop ? {
    top: 'auto',
    bottom: 'calc(100% + 2px)',
  } : {
    bottom: 'auto',
    top: 'calc(100% + 3px)',
  };

  return (
    <Select
      {...props}
      className={styles.customSelect}
      wrapperStyle={{ height: '100%' }}
      menuContainerStyle={{
        marginBottom: 'none',
        ...position,
      }}
      optionClassName={props.color ? styles.lightText : styles.darkText}
      valueRenderer={value => (
        <div style={{
          backgroundColor: backgroundColor,
          color: foreground,
          height: '100%',
          width: '100%',
          padding: 3,
          paddingTop: 4,
          paddingLeft: 6,
          display: 'grid',
          alignItems: 'center',
          border: !props.color && `1px solid ${ColorUtils.getDarker(backgroundColor)}`,
          borderRadius: !props.color && 1,
        }}>
          {value.label}
        </div>
      )}
      arrowRenderer={arrowRenderer}
      menuStyle={{
        border: `2px solid ${borderColor}`,
        background: backgroundColor,
        color: 'red',
        margin: -3,
        boxShadow: '-5px 0 12px 0 rgba(0,0,0,0.11)'
      }}
      searchable={false}
      clearable={false}
      value={props.value}
      options={props.instNamesList || props.options}
      onChange={props.onChange}
    />
  );
}

CustomSelect.propTypes = propTypes;

export default CustomSelect;
