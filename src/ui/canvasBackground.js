class CanvasBackground {
  constructor(canvas, width, height, ctx, x, y) {
    this.canvas = canvas;
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
  }

  fitCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }
}

class TopographicBackground extends CanvasBackground {
  constructor(canvas, width, height, ctx, x, y) {
    super(canvas, width, height, ctx, x, y);
    this.time = 0;

    this.isMobile = window.innerWidth <= 768;

    if (this.isMobile) {
      this.noiseScale = 0.03;
      this.lineCount = 15;
      this.lineSpacing = 50;
    } else {
      this.noiseScale = 0.02;
      this.lineCount = 35;
      this.lineSpacing = 30;
    }
  }

  noise(x, y, time) {
    if (this.isMobile) {
      return Math.sin(x * 0.015 + time) * Math.cos(y * 0.015 + time * 0.5);
    } else {
      return Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 + time * 0.5) * Math.sin((x + y) * 0.004 + time * 0.7);
    }
    // return Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 + time * 0.7) * Math.sin((x + y) * 0.005 + time * 1.3);

    // return Math.sin(x * 1 + time) * Math.cos(y * 0.3 + time * 0.3) * Math.sin((x + y) * 0.03 + time * 1);

    // return Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 + time * 0.5) * Math.sin((x + y) * 0.004 + time * 0.7);

    // return Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 + time * 0.7) * Math.sin((x + y) * 0.005 + time * 1.3);

    // return Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 + time * 0.7) * Math.sin((x + y) * 0.005 + time * 1.3);
  }

  draw() {
    this.gradient();

    this.time += 0.01;

    this.topographicLines();

    if (!this.isMobile) {
      this.subtleDots();
    }
  }

  gradient() {
    const gradient = this.ctx.createLinearGradient(0, 0, this.width, this.height);
    // gradient.addColorStop(0, "#FB9B8F");
    // gradient.addColorStop(1, "#16213e");
    // gradient.addColorStop(0, "#EEEEEE");
    // gradient.addColorStop(1, "#16213e");
    // gradient.addColorStop(0, "#FB9B8F");
    // gradient.addColorStop(1, "#C4DDFF");
    gradient.addColorStop(0, "#FB9B8F");
    gradient.addColorStop(1, "#7FB5FF");
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  topographicLines() {
    const lineWidth = this.isMobile ? 2 : 1.3;
    const pointStep = this.isMobile ? 8 : 5;
    const amplitude = this.isMobile ? 25 : 35;

    this.ctx.lineWidth = lineWidth;

    for (let level = 0; level < this.lineCount; level++) {
      this.ctx.beginPath();
      let firstPoint = true;

      for (let x = 0; x < this.width; x += pointStep) {
        const y = level * this.lineSpacing + this.noise(x, level * this.lineSpacing, this.time) * amplitude;

        if (firstPoint) {
          this.ctx.moveTo(x, y);
          firstPoint = false;
        } else {
          this.ctx.lineTo(x, y);
        }
      }

      const opacity = this.isMobile ? 0.1 + (level / this.lineCount) * 0.15 : 0.1 + (level / this.lineCount) * 0.2;

      this.ctx.strokeStyle = `rgba(248, 244, 225, ${opacity})`;
      this.ctx.stroke();
    }
  }

  subtleDots() {
    this.ctx.fillStyle = "#EEEEEE";
    for (let x = 0; x < this.width; x += 40) {
      for (let y = 0; y < this.height; y += 40) {
        const noiseValue = this.noise(x, y, this.time);
        const size = Math.abs(noiseValue) * 3;

        this.ctx.beginPath();
        this.ctx.arc(x + noiseValue * 10, y + noiseValue * 10, size, 0, Math.PI * 2);
        this.ctx.fill();
      }
    }
  }

  animate() {
    this.draw();
    requestAnimationFrame(() => this.animate());
  }
}

export { CanvasBackground, TopographicBackground };
