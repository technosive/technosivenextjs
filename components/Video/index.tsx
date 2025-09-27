"use client";

import { useEffect, useRef } from "react";
import SectionTitle from "../Common/SectionTitle";

const CyberSecurityAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Animation elements
    const particles: any[] = [];
    const shields: any[] = [];
    const connections: any[] = [];
    const dataFlows: any[] = [];

    // Colors
    const colors = {
      primary: "#3B82F6",
      secondary: "#10B981",
      accent: "#F59E0B",
      danger: "#EF4444",
      bg: "rgba(59, 130, 246, 0.1)"
    };

    // Particle class for floating elements
    class Particle {
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.color = Math.random() > 0.5 ? colors.primary : colors.secondary;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Shield class for security shields
    class Shield {
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 30 + 20;
        this.rotation = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.opacity = Math.random() * 0.3 + 0.2;
      }

      update() {
        this.rotation += this.rotationSpeed;
        this.pulsePhase += 0.05;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        const pulse = Math.sin(this.pulsePhase) * 0.2 + 1;
        const size = this.size * pulse;
        
        ctx.globalAlpha = this.opacity;
        ctx.strokeStyle = colors.primary;
        ctx.lineWidth = 2;
        
        // Draw shield shape
        ctx.beginPath();
        ctx.moveTo(0, -size);
        ctx.lineTo(size * 0.7, -size * 0.7);
        ctx.lineTo(size * 0.7, size * 0.3);
        ctx.lineTo(0, size * 0.8);
        ctx.lineTo(-size * 0.7, size * 0.3);
        ctx.lineTo(-size * 0.7, -size * 0.7);
        ctx.closePath();
        ctx.stroke();
        
        // Draw shield cross
        ctx.beginPath();
        ctx.moveTo(0, -size * 0.6);
        ctx.lineTo(0, size * 0.4);
        ctx.moveTo(-size * 0.4, -size * 0.1);
        ctx.lineTo(size * 0.4, -size * 0.1);
        ctx.stroke();
        
        ctx.restore();
      }
    }

    // Connection class for network lines
    class Connection {
      constructor(x1: number, y1: number, x2: number, y2: number) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.progress = 0;
        this.speed = Math.random() * 0.02 + 0.01;
        this.opacity = Math.random() * 0.3 + 0.2;
      }

      update() {
        this.progress += this.speed;
        if (this.progress > 1) this.progress = 0;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.strokeStyle = colors.secondary;
        ctx.lineWidth = 1;
        
        // Draw connection line
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
        
        // Draw data packet
        const packetX = this.x1 + (this.x2 - this.x1) * this.progress;
        const packetY = this.y1 + (this.y2 - this.y1) * this.progress;
        
        ctx.fillStyle = colors.accent;
        ctx.beginPath();
        ctx.arc(packetX, packetY, 3, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    // DataFlow class for flowing data streams
    class DataFlow {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.length = Math.random() * 50 + 30;
        this.opacity = Math.random() * 0.4 + 0.2;
        this.color = Math.random() > 0.5 ? colors.primary : colors.secondary;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < -this.length) this.x = canvas.width + this.length;
        if (this.x > canvas.width + this.length) this.x = -this.length;
        if (this.y < -this.length) this.y = canvas.height + this.length;
        if (this.y > canvas.height + this.length) this.y = -this.length;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.vx * this.length, this.y - this.vy * this.length);
        ctx.stroke();
        
        ctx.restore();
      }
    }

    // Initialize animation elements
    const initAnimation = () => {
      // Create particles
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        ));
      }

      // Create shields
      for (let i = 0; i < 5; i++) {
        shields.push(new Shield(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        ));
      }

      // Create connections
      for (let i = 0; i < 8; i++) {
        connections.push(new Connection(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * canvas.width,
          Math.random() * canvas.height
        ));
      }

      // Create data flows
      for (let i = 0; i < 15; i++) {
        dataFlows.push(new DataFlow());
      }
    };

    initAnimation();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, colors.bg);
      gradient.addColorStop(1, "rgba(59, 130, 246, 0.02)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw all elements
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      connections.forEach(connection => {
        connection.update();
        connection.draw();
      });

      dataFlows.forEach(flow => {
        flow.update();
        flow.draw();
      });

      shields.forEach(shield => {
        shield.update();
        shield.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="container">
        <SectionTitle
          title="We are happy to help"
          paragraph="There are many variations of cybersecurity challenges you may face, and our dedicated team is here to provide tailored security solutions that best suit your unique needs. Whether it's navigating threat landscapes, optimizing security postures, or achieving compliance goals, count on us for reliable cybersecurity support and expertise."
          center
          mb="80px"
        />
        
        <div className="relative mx-auto max-w-6xl">
          <div className="relative aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg overflow-hidden border border-blue-200 dark:border-blue-800">
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full"
            />
            
            {/* Overlay content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Advanced Cybersecurity Protection
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
                  Real-time threat detection and proactive security measures
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat opacity-10"></div>
    </section>
  );
};

export default CyberSecurityAnimation;
