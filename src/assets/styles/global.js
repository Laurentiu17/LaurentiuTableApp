import { createGlobalStyle } from 'styled-components/macro';
import { normalize, fontFace } from 'polished';

const GlobalStyles = createGlobalStyle`
  ${normalize()}

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ${fontFace({
    fontFamily: 'Roboto',
    fontFilePath: '/assets/fonts/Roboto-Regular',
    fontWeight: '400',
    fontStyle: 'normal',
  })}

  ${fontFace({
    fontFamily: 'Roboto',
    fontFilePath: '/assets/fonts/Roboto-Medium',
    fontWeight: '500',
    fontStyle: 'normal',
  })}

  ${fontFace({
    fontFamily: 'Roboto',
    fontFilePath: '/assets/fonts/Roboto-Bold',
    fontWeight: '700',
    fontStyle: 'normal',
  })}

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    height: 100vh;
  }
  h1,h2,h3,h4,p{
    margin: 0;
    padding: 0;
  }
  ul{
    list-style: none;
  }

  button, input[type="submit"], input[type="reset"] {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

  * {
    scrollbar-color: #c1c1c1 #f1f1f1;
    scrollbar-width: thin;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #c1c1c1;
    border-radius: 0;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  a{
    text-decoration: none;
  }

  #root {
    height: 100%;
  }
  .ReactModal__Body--open {
  overflow: hidden !important;
}
.ReactModal__Overlay {
  background-color: rgba(55, 55, 55, 0.75) !important;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  position: fixed;
  z-index: 9999;
  @include mq(768px) {
    padding-top: 0px;
  }
  @media (max-height: 530px) {
    padding-bottom: 50px !important;
  }
  .ReactModal__Content {
    border-radius: 4px;
    border: none;
    display: block;
    height: 50vh;
    left: 50% !important;
    top: 50% !important;
    position: relative;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease-in-out;
    padding-bottom: 20px !important;
    @media(max-width: 1200px){
      width: 700px;
    }
    @media(max-width: 1200px){
      width: 100%;
      max-width: 95vw;
    }
  }
}
.react-white-background {
  background-color: rgba(256, 256, 256, 0.75) !important;
}
.modal_login,
.oneclick_modal,
.cheaper_modal {
  top: 20% !important;
  @media (max-height: 600px) {
    top: 20px !important;
  }
}
.modal_register {
  top: 170px !important;
}
.modal {
  max-width: 551px;
  width: 100%;

  &--large {
    max-width: 144rem;
    width: 90vw;
  }
  &--small {
    padding: 59px 50px 50px;
    max-width: 50rem;
    width: 90vw;
  }
  &--center {
    position: absolute !important;
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%) !important;
  }
}

`;

export default GlobalStyles;
