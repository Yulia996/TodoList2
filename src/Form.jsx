function Form({addTask, value, onValue}) {
  const handleClickButton = () => {
    addTask();
  }
  
  return (
    <div className="forma-box">
      <input type="text" placeholder="новая задача" value = {value} onChange = {onValue}></input>
      <button onClick = {handleClickButton}>добавить</button>
    </div>
  )
}

export default Form;