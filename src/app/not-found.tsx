import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div>
      <Image
        src="/images/404_banner.webp"
        alt="404 Banner Image"
        width={500}
        height={500}
        className="mx-auto my-12"
      />
      <div className="text-center">
        <h1 className="font-bold">Page not found</h1>
        <p className="text-sm">
          What you are looking for may be moved to a{" "}
          <strong>different location</strong> <br /> or just does{" "}
          <strong>not exist</strong>.
        </p>
        <p className="text-md my-2">
          Go to{" "}
          <Link href="/" className="underline">
            Home page
          </Link>
        </p>
      </div>
    </div>
  );
}
