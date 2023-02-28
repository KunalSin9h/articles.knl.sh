import Image from "next/image";

export default function Spinner() {
  return (
    <div className="flex h-96 items-center justify-center">
      <Image
        src="/images/spinner.gif"
        alt="Loading spinner"
        width={30}
        height={30}
      />
    </div>
  );
}
