import React from 'react'

const FRAME_STYLE = {
  border: '1px solid #aaa',
}

/**
 * Embeds a Storybook example
 *
 * @prop story The story ID in the URL to navigate to
 */
export default Iframe = ({ iframeURL = '' }) => {
  return (
    <iframe
      title="Excalibur Storybook Example"
      src={`${iframeURL}`}
      frameBorder={0}
      width="100%"
      height="600"
      style={FRAME_STYLE}
    ></iframe>
  );
}