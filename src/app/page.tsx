import HabitTracker from "@/components/HabitTracker";

export default function Page() {
  return (
    <div className="w-full max-w-7xl text-center">
      <h1 className="tracking-loose bg-gradient-to-br from-mint-12 to-mint-9 bg-clip-text text-6xl font-medium text-transparent">
        Junbits
      </h1>
      <h2 className="text-2xl text-sage-12">
        Simple & Collective Habit Tracking
      </h2>
      <HabitTracker />
    </div>
  );
}
