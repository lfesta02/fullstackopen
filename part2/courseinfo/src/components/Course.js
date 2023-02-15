const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ parts }) => 
    <strong>
        Total exercises: {parts.reduce((s, p) => s + p.exercises, 0)}
    </strong>

const Part = ({ name, exercises }) => 
  <p>
    {name} {exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map(part => 
        <Part name = {part.name} 
              exercises = {part.exercises} 
              key = {part.id}/>
    )}
  </>


const Course = ({ course }) => {
    return (
    <div>
        <Header course = {course.name}/>
        <Content parts = {course.parts}/>
        <Total parts = {course.parts}/>
    </div>
    )
}

export default Course