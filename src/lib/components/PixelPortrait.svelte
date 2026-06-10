<script lang="ts">
  import { onMount } from 'svelte';

  type PixelCell = {
    tx: number;
    ty: number;
    sx: number;
    sy: number;
    w: number;
    h: number;
    delay: number;
    duration: number;
    alpha: number;
    lift: number;
    trail: number;
    swirl: number;
    orbit: number;
    pulse: number;
    featureBias: number;
    faceBias: number;
    angle: number;
    eccentricity: number;
    color: string;
    glow: string;
  };

  const imageSrc = '/images/allen-portrait-duotone.webp';
  const aspectRatio = 1;
  const assembleDuration = 2600;
  const settleDuration = 1700;
  const minCols = 78;
  const maxCols = 132;
  const finalHoldTime = assembleDuration + settleDuration;
  const portraitZones = {
    face: {
      label: 'Builder',
      title: 'Production-focused engineering',
      body: 'Systems, APIs, and shipped apps with clarity first.',
      href: '#experience',
      cta: 'View experience'
    },
    upper: {
      label: 'Research',
      title: 'Applied AI and research work',
      body: 'Fraud detection, data workflows, and practical ML-adjacent systems.',
      href: '#about',
      cta: 'Read background'
    },
    lower: {
      label: 'Apps',
      title: 'Cross-platform product building',
      body: 'Mobile, web, and polished end-to-end product execution.',
      href: '#apps',
      cta: 'See shipped apps'
    }
  } as const;

  let canvas: HTMLCanvasElement;
  let host: HTMLDivElement;
  let reduceMotion = false;
  let ctx: CanvasRenderingContext2D | null = null;
  let portraitImage: HTMLImageElement | null = null;
  let frameId = 0;
  let cycleAnchor = 0;
  let lastWidth = 0;
  let lastHeight = 0;
  let cells: PixelCell[] = [];
  let hoverActive = false;
  let hoverStrength = 0;
  let pointerX = 0.5;
  let pointerY = 0.38;
  let uiHovered = false;
  let activeZone: keyof typeof portraitZones = 'face';

  $: {
    if (pointerY < 0.28) activeZone = 'upper';
    else if (pointerY > 0.6) activeZone = 'lower';
    else activeZone = 'face';
  }

  function jumpToSection(event: MouseEvent, href: string) {
    event.preventDefault();
    const section = document.querySelector(href);
    if (!(section instanceof HTMLElement)) return;
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function clamp(value: number, min: number, max: number) {
    return Math.min(max, Math.max(min, value));
  }

  function easeOutCubic(t: number) {
    return 1 - Math.pow(1 - t, 3);
  }

  function easeInOutSine(t: number) {
    return -(Math.cos(Math.PI * t) - 1) / 2;
  }

  function loadImage(src: string) {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  }

  function fitBounds(width: number, height: number) {
    const targetHeight = height * 0.9;
    const targetWidth = targetHeight * aspectRatio;
    const fittedWidth = Math.min(width * 0.88, targetWidth);
    const fittedHeight = fittedWidth / aspectRatio;
    const x = width - fittedWidth - width * 0.06;
    const y = height * 0.04;
    return { width: fittedWidth, height: fittedHeight, x, y };
  }

  function buildCells(width: number, height: number) {
    if (!ctx || !portraitImage) return;

    const bounds = fitBounds(width, height);
    const columns = clamp(Math.round(bounds.width / 10), minCols, maxCols);
    const rows = columns;
    const cellWidth = bounds.width / columns;
    const cellHeight = bounds.height / rows;
    const centerCol = columns / 2;
    const centerRow = rows / 2;

    const sampleCanvas = document.createElement('canvas');
    sampleCanvas.width = columns;
    sampleCanvas.height = rows;
    const sampleCtx = sampleCanvas.getContext('2d', { willReadFrequently: true });
    if (!sampleCtx) return;

    sampleCtx.drawImage(portraitImage, 0, 0, columns, rows);
    const data = sampleCtx.getImageData(0, 0, columns, rows).data;

    cells = [];
    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < columns; col += 1) {
        const index = (row * columns + col) * 4;
        const r = data[index] ?? 0;
        const g = data[index + 1] ?? 0;
        const b = data[index + 2] ?? 0;
        const a = data[index + 3] ?? 0;

        if (a < 25) continue;

        const luma = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
        if (luma > 0.94) continue;

        const toneMix = clamp((0.86 - luma) / 0.6, 0, 1);
        if (toneMix < 0.08) continue;

        const shade = Math.round(198 - toneMix * 170);
        const alpha = clamp(0.12 + Math.pow(toneMix, 1.15) * 0.92, 0.16, 0.98);
        const dx = col - centerCol;
        const dy = row - centerRow;
        const radial = Math.sqrt(dx * dx + dy * dy) / Math.sqrt(centerCol * centerCol + centerRow * centerRow);
        const faceBias = clamp(1 - Math.abs(row / rows - 0.34) / 0.22, 0, 1);
        const featureBias = clamp(toneMix * 0.76 + faceBias * 0.78, 0, 1);
        const bodyFalloff = clamp(1 - Math.max(0, row / rows - 0.54) / 0.34, 0.18, 1);
        const delayBase = (1 - featureBias) * 180 + radial * 980 + (1 - faceBias) * 420 + Math.random() * 340;

        cells.push({
          tx: bounds.x + col * cellWidth,
          ty: bounds.y + row * cellHeight,
          sx:
            bounds.x +
            col * cellWidth +
            (Math.random() - 0.5) * cellWidth * 10 +
            Math.cos((row / rows) * Math.PI * 2 + Math.random() * 0.8) * (24 + Math.random() * 44),
          sy:
            bounds.y +
            row * cellHeight +
            (Math.random() - 0.5) * cellHeight * 10 +
            Math.sin((col / columns) * Math.PI * 2 + Math.random() * 0.8) * (24 + Math.random() * 44),
          w: Math.max(0.5, cellWidth * (0.32 + featureBias * 0.2 + faceBias * 0.08)),
          h: Math.max(0.5, cellHeight * (0.28 + featureBias * 0.18 + faceBias * 0.1)),
          delay: delayBase,
          duration: 560 + (1 - featureBias) * 420 + Math.random() * 320,
          alpha: alpha * bodyFalloff,
          lift: 26 + Math.random() * 22,
          trail: 10 + Math.random() * 32,
          swirl: (Math.random() > 0.5 ? 1 : -1) * (16 + Math.random() * 30),
          orbit: 8 + Math.random() * 24,
          pulse: Math.random() * Math.PI * 2,
          featureBias,
          faceBias,
          angle: (Math.random() - 0.5) * 1.1 + (faceBias - 0.5) * 0.18,
          eccentricity: clamp(0.82 + Math.random() * 0.55 - faceBias * 0.18, 0.72, 1.35),
          color: `rgba(${shade}, ${shade}, ${shade}, ${alpha})`,
          glow: `rgba(${Math.min(255, shade + 34)}, ${Math.min(255, shade + 34)}, ${Math.min(255, shade + 34)}, ${clamp(alpha * 0.42, 0.12, 0.32)})`
        });
      }
    }
  }

  function drawGrain(
    x: number,
    y: number,
    width: number,
    height: number,
    angle: number,
    fill: string,
    alpha: number,
    blur = 0
  ) {
    if (!ctx) return;

    const centerX = x + width / 2;
    const centerY = y + height / 2;
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(angle);
    ctx.globalAlpha = alpha;
    if (blur > 0) ctx.filter = `blur(${blur}px)`;
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.ellipse(0, 0, Math.max(0.6, width / 2), Math.max(0.6, height / 2), 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawFrame(now: number) {
    if (!ctx || !canvas) return;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (width !== lastWidth || height !== lastHeight) {
      lastWidth = width;
      lastHeight = height;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildCells(width, height);
    }

    ctx.clearRect(0, 0, width, height);

    const elapsed = now - cycleAnchor;
    const cycleTime = reduceMotion ? finalHoldTime : Math.min(elapsed, finalHoldTime);
    const shimmer = reduceMotion ? 0 : 0.5 + 0.5 * Math.sin(now * 0.0012);
    hoverStrength += ((hoverActive ? 1 : 0) - hoverStrength) * 0.08;

    for (const cell of cells) {
      const local = cycleTime - cell.delay;
      const progress = clamp(local / cell.duration, 0, 1);
      const visible = reduceMotion ? 1 : progress;

      if (visible <= 0) continue;

      const eased = easeOutCubic(visible);
      const settleProgress = clamp((cycleTime - assembleDuration) / settleDuration, 0, 1);
      const amoebaT = reduceMotion ? 1 : easeInOutSine(progress);
      const splitPhase = 1 - amoebaT;
      const orbitX = reduceMotion ? 0 : Math.cos(cell.pulse + progress * Math.PI * 2.4) * cell.orbit * splitPhase;
      const orbitY = reduceMotion ? 0 : Math.sin(cell.pulse + progress * Math.PI * 2.4) * cell.orbit * splitPhase;
      const squeeze = reduceMotion ? 0 : Math.sin(cell.pulse + progress * Math.PI) * cell.swirl * splitPhase;
      const subtleDrift = reduceMotion ? 0 : Math.sin((cell.tx + cell.ty + now * 0.06) * 0.02) * (1 - settleProgress) * 1.2;
      const settledX = cell.sx + (cell.tx - cell.sx) * eased + orbitX;
      const settledY = cell.sy + (cell.ty - cell.sy) * eased + orbitY + subtleDrift;
      const w = cell.w;
      const h = cell.h;
      const finalAlpha = cell.alpha * (0.4 + eased * 0.6);
      const drawW = Math.max(1.1, (w + squeeze * 0.18) * (0.94 + cell.faceBias * 0.18));
      const drawH = Math.max(1.1, (h - squeeze * 0.12) * cell.eccentricity);
      const pointerDx = pointerX * width - (cell.tx + w * 0.5);
      const pointerDy = pointerY * height - (cell.ty + h * 0.5);
      const pointerDistance = Math.hypot(pointerDx, pointerDy);
      const hoverRadius = 190 - cell.featureBias * 55;
      const hoverFalloff = clamp(1 - pointerDistance / hoverRadius, 0, 1) * hoverStrength;
      const hoverPulse = Math.sin(now * 0.006 + cell.pulse * 2.2);
      const magneticPullX = pointerDx * -0.075 * hoverFalloff;
      const magneticPullY = pointerDy * -0.075 * hoverFalloff;
      const layerDriftX = hoverPulse * (1.2 + cell.featureBias * 2.4) * hoverFalloff;
      const layerDriftY = Math.cos(now * 0.005 + cell.pulse) * (0.8 + cell.faceBias * 1.8) * hoverFalloff;
      const hoverOffsetX = reduceMotion ? 0 : magneticPullX + layerDriftX;
      const hoverOffsetY = reduceMotion ? 0 : magneticPullY + layerDriftY;
      const hoverScale = 1 + hoverFalloff * (0.12 + cell.featureBias * 0.12);
      const x = settledX + hoverOffsetX;
      const y = settledY + hoverOffsetY;
      const grainW = drawW * hoverScale;
      const grainH = drawH * hoverScale;
      const grainAngle = cell.angle + hoverFalloff * 0.12 + Math.sin(now * 0.0018 + cell.pulse) * 0.03;

      if (!reduceMotion && progress < 1) {
        drawGrain(x - grainW * 0.16, y - grainH * 0.16, grainW * 1.32, grainH * 1.32, grainAngle, cell.glow, 0.28, 0.6);
      }

      drawGrain(
        x,
        y,
        grainW,
        grainH,
        grainAngle,
        cell.color.replace(/[\d.]+\)$/, '1)'),
        finalAlpha
      );

      if (!reduceMotion && progress > 0.82) {
        const spark = clamp((progress - 0.82) / 0.18, 0, 1);
        const hoverSpark = hoverFalloff * (0.04 + cell.featureBias * 0.06);
        drawGrain(
          x + grainW * 0.08,
          y + grainH * 0.08,
          grainW * (0.56 + cell.faceBias * 0.12),
          grainH * (0.56 + cell.faceBias * 0.12),
          grainAngle,
          'rgba(255, 255, 255, 1)',
          0.06 * spark + shimmer * 0.05 + hoverSpark
        );
      }
    }

    if (!reduceMotion && cycleTime < finalHoldTime) {
      const scanProgress = cycleTime / finalHoldTime;
      const scanY = height * (0.2 + Math.sin(scanProgress * Math.PI) * 0.26);
      const scanAlpha = 0.04 + shimmer * 0.04;

      ctx.fillStyle = `rgba(255, 255, 255, ${scanAlpha * 0.82})`;
      ctx.fillRect(width * 0.42, scanY, width * 0.22, 1.5);
      ctx.fillStyle = `rgba(90, 90, 90, ${scanAlpha * 0.55})`;
      ctx.fillRect(width * 0.44, scanY + 3, width * 0.18, 0.8);
    }

    frameId = window.requestAnimationFrame(drawFrame);
  }

  onMount(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    reduceMotion = media.matches;

    const onMotionChange = (event: MediaQueryListEvent) => {
      reduceMotion = event.matches;
      cycleAnchor = performance.now();
    };
    const onPointerMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      pointerX = clamp((event.clientX - rect.left) / rect.width, 0, 1);
      pointerY = clamp((event.clientY - rect.top) / rect.height, 0, 1);
    };
    const onPointerEnter = () => {
      hoverActive = true;
      uiHovered = true;
    };
    const onPointerLeave = () => {
      hoverActive = false;
      uiHovered = false;
    };

    media.addEventListener('change', onMotionChange);
    ctx = canvas.getContext('2d');
    host.addEventListener('pointermove', onPointerMove);
    host.addEventListener('pointerenter', onPointerEnter);
    host.addEventListener('pointerleave', onPointerLeave);

    const observer = new ResizeObserver(() => {
      lastWidth = 0;
      lastHeight = 0;
    });
    observer.observe(host);

    loadImage(imageSrc)
      .then((img) => {
        portraitImage = img;
        cycleAnchor = performance.now();
        frameId = window.requestAnimationFrame(drawFrame);
      })
      .catch(() => {
        /* If the portrait asset fails to load, keep the hero clean. */
      });

    return () => {
      observer.disconnect();
      media.removeEventListener('change', onMotionChange);
      host.removeEventListener('pointermove', onPointerMove);
      host.removeEventListener('pointerenter', onPointerEnter);
      host.removeEventListener('pointerleave', onPointerLeave);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  });
</script>

<div class="pixel-portrait" bind:this={host}>
  <canvas bind:this={canvas}></canvas>
  <div class:visible={uiHovered} class="portrait-ui">
    <div class="portrait-panel">
      <div class="portrait-panel-kicker">{portraitZones[activeZone].label}</div>
      <div class="portrait-panel-title">{portraitZones[activeZone].title}</div>
      <div class="portrait-panel-body">{portraitZones[activeZone].body}</div>
      <a
        class="portrait-panel-link"
        href={portraitZones[activeZone].href}
        on:click={(event) => jumpToSection(event, portraitZones[activeZone].href)}
      >
        {portraitZones[activeZone].cta}
      </a>
    </div>
  </div>
</div>

<style>
  .pixel-portrait {
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: auto;
    overflow: hidden;
    opacity: 0.96;
  }

  canvas {
    width: 100%;
    height: 100%;
    display: block;
    filter: contrast(1.08) saturate(0.86);
  }

  .portrait-ui {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0;
    transition: opacity 180ms ease;
  }

  .portrait-ui.visible {
    opacity: 1;
  }

  .portrait-panel-kicker,
  .portrait-panel-link {
    font-family: var(--mono);
    font-size: 0.58rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .portrait-panel {
    position: absolute;
    left: 1.25rem;
    top: 1.25rem;
    max-width: 16rem;
    color: rgba(61, 58, 52, 0.84);
    background: rgba(245, 242, 235, 0.76);
    border: 1px solid rgba(216, 210, 198, 0.8);
    padding: 0.8rem 0.9rem 0.85rem;
    backdrop-filter: blur(10px);
  }

  .portrait-panel-kicker {
    color: rgba(61, 58, 52, 0.62);
    margin-bottom: 0.45rem;
  }

  .portrait-panel-title {
    font-family: var(--serif);
    font-size: 1.1rem;
    line-height: 1.15;
    color: var(--ink);
    margin-bottom: 0.35rem;
  }

  .portrait-panel-body {
    font-size: 0.82rem;
    line-height: 1.55;
    color: rgba(61, 58, 52, 0.82);
    max-width: 18rem;
  }

  .portrait-panel-link {
    margin-top: 0.85rem;
    display: inline-block;
    text-decoration: none;
    color: var(--ink);
    border-bottom: 1px solid rgba(26, 23, 18, 0.26);
    padding-bottom: 0.18rem;
    pointer-events: auto;
  }

  .portrait-panel-link:hover {
    border-color: rgba(26, 23, 18, 0.68);
  }

  @media (prefers-reduced-motion: reduce) {
    .pixel-portrait {
      opacity: 0.6;
    }
  }

  @media (max-width: 1100px) {
    .portrait-panel {
      max-width: 14rem;
    }

    .portrait-panel-title {
      font-size: 1rem;
    }
  }
</style>
