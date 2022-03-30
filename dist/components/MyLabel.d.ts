/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Label contents
     */
    label: string;
    /**
     * Label size
     **/
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Label color
     **/
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * If true, the label will be to uppercase
     **/
    allCaps?: boolean;
    /**
     * If true, the label will be capitalized
     **/
    capitalize?: boolean;
    /**
     * Font color
     **/
    fontColor?: string;
    /**
     * Background color
     **/
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, capitalize, allCaps, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
