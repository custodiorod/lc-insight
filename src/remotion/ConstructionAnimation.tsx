import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const ConstructionAnimation = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animação do guindaste
  const craneX = interpolate(frame, [0, 60], [-100, 500], {
    extrapolateRight: "clamp",
  });
  const craneRotation = Math.sin(frame * 0.1) * 15;

  // Animação dos blocos de construção
  const blocks = [
    { x: 50, y: 250, delay: 0, color: "#4A5568" },
    { x: 120, y: 250, delay: 5, color: "#718096" },
    { x: 190, y: 250, delay: 10, color: "#4A5568" },
    { x: 50, y: 190, delay: 15, color: "#718096" },
    { x: 120, y: 190, delay: 20, color: "#4A5568" },
    { x: 190, y: 190, delay: 25, color: "#718096" },
    { x: 85, y: 130, delay: 30, color: "#2D3748" },
    { x: 155, y: 130, delay: 35, color: "#2D3748" },
    { x: 120, y: 70, delay: 45, color: "#1A202C" },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: "#0066CC" }}>
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, #0066CC 0%, #004499 100%)",
        }}
      />

      {/* Chão */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "50px",
          backgroundColor: "#2D3748",
        }}
      />

      {/* Blocos de construção animados */}
      {blocks.map((block, i) => {
        const blockOpacity = spring({
          frame: frame - block.delay,
          fps,
          config: { damping: 15, stiffness: 100 },
        });
        const blockScale = spring({
          frame: frame - block.delay,
          fps,
          config: { damping: 15, stiffness: 80 },
        });

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: block.x,
              bottom: 300 - block.y,
              width: "60px",
              height: "50px",
              backgroundColor: block.color,
              opacity: Math.max(0, Math.min(1, blockOpacity)),
              transform: `scale(${blockScale})`,
              border: "2px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            }}
          />
        );
      })}

      {/* Guindaste animado */}
      <div
        style={{
          position: "absolute",
          left: craneX,
          bottom: "50px",
          transform: `rotate(${craneRotation}deg)`,
          transformOrigin: "bottom center",
        }}
      >
        {/* Base do guindaste */}
        <div
          style={{
            width: "40px",
            height: "150px",
            backgroundColor: "#FFD700",
            borderRadius: "5px",
          }}
        />
        {/* Braço do guindaste */}
        <div
          style={{
            position: "absolute",
            bottom: "140px",
            left: "-60px",
            width: "100px",
            height: "10px",
            backgroundColor: "#FFD700",
            transformOrigin: "right center",
          }}
        />
        {/* Cabo */}
        <div
          style={{
            position: "absolute",
            left: "-60px",
            top: "-50px",
            width: "2px",
            height: "80px",
            backgroundColor: "#333",
          }}
        />
        {/* Gancho */}
        <div
          style={{
            position: "absolute",
            left: "-65px",
            top: "30px",
            width: "12px",
            height: "12px",
            border: "3px solid #333",
            borderRadius: "0 0 10px 10px",
            borderTop: "none",
          }}
        />
      </div>

      {/* Nuvens de poeira */}
      {[0, 1, 2].map((i) => {
        const dustX = interpolate(frame, [0, 120], [100 + i * 50, 300 + i * 50], {
          extrapolateRight: "clamp",
        });
        const dustOpacity = spring({
          frame: frame - 30 - i * 10,
          fps,
          config: { damping: 20, stiffness: 60 },
        });

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: dustX,
              bottom: "50px",
              width: "40px",
              height: "40px",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderRadius: "50%",
              opacity: Math.max(0, Math.min(0.6, dustOpacity)) * (1 - i * 0.15),
              filter: "blur(8px)",
            }}
          />
        );
      })}

      {/* Texto animado */}
      <div
        style={{
          position: "absolute",
          top: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: spring({
            frame: frame - 40,
            fps,
            config: { damping: 15, stiffness: 100 },
          }),
        }}
      >
        <div
          style={{
            color: "#FFD700",
            fontSize: "28px",
            fontWeight: "bold",
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          🏗️ Construa sua Carreira 🏗️
        </div>
      </div>

      {/* Partículas de construção */}
      {Array.from({ length: 15 }, (_, i) => {
        const delay = i * 5;
        const particleOpacity = spring({
          frame: frame - delay,
          fps,
          config: { damping: 20, stiffness: 80 },
        });
        const x = 50 + Math.random() * 300;
        const y = interpolate(
          frame - delay,
          [0, 60],
          [280, 50],
          { extrapolateRight: "clamp" }
        );

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              bottom: y,
              width: "4px",
              height: "4px",
              backgroundColor: "#FFD700",
              borderRadius: "50%",
              opacity: Math.max(0, Math.min(1, particleOpacity)) * 0.8,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
