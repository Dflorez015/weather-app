import styles from "@/styles/layout.module.css"

export default function Home() {
  return (
    <main className="min-h-screen bg-primary relative md:flex">
      {/* <aside className="w-aside-menu min-h-screen absolute"></aside> */}
      <article className="w-aside-menu min-h-screen bg-secondary"></article>
      <section className="w-full flex flex-col md:gap-10">
        <div className="float-left">
          <button type="button">°C</button>
          <button type="button">°F</button>
        </div>

        <div className="flex gap-7 flex-wrap">

        </div>

        <div className="mx-auto">
          <h3 className="text-primary">{"Today’s Hightlights"}</h3>

          <div className={styles.wrapper__hightlights__cards}>
            <div className="h-3 bg-secondary"></div>
            <div className="h-3 bg-secondary"></div>
          </div>
        </div>
      </section>

    </main>
  )
}
