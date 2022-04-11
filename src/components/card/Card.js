import React, {useState, useEffect} from "react";

import "./styles/Card.css";
import CardsBuild from './CardsBuild'




const Card = () => {


  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  fetch(
    "https://react-getting-started-115ca-default-rtdb.firebaseio.com/menu.json"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const arr = []

      for (const key in data) {
        const ar = {
          id:key,
          ...data[key]
        };
        arr.push(ar)
      }
    });

    useEffect(()=>{
      setIsLoading(true)
      fetch(
        "https://react-getting-started-115ca-default-rtdb.firebaseio.com/menu.json"    ).then((response) => {
       return response.json();
      }).then((data) => {
        const cardItems = [];
  
        for (const key in data) {
          const cardItem = {
            id:key,
            ...data[key]
          };
  
          cardItems.push(cardItem);
        }
  
        setIsLoading(false);
        setLoadedMeetups(cardItems);
      });
    }, []);

    if (isLoading) {
      return (
        <section>
          <p>Loading...</p>
        </section>
      )
    }
  
    return (
      <section>
        <CardsBuild cardItems={loadedMeetups} />
      </section>
    );
  };


  

//   return (
//     <div className={arr}>
//       <div className="card__img">
//         <img src={arr.img} alt={cardItem.value} />
//       </div>
//       <div className="card__info">
//         <div className="card__info__header">
//           <h1 className="card__info__header__title">{cardItem.title}</h1>
//           <span className="card__info__header__price">{cardItem.price}</span>
//         </div>
//         <p className="card__info__description">{cardItem.description}</p>
//         <div className="card__info__options"></div>
//         <div className="card__info__counter">
//           <Counter />
//         </div>
//       </div>
//     </div>
//   );
// };

export default Card;
