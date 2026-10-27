import React, { useState } from 'react';
import { Bike, Sparkles, X } from 'lucide-react';

interface TopBannerProps {
  onOrderNowClick: () => void;
}

export const TopBanner: React.FC<TopBannerProps> = ({ onOrderNowClick }) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative z-50 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white text-xs sm:text-sm font-medium py-2 px-4 shadow-md transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex-1 flex items-center justify-center gap-2 text-center overflow-hidden">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20 shrink-0">
            <Bike className="w-3.5 h-3.5 text-white" />
          </span>
          <span className="font-bold tracking-wide truncate">
            🔥 التوصيل مجاني داخل قنا - الشؤون والمساكن اليوم لجميع الطلبات!
          </span>
          <button
            onClick={onOrderNowClick}
            className="hidden sm:inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold px-3 py-1 rounded-full text-xs transition-all shadow-md animate-pulse shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5" />
            اطلب الآن واتساب
          </button>
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="text-white/80 hover:text-white p-1 rounded transition-colors shrink-0"
          title="إغلاق التنبيه"
          aria-label="إغلاق"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
