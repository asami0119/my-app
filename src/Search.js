import React from "react";

export default function Search() {
  return (
    <div>
      <form className="mb-3">
        <input
          type="search"
          placeholder="Enter a city."
          className="form-control"
          autocomplete="off"
        />

        <input type="submit" value="Search" className="btn btn-primary w-100" />
      </form>
    </div>
  );
}
