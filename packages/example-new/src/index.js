import dayjs from "dayjs";
// import "dayjs/locale/ru";
import { printer } from "./printer";

export function printToday() {
  const date = dayjs().locale("ru-ru").format();
  printer(`Example New modules`);
  return date;
}