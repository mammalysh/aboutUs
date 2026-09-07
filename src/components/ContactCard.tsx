import React, { useState } from 'react';
import { MapPin, Phone, Clock, Copy, Check, Navigation, Compass } from 'lucide-react';
import { STORE_CONFIG } from '../storeConfig';
import { getStoreStatus } from '../utils/scheduleHelper';

export function ContactCard() {
  const [copiedType, setCopiedType] = useState<'phone' | 'address' | null>(null);
  const status = getStoreStatus();

  const handleCopy = (text: string, type: 'phone' | 'address') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  const fullAddress = `${STORE_CONFIG.address.city}, ${STORE_CONFIG.address.street}`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
      
      {/* ========================================================================= */}
      {/* КАРТОЧКА 1: АДРЕС И ТЕЛЕФОН */}
      {/* ========================================================================= */}
      <div className="flex flex-col justify-between rounded-3xl bg-white border border-slate-200/80 p-4 sm:p-6 md:p-7 shadow-xs">
        <div>
          
          {/* Секция: Адрес */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[#3CB3E5]/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#3CB3E5]" />
              </div>
              <h2 className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight">
                Адрес магазина
              </h2>
            </div>
            
            {/* Кнопка копирования адреса */}
            <button
              type="button"
              onClick={() => handleCopy(fullAddress, 'address')}
              id="copy-address-button"
              className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors active:scale-95 touch-manipulation"
              title="Скопировать адрес"
            >
              {copiedType === 'address' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Скопировано</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Скопировать</span>
                </>
              )}
            </button>
          </div>

          <div className="bg-slate-50 rounded-2xl p-3.5 sm:p-4 border border-slate-100 mb-3">
            <p className="text-sm sm:text-base font-extrabold text-slate-900 mb-0.5">
              {STORE_CONFIG.address.city}
            </p>
            <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed mb-2">
              {STORE_CONFIG.address.street}
            </p>
            {STORE_CONFIG.address.landmark && (
              <p className="text-[11px] sm:text-xs text-slate-500 flex items-start gap-1 pt-2 border-t border-slate-200/70 leading-normal">
                <span className="font-bold text-slate-600 shrink-0">Ориентир:</span>
                <span>{STORE_CONFIG.address.landmark}</span>
              </p>
            )}
          </div>

          {/* Кнопка навигатора */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <a
              href={STORE_CONFIG.address.yandexMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="yandex-maps-link"
              className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs font-bold bg-[#fc3f1d]/10 hover:bg-[#fc3f1d]/20 text-[#fc3f1d] border border-[#fc3f1d]/20 transition-colors active:scale-98 touch-manipulation"
            >
              <Navigation className="w-3.5 h-3.5 shrink-0" />
              <span>Маршрут в Яндекс Картах</span>
            </a>

            {STORE_CONFIG.address.gis2Url && (
              <a
                href={STORE_CONFIG.address.gis2Url}
                target="_blank"
                rel="noopener noreferrer"
                id="2gis-maps-link"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors active:scale-98 touch-manipulation"
              >
                <Compass className="w-3.5 h-3.5 shrink-0" />
                <span>2ГИС</span>
              </a>
            )}
          </div>

          {/* Разделитель */}
          <div className="border-t border-slate-100 my-5" />

          {/* Секция: Телефон */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[#E86B9A]/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#E86B9A]" />
              </div>
              <h2 className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight">
                Номер телефона
              </h2>
            </div>

            <button
              type="button"
              onClick={() => handleCopy(STORE_CONFIG.phone.display, 'phone')}
              id="copy-phone-button"
              className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors active:scale-95 touch-manipulation"
              title="Скопировать телефон"
            >
              {copiedType === 'phone' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Скопировано</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Скопировать</span>
                </>
              )}
            </button>
          </div>

          <div className="bg-rose-50/40 border border-rose-100/80 rounded-2xl p-3.5 sm:p-4">
            <a
              href={`tel:${STORE_CONFIG.phone.raw}`}
              className="text-xl sm:text-2xl font-extrabold text-slate-900 hover:text-[#E86B9A] transition-colors block tracking-tight whitespace-nowrap"
              id="main-phone-link"
              title="Нажмите, чтобы позвонить"
            >
              {STORE_CONFIG.phone.display}
            </a>
            <p className="text-xs text-slate-500 mt-1">
              Нажмите на номер для вызова или скопируйте в буфер
            </p>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* КАРТОЧКА 2: ЧАСЫ И ГРАФИК РАБОТЫ */}
      {/* ========================================================================= */}
      <div className="flex flex-col justify-between rounded-3xl bg-white border border-slate-200/80 p-4 sm:p-6 md:p-7 shadow-xs">
        <div>
          
          {/* Шапка расписания: адаптивная, не ломается на узких смартфонах */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 mb-4">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[#3CB3E5]/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#3CB3E5]" />
              </div>
              <div className="min-w-0">
                <h2 className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight whitespace-nowrap">
                  Часы и график работы
                </h2>
                <span className="text-xs text-slate-500 font-medium block mt-0.5">
                  {STORE_CONFIG.schedule.summary}
                </span>
              </div>
            </div>

            {/* Статус открыто/закрыто */}
            <div className="self-start sm:self-auto pl-11 sm:pl-0">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${status.isOpen ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-800 border border-amber-200'}`}>
                <span className={`w-2 h-2 rounded-full shrink-0 ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                <span>{status.isOpen ? 'Открыто сейчас' : 'Сейчас закрыто'}</span>
              </span>
            </div>
          </div>

          {/* Таблица расписания по дням: аккуратная верстка без переноса слов */}
          <div className="space-y-2 mb-4">
            {STORE_CONFIG.schedule.details.map((item, idx) => {
              const isWeekendSat = status.currentDayIndex === 6 && item.days.includes('Суббота');
              const isWeekendSun = status.currentDayIndex === 0 && item.days.includes('Воскресенье');
              const isWeekday = status.currentDayIndex >= 1 && status.currentDayIndex <= 5 && item.days.includes('Пятница');
              const isToday = isWeekendSat || isWeekendSun || isWeekday;

              return (
                <div
                  key={idx}
                  className={`flex items-center justify-between gap-2 px-3 sm:px-3.5 py-3 rounded-2xl transition-all border ${
                    isToday
                      ? 'bg-rose-50/70 border-[#E86B9A]/40 text-slate-900 shadow-2xs'
                      : 'bg-slate-50 border-slate-100 text-slate-700'
                  }`}
                >
                  {/* День недели + бейдж «Сегодня» */}
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-xs sm:text-sm font-bold text-slate-900 whitespace-nowrap">
                      <span className="sm:hidden">{item.shortDays || item.days}</span>
                      <span className="hidden sm:inline">{item.days}</span>
                    </span>
                    {isToday && (
                      <span className="shrink-0 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#E86B9A] text-white tracking-wider whitespace-nowrap">
                        Сегодня
                      </span>
                    )}
                  </div>

                  {/* Часы работы: всегда в одну строку без разрыва дефиса */}
                  <span className={`shrink-0 text-xs sm:text-sm font-extrabold tabular-nums whitespace-nowrap ${isToday ? 'text-[#E86B9A]' : 'text-slate-900'}`}>
                    {item.hours}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Примечание */}
          {STORE_CONFIG.schedule.note && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-[#3CB3E5]/10 border border-[#3CB3E5]/20 text-xs text-slate-700 font-medium">
              <div className="w-2 h-2 rounded-full bg-[#3CB3E5] shrink-0" />
              <span>{STORE_CONFIG.schedule.note}</span>
            </div>
          )}

          <p className="mt-4 text-xs text-slate-500 leading-relaxed">
            По всем вопросам звоните по указанному телефону в рабочие часы магазина.
          </p>

        </div>
      </div>

    </div>
  );
}
