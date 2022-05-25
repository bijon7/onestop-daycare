import { React, useState } from "react";
import "./AdminDashboard.scss";
import ChildProfile from "../components/ChildProfile";
import DaycareProfile from "../components/DaycareProfile";

const testData = {
  child: [
    {
      id: 1,
      name: "George",
      age: "3",
      special_req: "Peanut Allergies, Eats Vegetarian, Autistic",
      guardian: 1
    },
    {
      id: 2,
      name: "Anna",
      age: "5",
      special_req: "Eats Vegetarian, Lactose Intolerant",
      guardian: 1
    }
  ],
  shortList: [
    {
      id: 1,
      guardian_id: 1,
      daycare_id: 1
    }
  ],
  calendar: [
    {
      jan: "full",
      feb: "full",
      mar: "full",
      apr: "full",
      may: "full",
      jun: "2 spots",
      jul: "2 spots",
      aug: "4 spots",
      sep: "4 spots",
      oct: "4 spots",
      nov: "4 spots",
      dec: "4 spots",
    }
  ]
}

const testUser = {
  guardian: [
    {
      id: 1,
      name: "Allen Miller",
      phone: "555 555 5555",
      email: "allen.miller@email.com",
      child: [1, 2]
    }
  ]
}

const guardian_id = testUser.guardian[0].id;
const guardianShortList = testData.shortList.filter((data) => data.guardian_id === guardian_id );

const AdminDashboard = () => {

  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [bio, setBio] = useState("");
  const [age, setAge] = useState("");
  const [capacity, setCapacity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let formValues = {
      ["name"]: name,
      ["street"]: street,
      ["city"]: city,
      ["postalCode"]: postalCode,
      ["bio"]: bio,
      ["age"]: age,
      ["capacity"]: capacity,
    };
    console.log("Submitted");
    console.log(formValues);
  }

  return (
    <div className="admin-dashboard">
      <div className="daycare-name">
        <h2>Daycare Name</h2>
      </div>
      <div className="dashboard">
        <div className="left">
          <div className="new-application">
            <h3>New Applications</h3>
            <div className="applications">
              {testData.child.map((data) => {
                return (
                  <ChildProfile
                    key={data.id}
                    id={data.id}
                    name={data.name}
                    age={data.age}
                    special_req={data.special_req}
                    user={data.guardian} />
                );
              })}
            </div>
          </div>
          <div className="daycare-profile">
            <h3>Update Profile</h3>
            <form className="daycare-profile-form" onSubmit={handleSubmit}>
              <input id="name" type="text" placeholder="Daycare Name" value={name} onChange={(e) => setName(e.target.value)} />
              <input id="street" type="text" placeholder="Street" value={street} onChange={(e) => setStreet(e.target.value)} />
              <input id="city" type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
              <input id="postalCode" type="text" placeholder="Postal Code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
              <input id="bio" type="text" placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} />
              <input id="age" type="text" placeholder="Age Group" value={age} onChange={(e) => setAge(e.target.value)} />
              <input id="capacity" type="text" placeholder="Max Capacity" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
              <input id="submit-button" type="submit" value="SUBMIT" />
            </form>
            <div className="displayed-profile">
              <h3>Daycare Profile</h3>
              <DaycareProfile
                key={guardianShortList[0].id}
                id={guardianShortList[0].id}
                guardian={testUser.guardian[0]} // should be a cookie
                daycare={guardianShortList[0].daycare_id}
              />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="monthly-schedule">
            <h3>Monthly Schedule</h3>
            <div className="months">
              <div className="jan">
                <h4>JAN</h4>
                <h4>{testData.calendar[0].jan}</h4>
              </div>
              <div className="feb">
                <h4>FEB</h4>
                <h4>{testData.calendar[0].feb}</h4>
              </div>
              <div className="mar">
                <h4>MAR</h4>
                <h4>{testData.calendar[0].mar}</h4>
              </div>
              <div className="apr">
                <h4>APR</h4>
                <h4>{testData.calendar[0].apr}</h4>
              </div>
              <div className="may">
                <h4>MAY</h4>
                <h4>{testData.calendar[0].may}</h4>
              </div>
              <div className="jun">
                <h4>JUN</h4>
                <h4>{testData.calendar[0].jun}</h4>
              </div>
              <div className="jul">
                <h4>JUL</h4>
                <h4>{testData.calendar[0].jul}</h4>
              </div>
              <div className="aug">
                <h4>AUG</h4>
                <h4>{testData.calendar[0].aug}</h4>
              </div>
              <div className="sep">
                <h4>SEP</h4>
                <h4>{testData.calendar[0].sep}</h4>
              </div>
              <div className="oct">
                <h4>OCT</h4>
                <h4>{testData.calendar[0].oct}</h4>
              </div>
              <div className="nov">
                <h4>NOV</h4>
                <h4>{testData.calendar[0].nov}</h4>
              </div>
              <div className="dec">
                <h4>DEC</h4>
                <h4>{testData.calendar[0].dec}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
