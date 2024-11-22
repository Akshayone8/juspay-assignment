import {
  CardCount,
  CardSubCount,
  CardsWrap,
  CountWrap,
  Card,
  DataTitle,
  ProgressIcon,
} from "./CardsStyled";
import { cardData } from "../data";

const Cards = ({ isDarkMode }) => {
  return (
    <CardsWrap>
      {cardData.map((card, index) => (
        <Card key={index} type={card.type} isDarkMode={isDarkMode}>
          <DataTitle isDarkMode={isDarkMode && card.isDarkMode}>
            {card.title}
          </DataTitle>
          <CountWrap>
            <CardCount isDarkMode={isDarkMode && card.isDarkMode}>
              {card.count}
            </CardCount>
            <CardSubCount
              isPositive={card.isPositive}
              isDarkMode={isDarkMode && card.isDarkMode}
            >
              {card.subCount}
              <ProgressIcon
                src={isDarkMode && card.isDarkMode ? card.darkIcon : card.icon}
                alt={card.type}
              />
            </CardSubCount>
          </CountWrap>
        </Card>
      ))}
    </CardsWrap>
  );
};

export default Cards;
