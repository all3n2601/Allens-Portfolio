<script lang="ts">
  import type { StackIcon } from '$lib/data/projects';

  type Group = { label: string; icons: StackIcon[]; tone?: 'source' };
  let { groups }: { groups: Group[] } = $props();
</script>

<div class="stack-providers">
  {#each groups.filter((g) => g.icons.length) as group (group.label)}
    <div class="stack-providers-group">
      <div class="stack-providers-label">{group.label}</div>
      <ul class="stack-providers-list">
        {#each group.icons as icon (icon.name)}
          <li class="stack-provider" class:is-source={group.tone === 'source'} title={icon.name}>
            <img src={icon.src} alt="" aria-hidden="true" />
            <span class="stack-provider-name">{icon.name}</span>
          </li>
        {/each}
      </ul>
    </div>
  {/each}
</div>

<style>
  .stack-providers {
    margin-top: 0.5rem;
    padding-top: 1.25rem;
    border-top: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    gap: 1.15rem;
  }

  .stack-providers-group {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .stack-providers-label {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .stack-providers-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.85rem;
  }

  .stack-provider {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
    min-width: 7.5rem;
    padding: 1rem 1.15rem;
    border: 1px solid var(--border);
    background: var(--paper);
    font-family: var(--mono);
    letter-spacing: 0.02em;
    text-align: center;
  }

  .stack-provider img {
    width: clamp(2.1rem, 2.4vw, 2.75rem);
    height: clamp(2.1rem, 2.4vw, 2.75rem);
    object-fit: contain;
    display: block;
    flex-shrink: 0;
  }

  .stack-provider-name {
    font-size: clamp(0.82rem, 0.95vw, 0.95rem);
    font-weight: 700;
    color: var(--ink);
  }

  .stack-provider.is-source {
    background: var(--accent-pale);
    border-color: rgba(11, 110, 106, 0.22);
  }
</style>
