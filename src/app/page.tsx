import Image from "next/image";
import { cantoBold } from "../lib/fontsCanto";
import Socials from "../components/Socials";

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/images/dp.png"
        alt="Picture of the Author(Aniket Singh)"
        width={200}
        height={200}
        className="mt-8 mb-4 h-36 w-36 select-none md:h-48 md:w-48"
      />
      <p className={`${cantoBold.className} text-5xl md:text-6xl`}>
        Aniket Singh
      </p>
      <p className="m-2 rounded-sm p-2 leading-5 md:leading-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum saepe
        minima, necessitatibus consectetur fugit corporis aut! Reiciendis
        consectetur nesciunt dicta, ipsa deserunt, ea maxime minus doloremque
        dolore, provident ullam impedit.
      </p>
      <ul className="select-nne m-2 flex gap-4 ">
        <Socials name="twitter" link="https://twitter.com/aniketsinghco" />
        <Socials
          name="linkedin"
          link="https://www.linkedin.com/in/aniketsinghco/"
        />
        <Socials name="mail" link="mailto:contact@aniketsingh.co.in" />
        <Socials name="resume" link="https://aniketsingh.co.in/resume" />
      </ul>
    </div>
  );
}
