import './App.css';
import { React, useState} from "react";


// Implement a feature to allow item selection with the following requirements:
// 1. Clicking an item selects/unselects it.
// 2. Multiple items can be selected at a time.
// 3. Make sure to avoid unnecessary re-renders of each list item in the big list (performance).
// 4. Currently selected items should be visually highlighted.
// 5. Currently selected items' names should be shown at the top of the page.
//
// Feel free to change the component structure at will.

const List = ({ items }) => {
  const [selItems, setSelItems] = useState([]);
  
  const onClickSelect = (e) => {
  	console.log(e.target.innerText);
    const name = e.target.innerText;
  	if (selItems.includes(name)) {
    	setSelItems(selItems.filter(item => item !== name));
    }
    else {
    	setSelItems([...selItems, name]);
    }  		
  };   
  
	return (
    <>
    <div className='selItems'>
      <h1>You have selected the following items:</h1>
      <SelectedNamesComponent names={selItems}></SelectedNamesComponent>
    </div>
    <ul className="List">
        {items.map(item => (         
          <li key={item.name} className={`${selItems.includes(item.name)?'selected':''} List__item List__item--${item.color}`} onClick={onClickSelect}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
};

const SelectedNamesComponent = (props) => {
	const testNames =  props.names;
	/*console.log(testNames);*/
	return (

    <ul>
      {testNames.map(name => (
        <li key={name}>
          {name}
        </li>
      ))}
    </ul>      
	)
};


export default List;
