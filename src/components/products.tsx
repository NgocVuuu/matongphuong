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
                            className="group bg-gradient-to-br from-white via-amber-50/30 to-white dark:from-card dark:via-amber-900/10 dark:to-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-amber-200/50 dark:border-amber-800/50 hover:border-amber-400 dark:hover:border-amber-600 flex flex-col"
                        >
                            <div className="relative aspect-square overflow-hidden bg-white dark:bg-card">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <button
                                        onClick={() => handleBuy(product.name)}
                                        className="p-3 bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded-full hover:from-amber-500 hover:to-amber-700 transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300"
                                        title="Mua qua Messenger"
                                    >
                                        <MessageCircle className="h-6 w-6" />
                                    </button>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                        />
                                    ))}
                                    <span className="text-xs text-foreground/50 ml-1">({product.rating})</span>
                                </div>

                                <h3 className="text-xl font-bold mb-2 font-heading group-hover:text-primary transition-colors">{product.name}</h3>
                                <p className="text-sm text-foreground/60 dark:text-foreground/50 mb-4 line-clamp-2">{product.desc}</p>

                                <div className="mt-auto flex items-center justify-between pt-4 border-t border-amber-200 dark:border-amber-800">
                                    <div>
                                        <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-600 bg-clip-text text-transparent">{product.price}</span>
                                        <span className="text-xs text-foreground/50 ml-1">/{product.unit}</span>
                                    </div>
                                    <button
                                        onClick={() => handleBuy(product.name)}
                                        className="px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-600 text-white font-bold rounded-full hover:from-amber-500 hover:to-amber-700 transition-all flex items-center gap-2 text-sm shadow-md"
                                    >
                                        <ShoppingCart className="h-4 w-4" />
                                        Mua Ngay
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
