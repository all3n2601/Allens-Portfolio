<script lang="ts">
  let {
    size = 40,
    variant = 'mark',
    class: className = ''
  }: {
    size?: number;
    variant?: 'mark' | 'full';
    class?: string;
  } = $props();

  const markOnly = variant === 'mark';
</script>

<svg
  class="brand-mark {className}"
  width={size}
  height={size}
  viewBox="0 0 48 48"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-label="MA — Shipped by Allen"
>
  <rect width="48" height="48" fill="#F4F6F8" />
  <rect x="2" y="2" width="44" height="44" stroke="#12151A" stroke-width="1.25" />
  <rect x="9" y="34.5" width="30" height="2.75" fill="#0B6E6A" />

  <!-- M — serif cap, tight to A -->
  <path
    fill="#12151A"
    d="M7.5 33.25V10.75h2.65l6.1 10.35 6.1-10.35h2.65v22.5h-2.55V17.1l-5.65 9.55-5.65-9.55v16.15H7.5z"
  />

  <!-- A — legs + apex; crossbar is the accent ship line -->
  <path fill="#12151A" d="M27.15 33.25L30.55 10.75h2.35l3.4 22.5h-2.45l-.75-2.65h-5.55l-.75 2.65h-2.45zm2.2-5.15h4.15l-2.08-7.35-2.07 7.35z" />
  <rect x="27.35" y="23.15" width="8.85" height="2.1" fill="#0B6E6A" />

  {#if !markOnly}
    <rect x="6" y="6" width="7" height="0.85" fill="#D0D6DE" />
    <rect x="6" y="8.2" width="4.5" height="0.85" fill="#D0D6DE" />
  {/if}
</svg>

<style>
  .brand-mark {
    display: block;
    flex-shrink: 0;
  }
</style>
