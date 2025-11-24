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
                    <span className="inline-block py-2 px-4 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary font-bold text-sm mb-6 border border-primary/20 dark:border-primary/30 shadow-sm">
                        🍯 100% Tự Nhiên & Nguyên Chất
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight text-foreground">
                        Vị Ngọt Tinh Khiết <br />
                        <span className="text-primary drop-shadow-sm">Từ Thiên Nhiên</span>
                    </h1>
                    <p className="text-base md:text-lg text-foreground/80 dark:text-foreground/70 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        Khám phá hương vị mật ong rừng nguyên chất, được thu hoạch thủ công và giữ trọn vẹn dưỡng chất quý giá cho sức khỏe gia đình bạn.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link
                            href="#products"
                            className="px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white rounded-full font-bold text-lg hover:from-amber-500 hover:via-amber-600 hover:to-amber-700 transition-all hover:scale-105 shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2"
                        >
                            Đặt Mua Ngay
                        </Link>
                        <Link
                            href="#about"
                            className="px-8 py-4 bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/50 dark:to-amber-800/50 border-2 border-amber-300 dark:border-amber-600 text-amber-900 dark:text-amber-200 rounded-full font-bold text-lg hover:from-amber-100 hover:to-amber-200 dark:hover:from-amber-800/60 dark:hover:to-amber-700/60 transition-all hover:scale-105 shadow-md"
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
                            alt="Mật ong nguyên chất HoneyBlume"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-contain drop-shadow-2xl z-10"
                            priority
                        />
                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl shadow-xl flex items-center justify-center z-20 border-2 border-white dark:border-amber-200"
                        >
                            <div className="text-center">
                                <span className="block text-2xl font-bold text-white">100%</span>
                                <span className="text-xs font-bold text-white/90">Organic</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
