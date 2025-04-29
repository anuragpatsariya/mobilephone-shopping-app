import { useState } from 'react';
import '../styles/module.css';

type MobilePhone = {
  id: number;
  brand: string;
  model: string;
  price: number;
  ram: number;
  storage: number;
  processor: string;
  screen_size: number;
  image: string;
};

const AdminPage = () => {
  const [formData, setFormData] = useState<Omit<MobilePhone, 'id'>>({
    brand: '',
    model: '',
    price: 0,
    ram: 0,
    storage: 0,
    processor: '',
    screen_size: 0,
    image: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/phones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to add phone');
      }

      // Reset form
      setFormData({
        brand: '',
        model: '',
        price: 0,
        ram: 0,
        storage: 0,
        processor: '',
        screen_size: 0,
        image: '',
      });

      alert('Phone added successfully!');
    } catch (error) {
      console.error('Error adding phone:', error);
      alert('Failed to add phone. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'ram' || name === 'storage' || name === 'screen_size'
        ? parseFloat(value)
        : value
    }));
  };

  return (
    <div className="admin-container">
      <h1 style={{ color: 'black' }}>Add New Mobile Phone</h1>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="model">Model:</label>
          <input
            type="text"
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price ($):</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
          />
        </div>

        <div className="form-group">
          <label htmlFor="ram">RAM (GB):</label>
          <input
            type="number"
            id="ram"
            name="ram"
            value={formData.ram}
            onChange={handleChange}
            required
            min="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="storage">Storage (GB):</label>
          <input
            type="number"
            id="storage"
            name="storage"
            value={formData.storage}
            onChange={handleChange}
            required
            min="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="processor">Processor:</label>
          <input
            type="text"
            id="processor"
            name="processor"
            value={formData.processor}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="screen_size">Screen Size (inches):</label>
          <input
            type="number"
            id="screen_size"
            name="screen_size"
            value={formData.screen_size}
            onChange={handleChange}
            required
            min="0"
            step="0.1"
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Add Phone</button>
      </form>
    </div>
  );
};

export default AdminPage; 