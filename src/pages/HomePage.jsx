import Welcome from "../components/welcomePage/Welcome"

function HomePage({changeLoginState}) {
  return (
    <div className="home-page-container">
      <Welcome 
        changeLoginState={changeLoginState}
      />
    </div>
  )
}

export default HomePage
