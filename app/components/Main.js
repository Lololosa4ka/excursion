import React from 'react'
import Link from 'next/link'
import Img from 'next/image'
const Main = () => {
  return (
    <div>
        <div className='center'><Link href="/"><div className='link'>Download Excursion (Coming soon)</div></Link></div>

            <div className="center">
                <video autoPlay={true} muted="" loop="" >
                <source src="https://content.codecademy.com/programs/freelance-one/excursion/videos/excursion.mp4" type="video/mp4" />
                </video>
            </div>
        <div className="center"><h2>Your personal travel guide</h2>
        <h4>Excursion remembers places you like, and recommends new points of interest around you.</h4>
        </div>
        <div className="center"><img src="https://content.codecademy.com/programs/freelance-one/excursion/images/camp.jpg"></img></div>
        <div className="center"><img src="https://content.codecademy.com/programs/freelance-one/excursion/images/phone.png"></img></div>
        <div className="center">
            <h2>Coming Soon for iPhone and Android</h2>
        </div>
        <div className="center">
            <Link href="https://4c5e24dcab6045e0981fe0978bc08696.cc-propeller.cloud/?allowEmbedForCodecademy=false&allowCopyAndPasteForCodecademy=true&allowFileUploadForCodecademy=true&allowFileDownloadForCodecademy=true&allowExternalLinkForCodecademy=true&allowAICodeExplainForCodecademy=true&allowAIChatAssistantForCodecademy=true&allowAIErrorExplainForCodecademy=true#"><div className='link'>Download Excursion (Coming soon)</div></Link>
        </div>
        <div className="footer">
            <h4 className='align-right'>© Excursion</h4>
        </div>
    </div>
  )
}

export default Main