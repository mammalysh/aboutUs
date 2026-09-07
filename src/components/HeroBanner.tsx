import React from 'react';
import { Sparkles, MapPin, Clock, Phone } from 'lucide-react';
import { STORE_CONFIG } from '../storeConfig';
import { getStoreStatus } from '../utils/scheduleHelper';

export function HeroBanner() {
  const status = getStoreStatus();

  return (
    <section className="relative overflow-hidden rounded-3xl bg-white border border-rose-100/80 shadow-xs p-5 sm:p-8 md:p-10 mb-6 sm:mb-8">
      {/* Мягкие акцентные фоновые пятна */}
      <div 
        className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#E86B9A]/10 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-[#3CB3E5]/10 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-3xl">
        
        {/* Бейджик статуса */}
        <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold tracking-wide uppercase bg-[#E86B9A]/10 text-[#E86B9A] border border-[#E86B9A]/20">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            Официальный сайт-визитка
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-slate-100 text-slate-700">
            <span className={`w-2 h-2 rounded-full shrink-0 ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'}`} />
            <span>{status.statusText}</span>
          </span>
        </div>

        {/* Главный заголовок */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-2 sm:mb-3">
          Магазин <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E86B9A] to-[#3CB3E5]">«{STORE_CONFIG.name}»</span>
        </h1>

        {/* Подзаголовок и описание */}
        <p className="text-base sm:text-xl font-bold text-slate-700 mb-2 sm:mb-3 leading-snug">
          {STORE_CONFIG.tagline}
        </p>

        <p className="text-xs sm:text-base text-slate-600 leading-relaxed mb-4 sm:mb-6 max-w-2xl">
          {STORE_CONFIG.description}
        </p>

        {/* Информационные плашки для быстрого обзора (на планшетах и ПК) */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-3 pt-5 border-t border-slate-100">
          
          <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-100/80">
            <div className="w-8 h-8 rounded-xl bg-[#3CB3E5]/10 flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-4 h-4 text-[#3CB3E5]" />
            </div>
            <div className="min-w-0">
              <span className="block text-xs font-bold text-slate-800">{STORE_CONFIG.address.city}</span>
              <span className="text-[11px] text-slate-500 truncate block">{STORE_CONFIG.address.street}</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-100/80">
            <div className="w-8 h-8 rounded-xl bg-[#E86B9A]/10 flex items-center justify-center shrink-0 mt-0.5">
              <Phone className="w-4 h-4 text-[#E86B9A]" />
            </div>
            <div className="min-w-0">
              <span className="block text-xs font-bold text-slate-800 whitespace-nowrap">{STORE_CONFIG.phone.display}</span>
              <span className="text-[11px] text-slate-500">Звонки и консультации</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-100/80">
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 mt-0.5">
              <Clock className="w-4 h-4 text-amber-600" />
            </div>
            <div className="min-w-0">
              <span className="block text-xs font-bold text-slate-800">{STORE_CONFIG.schedule.summary}</span>
              <span className="text-[11px] text-slate-500 truncate block">{STORE_CONFIG.schedule.note}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
