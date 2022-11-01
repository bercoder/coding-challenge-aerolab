import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0; 
  }

  html, body {
    height: 100%
  }

  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer; 
    background-color: transparent;
    border: 0;    
  }

.card-enter, .card-appear {
    opacity: 0;
    transform: translateY(-58px);
}

.card-enter-active, .card-apper-active {
  opacity: 1;
  transform:  translateY(0);
  transition: opacity 600ms, transform 300ms;
}

.card-exit {
  opacity: 1;
}
.card-exit-active {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 300ms, transform 300ms;
}  

.item-enter {
  opacity: 0;
}
.item-enter-active {
  opacity: 1;
  transition: opacity 500ms ease-in;
}
.item-exit {
  opacity: 1;
}
.item-exit-active {
  opacity: 0;
  transition: opacity 500ms ease-in;
}

.redeem img{
  animation: redeem .8s linear 1;
}

@keyframes redeem {
  100% {
    transform: rotate(-360deg);
    filter:hue-rotate(65deg)
  }
}

@keyframes down {
  100% {
    transform: scaleY(.7) translateY(-1px);
    opacity: .9;
  }
}

.fadeInUp {
  animation: fadeUp 1s ease-out forwards 1;
}
.fadeInDown {
  animation: fadeDown 1s ease-out forwards 1;
}
.fadeInLeft {
  animation: fadeLeft 1s ease-out forwards 1;
}
.fadeInRight {
  animation: fadeRight 1s ease-out forwards 1;
}

.d-1 {
  animation-duration: 1s;
}
.d-2 {
  animation-duration: 1.3s;
}
.d-3 {
  animation-duration: 1.6s;
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeDown {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeLeft {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeRight {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}  
  
`