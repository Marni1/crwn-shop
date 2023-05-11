import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { SignUpContainer,Title } from "./sign-up-form.styles";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";





const defaultFormFields={
    displayName: '',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUpForm = () => {

    const dispatch =  useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email,password,confirmPassword} = formFields;

   

    const resetFormField =() => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        if(password !== confirmPassword){
          alert('Password do not match')
          return;
        }
        try{
        dispatch(signUpStart(email,password,displayName))
        resetFormField();
        }
        catch(err){
            if(err.code === 'auth/email-already-in-use'){
                alert('Cannot create userm email already in use')
            }
            console.log('ooops',err)
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value})
    }

    return(
        <SignUpContainer >
            <Title>Don't have an account?</Title>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput label="Display Name"type="text" required  name="displayName" onChange={handleChange} value={displayName}/>
                <FormInput label='Email' type="email"required name="email" onChange={handleChange} value={email} />
                <FormInput label ='Password'type="password"required name="password" onChange={handleChange} value={password}/>
                <FormInput label='Confirm Password'type="password" required name="confirmPassword" onChange={handleChange} value={confirmPassword} />

                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;