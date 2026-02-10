import { Player } from "@remotion/player";
import { HeroVideo } from "@/remotion/HeroVideo";
import { ConstructionAnimation } from "@/remotion/ConstructionAnimation";
import { CourseCardAnimation } from "@/remotion/CourseCardAnimation";

interface RemotionHeroPlayerProps {
  title?: string;
  subtitle?: string;
  autoPlay?: boolean;
  loop?: boolean;
  className?: string;
}

export function RemotionHeroPlayer({
  title = "Profissionalize-se na Construção Civil",
  subtitle = "Cursos completos e certificação oficial em todo o Brasil",
  autoPlay = true,
  loop = false,
  className = "",
}: RemotionHeroPlayerProps) {
  return (
    <div className={`w-full ${className}`}>
      <Player
        component={HeroVideo}
        inputProps={{ title, subtitle }}
        durationInFrames={210}
        compositionWidth={1920}
        compositionHeight={1080}
        fps={30}
        autoPlay={autoPlay}
        loop={loop}
        controls={false}
        style={{
          width: "100%",
          aspectRatio: "16/9",
          borderRadius: "1rem",
          overflow: "hidden",
        }}
      />
    </div>
  );
}

interface RemotionConstructionPlayerProps {
  autoPlay?: boolean;
  loop?: boolean;
  className?: string;
}

export function RemotionConstructionPlayer({
  autoPlay = true,
  loop = false,
  className = "",
}: RemotionConstructionPlayerProps) {
  return (
    <div className={`inline-block ${className}`}>
      <Player
        component={ConstructionAnimation}
        durationInFrames={150}
        compositionWidth={400}
        compositionHeight={300}
        fps={30}
        autoPlay={autoPlay}
        loop={loop}
        controls={false}
        style={{
          width: "100%",
          maxWidth: "400px",
          borderRadius: "1rem",
          overflow: "hidden",
        }}
      />
    </div>
  );
}

interface RemotionCourseCardPlayerProps {
  courseTitle: string;
  courseImage: string;
  autoPlay?: boolean;
  loop?: boolean;
  className?: string;
}

export function RemotionCourseCardPlayer({
  courseTitle,
  courseImage,
  autoPlay = false,
  loop = false,
  className = "",
}: RemotionCourseCardPlayerProps) {
  return (
    <div className={`w-full ${className}`}>
      <Player
        component={CourseCardAnimation}
        inputProps={{ courseTitle, courseImage }}
        durationInFrames={120}
        compositionWidth={600}
        compositionHeight={400}
        fps={30}
        autoPlay={autoPlay}
        loop={loop}
        controls={true}
        style={{
          width: "100%",
          borderRadius: "1rem",
          overflow: "hidden",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
        }}
      />
    </div>
  );
}
