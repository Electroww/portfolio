"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Project {
  id: string;
  title: string;
  description: string;
  color?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Data Scout",
    description:
      "AI multi-agent that find data sources on the web and transform them into csv files.",
  },
  {
    id: "2",
    title: "Lolesport overlay extract",
    description: "OCR tool to extract data from Lolesport overlays",
  },
  {
    id: "3",
    title: "HTML parser",
    description: "Simple HTML parser written to practice Rust",
  },
  {
    id: "4",
    title: "Godot project",
    description: "2D isometric looter shooter game made with Godot",
  },
];

export default function StackedProjects() {
  const [stack, setStack] = useState(projects);

  const handleCardClick = (clickedId: string) => {
    const clickedIndex = stack.findIndex((p) => p.id === clickedId);
    if (clickedIndex === 0) return; // Already on top

    const newStack = [...stack];
    const [clickedProject] = newStack.splice(clickedIndex, 1);
    newStack.unshift(clickedProject);
    setStack(newStack);
  };

  return (
    <div>
      {/* Label */}
      <div className="mb-3">
        <span className="text-xs text-foreground/40 font-mono uppercase tracking-wider">
          Other Projects
        </span>
      </div>

      {/* Card Stack */}
      <div className="relative h-38 lg:h-0 cursor-pointer">
        <div className="absolute inset-0">
          <AnimatePresence mode="popLayout">
            {stack.map((project, index) => (
              <motion.div
                key={project.id}
                layoutId={project.id}
                initial={{
                  scale: 1 - index * 0.03,
                  y: index * 25,
                  x: index * 2,
                  opacity: index < 4 ? 1 : 0,
                }}
                animate={{
                  scale: 1 - index * 0.03,
                  y: index * 25,
                  x: index * 2,
                  opacity: index < 4 ? 1 : 0,
                  zIndex: stack.length - index,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  },
                }}
                whileHover={
                  index !== 0
                    ? {
                        scale: (1 - index * 0.03) * 1.02,
                        y: index * 25 + 8,
                        x: index,
                      }
                    : {}
                }
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(project.id);
                }}
                className={`absolute top-0 h-20 left-0 right-0
                  overflow-hidden
                  ${index === 0 ? "shadow-xl" : "shadow-lg"}`}
                style={{
                  pointerEvents: index < 4 ? "auto" : "none",
                }}
              >
                {/* Background layer - opaque */}
                <div className="absolute inset-0 bg-background border-background border-1 rounded" />

                {/* Color overlay with opacity */}
                <div className="absolute inset-0 bg-foreground/3 border-1 border-foreground/20 rounded" />

                {/* Content */}
                <div className="relative h-full p-3 flex flex-col justify-center hover:bg-foreground/2">
                  <h3 className="font-title text-sm mb-2">{project.title}</h3>
                  <p className="text-foreground/60 text-xs">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Shadow effect for depth */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-2 bg-foreground/10 blur-2xl rounded-full" />
        </div>
      </div>
    </div>
  );
}
