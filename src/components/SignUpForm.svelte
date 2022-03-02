<script lang="ts">
  // Components
  import Button from "../components/Button.svelte"
  import Dropdown from "../components/Dropdown.svelte"
  // Graphic Asssets
  import IconCross from "../assets/sign-up/icon-cross.svg"
  import IconVerified from "../assets/sign-up/icon-verified.svg"
  import IconDelivered from "../assets/sign-up/icon-delivered.svg"
  // Animations
  import { signUpFormAnim, formDeliveredAnim } from "../animations"
  // Core
  import { onMount } from "svelte"

  let noErrors = false
  let userName = ""
  let userEmail = ""

  onMount(() => signUpFormAnim())

  const formValidation = e => {
    e.preventDefault()

    const [ name, email, phone, company ] = e.target.elements

    // Check empty fields
    !name.value ? name.parentElement.classList.add("error") : name.parentElement.classList.remove("error")
    !email.value ? email.parentElement.classList.add("error") : email.parentElement.classList.remove("error")
    !phone.value ? phone.parentElement.classList.add("error") : phone.parentElement.classList.remove("error")
    !company.value ? company.parentElement.classList.add("error") : company.parentElement.classList.remove("error")

    const errorFields = document.querySelectorAll(".error")

    if (errorFields.length === 0) {
      userName = (name.value).split(" ")[0]
      userEmail = email.value

      noErrors = true
      setTimeout(() =>  formDeliveredAnim(), 0)
    }
  }

  const verifyInput = e => {
    let regexp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

    if (e.target.value) {
      if (e.target.type !== "email") {
          if (e.target.parentElement.classList.contains("error")) {
            e.target.parentElement.classList.replace("error", "success")
          } else {
            e.target.parentElement.classList.add("success")
          }
        } else {
          regexp.test(e.target.value) && e.target.parentElement.classList.add("success")
        }
    } else {
      e.target.parentElement.classList.add("error")
      e.target.parentElement.classList.replace("success", "error")
    }
  }
</script>

<form on:submit={formValidation} class="form">
  {#if noErrors}
    <div class="form__sent">
      <img src={IconDelivered} alt="" />
      <p>Thanks for joining the list, {userName}!</p>
      <p>We've sent you a confirmation email at <span>{userEmail}</span></p>
    </div>
  {/if}
  <div class="input-group">
    <input on:input={verifyInput} type="text" placeholder="Name" class="form__field form__field--input">
    <img src={IconCross} alt="" />
    <img src={IconVerified} alt="" />
  </div>
  <div class="input-group">
    <input on:input={verifyInput} type="email" placeholder="Email Address" class="form__field form__field--input">
    <img src={IconCross} alt="" />
    <img src={IconVerified} alt="" />
  </div>
  <Dropdown />
  <div class="input-group">
    <input on:input={verifyInput} type="number" placeholder="Phone Number" class="form__field form__field--input">
    <img src={IconCross} alt="" />
    <img src={IconVerified} alt="" />
  </div>
  <div class="input-group">
    <input on:input={verifyInput} type="text" placeholder="Company" class="form__field form__field--input">
    <img src={IconCross} alt="" />
    <img src={IconVerified} alt="" />
  </div>
  <Button 
    content="Get on the list"
    btnType="1"
    marginTop="m--1"
    page="sign-up"
    isFullWidth="full-width"
  />
</form>

<style lang="scss">
  @use "../styles/mixins";
  @use "../styles/query";

  .form {
    background-color: #fff;
    border-radius: 1.3rem;
    padding: var(--spacing-m--1);
    position: relative;
    margin-inline: auto;
    max-width: 44.5rem;
    overflow: hidden;

    @include mixins.flexColCenter();

    @include query.respond(tab) {
      padding: var(--spacing-l--1);
    } 

    &__sent {
      background-color: var(--color-accent);
      color: #fff;
      clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
      height: 100%;
      justify-content: center;
      padding: var(--spacing-m--2);
      position: absolute;
      top: 0;
      text-align: center;
      width: 100%;
      z-index: 1000;

      @include mixins.flexColCenter();
      
      p:first-of-type { margin-bottom: var(--spacing-s--1); }

      span { 
        display: inline-block;
        font-weight: 700;
       }

      img {
        margin-bottom: var(--spacing-m--2);
        width: 10rem;
      }
    }

    .input-group {
      position: relative;
      width: 100%;

      img {
        display: none;
        position: absolute;
        right: var(--spacing-s--1);
        top: 55%;
        transform: translateY(-100%);
      }
    }

    &__field { 
      border: none;
      border-bottom: 1px solid rgba(#747B95, .5);
      padding: 1.2rem 0 var(--spacing-s--1) var(--spacing-s--1);
      width: 100%; 

      &:focus-visible { outline: 3px solid var(--color-accent); }
    }

    & >  *:not(:first-of-type) { margin-bottom: var(--spacing-m--1); }
  }
</style>