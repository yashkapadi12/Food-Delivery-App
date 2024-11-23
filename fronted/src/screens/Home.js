import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Carousel } from "../components/Carsouel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const loadData = () => {
    const url = "http://localhost:8000/api/foodData";
    axios.post(url).then((response) => {
      setFoodCat(response.data[0]);
      setFoodItem(response.data[1]);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel Search={search} setSearch={setSearch} />
      </div>

      <div className="container">
        {foodCat.length > 0 ? (
          foodCat.map((data) => (
            <div className="row mb-3">
              <div key={data._id} className="fs-3 m-3">
                {data.CategoryName}
              </div>

              <hr />
              {foodItem
                .filter(
                  (item) =>
                    item.CategoryName == data.CategoryName &&
                    item.name.toLowerCase().includes(search.toLocaleLowerCase())
                )
                .map((filteredItem) => (
                  <div
                    key={filteredItem._id}
                    className="col-12 col-md-6 col-lg-3"
                  >
                    <Card
                      foodItem={filteredItem}
                      options={filteredItem.options[0]}
                    />
                  </div>
                ))}
            </div>
          ))
        ) : (
          <div>No categories available</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
