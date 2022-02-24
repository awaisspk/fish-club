import { Box } from "@components/box";
import { FC } from "react";

export const PageLayout: FC = ({ children }) => {
  return (
    <>
      <Box
        css={{
          d: "grid",
          gridTemplateRows: "max-content 1fr max-content",
        }}
      >
        {children}
      </Box>
    </>
  );
};
