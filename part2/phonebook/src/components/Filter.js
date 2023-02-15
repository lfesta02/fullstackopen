const Filter = ({ val, onChangeFn }) => {
    return (
        <div>Filter names with: <input value={val} onChange={onChangeFn}/></div>
    )
}

export default Filter