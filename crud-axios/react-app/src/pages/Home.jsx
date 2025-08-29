import Counter from "../components/Counter"
import Welcome from "../components/Welcome"

const Home = () => {
    
    let people = [
        {id: 1, name: "John", job: "Programmer", color: "red"},
        {id: 2, name: "Jane", job: "Designer", color: "green"},
        {id: 3, name: "Sarah", job: "Manager", color: "blue"},
        {id: 4, name: "Fulan", job: "CEO", color: "cyan"}
      ]    
    return (
        <>
          <div className="container">
            { people.map(person => (
              <Welcome key={ person.id } name={ person.name } job={person.job } color={ person.color }/>
            ))}
          </div>
          <div>
              <Counter />
              <Counter start={100} />
              <Counter start={-30} />
            </div>
        </>
      )
}

export default Home