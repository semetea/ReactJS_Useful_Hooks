import './App.css';
import { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle)
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title")
    htmlTitle.innerText = title;
  }
  useEffect(updateTitle, [title])
  return setTitle;
}

function App() {
  const titleUpdater = useTitle("Loading...")
  setTimeout(() => titleUpdater("Home"), 5000)
  return (
    <div className='App'>
    </div>
  );
}

export default App;

/* 1. useInput */ 
// const useInput = (initialValue, validator) => {
//   const [value, setValue] = useState(initialValue);
//   const onChange = event => {
//     const {
//       target: { value }
//     } = event;
//     let willUpdate = true;
//     if (typeof (validator) == 'function') {
//       willUpdate = validator(value)
//     }
//     if (willUpdate) {
//       setValue(value)
//     }
//   }
//   return { value, onChange };
// }

// function App() {
//   const maxLen = (value) => !value.includes("@")
//   const name = useInput("Mr.", maxLen)
//   return (
//     <div className="App">
//       <div>Hello</div>
//       <input placeholder='Name' {...name} />
//     </div>
//   );
// }

/* 2. useTabs */
// const content = [
//   {
//     tab: "Section 1",
//     content: "I'm the content of the Section 1"
//   },
//   {
//     tab: "Section 2",
//     content: "I'm the content of the Section 2"
//   }
// ]

// const useTabs = (initialTab, allTabs) => {
//   const [currentIndex, setCurrentIndex] = useState(initialTab)
//   if (!allTabs || !Array.isArray(allTabs)) {
//     return;
//   }
//   return {
//     currentItem: allTabs[currentIndex],
//     changeItem: setCurrentIndex
//   };
// };

// function App() {
//   const { currentItem, changeItem } = useTabs(0, content);
//   return (
//     <div className="App">
//       {content.map((section, index) => (
//         <button onClick={() => changeItem(index)}> {section.tab}</button>
//       ))
//       }
//       <div>{currentItem.content}</div>
//     </div >
//   );
// }

/* 3.useEffect */
// function App() {
//   const sayHello = () => console.log('hello')
//   const [number, setNumber] = useState(0);
//   const [aNumber, setAnumber] = useState(0);
//   useEffect(() => {
//     sayHello();
//   }, [number])
//   return (
//     <div className='App'>
//       <div>Hi</div>
//       <button onClick={() => setNumber(number + 1)}>{number}</button>
//       <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
//     </div>
//   );
// }
