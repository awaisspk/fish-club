import { styled, css } from "@stitches";

const text = css({
  color: "$gray10",

  variants: {
    size: {
      1: { fontSize: "$1" },
      2: { fontSize: "$2" },
      3: { fontSize: "$3" },
      4: { fontSize: "$4" },
      5: { fontSize: "$5" },
      6: { fontSize: "$6" },
      7: { fontSize: "$7" },
      8: { fontSize: "$8" },
      9: { fontSize: "$9" },
    },
  },
});

export const Text = styled("span", text);
export const Paragraph = styled("p", text);
export const ListItem = styled("li", text);
export const Small = styled("small", text);
export const H1 = styled("h1", text);
export const H2 = styled("h2", text);
export const H3 = styled("h3", text);

export const Em = styled("em", text, { fontStyle: "italic" });
export const Strong = styled("strong", text, { fontWeight: "$2" });