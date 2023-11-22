import { ulid } from "ulid";
import FormData from "form-data";
import { formatDistance, startOfMonth } from "date-fns";
import mongoose from "mongoose";

import {
  addDays as addDaysDateFns,
  addMonths as addMonthsFns,
  startOfDay as startOfDayDateFns,
  endOfDay as endOfDayDateFns,
  format as formatDateFns,
} from "date-fns";

export function sortByDate(a, b) {
  if (a.createdAt > b.createdAt) {
    return -1;
  } else return 1;
}



export function addMonths(data, months) {
  const newDate = addMonthsFns(data, months);
  return newDate;
}

export function startOfDay(data, days) {
  return startOfDayDateFns(data, days);
}

export function endOfDay(date) {
  return endOfDayDateFns(date);
}

export function startDate(date) {
  return new Date(
    new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      0,
      0,
      0,
    ).toISOString());
};


export function createNewDate(data) {
  const response = new Date(data);
  return response;
}

export function createNewDateFilter(data) {
  const response = new Date(data);
  const teste = Date.parse(response)
  if (Number.isNaN(teste)) {
    return null;
  }
  return response;
}

export function formatDate(data, type) {
  const response = formatDateFns(data, type);
  return response;
}


export function formData() {
  const form = new FormData();
  return form;
}



export function addHours(hours) {
  const currentTime = new Date();
  const response = new Date(
    currentTime.setHours(currentTime.getHours() + hours)
  );

  return response;
}

export async function startOfMonth(data) {
  const response = startOfMonth(data);

  return response;
}

export async function mongoType(data) {
  const response = mongoose.Types.ObjectId(data);

  return response;
}


export function convertBirthDate(birthDate) {
  const initialDate = new Date(birthDate)
  const fixingBirthDate = new Date(initialDate);
  const day = fixingBirthDate.toISOString().substring(8, 10);
  const month = fixingBirthDate.toISOString().substring(5, 7);
  const year = fixingBirthDate.toISOString().substring(0, 4);
  const userBirthDate = `${day}/${month}/${year}`;

  return userBirthDate;
}

export function startDateToMongo(date) {
  return new Date(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0,).toISOString());
}

export function endDateToMongo(date) {
  return new Date(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59,).toISOString());
}









export function localDateTime() {
  const dateTime = new Date();
  const dateTimeFixed = new Date(dateTime.valueOf() - dateTime.getTimezoneOffset() * 60000);
  const localDateTime = dateTimeFixed.toISOString();

  return localDateTime;
}

export function addDays(data, days) {
  const newDate = addDaysDateFns(data, days);
  return newDate;
}

export function newDate(data, days) {
  const response = new Date();
  return response;
};

export function id() {
  const newId = ulid();
  return newId;
};

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};