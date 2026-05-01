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
        <section className="section-padding bg-card border-y border-border relative overflow-hidden">

            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold uppercase tracking-widest text-xs mb-3 block font-heading">LỰA CHỌN TỪ THIÊN NHIÊN</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">Tại Sao Chọn Chúng Tôi?</h2>
                    <p className="text-foreground/70 max-w-2xl mx-auto text-lg italic font-serif">
                        Sản phẩm mang dấu ấn của núi rừng, hướng tới sự dung dị và an lành nhất cho sức khỏe gia đình bạn.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-background p-8 rounded-sm border border-border hover:border-primary/50 transition-colors"
                        >
                            <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center mb-6 border border-primary/20">
                                <feature.icon className="h-6 w-6" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground font-heading">{feature.title}</h3>
                            <p className="text-foreground/70 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
