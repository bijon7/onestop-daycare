import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { FormControl, InputLabel, Input, TextField, Button } from "@mui/material";

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
  let [searchParams, setSearchParams] = useSearchParams();
  const [formValues, setFormValues] = React.useState(defaultValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues); // currently sends nothing to the backend, need to useNavigate away to Calendar Page
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
