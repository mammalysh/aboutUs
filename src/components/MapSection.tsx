import React from 'react';
import { MapPin, Car, Bus, ExternalLink } from 'lucide-react';
import { STORE_CONFIG } from '../storeConfig';

export function MapSection() {
  const { address } = STORE_CONFIG;

  return (
    <section className="mb-8 rounded-3xl bg-white border border-slate-200/80 p-5 sm:p-8 shadow-xs overflow-hidden">
      <div className="mb-5 sm:mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-[#3CB3E5] block mb-1">
          Ориентиры
        </span>
        <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Как добраться до магазина
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        
        {/* На автомобиле */}
        <div className="p-4 sm:p-5 rounded-2xl bg-sky-50/50 border border-sky-100">
          <div className="flex items-center gap-2.5 text-sm font-bold text-slate-900 mb-2">
            <div className="w-7 h-7 rounded-lg bg-[#3CB3E5]/15 flex items-center justify-center text-[#3CB3E5] shrink-0">
              <Car className="w-4 h-4" />
            </div>
            <span>На автомобиле</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Удобный подъезд со стороны главной улицы. У здания есть бесплатная парковка для посетителей магазина.
          </p>
        </div>

        {/* Общественным транспортом и пешком */}
        <div className="p-4 sm:p-5 rounded-2xl bg-rose-50/50 border border-rose-100">
          <div className="flex items-center gap-2.5 text-sm font-bold text-slate-900 mb-2">
            <div className="w-7 h-7 rounded-lg bg-[#E86B9A]/15 flex items-center justify-center text-[#E86B9A] shrink-0">
              <Bus className="w-4 h-4" />
            </div>
            <span>С коляской и пешком</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Остановка в шаговой доступности. На входе установлен пологий пандус для удобного заезда с коляской.
          </p>
        </div>

      </div>

      {/* Уютная плашка с адресом и одной аккуратной ссылкой */}
      <div className="mt-3 sm:mt-4 p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-700">
          <MapPin className="w-4 h-4 text-[#E86B9A] shrink-0" />
          <span>{address.city}, {address.street} {address.landmark ? `(${address.landmark})` : ''}</span>
        </div>

        <a
          href={address.yandexMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-bold text-[#fc3f1d] hover:underline touch-manipulation"
        >
          <span>Открыть в Яндекс Картах</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </section>
  );
}
