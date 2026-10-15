import { NavLink } from "react-router-dom";
function Pension() {
    return (
      <div>
        <div
          className="bg-[url(https://media.istockphoto.com/id/956344832/vector/abstract-white-background-geometric-texture.jpg?s=612x612&w=0&k=20&c=z2EPil603uxXVXUtPst-BAhwhqN9ATG1Nzep_AIPY2Q=)] bg-repeat
      h-[100px]
      "
        >
          <header className="text-blue-600 font-bold text-[40px]">
            PENSION & RETIREMENTS
          </header>
        </div>
        <main>
          <p>
            Whether you’re just starting to think about your retirement, are
            about to retire, or have been retired for some time, we’ve got
            guides for you.
          </p>
          <div className="flex justify-center w-full ">
            <div className="topic-grid mt-5 grid grid-cols-3 mt-10 w-11/12 items-center">
              <section className="h-[400px] w-[370px]  rounded-bl-2xl mt-4  border border-blue-500 shadow-[0_5px_0_rgba(0,0,0,0.4)] ">
                <span>
                  <img
                    src="https://compote.slate.com/images/66168178-3547-4917-8ea9-12938af61a04.jpg?crop=568%2C477%2Cx0%2Cy0&width=1280"
                    className="h-6/12 w-full"
                  />
                </span>
                <span className="block mt-10 mr-2 ml-2">
                  <p className="text-[17px]">
                    How to start a pension, how pensions work and the benefits.
                  </p>
                  <NavLink
                    to="/pension/pensionexplain"
                    className="text-[20px] text-pink-600 font-bold hover:underline"
                  >
                    Pension explained
                  </NavLink>
                </span>
              </section>
              <section className="h-[400px] w-[370px] border border-blue-500 mt-4 rounded-bl-2xl shadow-[0_5px_0_rgba(0,0,0,0.4)] ">
                <span>
                  <img
                    src="https://www.shutterstock.com/image-photo/state-pension-text-calculator-alarm-260nw-2679777125.jpg"
                    className="h-6/12 w-full"
                  />
                </span>
                <span className="block mt-10 mr-2 ml-2">
                  <p className="text-[17px]">
                    How much to save for retirement and ways to boost your
                    pension.
                  </p>
                  <NavLink
                    to="/pension/managegrow"
                    className="text-[20px] text-pink-600 font-bold hover:underline"
                  >
                    {" "}
                    Manage and Grow your pension
                  </NavLink>
                </span>
              </section>
              <section className="h-[400px] w-[370px] rounded-bl-2xl mt-4 border border-blue-500 shadow-[0_5px_0_rgba(0,0,0,0.4)] ">
                <span>
                  <img
                    src="https://www.ageuk.org.uk/siteassets/media/campaigns/care/choosing-the-right-care-home_500x300.jpg"
                    className="h-6/12 w-full"
                  />
                </span>
                <span className="block mt-10 mr-2 ml-2">
                  <p className="text-[17px]">
                    How to find lost pensions, sort out problems and complain.
                  </p>
                  <NavLink
                    to="/pension/pensionproblems"
                    className="text-[20px] text-pink-600 font-bold hover:underline"
                  >
                    {" "}
                    Pensions Problems and Changes
                  </NavLink>
                </span>
              </section>
              <section className="h-[400px] w-[370px] rounded-bl-2xl mt-4 shadow-[0_5px_0_rgba(0,0,0,0.4)] border border-blue-500 mt-4">
                <span>
                  <img
                    src="https://www.careuk.com/getmedia/b875e3ab-4d80-4d42-b7f1-af066108657e/JB_ChandlerCourt-CareUK24042024-053.jpg"
                    className="h-6/12 w-full"
                  />
                </span>
                <span className=" block mt-10 mr-2 ml-2">
                  <p className="text-[17px]">
                    How to transfer or combine pensions, and if it’s a good
                    idea.
                  </p>
                  <NavLink
                    to="/pension/pensiontransfer"
                    className="text-pink-600 font-bold text-[20px] hover:underline"
                  >
                    Pension transfer and Consolidation
                  </NavLink>
                </span>
              </section>
              <section className="h-[400px] w-[370px]  rounded-bl-2xl mt-4 border border-blue-500 shadow-[0_5px_0_rgba(0,0,0,0.4)] ">
                <span>
                  <img
                    src="https://getclaimsadvice.co.uk/wp-content/uploads/2024/01/What-are-state-pensions.jpg"
                    className="h-6/12 w-full"
                  />
                </span>
                <span className="block mt-10 mr-2 ml-2">
                  <p className="text-[17px]">
                    How much State Pension you might get and ways to boost it.
                  </p>
                  <NavLink
                    to="/pension/statepension"
                    className="text-[20px] text-pink-600 font-bold hover:underline"
                  >
                    State Pension
                  </NavLink>
                </span>
              </section>
              <section className="h-[400px] w-[370px]  rounded-bl-2xl mt-4  border border-blue-500 shadow-[0_5px_0_rgba(0,0,0,0.4)] ">
                <span>
                  <img
                    src="https://www.sbs.nhs.uk/app/uploads/pension-services.jpg"
                    className="h-6/12 w-full"
                  />
                </span>
                <span className="block mt-10 mr-2 ml-2">
                  <p className="text-[17px]">
                    How and when to take your pension – your options explained.
                  </p>
                  <NavLink
                    to="/pension/takingpension"
                    className="text-[20px] text-pink-600 font-bold hover:underline"
                  >
                    Take your pension
                  </NavLink>
                </span>
              </section>
              <section className="h-[400px] w-[370px] rounded-bl-2xl mt-4 border border-blue-500 shadow-[0_5px_0_rgba(0,0,0,0.4)] ">
                <span>
                  <img
                    src="https://www.moneyhelper.org.uk/content/dam/maps/en/pensions-and-retirement/pension-wise-man-mobile-window.png.pic.450.190.low.jpg"
                    className="h-6/12 w-full"
                  />
                </span>
                <span className="block mt-10 mr-2 ml-2">
                  <p className="text-[17px]">
                    How tax relief, tax-free allowances and tax on income works.
                  </p>
                  <NavLink
                    to="/pension/taxpension"
                    className="text-[20px] text-pink-600 font-bold hover:underline"
                  >
                    Tax and pensions
                  </NavLink>
                </span>
              </section>
              <section className="h-[400px] w-[370px] rounded-bl-2xl mt-4 border border-blue-500 shadow-[0_5px_0_rgba(0,0,0,0.4)] ">
                <span>
                  <img
                    src="https://www.rathbones.com/sites/main/files/styles/header_image/public/2026-02/man_and_woman_looking_at_papers_1887469204.jpg?changed=1770633965"
                    className="h-6/12 w-full"
                  />
                </span>
                <span className="block mt-10 mr-2 ml-2">
                  <p className="text-[17px]">
                    Free guidance on your options for taking a defined
                    contribution pension.
                  </p>
                  <NavLink
                    to="/pension/taxandretirement"
                    className="text-[20px] text-pink-600 font-bold hover:underline"
                  >
                    Tax and retirement
                  </NavLink>
                </span>
              </section>
            </div>
          </div>
        </main>
      </div>
    );
}

export default Pension
