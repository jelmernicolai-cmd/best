export default function Footer(){
  return (
    <footer className="border-t bg-[rgb(var(--surface-2))] mt-24">
      <div className="mx-auto max-w-7xl px-6 py-10 grid gap-8 md:grid-cols-4 text-sm">
        <div>
          <div className="font-semibold mb-2">PharmGTN</div>
          <p className="text-muted">Optimaliseer Gross-to-Net en kortingen met audit-trail en dataminimalisatie.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Product</div>
          <ul className="space-y-2">
            <li><a href="/features">Features</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/templates">Templates</a></li>
            <li><a href="/portal">Portal</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Compliance</div>
          <ul className="space-y-2">
            <li><a href="/security">Security</a></li>
            <li><a href="/templates#dpa">Verwerkersovereenkomst (DPA)</a></li>
            <li><a href="/templates#nda">NDA</a></li>
            <li><a href="/templates#privacy">Privacy</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <p>info@pharmgtn.com</p>
          <a className="btn btn--primary mt-3 inline-block" href="/contact">Plan een demo</a>
        </div>
      </div>
      <div className="text-xs text-muted border-t py-4 text-center">© {new Date().getFullYear()} PharmGTN. Alle rechten voorbehouden.</div>
    </footer>
  );
}
