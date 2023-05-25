import Welcome from "../components/welcomePage/Welcome"

function HomePage({onSubmit}) {
  return (
    <div className="home-page-container">
      <Welcome 
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default HomePage
