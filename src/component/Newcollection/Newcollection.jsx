import "./Newcollection.css";
import Item from '../Item/Item';
import new_collection from "../Assets/new_collections"; // Static fallback data import
import { useState,useEffect } from "react";

const NewCollection = () => {
  const [newCollectionImages, setNewCollectionImages] = useState(new_collection); // Initialize with static data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://reactjs-e-comer-backend.onrender.com/newcollection')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setNewCollectionImages(data); // Replace with fetched data if successful
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="newcollection">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {newCollectionImages.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
