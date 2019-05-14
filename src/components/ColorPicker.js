import React from 'react';
import PropTypes from 'prop-types';
//import Styles

function ColorPicker({ selectColorHandler }) {
  return (
    <section>
      <button onClick={() => selectColorHandler('red')}>Red</button>
      <button onClick={selectColorHandler.bind(null, 'yellow')}>Yellow</button>
      <button onClick={() => selectColorHandler('blue')}>Blue</button>
    </section>
  );
}

ColorPicker.propTypes = {
  selectColorHandler: PropTypes.func.isRequired
};

export default ColorPicker;
