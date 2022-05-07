import React from 'react';

// interface WithClassesProps {
//   classes: string;
// }
export function WithClasses<T>(
  Component: React.ComponentType<T>
) {
  return function Wrapper(props: T) {
    return (
      <div>
        <Component {...props} />
      </div>
    );
  };
}
