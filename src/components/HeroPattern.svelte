<div class="hero-pattern">
  <div class="circle circle--1"></div>
  <div class="circle circle--2"></div>
  <div class="circle circle--3"></div>
</div> 

<style lang="scss">
  @use "../styles/query";

  .hero-pattern {
    display: flex;
    align-items: center;
    justify-content: center;
    left: 50%;
    position: absolute;
    top: 5rem;
    z-index: -1;

    @include query.respond(tab) {
      transform: scale(1.2); 
      left: unset;
      right: 10vw;
    }

    @include query.respond(desktop) {
      transform: scale(2.5);
    }
    
    .circle {
      animation: rotateCircle 5s infinite linear;
      border: 1px solid rgba(#747B95, .25);
      border-radius: 50%;
      position: absolute;
      transform: rotate(30deg);
      transform-origin: center center;

      &::before {
        background-color: #D8DAE0;
        border-radius: 50%;
        content: "";
        height: 1rem;
        position: absolute;
        width: 1rem;
        left: 0;
      }

      &--1 {
        height: 22rem;
        width: 22rem;

        &::before { bottom: 13.5rem; }
      }

      &--2 {
        animation-delay: .4s;
        height: 30rem;
        width: 30rem;

        &::before { bottom: 18.5rem; }
      }

      &--3 {
        animation-delay: .8s;
        height: 55rem;
        width: 55rem;

        &::before { bottom: 32.5rem; }
      }
    }
  }

  @keyframes rotateCircle {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
</style>