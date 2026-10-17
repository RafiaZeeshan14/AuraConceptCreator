import {
  HiOutlineChartPie,
  HiOutlineClock,
  HiOutlineCube,
  HiOutlineDevicePhoneMobile,
  HiOutlineEllipsisHorizontal,
  HiOutlineEnvelope,
  HiOutlineFilm,
  HiOutlineMagnifyingGlass,
  HiOutlineMapPin,
  HiOutlineMegaphone,
  HiOutlinePhone,
  HiOutlineRectangleStack,
  HiOutlineSignal,
  HiOutlineShoppingCart,
  HiOutlineSwatch,
} from "react-icons/hi2";
import type { IconType } from "react-icons";

export const contactDetails = {
  address: "Gulshan-e-Maymar, Shehryar Towers, Mezzanine Floor, Office No: 12",
  phone: "0311 1092787",
  phoneLink: "+923111092787",
  email: "auraconceptcreator@gmail.com",
} as const;

interface ContactChannel {
  label: string;
  value: string;
  note: string;
  /** External link shown on the value. */
  href?: string;
  /** Tel link shown on the value. */
  tel?: string;
  icon: IconType;
}

export const contactChannels: ContactChannel[] = [
  {
    label: "Our Headquarters",
    value: contactDetails.address,
    note: "Studio visits by appointment",
    icon: HiOutlineMapPin,
  },
  {
    label: "Call Anytime",
    value: contactDetails.phone,
    note: "Monday to Friday, 09:00 – 10:00",
    tel: contactDetails.phoneLink,
    icon: HiOutlinePhone,
  },
  {
    label: "Business Hours",
    value: "Mon – Fri · 09:00 – 10:00",
    note: "Saturday & Sunday — Closed",
    icon: HiOutlineClock,
  },
  {
    label: "Email Support",
    value: contactDetails.email,
    note: "Replies within one business day",
    href: `mailto:${contactDetails.email}`,
    icon: HiOutlineEnvelope,
  },
];

/** Selectable service pills inside the form. */
export const formServices: { label: string; icon: IconType }[] = [
  { label: "Social Media Management", icon: HiOutlineMegaphone },
  { label: "Social Media Ads", icon: HiOutlineSignal },
  { label: "Branding", icon: HiOutlineCube },
  { label: "Content Production", icon: HiOutlineRectangleStack },
  { label: "Graphic Design", icon: HiOutlineSwatch },
  { label: "Website Development", icon: HiOutlineDevicePhoneMobile },
  { label: "E-commerce Solutions", icon: HiOutlineShoppingCart },
  { label: "SEO", icon: HiOutlineMagnifyingGlass },
  { label: "Paid Advertising", icon: HiOutlineChartPie },
  { label: "Video Editing", icon: HiOutlineFilm },
  { label: "Other", icon: HiOutlineEllipsisHorizontal },
];

export const messageMaxLength = 500;

/** Address used for the embedded map — change here and the map follows. */
export const mapQuery = contactDetails.address;

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  mapQuery,
)}&output=embed`;

export const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  mapQuery,
)}`;
