/**
 * App.jsx
 * Main react app component
 */

// Node Modules
import React, {useState} from 'react';

// Constants
const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

export default function App(props) {

  // Hooks
  const [classString, setClassString] = useState(STATUS.NORMAL);

  // Callbacks
  const handleMouseEnter = () => setClassString(STATUS.HOVERED);
  const handleMouseLeave = () => setClassString(STATUS.NORMAL);

  return (
    <a
      className={classString}
      href={props.page || '#'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.children}
    </a>
  );
}
