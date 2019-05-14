import React, { PureComponent } from 'react';
//import styles

export default class ColorPicker extends PureComponent {
  state = {
    color: ''
  };

  selectColor = color => {
    this.setState({ color });
  }

  render() {
    const { color } = this.state;

    return (
      <section>
        <button onClick={this.selectColor.bind(null, 'red')}>Red</button>
        <button onClick={() => this.selectColor('yellow')}>Yellow</button>
        <button onClick={() => this.selectColor('blue')}>Blue</button>
        <div></div>
      </section>
    );
  }
}

