import React, { ReactElement, ReactNode } from 'react';

interface IBtnProps {
  children: ReactNode;
}

function Button(props: IBtnProps): ReactElement {
  const { children } = props;
  return <button type="button">{children}</button>;
}

function Calculator(): ReactElement {
  return (
    <div>
      <Button>Hello</Button>
    </div>
  );
}

export default Calculator;
