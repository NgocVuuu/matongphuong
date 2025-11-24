"use client";

import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logoLight from "@/assets/images/logo-light.png";

export function Footer() {
    return (
        <footer className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-amber-50 pt-16 pb-8">
            <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {/* Brand */}
                <div>
                    <Link href="/" className="inline-block mb-2">
                        <Image
                            src={logoLight}
                            alt="MAT ONG PHUONG"
                            className="h-24 w-auto object-contain"
                        />
                    </Link>
                    <p className="text-amber-100/80 mb-6 leading-relaxed">
                        Mang đến cho bạn những giọt mật ong tinh khiết nhất từ thiên nhiên.
                        Sức khỏe và sự hài lòng của bạn là niềm vui của chúng tôi.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-amber-300 transition-colors"><Facebook className="h-5 w-5" /></Link>
                        <Link href="#" className="hover:text-amber-300 transition-colors"><Instagram className="h-5 w-5" /></Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-bold mb-4 text-white">Liên kết nhanh</h4>
                    <ul className="space-y-2">
                        <li><Link href="#home" className="hover:text-amber-300 transition-colors">Trang chủ</Link></li>
                        <li><Link href="#about" className="hover:text-amber-300 transition-colors">Về chúng tôi</Link></li>
                        <li><Link href="#products" className="hover:text-amber-300 transition-colors">Sản phẩm</Link></li>
                        <li><Link href="#contact" className="hover:text-amber-300 transition-colors">Liên hệ</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-lg font-bold mb-4 text-white">Liên hệ</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 shrink-0 text-amber-300" />
                            <span>14 Âu Cơ, P. Liên Chiểu, TP. Đà Nẵng</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="h-5 w-5 shrink-0 text-amber-300" />
                            <span>0935 198 769</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="h-5 w-5 shrink-0 text-amber-300" />
                            <span>matongphuong@gmail.com</span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="text-lg font-bold mb-4 text-white">Đăng ký nhận tin</h4>
                    <p className="text-sm mb-4 text-amber-100/80">Nhận thông tin khuyến mãi mới nhất.</p>
                    <form className="flex flex-col gap-2">
                        <input
                            type="email"
                            placeholder="Email của bạn"
                            className="px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-amber-300 text-white placeholder:text-white/50"
                        />
                        <button className="px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-600 text-white font-bold rounded hover:from-amber-500 hover:to-amber-700 transition-colors shadow-md">
                            Đăng ký
                        </button>
                    </form>
                </div>
            </div>

            <div className="container-custom border-t border-white/10 pt-8 text-center text-sm text-amber-100/60">
                <p>&copy; {new Date().getFullYear()} MAT ONG PHUONG. All rights reserved.</p>
            </div>
        </footer>
    );
}
