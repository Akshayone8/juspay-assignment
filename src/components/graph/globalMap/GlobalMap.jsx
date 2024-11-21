import WorldMapIcon from "../../navbar/Images/WorldMap.svg";
import {
  RevenueLocationCard,
  WorldMap,
  WorldIconWrap,
  CountryPercentage,
  PercentageLabel,
  ValueLabel,
  PercentageBar,
  Fill,
  LabelWrap,
  DataTitle,
} from "./GlobalMapStyled";
import { countryData } from "../data";

const GlobalMap = ({ isDarkMode }) => {
  return (
    <RevenueLocationCard isDarkMode={isDarkMode}>
      <DataTitle isDarkMode={isDarkMode} style={{ textAlign: "center" }}>
        Revenue by Location
      </DataTitle>
      <WorldIconWrap>
        <WorldMap src={WorldMapIcon} />
      </WorldIconWrap>
      {countryData.map((country) => (
        <CountryPercentage key={country.name}>
          <LabelWrap>
            <PercentageLabel isDarkMode={isDarkMode}>
              {country.name}
            </PercentageLabel>
            <ValueLabel
              isDarkMode={isDarkMode}
            >{`${country.percentage}k`}</ValueLabel>
          </LabelWrap>
          <PercentageBar isDarkMode={isDarkMode}>
            <Fill percentage={country.percentage} isDarkMode={isDarkMode} />
          </PercentageBar>
        </CountryPercentage>
      ))}
    </RevenueLocationCard>
  );
};

export default GlobalMap;
