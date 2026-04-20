import { Link } from 'react-router-dom'
import styles from './Article.module.css'
import profileImg from '@/assets/event.jpg'
import seatedImg from '@/assets/seated.jpg'

export default function Article() {
  return (
    <main className={styles.page}>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroImg}>
          <img src={profileImg} alt="Taropafadzwa Mandisi Chitumwa" />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.kicker}> · April 2026</div>
          <h1 className={styles.title}>The 25 Year Old Rookie.</h1>
          <p className={styles.deck}>
            My story. Told through a sit down with Claude.
          </p>
          <div className={styles.byline}>
            <span>Taropafadzwa Mandisi Chitumwa</span>
            <span className={styles.bylineDot}>·</span>
            <span>Johannesburg, South Africa</span>
          </div>
        </div>
      </div>

      <article className={styles.article}>

        <div className={styles.subheading}>
          How Taropafadzwa Chitumwa Moved His Own Cheese
        </div>

        <p>
          There is a particular kind of silence that follows doing everything right and still ending up
          with nothing to show for it. Taropafadzwa Chitumwa knows that silence well.
        </p>

        <p>
          He had gone to school. He had studied hard. He had graduated not once but twice from Vaal
          University of Technology, earning his Advanced Diploma in Biotechnology with Cum Laude honours
          in 2023. He was the kind of student who could walk into an exam without opening a textbook and
          walk out with an A. Physics gave him trouble, he will admit that freely, but almost everything
          else came naturally to a mind wired for logic and pattern recognition.
        </p>

        <p>And yet, there he was. Unemployed. CV in hand. Doors not opening.</p>

        <blockquote className={styles.blockquote}>
          "The job searching yielded very little results. I fell into somewhat of a depressive state.
          I had done everything right up until that point. How was I still unemployed?"
        </blockquote>

        <p>
          It is a question that echoes across a generation of young South Africans. The unemployment
          statistics in this country are not abstract numbers. They have faces, and for a period of time,
          one of those faces was his.
        </p>

        <h2 className={styles.sectionHeading}>When the Cheese Moves</h2>

        <p>
          Chitumwa was born on 6 May 2000 in Zimbabwe, a country that taught him early that survival
          requires adaptability. In early 2017, at sixteen years old, he moved to South Africa after
          high school, chasing opportunity across a border the way many young Africans do. He enrolled
          at Vaal University of Technology in 2018, and Biotechnology felt like the right vehicle. It
          was scientific. It was forward-looking. It promised a role in improving human life.
        </p>

        <p>What it did not promise, and what nobody told him, was that South Africa's biotechnology industry is a different beast entirely.</p>

        <blockquote className={styles.blockquote}>
          "In SA the industry does not have the impact it would in first world countries. It is not only
          years behind but a qualification in the field lands you in one of a few industries, the most
          common being the food industry. I wanted to play a part in improving human life using my qualification."
        </blockquote>

        <p>
          The dream and the reality were simply not the same place. He graduated in 2022, then pushed
          further, enrolling in an Advanced Diploma in 2023. His two stints as a laboratory assistant
          painted a picture that was hard to ignore. This was not where his story was supposed to go.
        </p>

        <p>
          He had read Spencer Johnson's <em>Who Moved My Cheese?</em> That slim, deceptively simple
          parable about change, about the danger of clinging to what was and the freedom of chasing
          what could be. When he thinks about which character he resembles, there is no hesitation.
        </p>

        <blockquote className={styles.blockquote}>
          "Definitely the mice. Life, as the book describes it, is constantly changing. One thing you
          can be certain about in life is change. It is inevitable. I could have stayed at home in my
          comfort zone being unemployed but I was not about to let that be my story. This is when I
          realised the cheese had moved. I had to move on. On to a different part of the maze."
        </blockquote>

        <div className={styles.inlineImg}>
          <img src={seatedImg} alt="Mandisi at a WeThinkCode_ event" />
          <div className={styles.imgCaption}>At a WeThinkCode community event, Johannesburg.</div>
        </div>

        <h2 className={styles.sectionHeading}>A Three Minute Video and a New Maze</h2>

        <p>
          The pivot did not arrive with fanfare. It arrived in 2024 through a five minute YouTube
          video by Nobantu Gumbi, titled something along the lines of how to get into tech without
          going to university.
        </p>

        <blockquote className={styles.blockquote}>
          "I had done the university path. I was not about to go through it again."
        </blockquote>

        <p>
          The video led him to WeThinkCode, a Johannesburg-based coding school built on a peer-to-peer
          learning model with no lecturers, no hand-holding, and no room for passengers. He applied.
          He got into the bootcamp in the last week of July 2024. What followed was, by his own
          description, the hardest week of his life.
        </p>

        <p>
          For a young man who had glided through O Levels with five As, who had earned Cum Laude
          without breaking much of a sweat, the bootcamp delivered something entirely new. Humility.
          Raw, unfiltered, sit-in-your-chair-and-feel-lost humility.
        </p>

        <blockquote className={styles.blockquote}>
          "Bootcamp was the first time I had felt dumb, completely lost. Before this I had barely
          touched any Python code. I was thrown into the deep end, right into the crux of programming.
          Deep into concepts I had not had the chance of looking up yet."
        </blockquote>

        <p>
          He was 24 years old, weeks away from beginning a journey that would carry him through
          his 25th birthday and beyond. He could have walked out. Nobody would have blamed him.
        </p>

        <p>He did not walk out.</p>

        <blockquote className={styles.blockquote}>
          "I stayed because I was committed to seeing it through. Finishing what I started."
        </blockquote>

        <h2 className={styles.sectionHeading}>The Room Full of Africa</h2>

        <p>
          On 16 September 2024, Chitumwa walked through the doors of WeThinkCode as a full student.
          He expected to feel like the oldest person in the room. He braced for the awkwardness of
          being the veteran among teenagers.
        </p>

        <p>What he found instead stopped that thought in its tracks.</p>

        <blockquote className={styles.blockquote}>
          "The room was full of talent. Very diverse. Young people from all walks of life. Brothers
          and sisters from different parts of the continent, different parts of the country. A hijab
          there, a doek in one corner, a kruttah on the other side of the room. The room was loud.
          Filled with curiosity and undiscovered friendships."
        </blockquote>

        <p>
          Over the sixteen months that followed, through to December 2025, he built REST APIs,
          full-stack applications, and a serverless cloud platform on AWS. He became a Technical
          Mentor, guiding first-year students through the same confusion he had once felt. He
          supervised a team of 10 as Front Desk Supervisor. He completed his programme with
          certifications from Harvard sitting alongside his WeThinkCode qualification.
        </p>

        <h2 className={styles.sectionHeading}>His Mother's Generosity, His Father's Plans</h2>

        <p>
          That last part, the giving back part, does not come from ambition. It comes from
          somewhere older and quieter.
        </p>

        <blockquote className={styles.blockquote}>
          "Giving back is my mom. She was the most generous person. Her generosity knew no bounds,
          from giving unsolicited health advice to strangers, she was once a nurse, to hosting
          women in the neighbourhood for a luncheon to share God's word."
        </blockquote>

        <p>
          Faith is not incidental to Chitumwa's story. It is load-bearing. On the difficult days,
          and there are still difficult days, it is what holds the structure up.
        </p>

        <p>
          Today, in April 2026, he finds himself in a position that rhymes uncomfortably with where
          he was before the pivot. Unemployed again. Applications out. Doors not yet open. But he
          is not the same person who sat in that silence back in 2023. He has a portfolio of real
          projects. He has mentored others. He has shipped code. He has grown.
        </p>

        <blockquote className={styles.blockquote}>
          "Some days are a lot more difficult than I would like to admit. I try to stay positive,
          pray, fast, read the word. I know though it will come together."
        </blockquote>

        <p>
          If he could go back and sit beside that 24 year old, Cum Laude certificate in one hand
          and a closed door in the other, what would he say?
        </p>

        <p>He does not hesitate.</p>

        <blockquote className={styles.blockquote} data-final="true">
          "The best of you is yet to come. He knows the plans he has for you. Plans of good and
          not of evil, to bring you to an expected end."
        </blockquote>

        <p>
          The cheese has moved before. Taropafadzwa Chitumwa has learned, more than once now,
          how to lace up his shoes and go find it.
        </p>

        <div className={styles.articleFooter}>
          <em>Written in collaboration with Claude, Anthropic's AI assistant.</em>
          <br />
          <strong>Taropafadzwa Chitumwa</strong> · April 2026 · Johannesburg, South Africa
        </div>

      </article>

      <div className={styles.back}>
        <Link to="/" className={styles.backLink}>← Back to portfolio</Link>
      </div>
    </main>
  )
}
