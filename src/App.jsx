import {
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import DisplayPicture from "./components/content/DisplayPicture";
import Brief from "./components/content/Brief";
import Skills from "./components/content/Skills";
import LocalTime from "./components/content/LocalTime";
import Links from "./components/content/Links";

const App = () => {
  return (
    <Box
      w="full"
      h="100vh"
      py={{ base: "30px", lg: "60px" }}
    >
      <Grid
        templateColumns="repeat(20, 1fr)"
        templateRows="repeat(20, 1fr)"
        gap={6}
      >
        <GridItem rowSpan={{ base: 20, md: 12 }} colSpan={{ base: 20, lg: 8 }}>
          <DisplayPicture />
        </GridItem>
        <GridItem rowSpan={{ base: 10, md: 4 }} colSpan={{ base: 20, lg: 8 }}>
          <Brief />
        </GridItem>
        <GridItem rowSpan={{ base: 10, md: 4 }} colSpan={{ base: 20, lg: 4 }}>
          <Links />
        </GridItem>
        <GridItem rowSpan={{ base: 20, md: 8 }} colSpan={{ base: 20, lg: 5 }}>
          <Skills />
        </GridItem>
        <GridItem rowSpan={{ base: 10, md: 8 }} colSpan={{base:20,lg:3}}>
          <LocalTime />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default App;
