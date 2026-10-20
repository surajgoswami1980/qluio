import Link from "next/link";
import { ArrowUpRight, Mail, Phone, Linkedin, Twitter, Github } from "lucide-react";
import { company, myClasses, contactInfo, socialLinks } from "@/lib/site";
import { ButtonLink } from "@/components/ui/Button";

const columns = [
  {
    title: "Services",
    links: [
      { name: "Custom Software", href: "/services#custom-software-development" },
      { name: "AI & Automation", href: "/services#ai-automation" },
      { name: "SaaS Development", href: "/services#saas-product-development" },
      { name: "Cloud & DevOps", href: "/services#cloud-devops" },
      { name: "API & Integration", href: "/services#api-system-integration" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Products", href: "/products" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

const socialIcons = { linkedin: Linkedin, twitter: Twitter, github: Github };

export default function Footer() {
  const activeSocials = socialLinks.filter((s) => s.href);
  // Only surface contact details that have been configured with real values.
  const email = !contactInfo.email.isPlaceholder ? contactInfo.email.value : null;
  const phone = !contactInfo.phone.isPlaceholder ? contactInfo.phone.value : null;

  return (
    <footer className="relative border-t border-white/[0.06] bg-navy-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"
      />
      <div className="container-max">
        {/* CTA strip */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/[0.06] py-14 md:flex-row md:items-center">
          <div>
            <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Ready to build what&apos;s next?
            </p>
            <p className="mt-2 text-slate-400">
              Tell us about your project. We&apos;ll take it from there.
            </p>
          </div>
          <ButtonLink href="/contact" size="lg">
            Start a conversation
            <ArrowUpRight className="h-4 w-4" />
          </ButtonLink>
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-2 gap-10 py-14 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <img src="/logo.svg" alt="" aria-hidden="true" width={32} height={32} className="h-8 w-8" />
              <span className="font-semibold tracking-tight text-white">{company.name}</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              {company.tagline} Enterprise software, AI solutions, SaaS, and cloud
              engineering for organizations that want to move faster.
            </p>
            {(email || phone) && (
              <ul className="mt-6 space-y-2.5 text-sm">
                {email && (
                  <li>
                    <a href={`mailto:${email}`} className="inline-flex items-center gap-2.5 text-slate-300 hover:text-white">
                      <Mail className="h-4 w-4 text-accent-400" /> {email}
                    </a>
                  </li>
                )}
                {phone && (
                  <li>
                    <a href={`tel:${phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2.5 text-slate-300 hover:text-white">
                      <Phone className="h-4 w-4 text-accent-400" /> {phone}
                    </a>
                  </li>
                )}
              </ul>
            )}
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h3 className="text-sm font-medium text-white">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-3">
            <h3 className="text-sm font-medium text-white">Products</h3>
            <a
              href={myClasses.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group mt-4 flex items-center justify-between rounded-xl p-4 transition-colors hover:border-white/15"
            >
              <span>
                <span className="block text-sm font-medium text-white">{myClasses.name}</span>
                <span className="mt-0.5 block text-xs text-slate-400">myclasses.in</span>
              </span>
              <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          {activeSocials.length > 0 && (
            <div className="flex items-center gap-1">
              {activeSocials.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.href as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
