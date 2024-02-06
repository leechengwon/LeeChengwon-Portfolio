import { useEffect, useState, useRef } from "react";
import axios from "axios";
import AnimatedImage from "../component/AnimatedImage";

const NAME = "이청원";

const TypeC = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [skillsetData, setSkillsetData] = useState([]);
  const targetRef = useRef(null);

  const scrollToDown = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    axios
      .all([
        axios.get("/LeeChengwon-Portfolio/data/PortfolioListMockData.json"),
        axios.get("/LeeChengwon-Portfolio/data/SkillsetMockData.json"),
      ])
      .then(
        axios.spread((responseA, responseB) => {
          setPortfolioData(responseA.data.result.reverse());
          setSkillsetData(responseB.data.result);
        })
      )
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="w-screen h-screen">
      <section className="flex flex-col justify-center items-center gap-24 w-full h-full p-4 bg-[url('/images/my1.png')] bg-cover bg-center text-[#fff] ">
        <h1 className="text-6xl font-bold [text-shadow:2px_2px_6px_#888] sm:text-[24px] md:text-[30px]">
          단 한번에 완성되는 것은 없습니다.
          <br />
          <br />한 단계씩 꾸준히 성장하는 FrontEnd Developer {NAME}입니다.
        </h1>
        <button
          type="button"
          className="w-12 animate-bounce sm:w-8"
          onClick={scrollToDown}
        >
          <img
            src="/LeeChengwon-Portfolio/images/icon_mouse.png"
            alt="마우스 아이콘"
            className="object-cover "
          />
          click!
        </button>
      </section>

      <div className="w-screen bg-[url('/images/bg_square.png')] bg-auto bg-repeat scale-90">
        {/* Projects */}
        <section ref={targetRef} className="py-8">
          <h1 className="text-6xl font-bold  w-full text-center m-2">
            Projects
          </h1>
          <div className="flex flex-row flex-wrap justify-center m-5">
            {portfolioData.map(
              (
                {
                  targetDevice,
                  deployUrl,
                  projectName,
                  description,
                  techStacks,
                  mainTask,
                  repoUrl,
                  projectImage,
                },
                index
              ) => (
                <div
                  key={index}
                  className="w-[400px] h-[820px] m-3 overflow-hidden rounded-md shadow-lg bg-[#fff]/60 relative"
                >
                  <div className="flex gap-1 w-100% m-1">
                    {targetDevice?.map((item, index) => {
                      return (
                        <div key={index}>
                          {item === "pc" && (
                            <span className="inline-block px-2 py-1 rounded-md bg-primary text-xs text-[#fff] whitespace-nowrap">
                              pc
                            </span>
                          )}
                          {item === "mobile" && (
                            <span className="inline-block px-2 py-1 rounded-md bg-secondary text-xs text-[#fff] whitespace-nowrap">
                              mobile
                            </span>
                          )}
                          {item === "responsive" && (
                            <span className="inline-block px-2 py-1 rounded-md bg-tertiary text-xs text-[#fff] whitespace-nowrap">
                              responsive
                            </span>
                          )}
                          {item === "반응형" && (
                            <span className="inline-block px-2 py-1 rounded-md bg-brown text-xs text-[#fff] whitespace-nowrap">
                              반응형적용
                            </span>
                          )}
                          {item === "반응형미적용" && (
                            <span className="inline-block px-2 py-1 rounded-md bg-[black] text-xs text-[#fff] whitespace-nowrap">
                              반응형 적용 안됨
                            </span>
                          )}
                        </div>
                      );
                    })}
                    <a
                      href={repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-2 py-1 rounded-md w-[50px] h-[50px] top-0 right-0 absolute"
                    >
                      <img
                        src="/LeeChengwon-Portfolio/images/contact/github.svg"
                        alt="깃헙 저장소 링크"
                      />
                    </a>
                  </div>

                  <div className="flex m-4 items-center justify-center">
                    <a
                      href={deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AnimatedImage
                        imgSrc={projectImage}
                        width={360}
                        height={330}
                      />
                    </a>
                  </div>
                  <div>
                    <div style={{ padding: "10px" }}>
                      <h4>
                        <a
                          href={deployUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 pr-10 text-2xl truncate hover:font-semibold active:font-bold"
                        >
                          {projectName}
                        </a>
                      </h4>
                      <ul className="flex flex-col gap-2 pl-3">
                        <li className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-1 before:absolute before:top-[10px] before:left-1 before:bg-[#000] before:rounded-full">
                          <h5>간략 설명</h5>
                          <span>{description}</span>
                        </li>
                        <li className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-1 before:absolute before:top-[10px] before:left-1 before:bg-[#000] before:rounded-full">
                          <h5>기술 스택</h5>
                          <span>{techStacks.join(", ")}</span>
                        </li>
                        <li className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-1 before:absolute before:top-[10px] before:left-1 before:bg-[#000] before:rounded-full">
                          <h5>주요 작업</h5>
                          {mainTask.map((item, index) => {
                            return <p>- {item}</p>;
                          })}
                        </li>
                      </ul>
                    </div>

                    <div className="absolute bottom-0 right-0 mb-3 mr-3">
                      <a
                        href={deployUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline flex items-end"
                      >
                        <span>프로젝트 구경하기</span>
                        <img
                          src="/LeeChengwon-Portfolio/images/icon_next.png"
                          alt="마우스 아이콘"
                          className="object-cover w-[32px] h-[32px] ml-2"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        {/* Skillset */}
        <section className="py-8">
          <h1 className="text-6xl font-bold w-full text-center m-2">
            Skillset
          </h1>
          <div className="flex flex-row flex-wrap justify-center m-5">
            {skillsetData.map(({ stackImage, stackName }, index) => {
              return (
                <div
                  key={index}
                  className="w-[200px] h-[200px] m-3 overflow-hidden rounded-full shadow-lg bg-[#fff]/60 relative flex items-center justify-center"
                >
                  <div className="flex flex-col gap-1 w-full m-1 items-center justify-center">
                    <img
                      src={stackImage}
                      alt={`${stackImage} 로고`}
                      className="w-6 h-6 m-1"
                    />
                    <h4 className="text-xl text-center">{stackName}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section className="py-8 px-4 lg:px-8">
          <div className="flex flex-col items-center gap-16 w-full">
            <div className="flex justify-between items-center w-2/3 py-6 before:content-[''] before:block before:w-0 before:h-full lg:before:w60">
              <div className="flex items-end lg:items-center gap-4 lg:flex-row">
                <div className="flex flex-col items-end gap-4">
                  <h2 className="text-base text-right font-semibold">
                    {NAME}
                    <em className="block text-xs font-thin text-[#555 not-italic tracking-wide">
                      Front-End Developer
                    </em>
                  </h2>

                  {/* 추가하고 싶은 아이콘을 추가하여 외부 링크를 연결합니다. 아이콘 목록은 facebook, github, gmail, instagram, linkedin, velog가 있습니다. */}
                  <ul className="flex gap-2">
                    <li>
                      <a
                        href="mailto:leecwee8497@gmail.com"
                        className="block w-8 h-8"
                      >
                        <img
                          src="/LeeChengwon-Portfolio/images/contact/gmail.svg"
                          alt="gmail"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/leechengwon/"
                        className="block w-8 h-8"
                      >
                        <img
                          src="/LeeChengwon-Portfolio/images/contact/github.svg"
                          alt="github"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://velog.io/@leecwee"
                        className="block w-8 h-8"
                      >
                        <img
                          src="/LeeChengwon-Portfolio/images/contact/velog.svg"
                          alt="velog"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TypeC;
