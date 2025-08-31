import { useState, useEffect } from "react";
import { baseUrl } from "../../config/constants";
import axios from "axios";

const CrudAxios = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [input, setInput] = useState({ title: "", year: "", categoryId: "" });
  // console.log(categories)
  

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

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post(`${baseUrl}/api/movie`, {
        title: input.title, 
        year: Number(input.year),
        categoryId: Number(input.categoryId)
      });
      fetchDataMovie();
      setInput({ title: "", year: "", categoryId: "" });
    } catch (err) {
      alert(err)
    }
  }

  const handleChange = (event) => {
    let { name, value } = event.target
    setInput({ ...input, [name]: value})
  }
  return (
    <>
      <h1 className="text-header">CRUD Axios</h1>
      {/* <Home></Home> */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          value={input.title}
          placeholder="Title.. "
        />

        <label htmlFor="year">Year</label>
        <input
          type="number"
          id="year"
          name="year"
          onChange={handleChange}
          value={input.year}
          placeholder="Release date.."
          min={1888}
          max={2025}
        />

        <label htmlFor="category">Category</label>
        <select id="category" name="categoryId" onChange={handleChange}>
            { categories.map((item, index) => {
                return (
                    <option key={ index } value={ item.id }>{ item.name }</option>
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
