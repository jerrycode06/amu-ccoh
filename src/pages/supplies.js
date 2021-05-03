import React, { useContext, useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { SelectedContext } from "./../context/selected";
import { Card, Badge } from "react-bootstrap";

const Supplies = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedArray] = useContext(SelectedContext);
  const [oxygen, setOxygen] = useState([]);
  const [beds, setBeds] = useState([]);
  const [meds, setMeds] = useState([]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    async function fetchData() {
      if (
        selectedArray[0] === "oxygen" ||
        selectedArray[1] === "oxygen" ||
        selectedArray[2] === "oxygen"
      ) {
        await fetch(
          `https://amuccoh.pythonanywhere.com/api/v1/oxygen/?format=json`
        )
          .then((res) => res.json())
          .then((data) => setOxygen(data));
      }

      if (
        selectedArray[0] === "hospitals" ||
        selectedArray[1] === "hospitals" ||
        selectedArray[2] === "hospitals"
      ) {
        await fetch(
          `https://amuccoh.pythonanywhere.com/api/v1/hospitals/?format=json`
        )
          .then((res) => res.json())
          .then((data) => setBeds(data));
      }

      if (
        selectedArray[0] === "meds" ||
        selectedArray[1] === "meds" ||
        selectedArray[2] === "meds"
      ) {
        await fetch(
          `https://amuccoh.pythonanywhere.com/api/v1/meds/?format=json`
        )
          .then((res) => res.json())
          .then((data) => setMeds(data));
      }
    }

    fetchData();
  }, [selectedArray]);

  function getBadgeVariant(value) {
    if (value === "Yes") return "success";
    if (value === "Filling") return "primary";
    if (value === "Both") return "success";
    return "danger";
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} op={true} />
      {oxygen.length !== 0 && (
        <div className="cardgroup">
          <h1>Oxygen Availability</h1>
          <div className="card-group" style={{ margin: "0 50px" }}>
            {oxygen.map((data) => (
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {data.address}
                  </Card.Subtitle>
                  <Card.Text>
                    Filling/New Purchase -{" "}
                    <Badge variant={getBadgeVariant(data.type_is)}>
                      {data.type_is}
                    </Badge>{" "}
                    <br />
                    Last Updated - {data.last_updated}
                  </Card.Text>
                  <Card.Link>{data.contact}</Card.Link>
                  <br />
                  <Card.Link>{data.other_contact}</Card.Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      )}

      {beds.length !== 0 && (
        <div className="cardgroup">
          <h1>Hospital Availability</h1>
          <div className="card-group" style={{ margin: "0 50px" }}>
            {beds.map((data) => (
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {data.address}
                  </Card.Subtitle>
                  <Card.Text>
                    Availability -{" "}
                    <Badge variant={getBadgeVariant(data.availablity)}>
                      {data.availablity}
                    </Badge>{" "}
                    <br />
                    Contains - {data.tags[0]} &nbsp; {data.tags[1]}
                  </Card.Text>
                  <Card.Link>{data.contact}</Card.Link>
                  <br />
                  <Card.Link>{data.other_contact}</Card.Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      )}

      {meds.length !== 0 && (
        <div className="cardgroup">
          <h1>Pharmacies Availability</h1>
          <div className="card-group" style={{ margin: "0 50px" }}>
            {meds.map((data) => (
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {data.address}
                  </Card.Subtitle>
                  <Card.Text>
                    Availability -{" "}
                    <Badge variant={getBadgeVariant(data.availablity)}>
                      {data.availablity}
                    </Badge>{" "}
                    <br />
                    Medicines Available -{" "}
                    <strong>
                      {" "}
                      {data.tags[0]} &nbsp; {data.tags[1]}{" "}
                    </strong>
                  </Card.Text>
                  <Card.Link>{data.contact}</Card.Link>
                  <br />
                  <Card.Link>{data.other_contact}</Card.Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Supplies;
