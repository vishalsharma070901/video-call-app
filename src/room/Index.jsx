import React from 'react'
import{useParams} from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const Roompage = () => {
    const {roomId} = useParams();

    const myMeeting=async(element)=>{
        const appId= 1799640618;
        const serverSecret="31247eb158aeecbeaf403fb7c9483aa7";
        const kitToken= ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId,
            serverSecret,
            roomId,
            Date.now().toString(),
            "Vishal"
        );
       const  zp= ZegoUIKitPrebuilt.create(kitToken);
       zp.joinRoom({
        container:element,
        scenario:{
            mode:ZegoUIKitPrebuilt.VideoConference,
        }
       })
    } 



  return (
    <div className='room-page'>
      <div ref={myMeeting}/>
    </div>
  )
}

export default Roompage
