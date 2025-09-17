export const Empty = ({title,desc,action}:{title:string;desc?:string;action?:React.ReactNode})=>(
  <div className="card p-6 text-center">
    <div className="text-sm font-medium">{title}</div>
    {desc && <div className="text-sm text-[rgb(var(--muted))] mt-1">{desc}</div>}
    {action && <div className="mt-3">{action}</div>}
  </div>
);
export const Loading = ({label="Bezig..."}:{label?:string}) => (
  <div className="text-sm text-[rgb(var(--muted))] p-8 text-center">{label}</div>
);
export const ErrorState = ({title,desc}:{title:string;desc?:string}) => (
  <div className="card p-6 text-center border-err/30">
    <div className="font-medium text-err">{title}</div>
    {desc && <div className="text-sm text-[rgb(var(--muted))] mt-1">{desc}</div>}
  </div>
);
