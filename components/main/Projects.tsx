"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <section
    id="projects"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80  py-20"
      style={{ transform: "scale(0.9)" }}
    >

      <div className=" flex flex-col items-center justify-center py-20 ">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Projects
        </h1>
        <div className="h-full w-full flex-col flex md:flex-row gap-10 px-10">
          <ProjectCard
            src="/NextWebsite.png"
            title="Modern Next.js Portfolio"
            description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, modi."
          />
          <ProjectCard
            src="/CardImage.png"
            title="Interactive Website Cards"
            description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, modi."
          />
          <ProjectCard
            src="/SpaceWebsite.png"
            title="Space Theme"
            description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, modi."
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
