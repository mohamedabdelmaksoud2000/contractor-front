import React from 'react'
import HeaderComp from '../ForAllComponents/Header'
import useApp from '../../Hooks/useApp';
import PaymentCenter from './center/PaymentCenter';
import TableComponent from './Table/Table';
import AddNewPayment from './AddNew/AddNewPayment';

function Payment() {
    const { checked, setChecked } = useApp();

    return (
        <>
            <HeaderComp setChecked={setChecked} checked={checked} />
            <PaymentCenter/>
            <TableComponent />
            <AddNewPayment />


        </>
    )
}

export default Payment
