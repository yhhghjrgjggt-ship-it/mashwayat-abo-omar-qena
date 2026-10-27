import React from 'react';
import { Flame, Clock, ShieldCheck, MapPin, Sparkles, MessageSquare, ArrowDown } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOrderNowClick: () => void;
  onOpenWhatsapp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderNowClick, onOpenWhatsapp }) => {
  return (
    <section className="relative overflow-hidden bg-zinc-950 pt-8 pb-16 lg:py-20 border-b border-zinc-900">
      {/* Subtle ambient fiery glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Arabic Right): Main Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-right">
            {/* Trust Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs sm:text-sm font-semibold">
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" />
              <span>أصل المشويات على الفحم البلدي في قنا - الشؤون</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              أشهى مشويات على الفحم{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
                بلدي 100%
              </span>{' '}
              بتتبيلة لا تُنسى
            </h1>

            {/* Sub-copy */}
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              من قلب قنا، بنقدملك كباب وكفتة حاتي وريش ضاني وطرب وحواوشي معمولين بحرفية السنين، مع توصيل سريع وسخن لحد باب بيتك في جميع أنحاء قنا.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800/80 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-white">لحوم بلدي 100%</h2>
                  <p className="text-[11px] text-zinc-400">مذبوحة طازة يومياً</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800/80 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-white">توصيل 35 دقيقة</h2>
                  <p className="text-[11px] text-zinc-400">سخن طازة من الجريل</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-zinc-900/80 border border-zinc-800/80 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-white">فرع قنا - الشؤون</h2>
                  <p className="text-[11px] text-zinc-400">تغطية لكل قنا</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={onOpenWhatsapp}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-500 hover:from-emerald-500 hover:to-green-400 text-white font-black text-base sm:text-lg shadow-xl shadow-emerald-600/40 border border-emerald-400/40 transition-all transform hover:scale-105 active:scale-95 animate-pulse cursor-pointer"
                title="اطلب الآن عبر واتساب مباشر"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>اطلب الآن واتساب مباشر</span>
              </button>

              <button
                onClick={onOrderNowClick}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-600/25 transition-all transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>تصفح المنيو والأسعار</span>
              </button>

              <a
                href="#location"
                className="w-full sm:w-auto text-center px-4 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5"
              >
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>موقعنا بشارع اليافطة</span>
              </a>
            </div>

            {/* Micro delivery reassurance */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400 pt-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <strong className="text-emerald-400">التوصيل مجاني داخل قنا - الشؤون والمساكن</strong>
              <span className="text-zinc-500">· حتى 3 فجراً</span>
            </div>
          </div>

          {/* Right Column (Arabic Left): Food Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl group">
              {/* Image with contrast scrim */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                <img
                  src="/src/assets/images/hero_grill_feast_1793089289064.jpg"
                  alt="سرفيس مشويات مشكل فاخر أبو عمر قنا"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              </div>

              {/* Showcase details bar */}
              <div className="p-4 sm:p-5 bg-zinc-900/90 backdrop-blur-sm border-t border-zinc-800/80 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-white text-base sm:text-lg">سرفيس ميكس جريل ملوكي</h3>
                    <p className="text-xs text-zinc-400">كباب + كفتة حاتي + ريش ضاني + شيش + أرز بالمكسرات</p>
                  </div>
                  <div className="text-left">
                    <span className="text-orange-400 font-extrabold text-xl tabular-nums">590</span>
                    <span className="text-zinc-400 text-xs font-semibold mr-1">ج.م</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-zinc-800/60 text-xs text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <span className="text-amber-400">★★★★★</span>
                    <span className="font-semibold text-zinc-300">4.9 (420+ تقييم)</span>
                  </div>
                  <button
                    onClick={onOrderNowClick}
                    className="text-orange-400 hover:text-orange-300 font-bold transition-colors"
                  >
                    أضف هذا الطبق للطلب ←
                  </button>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-3 right-3 bg-zinc-950/85 backdrop-blur-md border border-orange-500/40 text-orange-400 font-bold text-xs px-3 py-1.5 rounded-full shadow-lg">
                🔥 الأكثر طلباً اليوم في قنا
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
