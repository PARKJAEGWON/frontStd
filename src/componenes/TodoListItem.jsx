function TodoListItem({ todo, onDelte,onToggle}) {
    return( 
    <div>
        <input 
          type="checkbox"
          checked={todo.checked}
          onChange={() => onToggle(todo.id)}
        />
        <span>
            {todo.id}.{todo.text}
        </span>
        <button onClick={() => onDelte(todo.id)}>삭제</button>
    </div>
    );
}

export default TodoListItem;