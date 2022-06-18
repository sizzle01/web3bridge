import React from 'react'
import { web3Courses, web2Courses } from '../Data'

const Career = () => {
  return (
    <div className="mt-12 w-full flex flex-col justify-center items-center">
      <div className=" w-5/6 ">
        <h1 className="mb-6 font-secondary text-base text-center  text-xl font-semibold md:text-4xl ">
          Change your life and start your career in web 3
        </h1>
        <p className="text-center font-primary text-white60 text-xl ">
          Get all the needed support you need to launch your web3 career with
          web3bridge.
        </p>
      </div>
      <div className="w-10/12 flex flex-col-reverse  justify-around mt-20 md:flex-row">
        <div className=" w-full md:w-2/5 ">
          <h2 className="text-2xl text-base90 text-center mt-7  font-semibold font-secondary mb-10 md:text-4xl">
            Web 3 Cohort ongoing
          </h2>
          <p className=" font-primary text-xl text-white60 font-normal mb-10">
            Web3bridge runs a 16weeks cohort based training that will hold you
            by the hand to give you the right head start to launch your
            Blockchain Development as we help navigate you from the state of the
            known to the fiery edge of the unknown.
          </p>
          <div className="">
            <p className="flex items-center mb-5">
              <img src="./star.PNG" alt="star bullet" />
              <span className="font-primary font-normal, text-white50 text-xl ml-3 ">
                5/5 - 100% Completion rate
              </span>
            </p>
            <p className="font-primary font-normal, text-white50 text-xl mb-7">
              Full Time: 4 Months
            </p>
            <p className="flex items-center mb-7">
              <img src="./location.PNG" alt="location" />
              <span className="font-primary font-normal, text-white50 text-xl ml-3 ">
                Onsite and Virtual
              </span>
            </p>
          </div>
          <div className=" w-full flex flex-wrap md:w-2/4">
            {web3Courses.map((course, index) => {
              return (
                <div key={index} className="">
                  <p className="flex items-center mb-7 mr-5 ">
                    <img src={course.bullet} alt="star bullet" />
                    <span className="font-primary font-normal, text-base ml-2 ">
                      {course.courseTitle}
                    </span>
                  </p>
                </div>
              )
            })}
          </div>
          <div className=" mt-10">
            <button className="border-base border-2 py-4 px-14 text-base90 font-secondary text-base">
              View Cohort
            </button>
          </div>
        </div>
        <div className=" w-full md:w-5/12">
          <img
            className="w-full"
            src="./web3cohort.png"
            alt="web3 cohort Image"
          />
        </div>
      </div>
      <div className="w-10/12 flex flex-col-reverse  justify-around mt-10 md:flex-row">
        <div className=" w-full md:w-5/12">
          <img
            className="w-full"
            src="./web2cohort.png"
            alt="web3 cohort Image"
          />
        </div>

        <div className=" w-full md:w-2/5 ">
          <h2 className="text-2xl text-base90 text-center mt-7  font-semibold font-secondary mb-10 md:text-4xl">
            Web 2 Cohort ongoing now!
          </h2>
          <p className=" font-primary text-xl text-white60 font-normal mb-10">
            Want to get started in coding but don’t know where to start, You can
            get all the needed trainigs to make you a proficient Web Developer
            through our 6 months handson training on web2 technologies.
          </p>
          <div className="">
            <p className="flex items-center mb-5">
              <img src="./star.PNG" alt="star bullet" />
              <span className="font-primary font-normal, text-white50 text-xl ml-3 ">
                5/5 - 100% Completion rate
              </span>
            </p>
            <p className="font-primary font-normal, text-white50 text-xl mb-7">
              Full Time: 6 Months
            </p>
            <p className="flex items-center mb-7">
              <img src="./location.PNG" alt="location" />
              <span className="font-primary font-normal, text-white50 text-xl ml-3 ">
                Strictly Virtual
              </span>
            </p>
          </div>
          <div className=" w-full flex flex-wrap md:w-2/4">
            {web2Courses.map((course, index) => {
              return (
                <div key={index} className="">
                  <p className="flex items-center mb-7 mr-5 ">
                    <img src={course.bullet} alt="star bullet" />
                    <span className="font-primary font-normal, text-base ml-2 ">
                      {course.courseTitle}
                    </span>
                  </p>
                </div>
              )
            })}
          </div>
          <div className=" my-10">
            <button className="border-base border-2 py-4 px-14 text-base90 font-secondary text-base">
              View Cohort
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Career