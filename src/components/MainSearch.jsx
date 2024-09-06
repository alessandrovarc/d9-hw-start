import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import Favourite from "./Favourites";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const navigate= useNavigate()
  

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = e => {
    setQuery(e.target.value);
    
  };
//   const handleClick = ()=> {
//     navigate('/favourites')
//     console.log('sono entrato')//per collegarmi al path della route
// }
  
  
  const handleSubmit = async e => {
    e.preventDefault();
    try {

      const response = await fetch(baseEndpoint + query + "&limit=20");
       if (response.ok) {
         const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }

    } catch (error) {
      console.log(error);
    }
     
  }; 
 
   
  

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map(jobData => (
            <Job key={jobData._id} jobData={jobData} />
          ))}
          <Button variant="outline-warning" className='my-2' onClick={()=>{navigate("/favourites")}}>Favourites</Button>
      <Favourite />
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
