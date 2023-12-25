import React, { useState, useEffect } from 'react'
import ListCustomer from './ListCustomer';
import CreateCustomer from './CreateCustomer';
import EditCustomer from './EditCustomer';

export default function CustomerPage() {
    const [customers, setCustomers] = useState([]);
    const [customerState, setCustomerState] = useState("list");

    const [customer, setCustomer] = useState(null)
    useEffect(() => {
        fetch("https://6582744002f747c8367964f7.mockapi.io/customers")
            .then(response => response.json())
            .then(data => {
                setCustomers(data);
            })

        return () => { }            // hàm clean up này chưa cần sài
    }, [])

    const onHandleCreateCustomer = (customer) => {
        fetch("https://6582744002f747c8367964f7.mockapi.io/customers", {
            method: 'POST',
            body: JSON.stringify(customer)
        })
            .then(res => res.json())
            .then(data => {
                fetch("https://6582744002f747c8367964f7.mockapi.io/customers")
                    .then(response => response.json())
                    .then(data => {
                        setCustomers(data);
                    })
                setCustomerState("list");
            })
    }

    const onEditCustomer = (id) => {
        fetch(`https://6582744002f747c8367964f7.mockapi.io/customers/${id}`,)
            .then(res => res.json())
            .then(data => {
                setCustomer(data);
                setCustomerState("edit");
            })
    }

    const onHandleEditCustomer = (customer) => {

        console.log("Customer edit: ", customer);
        fetch(`https://6582744002f747c8367964f7.mockapi.io/customers/${customer.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(customer)
        })
            .then(res => res.json())
            .then(data => {
                fetch("https://6582744002f747c8367964f7.mockapi.io/customers")
                    .then(response => response.json())
                    .then(data => {
                        setCustomers(data);
                    })
                setCustomerState("list");
            })
    }
    const onHandleCancelCustomer = () => {
        setCustomerState("list");
    }


    return (
        <>
            <div className='container'>
                <div className='menu-head my-3 d-flex justify-content-between'>
                    <img src="https://cdn.codegym.vn/wp-content/uploads/2021/08/CodeGym-Logo.webp"></img>
                    <input className='form-control w-25' type="text" placeholder='search..' />
                </div>
                <div className='main'>
                    <div className='container d-flex justify-content-center'>
                        <div className='w-75'>
                            <div >
                                {
                                    customerState === "list" && <button className='btn btn-primary' onClick={(evt) => setCustomerState("create")}>Create</button>
                                }
                            </div>
                            {
                                customerState === "list" ?
                                    <ListCustomer customers={customers} setCustomerState={setCustomerState} onEditCustomer={onEditCustomer} />
                                    : customerState === "create" ? <CreateCustomer onHandleCancelCustomer={onHandleCancelCustomer} onHandleCreateCustomer={onHandleCreateCustomer} /> :
                                        <EditCustomer customer={customer} onHandleCancelCustomer={onHandleCancelCustomer} onHandleEditCustomer={onHandleEditCustomer} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
