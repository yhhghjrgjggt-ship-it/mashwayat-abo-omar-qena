import React, { useState } from 'react';
import { Star, CheckCircle, MessageSquarePlus, UserCheck, ThumbsUp } from 'lucide-react';
import { REVIEWS, Review } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    location: '',
    rating: 5,
    comment: '',
    orderedItem: ''
  });
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.comment.trim()) return;

    const createdReview: Review = {
      id: `rev-${Date.now()}`,
      name: newReview.name,
      location: newReview.location || 'قنا',
      rating: newReview.rating,
      date: 'الآن',
      comment: newReview.comment,
      orderedItem: newReview.orderedItem || 'مشويات مشكلة',
      verified: true
    };

    setReviewsList([createdReview, ...reviewsList]);
    setSubmittedFeedback(true);
    setTimeout(() => {
      setSubmittedFeedback(false);
      setShowAddModal(false);
      setNewReview({ name: '', location: '', rating: 5, comment: '', orderedItem: '' });
    }, 1500);
  };

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-zinc-900/60 border-t border-b border-zinc-800 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-orange-500 font-bold text-xs uppercase tracking-wider mb-2">
              <Star className="w-4 h-4 fill-orange-500" />
              <span>ثقة أهل الصعيد</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              آراء عملاء مشويات أبو عمر في قنا
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              تجارب حقيقية من أهالي قنا والشؤون والجامعة مع طعم مشوياتنا وسرعة التوصيل.
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs sm:text-sm border border-zinc-700 hover:border-orange-500/50 transition-colors w-max"
          >
            <MessageSquarePlus className="w-4 h-4 text-orange-400" />
            <span>شاركنا تجربتك ورأيك</span>
          </button>
        </div>

        {/* Rating Scoreboard / Proof Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-center">
            <span className="text-2xl sm:text-3xl font-black text-orange-400 tabular-nums">4.9 / 5</span>
            <div className="flex justify-center text-amber-400 text-xs my-1">★★★★★</div>
            <p className="text-xs text-zinc-400">تقييم عام ممتاز</p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-center">
            <span className="text-2xl sm:text-3xl font-black text-white tabular-nums">+1,500</span>
            <p className="text-xs text-zinc-400 mt-2">طلب ناجح داخل قنا</p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-center">
            <span className="text-2xl sm:text-3xl font-black text-emerald-400 tabular-nums">100%</span>
            <p className="text-xs text-zinc-400 mt-2">لحوم بلدي طازجة معتمدة</p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-center">
            <span className="text-2xl sm:text-3xl font-black text-amber-400 tabular-nums">35 دقيقة</span>
            <p className="text-xs text-zinc-400 mt-2">متوسط سرعة التوصيل</p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 flex flex-col justify-between space-y-4 hover:border-zinc-700 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-white text-base flex items-center gap-2">
                      <span>{rev.name}</span>
                      {rev.verified && (
                        <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/50 border border-emerald-500/20 px-2 py-0.5 rounded-full font-medium">
                          <CheckCircle className="w-3 h-3" />
                          طلب موثق
                        </span>
                      )}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-zinc-500 mt-0.5">
                      <span>{rev.location}</span>
                      <span aria-hidden="true">·</span>
                      <span>{rev.date}</span>
                    </div>
                  </div>

                  <div className="flex text-amber-400 text-sm">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              {rev.orderedItem && (
                <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
                  <span className="text-zinc-500">طلب: <strong className="text-zinc-300">{rev.orderedItem}</strong></span>
                  <div className="flex items-center gap-1 text-orange-400 font-semibold">
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>ينصح به بشدة</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Add Review Modal */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
            <div className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-2xl p-6 text-right space-y-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <h3 className="font-bold text-lg text-white">إضافة تقييم جديد لمشويات أبو عمر</h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="text-zinc-400 hover:text-white text-sm"
                >
                  ✕
                </button>
              </div>

              {submittedFeedback ? (
                <div className="py-8 text-center text-emerald-400 space-y-2">
                  <CheckCircle className="w-12 h-12 mx-auto" />
                  <p className="font-bold">شكراً لك! تم إضافة تقييمك بنجاح.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-3.5 text-xs sm:text-sm">
                  <div>
                    <label className="block text-zinc-400 mb-1">اسمك الكريم *</label>
                    <input
                      type="text"
                      required
                      placeholder="مثال: محمد القناوي"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-400 mb-1">المنطقة في قنا</label>
                    <input
                      type="text"
                      placeholder="مثال: الشؤون أو وسط البلد"
                      value={newReview.location}
                      onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-400 mb-1">الطبق الذي جربته</label>
                    <input
                      type="text"
                      placeholder="مثال: كفتة الحاتي أو ميكس جريل"
                      value={newReview.orderedItem}
                      onChange={(e) => setNewReview({ ...newReview, orderedItem: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-400 mb-1">التقييم (النجوم)</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReview({ ...newReview, rating: star })}
                          className={`p-2 rounded-lg border ${
                            newReview.rating >= star
                              ? 'border-amber-500 text-amber-400 bg-amber-500/10'
                              : 'border-zinc-800 text-zinc-600'
                          }`}
                        >
                          ★ {star}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-zinc-400 mb-1">رأيك بالتفصيل *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="اكتب تجربتك مع طعم المشويات وسرعة التوصيل..."
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white outline-none focus:border-orange-500"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowAddModal(false)}
                      className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 font-semibold"
                    >
                      إلغاء
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold"
                    >
                      نشر التقييم
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
