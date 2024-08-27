

const Logo = ({size}:{size:number}) => {
  return (
    <div style={{marginTop:'1.5rem'}}>
        <img style={{width:`${size}px`}} src="https://res.cloudinary.com/do7nin6oo/image/upload/v1724693007/pngwing.com_syll6x.png" alt="Logo" />
        <span className="bloodText specialFont" style={{fontWeight:'600'}}>Red Request</span>
    </div>
  )
}

export default Logo