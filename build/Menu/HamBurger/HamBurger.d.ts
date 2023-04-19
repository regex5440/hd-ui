import { ChangeEvent } from "react";
interface HamBurgerProps {
    onOpen?: (event: ChangeEvent<HTMLInputElement>) => void;
    onClose?: (event: ChangeEvent<HTMLInputElement>) => void;
}
declare const HamBurger: ({ onOpen, onClose }: HamBurgerProps) => JSX.Element;
export default HamBurger;
//# sourceMappingURL=HamBurger.d.ts.map