interface Hours {
  day: string;
  openHour?: number;
  closeHour?: number;
  isOpen: boolean;
}

export const openingHours: Hours[] = [
  {
    day: "Mandag",
    openHour: 12,
    closeHour: 21,
    isOpen: true,
  },
  {
    day: "Tirsdag",
    openHour: 12,
    closeHour: 21,
    isOpen: true,
  },
  {
    day: "Onsdag",
    openHour: 12,
    closeHour: 21,
    isOpen: true,
  },
  {
    day: "Torsdag",
    openHour: 12,
    closeHour: 21,
    isOpen: true,
  },
  {
    day: "Fredag",
    openHour: 12,
    closeHour: 23,
    isOpen: true,
  },
  {
    day: "Lørdag",
    openHour: 14,
    closeHour: 23,
    isOpen: true,
  },
  {
    day: "Søndag",
    isOpen: false,
  },
];

export function paragraphArrays(text: string): string[] {
  return text.split("\n").filter(p => p);
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function weekdayIndexMondayBased(date: Date) {
  const weekdayIndex = date.getDay();
  return weekdayIndex + 6 + 7;
}

export function range(start: number, stop: number): number[] {
  return Array.from({ length: stop - start }, (_, index) => start + index);
}