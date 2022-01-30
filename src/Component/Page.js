import React, { useState, useEffect } from "react";
import "./Page.css";

const Page = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.pokemontcg.io/v2/cards?page=1&pageSize=10")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
          console.log("main::::::",result);
      console.log("state::::::",items);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        {items.map((item,id) => (
          <div className="card" key={item.id}>
            <div className="card-img">{item.images}</div>
            <div className="card-name-hp">
              <div className="card-name">{item.name}</div>
              <div className="card-name">HP:{item.hp}</div>
            </div>
            <div className="card-name">Attacks</div>
            <div className="card-name">{item.attacks}</div>
            <div className="card-name">Abilities</div>
            <div className="card-name">{item.hp}</div>
          </div>
        ))}
      </>
    );
  }
};

export default Page;

// import React, { useState, useEffect } from "react";
// import "./Page.css";

// const Page = () => {
//   const [post, setPost] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const response = await fetch("https://api.pokemontcg.io/v2/cards");
//       const responseData = await response.json();
//       setPost(responseData);
//       console.log("main::::::",responseData);
//       console.log("state::::::",post);
//     };
//     fetchPosts();
//   }, []);

//   return (
//     <>
//       <div>React js Pokemon</div>

//         {post.map((data) => {
//           return (
//             <div className="card">
//               <div className="card-img">{data.images}</div>
//               <div className="card-name-hp">
//                 <div className="card-name">{data.name}</div>
//                 <div className="card-name">HP:{data.hp}</div>
//               </div>
//               <div className="card-name">Attacks</div>
//               <div className="card-name">{data.attacks}</div>
//               <div className="card-name">Abilities</div>
//               <div className="card-name">{data.hp}</div>
//             </div>
//           );
//         })}
//     </>
//   );
// };

// export default Page;
