import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ORDERS } from "../utils/queries";
import "../index.css";
import Cart from "../components/Cart";

function OrderHistory() {
    
    // const [orders, setOrders] = useState([])

    const { loading, data } = useQuery(QUERY_ORDERS);
    
	const orders = data?.orders || [];
	
	console.log(orders)
	
    // useEffect(() => {
    //     if (data) {
            
    //         setOrders([...orders, data.orders])
       
    //     //     const orderArr = [] 

    //     //     data.orders.forEach((order) => {
    //     //     //   orderArr.push(order)
    //     //         setOrders({
    //     //             ...orders,
    //     //             order
    //     //         })
                
    //     //   });
    //       // add else if to check if `loading` is undefined in `useQuery()` Hook
           
            
    //     } 
    //   }, [data]);

    // const orderArr = orders[0];

    // Object.keys(orderArr).map(function(key, index) {
    //     orderArr[key] = "test";
    //   });
    
      
    return (
        <div>
            <div>
			{orders &&
        orders.map(order => (
          <div key={order._id} className="card mb-3">
            <p className="card-header">
              
              order on {order.address}
				</p>
				
				<table className="table">
				<thead>
					<tr>
						<th>Order ID</th>
						<th>Name</th>
						<th>Address</th>
						<th>Purchase Date</th>
						<th>Products</th>
						<th>Status</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>{order._id}</td>
							<td>{order.firstName} { order.lastName}</td>
						<td>{order.address}</td>
						<td>{order.purchaseDate}</td>
						<td>{order.products}</td>
						{/* <td class="row">
							<input type="checkbox" id="scales" name="deliver" checked />
							<label for="scales">Delivered</label>
							<input type="checkbox" id="scales" name="deliver" />
							<label for="scales">Not Delivered</label>
						</td> */}
					</tr>
				</tbody>
            </table>
            <div>
          
            </div>
           
          </div>
        ))}
         
           </div>
		
		</div>
	);
}

export default OrderHistory;
