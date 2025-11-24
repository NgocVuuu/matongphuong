"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
    variant?: "drip" | "wave" | "hexagon";
    flip?: boolean;
}

export function SectionDivider({ variant = "drip", flip = false }: SectionDividerProps) {
    if (variant === "drip") {
        return (
            <div className={`relative h-12 md:h-16 overflow-hidden ${flip ? "rotate-180" : ""}`}>
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="absolute bottom-0 w-full h-full"
                >
                    <defs>
                        <linearGradient id="honeyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#fbbf24" />
                            <stop offset="100%" stopColor="#f59e0b" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,0 C150,60 350,0 600,40 C850,80 1050,20 1200,60 L1200,120 L0,120 Z"
                        fill="url(#honeyGradient)"
                        opacity="0.3"
                    />
                    <path
                        d="M0,20 C200,80 400,20 600,60 C800,100 1000,40 1200,80 L1200,120 L0,120 Z"
                        fill="url(#honeyGradient)"
                        opacity="0.5"
                    />
                    <path
                        d="M0,40 C250,100 450,40 600,80 C750,120 950,60 1200,100 L1200,120 L0,120 Z"
                        fill="url(#honeyGradient)"
                    />
                </svg>
            </div>
        );
    }

    if (variant === "wave") {
        return (
            <div className={`relative h-12 md:h-16 overflow-hidden ${flip ? "rotate-180" : ""}`}>
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="absolute bottom-0 w-full h-full"
                >
                    <path
                        d="M0,60 C300,100 900,20 1200,60 L1200,120 L0,120 Z"
                        fill="#fbbf24"
                        opacity="0.2"
                    />
                    <path
                        d="M0,80 C300,120 900,40 1200,80 L1200,120 L0,120 Z"
                        fill="#f59e0b"
                        opacity="0.3"
                    />
                </svg>
            </div>
        );
    }

    // Hexagon variant
    return (
        <div className="relative h-8 md:h-12 flex items-center justify-center gap-1 md:gap-2 overflow-hidden">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 0.3, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="w-4 h-4 md:w-6 md:h-6"
                >
                    <svg viewBox="0 0 24 24" className="text-amber-500">
                        <polygon
                            points="12,2 20,7 20,17 12,22 4,17 4,7"
                            fill="currentColor"
                        />
                    </svg>
                </motion.div>
            ))}
        </div>
    );
}
