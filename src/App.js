import React, { useState, useEffect } from "react"
import "./App.css"


function App() {
  const [value, setValue] = useState("")
  const [list, setList] = useState([])

  useEffect(() => {    //LISTA INICIAL
    setList([  ])
  }, [])


  function handleToggleDone(index) {             // MUDAR DE FEITO/NAO
    let newList = [...list]
    newList[index].done = !newList[index].done
    setList(newList)
  }

  function addAction(newItem) {   // ADICIONAR O QUE FOI ESCRITO, NA LISIA
    let newList = [...list, { title: newItem, done: false }]
    setList(newList)
  }

  let did = []

  function done(item) {
    if(item.done) {
      did.push(item)
    }
  }


  

  return (
    <div className="container">
      <h1>To-Do {list.forEach(done)} </h1>
      {
        did.length > 0 &&
        <h1>Parabéns! Você já realizou {did.length} tarefa{did.length != 1 ? "s" : ""}</h1>
      }
      <form action=""
        onSubmit={
          e => {
            e.preventDefault()
            addAction(value)
            setValue("")
          }}>
        <input type="text"
          value={value}
          onChange={e => setValue(e.target.value)} />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {list.map((item, index) => {   // SE USO CHAVES, PRECISO USAR RETURN
          return (
            <div className="task" key={index}>
              <p>
              {item.done &&
                <del>{item.title}</del>
              }
              {!item.done &&
                item.title
              }</p>
              {item.done && 
              <button style={{backgroundColor: "#DC143C"}} onClick={() => handleToggleDone(index)}>Desfazer</button>
              }
              {!item.done && 
              <button style={{backgroundColor: "#1DB954"}} onClick={() => handleToggleDone(index)}>Marcar como feito</button>
              }
              
              </div> // Sempre que usar map, definir o key

          )
        })}
      </ul>
      </div>
  );
}

export default App;
