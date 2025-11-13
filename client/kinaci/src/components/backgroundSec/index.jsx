function BackGroundSec({ bgImage, bgColor, children }) {
    const style = {
    backgroundImage: bgImage ? `url(${bgImage})` : "none",
    backgroundColor: bgColor || "transparent",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "360px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  };
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default BackGroundSec
