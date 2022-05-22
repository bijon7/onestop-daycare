import { useState } from "react";
import "./AdminDashboard.scss";
import ChildProfile from "../components/ChildProfile";
import DaycareProfile from "../components/DaycareProfile";

const calendarData = {
  name: "Daycare X",
  rating: 3,
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
};

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

  const [capacity, setCapacity] = useState("30");
  const [bio, setBio] = useState("Apply your child for our daycare!");
  const [title, setTitle] = useState("Daycare X");
  const [age, setAge] = useState("0-7");

  return (
    <div className="admin-dashboard">
      <div className="daycare-name">
        <h2>Daycare Name</h2>
      </div>
      <div className="dashboard">
        <div className="left">
          <div className="new-application">
            <h3>New Applications</h3>

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
          <div className="daycare-profile">
            <h3>Update Profile</h3>
            <form className="daycare-profile-form">
              <label>Max Capacity:
                <input id="capacity" type="text" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
              </label>
              <label>Bio:
                <input id="bio" type="text" value={bio} onChange={(e) => setBio(e.target.value)} />
              </label>
              <label>Daycare Title:
                <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
              </label>
              <label>Age Group:
                <input id="age" type="text" value={age} onChange={(e) => setAge(e.target.value)} />
              </label>
            </form>
            <div className="displayed-profile">
              <h3>Daycare Profile</h3>
              {/*
              <h4 id="daycare-title">{title}</h4>
              <p>Maximum capacity of children: {capacity}.</p>
              <p>{bio}</p>
              <p>The age range of children is {age}.</p> */}
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
                <h4>{calendarData.jan}</h4>
              </div>
              <div className="feb">
                <h4>FEB</h4>
                <h4>{calendarData.feb}</h4>
              </div>
              <div className="mar">
                <h4>MAR</h4>
                <h4>{calendarData.mar}</h4>
              </div>
              <div className="apr">
                <h4>APR</h4>
                <h4>{calendarData.apr}</h4>
              </div>
              <div className="may">
                <h4>MAY</h4>
                <h4>{calendarData.may}</h4>
              </div>
              <div className="jun">
                <h4>JUN</h4>
                <h4>{calendarData.jun}</h4>
              </div>
              <div className="jul">
                <h4>JUL</h4>
                <h4>{calendarData.jul}</h4>
              </div>
              <div className="aug">
                <h4>AUG</h4>
                <h4>{calendarData.aug}</h4>
              </div>
              <div className="sep">
                <h4>SEP</h4>
                <h4>{calendarData.sep}</h4>
              </div>
              <div className="oct">
                <h4>OCT</h4>
                <h4>{calendarData.oct}</h4>
              </div>
              <div className="nov">
                <h4>NOV</h4>
                <h4>{calendarData.nov}</h4>
              </div>
              <div className="dec">
                <h4>DEC</h4>
                <h4>{calendarData.dec}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
