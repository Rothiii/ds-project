function Footer() {
  return (
    <div className="flex items-center justify-between mx-[0.5rem]">
      <div>
        <img src="./bghitam.png" alt="" className="h-[120px]"/>
      </div>
      <div className="flex justify-evenly w-[50%]">
        <p className="font-bold">Follow Us</p>
        <img src="./icon_social facebook.png" alt="fb" className="h-[20px]"/>
        <img src="./icon_mail.png" alt="email" className="h-[20px]"/>
        <img src="./icon_socialtwitter.png" alt="twit" className="h-[20px]"/>
        
      </div>
    </div>
  )
}

export default Footer