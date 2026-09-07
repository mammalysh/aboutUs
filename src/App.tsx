/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ============================================================================
 * 🌸 САЙТ-ВИЗИТКА МАГАЗИНА «МАММАЛЫШ» (для беременных и кормящих мам)
 * 
 * 🎨 Акцентные цвета:
 * - Небесно-голубой: #3CB3E5
 * - Нежно-розовый:   #E86B9A
 * 
 * 📝 ГДЕ МЕНЯТЬ КОНТАКТЫ (ИНСТРУКЦИЯ):
 * Все данные магазина (телефон, адрес, график, ссылки на Instagram, VK, MAX)
 * настраиваются в файле:
 * 👉 /src/storeConfig.ts
 * ============================================================================
 */

import React from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { ContactCard } from './components/ContactCard';
import { SocialLinksCard } from './components/SocialLinksCard';
import { StoreFeatures } from './components/StoreFeatures';
import { MapSection } from './components/MapSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F7] text-slate-800 font-['Nunito',sans-serif]">
      
      {/* Шапка сайта: логотип, статус работы и телефон */}
      <Header />

      {/* Основной контент */}
      <main className="flex-grow max-w-5xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-12" id="top">
        
        {/* Баннер магазина: приветствие и краткий обзор */}
        <HeroBanner />

        {/* Главные контакты: Адрес, Телефон, Часы и график работы */}
        <ContactCard />

        {/* Социальные сети: Instagram, VK, MAX */}
        <SocialLinksCard />

        {/* Особенности и категории: одежда для кормления, сумки в роддом, бандажи */}
        <StoreFeatures />

        {/* Ориентиры и как добраться */}
        <MapSection />

      </main>

      {/* Подвал сайта */}
      <Footer />

    </div>
  );
}
