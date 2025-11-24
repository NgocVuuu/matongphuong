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

            <div className="container-custom max-w-4xl relative z-10">
                <div className="text-center mb-12">
                    <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Liên Hệ</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">Liên Hệ Đặt Hàng</h2>
                    <p className="text-foreground/70 dark:text-foreground/60 text-lg">
                        Chúng tôi luôn sẵn sàng tư vấn và hỗ trợ bạn 24/7.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-amber-50 via-white to-amber-50 dark:bg-[#2d1b0e] dark:from-transparent dark:via-transparent dark:to-transparent p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-amber-200 dark:border-amber-800"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 font-heading text-foreground">Kết nối ngay</h3>
                            <p className="text-foreground/70 dark:text-foreground/60 mb-8">
                                Cách nhanh nhất để đặt hàng và nhận tư vấn là liên hệ trực tiếp qua Messenger hoặc Zalo.
                            </p>

                            <div className="space-y-4">
                                <button
                                    onClick={handleMessenger}
                                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center gap-3 shadow-lg hover:-translate-y-1"
                                >
                                    <MessageCircle className="h-6 w-6" />
                                    Chat qua Messenger
                                </button>

                                <button
                                    onClick={handleZalo}
                                    className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all flex items-center justify-center gap-3 shadow-lg hover:-translate-y-1"
                                >
                                    <Phone className="h-6 w-6" />
                                    Chat qua Zalo
                                </button>
                            </div>
                        </div>

                        <div className="relative h-64 md:h-full min-h-[300px] rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 to-amber-200 dark:bg-amber-900/40 dark:from-transparent dark:to-transparent">
                            {/* Map Placeholder or Contact Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-center p-6">
                                <div>
                                    <p className="font-bold text-lg mb-2 text-amber-900 dark:text-amber-200">Mật Ong Phượng Store</p>
                                    <p className="text-amber-800 dark:text-amber-300"> 14 Âu Cơ, P. Liên Chiểu, TP. Đà Nẵng </p>
                                    <p className="text-amber-900 dark:text-amber-100 font-bold mt-2 text-xl">0935 198 769</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
