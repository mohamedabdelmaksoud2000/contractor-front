import React from 'react'
import HeaderComp from '../ForAllComponents/Header'
import useApp from '../../Hooks/useApp';
import Center from './Center/Center';

function Messages() {
    const { checked, setChecked } = useApp();

    return (
        <>
            <HeaderComp setChecked={setChecked} checked={checked} />
            <Center />
        </>
    )
}

export default Messages
