const { SVG } = wp.components;

export default function CloseIcon({ fill, closeIconBackground, closeIconRadius }) {
  return (
    <SVG
      className="wbk-close-icon"
      aria-hidden
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ backgroundColor: closeIconBackground, borderRadius: closeIconRadius + 'px' }}
    >
      <rect x="5.48633" y="7.2002" width="1.93939" height="16" transform="rotate(-45 5.48633 7.2002)" fill={fill} />
      <rect x="7.20068" y="18.5142" width="1.93939" height="16" transform="rotate(-135 7.20068 18.5142)" fill={fill} />
    </SVG>
  );
}
