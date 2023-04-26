import { BaseButton,GoogleButton,InvertedButton } from "./button.styles";

export const BUTTON_TYPE_CLASSES ={
    base:'1',
    google: '2',
    inverted: '3',
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
}
[buttonType])


const Button = ({children, buttonType, ...otherProps}) => {
    const CustomButton = getButton(buttonType)
    return(
        <CustomButton {...otherProps}>{children}</CustomButton>
    )
}


export default Button;