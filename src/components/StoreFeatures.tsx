import React from 'react';
import { Heart, ShoppingBag, Sparkles, Smile, ShieldCheck, Truck } from 'lucide-react';
import { STORE_CONFIG } from '../storeConfig';

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-5 h-5 text-[#E86B9A]" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-[#3CB3E5]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#E86B9A]" />,
  Smile: <Smile className="w-5 h-5 text-[#3CB3E5]" />,
};

export function StoreFeatures() {
  return (
    <section className="mb-8">
      <div className="text-center max-w-xl mx-auto mb-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Почему будущие мамы выбирают «{STORE_CONFIG.name}»
        </h2>
        <p className="text-sm text-slate-500">
          Мы создали пространство, где каждая мама чувствует заботу, комфорт и внимание к деталям
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STORE_CONFIG.features.map((feature, idx) => (
          <div
            key={idx}
            className="rounded-3xl bg-white border border-slate-200/80 p-5 sm:p-6 shadow-xs hover:shadow-sm hover:border-[#E86B9A]/30 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                {iconMap[feature.icon] || <Heart className="w-5 h-5 text-[#E86B9A]" />}
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">
                {feature.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-[#3CB3E5]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#3CB3E5]" />
              <span>Сертифицированное качество</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
