import { useState, useRef } from 'react'
import {
  HeartIcon,
  VolumeUpIcon,
  VolumeOffIcon,
  PlayIcon,
  PauseIcon,
} from '@heroicons/react/solid'

function Video({ url, title }) {
  const [mute, setMute] = useState(false)
  const [like, setLike] = useState(false)
  const [play, setPlay] = useState(false)
  const videoRef = useRef(null)

  function videoMute() {
    videoRef.current.muted = mute
    mute ? setMute(false) : setMute(true)
  }

  function videoPlay() {
    play ? videoRef.current.play() : videoRef.current.pause()

    setPlay(!play)
  }

  function videoLike() {
    !like ? setLike(true) : setLike(false)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden object-contain">
      <video
        ref={videoRef}
        className="absolute h-screen w-full object-cover"
        src={url}
        muted
        loop
        autoPlay={url}
      ></video>
      <div className="absolute top-2 left-4 w-1/2 cursor-default overflow-hidden">
        <h1 className="text-4xl font-bold uppercase md:text-7xl">{title}</h1>
        <a className="pl-1 text-sm capitalize underline decoration-amber-400 decoration-4 underline-offset-1">
          Travel Nfx
        </a>
        <a className="pl-2 text-sm underline decoration-sky-500 decoration-4 underline-offset-1">
          Full HD
        </a>
      </div>
      <div className="absolute bottom-14 right-4 flex flex-col space-y-2">
        <button onClick={videoMute} className="button">
          {mute ? <VolumeUpIcon /> : <VolumeOffIcon />}
        </button>
        <button className="button" onClick={videoLike}>
          {!like ? <HeartIcon /> : <HeartIcon className="text-red-600" />}
        </button>
        <button className="button" onClick={videoPlay}>
          {play ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
    </div>
  )
}

export default Video
