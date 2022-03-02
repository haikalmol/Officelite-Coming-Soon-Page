<script lang="ts">
  // Components
  import DropdownOption from "./DropdownOption.svelte"
  // Graphic Asssets
  import IconArrowDown from "../assets/sign-up/icon-arrow-down.svg"

  let packages = [
    {
      type: "Basic Pack",
      price: "Free"
    },
    {
      type: "Pro Pack",
      price: "$9.99"
    },
    {
      type: "Ultimate Pack",
      price: "$19.99"
    }
  ]

  let isDropdownToggled = false
  let currentItem = 0

  const toggleDropDown = () => {
    isDropdownToggled = !isDropdownToggled
  }

  const selectOption = e => {
    if (e.target.classList.contains("dropdown__option")) {
      currentItem = e.target.dataset.item
    } else {
      currentItem = e.target.parentElement.parentElement.dataset.item
    }

    isDropdownToggled = false
  }
 
</script>

<div class="dropdown" tabindex="0">
  <div on:click={toggleDropDown} class="dropdown__current">
    <p>
      <span>{packages[currentItem].type}</span>
      <span>{packages[currentItem].price}</span>
    </p>
    <img class={`dropdown__icon ${isDropdownToggled ? "reverse": ""}`} src={IconArrowDown} alt="" />
  </div>
  {#if isDropdownToggled}
    <div class="dropdown__options">
      {#each packages as pack, i}
        <DropdownOption 
          content={{...pack}} 
          isChecked={i == currentItem ? true : false}
          selectOption={selectOption}
          index={i}
        />
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  @use "../styles/query";

  .dropdown {
    border-bottom: 1px solid rgba(#747B95, .5);
    position: relative;
    margin-bottom: var(--spacing-s--1);
    width: 100%;
    z-index: 999;

    &:focus { outline: 3px solid var(--color-accent); }

    &__current {
      align-items: center;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      padding: var(--spacing-s--1);
      padding-top: 0;
    }

    &__icon {
      transition: transform .3s ease-in;

      &.reverse {
        transform: rotate(180deg);
      }
    }

    &__options { 
      background-color: #fff;
      bottom: -460%;
      border: 1px solid rgba(#333950, .15);
      border-radius: 8px;
      box-shadow: 0 5rem 5rem -2.5rem rgba(#4B5C9A, .74);
      padding: var(--spacing-m--1) var(--spacing-m--2);
      position: absolute;
      width: 100%;
      z-index: 9999;
     }

  }
</style>