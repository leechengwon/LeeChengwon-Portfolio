import { useEffect, useState, useRef } from "react";
import axios from "axios";

const TypeA = () => {
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
      {/* About Me */}
      {/* 배경 이미지는 마음에 드는 것으로 변경합니다. */}
      <section className="flex flex-col justify-center items-center gap-24 w-full h-full p-4 bg-[url('/images/my1.png')] bg-cover bg-center text-[#fff] ">
        {/* 자신의 이름으로 변경합니다. */}
        <h1 className="text-6xl font-bold [text-shadow:2px_2px_6px_#888] sm:text-[24px] md:text-[30px]">
          단 한번에 완성되는 것은 없습니다.
          <br />
          <br />한 단계씩 꾸준히 성장하는 FrontEnd Developer 이청원입니다.
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

      {/* Portfolio */}
      <section ref={targetRef} className="py-16 px-4 lg:px-8">
        <div className="flex flex-col">
          <div>
            <span className="text-[red]">* </span>
            <span className="font-bold">
              Item Box 클릭시 Project HomePage 이동
            </span>
          </div>
          <div>
            <span className="text-[red]">* </span>
            <span className="font-bold">
              깃허브 아이콘 클릭시 Github repository 이동
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-16 w-full">
          <h1 className="text-6xl font-bold">PORTFOLIO</h1>

          <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
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
              ) => {
                return (
                  <li
                    key={index}
                    className="relative w-full after:content-[''] after:block after:pb-[100%] overflow-hidden rounded group"
                  >
                    <a
                      href={deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0"
                    >
                      <span className="w-full h-full">
                        <img
                          src={projectImage}
                          alt={`${projectName} 대표 이미지`}
                          className="transition-all duration-300 ease-in-out group-hover:scale-110"
                        />
                      </span>
                      <div className="flex flex-col justify-between gap-4 p-4 absolute inset-px bg-[#000]/50 rounded invisible opacity-0 transition-all duration-150 ease-in-out group-hover:visible group-hover:opacity-100">
                        {/* 타겟 디바이스의 값에 따라 다른 뱃지를 노출합니다. */}
                        <div className="flex gap-1 w-100%">
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
                        </div>

                        <div className="flex flex-col gap-4">
                          <h2 className="text-2xl md:text-2xl text-[#fff] font-bold truncate">
                            {projectName}
                          </h2>
                          <ul className="text-xl md:text-[14px] text-[#fff]/70 sm:text-[20px]">
                            <li className="truncate">
                              간략 설명:&nbsp;{description}
                            </li>
                            <li className="truncate">
                              기술 스택:&nbsp;{techStacks.join(", ")}
                            </li>
                            <li>주요 작업:&nbsp;{mainTask.join(", ")}</li>
                          </ul>
                        </div>
                      </div>
                    </a>

                    <a
                      href={repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 z-10 bg-[#fff] rounded-full invisible opacity-0 transition-all duration-150 ease-in-out group-hover:visible group-hover:opacity-100 w-[50px] h-[50px]"
                    >
                      <img
                        src="/LeeChengwon-Portfolio/images/contact/github.svg"
                        alt="깃헙 저장소 링크"
                      />
                    </a>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </section>

      {/* Skillset */}
      <section className="py-16 px-4 lg:px-8">
        <div className="flex flex-col items-center gap-16 w-full">
          <h1 className="text-6xl font-bold">SKILLSET</h1>
          <ol className="w-2/3">
            {/* 이 li 기준으로 스킬셋을 추가합니다. 예를 들어, 워드 프로세스 자격증을 기입하고 싶다면 li 추가 후 h3에 자격증이라 넣고, 내용을 삽입합니다. */}
            <li className="flex gap-8 lg:gap-4 py-8 flex-col lg:flex-row">
              <div className="basis-0 lg:basis-60">
                <h3 className="text-2xl">Front-End</h3>
              </div>

              <ol className="flex-1">
                <li>
                  <ul className="flex flex-col gap-8">
                    {skillsetData.map(
                      ({ stackImage, stackName, description }, index) => {
                        return (
                          <li key={index} className="flex flex-col gap-2">
                            <h4 className="flex items-center gap-1 text-2xl">
                              <img
                                src={stackImage}
                                alt={`${stackImage} 로고`}
                                className="w-6 h-6"
                              />
                              {stackName}
                            </h4>
                            <ul className="flex flex-col gap-2 pl-3">
                              {description.map((item, index) => {
                                return (
                                  <li
                                    key={index}
                                    className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-1 before:absolute before:top-[10px] before:left-1 before:bg-[#000] before:rounded-full"
                                  >
                                    {item}
                                  </li>
                                );
                              })}
                            </ul>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section className="py-8 px-4 lg:px-8">
        <div className="flex flex-col items-center gap-16 w-full">
          <div className="flex justify-between items-center w-2/3 py-6 before:content-[''] before:block before:w-0 before:h-full lg:before:w60">
            <div className="flex items-end lg:items-center gap-4 lg:flex-row">
              <div className="flex flex-col items-end gap-4">
                <h2 className="text-base text-right font-semibold">
                  {/* 자신의 이름으로 변경합니다. */}
                  Marlowe
                  <em className="block text-xs font-thin text-[#555 not-italic tracking-wide">
                    Front-End Developer
                  </em>
                </h2>

                {/* 추가하고 싶은 아이콘을 추가하여 외부 링크를 연결합니다. 아이콘 목록은 facebook, github, gmail, instagram, linkedin, velog가 있습니다. */}
                <ul className="flex gap-2">
                  <li>
                    <a href="mailto:email" className="block w-8 h-8">
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
              <div className="relative w-16 h-16 lg:w-24 lg:h-24">
                {/* 프로필 사진 또는 자신만의 캐릭터 이미지를 추가합니다. */}
                <img
                  src="/LeeChengwon-Portfolio/images/profile.png"
                  alt="OOO 프로필 사진"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TypeA;
