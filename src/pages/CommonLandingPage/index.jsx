import "./commonLandingPage.scss"
import Button from "../../components/Button"

const CommonLandingPage = () => {
  return (
    <section className="header-section">
      <div className="left-content">
        <h1>Title</h1>
        <p>summary</p>
        <h3>$3233 of @12323</h3>
        <Button text="Donate" variant="white" className="donate-btn" />
      </div>
      <div className="right-content">
        <img
          className="profile-image"
          src="https://images.unsplash.com/photo-1637092022357-9782cd0e80d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=710&q=80"
        ></img>
      </div>
    </section>
  )
}
export default CommonLandingPage
