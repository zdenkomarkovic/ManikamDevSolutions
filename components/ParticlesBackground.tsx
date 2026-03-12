const particles = [
  { top: "10%", left: "15%", size: 2, duration: "8s", delay: "0s" },
  { top: "20%", left: "80%", size: 1, duration: "12s", delay: "1s" },
  { top: "35%", left: "45%", size: 2, duration: "10s", delay: "2s" },
  { top: "50%", left: "25%", size: 1, duration: "9s", delay: "0.5s" },
  { top: "65%", left: "70%", size: 2, duration: "11s", delay: "3s" },
  { top: "75%", left: "10%", size: 1, duration: "7s", delay: "1.5s" },
  { top: "85%", left: "55%", size: 2, duration: "13s", delay: "0.8s" },
  { top: "15%", left: "60%", size: 1, duration: "9s", delay: "2.5s" },
  { top: "45%", left: "90%", size: 2, duration: "10s", delay: "1.2s" },
  { top: "60%", left: "35%", size: 1, duration: "8s", delay: "3.5s" },
  { top: "30%", left: "5%", size: 2, duration: "11s", delay: "0.3s" },
  { top: "90%", left: "85%", size: 1, duration: "14s", delay: "2s" },
  { top: "5%", left: "40%", size: 2, duration: "9s", delay: "4s" },
  { top: "55%", left: "60%", size: 1, duration: "12s", delay: "1.8s" },
  { top: "70%", left: "20%", size: 2, duration: "10s", delay: "0.6s" },
  { top: "25%", left: "75%", size: 1, duration: "8s", delay: "3.2s" },
  { top: "40%", left: "50%", size: 2, duration: "11s", delay: "1.4s" },
  { top: "80%", left: "40%", size: 1, duration: "9s", delay: "2.8s" },
  { top: "95%", left: "65%", size: 2, duration: "13s", delay: "0.2s" },
  { top: "12%", left: "30%", size: 1, duration: "10s", delay: "4.5s" },
];

const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.3)",
            animation: `floatParticle ${p.duration} ease-in-out ${p.delay} infinite alternate`,
          }}
        />
      ))}
      <style>{`
        @keyframes floatParticle {
          0%   { transform: translateY(0px) translateX(0px); opacity: 0.2; }
          50%  { opacity: 0.5; }
          100% { transform: translateY(-30px) translateX(10px); opacity: 0.2; }
        }
      `}</style>
    </div>
  );
};

export default ParticlesBackground;
