import { useParams } from "react-router-dom";
const CardDetails = () => {
  const { data } = useParams();
  var parseddata = JSON.parse(decodeURIComponent(data));

  console.log(parseddata);

  return (
    <div>
      <h1>
        {" "}
        Welcome {parseddata["first_name"]} {parseddata["last_name"]}{" "}
      </h1>
      <h1>Selected Deity: {parseddata["selected_deity"]}</h1>
      <h1> Card Details </h1>
    </div>
  );
};

export default CardDetails;
