import { styled } from "@stitches";
import type { NextPage } from "next";

const Typography = styled("p", {
  fontFamily: "$secondary",
  fontSize: "$2",
  fontWeight: "300",
  color: "$gray8",
});

const Home: NextPage = () => {
  return <Typography>How it works</Typography>;
};

export default Home;
