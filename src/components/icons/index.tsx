import React from 'react';

type IconSize = 'xxs' | 'xs' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'xxxl' | 'inherit';

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  type: string;
  size?: IconSize;
  className?: string;
  style?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = ({
  type,
  size,
  className,
  style,
}) => {
  return (
    <i className="black-icon">
    // todo ...
    </i>
  )
}

export default Icon;