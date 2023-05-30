import { useState } from "react";

const TodoList = () => {
  const [toDo, setTodo] = useState('');
  const [toDos, setToDos] = useState([]);

  const onChange = e => setTodo(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (toDo === '') return;
    setToDos((currentarray) => [toDo, ...currentarray]);
    setTodo('');
  }

  const handleDeleteClick = index => {
    setToDos((curToDos) => curToDos.filter((_, i) => i !== index));
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          type="text"
          value={toDo}
          onChange={onChange}
          placeholder="add Todo"
        />
        <button>추가하기</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}
            <button onClick={() => handleDeleteClick(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList;