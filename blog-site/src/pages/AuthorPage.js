import Header from "../components/Header";

const AuthorPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="inner-container">
          <h1 className="page-title">About the Author : Spectre_7</h1>
          <img src="./img/MyImg.png" className="hero-image" alt="" />
          <div className="blog-content">
            <p className="blog-text">
                Hey there, I am Sudhanshu Ranjan (Spectre_7). I am in the field of Web Development since two years and have a strong foundation in front-end and back-end development. My experience includes working on web development projects for a variety of projects, using technologies such as HTML/CSS, JavaScript, ReactJs, NodeJs, ExpressJs, MongoDB and am always looking for ways to improve and expand my knowledge. In my free time, I enjoy participating in hackathons and contributing to open source projects on GitHub. Currently I am learning React Native and building an app which makes easier for the juniors to get notes, resources and contact seniors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorPage;
