import React from "react";
import Card from "../components/Card";
import axios from 'axios';

function Orders() {
    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            const {data} = await axios.get('https://63737c01348e9472990db5c5.mockapi.io/orders')
        })(); 
    }, [])

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Мои заказы</h1>
            </div>
    
            <div className="d-flex flex-wrap"> 
                {[].map((item) => (
                        <Card /> 
                    ))}
            </div>
      </div>
    )
}

export default Orders