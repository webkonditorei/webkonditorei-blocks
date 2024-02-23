const { SVG } = wp.components;

export default function CrossIcon({ fill }) {
  return (
    <SVG
      className="webkonditorei-icon"
      aria-hidden
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >

      <rect x="6.7876" width="1.93939" height="16" fill={fill}/>
<rect y="9.2124" width="1.93939" height="16" transform="rotate(-90 0 9.2124)" fill={fill}/>
    </SVG>
  );
}
