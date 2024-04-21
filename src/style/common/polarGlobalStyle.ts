import { createGlobalStyle } from 'styled-components';
import PretendardExtraLight from '../../assets/fonts/pretendard/Pretendard-ExtraLight.woff2';
import PretendardRegular from '../../assets/fonts/pretendard/Pretendard-Regular.woff2';
import PretendardBold from '../../assets/fonts/pretendard/Pretendard-Bold.woff2';
import PretendardExtraBold from '../../assets/fonts/pretendard/Pretendard-ExtraBold.woff2';

/** app.tsx 파일 내에서 <PolarGlobalStyle> 을 적용
 */

const PolarGlobalStyle = createGlobalStyle`  
  @font-face {
      font-family: 'Pretendard';
      font-weight: 200;
      src: url(${PretendardExtraLight}) format('woff2');    
      unicode-range: U+AC00-D7A3;
      font-display: swap;
  }
  
  @font-face {
      font-family: 'Pretendard';
      font-weight: 400;
      src: url(${PretendardRegular}) format('woff2');    
      unicode-range: U+AC00-D7A3;
      font-display: swap;
  }

  @font-face {
      font-family: 'Pretendard';
      font-weight: 700;
      src: url(${PretendardBold}) format('woff2');    
      unicode-range: U+AC00-D7A3;
      font-display: swap;
  }

  @font-face {
      font-family: 'Pretendard';
      font-weight: 800;
      src: url(${PretendardExtraBold}) format('woff2');    
      unicode-range: U+AC00-D7A3;
      font-display: swap;
  }

  :root {      
      /* font size to padding */
      --atomshell-font-padding-xs: 4px 10px;
      --atomshell-font-padding-sm: 5px 12px;
      --atomshell-font-padding-md: 6px 14px;
      --atomshell-font-padding-lg: 7px 16px;
      
      /* size to padding */
      --atomshell-input-padding-xs: 8px 10px;
      --atomshell-input-padding-sm: 10px 12px;
      --atomshell-input-padding-md: 12px 14px;
      --atomshell-input-padding-lg: 14px 18px;
      
      /* size to node(radio, checkbox ...) */
      --atomshell-node-size-xs: 13px;
      --atomshell-node-size-sm: 16px;
      --atomshell-node-size-md: 18px;
      --atomshell-node-size-lg: 20px;
      
      /* radio checked inner circle */
      --atomshell-radio-circle-xs: 5px;
      --atomshell-radio-circle-sm: 6px;
      --atomshell-radio-circle-md: 8px;
      --atomshell-radio-circle-lg: 10px;
      
      /* font size */
      --atomshell-font-size-xxs: 9px;
      --atomshell-font-size-xs: 11px;
      --atomshell-font-size-sm: 13px;
      --atomshell-font-size-md: 15px;
      --atomshell-font-size-lg: 17px;
      --atomshell-font-size-xl: 19px;
      --atomshell-font-size-xxl: 21px;
      --atomshell-font-size-h5: 24px;
      --atomshell-font-size-h4: 32px;
      --atomshell-font-size-h3: 36px;
      --atomshell-font-size-h2: 48px;
      --atomshell-font-size-h1: 56px;

      /* font weight */
      --atomshell-bold-light: 200;
      --atomshell-bold-regular: 400;
      --atomshell-bold-sbold: 600;
      --atomshell-bold-bold: 700;
      --atomshell-bold-xbold: 800;
      
      /* hover opacity */
      --atomshell-hover-opacity: 0.7;

      /* disabled opacity */
      --atomshell-disabled-opacity: 0.5;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;    
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    //font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }  
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }  
  body {
    font-family: 'Pretendard', sans-serif;
    font-weight: 300;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.bg};
    /* iphone 갑자기 폰트 크게 터지는 현상 방지용 */
    -webkit-text-size-adjust: 100%;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  /* input */
  input,textarea{font-size:1rem; border:0.05rem solid #000; background-color:#fff; transition:border .15s; box-sizing:border-box; vertical-align:middle; outline:none;}
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-transition: background-color 9999s ease-out;
    -webkit-box-shadow: 0 0 0 1000px transparent inset !important;
    -webkit-text-fill-color: #000 !important;
  }

  /* overflow : scroll 발생 시 스크롤 바 영역 지정되는 문제 때문에 잠시 주석  */
  //html::-webkit-scrollbar {
  //  width: 6px;
  //  height: 6px;
  //}
  html::-webkit-scrollbar-thumb {
    background-color: #4e4e4e;
    border-radius: 100px;
  }
  html::-webkit-scrollbar-track {
    background-color: #4e4e4e;
    border-radius: 100px;
    background-clip: padding-box;
    border: 3px solid transparent;
  }
`;
export default PolarGlobalStyle;
