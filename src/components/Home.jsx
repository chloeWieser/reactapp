import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { key2 } from '../secrets';
import {addToBoard} from '../actions/boardActions'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

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
  const [selectedBoard, setSelectedBoard] = useState('')
  const boardList = useSelector(state => state.allBoards.boardTitles) 

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



  //console.log('curatedPhotos', curatedPhotos)

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


  const handleAddToBoard = (e, photo)=>{

    //update the state 

    

    // setSelectedBoard(e.target.value) //updates local state

    // console.log("target", e.target.value)

    // console.log('inside handle Add To board, selected board name and selected photo: ', selectedBoard)

    //onClick={()=>{return dispatch(addToBoard(selectedBoard, photo))}}

    dispatch(addToBoard(e.target.value, photo)) //dispatch action with selected board and photo
  }

  return (
    <>
      <input className="col-4 mb-5 p-1" onChange={updateQuery} />
      <button class = "searchButton" onClick={submitQuery}>Search</button>

        <div className="imageBlock row">
          {curatedPhotos.map(photo => (

              <div className="col-4 mb-5 product">
                <img class = "product img" src={photo.src.medium} />
                <div>{photo.photographer}</div>

                <select value={selectedBoard} onChange={(e)=> handleAddToBoard(e, photo)}>

                  <option value="">Select a board</option>
                  {boardList.map((board) =>{
                        
                        return <option value={board.title}>{board.title}</option>
                    })}
                  

                </select> 
               
              </div>

            ))}
      </div>

    </>
  )
}

export default Home