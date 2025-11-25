export default function Loading() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] w-full items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute h-full w-full rounded-full border border-foreground/20"></div>

          <div className="absolute h-full w-full animate-[spin_1.5s_linear_infinite] rounded-full border-2 border-b-transparent border-l-transparent border-r-transparent border-t-foreground"></div>

          <div className="h-1 w-1 rounded-full bg-foreground/50"></div>
        </div>

        <span className="animate-pulse font-serif text-xs tracking-[0.3em] text-foreground/70">
          FUWAR
        </span>
      </div>
    </div>
  );
}
