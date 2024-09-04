import React from 'react'
import "./order.css";

const OrdersList = ({order}) => {
  return (
    <>
    {order.cartItems.map((item)=>(
        <div key={item._id} >

        <div className=' d-flex justify-content-between align-items-center justify-content-center
         order border-bottom border-black'>


        <div className='d-flex align-items-center py-md-2 py-3 '>
            <img src={item.product.imageCover} className='orderImg' alt={item.product.title} />
                <div className=' ms-3'>
                    <p>{item.product.title.split(" ").splice(0,1).join(" ")}</p>
                    <p>{item.product.brand.name}</p>
                </div>
        </div>

            <div>
            <p className='text-muted'>Price : <span className='text-success'>{item.price} EGP</span></p>
            <p className='text-muted'>Quantity : <span className='text-success'>{item.count}</span></p>
            </div>

        </div>
        </div>
        
    ))}

    <div className=" text-white py-4  d-flex justify-content-around border-bottom border-black">
    <p className='text-muted'>
    Total Price : <span className='text-success'>{order.totalOrderPrice} EGP</span>
    </p>
    <p  className='text-muted'>
    Payment : <span className='text-success'>{order.paymentMethodType}</span>
    </p>
    </div>


    </>
  )
}

export default OrdersList
