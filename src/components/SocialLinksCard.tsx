import React from 'react';
import { ExternalLink, MessageCircle, Sparkles, Send } from 'lucide-react';
import { STORE_CONFIG } from '../storeConfig';
import { InstagramIcon, VkIcon, MaxIcon, TelegramIcon, WhatsAppIcon } from './SocialIcons';

export function SocialLinksCard() {
  const { socialLinks } = STORE_CONFIG;

  return (
    <section id="socials" className="mb-8 scroll-mt-20">
      
      {/* Заголовок секции */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E86B9A] mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            Мы онлайн
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Социальные сети и связь
          </h2>
        </div>
        <p className="text-sm text-slate-500 max-w-sm">
          Подписывайтесь на обновления, задавайте вопросы консультантам и выбирайте товары онлайн
        </p>
      </div>

      {/* Сетка основных соцсетей: Instagram, VK, MAX */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
        
        {/* ========================================================================= */}
        {/* 1. INSTAGRAM (Розово-золотой градиент в стиле Instagram + акцент E86B9A) */}
        {/* ========================================================================= */}
        <div className="relative group rounded-3xl bg-white border border-rose-100 hover:border-[#E86B9A]/50 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-rose-100/50 to-transparent rounded-bl-full pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-amber-400 via-[#E86B9A] to-purple-600 p-0.5 shadow-sm group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-[#E86B9A]">
                  <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-rose-50 text-[#E86B9A] border border-rose-200/60">
                Instagram
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1 group-hover:text-[#E86B9A] transition-colors">
              {socialLinks.instagram.handle}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-5">
              {socialLinks.instagram.hint}
            </p>
          </div>

          <a
            href={socialLinks.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            id="instagram-link-button"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-[#E86B9A] to-pink-500 hover:from-[#d85888] hover:to-pink-600 text-white shadow-xs shadow-rose-200/50 transition-all active:scale-98 touch-manipulation min-h-[44px]"
          >
            <span>Перейти в Instagram</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* ========================================================================= */}
        {/* 2. VK (ВКОНТАКТЕ) */}
        {/* ========================================================================= */}
        <div className="relative group rounded-3xl bg-white border border-sky-100 hover:border-[#3CB3E5]/50 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-sky-100/50 to-transparent rounded-bl-full pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#0077FF] p-0.5 shadow-sm group-hover:scale-105 transition-transform flex items-center justify-center text-white">
                <VkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-sky-50 text-[#0077FF] border border-sky-200/60">
                ВКонтакте
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1 group-hover:text-[#0077FF] transition-colors">
              {socialLinks.vk.name}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-5">
              {socialLinks.vk.hint}
            </p>
          </div>

          <a
            href={socialLinks.vk.url}
            target="_blank"
            rel="noopener noreferrer"
            id="vk-link-button"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-[#0077FF] hover:bg-[#0066dc] text-white shadow-xs shadow-blue-200/50 transition-all active:scale-98 touch-manipulation min-h-[44px]"
          >
            <span>Открыть группу VK</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* ========================================================================= */}
        {/* 3. MAX (Акцент 3CB3E5) */}
        {/* ========================================================================= */}
        <div className="relative group rounded-3xl bg-white border border-[#3CB3E5]/30 hover:border-[#3CB3E5] p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#3CB3E5]/20 to-transparent rounded-bl-full pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#3CB3E5] p-0.5 shadow-sm group-hover:scale-105 transition-transform flex items-center justify-center text-white">
                <MaxIcon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-[#3CB3E5]/10 text-[#0f8cb8] border border-[#3CB3E5]/30">
                MAX
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1 group-hover:text-[#3CB3E5] transition-colors">
              {socialLinks.max.label}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-5">
              {socialLinks.max.hint}
            </p>
          </div>

          <a
            href={socialLinks.max.url}
            target="_blank"
            rel="noopener noreferrer"
            id="max-link-button"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-[#3CB3E5] hover:bg-[#2fa0d1] text-white shadow-xs shadow-[#3CB3E5]/30 transition-all active:scale-98 touch-manipulation min-h-[44px]"
          >
            <span>Открыть в MAX</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Дополнительные каналы для удобства (Telegram / WhatsApp) */}
      {(socialLinks.telegram || socialLinks.whatsapp) && (
        <div className="rounded-2xl bg-gradient-to-r from-rose-50/70 via-white to-sky-50/70 border border-slate-200/80 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
              <MessageCircle className="w-5 h-5 text-slate-700" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">Удобно общаться в мессенджерах?</p>
              <p className="text-[11px] sm:text-xs text-slate-500">Напишите нам для быстрого ответа или фото товара вживую</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {socialLinks.telegram && (
              <a
                href={socialLinks.telegram.url}
                target="_blank"
                rel="noopener noreferrer"
                id="telegram-link"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold transition-colors shadow-2xs min-h-[44px] touch-manipulation"
              >
                <TelegramIcon className="w-4 h-4 text-[#229ED9]" />
                <span>Telegram</span>
              </a>
            )}

            {socialLinks.whatsapp && (
              <a
                href={socialLinks.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                id="whatsapp-link"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold transition-colors shadow-2xs min-h-[44px] touch-manipulation"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            )}
          </div>
        </div>
      )}

    </section>
  );
}
