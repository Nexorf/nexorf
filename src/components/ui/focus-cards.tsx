"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/shared/utils/utils";
import { TextGenerateEffect } from "./text-generate-effect";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-2xl relative bg-black dark:bg-neutral-900 border border-neutral-800 overflow-hidden h-72 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      {/* Background Image with Gradient Fade */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
         <Image 
            src={card.src || "https://images.unsplash.com/photo-1518710843675-2540dd79065c"} 
            alt={card.title} 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-105" 
         />
         {/* Fade gradient from transparent top to solid background color at bottom */}
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
      </div>

      <div
        className={cn(
          "absolute inset-0 flex flex-col justify-end py-8 px-6 transition-opacity duration-300 z-20",
          hovered === index ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
        <div className="mt-2 text-sm md:text-base text-neutral-300">
           {hovered === index ? (
              <TextGenerateEffect 
                  words={card.hoverDetail || card.description} 
                  duration={0.1}
                  className="font-normal text-sm md:text-base !mt-0 [&>div>div]:text-sm [&>div>div]:md:text-base [&>div]:mt-0 [&>div>div]:font-normal [&>div>div]:text-neutral-300"
              />
           ) : (
              <div aria-hidden="true" className="opacity-0">{card.hoverDetail || card.description}</div>
           )}
        </div>
      </div>
      
      {/* Default view when not hovered */}
      <div
        className={cn(
          "absolute inset-0 flex flex-col justify-end p-6 text-left transition-opacity duration-300 z-10",
          hovered === index ? "opacity-0" : "opacity-100"
        )}
      >
        <div className="mb-4 text-white">
           {card.icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
            {card.title}
        </h3>
        <p className="text-sm text-neutral-300 line-clamp-2 md:line-clamp-3">
            {card.description}
        </p>
      </div>
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: any[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto md:px-4 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
