import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const HeroVideo = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animação de entrada do título - mais dinâmica
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

  const titleY = interpolate(frame, [0, 25], [50, 0], {
    extrapolateRight: "clamp",
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
  });

  // Animação de pulse no badge
  const badgePulse = spring({
    frame: frame - 40,
    fps,
    config: { damping: 8, stiffness: 100 },
  });

  const badgeScale = 1 + Math.sin(frame * 0.15) * 0.05;

  // Animação de zoom do background
  const bgScale = interpolate(frame, [0, 150], [1, 1.1], {
    extrapolateRight: "clamp",
  });

  const bgOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Elementos flutuantes com movimento mais fluido
  const floatY1 = Math.sin(frame * 0.08) * 30;
  const floatY2 = Math.sin(frame * 0.06 + 1.5) * 35;
  const floatY3 = Math.sin(frame * 0.07 + 3) * 25;

  // Animação de rotação dos ícones
  const rotation1 = frame * 0.8;
  const rotation2 = -frame * 0.5;
  const rotation3 = frame * 0.6;

  // Partículas com movimento mais interessante
  const particles = Array.from({ length: 30 }, (_, i) => {
    const delay = i * 2;
    const opacity = spring({
      frame: frame - delay,
      fps,
      config: { damping: 25, stiffness: 100 },
    });

    const angle = (i / 30) * Math.PI * 2;
    const radius = 200 + Math.sin(frame * 0.05 + i) * 50;
    const x = 960 + Math.cos(angle) * radius;
    const y = 540 + Math.sin(angle) * radius;

    return {
      x,
      y: y + Math.sin(frame * 0.03 + i * 0.2) * 30,
      opacity: Math.max(0, Math.min(1, opacity)) * 0.8,
      scale: 1 + Math.sin(frame * 0.1 + i) * 0.3,
    };
  });

  // Linhas de construção com movimento mais dinâmico
  const line1X = interpolate(frame, [0, 150], [-200, 2120], {
    extrapolateRight: "clamp",
  });
  const line2X = interpolate(frame, [0, 150], [2120, -200], {
    extrapolateRight: "clamp",
  });

  // Cards de informações com animação
  const cardsOpacity = spring({
    frame: frame - 60,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const cardsY = interpolate(frame, [55, 80], [40, 0], {
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

      {/* Overlay com textura de construção mais detalhada */}
      <AbsoluteFill
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 100px,
              rgba(255, 215, 0, 0.05) 100px,
              rgba(255, 215, 0, 0.05) 102px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 100px,
              rgba(255, 215, 0, 0.05) 100px,
              rgba(255, 215, 0, 0.05) 102px
            )
          `,
          backgroundSize: "200px 200px",
          animation: "scroll 20s linear infinite",
        }}
      />

      {/* Círculos decorativos animados */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%)",
          left: -200,
          top: -200,
          transform: `scale(${1 + Math.sin(frame * 0.03) * 0.1})`,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 136, 255, 0.15) 0%, transparent 70%)",
          right: -150,
          bottom: -150,
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
            width: `${4 + i % 3}px`,
            height: `${4 + i % 3}px`,
            backgroundColor: i % 2 === 0 ? "#FFD700" : "#FFFFFF",
            borderRadius: "50%",
            opacity: particle.opacity * 0.7,
            transform: `scale(${particle.scale})`,
            boxShadow: "0 0 10px rgba(255, 215, 0, 0.5)",
          }}
        />
      ))}

      {/* Elementos flutuantes - Ícones de construção com movimento melhorado */}
      <div
        style={{
          position: "absolute",
          left: "5%",
          top: `calc(15% + ${floatY1}px)`,
          fontSize: "100px",
          opacity: 0.25,
          transform: `rotate(${rotation1}deg)`,
          filter: "blur(1px)",
        }}
      >
        🏗️
      </div>
      <div
        style={{
          position: "absolute",
          right: "8%",
          top: `calc(25% + ${floatY2}px)`,
          fontSize: "120px",
          opacity: 0.2,
          transform: `rotate(${rotation2}deg)`,
          filter: "blur(1px)",
        }}
      >
        🔧
      </div>
      <div
        style={{
          position: "absolute",
          left: "15%",
          bottom: `calc(20% + ${floatY3}px)`,
          fontSize: "110px",
          opacity: 0.22,
          transform: `rotate(${rotation3}deg)`,
          filter: "blur(1px)",
        }}
      >
        ⚡
      </div>

      {/* Ícones adicionais */}
      <div
        style={{
          position: "absolute",
          right: "20%",
          bottom: "15%",
          fontSize: "90px",
          opacity: spring({
            frame: frame - 30,
            fps,
            config: { damping: 15, stiffness: 100 },
          }) * 0.2,
          transform: `rotate(${Math.sin(frame * 0.05) * 20}deg)`,
        }}
      >
        📐
      </div>
      <div
        style={{
          position: "absolute",
          left: "8%",
          bottom: "35%",
          fontSize: "85px",
          opacity: spring({
            frame: frame - 35,
            fps,
            config: { damping: 15, stiffness: 100 },
          }) * 0.18,
          transform: `rotate(${-Math.sin(frame * 0.06) * 15}deg)`,
        }}
      >
        🏠
      </div>

      {/* Linhas de construção animadas */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.15,
        }}
      >
        <defs>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFD700" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1={line1X} y1="15%" x2={line1X + 300} y2="85%" stroke="url(#lineGrad1)" strokeWidth="3" />
        <line x1={line2X} y1="25%" x2={line2X - 300} y2="75%" stroke="url(#lineGrad1)" strokeWidth="3" />
        <line
          x1={interpolate(frame, [0, 150], [960, 0], { extrapolateRight: "clamp" })}
          y1="50%"
          x2={interpolate(frame, [0, 150], [960, 1920], { extrapolateRight: "clamp" })}
          y2="50%"
          stroke="#FFD700"
          strokeWidth="1"
          opacity="0.1"
        />
      </svg>

      {/* Conteúdo principal */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            opacity: titleOpacity,
            transform: `scale(${titleScale}) translateY(${titleY}px)`,
            maxWidth: "85%",
          }}
        >
          <h1
            style={{
              fontSize: "76px",
              fontWeight: 900,
              color: "white",
              marginBottom: "30px",
              textShadow: "0 6px 30px rgba(0, 0, 0, 0.4), 0 0 60px rgba(255, 215, 0, 0.3)",
              lineHeight: 1.15,
              letterSpacing: "-1px",
            }}
          >
            {title}
          </h1>
        </div>

        <div
          style={{
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleY}px)`,
            maxWidth: "75%",
          }}
        >
          <p
            style={{
              fontSize: "38px",
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.95)",
              textShadow: "0 3px 15px rgba(0, 0, 0, 0.4)",
              lineHeight: 1.4,
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Badge animado com pulse */}
        <div
          style={{
            marginTop: "55px",
            backgroundColor: "#FFD700",
            color: "#000",
            padding: "18px 45px",
            borderRadius: "50px",
            fontSize: "26px",
            fontWeight: 800,
            opacity: badgePulse,
            transform: `scale(${badgeScale})`,
            boxShadow: "0 8px 30px rgba(255, 215, 0, 0.4), 0 0 60px rgba(255, 215, 0, 0.2)",
            border: "3px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          ✨ +100 mil profissionais formados desde 2011 ✨
        </div>
      </AbsoluteFill>

      {/* Footer com informações adicionais - animação melhorada */}
      <AbsoluteFill
        style={{
          bottom: 80,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "30px",
            opacity: cardsOpacity,
            transform: `translateY(${cardsY}px)`,
          }}
        >
          {[
            { text: "✓ Instituição reconhecida", delay: 0 },
            { text: "✓ Certificação válida nacionalmente", delay: 5 },
            { text: "✓ Cursos práticos", delay: 10 },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.18)",
                backdropFilter: "blur(15px)",
                padding: "16px 28px",
                borderRadius: "12px",
                color: "white",
                fontSize: "20px",
                fontWeight: 700,
                opacity: spring({
                  frame: frame - 65 - card.delay,
                  fps,
                  config: { damping: 12, stiffness: 100 },
                }),
                transform: `translateY(${interpolate(frame, [60 + card.delay, 85 + card.delay], [20, 0], {
                  extrapolateRight: "clamp",
                })}px)`,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
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
