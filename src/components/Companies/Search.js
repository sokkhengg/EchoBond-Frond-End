import React, { useState } from "react";
import SearchResults from "./SearchResults";
import RandomPodcasts from "./RandomPodcasts";
import "./Company.css";
import { AiOutlineSearch } from "react-icons/ai";

// bootstrap
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Search({ currentUser }) {
  const [searchResults, setSearchResults] = useState([]);
  const [searchError, setSearchError] = useState("");

  function handleSearchFormSubmit(e) {
    e.preventDefault();
    setSearchError("");
    setSearchResults([]);
    fetch(
      `https://localhost3000/companies/search?term=${e.target[0].value}attributeType=name.`
    )
      .then((r) => r.json())
      .then((r) => {
        if (r.results.length > 0) {
          setSearchResults(r.results);
        } else {
          setSearchError("no results");
        }
      });
  }

  return (
    <div>
      <Row id="search-row">
        <Col></Col>
        <Col>
          <h2 className="subheading-white">Search</h2>
          <br />
          <Form onSubmit={(e) => handleSearchFormSubmit(e)}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search for a podcast..."
                aria-label="Search for a podcast..."
                aria-describedby="basic-addon2"
              />
              <Button
                type="submit"
                variant="outline-secondary"
                id="button-addon2"
              >
                <span id="search-icon">
                  <AiOutlineSearch />
                </span>
              </Button>
            </InputGroup>
          </Form>
          {/* <Row className="text-center">
            <p id="search-subtext">
              Doughboys, Why Won't You Date Me?, Sloppy Seconds, Comedy Bang
              Bang...
            </p>
          </Row> */}
        </Col>
        <Col></Col>
      </Row>

      

      <SearchResults searchResults={searchResults} currentUser={currentUser} />

      {/* FIX THIS */}
      {/* {searchResults ? <RandomPodcasts /> : null} */}

      {searchError.length > 0 ? (
        <>
          <Row style={{ paddingTop: "30px" }}>
            <Col></Col>
            <Col className="text-center">
              <p>Try searching again.</p>
            </Col>
            <Col></Col>
          </Row>
        </>
      ) : null}
    </div>
  );
}

export default Search;
