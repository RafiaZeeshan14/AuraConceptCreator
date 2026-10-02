import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import type { IconType } from "react-icons";

/**
 * Single source of truth for the brand's social profiles — header, footer and
 * contact page all link out to these.
 */
export const socialLinks: {
  label: string;
  href: string;
  icon: IconType;
}[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1BzKV53d8A/",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/aura.conceptcreator",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/auraconceptcreator/",
    icon: FaLinkedinIn,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@auraconceptcreator",
    icon: FaYoutube,
  },
];