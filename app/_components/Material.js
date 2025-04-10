import { getSubjects } from "../_lib/data-service";
import MaterialCard from "./MaterialCard";
import Spinner from "./ٍSpinner";

export default async function Material() {
  const subjects = await getSubjects();

  if (!subjects) return <Spinner />;

  return (
    <div className="flex flex-wrap gap-6 justify-end items-center">
      {subjects.map((subject) => (
        <MaterialCard key={subject.id}>{subject.name}</MaterialCard>
      ))}
    </div>
  );
}
