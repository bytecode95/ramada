import { ReactNode } from "react";

export type ButtonProps = {
  type: "button" | "submit";
  title: string;
  variant: string;
  handleClick?: () => void;
  icon?: ReactNode;
};

export type LogoProps = {
  height?: number;
  width?: number;
  handleClick?: () => void;
};

export type RatingProps = {
  maxRating: number;
  rating: number;
  readOnly?: boolean;
  size?: string;
};

export type SubscriptionFormProps = {
  onSubmit: (email: string) => void;
};

export type SocialButtonProps = {
  name: string;
  url: string;
};

export type SelectorProps = {
  adults: number;
  children: number;
  checkInDate: Date | null;
  checkOutDate: Date | null;
  onSearch: (data: SelectorData) => void;
}

export type SelectorData = {
  adults: number;
  children: number;
  checkInDate: Date | null;
  checkOutDate: Date | null;
}
