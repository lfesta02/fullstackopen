const Person = ({ person, delFn }) => {
    return (
        <div>
            {person.name} {person.number} &nbsp;
            <button onClick={delFn}>delete</button>
        </div>
    )
}

export default Person