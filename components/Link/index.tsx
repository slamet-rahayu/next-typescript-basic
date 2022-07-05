import React from 'react';

interface IProps {
  href: string;
  children: React.ReactNode;
}

const CLink = React.forwardRef(({ href, children }: IProps, ref: any) => {
  return (
    <a href={href} ref={ref}>
      {children}
    </a>
  );
});

export default CLink;
