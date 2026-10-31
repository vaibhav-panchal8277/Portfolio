import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <PageHeader
        seed={67}
        label="404"
        title="Nothing detected here."
        lede="This page doesn't exist, or it has moved."
      />
      <div className="page mt-8 flex flex-wrap gap-3">
        <Link href="/" className="pill">
          Back to home
        </Link>
        <Link href="/work" className="pill">
          See the work
        </Link>
      </div>
    </>
  );
}
