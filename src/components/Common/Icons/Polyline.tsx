import { SVGProps, memo } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 25.626 25.626"
    xmlSpace="preserve"
    {...props}>
    <path
      d="M24.036 13.022 20.38 5.71c.152-.265.246-.569.246-.897A1.813 1.813 0 0 0 18.813 3c-.42 0-.802.149-1.11.389L11.555 1.34A1.808 1.808 0 0 0 9.812 0a1.81 1.81 0 0 0-1.808 1.764L2.562 5.166A1.804 1.804 0 0 0 0 6.813c0 .631.324 1.186.813 1.511v13.978a1.812 1.812 0 1 0 2.511 2.511h11.978a1.811 1.811 0 0 0 3.324-1c0-.201-.041-.391-.101-.572l5.155-6.628c.045.003.087.013.133.013a1.813 1.813 0 0 0 1.813-1.813c0-.925-.695-1.68-1.59-1.791zm-7.09 8.991c-.045-.003-.087-.013-.133-.013-.631 0-1.186.324-1.511.813H3.324a1.828 1.828 0 0 0-.511-.511V8.324a1.81 1.81 0 0 0 .808-1.462L9.064 3.46c.229.104.481.166.749.166.42 0 .802-.149 1.11-.389l6.148 2.049c.19.7.784 1.226 1.52 1.317l3.656 7.313a1.797 1.797 0 0 0-.246.897c0 .201.04.391.101.572l-5.156 6.628z"
      fill="#edffff"
      data-original="#030104"
      xmlns="http://www.w3.org/2000/svg"
    />
  </svg>
);

const Memo = memo(SvgComponent);
export default Memo;
