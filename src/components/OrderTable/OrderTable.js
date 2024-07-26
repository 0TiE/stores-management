import React, { useState } from 'react';
import Header from '../Header/Header';
import './OrderTable.css';

const OrderTable = () => {

  const [activeRow, setActiveRow] = useState(null);

  const handleActionClick = (rowId) => {
    setActiveRow(activeRow === rowId ? null : rowId);
  };

  const handleEdit = (rowId) => {
    console.log(`Edit row ${rowId}`);
  };


  const handleDelete = (rowId) => {
   
    console.log(`Delete row ${rowId}`);
  };

  const handleView = (rowId) => {
    console.log(`View row ${rowId}`);
  };
  
  return (
    <div className="container-fluid">
      <div className="row">
        <div className='col-lg-1'>
        </div>
        <div className="col-lg-11">
          <Header />
          <div className='content mt-5'>
            <h3 className='mb-4'>Orders</h3>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" id="pending-tab" aria-current="page" href="#pending" data-bs-toggle="tab">
                  <i className="bi bi-arrow-clockwise"></i> Pending
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="processing-tab" aria-current="page" href="#processing" data-bs-toggle="tab">
                  <i className="bi bi-arrow-repeat"></i> Processing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="delivery-tab" aria-current="page" href="#delivery" data-bs-toggle="tab">
                  <i className="bi bi-truck"></i> Delivery
                </a>
              </li>
            </ul>
            <div className="tab-content mt-0">
              <div className="tab-pane fade show active" id="pending">
                <div className="tablescroll">
                  <table className="table">
                    <thead>
                      <tr className='table-light'>
                        <th>#</th>
                        <th>ORDER ID</th>
                        <th>ORDER BY</th>
                        <th>DATE TIME</th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...Array(8).keys()].map((index) => (
                        <tr key={index + 1}>
                          <td>{index + 1}</td>
                          <td>Order123456</td>
                          <td>John Doe</td>
                          <td>23/02/2024 13.00 p.m.</td>
                          <td>
                            <div className="dropdown">
                              <i
                                className="bi bi-three-dots-vertical"
                                onClick={() => handleActionClick(index + 1)}
                                style={{ cursor: 'pointer' }}
                              ></i>
                              {activeRow === index + 1 && (
                                <div className="dropdown-menu show">
                                  <a
                                    className="dropdown-item"
                                    href="#view"
                                    onClick={() => handleView(index + 1)}
                                  >
                                    <i className="bi bi-eye"></i> View
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#edit"
                                    onClick={() => handleEdit(index + 1)}
                                  >
                                    <i className="bi bi-pencil"></i> Edit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#delete"
                                    onClick={() => handleDelete(index + 1)}
                                  >
                                    <i className="bi bi-trash"></i> Delete
                                  </a>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab-pane fade" id="processing">
                <div className="tablescroll">
                  <table className="table">
                    <thead>
                      <tr className='table-light'>
                        <th>ORDER ID</th>
                        <th>DELIVERY TYPE</th>
                        <th>STATUS</th>
                        <th>HANDLE BY</th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Jane Smith</td>
                        <td>2024-07-24</td>
                        <td>Processing</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jane Smith</td>
                        <td>2024-07-24</td>
                        <td>Processing</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Jane Smith</td>
                        <td>2024-07-24</td>
                        <td>Processing</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Jane Smith</td>
                        <td>2024-07-24</td>
                        <td>Processing</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Jane Smith</td>
                        <td>2024-07-24</td>
                        <td>Processing</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Jane Smith</td>
                        <td>2024-07-24</td>
                        <td>Processing</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Jane Smith</td>
                        <td>2024-07-24</td>
                        <td>Processing</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>Jane Smith</td>
                        <td>2024-07-24</td>
                        <td>Processing</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>Jane Smith</td>
                        <td>2024-07-24</td>
                        <td>Processing</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Jane Smith</td>
                        <td>2024-07-24</td>
                        <td>Processing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab-pane fade" id="delivery">
                <div className="tablescroll">
                  <table className="table">
                    <thead>
                      <tr className='table-light'>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Order Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mary Johnson</td>
                        <td>2024-07-23</td>
                        <td>Out for Delivery</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Mary Johnson</td>
                        <td>2024-07-23</td>
                        <td>Out for Delivery</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Mary Johnson</td>
                        <td>2024-07-23</td>
                        <td>Out for Delivery</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Mary Johnson</td>
                        <td>2024-07-23</td>
                        <td>Out for Delivery</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Mary Johnson</td>
                        <td>2024-07-23</td>
                        <td>Out for Delivery</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Mary Johnson</td>
                        <td>2024-07-23</td>
                        <td>Out for Delivery</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Mary Johnson</td>
                        <td>2024-07-23</td>
                        <td>Out for Delivery</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>Mary Johnson</td>
                        <td>2024-07-23</td>
                        <td>Out for Delivery</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>Mary Johnson</td>
                        <td>2024-07-23</td>
                        <td>Out for Delivery</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Mary Johnson</td>
                        <td>2024-07-23</td>
                        <td>Out for Delivery</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderTable;
