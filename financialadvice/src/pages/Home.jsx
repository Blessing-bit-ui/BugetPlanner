 import {Link} from "react-router-dom"

function Home() {
    return (
      <div
        className="bg-[url(https://media.istockphoto.com/id/1446885495/photo/happy-kiss-and-hug-on-mothers-day-in-living-room-sofa-love-and-relaxing-together-in-australia.jpg?s=612x612&w=0&k=20&c=7oteLN0x8VbzXwXQlyT4LZ2F5sipX99_3u5uUbP9isI=)]
       h-[400px] w-full bg-cover bg-no-repeat"
      >
        <main className="text-white font-bold text-[20px] ml-2">
          <h1>Get in touch</h1>
          <p>
            Got a question? <br />
            We’re here to help.
            <br /> Whether you contact us <br /> online or by phone, you’ll
            always <br /> talk to a real person.{" "}
          </p>
        </main>
        <button className="text-white bg-pink-500 font-bold ml-2 mt-2 p-2 border  rounded hover:underline">
          Contact us
        </button>
        <section>
          <Link to="/benefits">Benefits</Link>
        </section>
      </div>
    );
}

export default Home
