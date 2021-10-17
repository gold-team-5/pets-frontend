import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import AddPetForm from "../forms/addPetForm";
export default function Pets(props) {
  //  const [showSearchResult, setshowSearchResult] = useState();
  //   function updateShowSearch(e){

  //     setshowSearchResult(e.target.value);
  //    console.log(showSearchResult);

  //   }

  return <>


    <div>
      <form >
        <label for="type">Choose pet type:</label>

        <select onChange={props.search} name="pet" id="pet">
        <option value="all">all</option>
          <option value="cat">cat</option>
          <option value="dog">dog</option>
          <option value="hamester">hamster</option>
          <option value="rabbit">rabbit</option>
        </select>
      </form>
      {/* <input
                  class="bp3-input"
                  placeholder="Search by type..."
                  type="text"
                  name='serchByType'
                  onChange={props.updateShowSearch}
                /> */}

    </div>

    {/* {console.log(props.petData, '>>>>>>>>>>>>>>>>>>>>')}

    {(props.showSearchResult == null) ? */}


      {props?.petData?.map((item, index) => {

        return (
          <div className="petCard">


            <Card key={index} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.pet_img} />
              <Card.Body>
                <Card.Title>{item.pet_name}</Card.Title>
                <Card.Text>
                  {item.pet_age}
                </Card.Text>
                <Button variant="primary">Adoption</Button>
                <Button variant="primary" onClick={() => props.deletPet(item.id)} >delete</Button>
                <Button variant="primary" onClick={() => props.showupdatePetForm(index, item)}>update</Button>
              </Card.Body>
            </Card>
            <br />

          </div>
        )
      })
      // :
    }
    


    <div className='addpetform' style={{ margin: '10px' }}>
      <AddPetForm addPet={props.addPet} />
    </div>
  </>;
}
