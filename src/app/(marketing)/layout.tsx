import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solvist — Inteligencia operativa para instaladores solares en Puerto Rico',
  description: 'Responde leads en menos de 2 minutos, activa seguimientos automáticos y detecta oportunidades en tu cartera instalada.',
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#050505] text-[#FAFAFA] antialiased">
      {children}
    </div>
  )
}
