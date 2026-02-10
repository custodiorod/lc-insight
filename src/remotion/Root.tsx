import { Composition } from "remotion";
import { HeroVideo } from "./HeroVideo";
import { ConstructionAnimation } from "./ConstructionAnimation";
import { CourseCardAnimation } from "./CourseCardAnimation";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="hero-video"
        component={HeroVideo}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          title: "Profissionalize-se na Construção Civil",
          subtitle: "Cursos completos e certificação oficial em todo o Brasil",
        }}
      />
      <Composition
        id="construction-animation"
        component={ConstructionAnimation}
        durationInFrames={120}
        fps={30}
        width={400}
        height={300}
      />
      <Composition
        id="course-card-animation"
        component={CourseCardAnimation}
        durationInFrames={90}
        fps={30}
        width={600}
        height={400}
        defaultProps={{
          courseTitle: "Eletricista Instalador",
          courseImage: "/course-eletricista.png",
        }}
      />
    </>
  );
};
