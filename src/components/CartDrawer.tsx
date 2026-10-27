import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Send, Phone, Bike, ShoppingBag, MapPin, CheckCircle2 } from 'lucide-react';
import { CartItem, CustomerOrder } from '../types/cart';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, newQuantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
  whatsappPhone: string;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  whatsappPhone
}) => {
  const [order, setOrder] = useState<CustomerOrder>({
    customerName: '',
    customerPhone: '',
    orderType: 'delivery',
    deliveryZone: RESTAURANT_INFO.deliveryZones[0],
    customAddress: '',
    notes: ''
  });

  const [orderSubmitted, setOrderSubmitted] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const deliveryFee = order.orderType === 'delivery' ? 0 : 0; // Free delivery in Qena!
  const grandTotal = subtotal + deliveryFee;

  const handleSendWhatsappOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (cartItems.length === 0) return;

    if (!order.customerName.trim() || !order.customerPhone.trim()) {
      alert('يرجى كتابة الاسم ورقم الهاتف لإكمال الطلب.');
      return;
    }

    if (order.orderType === 'delivery' && !order.customAddress.trim()) {
      alert('يرجى تحديد العنوان التفصيلي في قنا لتوصيل الطلب.');
      return;
    }

    // Format Arabic receipt message
    let message = `*طلب جديد من موقع مشويات أبو عمر - قنا* 🔥\n`;
    message += `--------------------------------\n`;
    message += `👤 *العميل:* ${order.customerName}\n`;
    message += `📞 *الهاتف:* ${order.customerPhone}\n`;
    message += `🛵 *نوع الطلب:* ${order.orderType === 'delivery' ? 'توصيل منازل (دليفري - مجاني للشؤون والمساكن)' : 'استلام من فرع الشؤون (شارع اليافطة)'}\n`;

    if (order.orderType === 'delivery') {
      message += `📍 *المنطقة:* ${order.deliveryZone}\n`;
      message += `🏠 *العنوان:* ${order.customAddress}\n`;
    }

    message += `--------------------------------\n`;
    message += `*تفاصيل الأصناف:*\n`;

    cartItems.forEach((ci, idx) => {
      message += `${idx + 1}. ${ci.item.name} (${ci.quantity} × ${ci.item.price} ج.م) = ${ci.item.price * ci.quantity} ج.م\n`;
    });

    message += `--------------------------------\n`;
    message += `💵 *المجموع الفرعي:* ${subtotal} ج.م\n`;
    message += `🛵 *رسوم التوصيل:* مجاناً داخل قنا (الشؤون والمساكن)!\n`;
    message += `💰 *الإجمالي المستحق:* ${grandTotal} ج.م\n`;

    if (order.notes.trim()) {
      message += `📝 *ملاحظات خاصة:* ${order.notes}\n`;
    }

    message += `\nشكراً، أرجو تأكيد الطلب وتحديد الوقت التقريبي للوصول!`;

    const cleanPhone = whatsappPhone.replace(/\D/g, '');
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;

    setOrderSubmitted(true);
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm transition-opacity">
      <div
        className="w-full max-w-lg bg-zinc-950 text-white h-full flex flex-col shadow-2xl border-r border-zinc-800 overflow-hidden text-right"
        dir="rtl"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/60">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-orange-600/20 text-orange-500 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">سلة الطلبات</h3>
              <p className="text-xs text-zinc-400">
                {cartItems.length} {cartItems.length === 1 ? 'صنف مختار' : 'أصناف مختارة'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
            aria-label="إغلاق السلة"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {orderSubmitted ? (
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-white">تم فتح محادثة الواتساب بنجاح!</h4>
            <p className="text-sm text-zinc-400 max-w-sm">
              تم إرسال تفاصيل طلبك مباشرة لإدارة مطعم أبو عمر في قنا لتأكيد تجهيز المشويات ساخنة على الفحم فوراً.
            </p>
            <div className="pt-4 flex gap-3">
              <button
                onClick={() => {
                  setOrderSubmitted(false);
                  onClearCart();
                  onClose();
                }}
                className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold"
              >
                إنهاء وإفراغ السلة
              </button>
              <button
                onClick={() => setOrderSubmitted(false)}
                className="px-4 py-2.5 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-semibold"
              >
                العودة للطلب
              </button>
            </div>
          </div>
        ) : cartItems.length === 0 ? (
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-600 flex items-center justify-center">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-zinc-300">سلتك فارغة حالياً</h4>
            <p className="text-xs text-zinc-500 max-w-xs">
              تصفح أصناف الكباب والكفتة والطواجن وأضف ما تشتهيه من قائمة مشويات أبو عمر.
            </p>
            <button
              onClick={onClose}
              className="mt-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold"
            >
              تصفح المنيو الآن
            </button>
          </div>
        ) : (
          <>
            {/* Scrollable Items & Checkout Form */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6">
              
              {/* Itemized List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-zinc-400 font-semibold">
                  <span>الأصناف المختارة</span>
                  <button
                    onClick={onClearCart}
                    className="text-red-400 hover:text-red-300 flex items-center gap-1 text-[11px]"
                  >
                    <Trash2 className="w-3 h-3" />
                    مسح السلة
                  </button>
                </div>

                <div className="space-y-2.5">
                  {cartItems.map((ci) => (
                    <div
                      key={ci.item.id}
                      className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={ci.item.image}
                          alt={ci.item.name}
                          className="w-12 h-12 rounded-lg object-cover bg-zinc-800 shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="min-w-0">
                          <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                            {ci.item.name}
                          </h4>
                          <span className="text-xs text-orange-400 font-bold tabular-nums">
                            {ci.item.price * ci.quantity} ج.م
                          </span>
                        </div>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-2 shrink-0">
                        <div className="flex items-center bg-zinc-800 border border-zinc-700 rounded-lg p-0.5">
                          <button
                            onClick={() => onUpdateQuantity(ci.item.id, ci.quantity - 1)}
                            className="p-1 text-zinc-400 hover:text-white transition-colors"
                            aria-label="تقليل الكمية"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2 text-xs font-bold text-white tabular-nums">
                            {ci.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(ci.item.id, ci.quantity + 1)}
                            className="p-1 text-zinc-400 hover:text-white transition-colors"
                            aria-label="زيادة الكمية"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(ci.item.id)}
                          className="p-1.5 text-zinc-500 hover:text-red-400 transition-colors"
                          aria-label="حذف الصنف"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Options & Customer Form */}
              <form onSubmit={handleSendWhatsappOrder} className="space-y-4 pt-4 border-t border-zinc-800">
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <span>بيانات التوصيل في قنا</span>
                </div>

                {/* Delivery vs Pickup Selector */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-zinc-900 rounded-xl border border-zinc-800 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setOrder({ ...order, orderType: 'delivery' })}
                    className={`py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      order.orderType === 'delivery'
                        ? 'bg-orange-600 text-white shadow-sm'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Bike className="w-3.5 h-3.5" />
                    <span>توصيل دليفري (مجاني)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrder({ ...order, orderType: 'pickup' })}
                    className={`py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      order.orderType === 'pickup'
                        ? 'bg-orange-600 text-white shadow-sm'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <span>استلام من الفرع (الشؤون)</span>
                  </button>
                </div>

                {/* Customer Name */}
                <div>
                  <label className="block text-[11px] font-semibold text-zinc-400 mb-1">
                    الاسم بالكامل *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: أحمد عبد الرحيم"
                    value={order.customerName}
                    onChange={(e) => setOrder({ ...order, customerName: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-orange-500 text-white text-xs sm:text-sm rounded-xl px-3 py-2 outline-none"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-[11px] font-semibold text-zinc-400 mb-1">
                    رقم تليفونك (واتساب) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="010xxxxxxxx"
                    value={order.customerPhone}
                    onChange={(e) => setOrder({ ...order, customerPhone: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-orange-500 text-white text-xs sm:text-sm rounded-xl px-3 py-2 outline-none text-left"
                    dir="ltr"
                  />
                </div>

                {/* Delivery Zone Dropdown if delivery */}
                {order.orderType === 'delivery' && (
                  <>
                    <div>
                      <label className="block text-[11px] font-semibold text-zinc-400 mb-1">
                        منطقة التوصيل في قنا *
                      </label>
                      <select
                        value={order.deliveryZone}
                        onChange={(e) => setOrder({ ...order, deliveryZone: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-800 focus:border-orange-500 text-white text-xs sm:text-sm rounded-xl px-3 py-2 outline-none"
                      >
                        {RESTAURANT_INFO.deliveryZones.map((zone) => (
                          <option key={zone} value={zone} className="bg-zinc-900 text-white">
                            {zone}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-zinc-400 mb-1">
                        العنوان التفصيلي (الشارع، رقم العمارة، علامة مميزة) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="مثال: شارع الشؤون بجوار صيدلية كذا، الدور الثاني"
                        value={order.customAddress}
                        onChange={(e) => setOrder({ ...order, customAddress: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-800 focus:border-orange-500 text-white text-xs sm:text-sm rounded-xl px-3 py-2 outline-none"
                      />
                    </div>
                  </>
                )}

                {/* Special notes */}
                <div>
                  <label className="block text-[11px] font-semibold text-zinc-400 mb-1">
                    ملاحظات للطلب (اختياري)
                  </label>
                  <input
                    type="text"
                    placeholder="مثال: زيادة طحينة، بدون بصل، عيش زيادة..."
                    value={order.notes}
                    onChange={(e) => setOrder({ ...order, notes: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-orange-500 text-white text-xs rounded-xl px-3 py-2 outline-none"
                  />
                </div>
              </form>
            </div>

            {/* Sticky Bottom Summary & Send Button */}
            <div className="p-4 sm:p-5 bg-zinc-900 border-t border-zinc-800 space-y-3">
              <div className="space-y-1.5 text-xs text-zinc-400">
                <div className="flex justify-between">
                  <span>المجموع الفرعي:</span>
                  <span className="font-bold text-white tabular-nums">{subtotal} ج.م</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>خدمة التوصيل داخل قنا:</span>
                  <span className="text-emerald-400 font-bold">مجاناً اليوم! 🎉</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base font-extrabold text-white pt-2 border-t border-zinc-800">
                  <span>الإجمالي للدفع (عند الاستلام):</span>
                  <span className="text-orange-400 font-black tabular-nums">{grandTotal} ج.م</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={handleSendWhatsappOrder}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-transform active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>تأكيد وإرسال الطلب عبر واتساب</span>
                </button>

                <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-1">
                  <span>الدفع كاش عند الاستلام</span>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="text-orange-400 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <Phone className="w-3 h-3" />
                    <span>أو اتصل: {RESTAURANT_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
