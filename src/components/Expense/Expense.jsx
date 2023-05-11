import React from 'react'
import useApp from '../../Hooks/useApp';
import HeaderComp from '../ForAllComponents/Header';
import CenterExpense from './Center/CenterExpense';
import TableExpense from "./Table/TableExpense"
import AddExpense from './AddExpense/AddExpense';

function Expense() {

    const { checked, setChecked } = useApp();

    return (
        <>
            <HeaderComp setChecked={setChecked} checked={checked} />
            <CenterExpense />
            <TableExpense />
            <AddExpense />


        </>
    )
}

export default Expense
