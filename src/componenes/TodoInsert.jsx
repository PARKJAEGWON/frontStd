import { useState } from "react";

function TodoInsert({ onInsert }) {
   
    
    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        onInsert(text);
        setText("");
        e.preventDefault();
    };
    
    const [text, setText] = useState("");

    return (
    <form onSubmit={onSubmit}>
    <input 
     type="text"
     value={text}
     placeholder="할일을 입력하세요."
     onChange={onChange}
    />
    <button type="submit">입력</button>
    </form>);
}

export default TodoInsert;