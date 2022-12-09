import Image from "next/image";
import Link from "next/link";

export default function Socials({
  name,
  link,
}: {
  name: string;
  link: string;
}): JSX.Element {
  return (
    <li>
      <Link href={link} target="_blank">
        <Image
          src={`/images/${name}.png`}
          alt={`${name} Logo`}
          width={30}
          height={30}
          className="select-none dark:invert md:opacity-75 md:hover:opacity-100"
        />
      </Link>
    </li>
  );
}
