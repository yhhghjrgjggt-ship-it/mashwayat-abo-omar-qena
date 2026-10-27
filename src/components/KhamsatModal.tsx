import React, { useState } from 'react';
import { X, Copy, Check, Sparkles, Briefcase, Award, Send, MessageSquare } from 'lucide-react';

interface KhamsatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KhamsatModal: React.FC<KhamsatModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'pitch' | 'khamsat' | 'mostaql'>('pitch');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentUrl =
    typeof window !== 'undefined'
      ? window.location.href
      : 'https://ais-pre-3aqjykpfu2vit76idfdux3-7768600194.europe-west2.run.app';

  // 1. Direct pitch message to the restaurant owner (Abu Omar Qena: 01095577062)
  const pitchMessage = `السلام عليكم، أنا طالب حاسبات ومعلومات من قنا، وعملت لحضرتك نسخة تجريبية حية لموقع مطعم "مشويات أبو عمر - قنا" بتصميم فخم وسريع جداً على الموبايل شبه أبلكيشن طلبات:
${currentUrl}

الموقع مجهز بـ:
1. منيو كامل بأسعار المشويات والطواجن مع صور شهية
2. زر واتساب مباشر مربوط برقمكم (01095577062) يستقبل طلبات الزبائن مع العنوان والتفاصيل تلقائياً
3. خريطة موقعكم في قنا - الشؤون (شارع اليافطة)
4. جملة التوصيل المجاني داخل قنا - الشؤون والمساكن لزيادة المبيعات

لو عجبك يا فندم أقدر أركبهولك بدومين خاص باسمكم ويربط مع الواتساب بتاعكم ويستقبل أوردرات 24 ساعة، بسعر خاص جداً 2000ج فقط بدل 5000ج عشان انتم أول مطعم في قنا!`;

  // 2. Khamsat Gig Description
  const gigTitle = 'سأصمم لك موقع احترافي بالذكاء الاصطناعي في 24 ساعة + دومين مجاني';
  const gigFullText = `العنوان:
${gigTitle}

الوصف:
طالب في حاسبات ومعلومات، أصمم مواقع سريعة واحترافية بالـ AI تظهر في جوجل وتجيب عملاء من الواتساب

المميزات المقدمة في الخدمة:
• تسليم في 24 ساعة فقط
• تصميم متجاوب موبايل 100%
• زر واتساب سريع ومباشر للطلبات والمحادثات
• دمج خرائط جوجل لموقع نشاطك التجاري
• تعديلات مجانية حتى الرضا التام

شوف أعمالي وسرعة الموقع بنفسك (مثال حي لمطعم مشويات متكامل):
${currentUrl}`;

  // 3. Mostaql Proposal / Pitch
  const mostaqlProposal = `مرحباً بك، قرأت طلبك لتصميم وبرمجة موقع احترافي لنشاطك التجاري. بصفتي متخصصاً في تطوير مواقع الويب السريعة والمتجاوبة بالذكاء الاصطناعي، يسرني تنفيذ موقعك بأعلى كفاءة تسويقية:

لماذا تختار هذا العرض؟
1. واجهة متجاوبة 100% وفائقة السرعة على هواتف العملاء
2. ربط مباشر وفوري مع رقم الواتساب لاستقبال الطلبات بفاتورة جاهزة
3. تهيئة سيو (SEO) كاملة للظهور في محركات بحث جوجل في منطقتك الجغرافية
4. إدراج خريطة جوجل التفاعلية وأوقات العمل ومناطق التوصيل

نموذج حي من أعمالي (موقع مطعم مشويات متكامل):
${currentUrl}

سأقوم بتسليم المشروع كاملاً وجاهزاً للعمل مع إمكانية التعديل حتى نصل للنتيجة المثالية.`;

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto" dir="rtl">
      <div className="w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-3xl p-5 sm:p-7 shadow-2xl text-right space-y-5 text-white my-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>أدوات تسويق وبيع هذا الموقع (2000ج - 4000ج)</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                نماذج جاهزة للنسخ: رسالة المطعم + خمسات + مستقل
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-xl hover:bg-zinc-900 transition-colors"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-3 gap-2 p-1 bg-zinc-900 rounded-xl border border-zinc-800 text-xs font-bold">
          <button
            onClick={() => setActiveTab('pitch')}
            className={`py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'pitch'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            <span>رسالة صاحب المطعم</span>
          </button>

          <button
            onClick={() => setActiveTab('khamsat')}
            className={`py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'khamsat'
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>وصف خدمة خمسات</span>
          </button>

          <button
            onClick={() => setActiveTab('mostaql')}
            className={`py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'mostaql'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>عرض مستقل</span>
          </button>
        </div>

        {/* Tab 1: Direct Pitch to Owner */}
        {activeTab === 'pitch' && (
          <div className="space-y-3 animate-fadeIn">
            <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between gap-3 text-xs">
              <div>
                <strong className="text-emerald-300 block">ابعتها لصاحب مشويات أبو عمر (01095577062)</strong>
                <span className="text-zinc-400 text-[11px]">
                  رسالة احترافية ومباشرة تغلق الصفقة بـ 2000ج كأول مطعم في قنا.
                </span>
              </div>
              <button
                onClick={() => copyText(pitchMessage, 'pitch')}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shrink-0 ${
                  copiedKey === 'pitch'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-emerald-500 hover:bg-emerald-400 text-zinc-950'
                }`}
              >
                {copiedKey === 'pitch' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedKey === 'pitch' ? 'تم النسخ ✓' : 'نسخ الرسالة'}</span>
              </button>
            </div>

            <pre className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans whitespace-pre-wrap select-all max-h-56 overflow-y-auto">
              {pitchMessage}
            </pre>

            <div className="flex gap-2">
              <a
                href={`https://wa.me/201095577062?text=${encodeURIComponent(pitchMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold text-center flex items-center justify-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>إرسال الرسالة عبر واتساب للرقم 01095577062 فوراً</span>
              </a>
            </div>
          </div>
        )}

        {/* Tab 2: Khamsat Gig */}
        {activeTab === 'khamsat' && (
          <div className="space-y-3 animate-fadeIn">
            <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-center justify-between gap-3 text-xs">
              <div>
                <strong className="text-amber-300 block">وصف خدمة خمسات متضمن رابط هذا الموقع</strong>
                <span className="text-zinc-400 text-[11px]">انشئ الخدمة بالسعر المقترح 5$ - 25$ مع تطويرات.</span>
              </div>
              <button
                onClick={() => copyText(gigFullText, 'khamsat')}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shrink-0 ${
                  copiedKey === 'khamsat'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-amber-500 hover:bg-amber-400 text-zinc-950'
                }`}
              >
                {copiedKey === 'khamsat' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedKey === 'khamsat' ? 'تم النسخ ✓' : 'نسخ وصف خمسات'}</span>
              </button>
            </div>

            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-300 select-all">
              العنوان: {gigTitle}
            </div>

            <pre className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans whitespace-pre-wrap select-all max-h-52 overflow-y-auto">
              {gigFullText}
            </pre>
          </div>
        )}

        {/* Tab 3: Mostaql Proposal */}
        {activeTab === 'mostaql' && (
          <div className="space-y-3 animate-fadeIn">
            <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/30 flex items-center justify-between gap-3 text-xs">
              <div>
                <strong className="text-blue-300 block">نص عرض تقديم جاهز لمشاريع مستقل</strong>
                <span className="text-zinc-400 text-[11px]">قدم على مشاريع تصميم المواقع ومطاعم المأكولات.</span>
              </div>
              <button
                onClick={() => copyText(mostaqlProposal, 'mostaql')}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shrink-0 ${
                  copiedKey === 'mostaql'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-blue-500 hover:bg-blue-400 text-zinc-950'
                }`}
              >
                {copiedKey === 'mostaql' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedKey === 'mostaql' ? 'تم النسخ ✓' : 'نسخ عرض مستقل'}</span>
              </button>
            </div>

            <pre className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans whitespace-pre-wrap select-all max-h-56 overflow-y-auto">
              {mostaqlProposal}
            </pre>
          </div>
        )}

        {/* Pro Tip Callout */}
        <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-400 flex items-center gap-2">
          <Award className="w-4 h-4 text-orange-400 shrink-0" />
          <span>
            💡 نصيحة المبيعات: لو حبيت تبيعه لمطعم آخر، ببساطة نغير الاسم إلى "مشويات قنا" أو اسم المطعم الجديد ومعاك قالب تبيعه 10 مرات!
          </span>
        </div>

        {/* Close Button */}
        <div className="flex justify-end pt-1">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs transition-colors"
          >
            إغلاق
          </button>
        </div>

      </div>
    </div>
  );
};
