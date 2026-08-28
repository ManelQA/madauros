import { createFileRoute, Link } from "@tanstack/react-router";
import { SPACES } from "@/lib/spaces";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "مداوروس — فضاءات التلاميذ والتعليم والإدارة" },
      {
        name: "description",
        content: "منصة مداوروس: ثلاثة فضاءات منفصلة للتلاميذ والأساتذة والإدارة مع جلسات مستقلة ومصادقة المشرف العام.",
      },
      { property: "og:title", content: "مداوروس — ثلاثة فضاءات، جلسات منفصلة" },
      {
        property: "og:description",
        content: "سجّل الدخول إلى فضاء التلاميذ أو التعليم أو الإدارة على منصة مداوروس.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const colors: Record<string, string> = {
  talameed: "text-brand-blue",
  taleem: "text-brand-green",
  admin: "text-brand-red",
};

function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-canvas px-4 py-16">
      <div className="text-center">
        <div dir="ltr" className="font-wordmark text-5xl tracking-tight">
          <span className="text-brand-blue">m</span>
          <span className="text-brand-red">a</span>
          <span className="text-brand-yellow">d</span>
          <span className="text-brand-blue">a</span>
          <span className="text-brand-green">u</span>
          <span className="text-brand-red">r</span>
          <span className="text-brand-blue">o</span>
          <span className="text-brand-yellow">s</span>
        </div>
        <h1 className="mt-4 text-xl font-normal text-foreground">اختر فضاءك</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          كل فضاء له جلسة دخول مستقلة تماماً عن الفضاءات الأخرى
        </p>
      </div>

      <div className="grid w-full max-w-4xl gap-4 sm:grid-cols-3">
        {Object.values(SPACES).map((s) => (
          <Link
            key={s.key}
            to={s.path}
            className="rounded-2xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-lg"
          >
            <div dir="ltr" className={`font-wordmark text-lg ${colors[s.key]}`}>
              {s.host}
            </div>
            <div className="mt-3 text-base font-semibold text-foreground">{s.title}</div>
            <p className="mt-2 text-xs text-muted-foreground">{s.subtitle}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
