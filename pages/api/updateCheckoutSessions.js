import axios from "axios";
export default function updateCheckoutSessions(req, res) {
  axios
    .get("http://localhost:1337/checkout-ids")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("An error occurred:", error.response);
    });
}
// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }
