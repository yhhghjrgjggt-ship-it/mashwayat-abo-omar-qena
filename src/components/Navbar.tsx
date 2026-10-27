import React, { useState } from 'react';
import { ShoppingBag, Flame, Phone, Menu, X, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenKhamsat: () => void;
  onOrderNowClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenKhamsat,
  onOrderNowClick
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 md:gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Brand Wordmark */}
        <a href="#" className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
            <Flame className="w-6 h-6 text-white fill-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-1.5 font-sans">
              مشويات أبو عمر
              <span className="text-orange-500 text-sm font-bold bg-orange-950/60 border border-orange-500/30 px-1.5 py-0.5 rounded text-xs">
                قنا
              </span>
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-zinc-300">
          <a href="#" className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0">
            الرئيسية
          </a>
          <a href="#menu" className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0">
            قائمة الطعام
          </a>
          <a href="#reviews" className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0">
            آراء أهل قنا
          </a>
          <a href="#location" className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0">
            موقعنا في الشؤون
          </a>
          <button
            onClick={onOpenKhamsat}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-amber-400 text-xs px-2.5 py-1 rounded-lg border border-zinc-800 hover:border-amber-500/40 transition-all whitespace-nowrap shrink-0"
            title="وصف خدمة خمسات للمصمم"
          >
            <span>خدمة خمسات</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </nav>

        {/* Zone 3: Primary Actions (Cart + Call + Order) */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 hover:text-white transition-all whitespace-nowrap shrink-0"
            title="اتصل بالمطعم"
          >
            <Phone className="w-3.5 h-3.5 text-orange-500" />
            <span className="hidden xl:inline">{RESTAURANT_INFO.phone}</span>
            <span className="xl:hidden">اتصال</span>
          </a>

          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-orange-500/40 text-white font-medium text-xs sm:text-sm transition-all whitespace-nowrap shrink-0"
            aria-label="سلة الطلبات"
          >
            <ShoppingBag className="w-4 h-4 text-orange-500" />
            <span className="hidden sm:inline">السلة</span>
            {cartCount > 0 ? (
              <span className="w-5 h-5 rounded-full bg-orange-600 text-white text-xs font-bold flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            ) : (
              <span className="text-zinc-500 text-xs hidden sm:inline">0</span>
            )}
          </button>

          <button
            onClick={onOrderNowClick}
            className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-black text-white bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 rounded-xl shadow-lg shadow-emerald-600/40 border border-emerald-400/40 transition-all transform hover:scale-105 active:scale-95 animate-pulse whitespace-nowrap shrink-0 cursor-pointer"
            title="اطلب الآن عبر واتساب مباشر"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>اطلب الآن</span>
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-900 border-b border-zinc-800 px-4 py-4 space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-zinc-300">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-orange-400 transition-colors"
            >
              الرئيسية
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-orange-400 transition-colors"
            >
              قائمة الطعام والأسعار
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-orange-400 transition-colors"
            >
              آراء أهل قنا
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-orange-400 transition-colors"
            >
              موقعنا في الشؤون
            </a>
            <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex items-center gap-2 text-orange-400 font-bold text-sm px-3 py-2"
              >
                <Phone className="w-4 h-4" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenKhamsat();
                }}
                className="text-xs bg-zinc-800 text-zinc-300 px-3 py-1.5 rounded-lg border border-zinc-700"
              >
                وصف خمسات
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
