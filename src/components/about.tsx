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
                        className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 bg-card px-4 py-1 border border-border"
                    >
                        <div className="flex items-center gap-2 font-heading">
                            <span className="text-xl text-primary">🍯</span>
                            <span className="font-semibold text-sm text-foreground uppercase tracking-widest whitespace-nowrap">100% Nguyên Bản</span>
                        </div>
                    </motion.div>

                    {/* Floating Honey Jar */}
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative bg-background p-4 rounded-sm border border-border"
                    >
                        <div className="relative aspect-square bg-card/30">
                            <Image
                                src="/assets/images/about-img/about-img.webp"
                                alt="Hũ Mật Ong Nguyên Chất"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </motion.div>

                    {/* Decorative square instead of honey drops */}
                    <motion.div
                        animate={{ rotate: [0, 45, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary/5 border border-primary/20"
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
                    <span className="text-primary font-semibold uppercase tracking-widest text-xs mb-3 block font-heading">VỀ CHÚNG TÔI</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-foreground leading-tight">
                        Tinh Túy <span className="text-primary italic font-normal">Nguyên Bản</span><br />
                        Của Rừng Già
                    </h2>
                    <p className="text-base text-foreground/80 mb-6 leading-relaxed">
                        Chào mừng đến với <span className="font-bold font-heading">Mật Ong Phượng</span>. Khác với quy trình công nghiệp, mỗi giọt mật của chúng tôi 
                        giữ nguyên vẻ thô mộc của núi rừng. Thu hoạch hoàn toàn thủ công, không qua xử lý nhiệt 
                        hay lọc tinh, mật ong của chúng tôi giữ lại trọn vẹn lớp phấn hoa, sáp và enzyme tự nhiên quý giá.
                    </p>

                    <ul className="space-y-4 mb-8 font-serif">
                        {features.map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                                <span className="text-foreground italic">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="#products"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white hover:bg-primary/90 transition-colors uppercase font-semibold text-sm tracking-widest font-heading"
                    >
                        TÌM HIỂU THÊM
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
