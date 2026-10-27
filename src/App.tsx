import React, { useState, useEffect } from 'react';
import { TopBanner } from './components/TopBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { CartDrawer } from './components/CartDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { KhamsatModal } from './components/KhamsatModal';
import { Footer } from './components/Footer';
import { RESTAURANT_INFO, MenuItem } from './data/restaurantData';
import { CartItem } from './types/cart';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('abu_omar_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isKhamsatModalOpen, setIsKhamsatModalOpen] = useState(false);
  const [whatsappPhone, setWhatsappPhone] = useState<string>(() => {
    try {
      return localStorage.getItem('abu_omar_wa_phone') || RESTAURANT_INFO.defaultWhatsapp;
    } catch {
      return RESTAURANT_INFO.defaultWhatsapp;
    }
  });

  // Save cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('abu_omar_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  // Save phone
  const handleUpdatePhone = (newPhone: string) => {
    setWhatsappPhone(newPhone);
    try {
      localStorage.setItem('abu_omar_wa_phone', newPhone);
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((ci) => (ci.item.id === itemId ? { ...ci, quantity: newQuantity } : ci))
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  const handleOrderNowClick = () => {
    const clean = whatsappPhone.replace(/\D/g, '');
    const url = `https://wa.me/${clean}?text=${encodeURIComponent(
      'السلام عليكم مشويات أبو عمر قنا، أود طلب مشويات دليفري الآن مع التوصيل المجاني داخل قنا (الشؤون والمساكن)'
    )}`;
    window.open(url, '_blank');
  };

  const handleOpenWhatsappDirect = () => {
    const clean = whatsappPhone.replace(/\D/g, '');
    const url = `https://wa.me/${clean}?text=${encodeURIComponent(
      'السلام عليكم مشويات أبو عمر قنا، أود الاستفسار والطلب الآن مع التوصيل المجاني داخل قنا - الشؤون والمساكن'
    )}`;
    window.open(url, '_blank');
  };

  const handleExploreMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-orange-600 selection:text-white" dir="rtl">
      {/* Step 2 Announcement: Free delivery inside Qena today */}
      <TopBanner onOrderNowClick={handleOrderNowClick} />

      {/* Modern Header Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenKhamsat={() => setIsKhamsatModalOpen(true)}
        onOrderNowClick={handleOrderNowClick}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with large grilled food showcase */}
        <Hero
          onOrderNowClick={handleExploreMenu}
          onOpenWhatsapp={handleOrderNowClick}
        />

        {/* Menu Section with real categories, prices, and 6 high-res food photos */}
        <MenuSection onAddToCart={handleAddToCart} />

        {/* Customer Reviews from Qena residents */}
        <ReviewsSection />

        {/* Google Maps Qena - El Sho'oun & Delivery zones */}
        <LocationSection />
      </main>

      {/* Interactive Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        whatsappPhone={whatsappPhone}
      />

      {/* Step 2: Floating Flying WhatsApp Button with 5-second phone editor */}
      <FloatingWhatsApp
        whatsappPhone={whatsappPhone}
        onUpdatePhone={handleUpdatePhone}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Step 3: Khamsat Gig Description Modal with 1-click copy feature */}
      <KhamsatModal
        isOpen={isKhamsatModalOpen}
        onClose={() => setIsKhamsatModalOpen(false)}
      />

      {/* Footer */}
      <Footer
        onOpenKhamsat={() => setIsKhamsatModalOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
      />
    </div>
  );
}
