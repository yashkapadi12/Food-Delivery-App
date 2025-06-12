import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";

function MyOrder() {
  const [orderData, setOrderData] = useState([]);

  const fetchMyData = async () => {
    const userEmail = sessionStorage.getItem("userEmail");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/myorderData`,
        { email: userEmail },
        { headers: { "Content-Type": "application/json" } }
      );

      // Extract and store the order data
      if (
        response.data &&
        response.data.orderData &&
        Array.isArray(response.data.orderData.order_data)
      ) {
        setOrderData(response.data.orderData.order_data.reverse());
      } else {
        setOrderData([]);
      }
    } catch (error) {
      console.error("Error fetching order data:", error);
    }
  };

  useEffect(() => {
    fetchMyData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {orderData.length > 0 ? (
            orderData.map((dayOrders, dayIndex) => (
              <React.Fragment key={dayIndex}>
                {dayOrders.length > 0 && dayOrders[0].Order_date && (
                  <div className="m-auto mt-5">
                    <strong>Date: {dayOrders[0].Order_date}</strong>
                    <hr />
                  </div>
                )}
                {dayOrders.map((item, idx) => (
                  <div className="col-12 col-md-6 col-lg-3" key={idx}>
                    <div
                      className="card mt-3"
                      style={{ width: "16rem", maxHeight: "360px" }}
                    >
                      <img
                        src={item.img}
                        className="card-img-top"
                        alt={item.name}
                        style={{ height: "120px", objectFit: "fill" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <div
                          className="container w-100 p-0"
                          style={{ height: "38px" }}
                        >
                          <span className="m-1">{item.qty}</span>
                          <span className="m-1">{item.size}</span>
                          <div className="d-inline ms-2 h-100 w-20 fs-5">
                            ₹{item.price}/-
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))
          ) : (
            <div className="text-center mt-4">No orders found.</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyOrder;
