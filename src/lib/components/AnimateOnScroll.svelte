<script>
  import { onMount } from 'svelte';
  
  let {
    animation = 'fadeIn',
    delay = 0,
    children
  } = $props();
  
  let element = $state(null);
  let isVisible = $state(false);
  
  const animations = {
    fadeIn: 'opacity-0',
    fadeInUp: 'opacity-0 translate-y-10',
    fadeInDown: 'opacity-0 -translate-y-10',
    fadeInLeft: 'opacity-0 -translate-x-10',
    fadeInRight: 'opacity-0 translate-x-10',
    zoomIn: 'opacity-0 scale-95'
  };
  
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setTimeout(() => {
              isVisible = true;
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );
    
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  });
  
  $effect(() => {
    if (element && isVisible) {
      element.classList.remove(...animations[animation].split(' '));
      element.classList.add('opacity-100', 'translate-y-0', 'translate-x-0', 'scale-100');
    }
  });
</script>

<div
  bind:this={element}
  class="transition-all duration-700 ease-out {animations[animation]}"
>
  {@render children?.()}
</div>



