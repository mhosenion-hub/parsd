import Link from "next/link";
export default function FloatingRequest() {
  return (
    <Link
      className="floating-request"
      href="/contact"
      aria-label="ثبت درخواست مشاوره"
    >
      <span className="floating-request-icon" aria-hidden="true">↙</span>
      <span>ثبت درخواست</span>
    </Link>
  );
}
