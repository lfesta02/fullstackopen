const PersonForm = ({ onSubmitFn, nameVal, onNameChangeFn, numVal, onNumChangeFn}) => {
    return (
        <form onSubmit={onSubmitFn}>
        <div>
          name: <input value={nameVal} onChange={onNameChangeFn}/>
        </div>
        <div>
          number: <input value={numVal} onChange={onNumChangeFn}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm