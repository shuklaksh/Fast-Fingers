import Welcome from "../components/welcomePage/Welcome"

function HomePage({setUser,changeUser,changeLoginState}) {
  return (
    <div className="home-page-container">
      <Welcome 
        setUser={setUser}
        changeUser={changeUser}
        changeLoginState={changeLoginState}
      />
    </div>
  )
}

export default HomePage
