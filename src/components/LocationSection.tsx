import React from 'react';
import { MapPin, Clock, Phone, ExternalLink, Navigation, CheckCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 lg:py-24 bg-zinc-950 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="pb-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 text-orange-500 font-bold text-xs uppercase tracking-wider mb-2">
            <MapPin className="w-4 h-4" />
            <span>موقعنا في قنا</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            فرع الشؤون - شارع اليافطة
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            موقع متميز في قلب قنا يسهل الوصول إليه، مع خدمة تجهيز طلبات الاستلام السريع وتوصيل سريع ساخن.
          </p>

          {/* Special Delivery Prompt Callout */}
          <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/70 via-zinc-900 to-zinc-900 border border-emerald-500/40 text-emerald-400 font-bold text-xs sm:text-sm flex items-center justify-between gap-3 shadow-lg">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>🛵 التوصيل مجاني داخل قنا - الشؤون والمساكن لجميع الطلبات!</span>
            </div>
            <a
              href="https://wa.me/201095577062?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%B7%D9%84%D8%A8%20%D9%85%D8%B4%D9%88%D9%8A%D8%A7%D8%AA%20%D9%85%D8%B9%20%D8%A7%D9%84%D8%AA%D9%88%D8%B5%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%AC%D8%A7%D9%86%D9%8A%20%D9%81%D9%8A%20%D9%82%D9%86%D8%A7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-md whitespace-nowrap transition-transform active:scale-95"
            >
              اطلب دليفري الآن
            </a>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Info Cards Column */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-2">
              <div className="flex items-center gap-2.5 text-orange-400 font-bold text-sm">
                <MapPin className="w-5 h-5 shrink-0" />
                <span>العنوان بالتفصيل</span>
              </div>
              <p className="text-white text-base sm:text-lg font-bold leading-relaxed text-orange-400">
                قنا - الشؤون - شارع اليافطة
              </p>
              <p className="text-xs text-zinc-400">
                محافظة قنا، جمهورية مصر العربية
              </p>
            </div>

            {/* Hours Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-2">
              <div className="flex items-center gap-2.5 text-amber-400 font-bold text-sm">
                <Clock className="w-5 h-5 shrink-0" />
                <span>مواعيد العمل واستقبال الطلبات</span>
              </div>
              <p className="text-white text-sm sm:text-base font-semibold">
                {RESTAURANT_INFO.workingHours}
              </p>
              <p className="text-xs text-zinc-400">
                متاحين طوال أيام الأسبوع بما فيها الإجازات الرسمية وعطلات نهاية الأسبوع.
              </p>
            </div>

            {/* Direct Contact Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-3">
              <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-sm">
                <Phone className="w-5 h-5 shrink-0" />
                <span>أرقام الطلبات والدليفري المباشر</span>
              </div>
              <div className="space-y-2">
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-orange-500/50 transition-colors group"
                >
                  <span className="text-xs text-zinc-400">موبايل وواتساب:</span>
                  <span className="text-sm font-bold text-white group-hover:text-orange-400 tabular-nums">
                    {RESTAURANT_INFO.phone}
                  </span>
                </a>
                <a
                  href={`tel:${RESTAURANT_INFO.altPhone}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-orange-500/50 transition-colors group"
                >
                  <span className="text-xs text-zinc-400">الخط الأرضي:</span>
                  <span className="text-sm font-bold text-white group-hover:text-orange-400 tabular-nums">
                    {RESTAURANT_INFO.altPhone}
                  </span>
                </a>
              </div>
            </div>

            {/* Qena Delivery Coverage Zones */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-xs sm:text-sm">
                <Navigation className="w-4 h-4 text-orange-500" />
                <span>المناطق المشمولة بالتوصيل المجاني اليوم:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {RESTAURANT_INFO.deliveryZones.map((zone, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-950 text-zinc-300 text-xs border border-zinc-800"
                  >
                    <CheckCircle className="w-3 h-3 text-emerald-500 shrink-0" />
                    <span>{zone}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Google Map Column */}
          <div className="lg:col-span-7 flex flex-col space-y-3">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl">
              {/* Google Maps Embed for Qena - El Shoon */}
              <iframe
                title="خريطة موقع مشويات أبو عمر في قنا الشؤون"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14349.562725164998!2d32.7212457871582!3d26.159489800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x144915998a69a463%3A0xe54e20fa0002875b!2z2KfZhNi02KTYs9mI2YbYjCDZgtmG2KfYjCDZgtiz2YUg2YLYstatef2YLYp9iMINmF2K3Yp9mB2LjYqSDZgtmG2Kc!5e0!3m2!1sar!2seg!4v1710000000000!5m2!1sar!2seg"
                className="w-full h-full border-0 grayscale-[25%] contrast-[1.1] opacity-90 hover:opacity-100 transition-opacity"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Floating Card Pin */}
              <div className="absolute top-4 right-4 bg-zinc-950/90 backdrop-blur-md border border-orange-500/40 p-3 rounded-xl shadow-lg max-w-xs text-right">
                <div className="flex items-center gap-1.5 text-orange-400 font-bold text-xs mb-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>مشويات أبو عمر</span>
                </div>
                <p className="text-xs text-zinc-300">قنا - الشؤون - شارع اليافطة</p>
                <div className="text-[11px] text-emerald-400 font-bold mt-1">توصيل مجاني للشؤون والمساكن</div>
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-orange-400 hover:text-orange-300"
                >
                  <span>فتح في تطبيق الخرائط</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
              <span>إحداثيات الموقع: حي الشؤون، مركز قنا</span>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <span>اتجاهات القيادة والسير</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
