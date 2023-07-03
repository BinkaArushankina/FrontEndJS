import React from "react";
import { useSelector } from "react-redux";
import { selectItemsData } from "../redux/slices/itemsSlice";
import Card, { CardItem } from "./Card";
import Skeleton from "./Skeleton";

//tipisazia propsow
type CardsProps = {
  title: string;
};

//opisiwaet logiku i polsowatelskij interfejs wsech kartotschek s towarom
//sosdaem lomponent Cards tipisiruem ego i propsi dannogo komponenta s pomoschju destrukturisazii props
const Cards: React.FC<CardsProps> = ({ title }) => {
  //dostaju is globalnogo sostojania neobchodimie snatschenia
  const { items, status } = useSelector(selectItemsData);

  return (
    <section className="cards">
      <h2 className="title cards__title">{title}</h2>
      {status === "error" ? (
        <p className="cards__error">
          Данные не загрузились :( Попробуйте зайти позже
        </p>
      ) : (
        <div className="cards__list">
          {status === "loading"
            ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
            : items.map((item: CardItem) => <Card {...item} key={item.id} />)}
        </div>
      )}
    </section>
  );
};

export default Cards;
