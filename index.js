export default function App() {
  return (
<div>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <title>Art.Design Blog</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* Font awesome icon */}
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
  <link rel="stylesheet" href="style.css" />
  {/* header */}
  <header>
    <nav className="navbar">
      <div className="container">
        <a href="index.html" className="navbar-brand">Art.Design</a>
        <div className="navbar-nav">
          <a href>home</a>
          <a href>design</a>
          <a href>blog</a>
          <a href>about</a>
        </div>
      </div>
    </nav>
    <div className="banner">
      <div className="container">
        <h1 className="banner-title">
          <span>Art.</span> Design Blog
        </h1>
        <p>everything that you want to know about art &amp; design</p>
        <form>
          <input type="text" className="search-input" placeholder="find your food . . ." />
          <button type="submit" className="search-btn">
            <i className="fas fa-search" />
          </button>
        </form>
      </div>
    </div>
  </header>
  {/* end of header */}
  {/* design */}
  <section className="design" id="design">
    <div className="container">
      <div className="title">
        <h2>Recent Arts &amp; Designs</h2>
        <p>recent arts &amp; designs on the blog</p>
      </div>
      <div className="design-content">
        {/* item */}
        <div className="design-item">
          <div className="design-img">
            <img src="images/art-design-1.jpg" alt />
            <span><i className="far fa-heart" /> 22</span>
            <span>Art &amp; Design</span>
          </div>
          <div className="design-title">
            <a href="#">make an awesome art portfolio for college or university</a>
          </div>
        </div>
        {/* end of item */}
        {/* item */}
        <div className="design-item">
          <div className="design-img">
            <img src="images/art-design-2.jpg" alt />
            <span><i className="far fa-heart" /> 22</span>
            <span>Art &amp; Design</span>
          </div>
          <div className="design-title">
            <a href="#">make an awesome art portfolio for college or university</a>
          </div>
        </div>
        {/* end of item */}
        {/* item */}
        <div className="design-item">
          <div className="design-img">
            <img src="images/art-design-3.jpg" alt />
            <span><i className="far fa-heart" /> 22</span>
            <span>Art &amp; Design</span>
          </div>
          <div className="design-title">
            <a href="#">make an awesome art portfolio for college or university</a>
          </div>
        </div>
        {/* end of item */}
        {/* item */}
        <div className="design-item">
          <div className="design-img">
            <img src="images/art-design-4.jpg" alt />
            <span><i className="far fa-heart" /> 22</span>
            <span>Art &amp; Design</span>
          </div>
          <div className="design-title">
            <a href="#">make an awesome art portfolio for college or university</a>
          </div>
        </div>
        {/* end of item */}
        {/* item */}
        <div className="design-item">
          <div className="design-img">
            <img src="images/art-design-5.jpg" alt />
            <span><i className="far fa-heart" /> 22</span>
            <span>Art &amp; Design</span>
          </div>
          <div className="design-title">
            <a href="#">make an awesome art portfolio for college or university</a>
          </div>
        </div>
        {/* end of item */}
        {/* item */}
        <div className="design-item">
          <div className="design-img">
            <img src="images/art-design-6.jpg" alt />
            <span><i className="far fa-heart" /> 22</span>
            <span>Art &amp; Design</span>
          </div>
          <div className="design-title">
            <a href="#">make an awesome art portfolio for college or university</a>
          </div>
        </div>
        {/* end of item */}
      </div>
    </div>
  </section>
  {/* end of design */}
  {/* blog */}
  <section className="blog" id="blog">
    <div className="container">
      <div className="title">
        <h2>Latest Blog</h2>
        <p>recent blogs about art &amp; design</p>
      </div>
      <div className="blog-content">
        {/* item */}
        <div className="blog-item">
          <div className="blog-img">
            <img src="images/blog-p-1.jpg" alt />
            <span><i className="far fa-heart" /></span>
          </div>
          <div className="blog-text">
            <span>20 January, 2020</span>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium nihil! Quaerat.</p>
            <a href="#">Read More</a>
          </div>
        </div>
        {/* end of item */}
        {/* item */}
        <div className="blog-item">
          <div className="blog-img">
            <img src="images/blog-p-2.jpg" alt />
            <span><i className="far fa-heart" /></span>
          </div>
          <div className="blog-text">
            <span>20 January, 2020</span>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium nihil! Quaerat.</p>
            <a href="#">Read More</a>
          </div>
        </div>
        {/* end of item */}
        {/* item */}
        <div className="blog-item">
          <div className="blog-img">
            <img src="images/blog-p-3.jpg" alt />
            <span><i className="far fa-heart" /></span>
          </div>
          <div className="blog-text">
            <span>20 January, 2020</span>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium nihil! Quaerat.</p>
            <a href="#">Read More</a>
          </div>
        </div>
        {/* end of item */}
        {/* item */}
        <div className="blog-item">
          <div className="blog-img">
            <img src="images/blog-p-4.jpg" alt />
            <span><i className="far fa-heart" /></span>
          </div>
          <div className="blog-text">
            <span>20 January, 2020</span>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium nihil! Quaerat.</p>
            <a href="#">Read More</a>
          </div>
        </div>
        {/* end of item */}
        {/* item */}
        <div className="blog-item">
          <div className="blog-img">
            <img src="images/blog-p-5.jpg" alt />
            <span><i className="far fa-heart" /></span>
          </div>
          <div className="blog-text">
            <span>20 January, 2020</span>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium nihil! Quaerat.</p>
            <a href="#">Read More</a>
          </div>
        </div>
        {/* end of item */}
        {/* item */}
        <div className="blog-item">
          <div className="blog-img">
            <img src="images/blog-p-6.jpg" alt />
            <span><i className="far fa-heart" /></span>
          </div>
          <div className="blog-text">
            <span>20 January, 2020</span>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium nihil! Quaerat.</p>
            <a href="#">Read More</a>
          </div>
        </div>
        {/* end of item */}
      </div>
    </div>
  </section>
  {/* end of blog */}
  {/* about */}
  <section className="about" id="about">
    <div className="container">
      <div className="about-content">
        <div>
          <img src="images/about-bg.jpg" alt />
        </div>
        <div className="about-text">
          <div className="title">
            <h2>Catherine Doe</h2>
            <p>art &amp; design is my passion</p>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id totam voluptatem saepe eius ipsum nam provident sapiente, natus et vel eligendi laboriosam odit eos temporibus impedit veritatis ut, illo deserunt illum voluptate quis beatae quod. Necessitatibus provident dicta consectetur labore!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti natus, eos quia recusandae voluptatem veniam modi officiis minima provident rem sint porro fuga quos tempora ea suscipit vero velit sed laudantium eaque necessitatibus maxime!</p>
        </div>
      </div>
    </div>
  </section>
  {/* end of about */}
  {/* footer */}
  <footer>
    <div className="social-links">
      <a href="#"><i className="fab fa-facebook-f" /></a>
      <a href="#"><i className="fab fa-twitter" /></a>
      <a href="#"><i className="fab fa-instagram" /></a>
      <a href="#"><i className="fab fa-pinterest" /></a>
    </div>
    <span>Art.Design Blog Page</span>
  </footer>
  {/* end of footer */}
</div> );
}
