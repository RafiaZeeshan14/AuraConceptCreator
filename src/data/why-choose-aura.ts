import {
  HiOutlineCursorArrowRays,
  HiOutlineLightBulb,
  HiOutlineRocketLaunch,
  HiOutlineShieldCheck,
  HiOutlineSquare3Stack3D,
  HiOutlineUserGroup,
} from "react-icons/hi2";

export const whyChooseReasons = [
  {
    value: 2000,
    suffix: "+",
    label: "Projects delivered",
    icon: HiOutlineLightBulb,
    position: "top-left",
  },
  {
    value: 1500,
    suffix: "+",
    label: "Satisfied clients",
    icon: HiOutlineCursorArrowRays,
    position: "top-right",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years of experience",
    icon: HiOutlineRocketLaunch,
    position: "middle-left",
  },
  {
    value: 25,
    suffix: "+",
    label: "Creative experts",
    icon: HiOutlineUserGroup,
    position: "middle-right",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client satisfaction",
    icon: HiOutlineShieldCheck,
    position: "bottom-left",
  },
  {
    value: 12,
    suffix: "+",
    label: "Industries served",
    icon: HiOutlineSquare3Stack3D,
    position: "bottom-right",
  },
] as const;

export type WhyChooseReason = (typeof whyChooseReasons)[number];