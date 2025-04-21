import React, { useState, useEffect } from "react";
import "./News.css";
import { NewsCard } from "./NewsCard";
import { SideBar } from "./SideBar";
export const NewsMain = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("India");
  const [active, setActive] = useState(1);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [category, setCategory] = useState("general");
  const [condition, setCondition] = useState(true);
   console.log(category)
  const pageSize = 18;
  const fetchData = async () => {
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${category}&country=in&q=${search}&page=${page}&pageSize=${pageSize}&sortBy=popularity&apiKey=7ecfa62bf28c4971ba96ea3db7b53fb2`
    );
    const response = await data.json();
    setData(response.articles);
    setTotalPage(Math.ceil(response.totalResults / pageSize));
  };
  useEffect(() => {
    if (page > 1) {
      setCondition(false);
    }
    if (page === 1) {
      setCondition(true);
    }
    fetchData();
  }, [page,category]);
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleNext = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
  };
  const handleChange = (currentPage) => {
    setPage(currentPage);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  const buttonRendering = () => {
    const paginationButtons = [];
    for (let i = 1; i <= totalPage; i++) {
      paginationButtons.push(
        <button onClick={() => handleChange(i)}>{i}</button>
      );
    }
    return paginationButtons;
  };
  console.log(totalPage)
  return (
    <>
    <div className="Main-content">
      <SideBar
        active={active}
        setActive={setActive}
        setCategory={setCategory}
      />
      <div className="Middle">
        <form className="search" onSubmit={handleSubmit}>
          <input
            className="SearchBar"
            placeholder="Search your Favourite content here..."
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn">Search</button>
        </form>

        <ul className="container">
          {data &&
            data.map((item, index) => (
              <NewsCard
                key={index}
                title={item.title}
                description={item.description}
                img={item.urlToImage}
                url={item.url}
                publishDate={item.publishedAt}
              />
            ))}
        </ul>
      </div>
      
    </div>
    <div className="pagination">
    <button className="btn1" onClick={handlePrev} disabled={condition}>
      Prev
    </button>
    {buttonRendering()}
    <button className="btn1" onClick={handleNext}>Next</button>
  </div>
  </>
  );
};
