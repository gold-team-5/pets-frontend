import React, { useState, useContext, useEffect } from 'react'
import { SettingsContext } from '../../context';
import { Card, Button } from 'react-bootstrap';
import "./list.css"
import Auth from '../context/auth';

export default function List(props) {

  const settingsContext = useContext(SettingsContext);
  console.log(settingsContext)
  const [currentItems, setCurrentItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(Math.ceil(props.list.length / settingsContext.perPage));

  useEffect(() => {
    let start = (currentPage - 1) * settingsContext.perPage;
    let end = start + settingsContext.perPage;
    setNumOfPages(Math.ceil(props.list.length / settingsContext.perPage));
    setCurrentItems(props.list.slice(start, end));
  }, [props.list.length]);

  useEffect(() => {
    if (settingsContext.showCompleted) {
      let start = (currentPage - 1) * settingsContext.perPage;
      let end = start + settingsContext.perPage;
      setCurrentItems(props.list.slice(start, end));
      setNumOfPages(Math.ceil(props.list.length / settingsContext.perPage));
    } else {
      let temp = props.list.filter((item) => {
        return item.complete === false
      })
      let start = (currentPage - 1) * settingsContext.perPage;
      let end = start + settingsContext.perPage;
      setCurrentItems(temp.slice(start, end));
      setNumOfPages(Math.ceil(temp.length / settingsContext.perPage))
    }
  }, [currentPage, settingsContext.showCompleted]);

  function changeCurrentPage(num) {
    setCurrentPage(num);
  }

  function completed() {
    settingsContext.setshowCompleted(!settingsContext.showCompleted);
  }

  const navigate = () => {
    let page = [];
    for (let i = 1; i <= numOfPages; i++) {
      page.push(<button onClick={() => { changeCurrentPage(i) }} key={i}>{i}</button>)
    }
    return page;
  }

  return (
    <div className="MyList">

      {
        settingsContext.showCompleted &&

        <Button onClick={completed} > Hide Out Of Stock Phones </Button>
      }

      {
        !settingsContext.showCompleted &&
        <Button onClick={completed} > View Out Of Stock Phones </Button>
      }


      {currentItems.map(item => (

        ///////////////////////////////////////////////
        <Card className="phonesCard" key={item.id}>
          <Card.Img variant="top" src={`${item.difficulty}`} />
          <Card.Body>
            <Card.Title>
              {item.text}
              <Auth capability="delete">
                <Button className="closeButton" variant="secondary" onClick={() => props.deleteFunction(item.id)}> X </Button>
              </Auth>
            </Card.Title>
            <Card.Text>
              Assigned to: {item.assignee}
            </Card.Text>
            <Card.Text>
              {
                !item.complete &&
                <h2> {`State : Available`} </h2>
              }
              {
                item.complete &&
                <h2> {`State : Out Of Stock `} </h2>
              }
            </Card.Text>
            <Auth capability="update">
              {
                !item.complete &&
                <Button onClick={() => props.toggleComplete(item.id)}> Set it as Out Of Stock </Button>
              }
              {
                item.complete &&
                <Button onClick={() => props.toggleComplete(item.id)}> Set it as Available In Stock </Button>
              }

            </Auth>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"> Less than an hour </small>
          </Card.Footer>
        </Card>
        ///////////////////////////////////





      ))}
      {currentPage > 1 && <Button className="Previous" onClick={() => { setCurrentPage(currentPage - 1) }}>Previous</Button>}
      {navigate()}
      {currentPage < numOfPages && <Button className="Next" onClick={() => { setCurrentPage(currentPage + 1) }} >Next</Button>}
    </div>
  )
}