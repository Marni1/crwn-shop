import { useState} from "react";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import { ButtonContainer,SignInContainer,Title } from "./sign-in-form.styles";
import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";




const defaultForm = {
    email: '',
    password: ''
    
}


const SignInForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultForm);
    const {email, password} = formFields;



    const resetFormFields = () => {
        setFormFields(defaultForm)
    }
    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormFields({...formFields, [name]: value})
     

    }

    const signInWithGoggle = async () => {
        dispatch(googleSignInStart());
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            dispatch(emailSignInStart(email,password)) ;
            resetFormFields();
        }
        catch(error){
          switch(error.code){
            case 'auth/wrong-password':
                alert('incorrect password for email')
                break;
            case 'auth/user-notfound':
                alert('no user associated with this email')
                break;
                default: 
                console.log(error);
          }
        }
    }



    return(
        <SignInContainer>
            <Title>I already have an account</Title>
            <span>Sign in with your email and password</span>
            <form>
                <FormInput label='Email' type="email"required name="email" onChange={handleChange} value={email} />
                <FormInput label='Password' type="password"required name="password" onChange={handleChange} value={password} />
                <ButtonContainer >
                    <Button type ='submit'onClick={handleSubmit}>Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoggle}>Google Sign In</Button>
                </ButtonContainer>
            </form>
        </SignInContainer>
    )
}


export default SignInForm;