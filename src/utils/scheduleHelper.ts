export interface StoreOpenStatus {
  isOpen: boolean;
  statusText: string;
  subText: string;
  todaySchedule: string;
  currentDayIndex: number; // 0 = Sunday, 1 = Monday, ...
}

export function getStoreStatus(): StoreOpenStatus {
  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  // График:
  // Пн-Пт (1-5): 10:00 - 20:00 (600 - 1200 мин)
  // Сб (6): 10:00 - 19:00 (600 - 1140 мин)
  // Вс (0): 11:00 - 18:00 (660 - 1080 мин)

  let openTimeMinutes = 600; // 10:00
  let closeTimeMinutes = 1200; // 20:00
  let todaySchedule = '10:00 – 20:00';

  if (day === 6) {
    // Суббота
    openTimeMinutes = 600;
    closeTimeMinutes = 1140; // 19:00
    todaySchedule = '10:00 – 19:00';
  } else if (day === 0) {
    // Воскресенье
    openTimeMinutes = 660; // 11:00
    closeTimeMinutes = 1080; // 18:00
    todaySchedule = '11:00 – 18:00';
  }

  const isOpen = currentMinutes >= openTimeMinutes && currentMinutes < closeTimeMinutes;

  if (isOpen) {
    const closeHour = Math.floor(closeTimeMinutes / 60);
    const closeMin = closeTimeMinutes % 60;
    const closeFormatted = `${closeHour}:${closeMin === 0 ? '00' : closeMin}`;
    return {
      isOpen: true,
      statusText: 'Сейчас открыто',
      subText: `ждем вас сегодня до ${closeFormatted}`,
      todaySchedule,
      currentDayIndex: day,
    };
  } else {
    // Закрыто
    let nextOpenText = 'откроемся завтра в 10:00';
    if (day === 6) {
      nextOpenText = 'откроемся в воскресенье в 11:00';
    } else if (day === 0 && currentMinutes < openTimeMinutes) {
      nextOpenText = 'откроемся сегодня в 11:00';
    } else if (currentMinutes < openTimeMinutes) {
      nextOpenText = 'откроемся сегодня в 10:00';
    }

    return {
      isOpen: false,
      statusText: 'Сейчас закрыто',
      subText: nextOpenText,
      todaySchedule,
      currentDayIndex: day,
    };
  }
}
