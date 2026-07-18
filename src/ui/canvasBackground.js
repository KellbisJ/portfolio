class CanvasBackground {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvas.id = "canvas";

    this.width = 0;
    this.height = 0;

    this.ctx = this.canvas.getContext("2d");

    this.resize(window.innerWidth, window.innerHeight);
    this.setDPR();

    this.canvas.style.position = "fixed";
    this.canvas.style.inset = "0";

    this.resizeObserver = new MutationObserver(() => {
      requestAnimationFrame(() => {
        this.resize(window.innerWidth, window.innerHeight);
        if (this.onResize) this.onResize();
      });
    });

    this.resizeObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    });

    this.debouncedResize = null;
    window.addEventListener("resize", () => {
      if (this.debouncedResize) cancelAnimationFrame(this.debouncedResize);
      this.debouncedResize = requestAnimationFrame(() => {
        this.resize(window.innerWidth, window.innerHeight);
        if (this.onResize) this.onResize();
      });
    });
  }

  setResizeCallback(callback) {
    this.onResize = callback;
  }

  setDPR() {
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (this.ctx) {
      this.canvas.width = this.width * this.dpr;
      this.canvas.height = this.height * this.dpr;
      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    }
  }

  resize(newWidth, newHeight) {
    this.width = Math.max(1, newWidth || window.innerWidth);
    this.height = Math.max(1, newHeight || window.innerHeight);

    if (this.ctx) {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.dpr = dpr;
      const targetW = this.width * this.dpr;
      const targetH = this.height * this.dpr;

      if (Math.abs(this.canvas.width - targetW) > 1 || Math.abs(this.canvas.height - targetH) > 1) {
        this.canvas.width = targetW;
        this.canvas.height = targetH;
        this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
    }
  }
}

class TopographicBackground {
  constructor(canvas) {
    this.canvas = canvas.canvas;
    this.ctx = this.canvas.getContext("2d");

    this.width = canvas.width;
    this.height = canvas.height;

    this.time = 0;
    this.isAnimating = true;
    this.isMobile = window.innerWidth <= 768;

    this.configureForMobile();
    this.initResizeHandler();

    canvas.setResizeCallback(() => this.draw());

    this.draw();
  }

  configureForMobile() {
    this.isMobile = window.innerWidth <= 768;
    if (this.isMobile) {
      this.lineCount = 6;
      this.lineSpacing = 55;
      this.pointStep = 28;
      this.amplitude = 12;
      this.lineWidth = 1.5;
      this.noiseScale = 0.04;
    } else {
      this.lineCount = 18;
      this.lineSpacing = 45;
      this.pointStep = 14;
      this.amplitude = 25;
      this.lineWidth = 1.5;
      this.noiseScale = 0.02;
    }
  }

  setAnimationEnabled(enabled) {
    this.isAnimating = enabled;
    if (!enabled) {
      this.time = 0;
      this.draw();
    }
  }

  initResizeHandler() {
    window.addEventListener("resize", () => {
      const newW = window.innerWidth;
      const newH = window.innerHeight;

      this.width = newW;
      this.height = newH;

      this.isMobile = newW <= 768;
      this.configureForMobile();

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.canvas.width = this.width * dpr;
      this.canvas.height = this.height * dpr;
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      this.draw();
      if (this.onResize) this.onResize();
    });
  }

  noise(x, y, time) {
    return Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 + time * 0.5) * Math.sin((x + y) * 0.004 + time * 0.7);
  }

  draw() {
    this.gradient();
    this.topographicLines();
  }

  gradient() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const gradient = this.ctx.createLinearGradient(0, 0, w, h);
    gradient.addColorStop(0, "#FB9B8F");
    gradient.addColorStop(1, "#7FB5FF");
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, w, h);
  }

  topographicLines() {
    const pointStep = this.isMobile ? this.pointStep : this.pointStep;
    const amplitude = this.isMobile ? this.amplitude : this.amplitude;
    const lineWidth = this.lineWidth;
    const w = window.innerWidth;

    this.ctx.save();
    this.ctx.lineJoin = "round";
    this.ctx.lineCap = "round";
    this.ctx.lineWidth = lineWidth;

    for (let level = 0; level < this.lineCount; level++) {
      this.ctx.beginPath();

      let startX = -pointStep * 2;
      let endX = w + pointStep * 4;
      let firstPoint = true;

      for (let x = startX; x < endX; x += pointStep) {
        const y = level * this.lineSpacing + Math.max(-50, Math.min(50, this.noise(x, level * this.lineSpacing * 0.1, this.time)) * amplitude);

        if (firstPoint) {
          this.ctx.moveTo(x, y);
          firstPoint = false;
        } else {
          this.ctx.lineTo(x, y);
        }
      }

      const opacity = this.isMobile ? 0.15 + (level / this.lineCount) * 0.4 : 0.05 + (level / this.lineCount) * 0.2;
      this.ctx.strokeStyle = `rgba(248, 244, 225, ${opacity})`;
      this.ctx.stroke();
    }
    this.ctx.restore();
  }

  animate() {
    if (!this.isAnimating) return;
    this.time += 0.01;
    this.draw();
    requestAnimationFrame(() => this.animate());
  }
}

export { CanvasBackground, TopographicBackground };
