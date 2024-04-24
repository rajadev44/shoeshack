
export default function container({className ='px-3', children }) {
  return (
    <section className={`w-full m-auto mx-auto max-w-screen-xl  ${className} `}>
        {children}
    </section>
  )
}
