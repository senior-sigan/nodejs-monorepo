import { formatDistance } from 'date-fns';
import { ru } from 'date-fns/locale';
import { printer } from './printer';

export function printDates() {
  const date = formatDistance(
    new Date(2016, 7, 1),
    new Date(2015, 0, 1),
    { locale: ru },
  );
  printer(`Example New modules`);
  return date;
}
