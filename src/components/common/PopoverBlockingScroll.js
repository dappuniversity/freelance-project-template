import React from 'react';
import { Popover2 } from '@blueprintjs/labs';

class PopoverBlockingScroll extends React.Component {
  handleOpen() {
    document.body.classList.add('pt-overlay-open');
  }

  handleClose() {
    document.body.classList.remove('pt-overlay-open');
  }

  render() {
    // NB: This messes with popoverWillOpen/popoverWillClose callbacks.
    return (
      <Popover2
        popoverWillOpen={this.handleOpen}
        popoverWillClose={this.handleClose}
        {...this.props}
      />
    );
  }
}

export default PopoverBlockingScroll;
