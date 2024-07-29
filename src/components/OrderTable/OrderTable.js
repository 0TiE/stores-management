import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import companylogo from '../../images/ConnexIT.png'
import './OrderTable.css';

const OrderTable = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
   
      <div className="row">
       
       
        <div className="col-lg-12">
         
          <div className=' mt-5'>
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
            {/* pending */}
              <div className="tab-pane fade show active" id="pending">
                <div className="tablescroll ">
                  <table className="table ">
                    <thead>
                      <tr className='table-primary '>
                        <th>#</th>
                        <th>ORDER ID</th>
                        <th>ORDER BY</th>
                        <th>DATE TIME</th>
                        <th>Status</th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Order 123456</td>
                        <td>John Doe</td>
                        <td>23/02/2024 13.00 p.m.</td>
                        <td><span className="badge status-badge-green">Pending</span></td>
                        <td className=''>
                          <i className="bi bi-eye" onClick={handleShowModal}></i>
                          <i className="bi bi-pencil-square"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Order 123456</td>
                        <td>John Doe</td>
                        <td>23/02/2024 13.00 p.m.</td>
                        <td><span className="badge status-badge-green">Pending</span></td>
                        <td className=''>
                          <i className="bi bi-eye" onClick={handleShowModal}></i>
                          <i className="bi bi-pencil-square"></i>
                        </td>


                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* processing */}
              <div className="tab-pane fade" id="processing">
                <div className="tablescroll">
                  <table className="table">
                    <thead>
                      <tr className='table-light'>
                        <th>#</th>
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
                        <td>Order123456</td>
                        <td>Express Delivery</td>
                        <td><span className="badge status-badge">Primary</span></td>
                        <td>Ashan</td>
                        <td className='d-flex'>
                          <i className="bi bi-eye" ></i>
                          <i className="bi bi-pencil-square"></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* delivery */}
              <div className="tab-pane fade" id="delivery">
                <div className="tablescroll">
                  <table className="table">
                    <thead>
                      <tr className='table-light'>
                        <th>#</th>
                        <th>ITEM ID</th>
                        <th>AMOUNT</th>
                        <th>PRICE</th>
                        <th>TOTAL</th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>1</td>
                          <td>I001</td>
                          <td>2</td>
                          <td>$10.00</td>
                          <td>$20.00</td>
                          <td className='d-flex'>
                            <i className="bi bi-eye"></i>
                            <i className="bi bi-pencil-square"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>I001</td>
                          <td>2</td>
                          <td>$10.00</td>
                          <td>$20.00</td>
                          <td className='d-flex'>
                            <i className="bi bi-eye"></i>
                            <i className="bi bi-pencil-square"></i>
                          </td>
                        </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>


          {/* Modal */}
          <Modal size='lg' show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Delivery Note</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="delivery-note">
                <div className="d-flex justify-content-between">
                  <div>
                    <img src={companylogo} alt="connex logo" height={50} />
                  </div>
                  <div className='mt-3'>
                    <p className='dnotepara'>Delivery Note: <strong>1234567890</strong></p>
                    <p className='dnotepara'>Date: <strong>2024-07-15</strong> </p>
                    <p className='dnotepara'>Time: <strong>13:58</strong> </p>
                  </div>
                </div>
                <table className="table mt-4">
                  <thead>
                    <tr className='table-light'>
                      <th>ITEM ID</th>
                      <th>AMOUNT</th>
                      <th>PRICE</th>
                      <th>TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>I001</td>
                      <td>2</td>
                      <td>$10.00</td>
                      <td>$20.00</td>
                    </tr>
                    <tr>
                      <td>I001</td>
                      <td>2</td>
                      <td>$10.00</td>
                      <td>$20.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button variant="danger" className='bg-danger'>
                Download
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
   
  );
}

export default OrderTable;
