import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";

function MyOrder() {
  const [orderData, setorderData] = useState({});
  //   const fetchMyData = async () => {
  //     const userEmail = sessionStorage.getItem("userEmail");

  //     console.log(sessionStorage.getItem("userEmail"));
  //     await axios
  //       .post("http://localhost:8000/api/myorderData", {
  //         email: userEmail,
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       })
  //       .then((response) => {
  //         console.log("RESPONE", response.data);
  //         setorderData(response);
  //       });
  //   };
  //   useEffect(() => {
  //     fetchMyData();
  //   }, []);
  const fetchMyData = async () => {
    const userEmail = sessionStorage.getItem("userEmail");

    console.log(userEmail); // Logs the email from sessionStorage
    // console.log(url);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/myorderData`,
        {
          email: userEmail,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("RESPONSE", response.data); // Logs the actual response data
      setorderData(response.data); // Set the actual data to state
    } catch (error) {
      console.error("Error fetching data:", error); // Handles any errors that occur during the request
    }
  };

  useEffect(() => {
    fetchMyData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="container">
        <div className="row">
          {orderData !== {}
            ? Array(orderData).map((data) => {
                return data.orderData
                  ? data.orderData.order_data
                      .slice(0)
                      .reverse()
                      .map((item) => {
                        return item.map((arrayData) => {
                          return (
                            <div>
                              {arrayData.Order_date ? (
                                <div className="m-auto mt-5">
                                  {(data = arrayData.Order_date)}
                                  <hr />
                                </div>
                              ) : (
                                <div className="col-12 col-md-6 col-lg-3">
                                  <div
                                    className="card mt-3"
                                    style={{
                                      width: "16rem",
                                      maxHeight: "360px",
                                    }}
                                  >
                                    <img
                                      src={arrayData.img}
                                      className="card-img-top"
                                      alt="..."
                                      style={{
                                        height: "120px",
                                        objectFit: "fill",
                                      }}
                                    />
                                    <div className="card-body">
                                      <h5 className="card-title">
                                        {arrayData.name}
                                      </h5>
                                      <div
                                        className="container w-100 p-0"
                                        style={{ height: "38px" }}
                                      >
                                        <span className="m-1">
                                          {arrayData.qty}
                                        </span>
                                        <span className="m-1">
                                          {arrayData.size}
                                        </span>
                                        <span className="m-1">{data}</span>
                                        <div className=" d-inline ms-2 h-100 w-20 fs-5">
                                          ₹{arrayData.price}/-
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        });
                      })
                  : "";
              })
            : ""}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default MyOrder;
