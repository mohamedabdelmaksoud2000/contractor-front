import React from 'react'
import CenterItems from './Center/CenterItems'
import TableItems from './Table/TableItems'
import HeaderComp from "../ForAllComponents/Header"
import AddNewItems from './AddNewItems/AddNewItems'
import useApp from '../../Hooks/useApp'

function Items() {

    const {checked, setChecked} = useApp();

    return (
        <>
            <HeaderComp setChecked={setChecked} checked={checked} />
            <CenterItems />
            <TableItems checked={checked} />
            <AddNewItems />
        </>
    )
}

export default Items
