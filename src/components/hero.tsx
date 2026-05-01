"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return (
        <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden bg-background">

            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 dark:bg-primary/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 dark:bg-accent/10 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left"
                >
                    <span className="inline-block py-1.5 px-4 bg-primary/10 text-primary font-heading font-semibold text-sm mb-6 border border-primary/20">
                        🍯 100% Tự Nhiên & Nguyên Bản
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-foreground tracking-tight">
                        Vị Ngọt Mộc Mạc <br />
                        <span className="text-primary italic font-normal">Từ Đại Ngàn</span>
                    </h1>
                    <p className="text-base md:text-lg text-foreground/80 dark:text-foreground/70 mb-8 max-w-2xl mx-auto lg:mx-0">
                        Khám phá hương vị mật ong rừng nguyên bản, được thu hoạch thủ công từ những cánh rừng già, giữ trọn vẹn dưỡng chất thô không qua chế biến công nghiệp.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start font-heading">
                        <Link
                            href="#products"
                            className="px-8 py-3 bg-foreground text-background font-semibold text-lg hover:bg-foreground/90 transition-colors border border-foreground rounded-sm"
                        >
                            Đặt Mua Ngay
                        </Link>
                        <Link
                            href="#about"
                            className="px-8 py-3 bg-transparent border-2 border-foreground/20 text-foreground font-semibold text-lg hover:border-foreground/50 transition-colors rounded-sm"
                        >
                            Tìm Hiểu Thêm
                        </Link>
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative w-full aspect-[4/3]">
                        {/* Main Hero Image */}
                        <Image
                            src="/assets/images/heroes-img/hero-img-1.png"
                            alt="Mật ong rừng nguyên bản"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-contain z-10"
                            priority
                        />
                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 w-24 h-24 bg-card rounded-md shadow-sm border border-border flex items-center justify-center z-20"
                        >
                            <div className="text-center font-heading">
                                <span className="block text-2xl font-bold text-primary">100%</span>
                                <span className="text-xs font-semibold text-foreground/80 uppercase tracking-widest">THÔ</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
