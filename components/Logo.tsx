import Image from "next/image";
import Link from "next/link";

export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
      <Image
        src="/logo.png"
        alt=""
        width={size}
        height={size}
        className="rounded-[22%]"
        priority
      />
      <span className="text-lg">MixSharp</span>
    </Link>
  );
}
