import React from 'react';
import { UncontrolledReactSVGPanZoom } from 'react-svg-pan-zoom';

const SVGViewer = ({ svgURL }) => (
  <UncontrolledReactSVGPanZoom width="100%" height="100%">
    <svg>
      <image href={svgURL} width="100%" height="100%" />
    </svg>
  </UncontrolledReactSVGPanZoom>
);

export default SVGViewer;