import './mylabel.css';
import { AllCaps } from '../stories/components/MyLabel.stories';


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
}

function capitalizeStr(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const MyLabel = ({
    label = 'noLabel',
    size = 'normal',
    color = 'primary',
    capitalize = false,
    allCaps = false,
    fontColor,
}: MyLabelProps) => {
    if (allCaps) label = label.toUpperCase();    
    if (capitalize) label = capitalizeStr(label);

    return (
        <span className={`label ${size} ${"text-"+color} `}
            style={{ color: fontColor }}
        >
            {label}
        </span>
    )
}
