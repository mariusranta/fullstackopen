const Courses = ({ courses }) => {
    return (
      <>
        {courses.map(course => (
          <div key={course.id}>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
          </div>
        ))}
      </>
    );
  };

const Header = ({ course}) => {
    console.log(course)
    return <h2>{course.name}</h2>
}

const Content = ({ course }) => {
    console.log(course)
    return (
        <>
        {course.parts.map(parts => 
            <Part key={parts.id} name={parts.name} exercises={parts.exercises} />
        )}
        </>
    )
}
  
const Part = ({ name, exercises }) => {
    console.log(name, exercises)
    return (
        <p>{name} {exercises}</p>
    )
}

const Total = ({ course }) => {
    console.log("Täsä kohti toimii.")
    const sum = course.parts.reduce(
        (accumulator, part) => accumulator + part.exercises,
        0
    );
    console.log("Vielki toimii. Total of -->", sum)
    return (
    <b>Total of {sum} exercises</b>
    )
}

export default Courses