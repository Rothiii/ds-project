function Footer() {
   return (
     <div className="flex items-center justify-between mx-[0.5rem]">
       <div className="flex justify-center space-x-5  w-[50%]">
       <a href="/">
         <img src="./bghitam.png" alt="" className="h-[120px]"/>
       </a>
       </div>
       <div className="flex justify-center space-x-5  w-[50%]">
         <p className="font-bold">Follow Us</p>
         <a href=""><img src="./icon_social facebook.png" alt="fb" className="h-[20px]"/></a>
         <a href=""><img src="./icon_mail.png" alt="email" className="h-[20px]"/></a>
         <a href=""><img src="./icon_socialtwitter.png" alt="twit" className="h-[20px]"/></a>
          
       </div>
     </div>
   )
 }
  
 export default Footer