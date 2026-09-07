import React from 'react';
import { Phone, Heart, Sparkles } from 'lucide-react';
import { STORE_CONFIG } from '../storeConfig';
import { getStoreStatus } from '../utils/scheduleHelper';

export function Header() {
  const status = getStoreStatus();

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#FAF9F7]/90 border-b border-rose-100/60 transition-all">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        
        {/* Логотип и название магазина */}
        <a 
          href="#top" 
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E86B9A] rounded-xl p-1 -m-1"
          id="header-logo-link"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-[#E86B9A] via-[#E86B9A] to-[#3CB3E5] p-0.5 shadow-xs shadow-rose-200/50 flex-shrink-0 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-[#E86B9A] fill-[#E86B9A]/20" />
            </div>
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg sm:text-2xl text-slate-800 tracking-tight leading-none group-hover:text-[#E86B9A] transition-colors truncate">
                {STORE_CONFIG.name}
              </span>
              <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-rose-50 text-[#E86B9A] border border-rose-200/60">
                <Sparkles className="w-3 h-3 text-[#E86B9A]" />
                для мам и малышей
              </span>
            </div>
            <span className="text-[11px] sm:text-xs text-slate-500 font-medium line-clamp-1 mt-0.5">
              {STORE_CONFIG.tagline}
            </span>
          </div>
        </a>

        {/* Правая часть: статус работы и телефон */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          
          {/* Статус «Открыто / Закрыто» */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-2xs text-xs font-medium text-slate-700">
            <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'}`} />
            <span>{status.statusText}</span>
            <span className="text-slate-400 font-normal">({status.subText})</span>
          </div>

          {/* Номер телефона */}
          <a
            href={`tel:${STORE_CONFIG.phone.raw}`}
            id="header-phone-button"
            className="flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2 rounded-full bg-white hover:bg-rose-50/50 border border-slate-200/90 hover:border-[#E86B9A]/40 text-slate-800 hover:text-[#E86B9A] font-bold text-xs sm:text-sm shadow-2xs transition-all active:scale-95"
            title="Позвонить в магазин"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3CB3E5]" />
            <span className="hidden sm:inline tracking-tight">{STORE_CONFIG.phone.display}</span>
            <span className="sm:hidden">Позвонить</span>
          </a>

        </div>

      </div>
    </header>
  );
}
