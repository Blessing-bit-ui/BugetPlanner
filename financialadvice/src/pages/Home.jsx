 import {NavLink} from "react-router-dom"
 import { useNavigate } from "react-router-dom";
 import PageNav from "./PageNav";

function Home() {
  const navigate= useNavigate()
    return (
      <div>
        <PageNav />
        <div
          className="bg-[url(https://media.istockphoto.com/id/1446885495/photo/happy-kiss-and-hug-on-mothers-day-in-living-room-sofa-love-and-relaxing-together-in-australia.jpg?s=612x612&w=0&k=20&c=7oteLN0x8VbzXwXQlyT4LZ2F5sipX99_3u5uUbP9isI=)]
       h-full w-full bg-cover bg-no-repeat"
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
          <button className="text-white  bg-pink-500 font-bold ml-2 mt-2 p-2 border  rounded hover:underline">
            Contact us
          </button>
          <div className="flex ml-2 p-4">
            <section>
              <ul>
                <li>
                  <NavLink
                    to="/benefits"
                    className="font-bold
                 text-white hover:underline"
                  >
                    Benefits
                  </NavLink>
                </li>
                <li>
                  <NavLink className="font-bold text-white hover:underline">
                    Everyday money
                  </NavLink>
                </li>
                <li>
                  <NavLink className="font-bold text-white hover:underline">
                    Pensions
                  </NavLink>
                </li>
                <li>
                  <NavLink className="font-bold text-white hover:underline">
                    Homes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="font-bold text-white hover:underline">
                    Work
                  </NavLink>
                </li>
              </ul>
            </section>
            <section className="ml-4">
              <ul>
                <li>
                  <NavLink className="font-bold text-white hover:underline">
                    Savings
                  </NavLink>
                </li>
                <li>
                  <NavLink className="font-bold text-white hover:underline">
                    Family & Care
                  </NavLink>
                </li>
                <li>
                  <NavLink className="font-bold text-white hover:underline">
                    Money Troubles
                  </NavLink>
                </li>
                <li>
                  <NavLink className="font-bold text-white hover:underline">
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink className="font-bold text-white hover:underline">
                    Tools & calculators
                  </NavLink>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    );
}

export default Home
