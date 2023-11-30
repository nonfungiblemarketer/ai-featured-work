import styles from './page.module.css'
import Project from '../components/project';

export default function Home() {

  const projects = [
    {
      title1: "Nutrition",
      title2: "Center",
      src: "nutrition-center.jpg"
    },
    {
      title1: "Villa",
      title2: "North",
      src: "villa-north.jpg"
    },
    {
      title1: "The Organic",
      title2: "Store",
      src: "organic-store.jpg"
    },
    {
      title1: "Wahi Coffe",
      title2: "Shop",
      src: "nutrition-center.jpg"
    },
    {
      title1: "Devanti",
      title2: "Restaurant",
      src: "villa-north.jpg"
    }
  ]

  return (
    <main className={styles.main}>
      <div className={styles.gallery}>
        <p>Featured Work</p>
          {projects.map((project) => (
          <Project key={project.id || projects.indexOf(project)} project={project} />
        ))}
      </div>
    </main>
  )
}
