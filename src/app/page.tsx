import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../../public/dev-ed-wave.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import web1Dark from "../../public/web1-dark.png";
import web2 from "../../public/web2.png";

export default function Home() {
  return (
    <main>
      <section className="min-h-screen">
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-500 font-medium md:text-6xl">
            Yeezo Lee
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
            Developer and sports enthusiast.
          </h3>
          <p className="text-md py-5 leading-8 text-slate-800 md:text-xl max-w-xl mx-auto dark:text-slate-400">
            grhie hier hiegri hio gerhio geg eiohoih ge!
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-slate-400">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillGithub />
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 sm:w-80 sm:h-80 mt-20 mb-10 overflow-hidden md:h-96 md:w-96">
          <Image
            src={deved}
            alt="My Cartoon Iamge"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-3xl py-1 dark:text-white">Skills I Possess</h3>
          <p className="text-md py-2 leading-8 text-slate-400">
            hfiowe hiofoewif hiofewoif hoifewhoife hoifewhoifw hoiew hoiwe
            hoiefwio hoiwef oiweh we hfiowe hiofoewif hiofewoif hoifewhoife
            hoifewhoifw hoiew hoiwe hoiefwio{" "}
            <span className="text-teal-500">hoiwef</span> oiweh wehfiowe
            hiofoewif hiofewoif hoifewhoife hoifewhoifw hoiew hoiwe hoiefwio
            hoiwef oiweh we.
          </p>
          <p className="text-md py-2 leading-8 text-slate-400">
            hfiowe hiofoewif hiofewoif hoifewhoife hoifewhoifw hoiew hoiwe
            hoiefwio <span className="text-teal-500">hoiwef</span> oiweh
            wehfiowe hiofoewif hiofewoif hoifewhoife hoifewhoifw hoiew hoiwe
            hoiefwio hoiwef oiweh we.
          </p>
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <Image
              className="mx-auto"
              src={design}
              width={100}
              height={100}
              alt="Design Logo"
            />
            <h3 className="text-lg font-medium pt-8 pb-2  ">
              Beautiful Designs
            </h3>
            <p className="py-2">
              Creating elegant designs suited for your needs following core
              design theory.
            </p>
            <h4 className="py-4 text-teal-500">Design Tools I Use</h4>
            <p className="text-slate-800 py-1">Photoshop</p>
            <p className="text-slate-800 py-1">Illustrator</p>
            <p className="text-slate-800 py-1">Figma</p>
            <p className="text-slate-800 py-1">Indesign</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <Image
              className="mx-auto"
              src={code}
              width={100}
              height={100}
              alt="Code Logo"
            />
            <h3 className="text-lg font-medium pt-8 pb-2">Neat Code</h3>
            <p className="py-2">
              Creating elegant designs suited for your needs following core
              design theory.
            </p>
            <h4 className="py-4 text-teal-500">Design Tools I Use</h4>
            <p className="text-slate-800 py-1">Photoshop</p>
            <p className="text-slate-800 py-1">Illustrator</p>
            <p className="text-slate-800 py-1">Figma</p>
            <p className="text-slate-800 py-1">Indesign</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <Image
              className="mx-auto"
              src={consulting}
              width={100}
              height={100}
              alt="Consulting Logo"
            />
            <h3 className="text-lg font-medium pt-8 pb-2  ">
              Beautiful Designs
            </h3>
            <p className="py-2">
              Creating elegant designs suited for your needs following core
              design theory.
            </p>
            <h4 className="py-4 text-teal-500">Design Tools I Use</h4>
            <p className="text-slate-800 py-1">Photoshop</p>
            <p className="text-slate-800 py-1">Illustrator</p>
            <p className="text-slate-800 py-1">Figma</p>
            <p className="text-slate-800 py-1">Indesign</p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
          <p className="text-md py-2 leading-8 text-slate-400">
            hgrioeohi gheriogerhio gioerghoi goierghoier ioerghioer goier.
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover border-2  border-slate-200 dark:border-slate-500"
              src={web1Dark}
              alt="Web1"
              width={500}
              height={500}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover border-2 border-slate-200 dark:border-slate-500"
              src={web2}
              alt="Web2"
              width={500}
              height={500}
              layout="responsive"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
