import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeField, initializeForm, register} from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const RegisterForm = () => {

    const dispatch = useDispatch();
    const {form, auth, authError} = useSelector(({auth}) => ({
        form : auth.register,
        auth : auth.auth,
        authError : auth.authError
    }));


    const onSubmit = e => {
        console.log("onSubmit->", form);

        e.preventDefault();
        const {username, password, passwordConfirm} = form;
        if(password !== passwordConfirm) {
            return;
        }
        dispatch(register({username, password}));
    };


    const onChange = e => {
        const {value, name} = e.target;
        console.log("onChange->", value, name);
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        );
    };
    useEffect(() => {
        dispatch(initializeForm('register'))
    },[dispatch])

    useEffect(()=> {
        if(authError){
            console.log("오류 발생");
            console.log(authError);
            return;
        }
        if(auth){
            console.log("회원가입 성공");
            console.log(auth);
        }
    },[auth, authError]);

    return (
        <AuthForm type='register' form={form}
                  onChange={onChange} onSubmit={onSubmit}
        />
    );

}

export default RegisterForm;