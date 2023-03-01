import Image from "next/image";

export default function Spinner() {
  return (
    <div className="flex h-96 items-center justify-center">
      <Image
        src="/images/spinner.svg"
        alt="Loading spinner"
        width={30}
        height={30}
        className="dark:invert"
      />
    </div>
  );
}

/*
Spinner can be used in `Loading.js` file but it seems behave weird */
