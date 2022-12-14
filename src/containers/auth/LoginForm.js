import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeField, initializeForm} from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const LoginForm = () => {

    const dispatch = useDispatch();
    const {form} = useSelector(({auth}) => ({
        form : auth.login
    }));


    const onSubmit = e => {
        e.preventDefault();
        // 구현 예정
    };


    const onChange = e => {
        const {value, name} = e.target;
        console.log("onChange->", value, name);
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        );
    };

    useEffect(() => {
        dispatch(initializeForm('login'))
    },[dispatch])

    return (
        <AuthForm type='login' form={form}
                  onChange={onChange} onSubmit={onSubmit}
        />
    );

}

export default LoginForm;