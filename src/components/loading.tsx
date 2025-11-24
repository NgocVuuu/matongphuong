"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import beeImg from "@/assets/images/bee.png";
import logoLight from "@/assets/images/logo-light.png";

export function Loading() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Hide loading after 2 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200"
            style={{ pointerEvents: isLoading ? "auto" : "none" }}
        >
            {/* Honeycomb Pattern Background */}
            <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="hexagons" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
                            <polygon points="28,0 56,16 56,50 28,66 0,50 0,16" fill="none" stroke="#f59e0b" strokeWidth="1" />
                            <polygon points="28,66 56,82 56,116 28,132 0,116 0,82" fill="none" stroke="#f59e0b" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hexagons)" />
                </svg>
            </div>

            {/* Animated Logo and Orbiting Bees */}
            <div className="relative z-10 flex flex-col items-center">
                {/* Main Logo */}
                <div className="relative w-96 h-96 md:w-[28rem] md:h-[28rem] mb-8">
                    {/* Central Logo */}
                    <motion.div
                        animate={{
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="relative w-full h-full flex items-center justify-center"
                    >
                        <Image
                            src={logoLight}
                            alt="MAT ONG PHUONG"
                            className="object-contain w-full h-auto"
                            priority
                        />
                    </motion.div>

                    {/* Orbiting Bee 1 - Top */}
                    <motion.div
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute inset-0"
                    >
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                                rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12"
                        >
                            <Image
                                src={beeImg}
                                alt="Bee"
                                className="object-contain w-full h-auto"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Orbiting Bee 2 - Bottom Right */}
                    <motion.div
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute inset-0"
                    >
                        <motion.div
                            animate={{
                                y: [0, 10, 0],
                                rotate: [0, -15, 15, 0],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5,
                            }}
                            className="absolute bottom-4 right-4 w-10 h-10"
                        >
                            <Image
                                src={beeImg}
                                alt="Bee"
                                className="object-contain w-full h-auto scale-x-[-1]"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Orbiting Bee 3 - Bottom Left */}
                    <motion.div
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute inset-0"
                    >
                        <motion.div
                            animate={{
                                x: [0, 5, 0],
                                y: [0, -5, 0],
                                rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                                duration: 2.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1,
                            }}
                            className="absolute bottom-4 left-4 w-10 h-10"
                        >
                            <Image
                                src={beeImg}
                                alt="Bee"
                                className="object-contain w-full h-auto"
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Loading Text */}
                <motion.p
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-amber-800 font-bold text-lg md:text-xl font-heading"
                >
                    Đang tải trang Mật Ong Phượng...
                </motion.p>
            </div>
        </motion.div>
    );
}
