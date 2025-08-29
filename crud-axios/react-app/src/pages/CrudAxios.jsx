import { useState, useEffect } from "react";
import { baseUrl } from "../../config/constants";
import axios from "axios";

const CrudAxios = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  

  const fetchDataMovie = () => {
      axios.get(`${baseUrl}/api/movie`).then((response) => {
        setData(response.data.data);
      });
  }

  const fetchDataCategory = () => {
      axios.get(`${baseUrl}/api/category`).then((response) => {
          setCategories(response.data.data);
        });
  }

  useEffect(() => {
    fetchDataCategory()
    fetchDataMovie()    
  }, []);
  return (
    <>
      <h1 className="text-header">CRUD Axios</h1>
      {/* <Home></Home> */}
      <form action="/action_page.php">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="movietitle"
          placeholder="Title.. "
        />

        <label htmlFor="year">Year</label>
        <input
          type="number"
          id="year"
          name="movieyear"
          placeholder="Release date.."
          min={1888}
          max={2025}
        />

        <label htmlFor="category">Category</label>
        <select id="category" name="moviecategory">
            { categories.map((item, index) => {
                return (
                    <option key={ item.id } value={ item.id }>{ item.name }</option>
                )
            })}
        </select>

        <input type="submit" value="Submit" />
      </form>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Year</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={ index }>
                <td>{ index + 1 }</td>
                <td>{ item.title }</td>
                <td>{ item.year }</td>
                <td>{ item.category?.name }</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CrudAxios;
