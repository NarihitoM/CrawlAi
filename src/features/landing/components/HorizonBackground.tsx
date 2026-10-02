"use client";

import { useEffect, useRef } from "react";

const palette = {
  light: { color: "#65a30d", opacity: 0.55 },
  dark: { color: "#a3e635", opacity: 0.45 },
};

const vertexShader = `
  uniform float uTime;
  uniform float uSize;
  varying float vFade;

  void main() {
    vec3 p = position;
    p.y += sin(p.x * 0.32 + uTime * 0.55) * 0.35 + cos(p.z * 0.28 + uTime * 0.75) * 0.35;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = uSize * (10.0 / -mv.z);
    vFade = smoothstep(58.0, 10.0, -mv.z) * smoothstep(0.5, 4.0, -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const fragmentShader = `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vFade;

  void main() {
    if (length(gl_PointCoord - 0.5) > 0.5) discard;
    gl_FragColor = vec4(uColor, vFade * uOpacity);
  }
`;

export function HorizonBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cleanup = () => {};
    let cancelled = false;

    import("three").then((THREE) => {
      if (cancelled) return;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
      camera.position.set(0, 2.2, 6);
      camera.lookAt(0, -2.5, -20);

      const positions: number[] = [];
      for (let x = -40; x <= 40; x += 0.8) {
        for (let z = -60; z <= 6; z += 0.8) {
          positions.push(x, 0, z);
        }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));

      const uniforms = {
        uTime: { value: 0 },
        uSize: { value: 2.4 * renderer.getPixelRatio() },
        uColor: { value: new THREE.Color() },
        uOpacity: { value: 0 },
      };

      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
        transparent: true,
        depthWrite: false,
      });

      scene.add(new THREE.Points(geometry, material));

      const applyTheme = () => {
        const tone =
          document.documentElement.dataset.theme === "dark" ? palette.dark : palette.light;
        uniforms.uColor.value.set(tone.color);
        uniforms.uOpacity.value = tone.opacity;
        renderer.render(scene, camera);
      };

      const resize = () => {
        const { clientWidth, clientHeight } = container;
        renderer.setSize(clientWidth, clientHeight);
        camera.aspect = clientWidth / Math.max(clientHeight, 1);
        camera.updateProjectionMatrix();
        renderer.render(scene, camera);
      };

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const clock = new THREE.Clock();
      let frame = 0;
      let visible = true;

      const tick = () => {
        uniforms.uTime.value = clock.getElapsedTime();
        renderer.render(scene, camera);
        frame = requestAnimationFrame(tick);
      };

      const start = () => {
        if (reducedMotion || frame) return;
        clock.start();
        frame = requestAnimationFrame(tick);
      };

      const stop = () => {
        cancelAnimationFrame(frame);
        frame = 0;
        clock.stop();
      };

      const resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(container);

      const themeObserver = new MutationObserver(applyTheme);
      themeObserver.observe(document.documentElement, { attributeFilter: ["data-theme"] });

      const viewObserver = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !document.hidden) start();
        else stop();
      });
      viewObserver.observe(container);

      const onVisibility = () => {
        if (document.hidden || !visible) stop();
        else start();
      };
      document.addEventListener("visibilitychange", onVisibility);

      resize();
      applyTheme();
      start();

      cleanup = () => {
        stop();
        resizeObserver.disconnect();
        themeObserver.disconnect();
        viewObserver.disconnect();
        document.removeEventListener("visibilitychange", onVisibility);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_60%,transparent)]"
    />
  );
}
