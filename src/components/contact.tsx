"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

export function Contact() {
    const handleMessenger = () => {
        window.open('https://m.me/thi.phuong.508510', '_blank');
    };

    const handleZalo = () => {
        window.open('https://zalo.me/0935198769', '_blank');
    };

    return (
        <section id="contact" className="section-padding bg-background relative">

            <div className="container-custom max-w-5xl relative z-10">
                <div className="text-center mb-12">
                    <span className="text-primary font-semibold uppercase tracking-widest text-xs mb-3 block font-heading">Liên Hệ</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">Liên Hệ Đặt Hàng</h2>
                    <p className="text-foreground/70 text-lg italic font-serif">
                        Ngại gì không trò chuyện để tìm được hương vị mật ưng ý nhất?
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-card p-8 md:p-12 rounded-sm border border-border shadow-sm max-w-4xl mx-auto"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 font-heading text-foreground">Gửi Tin Nhắn</h3>
                            <p className="text-foreground/70 mb-8 italic">
                                Trực tiếp với chủ xưởng qua Zalo hoặc Messenger để đặt hàng cách nhanh nhất.
                            </p>

                            <div className="space-y-4 font-heading">
                                <button
                                    onClick={handleMessenger}
                                    className="w-full py-3 bg-transparent border border-[#006AFF] text-[#006AFF] font-bold rounded-sm hover:bg-[#006AFF] hover:text-white transition-colors flex items-center justify-center gap-3 uppercase tracking-wider text-sm"
                                >
                                    <MessageCircle className="h-5 w-5" />
                                    Chat Messenger
                                </button>

                                <button
                                    onClick={handleZalo}
                                    className="w-full py-3 bg-transparent border border-[#0068FF] text-[#0068FF] font-bold rounded-sm hover:bg-[#0068FF] hover:text-white transition-colors flex items-center justify-center gap-3 uppercase tracking-wider text-sm"
                                >
                                    <Phone className="h-5 w-5" />
                                    Chat Zalo
                                </button>
                            </div>
                        </div>

                        <div className="relative h-64 md:h-full min-h-[300px] border border-border bg-background p-6 flex flex-col justify-center items-center text-center">
                            <span className="text-primary text-4xl mb-4">📍</span>
                            <p className="font-bold text-xl mb-2 font-heading text-foreground">Mật Ong<br/>Chú Phượng</p>
                            <p className="text-foreground/70 italic text-sm mt-4">14 Âu Cơ, P. Liên Chiểu<br/>TP. Đà Nẵng</p>
                            <div className="w-10 h-px bg-border my-4" />
                            <p className="text-primary font-bold font-heading text-xl">0935 198 769</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
