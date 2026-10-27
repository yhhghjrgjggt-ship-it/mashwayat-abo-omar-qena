import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, Sparkles, Flame } from 'lucide-react';
import { MENU_ITEMS, MenuItem, RESTAURANT_INFO } from '../data/restaurantData';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [addedIds, setAddedIds] = useState<{ [id: string]: boolean }>({});

  const categories = [
    { id: 'all', label: 'كل الأصناف' },
    { id: 'grills', label: 'مشويات على الفحم' },
    { id: 'tajines', label: 'طواجن ومحاشي' },
    { id: 'sandwiches', label: 'سندوتشات وحواوشي' },
    { id: 'appetizers', label: 'مقبلات وسلطات' },
    { id: 'desserts', label: 'حلويات ومشروبات' }
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  return (
    <section id="menu" className="py-16 lg:py-24 bg-zinc-950 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-800/80">
          <div>
            <div className="inline-flex items-center gap-1.5 text-orange-500 font-bold text-xs uppercase tracking-wider mb-2">
              <Flame className="w-4 h-4 fill-orange-500" />
              <span>قائمة الطعام المعتمدة</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              مشويات أبو عمر - قنا
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              أفضل مشويات على الفحم في قنا (الشؤون، شارع اليافطة، والمساكن). لحوم بلدي طازجة 100% يومياً، مع قائمة الأسعار الرسمية والتوصيل السريع.
            </p>
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="ابحث عن صنف (كفتة، كباب، حواوشي)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 focus:border-orange-500 text-white placeholder-zinc-500 text-xs sm:text-sm rounded-xl py-2.5 pr-10 pl-4 outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
              >
                مسح
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs (Segmented Control per frontend-design rules) */}
        <div className="py-6 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 p-1.5 bg-zinc-900/90 border border-zinc-800 rounded-xl w-max">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md shadow-orange-600/20'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-16 text-center text-zinc-400 space-y-3">
            <p className="text-lg">لم يتم العثور على أصناف تطابق بحثك "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-xs text-orange-400 font-semibold hover:underline"
            >
              عرض جميع الأصناف
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col bg-zinc-900/90 rounded-2xl border border-zinc-800/90 hover:border-orange-500/40 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-orange-950/20"
              >
                {/* Food Image with Fallback */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-800">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback gradient if image fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />

                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute top-3 right-3 bg-zinc-950/80 backdrop-blur-md border border-orange-500/30 text-orange-400 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                      {item.badge}
                    </div>
                  )}

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-3 right-3 bg-zinc-950/90 backdrop-blur-md border border-zinc-700/80 px-3 py-1 rounded-xl flex items-baseline gap-1 text-white shadow-md">
                    <span className="text-orange-400 font-extrabold text-lg tabular-nums">
                      {item.price}
                    </span>
                    <span className="text-zinc-400 text-xs font-semibold">ج.م</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Clean unboxed metadata separator */}
                    <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
                      <span>{item.categoryName}</span>
                      {item.weightOrPortion && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-zinc-400">{item.weightOrPortion}</span>
                        </>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Add Button */}
                  <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                    <div className="text-xs text-zinc-500">
                      {item.spicy ? '🌶️ حار حسب الرغبة' : '🔥 شوي فحم طبيعي'}
                    </div>

                    <button
                      onClick={() => handleAdd(item)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 ${
                        addedIds[item.id]
                          ? 'bg-emerald-600 text-white'
                          : 'bg-orange-600 hover:bg-orange-500 text-white shadow-orange-600/20'
                      }`}
                      aria-label={`أضف ${item.name} إلى السلة`}
                    >
                      {addedIds[item.id] ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>تمت الإضافة!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>أضف للطلب</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Menu Quick Ordering Advice */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-orange-950/40 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-right">
            <h4 className="text-white font-bold text-base flex items-center gap-2 justify-center sm:justify-start">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span>عندك عزومة أو وليمة عائلية في قنا؟</span>
            </h4>
            <p className="text-zinc-400 text-xs sm:text-sm">
              نوفر سرافيس وأوزان خاصة للعزومات والمناسبات بالطلب المسبق مع خدمة التوصيل بالسخانات.
            </p>
          </div>
          <a
            href={`https://wa.me/${RESTAURANT_INFO.defaultWhatsapp}?text=${encodeURIComponent(
              'السلام عليكم، أود الاستفسار عن حجز عزومة مشويات من مشويات أبو عمر قنا'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-orange-400 hover:text-orange-300 font-bold text-xs sm:text-sm border border-orange-500/30 whitespace-nowrap transition-colors"
          >
            تنسيق عزومة واتساب ←
          </a>
        </div>

      </div>
    </section>
  );
};
