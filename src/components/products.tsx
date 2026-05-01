"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Star, MessageCircle } from "lucide-react";
import Image from "next/image";

const products = [
    {
        id: 1,
        name: "Mật Ong Nguyên Chất",
        price: "180.000đ",
        unit: "Chai 1 Lít",
        rating: 5,
        image: "/assets/images/products/product-1.jpg",
        desc: "Thu hoạch trực tiếp từ đàn ong tự nhiên."
    },
    {
        id: 2,
        name: "Mật Ong Hoa Cà Phê",
        price: "160.000đ",
        unit: "Chai 1 Lít",
        rating: 5,
        image: "/assets/images/products/product-2.jpg",
        desc: "Hương vị đậm đà đặc trưng Tây Nguyên."
    },
    {
        id: 3,
        name: "Mật Ong Rừng",
        price: "450.000đ",
        unit: "Chai 1 Lít",
        rating: 5,
        image: "/assets/images/products/product-3.jpg",
        desc: "Tinh túy từ những cánh rừng già."
    },
];

export function Products() {
    const handleBuy = (productName: string) => {
        const message = `Xin chào, tôi muốn đặt mua ${productName}.`;
        window.open(`https://m.me/thi.phuong.508510?ref=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section id="products" className="section-padding bg-background relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 dark:bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/10 dark:bg-accent/5 rounded-full blur-[100px]" />
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Cửa Hàng Của Chúng Tôi</span>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-foreground">Sản Phẩm Nổi Bật</h2>
                    <p className="text-foreground/70 dark:text-foreground/60 max-w-2xl mx-auto text-lg">
                        Tuyển chọn những sản phẩm tốt nhất từ thiên nhiên, được khách hàng tin dùng và đánh giá cao.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-card rounded-sm overflow-hidden border border-border hover:border-primary/50 transition-colors duration-300 flex flex-col p-4 shadow-sm"
                        >
                            <div className="relative aspect-square overflow-hidden bg-background/50 mb-4 border border-foreground/5">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex-1 flex flex-col items-center text-center">
                                <div className="flex items-center gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-3 w-3 ${i < Math.floor(product.rating) ? "text-primary fill-primary" : "text-gray-300"}`}
                                        />
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold mb-2 font-heading text-foreground">{product.name}</h3>
                                <p className="text-sm text-foreground/70 mb-4 line-clamp-2 italic font-serif">{product.desc}</p>

                                <div className="mt-auto w-full pt-4 border-t border-border flex flex-col gap-3">
                                    <div className="flex items-center justify-center gap-1">
                                        <span className="text-xl font-bold font-heading text-primary">{product.price}</span>
                                        <span className="text-xs text-foreground/50">/{product.unit}</span>
                                    </div>
                                    <button
                                        onClick={() => handleBuy(product.name)}
                                        className="w-full py-2 bg-transparent border border-primary text-primary font-heading font-semibold hover:bg-primary hover:text-white transition-colors uppercase text-sm tracking-wider"
                                    >
                                        Mua Qua Zalo / Đặt Hàng
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
