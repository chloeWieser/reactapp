import React, {useState, useEffect} from 'react'
import { key2 } from '../secrets';
// import { createClient } from 'pexels';

const Home = () => {

  // const [data, setData] = useState([])

  // useEffect(() => {
    
    // const fetchData = async () => {   //notice this 'function inside the callback function bc you can't make the callbak function (useEffect) asynchronous

//         fetch("https://api.pexels.com/v1/search?query=people",{
//   headers: {
//     Authorization: '${key2}'
//   }
// })
//    .then(resp => {
//      return resp.json()
//    })
//    .then(data => {
//      console.log(data)
//    })




  useEffect(() => {

    const fetchData = async () => {   //notice this 'function inside the callback function bc you can't make the callbak function (useEffect) asynchronous
      let url =  `https://api.pexels.com/v1/curated?per_page=10`;

      let results = await fetch(url, {
        headers: {
          Authorization: `${key2}`
        }
      });  //this is two parameters, the url and the header object with api key in it

      let data = await results.json();
      console.log(data);
      // setData(data.Search);   //sets our state- replaces the empty array with our data

    }

    fetchData();

  }, [])




// const client = createClient('${key2}');

// client.collections.featured({ per_page: 10 }).then(collections => {
//   console.log(collections)
// });

  return (
    <>
        
    </>
  )
}

export default Home