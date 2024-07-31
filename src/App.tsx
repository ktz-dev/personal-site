function App() {
  return (
    <>
      <div className="w-full my-10 flex justify-center p-5">
        <div className="w-full max-w-[500px] rounded-2xl bg-gradient-to-bl from-blue-200 to-blue-600 shadow-xl shadow-gray-400 py-10 px-5">
          <h1 className="font-semibold text-white text-2xl pb-2">
            Waled Khatiz
          </h1>
          <p className="text-white text-lg pb-7">
            Welcome to my website! I’m Waled Khatiz, a dedicated QA Engineer
            with 3 years of experience specializing in test automation, web
            development, and performance optimization. <br />
            <br />
            I can create automated tests for testing end-to-end functionality
            using tools such as Cypress, Selenium and Robot Framework.
            <br /> <br />
            I can conduct non-functional testing for gathering performance and
            reliability metrics using tools like JMeter and LoadRunner.
            <br /> <br />I can built websites using modern JavaScript tools and
            framworks like TypeScript, React, Node, Express and more
          </p>
          <a href="https://www.github.com/ktz-dev">
            <button className="py-2 px-4 border-2 border-white rounded-md cursor-pointer hover:bg-blue-300 text-white mr-2 mt-2">
              GitHub
            </button>
          </a>
          <a href="https://www.linkedin.com/in/waledkhatiz">
            <button className="py-2 px-4 border-2 border-white rounded-md cursor-pointer hover:bg-blue-300 text-white mt-2">
              LinkedIn
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
