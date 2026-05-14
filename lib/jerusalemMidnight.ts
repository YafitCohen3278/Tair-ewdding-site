const TZ = "Asia/Jerusalem";

export function jerusalemWallClock(calYmd: string, hour: number, minute = 0, second = 0): Date {
  const [y, m, d] = calYmd.split("-").map((x) => parseInt(x, 10));
  const pad = (n: number) => String(n).padStart(2, "0");
  const prefix = `${y}-${pad(m)}-${pad(d)}`;
  const clock = `${pad(hour)}:${pad(minute)}:${pad(second)}`;
  const lo = Date.UTC(y, m - 1, d - 1);
  const hi = Date.UTC(y, m - 1, d + 2);
  for (let t = lo; t < hi; t += 60000) {
    const s = new Date(t).toLocaleString("sv-SE", { timeZone: TZ });
    if (s.startsWith(`${prefix} ${clock}`)) return new Date(t);
  }
  throw new Error(`jerusalemWallClock ${calYmd} ${clock}`);
}

export function addCalendarDaysUtc(ymd: string, days: number): string {
  const [y, m, d] = ymd.split("-").map(Number);
  const ms = Date.UTC(y, m - 1, d, 12, 0, 0) + days * 86400000;
  const x = new Date(ms);
  const yy = x.getUTCFullYear();
  const mm = String(x.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(x.getUTCDate()).padStart(2, "0");
  return `${yy}-${mm}-${dd}`;
}

export const IL_TIMEZONE = TZ;
