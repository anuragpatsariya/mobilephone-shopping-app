// components/MobilePhoneList.tsx
import { useEffect, useState } from 'react';
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
};

const MobilePhoneList = () => {
  const [phones, setPhones] = useState<MobilePhone[]>([]);

  useEffect(() => {
    fetch('/api/phones')
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);

  return (
    <div>
      <h1>Mobile Phones</h1>
      <div className="phone-grid">
      {phones.map((phone) => (
        //<div key={phone.id} style={{ marginBottom: '1rem', border: '2px solid white', padding: '1rem' }}>
        <div key={phone.id} className="borderBox">
          <h2>{phone.brand} {phone.model}</h2>
          <p>Price: ${phone.price}</p>
          <p>RAM: {phone.ram} GB</p>
          <p>Storage: {phone.storage} GB</p>
          <p>Processor: {phone.processor}</p>
          <p>Screen Size: {phone.screen_size}"</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default MobilePhoneList;
