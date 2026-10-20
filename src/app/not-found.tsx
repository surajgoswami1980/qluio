import { ArrowLeft } from "lucide-react";
import Aurora from "@/components/ui/Aurora";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-32 pb-20">
      <Aurora />
      <div className="container-max relative text-center">
        <p className="font-mono text-sm text-accent-300">404</p>
        <h1 className="text-gradient mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mx-auto mt-5 max-w-md text-slate-400">
          The page you&apos;re looking for may have moved or never existed.
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <ButtonLink href="/">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
