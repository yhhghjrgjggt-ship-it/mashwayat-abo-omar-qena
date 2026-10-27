import React, { useState } from 'react';
import { MessageSquare, X, Send, PhoneCall, Edit3, Check, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FloatingWhatsAppProps {
  whatsappPhone: string;
  onUpdatePhone: (newPhone: string) => void;
  onOpenCart: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  whatsappPhone,
  onUpdatePhone,
  onOpenCart
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [tempPhone, setTempPhone] = useState(whatsappPhone);

  const cleanPhone = whatsappPhone.replace(/\D/g, '');

  const quickMessages = [
    {
      title: 'طلب دليفري سريع',
      desc: 'أريد طلب مشويات الآن مع التوصيل المجاني داخل قنا - الشؤون والمساكن',
      action: 'order'
    },
    {
      title: 'استفسار عن منيو اليوم والعروض',
      desc: 'السلام عليكم، ما هي عروض مشويات أبو عمر اليوم في شارع اليافطة بقنا؟',
      action: 'chat'
    },
    {
      title: 'حجز طاولة أو عزومة عائلية',
      desc: 'السلام عليكم، أود حجز طاولة أو التنسيق لعزومة في فرع الشؤون شارع اليافطة',
      action: 'chat'
    }
  ];

  const handleQuickAction = (item: (typeof quickMessages)[0]) => {
    if (item.action === 'order') {
      setIsOpen(false);
      onOpenCart();
      return;
    }

    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(item.desc)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  const handleSavePhone = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempPhone.trim()) {
      onUpdatePhone(tempPhone.trim());
      setIsEditingPhone(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-3 select-none" dir="rtl">
      
      {/* Popover Card */}
      {isOpen && (
        <div className="w-80 sm:w-88 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl p-4 text-right mb-2 animate-fadeIn transition-all text-white">
          {/* Card Header */}
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">محادثة واتساب مباشرة</h4>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>متصل الآن للرد في قنا</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
              aria-label="إغلاق"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Phone Editor in 5 seconds */}
          <div className="py-2.5 px-3 my-2 bg-zinc-900 rounded-xl border border-zinc-800/90 text-xs">
            {isEditingPhone ? (
              <form onSubmit={handleSavePhone} className="space-y-2">
                <label className="text-[11px] text-zinc-400 block font-semibold">
                  ضع رقم الواتساب الخاص بك (مؤقتاً):
                </label>
                <div className="flex gap-1.5">
                  <input
                    type="tel"
                    value={tempPhone}
                    onChange={(e) => setTempPhone(e.target.value)}
                    placeholder="2010xxxxxxxx"
                    className="flex-1 bg-zinc-950 border border-zinc-700 rounded-lg px-2.5 py-1 text-white text-xs outline-none"
                    dir="ltr"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold flex items-center gap-1"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>حفظ</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <span>الرقم الحالي:</span>
                  <strong className="text-zinc-200 font-mono text-[11px]" dir="ltr">
                    +{cleanPhone}
                  </strong>
                </div>
                <button
                  onClick={() => setIsEditingPhone(true)}
                  className="text-orange-400 hover:text-orange-300 flex items-center gap-1 font-semibold text-[11px]"
                  title="تغيير رقم الواتساب في 5 ثواني"
                >
                  <Edit3 className="w-3 h-3" />
                  <span>تعديل</span>
                </button>
              </div>
            )}
          </div>

          {/* Quick Action Options */}
          <div className="space-y-2 pt-1">
            <span className="text-[11px] font-bold text-zinc-500 uppercase block">
              اختر نوع الطلب أو المحادثة:
            </span>
            {quickMessages.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleQuickAction(item)}
                className="w-full text-right p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800/80 hover:border-emerald-500/40 transition-colors group flex items-start gap-2.5"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
                <div className="min-w-0">
                  <h5 className="font-bold text-xs text-zinc-200 group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h5>
                  <p className="text-[11px] text-zinc-400 truncate mt-0.5">{item.desc}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Call Alternative */}
          <div className="pt-3 mt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
            <span>تفضل المكالمة الصوتية؟</span>
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="text-orange-400 hover:text-orange-300 font-bold flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3" />
              <span>اتصل الآن</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Button (Flying WhatsApp) */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full sm:rounded-2xl shadow-xl shadow-emerald-950/40 hover:shadow-emerald-600/30 transition-all transform hover:scale-105 active:scale-95"
          aria-label="تواصل عبر واتساب مشويات أبو عمر"
        >
          {/* Pulsing ring */}
          <span className="absolute -inset-1 rounded-full sm:rounded-2xl bg-emerald-500/30 animate-ping -z-10" />

          <MessageSquare className="w-6 h-6 text-white fill-white shrink-0" />
          
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-xs font-black tracking-wide leading-tight">اطلب عبر واتساب</span>
            <span className="text-[10px] text-emerald-100 font-medium">رد فوري · قنا</span>
          </div>
        </button>

        {/* Small floating tooltip on load */}
        {!isOpen && (
          <div className="hidden md:flex items-center gap-1 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs px-3 py-1.5 rounded-xl shadow-lg">
            <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
            <span>طلب فوري عبر واتساب</span>
          </div>
        )}
      </div>

    </div>
  );
};
