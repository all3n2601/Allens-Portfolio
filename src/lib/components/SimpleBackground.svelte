<script>
  import { onMount } from 'svelte';
  
  let canvas;
  let ctx;
  let particles = [];
  let animationId;
  
  onMount(() => {
    ctx = canvas.getContext('2d');
    
    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${particle.opacity})`;
        ctx.fill();
      });
      
      animationId = requestAnimationFrame(animate);
    }
    
    animate();
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  });
  
  function handleResize() {
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }
</script>

<svelte:window on:resize={handleResize} />

<canvas
  bind:this={canvas}
  width={typeof window !== 'undefined' ? window.innerWidth : 1920}
  height={typeof window !== 'undefined' ? window.innerHeight : 1080}
  class="fixed inset-0 -z-10 pointer-events-none"
></canvas>

<style>
  canvas {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  }
</style>
