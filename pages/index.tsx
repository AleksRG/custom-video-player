import Head from 'next/head'
import Video from '../components/Video'

export default function Home() {
  const videos = [
    {
      id: 1,
      video:
        'https://data-1.utreon.com/v/ZD/hl/ZW/73y2oktikB0/73y2oktikB0_original.mp4',
      title: 'Maldives',
    },
    {
      id: 2,
      video:
        'https://data-1.utreon.com/v/ZT/I0/ZD/ARRdEy0x4kY/ARRdEy0x4kY_original.mp4',
      title: 'Thailand',
    },
    {
      id: 3,
      video:
        'https://data-1.utreon.com/v/ND/U0/Mm/gwl_mVZ4TTI/gwl_mVZ4TTI_original.mp4',
      title: 'Dubai',
    },
    {
      id: 4,
      video:
        'https://data-1.utreon.com/v/Mj/A4/MG/Et0S0d8kVV8/Et0S0d8kVV8_original.mp4',
      title: 'Japan',
    },
    {
      id: 5,
      video:
        'https://data-1.utreon.com/v/OT/k0/Mz/etjf0SfpjCc/etjf0SfpjCc_original.mp4',
      title: 'Bali',
    },
    {
      id: 6,
      video:
        'https://data-1.utreon.com/v/Mm/E2/ZD/mzVyiAjYoTI/mzVyiAjYoTI_original.mp4',
      title: 'Paris',
    },
  ]
  return (
    <div>
      <Head>
        <title>StreamHub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="max-h-screen snap-y snap-mandatory overflow-scroll scrollbar-hide">
          {videos.map(({ id, video, title }) => (
            <div className="snap-start" key={id}>
              {' '}
              <Video url={video} title={title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
