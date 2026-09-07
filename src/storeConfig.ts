/**
 * ============================================================================
 * 📝 НАСТРОЙКИ И ДАННЫЕ МАГАЗИНА «МАММАЛЫШ»
 * 
 * Инструкция:
 * Замените значения в полях ниже на ваши реальные данные.
 * Все изменения мгновенно отобразятся на сайте-визитке!
 * ============================================================================
 */

export interface WorkingScheduleItem {
  days: string;
  shortDays?: string; // Короткое обозначение для мобильных экранов (например «Пн», «Ср»)
  hours: string;
}

export interface StoreConfig {
  name: string;
  tagline: string;
  description: string;
  phone: {
    display: string; // Как телефон отображается пользователю
    raw: string;     // Телефон для клика и набора номера (без пробелов, скобок и дефисов)
  };
  address: {
    city: string;
    street: string;
    landmark?: string; // Ориентир (например, этаж, ТЦ, вход)
    yandexMapsUrl: string;
    gis2Url?: string;
    googleMapsUrl: string;
  };
  schedule: {
    summary: string; // Краткое описание
    details: WorkingScheduleItem[];
    note?: string; // Например, «Без перерыва на обед»
  };
  socialLinks: {
    instagram: {
      url: string;
      handle: string; // Никнейм, например @mammalysh
      hint: string;
    };
    vk: {
      url: string;
      name: string; // Например, vk.com/mammalysh
      hint: string;
    };
    max: {
      url: string;
      label: string;
      hint: string;
    };
    // Дополнительные каналы (можно включить или изменить)
    telegram?: {
      url: string;
      handle: string;
    };
    whatsapp?: {
      url: string;
      phone: string;
    };
  };
  features: Array<{
    title: string;
    desc: string;
    icon: string;
  }>;
}

export const STORE_CONFIG: StoreConfig = {
  // 🏷️ НАЗВАНИЕ МАГАЗИНА
  name: 'Маммалыш',

  // 🌸 КОРОТКИЙ СЛОГАН
  tagline: 'Магазин для беременных и кормящих мам',

  // 💬 ТЕПЛОЕ ОПИСАНИЕ МАГАЗИНА
  description:
    'С заботой о самом трепетном периоде. Удобная одежда, бережное белье, сумки в роддом и полезные аксессуары для будущих и кормящих мам в уютной атмосфере.',

  // ============================================================================
  // 📞 1. НОМЕР ТЕЛЕФОНА
  // ============================================================================
  phone: {
    display: '+7 (953) 918-65-71',
    raw: '+79539186571',
  },

  // ============================================================================
  // 📍 2. АДРЕС И КАРТЫ
  // ============================================================================
  address: {
    city: 'г. Томск',
    street: 'пер. 1905г 14/1 НОВЫЙ ГУМ',
    landmark: 'Главный вход. 2 этаж. Из лифта направо',

    // 👉 Ссылка на Яндекс.Карты
    yandexMapsUrl: 'https://yandex.ru/maps/org/mammalysh/159275118667/?ll=84.950150%2C56.494015&mode=search&sctx=ZAAAAAgBEAAaKAoSCZPF%2FUemPFVAEa4q%2B64IPkxAEhIJj3IwmwDD3j8RgIKLFTWYxD8iBgABAgMEBSgKOABAvo8GSAFibHJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vQWR2ZXJ0cy9SZWFycmFuZ2VCeUF1Y3Rpb24vU2ltaWxhck9yZ3NMaXN0QXVjdGlvbi9DYW5kaWRhdGVTZWFyY2hSYWRpdXNJbk1ldGVycz0xMDAwMGJscmVhcnI9c2NoZW1lX0xvY2FsL0dlby9BZHZlcnRzL1JlYXJyYW5nZUJ5QXVjdGlvbi9TaW1pbGFyT3Jnc0xpc3RBdWN0aW9uL1VzZUhpZ2hSZWNhbGxIYXJkUnVicmljQ2xhc3NpZmllcj0xagJydZ0BzczMPaABAKgBAL0Br0XlGMIBBsvgpazRBIICENCc0LDQvNC80LDQu9GL0YiKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=84.950150%2C56.494015&sspn=0.015020%2C0.005027&text=%D0%9C%D0%B0%D0%BC%D0%BC%D0%B0%D0%BB%D1%8B%D1%88&z=17',

    // 👉 Ссылка на 2ГИС
    gis2Url: 'https://2gis.ru/tomsk/search/%D0%BC%D0%B0%D0%BC%D0%BC%D0%B0%D0%BB%D1%8B%D1%88/firm/70000001094326168/84.950115%2C56.494058?m=84.950115%2C56.494058%2F13.91',

    // 👉 Ссылка на Google Карты
    googleMapsUrl: 'https://www.google.com/maps/place/%D0%9C%D0%B0%D0%BC%D0%9C%D0%B0%D0%BB%D1%8B%D1%88/@56.4941593,84.9120265,14z/data=!4m10!1m2!2m1!1z0LzQsNC80LzQsNC70YvRiA!3m6!1s0x4326934cbfd9a801:0xeda9d0d79f91c948!8m2!3d56.4941593!4d84.9501353!15sChDQvNCw0LzQvNCw0LvRi9GIIgOIAQFaEiIQ0LzQsNC80LzQsNC70YvRiJIBD21hdGVybml0eV9zdG9yZeABAA!16s%2Fg%2F11b8twwn86?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D',
  },

  // ============================================================================
  // ⏰ 3. ЧАСЫ И ГРАФИК РАБОТЫ
  // ============================================================================
  schedule: {
    summary: 'Ср, Пт: 10:00 – 19:00 • Сб, Вс: 13:00 – 18:00',
    
    details: [
      { days: 'Понедельник', shortDays: 'Пн', hours: 'Выходной' },
      { days: 'Вторник', shortDays: 'Вт', hours: 'Выходной' },
      { days: 'Среда', shortDays: 'Ср', hours: '10:00 – 19:00' },
      { days: 'Четверг', shortDays: 'Чт', hours: 'Выходной' },
      { days: 'Пятница', shortDays: 'Пт', hours: '10:00 – 19:00' },
      { days: 'Суббота', shortDays: 'Сб', hours: '13:00 – 18:00' },
      { days: 'Воскресенье', shortDays: 'Вс', hours: '13:00 – 18:00' },
    ],
    
    note: 'Пн, Вт, Чт — выходные дни',
  },

  // ============================================================================
  // 🌐 4. СОЦИАЛЬНЫЕ СЕТИ И МЕССЕНДЖЕРЫ
  // ============================================================================
  socialLinks: {
    // 👉 1) INSTAGRAM:
    instagram: {
      url: 'https://instagram.com/mammalysh',
      handle: '@mammalysh',
      hint: 'Новинки, обзоры и отзывы',
    },

    // 👉 2) VK (ВКОНТАКТЕ):
    vk: {
      url: 'https://vk.com/mammalysh',
      name: 'vk.com/mammalysh',
      hint: 'Каталог, акции и живое общение',
    },

    // 👉 3) MAX:
    max: {
      url: 'https://max.ru/mammalysh',
      label: 'Профиль в MAX',
      hint: 'Связь с консультантом онлайн',
    },

    // 👉 4) TELEGRAM:
    telegram: {
      url: 'https://t.me/mammalysh',
      handle: '@mammalysh',
    },

    // 👉 5) WHATSAPP:
    whatsapp: {
      url: 'https://wa.me/79539186571',
      phone: '+7 (953) 918-65-71',
    },
  },

  // 🌿 ПРЕИМУЩЕСТВА И КАТЕГОРИИ ДЛЯ ПОКУПАТЕЛЕЙ
  features: [
    {
      title: 'Бережная одежда & белье',
      desc: 'Натуральные гипоаллергенные ткани и удобный крой для растущего животика и легкого кормления.',
      icon: 'Heart',
    },
    {
      title: 'Сумки в роддом & уход',
      desc: 'Готовые комплекты, разрешенные во всех роддомах, гигиена и послеродовые бандажи.',
      icon: 'ShoppingBag',
    },
    {
      title: 'Примерка с заботой',
      desc: 'Просторная примерочная, помощь с точным подбором размера белья и бандажей от опытных консультантов.',
      icon: 'Sparkles',
    },
    {
      title: 'Удобно с коляской',
      desc: 'Широкие проходы, комфортная зона ожидания и пандус у входа.',
      icon: 'Smile',
    },
  ],
};
