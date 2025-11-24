"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import beeImg from "@/assets/images/bee.png";

export function Promotion() {
    return (
        <section className="py-12 md:py-16 bg-background dark:bg-background relative overflow-hidden">

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl" />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white dark:bg-[#2d1b0e] rounded-3xl shadow-2xl overflow-hidden border-4 border-amber-400 dark:border-amber-700">

                    {/* Image Side - Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-900/40 dark:to-amber-950/40 p-6 lg:p-8"
                    >
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative aspect-square max-w-lg mx-auto"
                        >
                            <Image
                                src="/assets/images/about-img/about-img.webp"
                                alt="Ưu Đãi Mật Ong Tươi"
                                fill
                                priority
                                className="object-contain drop-shadow-2xl"
                            />

                            {/* Decorative Bees - Animated */}
                            <motion.div
                                animate={{
                                    x: [0, 20, 0],
                                    y: [0, -10, 0],
                                    rotate: [0, 10, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute top-10 -right-4 w-12 h-12"
                            >
                                <Image
                                    src={beeImg}
                                    alt="Bee"
                                    className="object-contain w-full h-auto"
                                />
                            </motion.div>

                            <motion.div
                                animate={{
                                    x: [0, -15, 0],
                                    y: [0, 15, 0],
                                    rotate: [0, -10, 0]
                                }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5
                                }}
                                className="absolute bottom-20 -left-4 w-10 h-10"
                            >
                                <Image
                                    src={beeImg}
                                    alt="Bee"
                                    className="object-contain w-full h-auto scale-x-[-1]"
                                />
                            </motion.div>

                            <motion.div
                                animate={{
                                    x: [0, 10, 0],
                                    y: [0, -20, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                                className="absolute top-1/2 right-8 w-8 h-8"
                            >
                                <Image
                                    src={beeImg}
                                    alt="Bee"
                                    className="object-contain w-full h-auto"
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Content Side - Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="p-6 lg:p-10"
                    >
                        <span className="inline-block px-4 py-1 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 rounded-full text-sm font-bold mb-4">
                            Ưu Đãi Giới Hạn Cho Khách Hàng
                        </span>

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading mb-4 text-foreground leading-tight">
                            Mật Ong Hoa Hướng Dương<br />
                            <span className="bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-600 bg-clip-text text-transparent">Nguyên Chất</span> Giảm Giá<br />
                            Lên Đến <span className="text-amber-600 dark:text-amber-400">58%</span>
                        </h2>

                        <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mb-6" />

                        <p className="text-foreground/70 dark:text-foreground/60 mb-8 leading-relaxed">
                            Khám phá hương vị mật ong hoa hướng dương nguyên chất với ưu đãi đặc biệt.
                            Được thu hoạch từ những cánh đồng hoa hướng dương rộng lớn, mang đến vị ngọt thanh mát và
                            đầy dưỡng chất. Số lượng có hạn, nhanh tay đặt hàng để nhận ngay ưu đãi lên đến 58%!
                        </p>

                        <Link
                            href="#products"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded-full font-bold text-lg hover:from-amber-500 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            MUA NGAY
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>

                        {/* Trust Badge */}
                        <div className="mt-8 flex items-center gap-3 text-sm text-foreground/60 dark:text-foreground/50">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-amber-200 to-amber-300 flex items-center justify-center text-xs">
                                        ⭐
                                    </div>
                                ))}
                            </div>
                            <span>Được tin dùng bởi hơn <strong className="text-amber-600 dark:text-amber-400">1,000+</strong> khách hàng</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
