import React, { useState } from 'react';
import Homes from '../components/Homes/Homes';
import Upcoming from '../components/upcoming/Upcoming';
import { latest,recommended,upcome } from '../Data';
import Trending from '../components/trending/Trending';

const Homepage = () => {
  const [items, setItems] = useState(upcome);
  const [item,setItem]=useState(latest);
  const [rec,setRec]=useState(recommended)

  return (
    <>
      {/* <div className="containers"> */}
        <Homes />
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br />
        <br />
        <Upcoming items={items} title="Upcoming Movies" />
        <Upcoming items={item} title="Latest Movies"></Upcoming>    
        {/* <br /><br />  */}
        <Trending></Trending>
        <Upcoming items={rec} title="Recommended Movies"></Upcoming>    

    </>
  );
};
export default Homepage;
