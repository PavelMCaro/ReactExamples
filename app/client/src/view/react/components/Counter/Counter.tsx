import * as React from 'react';
import {
    Wrapper,
    Title,
    SubTitle,
    HookButton,
    HookField
} from './styled';
import { reduxForm } from 'redux-form';

interface Props {
    counter: number;
    handleClick: Function;
}

const Counter: React.FC<Props> = ({ counter, handleClick }) => (
    <Wrapper>
        <Title>React Hooks</Title>
        <SubTitle>You have clicked button {counter} times</SubTitle>
        <HookField 
            name='personName'
            component='input'
        />
        <HookButton onClick={() => handleClick()} orange>CLICK ME</HookButton>
    </Wrapper>
)


export const CounterForm = reduxForm({
    form: 'hooks'
})(Counter)