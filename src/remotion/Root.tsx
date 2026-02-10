import { Composition } from "remotion";
import { HeroVideo } from "./HeroVideo";
import { HeroVideoMobile } from "./HeroVideoMobile";
import { ConstructionAnimation } from "./ConstructionAnimation";
import { CourseCardAnimation } from "./CourseCardAnimation";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="hero-video"
        component={HeroVideo}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          title: "Profissionalize-se na Construção Civil",
          subtitle: "Cursos completos e certificação oficial em todo o Brasil",
        }}
      />
      <Composition
        id="hero-video-mobile"
        component={HeroVideoMobile}
        durationInFrames={180}
        fps={30}
        width={540}
        height={960}
        defaultProps={{
          title: "Profissionalize-se na Construção Civil",
          subtitle: "Cursos completos e certificação oficial em todo o Brasil",
        }}
      />
      <Composition
        id="construction-animation"
        component={ConstructionAnimation}
        durationInFrames={150}
        fps={30}
        width={400}
        height={300}
      />
      <Composition
        id="course-card-animation"
        component={CourseCardAnimation}
        durationInFrames={120}
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
