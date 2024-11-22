import { useContext } from "react";
import ProjectionsVsActualsChart from "../graph/BarChart";
import Cards from "../graph/cards/Cards";
import SalesDonutChart from "../graph/DonutChart";
import GlobalMap from "../graph/globalMap/GlobalMap";
import RevenueChart from "../graph/LIneChart";
import TopSellingProductsTable from "../graph/TopSelling";
import {
  DataContainer,
  DataTitle,
  SectionOneWrap,
  ProjectionCard,
  RevenueGraphCard,
} from "./DefaultStyled";
import { AppContext } from "../../context/AppContext";

const Default = () => {
  const { isDarkMode } = useContext(AppContext);
  return (
    <DataContainer isDarkMode={isDarkMode}>
      <DataTitle isDarkMode={isDarkMode}>eCommerce</DataTitle>
      <SectionOneWrap>
        <Cards isDarkMode={isDarkMode} />
        <ProjectionCard isDarkMode={isDarkMode}>
          <DataTitle
            isDarkMode={isDarkMode}
            style={{ paddingTop: "16px", paddingLeft: "20px" }}
          >
            Projections vs Actuals
          </DataTitle>
          <ProjectionsVsActualsChart isDarkMode={isDarkMode} />
        </ProjectionCard>
      </SectionOneWrap>
      <SectionOneWrap>
        <RevenueGraphCard isDarkMode={isDarkMode}>
          <RevenueChart />
        </RevenueGraphCard>
        <GlobalMap isDarkMode={isDarkMode} />
      </SectionOneWrap>
      <SectionOneWrap>
        <TopSellingProductsTable isDarkMode={isDarkMode} />

        <SalesDonutChart isDarkMode={isDarkMode} />
      </SectionOneWrap>
    </DataContainer>
  );
};

export default Default;
