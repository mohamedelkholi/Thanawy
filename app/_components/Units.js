import { getUnits } from "../_lib/data-service";
import UnitCard from "./UnitCard";
import Spinner from "./ٍSpinner";

export default async function Units() {
  const Units = await getUnits();

  if (!Units) return <Spinner />;
  return (
    <div className="mt-10">
      {Units.map((unit) => (
        <UnitCard key={unit.id} name={unit.name} />
      ))}
    </div>
  );
}
