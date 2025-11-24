"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function About() {
    const features = [
        "Mật ong thô, không qua chế biến",
        "Thu hoạch từ rừng hữu cơ",
        "Tăng cường miễn dịch tự nhiên",
    ];

    return (
        <section id="about" className="section-padding relative overflow-hidden">

            <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Image - Shows FIRST on mobile (order-1), SECOND on desktop (lg:order-2) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative order-1 lg:order-2"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 bg-white dark:bg-amber-900 px-4 py-2 rounded-full shadow-lg shadow-amber-900/5 border-2 border-amber-200 dark:border-amber-700"
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">🍯</span>
                            <span className="font-bold text-sm text-foreground whitespace-nowrap">100% Tinh Khiết & Tự Nhiên</span>
                        </div>
                    </motion.div>

                    {/* Floating Honey Jar */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative bg-white dark:bg-[#2d1b0e] p-8 rounded-3xl shadow-xl shadow-amber-900/10 border border-amber-100 dark:border-amber-900"
                    >
                        <div className="relative aspect-square">
                            <Image
                                src="/assets/images/about-img/about-img.webp"
                                alt="Hũ Mật Ong Nguyên Chất"
                                fill
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>
                    </motion.div>

                    {/* Decorative honey drops */}
                    <motion.div
                        animate={{
                            y: [0, 10, 0],
                            opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                        className="absolute -bottom-4 -right-4 w-16 h-16 bg-amber-400/20 dark:bg-amber-600/20 rounded-full blur-xl"
                    />
                </motion.div>

                {/* Content - Shows SECOND on mobile (order-2), FIRST on desktop (lg:order-1) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="order-2 lg:order-1"
                >
                    <span className="text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider text-sm mb-2 block">VỀ CHÚNG TÔI</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-foreground leading-tight">
                        Trải Nghiệm <span className="bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-600 bg-clip-text text-transparent">Vàng Óng</span><br />
                        Của Thiên Nhiên
                    </h2>
                    <p className="text-base text-foreground/70 dark:text-foreground/60 mb-6 leading-relaxed">
                        Chào mừng đến với <span className="font-bold text-foreground">HoneyBlume</span>, nơi mỗi giọt mật ong được tạo ra bởi thiên nhiên và hoàn thiện bởi sự chăm sóc tận tâm.
                        Mật ong của chúng tôi 100% nguyên chất, được lấy từ các trang trại thân thiện với môi trường và chứa đầy
                        enzyme tự nhiên, dưỡng chất cùng vị ngọt từ những bông hoa đang nở rộ.
                    </p>

                    <ul className="space-y-3 mb-8">
                        {features.map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="h-3 w-3 text-white" strokeWidth={3} />
                                </div>
                                <span className="text-foreground/90 dark:text-foreground/80 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="#products"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded-full font-bold hover:from-amber-500 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        MUA NGAY
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
