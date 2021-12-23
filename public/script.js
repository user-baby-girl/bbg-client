const UnsplashImage = ({ url, key }) => /*#__PURE__*/
React.createElement("div", { className: "image-item", key: key }, /*#__PURE__*/
React.createElement("img", { src: url }));



let Collage = () => {
  const [images, setImages] = React.useState([]);
  const [loaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    fetchImages();
  }, []);
	// https://just-baby-girl.herokuapp.com/v1/baby-girls
	// http://localhost:3000/v1/baby-girls
  const fetchImages = (count = 10) => {
    axios.
    get(`https://just-baby-girl.herokuapp.com/v1/baby-girls`).
    then(res => {
      setImages([...images, ...res.data.results]);
      setIsLoaded(true);
    });
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "hero is-fullheight is-bold is-info" }, /*#__PURE__*/
    React.createElement("div", { className: "hero-body" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "header content" }, /*#__PURE__*/
    React.createElement("h2", { className: "subtitle is-6" }, "Code Challenge #16"), /*#__PURE__*/
    React.createElement("h1", { className: "title is-1" }, "Infinite Scroll Unsplash Code Challenge")), /*#__PURE__*/




    React.createElement(InfiniteScroll, {
      dataLength: images,
      next: () => fetchImages(5),
      hasMore: true,
      loader: /*#__PURE__*/
      React.createElement("img", {
        src: "https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif",
        alt: "loading" }) }, /*#__PURE__*/



    React.createElement("div", { className: "image-grid", style: { marginTop: "30px" } },
    loaded ?
    images.map((image, index) => /*#__PURE__*/
    React.createElement(UnsplashImage, {
      url: image.url,
      key: index })) :


    ""))))));






};

ReactDOM.render( /*#__PURE__*/React.createElement(Collage, null), document.getElementById("root"));