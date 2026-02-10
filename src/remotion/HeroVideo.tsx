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

  // Animação de entrada do título
  const titleOpacity = spring({
    frame: frame - 10,
    fps,
    config: {
      damping: 15,
      stiffness: 100,
    },
  });

  const titleScale = spring({
    frame: frame - 10,
    fps,
    config: {
      damping: 15,
      stiffness: 80,
    },
  });

  // Animação de entrada do subtítulo
  const subtitleOpacity = spring({
    frame: frame - 30,
    fps,
    config: {
      damping: 15,
      stiffness: 100,
    },
  });

  // Animação de fade-in do background
  const bgOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Animação de elementos flutuantes (ferramentas/construção)
  const floatY1 = Math.sin(frame * 0.05) * 20;
  const floatY2 = Math.sin(frame * 0.05 + 1) * 25;
  const floatY3 = Math.sin(frame * 0.05 + 2) * 15;

  // Animação de partículas/construção
  const particles = Array.from({ length: 20 }, (_, i) => {
    const delay = i * 3;
    const opacity = spring({
      frame: frame - delay,
      fps,
      config: { damping: 20, stiffness: 100 },
    });
    const x = (i * 100) % 1920;
    const y = (i * 50) % 1080;
    const scale = interpolate(opacity, [0, 1], [0, 1]);

    return {
      x,
      y: y + interpolate(frame, [0, 150], [0, -200], { extrapolateRight: "clamp" }),
      opacity: Math.max(0, Math.min(1, opacity)),
      scale,
    };
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0066CC" }}>
      {/* Background com gradiente animado */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(135deg,
            rgba(0, 68, 153, ${bgOpacity}) 0%,
            rgba(0, 102, 204, ${bgOpacity}) 50%,
            rgba(0, 136, 255, ${bgOpacity}) 100%)`,
        }}
      />

      {/* Overlay com textura de construção */}
      <AbsoluteFill
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 50px,
              rgba(255, 215, 0, 0.03) 50px,
              rgba(255, 215, 0, 0.03) 51px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 50px,
              rgba(255, 215, 0, 0.03) 50px,
              rgba(255, 215, 0, 0.03) 51px
            )
          `,
        }}
      />

      {/* Partículas animadas (representando construção/obras) */}
      {particles.map((particle, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: particle.x,
            top: particle.y,
            width: "4px",
            height: "4px",
            backgroundColor: "#FFD700",
            borderRadius: "50%",
            opacity: particle.opacity * 0.6,
            transform: `scale(${particle.scale})`,
          }}
        />
      ))}

      {/* Elementos flutuantes - Ícones de construção */}
      <div
        style={{
          position: "absolute",
          left: "10%",
          top: `calc(20% + ${floatY1}px)`,
          fontSize: "80px",
          opacity: 0.2,
          transform: `rotate(${frame * 0.5}deg)`,
        }}
      >
        🏗️
      </div>
      <div
        style={{
          position: "absolute",
          right: "15%",
          top: `calc(30% + ${floatY2}px)`,
          fontSize: "100px",
          opacity: 0.15,
          transform: `rotate(-${frame * 0.3}deg)`,
        }}
      >
        🔧
      </div>
      <div
        style={{
          position: "absolute",
          left: "20%",
          bottom: `calc(25% + ${floatY3}px)`,
          fontSize: "90px",
          opacity: 0.18,
          transform: `rotate(${frame * 0.4}deg)`,
        }}
      >
        ⚡
      </div>

      {/* Linhas de construção animadas */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.1,
        }}
      >
        <line
          x1={interpolate(frame, [0, 150], [-100, 2020], { extrapolateRight: "clamp" })}
          y1="20%"
          x2={interpolate(frame, [0, 150], [-100, 2020], { extrapolateRight: "clamp" }) + 200}
          y2="80%"
          stroke="#FFD700"
          strokeWidth="2"
        />
        <line
          x1={interpolate(frame, [0, 150], [2020, -100], { extrapolateRight: "clamp" })}
          y1="30%"
          x2={interpolate(frame, [0, 150], [2020, -100], { extrapolateRight: "clamp" }) - 200}
          y2="70%"
          stroke="#FFD700"
          strokeWidth="2"
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
            transform: `scale(${titleScale})`,
            maxWidth: "80%",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "white",
              marginBottom: "30px",
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
              lineHeight: 1.2,
            }}
          >
            {title}
          </h1>
        </div>

        <div
          style={{
            opacity: subtitleOpacity,
            maxWidth: "70%",
          }}
        >
          <p
            style={{
              fontSize: "36px",
              color: "rgba(255, 255, 255, 0.9)",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Badge animado */}
        <div
          style={{
            marginTop: "50px",
            backgroundColor: "#FFD700",
            color: "#000",
            padding: "15px 40px",
            borderRadius: "50px",
            fontSize: "24px",
            fontWeight: "bold",
            opacity: spring({
              frame: frame - 50,
              fps,
              config: { damping: 15, stiffness: 100 },
            }),
            transform: `scale(${spring({
              frame: frame - 50,
              fps,
              config: { damping: 15, stiffness: 80 },
            })})`,
          }}
        >
          +100 mil profissionais formados desde 2011
        </div>
      </AbsoluteFill>

      {/* Footer com informações adicionais */}
      <AbsoluteFill
        style={{
          bottom: 60,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "40px",
            opacity: spring({
              frame: frame - 70,
              fps,
              config: { damping: 15, stiffness: 100 },
            }),
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(10px)",
              padding: "15px 25px",
              borderRadius: "10px",
              color: "white",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            ✓ Instituição reconhecida
          </div>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(10px)",
              padding: "15px 25px",
              borderRadius: "10px",
              color: "white",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            ✓ Certificação válida nacionalmente
          </div>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(10px)",
              padding: "15px 25px",
              borderRadius: "10px",
              color: "white",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            ✓ Cursos práticos
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
