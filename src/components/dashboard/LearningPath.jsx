import React from "react";
import LearningNode from "./LearningNode";

export function LearningPath({ lang, nodes, onOpen }) {
  return (
    <div className="relative pl-2">
      <div className="relative">
        <div
          className="absolute left-[27px] top-2 bottom-2 w-[3px] rounded-full"
          style={{
            background:
              "repeating-linear-gradient(180deg, var(--marigold) 0 8px, transparent 8px 14px)",
          }}
        />
        <div className="flex flex-col gap-3">
          {nodes.map((n, idx) => (
            <LearningNode
              key={n.id}
              lang={lang}
              node={n}
              index={idx}
              onOpen={onOpen}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LearningPath;
