import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { ListGroup, Spinner, Alert } from "react-bootstrap";

const HelpDesk = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    async function fetchUpdates() {
      await fetch(
        "https://amuccoh.pythonanywhere.com/api/v1/notice/?format=json"
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("Sorry! Could not fetch the data from resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }
    fetchUpdates();
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} op={true} />
      <div className="listgroup">
        <h1>List of Notices/Updates</h1>
        {isPending && <Spinner animation="border" variant="secondary" />}
        {error && <Alert variant="danger">{error}</Alert>}
        {data && (
          <ListGroup>
            {data.map((update, index) => (
              <ListGroup.Item key={index}>
                <h2>{update.title}</h2>
                <p>{update.remarks}</p>
                <a href={`${update.link}`} target="_blank" rel="noreferrer">
                  Know More
                </a>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </div>
    </>
  );
};

export default HelpDesk;
