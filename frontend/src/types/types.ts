export interface Hours {
  day: string;
  openHour?: number;
  closeHour?: number;
  isOpen: boolean;
}

export interface NavbarItem {
  id: number;
  content: string;
  route?: string;
}

export interface Review {
  id: number;
  content: string;
  name: string;
}

export interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  allergies: string[];
}

export interface StateOption {
  value: string;
  label: string;
}
export type Courses = "starters" | "mains" | "desserts";

export type Menu = Record<Courses, Dish[]>;

export interface BookingDetails {
  time: string;
  date: Date;
  people: number;
  duration: number;
  table: string;
}

export interface Table {
  label: string;
  location: "window-row" | "mid-row" | "two-seater" | "big-table" | "";
  maxSeats: number;
}

export interface CourseNames {
  name: string;
  nameNo: string;
}

export interface DateFormatOptions {
  weekday: string;
  year?: string;
  month: string;
  day: string;
}

interface SocialMediaIcon {
  url: string;
  iconPath: string;
}

export type SocialMedia = Record<
  "facebook" | "instagram" | "twitter" | "tiktok",
  SocialMediaIcon
>;

export interface CountryCode {
  name: string;
  code: string;
  emoji: string;
  unicode: string;
  image: string;
  dial_code: string;
  name_no: string;
}