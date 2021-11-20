import React, { Fragment, useRef, useState, useEffect } from "react";
import "./index.css";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FormActions } from "../../redux/form";
function Index() {
  const dispatch = useDispatch();
  const itemsredux = useSelector((state) => state.items);
  const [items, setitems] = useState(itemsredux);
  useEffect(() => {
    setitems(itemsredux);
  }, [itemsredux]);

  const deleteref = useRef();
  const [filter, setfilter] = useState("");
  const deleteHandler = (event) => {
    dispatch(FormActions.delete(event.target.value));
  };

  const Categoryhandler = (e) => {
    setfilter(e.target.value);
  };
  const filterhandler = (e) => {
    setitems(() => {
      const search = e.target.value;
      return itemsredux.filter((item) => {
        return item[filter].includes(
          search.slice(0, 1).toUpperCase() + search.slice(1)
        );
      });
    });
  };
  return (
    <Fragment>
      <div className="filter">
        <select defaultValue={"DEFAULT"} onChange={Categoryhandler} required>
          <option value="DEFAULT" disabled>
            Select filter
          </option>
          <option value="city">Area</option>
          <option value="Category">Catergory</option>
          <option value="status">Status</option>
        </select>
        <input
          onChange={filterhandler}
          disabled={!filter ? true : false}
          placeholder="filter shop"
        />
      </div>
      <div className="grid">
        {items.map((item, index) => {
          // dispatch(
          //   FormActions.status({ date: item["Closing date"], name: item.name })
          // );

          return (
            <article className="card Shop-item" key={index}>
              <header className="card__header">
                <h1 className="Shop__title">{item.name}</h1>
              </header>
              <div className="card__image">
                <img
                  src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                  alt="shop"
                />
              </div>
              <div className="shop__Details">
                {item.Category}(
                <span className={item.status}>{item.status}</span>)
              </div>
              <p className="city">{item.city}</p>
              <div className="card__actions">
                <button className="btn">Details</button>
                <button
                  className="btn"
                  ref={deleteref}
                  value={item.name}
                  onClick={deleteHandler}>
                  Delete
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </Fragment>
  );
}

export default Index;
