import { WorkingScheduleItem } from '../storeConfig';

/**
 * Точное определение, относится ли строка расписания к сегодняшнему дню
 * Поддерживает как отдельные дни (Понедельник, Среда, Вс...), так и диапазоны (Пн-Пт, Сб-Вс, Ежедневно).
 */
export function isScheduleItemToday(item: WorkingScheduleItem, date: Date = new Date()): boolean {
  const day = date.getDay(); // 0 - Вс, 1 - Пн, 2 - Вт, 3 - Ср, 4 - Чт, 5 - Пт, 6 - Сб
  
  const text = `${item.days} ${item.shortDays || ''}`.toLowerCase();

  // 1. Ежедневно
  if (text.includes('ежедневно') || text.includes('каждый день')) {
    return true;
  }

  // 2. Диапазон Пн — Пт / Будни
  if (
    (text.includes('пн') && text.includes('пт')) || 
    (text.includes('понедельник') && text.includes('пятниц')) ||
    text.includes('будни')
  ) {
    return day >= 1 && day <= 5;
  }

  // 3. Диапазон Сб — Вс / Выходные
  if (
    (text.includes('сб') && text.includes('вс')) ||
    (text.includes('суббот') && text.includes('воскресень')) ||
    (text.includes('выходн') && (day === 0 || day === 6))
  ) {
    return day === 0 || day === 6;
  }

  // 4. Одиночные дни
  switch (day) {
    case 1: // Понедельник
      return text.includes('понедельник') || text.includes('пн');
    case 2: // Вторник
      return text.includes('вторник') || text.includes('вт');
    case 3: // Среда
      return text.includes('сред') || text.includes('ср');
    case 4: // Четверг
      return text.includes('четверг') || text.includes('чт');
    case 5: // Пятница
      return text.includes('пятниц') || text.includes('пт');
    case 6: // Суббота
      return text.includes('суббот') || text.includes('сб');
    case 0: // Воскресенье
      return text.includes('воскресень') || text.includes('вс');
    default:
      return false;
  }
}

/**
 * Название текущего дня недели на русском языке
 */
export function getTodayTitle(date: Date = new Date()): string {
  const day = date.getDay();
  const dayNames = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];
  return dayNames[day] || '';
}
