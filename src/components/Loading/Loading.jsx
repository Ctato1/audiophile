import BeatLoader from "react-spinners/BeatLoader";

const override = {
  display: "flex",
  justifyContent:'center',
  margin: "100px auto",
  borderColor: "red",
};

function Loading() {

  return (
      <BeatLoader
        color='#D87D4A'
        loading={true}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  );
}

export default Loading;