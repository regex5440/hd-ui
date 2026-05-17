import { StoryObj } from '@storybook/react-vite';
import { default as DropDown } from './DropDown';
declare const _default: {
    title: string;
    component: {
        ({ children, onChange, style, optionLayerStyle, selectedOptionStyle, defaultValue, actionType, ...restProps }: {
            [restPropKey: string]: any;
            children: import('react').ReactElement<{
                [restPropKey: string]: any;
                children: any;
                value: string;
                selected?: boolean;
            }> | import('react').ReactElement<{
                [restPropKey: string]: any;
                children: any;
                value: string;
                selected?: boolean;
            }>[];
            onChange?: (value: any) => void;
            optionLayerStyle?: import('react').CSSProperties;
            style?: import('react').CSSProperties;
            selectedOptionStyle?: import('react').CSSProperties;
            defaultValue?: string;
            actionType?: "click" | "hover";
        }): import("react/jsx-runtime").JSX.Element;
        Option({ children, value, selected, ...restProps }: {
            [restPropKey: string]: any;
            children: any;
            value: string;
            selected?: boolean;
        }): import("react/jsx-runtime").JSX.Element;
    };
    tags: string[];
    parameters: {
        layout: string;
    };
};
export default _default;
type StoryObject = StoryObj<typeof DropDown>;
export declare const DefaultWithOption: StoryObject;
//# sourceMappingURL=dropdown.stories.d.ts.map