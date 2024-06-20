import React from "react";
import {
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiMui,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiVisualstudiocode,
} from "react-icons/si";
import { useAnimate } from "framer-motion";
import { Box, Container, Typography } from "@mui/material";
// const Example = () => {
//   return (
//     <div className="bg-neutral-50 px-4 py-12">
//       <div className="mx-auto max-w-7xl">
//         <ClipPathLinks />
//       </div>
//     </div>
//   );
// };
const Skills = ({ mode }) => {
  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Skills and Technology
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Quickly build an effective pricing table for your potential customers
          with this layout. <br />
          It&apos;s built with default Material UI components with little
          customization.
        </Typography>
      </Box>{" "}
      <div className="divide-y w-screen divide-neutral-900 border border-neutral-900">
        <div className="grid grid-cols-2 divide-x divide-neutral-900">
          <LinkBox mode={mode} Icon={SiHtml5} href="#" name={"html5"} />
          <LinkBox mode={mode} Icon={SiCss3} href="#" name={"css3"} />
        </div>
        <div className="grid grid-cols-3 divide-x divide-neutral-900">
          <LinkBox mode={mode} Icon={SiExpress} href="#" name={"express"} />
          <LinkBox mode={mode} Icon={SiMongodb} href="#" name={"mongo db"} />
          <LinkBox mode={mode} Icon={SiMongoose} href="#" name={"mongoose"} />
        </div>{" "}
        <div className="grid grid-cols-4 divide-x divide-neutral-900">
          <LinkBox
            mode={mode}
            Icon={SiJavascript}
            href="#"
            name={"javascript"}
          />
          <LinkBox mode={mode} Icon={SiReact} href="#" name={"react js"} />
          <LinkBox mode={mode} Icon={SiRedux} href="#" name={"redux"} />
          <LinkBox mode={mode} Icon={SiNodedotjs} href="#" name={"node js"} />
        </div>
        <div className="grid grid-cols-3 divide-x divide-neutral-900">
          <LinkBox
            mode={mode}
            Icon={SiTailwindcss}
            href="#"
            name={"tailwind css"}
          />
          <LinkBox mode={mode} Icon={SiMui} href="#" name={"material ui"} />
          <LinkBox mode={mode} Icon={SiGit} href="#" name={"git"} />
        </div>
        <div className="grid grid-cols-2 divide-x divide-neutral-900">
          <LinkBox mode={mode} Icon={SiGithub} href="#" name={"github"} />
          <LinkBox
            mode={mode}
            Icon={SiVisualstudiocode}
            href="#"
            name={"vs code"}
          />
        </div>
      </div>
    </Container>
  );
};
const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";
const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};
const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};
const LinkBox = ({ Icon, href, name, mode }) => {
  const [scope, animate] = useAnimate();
  const getNearestSide = (e) => {
    const box = e.target.getBoundingClientRect();
    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };
    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);
    return sortedProximity[0].side;
  };
  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };
  const handleMouseLeave = (e) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <div
      href={href}
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      className={`relative cursor-pointer  flex flex-col items-center ${
        mode === "light" ? "bg-white text-neutral-900" : " bg-zinc-950"
      }  justify-center gap-1 h-20 w-full place-content-center sm:h-28 md:h-36`}
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl" />
      <p className=" uppercase text-xs sm:text-base ">{name}</p>

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className={`absolute inset-0 flex flex-col items-center justify-center gap-1 place-content-center ${
          mode === "light"
            ? "bg-neutral-900 text-white"
            : " bg-white text-neutral-900 border-white"
        }`}
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
        <p className=" uppercase text-xs sm:text-base ">{name}</p>
      </div>
    </div>
  );
};
export default Skills;
