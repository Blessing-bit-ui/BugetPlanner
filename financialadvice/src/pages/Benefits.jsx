import  {NavLink} from "react-router-dom"
import { Outlet } from "react-router-dom";
function Benefits() {
    return (
      <div>
        <div
          className="bg-[url(https://media.istockphoto.com/id/956344832/vector/abstract-white-background-geometric-texture.jpg?s=612x612&w=0&k=20&c=z2EPil603uxXVXUtPst-BAhwhqN9ATG1Nzep_AIPY2Q=)] bg-repeat
      h-[100px]
      "
        >
          <header className="text-blue-600 font-bold text-[40px]">
            Benefits
          </header>
        </div>
        <main>
          <p>
            Find out what benefits you’re entitled to, how to claim them, when
            you qualify, and what to do if things go wrong.{" "}
          </p>
          <div className="flex justify-center w-full ">
            <div className=" mt-5 grid  grid-cols-3 mt-10 w-11/12 items-center">
              <section className="h-[400px] w-[370px]  rounded-bl-2xl shadow-[0_5px_0_rgba(0,0,0,0.4)] ">
                <span>
                  <img
                    src="https://media.istockphoto.com/id/1365865879/photo/happy-face-at-the-beach.jpg?s=612x612&w=0&k=20&c=NOOEN-pgXsY2xYsGDUNV0xRdH11uxkIlk61oPodgvwY="
                    className="h-6/12 w-full"
                  />
                </span>
                <span className="block mt-10 mr-2 ml-2">
                  <p className="text-[17px]">
                    Find out how Universal Credit works and <br /> how to manage
                    your payment.
                  </p>
                  <NavLink
                    to="/benefits/universalbenefits"
                    className="text-[20px] text-pink-600 font-bold hover:underline"
                  >
                    {" "}
                    Universal Credit
                  </NavLink>
                </span>
              </section>
              <section className="h-[400px] w-[370px]  rounded-bl-2xl shadow-[0_5px_0_rgba(0,0,0,0.4)] ">
                <span>
                  <img
                    src="https://www.shutterstock.com/image-photo/happy-young-black-dad-spoon-600nw-2003206955.jpg"
                    className="h-6/12 w-full"
                  />
                </span>
                <span className="block mt-10 mr-2 ml-2">
                  <p className="text-[17px]">
                    Entitlements to help with the cost of pregnancy or bringing
                    up children.
                  </p>
                  <NavLink
                    to="/benefits/benefits-for-children"
                    className="text-[20px] text-pink-600 font-bold hover:underline"
                  >
                    {" "}
                    Benefits if You have children
                  </NavLink>
                </span>
              </section>
              <section className="h-[400px] w-[370px] rounded-bl-2xl shadow-[0_5px_0_rgba(0,0,0,0.4)] ">
                <span>
                  <img
                    src="https://www.ageuk.org.uk/siteassets/media/campaigns/care/choosing-the-right-care-home_500x300.jpg"
                    className="h-6/12 w-full"
                  />
                </span>
                <span className="block mt-10 mr-2 ml-2">
                  <p className="text-[17px]">
                    Understand what support is available for coping with ill
                    health.
                  </p>
                  <NavLink
                    to="/benefits/benefits-if-you-sick"
                    className="text-[20px] text-pink-600 font-bold hover:underline"
                  >
                    {" "}
                    Benefits if you are Sick or disable
                  </NavLink>
                </span>
              </section>
              <section className="h-[400px] w-[370px] rounded-bl-2xl shadow-[0_5px_0_rgba(0,0,0,0.4)]  mt-4">
                <span>
                  <img
                    src="https://www.careuk.com/getmedia/b875e3ab-4d80-4d42-b7f1-af066108657e/JB_ChandlerCourt-CareUK24042024-053.jpg"
                    className="h-6/12 w-full"
                  />
                </span>
                <span className=" block mt-10 mr-2 ml-2">
                  <p className="text-[17px]">
                    You may be entitled for help with other costs on top of your
                    State Pension.
                  </p>
                  <NavLink
                    to="/benefits/benefits-later"
                    className="text-pink-600 font-bold text-[20px] hover:underline"
                  >
                    Benefits in Later Life
                  </NavLink>
                </span>
              </section>
            </div>
          </div>
        </main>
      </div>
    );
}

export default Benefits
