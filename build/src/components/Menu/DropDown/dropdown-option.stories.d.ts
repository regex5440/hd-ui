import { StoryObj } from '@storybook/react-vite';
import { default as DropDown } from './DropDown';
declare const _default: {
    title: string;
    component: ({ children, value, selected, ...restProps }: {
        [restPropKey: string]: any;
        children: any;
        value: string;
        selected?: boolean;
    }) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    parameters: {
        layout: string;
    };
};
export default _default;
export declare const DefaultOption: StoryObj<typeof DropDown.Option>;
//# sourceMappingURL=dropdown-option.stories.d.ts.map