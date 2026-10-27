import React from 'react';
import { Flame, Phone, MapPin, MessageSquare, Clock, Heart, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenKhamsat: () => void;
  onOpenCart: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenKhamsat, onOpenCart }) => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-right text-zinc-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-zinc-900">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                <Flame className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="text-xl sm:text-2xl font-black text-white">
                مشويات أبو عمر
                <span className="text-orange-500 text-sm font-bold mr-1.5">قنا</span>
              </span>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              أصل المشويات على الفحم البلدي في قنا. بنقدملك طعم زمان بلحوم بلدي 100% طازجة يومياً وخدمة توصيل سريعة وسخنة لحد باب بيتك في جميع أرجاء المحافظة.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs text-zinc-500">التوصيل مجاني داخل قنا اليوم 🛵</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm">روابط سريعة</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-orange-400 transition-colors">
                  قائمة المشويات والأسعار
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenCart}
                  className="hover:text-orange-400 transition-colors text-right"
                >
                  سلة الطلبات والدليفري
                </button>
              </li>
              <li>
                <a href="#reviews" className="hover:text-orange-400 transition-colors">
                  آراء وتجارب أهل قنا
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-orange-400 transition-colors">
                  موقعنا في الشؤون ومواعيد العمل
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm">بيانات التواصل والطلبات</h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{RESTAURANT_INFO.workingHours}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-emerald-400 font-mono font-bold text-sm" dir="ltr">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
            </div>

            {/* Khamsat Freelancer Showcase Card */}
            <div className="pt-2">
              <button
                onClick={onOpenKhamsat}
                className="w-full text-right p-3 rounded-xl bg-zinc-900 hover:bg-zinc-850 border border-amber-500/30 hover:border-amber-400 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 group-hover:text-amber-300 flex items-center gap-1.5">
                    <span>لطلب موقع لمشروعك (خدمة خمسات)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-bold">
                    جاهز للنسخ
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 mt-1">
                  صمم موقع سريع واحترافي بالذكاء الاصطناعي مع طلبات واتساب وخرائط جوجل.
                </p>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} مشويات أبو عمر - قنا. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-1 text-zinc-400">
            <span>تم التصميم والتطوير باحترافية وسرعة فائقة</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 inline mx-0.5" />
            <span>لخدمة أهل قنا</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
