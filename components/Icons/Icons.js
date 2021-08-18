const defaultSize = '36px';
const iconStyle = {
  cursor: 'pointer',
};

export const ShoppingBagIcon = props => {
  return (
    <svg
      style={iconStyle}
      xmlns="http://www.w3.org/2000/svg"
      height={props.size || defaultSize}
      width={props.size || defaultSize}
      fill="none"
      viewBox="0 0 24 24"
      stroke={props.color || 'currentColor'}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    </svg>
  );
};

export const SearchIcon = props => {
  return (
    <svg
      style={iconStyle}
      xmlns="http://www.w3.org/2000/svg"
      height={props.size || defaultSize}
      width={props.size || defaultSize}
      fill="none"
      viewBox="0 0 24 24"
      stroke={props.color || 'currentColor'}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
};

export const MenuIcon = props => {
  return (
    <svg
      style={iconStyle}
      xmlns="http://www.w3.org/2000/svg"
      height={props.size || defaultSize}
      width={props.size || defaultSize}
      fill="none"
      viewBox="0 0 24 24"
      stroke={props.color || 'currentColor'}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
};

export const HeartIcon = props => {
  return (
    <svg
      style={iconStyle}
      xmlns="http://www.w3.org/2000/svg"
      height={props.size || defaultSize}
      width={props.size || defaultSize}
      fill="none"
      viewBox="0 0 24 24"
      stroke={props.color || 'currentColor'}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
};
