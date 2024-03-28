import { useState } from "react";
import "./App.css";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import AddItem from "./AddItem";
import Search from "./Search";
import { useEffect } from "react";
function App() {
  const [NewItem, SetNewItem] = useState("");
  const [items, setitems] = useState(
    //Avoiding default array loading when the page loads,so Get the items from localstorage
    []
  );
  const [search, Setsearch] = useState("");
;



  useEffect(() => {
    const fetchItems = async () => {
      try {
        
      
       
      } catch (err) {
      
      }
     
    };

    fetchItems();
  }, []);



  // for check and uncheck I created new array from existing
  function handlecheck(id) {
    const items2 = items.map((para) =>
      para.id === id ? { ...para, checked: !para.checked } : para
    );
    setitems(items2);
    localStorage.setItem("todo_list", JSON.stringify(items2));
  }

  // for Delete list I created new array from existing
  function Delete(id) {
    const items3 = items.filter((para) => para.id !== id);
    setitems(items3);
    localStorage.setItem("todo_list", JSON.stringify(items3));
  }

  const additem = (value) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addnewitem = { id, checked: false, value };
    const listitems = [...items, addnewitem];
    setitems(listitems);
  };

  function AddClick(e) {
    e.preventDefault();
    //To stop calling the function if you not add anything click enter in textbox
    if (!NewItem) return;
    // text came here  so need to added into the list
    additem(NewItem);
    SetNewItem("");
  }

  return (
    <div className="App">
      <Header tittle="Hello" />
      <AddItem AddClick={AddClick} NewItem={NewItem} SetNewItem={SetNewItem} />
      <Search search={search} Setsearch={Setsearch} />
      <main>
       

     
    
      <Content 
       handlecheck={handlecheck}
        Delete={Delete}
        search={search}
        equal={items.value}
         items={items.filter(item=>(
          item.value).toLowerCase().includes(search.toLowerCase()))} />
     
      </main>
 
      <Footer length={items.length} />
    </div>
  );
}

export default App;
