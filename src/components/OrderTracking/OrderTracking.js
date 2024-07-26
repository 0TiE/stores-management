import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './OrderTracking.css'; // Create and use this file for custom styles if needed

const OrderTracking = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 mb-2">
            <h2>Track Your Order <i class="bi bi-cursor-fill "></i></h2>
            <form>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <button className="btn btn-primary" type="submit" id="button-addon2">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-stepper" style={{ borderRadius: '10px' }}>
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column">
                      <span className="lead fw-normal">Your order has been delivered</span>
                      <span className="text-muted small">by DHFL on 21 Jan, 2020</span>
                    </div>
                    <div>
                      <button className="btn btn-outline-primary" type="button">
                        Track order details
                      </button>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="d-flex flex-row justify-content-between align-items-center align-content-center">
                    <span className="dot"></span>
                    <hr className="flex-fill track-line" />
                    <span className="dot"></span>
                    <hr className="flex-fill track-line" />
                    <span className="dot"></span>
                    <hr className="flex-fill track-line" />
                    <span className="dot"></span>
                    <hr className="flex-fill track-line" />
                    <span className="d-flex justify-content-center align-items-center big-dot dot">
                      <i className="bi bi-check-lg text-white"></i>
                    </span>
                  </div>
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="d-flex flex-column align-items-start">
                      <span>15 Mar</span>
                      <span>Order placed</span>
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <span>15 Mar</span>
                      <span>Order confirmed</span>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <span>15 Mar</span>
                      <span>Order Dispatched</span>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <span>15 Mar</span>
                      <span>Out for delivery</span>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                      <span>15 Mar</span>
                      <span>Delivered</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </div>
  );
};

export default OrderTracking;
