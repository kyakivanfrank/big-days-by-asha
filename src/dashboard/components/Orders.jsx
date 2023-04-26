function Orders({ orders }) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Orders</h2>
        <ul className="divide-y">
          {orders.map((order) => (
            <li key={order.id} className="py-2">
              <div className="flex items-center justify-between">
                <span className="mr-2">{order.orderNumber}</span>
                <span className="text-gray-500 text-sm">{order.date}</span>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Customer:</span>
                  <span>{order.customerName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Product:</span>
                  <span>{order.productName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Quantity:</span>
                  <span>{order.quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total:</span>
                  <span>{order.total}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Orders;
  