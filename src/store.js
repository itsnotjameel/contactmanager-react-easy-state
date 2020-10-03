import { store } from "@risingstack/react-easy-state";
import axios from "axios";
const usersGetRequest = async () => {
  const data = await axios.get("https://jsonplaceholder.typicode.com/users");
  myStore.contacts = data.data;
};
usersGetRequest();
const myStore = store({
  contacts: [],
});
export default myStore;
