import apiInfo from "../API logic/api";

const submitHandler = (e) => {
  e.preventDefault();
  const locationValue = document.querySelector("#location").value;
  apiInfo(locationValue);
};
export default submitHandler;
