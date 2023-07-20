/*Skript för att hantera State / reaktivitet. Av: Marcus Andersson, maan217@student.miun.se 
Utifrån exempel: https://vuejs.org/guide/scaling-up/state-management.html#what-is-state-management*/

import { reactive } from "vue";

export const store = reactive({
  test: 0,
});
