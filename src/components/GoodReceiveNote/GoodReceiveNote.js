import React, { useState } from 'react';
import Header from '../Header/Header';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GoodReceiveNote.css';

const GoodReceiveNote = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showNewGRN, setShowNewGRN] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleCloseDetails = () => setShowDetails(false);
  const handleShowDetails = (data) => {
    setSelectedData(data);
    setShowDetails(true);
  };

  const handleCloseNewGRN = () => setShowNewGRN(false);
  const handleShowNewGRN = () => setShowNewGRN(true);

  const data = [
    { id: 1, vendorName: 'TrendNet', productName: 'Switch', quantity: 10, date: '04/15/2021', grn: 'GRN001', status: 'Completed' },
    { id: 2, vendorName: 'TrendNet', productName: 'Switch', quantity: 10, date: '04/15/2021', grn: 'GRN001', status: 'Pending' },
    { id: 3, vendorName: 'TrendNet', productName: 'Switch', quantity: 10, date: '04/15/2021', grn: 'GRN001', status: 'Reject' },
    { id: 4, vendorName: 'TrendNet', productName: 'Switch', quantity: 10, date: '04/15/2021', grn: 'GRN001', status: 'Completed' },
    { id: 5, vendorName: 'TrendNet', productName: 'Switch', quantity: 10, date: '04/15/2021', grn: 'GRN001', status: 'Pending' },
    { id: 6, vendorName: 'TrendNet', productName: 'Switch', quantity: 10, date: '04/15/2021', grn: 'GRN001', status: 'Reject' },
    { id: 7, vendorName: 'TrendNet', productName: 'Switch', quantity: 10, date: '04/15/2021', grn: 'GRN001', status: 'Completed' },
    { id: 8, vendorName: 'TrendNet', productName: 'Switch', quantity: 10, date: '04/15/2021', grn: 'GRN001', status: 'Pending' },
    { id: 9, vendorName: 'TrendNet', productName: 'Switch', quantity: 10, date: '04/15/2021', grn: 'GRN001', status: 'Reject' },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className='col-lg-1'></div>
        <div className="col-lg-11">
          <Header />
          <div className='content mt-5'>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className='mb-4'>GRN</h3>
              <div>
                <button className="btn NewGrnbtn" onClick={handleShowNewGRN}><i className="fas fa-plus"></i> Add New GRN</button>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className=""></h5>
              <form className="form-inline d-flex my-2 my-lg-0">
                <input className="form-control outline-none mr-2" id='search' type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
            <div className='tablescroll'>
              <table id="example" className="table w-100 mt-2">
                <thead>
                  <tr className='table-light'>
                    <th>#</th>
                    <th>VENDOR NAME</th>
                    <th>PRODUCT NAME</th>
                    <th>QUANTITY</th>
                    <th>DATE</th>
                    <th>GRN</th>
                    <th>STATUS</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.vendorName}</td>
                      <td>{item.productName}</td>
                      <td>{item.quantity}</td>
                      <td>{item.date}</td>
                      <td>{item.grn}</td>
                      <td>
                        <span className={`status-badges status-badge-${item.status === 'Completed' ? 'green' : item.status === 'Pending' ? 'yellow' : 'red'} status-professional`}>
                          {item.status}
                        </span>
                      </td>
                      <td>
                        <i className="fas fa-eye" onClick={() => handleShowDetails(item)} style={{ cursor: 'pointer' }}></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
   
      <Modal show={showDetails} onHide={handleCloseDetails} className="grn-modal">
        <Modal.Header closeButton className="grn-modal-header">
          <Modal.Title>GRN Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="grn-modal-body">
          {selectedData && (
            <>
              <p><strong>Vendor Name:</strong> {selectedData.vendorName}</p>
              <p><strong>Product Name:</strong> {selectedData.productName}</p>
              <p><strong>Quantity:</strong> {selectedData.quantity}</p>
              <p><strong>Date:</strong> {selectedData.date}</p>
              <p><strong>GRN:</strong> {selectedData.grn}</p>
              <p><strong>Status:</strong> {selectedData.status}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer className="grn-modal-footer">
          <Button variant="secondary" onClick={handleCloseDetails}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showNewGRN} onHide={handleCloseNewGRN} className="grn-modal">
        <Modal.Header closeButton className="grn-modal-header">
          <Modal.Title>Add New GRN</Modal.Title>
        </Modal.Header>
        <Modal.Body className="grn-modal-body">
          <form>
          <div className="d-flex justify-content-between">
            <div className="form-group">
              <label>Batch ID</label>
              <input type="text" className="form-control" placeholder="BID 12" disabled/>
            </div>
            <div className="form-group align-self-end">
              <button className="btn Newbatchbtn"><i className="fas fa-plus"></i> Add New Batch</button>
            </div>
          </div>

            <div className="form-group">
              <label>Vendor Name</label>
              <input type="text" className="form-control" placeholder="" required />
            </div>
            <div className='form-group'>
              <label>GRN ID</label>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">ID</span>
                <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
              </div>
            </div>
            
            <div className="form-group">
              <label>GRN Date</label>
              <input type="date" className="form-control" />
            </div>
            
            
          </form>
        </Modal.Body>
        <Modal.Footer className="grn-modal-footer">
          <Button variant="secondary" onClick={handleCloseNewGRN}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseNewGRN}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default GoodReceiveNote;
