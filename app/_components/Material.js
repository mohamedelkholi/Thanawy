import { getSubjects } from "../_lib/data-service";
import MaterialCard from "./MaterialCard";
import Spinner from "./ٍSpinner";

export default async function Material() {
  const subjects = await getSubjects();

  if (!subjects) return <Spinner />;

  return (
    <div className="flex overflow-x-scroll gap-6 justify-start items-center whitespace-nowrap w-full">
      {subjects.map((subject) => (
        <MaterialCard key={subject.id}>{subject.name}</MaterialCard>
      ))}
    </div>
  );
}
