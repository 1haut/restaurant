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
