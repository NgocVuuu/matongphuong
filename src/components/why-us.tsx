"use client";

import { motion } from "framer-motion";
import { Shield, Award, Leaf, Heart } from "lucide-react";

const features = [
    {
        icon: Shield,
        title: "100% Nguyên Chất",
        description: "Không pha trộn, không chất bảo quản. Cam kết chất lượng tuyệt đối."
    },
    {
        icon: Award,
        title: "Chứng Nhận An Toàn",
        description: "Đạt tiêu chuẩn vệ sinh an toàn thực phẩm, kiểm định chất lượng."
    },
    {
        icon: Leaf,
        title: "Thân Thiện Môi Trường",
        description: "Quy trình sản xuất bền vững, bảo vệ hệ sinh thái ong mật."
    },
    {
        icon: Heart,
        title: "Tốt Cho Sức Khỏe",
        description: "Giàu vitamin, khoáng chất và chất chống oxy hóa tự nhiên."
    }
];

export function WhyUs() {
    return (
        <section className="section-padding bg-gradient-to-b from-background via-amber-50/20 to-background dark:via-amber-950/10 relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">Tại Sao Chọn Chúng Tôi?</h2>
                    <p className="text-foreground/70 dark:text-foreground/60 max-w-2xl mx-auto text-lg">
                        Chúng tôi không chỉ bán mật ong, chúng tôi trao gửi sức khỏe và niềm tin đến từng gia đình Việt.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gradient-to-br from-amber-50 via-white to-amber-50 dark:bg-[#2d1b0e] dark:from-transparent dark:via-transparent dark:to-transparent p-8 rounded-2xl border-2 border-amber-200 dark:border-amber-800 hover:border-amber-400 dark:hover:border-amber-600 hover:shadow-xl transition-all hover:-translate-y-1 shadow-lg"
                        >
                            <div className="w-14 h-14 bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg rotate-3 hover:rotate-0 transition-transform duration-300">
                                <feature.icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                            <p className="text-foreground/70 dark:text-foreground/60 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
