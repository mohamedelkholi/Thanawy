export async function getSubjects() {
  try {
    const response = await fetch("https://backend.thanawy.com/subjects");

    if (!response.ok) {
      throw new Error("error");
    }

    const data = await response.json();

    console.log("successfully", data);

    return data;
  } catch (error) {
    console.error("there is an error", error);

    notFound();
  }
}

export async function getUnits() {
  try {
    const response = await fetch(
      "https://backend.thanawy.com/units?subject_id=6a345cc6-d251-423a-9712-81c89662d4e9"
    );

    if (!response.ok) {
      throw new Error("error");
    }

    const data = await response.json();

    console.log("successfully", data);

    return data;
  } catch (error) {
    console.error("there is an error", error);

    notFound();
  }
}
