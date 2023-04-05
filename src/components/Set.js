import React from "react";

const Set = ({ items, addItem, handleChange, value }) => {
  return (
    <div className="set">
      <div className="adding">
        <form onSubmit={(e) => addItem(e)} className="adding-form">
          <button className="add-button">Add</button>
          <input
            placeholder="type the subject here"
            className="item-name"
            value={value.subject}
            required
            name="subject"
            onChange={handleChange}
          />
          <p>:</p>
          <input
            placeholder="type aim hours here"
            className="aim-time"
            value={value.hours}
            required
            name="hours"
            onChange={handleChange}
          />
          <p>hours</p>
          <input
            placeholder="type aim minutes here"
            className="aim-time"
            value={value.minutes}
            required
            name="minutes"
            onChange={handleChange}
          />
          <p>minutes</p>
        </form>
      </div>
    </div>
  );
};

export default Set;
