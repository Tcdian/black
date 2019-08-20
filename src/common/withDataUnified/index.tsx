import React, { useContext } from 'react';

interface WithRedux {
  (Component: React.FC): React.FC
}

const withRedux: WithRedux = (Component) => {
  const wrappedWithRedux: React.FC = (props) => {
    return (
      <Component {...props} />
    )
  }
  return wrappedWithRedux;
}