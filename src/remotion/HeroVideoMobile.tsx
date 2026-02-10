import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const HeroVideoMobile = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animação de entrada do título
  const titleOpacity = spring({
    frame: frame - 5,
    fps,
    config: {
      damping: 12,
      stiffness: 120,
    },
  });

  const titleScale = spring({
    frame: frame - 5,
    fps,
    config: {
      damping: 12,
      stiffness: 90,
    },
  });

  const titleY = interpolate(frame, [0, 25], [40, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Animação de entrada do subtítulo
  const subtitleOpacity = spring({
    frame: frame - 20,
    fps,
    config: {
      damping: 12,
      stiffness: 120,
    },
  });

  const subtitleY = interpolate(frame, [15, 40], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Animação de pulse no badge
  const badgePulse = spring({
    frame: frame - 40,
    fps,
    config: { damping: 8, stiffness: 100 },
  });

  const badgeScale = 1 + Math.sin(frame * 0.15) * 0.05;

  // Animação de zoom do background
  const bgScale = interpolate(frame, [0, 200], [1, 1.1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const bgOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Elementos flutuantes com movimento mais fluido
  const floatY1 = Math.sin(frame * 0.08) * 25;
  const floatY2 = Math.sin(frame * 0.06 + 1.5) * 30;

  // Animação de rotação dos ícones
  const rotation1 = frame * 0.8;
  const rotation2 = -frame * 0.5;

  // Partículas com movimento mais interessante
  const particles = Array.from({ length: 20 }, (_, i) => {
    const delay = i * 2;
    const opacity = spring({
      frame: frame - delay,
      fps,
      config: { damping: 25, stiffness: 100 },
    });

    const angle = (i / 20) * Math.PI * 2;
    const radius = 120 + Math.sin(frame * 0.05 + i) * 40;
    const x = 270 + Math.cos(angle) * radius;
    const y = 480 + Math.sin(angle) * radius;

    return {
      x,
      y: y + Math.sin(frame * 0.03 + i * 0.2) * 25,
      opacity: Math.max(0, Math.min(1, opacity)) * 0.7,
      scale: 1 + Math.sin(frame * 0.1 + i) * 0.3,
    };
  });

  // Cards de informações com animação
  const cardsOpacity = spring({
    frame: frame - 60,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const cardsY = interpolate(frame, [55, 80], [30, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0066CC", overflow: "hidden" }}>
      {/* Background com gradiente animado e zoom */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(135deg,
            #004499 0%,
            #0066CC 50%,
            #0088FF 100%)`,
          transform: `scale(${bgScale})`,
          opacity: bgOpacity,
        }}
      />

      {/* Círculos decorativos animados */}
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, transparent 70%)",
          left: -100,
          top: -100,
          transform: `scale(${1 + Math.sin(frame * 0.03) * 0.1})`,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 136, 255, 0.2) 0%, transparent 70%)",
          right: -80,
          bottom: -80,
          transform: `scale(${1 + Math.cos(frame * 0.03) * 0.1})`,
        }}
      />

      {/* Partículas animadas */}
      {particles.map((particle, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: particle.x,
            top: particle.y,
            width: `${3 + i % 2}px`,
            height: `${3 + i % 2}px`,
            backgroundColor: i % 2 === 0 ? "#FFD700" : "#FFFFFF",
            borderRadius: "50%",
            opacity: particle.opacity * 0.7,
            transform: `scale(${particle.scale})`,
            boxShadow: "0 0 8px rgba(255, 215, 0, 0.5)",
          }}
        />
      ))}

      {/* Elementos flutuantes - Ícones de construção com movimento melhorado */}
      <div
        style={{
          position: "absolute",
          left: "-20px",
          top: `calc(10% + ${floatY1}px)`,
          fontSize: "60px",
          opacity: 0.2,
          transform: `rotate(${rotation1}deg)`,
        }}
      >
        🏗️
      </div>
      <div
        style={{
          position: "absolute",
          right: "-20px",
          bottom: `calc(15% + ${floatY2}px)`,
          fontSize: "70px",
          opacity: 0.18,
          transform: `rotate(${rotation2}deg)`,
        }}
      >
        🔧
      </div>

      {/* Conteúdo principal */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            opacity: titleOpacity,
            transform: `scale(${titleScale}) translateY(${titleY}px)`,
            maxWidth: "95%",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              fontWeight: 900,
              color: "white",
              marginBottom: "20px",
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.4), 0 0 40px rgba(255, 215, 0, 0.3)",
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
            }}
          >
            {title}
          </h1>
        </div>

        <div
          style={{
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleY}px)`,
            maxWidth: "90%",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.95)",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.4)",
              lineHeight: 1.4,
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Badge animado com pulse */}
        <div
          style={{
            marginTop: "35px",
            backgroundColor: "#FFD700",
            color: "#000",
            padding: "12px 25px",
            borderRadius: "50px",
            fontSize: "16px",
            fontWeight: 800,
            opacity: badgePulse,
            transform: `scale(${badgeScale})`,
            boxShadow: "0 6px 20px rgba(255, 215, 0, 0.4), 0 0 40px rgba(255, 215, 0, 0.2)",
            border: "2px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          ✨ +100 mil profissionais ✨
        </div>
      </AbsoluteFill>

      {/* Footer com informações adicionais - animação melhorada */}
      <AbsoluteFill
        style={{
          bottom: 60,
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            opacity: cardsOpacity,
            transform: `translateY(${cardsY}px)`,
          }}
        >
          {[
            { text: "✓ Instituição reconhecida", delay: 0 },
            { text: "✓ Certificação nacional", delay: 5 },
            { text: "✓ Cursos práticos", delay: 10 },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.18)",
                backdropFilter: "blur(15px)",
                padding: "12px 20px",
                borderRadius: "10px",
                color: "white",
                fontSize: "15px",
                fontWeight: 700,
                opacity: spring({
                  frame: frame - 65 - card.delay,
                  fps,
                  config: { damping: 12, stiffness: 100 },
                }),
                transform: `translateY(${interpolate(frame, [60 + card.delay, 85 + card.delay], [15, 0], {
                  extrapolateRight: "clamp",
                })}px)`,
                boxShadow: "0 3px 15px rgba(0, 0, 0, 0.3)",
                border: "2px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              {card.text}
            </div>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
