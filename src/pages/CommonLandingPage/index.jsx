import "./commonLandingPage.scss"
import Button from "../../components/Button"

const CommonLandingPage = () => {
  return (
    <>
      <section className="header-section">
        <div className="left-content">
          <h1 className="title">Title</h1>
          <p className="summary">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            fugiat optio consequuntur cupiditate porro. Ea iusto quam est sequi
            incidunt alias expedita libero adipisci nemo, ipsum temporibus
            perferendis molestias in! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Saepe soluta quasi rem possimus itaque, illo quae
            dicta dolorem eius dolore voluptatum nulla voluptatibus libero,
            porro atque in dolores at officia.{" "}
          </p>
          <div class="ui progress success">
            <div class="bar"></div>
            <label>$3233 of @12323</label>
          </div>
          <Button text="Donate" variant="white" className="donate-btn" />
        </div>
        <div className="right-content">
          <img
            className="profile-image"
            src="https://images.unsplash.com/photo-1637154044953-aece5b8b46f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          ></img>
        </div>
      </section>
      <div className="mid-content">
        <h1>Details</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
          quod rem. Optio, quia voluptatibus odit molestiae fuga impedit rem, ad
          explicabo non, hic sapiente. Recusandae distinctio alias praesentium
          beatae quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Possimus, quod rem. Optio, quia voluptatibus odit molestiae fuga
          impedit rem, ad explicabo non, hic sapiente. Recusandae distinctio
          alias praesentium beatae quae?{" "}
        </p>
        <h1>Challenges</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
          quod rem. Optio, quia voluptatibus odit molestiae fuga impedit rem, ad
          explicabo non, hic sapiente. Recusandae distinctio alias praesentium
          beatae quae?{" "}
        </p>
        <h1>Difficulties</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
          quod rem. Optio, quia voluptatibus odit molestiae fuga impedit rem, ad
          explicabo non, hic sapiente. Recusandae distinctio alias praesentium
          beatae quae?{" "}
        </p>
        <h1>Volunteers</h1>
        <div className="volunteers">
          <img src="https://images.unsplash.com/photo-1633113215792-b50572729907?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          <img src="https://images.unsplash.com/photo-1633113215792-b50572729907?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          <img src="https://images.unsplash.com/photo-1633113215792-b50572729907?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          <img src="https://images.unsplash.com/photo-1637083197291-87217e0367d7?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        </div>
        <h1>Results</h1>
        <p>
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ex, quae
          illum eaque fuga voluptatibus sed nam doloribus quos reprehenderit
          ipsum repellat. Exercitationem id, nulla voluptatibus ipsum nam ad
          perspiciatis? Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Labore sunt molestias vero ipsa cupiditate eius, nostrum, eos
          illum laborum dicta ducimus ad, repudiandae officiis commodi repellat
          earum totam ullam omnis.{" "}
        </p>

        <div className="photos">
          <img src="https://images.unsplash.com/photo-1633113089635-115b38c66c49?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          <img src="https://images.unsplash.com/photo-1633113089635-115b38c66c49?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          <img src="https://images.unsplash.com/photo-1633113089635-115b38c66c49?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          <img src="https://images.unsplash.com/photo-1633113089635-115b38c66c49?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        </div>
      </div>
    </>
  )
}
export default CommonLandingPage
