import { Lock } from 'lucide-react';
import { RomanticCard } from './RomanticCard';

export function LockedMessage({ openDate }: { openDate: string }) {
  const target = new Date(openDate);
  const diffMs = target.getTime() - Date.now();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  let timeMessage = `המכתב ייפתח בעוד ${diffDays} ימים`;
  if (diffDays <= 0) {
    timeMessage = 'המכתב ייפתח בקרוב';
  } else if (diffDays === 1) {
    timeMessage = 'המכתב ייפתח מחר';
  } else if (diffDays === 2) {
    timeMessage = 'המכתב ייפתח מחרתיים';
  }

  const whenLabel = target.toLocaleString('he-IL', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <RomanticCard className="flex flex-col items-center justify-center text-center space-y-6 max-w-md mx-auto min-h-[300px]">
      <div className="p-5 bg-[#7c3aed]/10 rounded-full text-[#7c3aed] shadow-inner border border-[#7c3aed]/30">
        <Lock size={48} strokeWidth={1.5} />
      </div>
      <div className="space-y-3">
        <h2 className="text-4xl font-handwriting font-semibold text-[#2b1b4b]">עוד לא הזמן לפתוח 💌</h2>
        <p className="text-[#2b1b4b]/70 text-2xl font-handwriting font-medium">
          {timeMessage}
        </p>
        <p className="text-[#2b1b4b]/60 text-xl font-handwriting font-medium">
          {whenLabel}
        </p>
      </div>
    </RomanticCard>
  );
}
