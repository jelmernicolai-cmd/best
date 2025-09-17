export default function PageHeader({title, subtitle, actions}:{
  title:string; subtitle?:string; actions?:React.ReactNode;
}){
  return (
    <header className="mb-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="h1">{title}</h1>
          {subtitle && <p className="text-[rgb(var(--muted))] mt-2 max-w-2xl">{subtitle}</p>}
        </div>
        {actions}
      </div>
    </header>
  );
}
