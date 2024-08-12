

const Logo = ({size}:{size:number}) => {
  return (
    <div style={{marginTop:'1.5rem'}}>
        <img style={{width:`${size}px`}} src="https://i.ibb.co/9rFZWRN/pngwing-com.png" alt="Logo" />
        <span className="bloodText specialFont" style={{fontWeight:'600'}}>Red Request</span>
    </div>
  )
}

export default Logo