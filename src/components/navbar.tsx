"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";
import logoNav from "@/assets/images/logo-nav.png";

const navLinks = [
    { href: "#home", label: "Trang chủ" },
    { href: "#about", label: "Về chúng tôi" },
    { href: "#products", label: "Sản phẩm" },
    { href: "#contact", label: "Liên hệ" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={clsx(
            "sticky top-0 z-40 w-full backdrop-blur-md transition-all duration-300",
            isScrolled
                ? "bg-background/95 shadow-sm"
                : "bg-transparent"
        )}>
            <div className="container-custom flex h-16 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src={logoNav}
                        alt="MAT ONG PHUONG"
                        className="h-12 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-foreground/80 dark:text-foreground/70 transition-colors hover:text-amber-600 dark:hover:text-amber-400"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {mounted && theme === "dark" ? (
                            <Sun className="h-5 w-5 text-amber-400" />
                        ) : (
                            <Moon className="h-5 w-5 text-foreground" />
                        )}
                    </button>
                    <Link
                        href="#products"
                        className="px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded-full text-sm font-bold hover:from-amber-500 hover:to-amber-700 transition-colors shadow-md"
                    >
                        Mua Ngay
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-border bg-background"
                    >
                        <div className="container-custom py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-base font-medium text-foreground hover:text-primary px-2 py-1"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="flex items-center justify-between px-2 pt-4 border-t border-border">
                                <span className="text-sm font-medium">Giao diện</span>
                                <button
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                    className="p-2 rounded-full bg-accent/10"
                                >
                                    {mounted && theme === "dark" ? (
                                        <Sun className="h-5 w-5 text-primary" />
                                    ) : (
                                        <Moon className="h-5 w-5 text-foreground" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
