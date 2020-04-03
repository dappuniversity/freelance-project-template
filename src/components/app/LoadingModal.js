import React from 'react';
import { Overlay, Spinner } from '@blueprintjs/core';

import './LoadingModal.css';

function LoadingModal({ isOpen, text = 'Loading' }) {
  return (
    <Overlay
      canEscapeKeyClose={false}
      canOutsideClickClose={false}
      isOpen={isOpen}>
      <div id="LoadingModal" className="pt-card pt-elevation-4">
        <div>
          <Spinner />
        </div>
        <div>{`${text}...`}</div>
      </div>
    </Overlay>
  );
}

export default LoadingModal;
