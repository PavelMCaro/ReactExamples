import * as React from 'react';
import { CounterForm } from './Counter';

export const CounterContainer: React.FC<{}> = () => {

    const [counter, setCounter] = React.useState(0);
    const [rendered, setRender] = React.useState(0);

    React.useEffect(()=> {
        console.log('The component was rendered');
    }, []);

    React.useEffect(()=> {
            setRender(rendered + 1)
        console.log('El componente fue rendereado', rendered);
    },[counter]);

    const handleClick = () => {
        setCounter(counter + 1);
    }

    const props = {
        counter,
        handleClick
    }

    return <CounterForm {...props}/>
}