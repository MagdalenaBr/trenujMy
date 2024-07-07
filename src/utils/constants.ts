import { DateTime } from "luxon";

export const NUM_OF_RESULTS = 9;

export const ARR_OF_GYM_MEMBERSHIP_ID = ['1', '2', '3', '4'];

export const TODAY_DAY = DateTime.now();

export const TODAY_DAY_END = TODAY_DAY.set({
  hour: 23,
  minute: 59,
  second: 59,
}).toString();

export const DEVICE_WIDTH = window.innerWidth;
