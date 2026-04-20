import { useState } from 'react'
import FadeIn from './FadeIn'
import styles from './Interests.module.css'

const interests = [
  {
    index: '01',
    category: 'Motorsport & Engineering',
    headline: 'The art of going fast.',
    body: 'Mechanical engineering first, motorsport second, Formula 1 third. The Scuderia Ferrari fascinates me most, not just the racing but the mythology. Legends. Heartbreaks. Road cars engineered like weapons. There is poetry in a well-built engine.',
    aside: 'Forza Ferrari.',
    size: 'large',
  },
  {
    index: '02',
    category: 'Football',
    headline: 'Top 10%.',
    body: 'Manchester City. Not a bandwagon, a conviction. And yes, we are aware of the neighbours. The football matters. The results matter more.',
    aside: 'COYB',
    size: 'small',
  },
  {
    index: '03',
    category: 'Reading',
    headline: 'Books that rewired me.',
    body: 'The Stellenbosch Mafia. ANC Billionaires. The Alchemist. Who Moved My Cheese. Twelve Rules for Life. Reading taught me that the world is explained in books, our African roots, the economy, the systems built around us. I read to understand what nobody tells you.',
    aside: '"it is written - maktub"',
    size: 'medium',
  },
  {
    index: '04',
    category: 'Fashion',
    headline: 'Dressed with intention.',
    body: 'Fashion is a language. I use it to say things words cannot. Each fit is deliberate, a fragment of personality made visible. Style is not vanity. It is fluency.',
    aside: 'personal uniform',
    size: 'small',
  },
]

const playlists = [
  {
    id: 'yt-1',
    platform: 'YouTube Music',
    platformShort: 'YT Music',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" fill="currentColor"/>
      </svg>
    ),
    name: 'Indlu iyawa Vol. 4',
    description: 'House music done right',
    href: 'https://music.youtube.com/playlist?list=PLrBqC_NYhRGXTQNutFyXXxm0AWQ4NAZPB&si=gNzRo4SwqK6ycrmr', 
    color: '#FF0000',
  },
  {
    id: 'yt-2',
    platform: 'YouTube Music',
    platformShort: 'YT Music',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" fill="currentColor"/>
      </svg>
    ),
    name: 'ELEMENTS',
    description: 'when you have an instrumentalist who happens to be a jazz fan create a playlist..',
    href: 'https://music.youtube.com/playlist?list=PLrBqC_NYhRGUEJzbQdAoEiKgDd5XzF38Y&si=YOxu6W1HnMXSTf7I', 
    color: '#FF0000',
  },
  {
    id: 'sp-1',
    platform: 'Spotify',
    platformShort: 'Spotify',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 01-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.622.622 0 11-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.623.623 0 01.207.857zm1.223-2.722a.78.78 0 01-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 01-.973-.519.781.781 0 01.52-.973c3.633-1.102 8.147-.568 11.233 1.329a.78.78 0 01.257 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.937.937 0 11-.543-1.794c3.532-1.072 9.404-.865 13.115 1.338a.936.936 0 11-.954 1.614z" fill="currentColor"/>
      </svg>
    ),
    name: 'Local Taste',
    description: 'Mzansi core.',
    href: 'https://open.spotify.com/playlist/09Tfvv63cBy5h7K1otrX0A?si=bJvBq8lgTd60ovd4qTVXTg', 
    color: '#1DB954',
  },
  {
    id: 'sp-2',
    platform: 'Spotify',
    platformShort: 'Spotify',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 01-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.622.622 0 11-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.623.623 0 01.207.857zm1.223-2.722a.78.78 0 01-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 01-.973-.519.781.781 0 01.52-.973c3.633-1.102 8.147-.568 11.233 1.329a.78.78 0 01.257 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.937.937 0 11-.543-1.794c3.532-1.072 9.404-.865 13.115 1.338a.936.936 0 11-.954 1.614z" fill="currentColor"/>
      </svg>
    ),
    name: 'Elements',
    description: 'when you have an instrumentalist who happens to be a jazz fan create a playlist.',
    href: 'https://open.spotify.com/playlist/62jr0Gp37pV6OqHgQgiwmP?si=NkZWQ7khSqqSFBhQaOw8Zw', 
    color: '#1DB954',
  },
]
 
export default function Interests() {
  const [active, setActive] = useState(null)

  return (
    <section id="interests" className={styles.section}>
      <div className="container">

        <FadeIn>
          <div className={styles.header}>
            <div>
              <div className="section-label">Beyond code</div>
              <h2 className={styles.sectionTitle}>A man of<br /><em>interests.</em></h2>
            </div>
            <p className={styles.headerNote}>
              There is more to a person than their commit history.
            </p>
          </div>
        </FadeIn>

        <div className={styles.grid}>
          {interests.map((item, i) => (
            <FadeIn
              key={item.index}
              delay={i * 0.08}
              className={`${styles.card} ${styles[item.size]} ${active === item.index ? styles.cardActive : ''}`}
            >
              <div
                className={styles.cardInner}
                onMouseEnter={() => setActive(item.index)}
                onMouseLeave={() => setActive(null)}
              >
                <div className={styles.cardTop}>
                  <span className={styles.indexNum}>{item.index}</span>
                  <span className={styles.category}>{item.category}</span>
                </div>

                <h3 className={styles.headline}>{item.headline}</h3>
                <p className={styles.body}>{item.body}</p>

                <div className={styles.cardBottom}>
                  <span className={styles.aside}>{item.aside}</span>
                  <span className={styles.rule} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={0.1}>
          <div className={styles.playlistSection}>
            <div className={styles.playlistHeader}>
              <div className={styles.playlistLabel}>
                <span className={styles.playlistLabelLine} />
                What's in the ears
              </div>
              <p className={styles.playlistNote}>
                Music is the other constant. Here's what the queue looks like.
              </p>
            </div>
 
            <div className={styles.playlistGrid}>
              {playlists.map((pl) => (
                <a
                  key={pl.id}
                  href={pl.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.playlistCard}
                  style={{ '--platform-color': pl.color }}
                >
                  <div className={styles.playlistCardTop}>
                    <span className={styles.platformBadge} style={{ color: pl.color }}>
                      {pl.icon}
                      {pl.platformShort}
                    </span>
                    <span className={styles.externalArrow}>↗</span>
                  </div>
 
                  <div className={styles.playlistName}>{pl.name}</div>
                  <p className={styles.playlistDesc}>{pl.description}</p>
 
                  <div className={styles.playlistGlow} />
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
