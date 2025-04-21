import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import "./News.css";
export default function News() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("India");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [condition, setCondition] = useState(true);
  const pageSize = 9;
  const fetchData = async () => {
    const data = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&page=${page}&pageSize=${pageSize}keyword&apiKey=7ecfa62bf28c4971ba96ea3db7b53fb2`
    );
    const response = await data.json();
    setData(response.articles);
    setTotalPage(Math.ceil(response.totalResults / pageSize));
  };
  console.log(totalPage);
  useEffect(() => {
    if (page > 1) {
      setCondition(false);
    }
    if (page === 1) {
      setCondition(true);
    }
    fetchData();
  }, [page]);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
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
  const buttonRendering = () => {
    const paginationButtons = [];
    for (let i = 1; i <= totalPage; i++) {
      paginationButtons.push(
        <button onClick={() => handleChange(i)}>{i}</button>
      );
    }
    return paginationButtons;
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="Enter search query"
          className="input"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btnn">Search</button>
      </form>
      <div className="main">
        {data ? (
          <>
            <ul className="container">
              {data.map((item, index) => (
                <Newsitem
                  key={index}
                  title={item.title}
                  description={item.description}
                  img={item.urlToImage}
                  url={item.url}
                />
              ))}
            </ul>
            <div>
              <button onClick={handlePrev} disabled={condition}>
                Prev
              </button>
              {buttonRendering()}
              <button onClick={handleNext}>Next</button>
            </div>
          </>
        ) : (
          <div>
            <h1>Please enter a query to make a search</h1>
          </div>
        )}
      </div>
    </>
  );
}
