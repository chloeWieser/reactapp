import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { key2 } from '../secrets';
import {addToBoard} from '../actions/boardActions'
// import { createClient } from 'pexels';

const Home = () => {   //GETS CALLED EVERYTIME TIME A PROP CHANGES OR THE STATE CHANGES

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



  const [curatedPhotos, setCuratedPhotos] = useState([]);
  const [query, setQuery] = useState('');


  const dispatch = useDispatch();

  useEffect(() => {

    const fetchData = async () => {   //notice this 'function inside the callback function bc you can't make the callbak function (useEffect) asynchronous
      let url =  `https://api.pexels.com/v1/curated?per_page=50`;

      let results = await fetch(url, {
        headers: {
          Authorization: `${key2}`
        }
      });  //this is two parameters, the url and the header object with api key in it

      let data = await results.json();
      console.log('initialUseEffect', data);
      // setData(data.Search);   //sets our state- replaces the empty array with our data
      setCuratedPhotos(data.photos);
    }

    fetchData();

  }, [])




  // useEffect(() => {

  //   const fetchData = async () => {   //notice this 'function inside the callback function bc you can't make the callbak function (useEffect) asynchronous
        // let url =  `https://api.pexels.com/v1/search?query=nature&per_page=10`;

        // let results = await fetch(url, {
        //   headers: {
        //     Authorization: `${key2}`
        //   }
        // });  //this is two parameters, the url and the header object with api key in it

        // let data = await results.json();
        // console.log(data);
        // // setData(data.Search);   //sets our state- replaces the empty array with our data
        // setCuratedPhotos(data.photos);

  //   }

  //   fetchData();

  // }, [])



  console.log('curatedPhotos', curatedPhotos)

  const updateQuery = e => {
    console.log('updateQuery', e.target.value);
    setQuery(e.target.value);
  }

  const submitQuery = async () => {
    let url =  `https://api.pexels.com/v1/search?query=${query}&per_page=10`;

      let results = await fetch(url, {
        headers: {
          Authorization: `${key2}`
        }
      });  //this is two parameters, the url and the header object with api key in it

      let data = await results.json();
      console.log('submitQuery', data);
      // setData(data.Search);   //sets our state- replaces the empty array with our data
      setCuratedPhotos(data.photos);
  }

  return (
    <>
      <input onChange={updateQuery} />
      <button onClick={submitQuery}>Search</button>
        {curatedPhotos.map(photo => (
        <div>
          <img src={photo.src.medium} />
          <button className="btn btn-warning" onClick={()=>{return dispatch(addToBoard(photo))}}>Add To Board</button>
        </div>
          ))}
    </>
  )
}

export default Home