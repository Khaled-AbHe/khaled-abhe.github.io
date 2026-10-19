import { useEffect, useRef } from "react";

const S = 28;

export default function PixelGrid() {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    const parent = c.parentElement;
    const x = c.getContext("2d");
    let cols = 0,
      rows = 0,
      heat = [],
      raf = 0;

    const size = () => {
      const r = c.getBoundingClientRect();
      const d = window.devicePixelRatio || 1;
      c.width = r.width * d;
      c.height = r.height * d;
      x.setTransform(d, 0, 0, d, 0, 0);
      cols = Math.ceil(r.width / S);
      rows = Math.ceil(r.height / S);
      heat = new Array(cols * rows).fill(0);
    };

    const paint = (e) => {
      const r = c.getBoundingClientRect();
      const i = Math.floor((e.clientX - r.left) / S);
      const j = Math.floor((e.clientY - r.top) / S);
      for (let a = -1; a <= 1; a++)
        for (let b = -1; b <= 1; b++) {
          const ci = i + a,
            cj = j + b;
          if (ci >= 0 && cj >= 0 && ci < cols && cj < rows)
            heat[cj * cols + ci] = Math.max(
              heat[cj * cols + ci],
              a || b ? 0.5 : 1,
            );
        }
    };

    const draw = () => {
      const cs = getComputedStyle(document.documentElement);
      const rgb = cs.getPropertyValue("--cell").trim();
      const ln = cs.getPropertyValue("--line").trim();
      x.clearRect(0, 0, c.width, c.height);
      for (let j = 0; j < rows; j++)
        for (let i = 0; i < cols; i++) {
          const h = heat[j * cols + i];
          x.strokeStyle = ln;
          x.globalAlpha = 0.45;
          x.strokeRect(i * S + 0.5, j * S + 0.5, S - 1, S - 1);
          if (h > 0.01) {
            x.globalAlpha = h;
            x.fillStyle = `rgb(${rgb})`;
            x.fillRect(i * S + 3, j * S + 3, S - 6, S - 6);
            heat[j * cols + i] = h * 0.94;
          }
        }
      x.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    size();
    window.addEventListener("resize", size);
    parent.addEventListener("pointermove", paint);
    parent.addEventListener("pointerdown", paint);
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
      parent.removeEventListener("pointermove", paint);
      parent.removeEventListener("pointerdown", paint);
    };
  }, []);

  return <canvas id="grid" ref={ref} aria-hidden="true" />;
}
