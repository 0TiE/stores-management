import React, { useState } from "react";
import { Button, Modal, Badge, Form } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

const StockManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [stockLevelFilter, setStockLevelFilter] = useState("All");

  const products = [
    {
      id: "10235",
      name: "M12 Gigabit PoE+ Railway Switch",
      vendor: "trendnet",
      stockCount: 10,
      grndate: "12/06/2024",
      stockAvailability: "green",
      image: "https://extellsystems.com/wp-content/uploads/2021/05/CAT6_Cover.webp",
    },
    {
      id: "10236",
      name: "M12 Gigabit PoE+ Railway Switch",
      vendor: "trendnet",
      stockCount: 2,
      grndate: "12/06/2024",
      stockAvailability: "red",
      image: "https://extellsystems.com/wp-content/uploads/2021/05/CAT6_Cover.webp",
    },
    {
      id: "10237",
      name: "M12 Gigabit PoE+ Railway Switch",
      vendor: "trendnet",
      stockCount: 20,
      grndate: "12/06/2024",
      stockAvailability: "orange",
      image: "https://extellsystems.com/wp-content/uploads/2021/05/CAT6_Cover.webp",
    },
    {
      id: "10238",
      name: "M12 Gigabit PoE+ Railway Switch",
      vendor: "trendnet",
      stockCount: 10,
      grndate: "12/06/2024",
      stockAvailability: "blue",
      image: "https://extellsystems.com/wp-content/uploads/2021/05/CAT6_Cover.webp",
    },
    {
      id: "10239",
      name: "M12 Gigabit PoE+ Railway Switch",
      vendor: "trendnet",
      stockCount: 2,
      grndate: "12/06/2024",
      stockAvailability: "red",
      image: "https://extellsystems.com/wp-content/uploads/2021/05/CAT6_Cover.webp",
    },
    // Add more products as needed
  ];

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleStockLevelChange = (event) => {
    setStockLevelFilter(event.target.value);
  };

  const getBadge = (availability) => {
    switch (availability) {
      case "green":
        return <Badge bg="success">Prime</Badge>;
      case "blue":
        return <Badge bg="primary">Re-order</Badge>;
      case "orange":
        return <Badge bg="warning">Low</Badge>;
      case "red":
        return <Badge bg="danger">Unavailable</Badge>;
      default:
        return null;
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearchQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStockLevel =
      stockLevelFilter === "All" || product.stockAvailability === stockLevelFilter;
    return matchesSearchQuery && matchesStockLevel;
  });

  return (
    <div className="container my-4">
      <div className="row mb-4">
        <div className="col">
          <h3 className="mb-4">Stock</h3>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-6">
          <Form.Group controlId="searchQuery">
            <Form.Label>Search Stock</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search by product name"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </Form.Group>
        </div>
        <div className="col-md-6">
          <Form.Group controlId="stockLevelFilter">
            <Form.Label>Filter by Stock Level</Form.Label>
            <Form.Control as="select" value={stockLevelFilter} onChange={handleStockLevelChange}>
              <option value="All">All</option>
              <option value="green">Prime</option>
              <option value="blue">Re-order</option>
              <option value="orange">Low</option>
              <option value="red">Unavailable</option>
            </Form.Control>
          </Form.Group>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col">
          <h5>Stock Level Key:</h5>
          <div className="d-flex align-items-center">
            <Badge bg="success" className="me-2">Prime</Badge>
           
            <Badge bg="primary" className="me-2">Re-order</Badge>
          
            <Badge bg="warning" className="me-2">Low</Badge>
            
            <Badge bg="danger" className="me-2">Unavailable</Badge>
          
          </div>
        </div>
      </div>

      <div className="row g-4">
        {filteredProducts.map((product, index) => (
          <div key={index} className="col-12 col-md-6">
            <div
              className="card h-100 shadow-sm"
              onClick={() => handleCardClick(product)}
              style={{ cursor: "pointer" }}
            >
              <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                  <img 
                    src={product.image} 
                    className="img-fluid rounded-start" 
                    alt="Product" 
                    style={{ maxHeight: '250px', objectFit: 'contain', minHeight: '150px' }} 
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Product ID: {product.id}</h5>
                    <p className="card-text">Name: {product.name}</p>
                    <p className="card-text">Stock Status: {getBadge(product.stockAvailability)}</p>
                    <p className="card-text mt-3"><small className="text-muted">GRN Date: {product.grndate}</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Product Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row mb-3">
              <div className="col">
                <p className="font-weight-bold">Product ID:</p>
                <p>{selectedProduct.id}</p>
              </div>
              <div className="col">
                <p className="font-weight-bold">Name:</p>
                <p>{selectedProduct.name}</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <p className="font-weight-bold">Vendor:</p>
                <p>{selectedProduct.vendor}</p>
              </div>
              <div className="col">
                <p className="font-weight-bold">Stock Status:</p>
                <Badge bg="success">Available {selectedProduct.stockCount}</Badge>
                <Badge bg="pink" className="mt-2">30 days Old</Badge>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="font-weight-bold">GRN Date:</p>
                <Badge>{selectedProduct.grndate}</Badge>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            {["blue", "orange", "red"].includes(selectedProduct.stockAvailability) && (
              <Button variant="danger" onClick={handleClose}>PO Request</Button>
            )}
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default StockManagement;
