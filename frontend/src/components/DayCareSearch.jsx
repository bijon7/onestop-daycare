import * as React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FormControl, InputLabel, Input, TextField, Button } from "@mui/material";
import axios from "axios";


// /callender
// /calendar/?search=toronto
// navigate('/calendar/?'+searchState)
// console.log(searchParams)
// searchParams.seach
// searchParams.search?

// axios.get('/api/daycares/', { params; { search: valueFromSearchHere } })

const defaultValues = {
  search: ""
}
export default function DayCareSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [formValues, setFormValues] = React.useState(defaultValues);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log("## useSearchParams", formValues); // currently sends nothing to the backend, need to useNavigate away to Calendar Page
  //   try {
  //     const result = await (axios.post('http://localhost:8080/api/users/search', {...formValues}))
  //   console.log("correct city", result.data);

  //   } catch (error) {
  //     console.log("error")
  //   }

  // };

  const handleSubmit = async (event) => {

    event.preventDefault();
    console.log("## useSearchParams", formValues); // currently sends nothing to the backend, //need to useNavigate away to Calendar Page
    navigate(`/daycares/?city=${formValues.search}`)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl className="daycare-search">
          <TextField
            id="search"
            label="Search through Cities"
            name="search"
            type="search"
            value={formValues.search}
            onChange={handleInputChange} />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </FormControl>
      </form>
    </div>

  );
}
