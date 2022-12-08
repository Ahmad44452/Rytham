const styleObj = {
  div: {
    minHeight: '100vh',
    backgroundColor: "#121212",
    color: "#E9003F",
    fontSize: '10rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase'
  }
}

const NotFound = () => {
  return (
    <div style={styleObj.div}>
      <h1>404 not found</h1>
    </div>
  )
}

export default NotFound;