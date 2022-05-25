/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
//Adding test routes

const express = require('express');
const router = express.Router();

module.exports = (db) => {
  //axios.get/users
  //response.data.users....<user>,<userlist>
  //   router.get("/", (req, res) => {
  //     db.query(`SELECT * FROM users;`)
  //       .then(data => {
  //         const users = data.rows;
  //         res.json({ users });
  //       })
  //       .catch(err => {
  //         res
  //           .status(500)
  //           .json({ error: err.message });
  //       });
  //   });
  //   return router;
  // };

  router.post("/signup", (req, res) => {
    const {
      name,
      address,
      city,
      postalCode,
      email,
      password,
      phoneNumber,
      acctType
    } = req.body;
    console.log(req.body);

    if (acctType !== "daycare" && acctType !== "guardian") {
      return res.status(400)
        .json({ error: "Please check account type" });

    }

    let queryScript = "";
    if (acctType === "guardian") {
      queryScript = `
        INSERT INTO guardian (name, phoneNumber, address, city, postalCode, email, password, acctType)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *;
      `
    }

    else {
      queryScript = `
        INSERT INTO daycare (name, phoneNumber, address, city, postalCode,  email, password, acctType)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *;
      `

    }
    db.query(queryScript, [name, phoneNumber, address, city, postalCode, email, password, acctType])
      .then(data => {
        const user = data.rows[0];
        res.json({ user });
      })
      .catch(err => {
        console.log(err);
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/search", (req, res) => {
    queryScript = `SELECT *
    FROM daycare
    WHERE city = $1;`

    db.query(queryScript, [req.body.city])
      .then(data => {
        const city = data.rows;
        console.log("city", city)
        res.json(city)

      });
    console.log("searchCity", req.body)

  })

  return router;
};
