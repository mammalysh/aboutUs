import React from 'react';
import { Heart } from 'lucide-react';
import { STORE_CONFIG } from '../storeConfig';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-rose-100/70 bg-white/60 mt-12 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          {/* Бренд */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#E86B9A] to-[#3CB3E5] p-0.5 flex-shrink-0">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <Heart className="w-4 h-4 text-[#E86B9A] fill-[#E86B9A]/20" />
              </div>
            </div>
            <div>
              <span className="font-extrabold text-base text-slate-900 block leading-tight">
                {STORE_CONFIG.name}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {STORE_CONFIG.tagline}
              </span>
            </div>
          </div>

          {/* Копирайт и теплое пожелание */}
          <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-500">
            <p>© {currentYear} {STORE_CONFIG.name}. Все права защищены.</p>
            <p className="flex items-center justify-center sm:justify-end gap-1.5 text-slate-600 font-medium">
              <span>С заботой о мамах и малышах</span>
              <Heart className="w-3.5 h-3.5 text-[#E86B9A] fill-[#E86B9A]" />
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
