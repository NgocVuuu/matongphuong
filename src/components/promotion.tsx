"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import beeImg from "@/assets/images/bee.png";

export function Promotion() {
    return (
        <section className="py-12 md:py-16 bg-background relative overflow-hidden">

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center bg-card border border-border shadow-sm rounded-sm">

                    {/* Image Side - Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative bg-background/50 border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8 flex items-center justify-center h-full"
                    >
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative aspect-square max-w-sm mx-auto w-full"
                        >
                            <Image
                                src="/assets/images/about-img/about-img.webp"
                                alt="Ưu Đãi Mật Ong Tươi"
                                fill
                                priority
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Content Side - Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="p-8 lg:p-12"
                    >
                        <span className="inline-block px-3 py-1 border border-primary text-primary font-heading font-semibold text-xs tracking-widest uppercase mb-6">
                            Ưu Đãi Tuyệt Vời
                        </span>

                        <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold font-heading mb-6 text-foreground leading-tight tracking-tight">
                            Mật Ong Hoa Hướng Dương<br />
                            <span className="text-primary italic font-normal">Nguyên Bản</span> Giảm Giá<br />
                            Lên Đến <span className="text-primary">58%</span>
                        </h2>

                        <div className="w-16 h-px bg-border mb-6" />

                        <p className="text-foreground/80 mb-8 leading-relaxed">
                            Khám phá hương vị mật ong hoa hướng dương thô dồi dào sức sống.
                            Được thu hoạch từ cánh đồng hướng dương trải dài mênh mông, lưu giữ vẻ đẹp thuần túy của lứa hoa chớm nở. 
                            Số lượng cung cấp có hạn theo mùa vụ!
                        </p>

                        <Link
                            href="#products"
                            className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors font-heading font-semibold text-sm tracking-widest uppercase"
                        >
                            MUA NGAY
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
