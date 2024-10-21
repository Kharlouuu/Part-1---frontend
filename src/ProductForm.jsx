import { useState } from 'react';

function ProductForm() {
  const [product, setProduct] = useState({
    productCode: '',
    name: '',
    description: '',
    price: '',
    quantity: '',
    dateAdded: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleSave = () => {
    console.log('Product saved:', product);
  };

  const handleClear = () => {
    setProduct({
      productCode: '',
      name: '',
      description: '',
      price: '',
      quantity: '',
      dateAdded: ''
    });
  };

  return (
    <div className="form-container">
      <h2>ADD PRODUCT</h2>
      <div className="form-group">
        <label>PRODUCT CODE</label>
        <input type="text" name="productCode" value={product.productCode} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>NAME</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>DESCRIPTION</label>
        <input type="text" name="description" value={product.description} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>PRICE</label>
        <input type="number" name="price" value={product.price} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>QUANTITY</label>
        <input type="number" name="quantity" value={product.quantity} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>DATE ADDED</label>
        <input type="date" name="dateAdded" value={product.dateAdded} onChange={handleChange} />
      </div>
      <div className="button-group">
       <button onClick={handleSave}>Save</button>
       <button className="clear" onClick={handleClear}>Clear</button>
</div>

    </div>
  );
}

export default ProductForm;
