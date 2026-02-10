import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const CourseCardAnimation = ({
  courseTitle,
  courseImage,
}: { courseTitle: string; courseImage: string }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animação de entrada do card
  const cardOpacity = spring({
    frame,
    fps,
    config: {
      damping: 15,
      stiffness: 100,
    },
  });

  const cardScale = spring({
    frame,
    fps,
    config: {
      damping: 15,
      stiffness: 80,
    },
  });

  const cardY = interpolate(frame, [0, 30], [100, 0], {
    extrapolateRight: "clamp",
  });

  // Animação da imagem
  const imageScale = spring({
    frame: frame - 15,
    fps,
    config: {
      damping: 15,
      stiffness: 90,
    },
  });

  // Animação do texto
  const titleOpacity = spring({
    frame: frame - 20,
    fps,
    config: {
      damping: 15,
      stiffness: 100,
    },
  });

  // Animação do botão
  const buttonOpacity = spring({
    frame: frame - 35,
    fps,
    config: {
      damping: 15,
      stiffness: 100,
    },
  });

  const buttonScale = spring({
    frame: frame - 35,
    fps,
    config: {
      damping: 15,
      stiffness: 80,
    },
  });

  // Animação de brilho/efeito glow
  const glowOpacity = interpolate(
    frame,
    [40, 50, 70, 80],
    [0, 1, 1, 0],
    { extrapolateRight: "clamp" }
  );

  // Animação de ícones flutuantes
  const floatY = Math.sin(frame * 0.1) * 10;

  return (
    <AbsoluteFill style={{ backgroundColor: "transparent" }}>
      {/* Card container */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "500px",
            backgroundColor: "white",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            opacity: cardOpacity,
            transform: `scale(${cardScale}) translateY(${cardY}px)`,
          }}
        >
          {/* Imagem do curso */}
          <div
            style={{
              position: "relative",
              height: "200px",
              overflow: "hidden",
              backgroundColor: "#E2E8F0",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${courseImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: `scale(${imageScale})`,
              }}
            />

            {/* Overlay gradiente */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
              }}
            />

            {/* Badge */}
            <div
              style={{
                position: "absolute",
                top: "15px",
                left: "15px",
                backgroundColor: "#FFD700",
                color: "#000",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "bold",
                opacity: titleOpacity,
              }}
            >
              Curso Profissionalizante
            </div>
          </div>

          {/* Conteúdo do card */}
          <div style={{ padding: "25px" }}>
            {/* Título */}
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#1A202C",
                marginBottom: "12px",
                opacity: titleOpacity,
              }}
            >
              {courseTitle}
            </h3>

            {/* Descrição */}
            <p
              style={{
                fontSize: "16px",
                color: "#718096",
                marginBottom: "20px",
                opacity: titleOpacity,
              }}
            >
              Aprenda na prática com instrutores experientes e receba
              certificação reconhecida em todo o Brasil.
            </p>

            {/* Features */}
            <div
              style={{
                display: "flex",
                gap: "15px",
                marginBottom: "20px",
                opacity: titleOpacity,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "14px",
                  color: "#4A5568",
                }}
              >
                <span style={{ color: "#0066CC" }}>✓</span> Prático
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "14px",
                  color: "#4A5568",
                }}
              >
                <span style={{ color: "#0066CC" }}>✓</span> Certificado
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "14px",
                  color: "#4A5568",
                }}
              >
                <span style={{ color: "#0066CC" }}>✓</span> Iniciantes
              </div>
            </div>

            {/* Botão */}
            <div
              style={{
                backgroundColor: "#0066CC",
                color: "white",
                padding: "15px 30px",
                borderRadius: "10px",
                textAlign: "center",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
                opacity: buttonOpacity,
                transform: `scale(${buttonScale})`,
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              Quero este curso
              <span style={{ transform: `translateX(${floatY}px)` }}>→</span>
            </div>
          </div>

          {/* Efeito de brilho */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(45deg, transparent, rgba(255, 215, 0, 0.3), transparent)",
              opacity: glowOpacity,
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* Elementos decorativos - ícones de ferramentas */}
      <div
        style={{
          position: "absolute",
          left: "30px",
          top: `calc(50% + ${floatY}px)`,
          fontSize: "40px",
          opacity: spring({
            frame: frame - 25,
            fps,
            config: { damping: 15, stiffness: 100 },
          }),
        }}
      >
        🔧
      </div>
      <div
        style={{
          position: "absolute",
          right: "30px",
          top: `calc(40% - ${floatY}px)`,
          fontSize: "40px",
          opacity: spring({
            frame: frame - 30,
            fps,
            config: { damping: 15, stiffness: 100 },
          }),
        }}
      >
        ⚡
      </div>
      <div
        style={{
          position: "absolute",
          left: "50px",
          bottom: "40px",
          fontSize: "35px",
          opacity: spring({
            frame: frame - 35,
            fps,
            config: { damping: 15, stiffness: 100 },
          }),
        }}
      >
        📐
      </div>
    </AbsoluteFill>
  );
};
