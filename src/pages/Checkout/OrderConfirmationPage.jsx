import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaCircleCheck, FaSpinner, FaBoxOpen, FaHouse } from "react-icons/fa6";
import { getOrderDetails } from "../../services/api";
import { toast } from "react-hot-toast";

const OrderConfirmationPage = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const data = await getOrderDetails(id);
        setOrder(data);
      } catch (err) {
        setError(err.toString());
        toast.error(`Failed to load order details: ${err.toString()}`);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <FaSpinner className="animate-spin text-amber-600 text-4xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
        <Link
          to="/"
          className="inline-block mt-6 bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <FaCircleCheck className="text-green-600 text-3xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Order Confirmed!</h1>
          <p className="text-gray-600 mt-2">
            Thank you for your purchase. Your order has been received.
          </p>
        </div>

        <div className="border-t border-b border-gray-200 py-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">
                Order Number
              </h3>
              <p className="mt-1 font-medium">{order._id}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Order Date</h3>
              <p className="mt-1 font-medium">
                {new Date(order.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">
                Total Amount
              </h3>
              <p className="mt-1 font-medium">${order.totalPrice.toFixed(2)}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">
                Payment Method
              </h3>
              <p className="mt-1 font-medium">{order.paymentMethod}</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Order Items</h2>
          <div className="space-y-4">
            {order.orderItems.map((item) => (
              <div key={item._id} className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="ml-4 flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.quantity} x ${item.price.toFixed(2)}
                  </p>
                </div>
                <p className="font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">Shipping Address</h2>
            <address className="not-italic text-gray-600">
              {order.shippingAddress.address}
              <br />
              {order.shippingAddress.city}, {order.shippingAddress.postalCode}
              <br />
              {order.shippingAddress.country}
            </address>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
            <div className="space-y-1 text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>
                  $
                  {(
                    order.totalPrice -
                    order.taxPrice -
                    order.shippingPrice
                  ).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Tax:</span>
                <span>${order.taxPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>${order.shippingPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-gray-800 pt-2 border-t border-gray-200">
                <span>Total:</span>
                <span>${order.totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <Link
            to="/accessories"
            className="flex items-center justify-center bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors"
          >
            <FaBoxOpen className="mr-2" /> Continue Shopping
          </Link>
          <Link
            to="/"
            className="flex items-center justify-center bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            <FaHouse className="mr-2" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
