import type { Menu, Dish, StateOption, Courses } from "../types/types";

export function paragraphArrays(text: string): string[] {
  return text.split("\n").filter(p => p);
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

export function weekdayIndexMondayBased(date: Date): number {
  const weekdayIndex = date.getDay();
  return (weekdayIndex + 6) % 7;
}

export function range(start: number, stop: number): number[] {
  return Array.from({ length: stop - start }, (_, index) => start + index);
}

export function getAllergiesList(menu: Menu): string[] {
  const allergiesNested = Object.values(menu).flatMap(course =>
    course.flatMap((item: Dish) => item.allergies),
  );

  return Array.from(new Set(allergiesNested.flat(10)));
}

export function getAllergiesOptions(meny: Menu): StateOption[] {
  return getAllergiesList(meny).map(item => {
    return {
      value: item,
      label: capitalize(item),
    };
  });
}

export function filterAllergies(menu: Menu, allergies: readonly StateOption[]) {
  const allergyValues = new Set(allergies.map(a => a.value));

  const result = {} as Menu;

  for (const course in menu) {
    result[course as Courses] = menu[course as Courses].filter(dish =>
      dish.allergies.every(allergy => !allergyValues.has(allergy)),
    );
  }

  return result;
}