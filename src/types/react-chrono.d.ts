/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "react-chrono" {
  import * as React from "react";

  export type ChronoMode = "VERTICAL" | "VERTICAL_ALTERNATING" | "HORIZONTAL";

  export interface ChronoItem {
    title?: string;
    cardTitle?: string;
    cardSubtitle?: string;
    cardDetailedText?: string;
    [key: string]: any;
  }

  export interface ChronoProps {
    items: ChronoItem[];
    mode?: ChronoMode;
    slideShow?: boolean;
    hideControls?: boolean;
    disableClickOnCircle?: boolean;
    disableToolbar?: boolean;
    allowDynamicUpdate?: boolean;
    cardHeight?: number | string;
    theme?: {
      primary?: string;
      secondary?: string;
      titleColor?: string;
      titleColorActive?: string;
      cardBgColor?: string;
      cardForeColor?: string;
      [key: string]: any;
    };
    classNames?: {
      card?: string;
      title?: string;
      cardText?: string;
      [key: string]: any;
    };
    style?: React.CSSProperties;
    onItemSelected?: (index: number) => void;
    [key: string]: any;
  }

  export class Chrono extends React.Component<ChronoProps> {}
}
