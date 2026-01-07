import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./List.module.css";

const students = [
  {
    id: 1,
    Name: "Rasha",
    Age: 45,
    Phone: "+20 10 17570922",
    TeacherName: "Ms. Asmaa Oloom",
    surahName: "An-Nisa",
  },
  {
    id: 2,
    Name: "Abrar",
    Age: 32,
    Phone: "+20 10 70071928",
    TeacherName: "Ms. Asmaa Oloom",
    surahName: "Al-Ma'idah",
  },
  {
    id: 3,
    Name: "Azaa",
    Age: 26,
    Phone: "+20 10 16250156",
    TeacherName: "Ms. Asmaa Oloom",
    surahName: "Al-Ma'idah",
  },
  {
    id: 4,
    Name: "Heba kahlawi",
    Age: 16,
    Phone: "+20 10 90437669",
    TeacherName: "Ms. Asmaa Oloom",
    surahName: "Al-Ma'idah",
  },
  {
    id: 5,
    Name: "Takwa Apdelhakm",
    Age: 24,
    Phone: "+20 10 23608559",
    TeacherName: "Ms. Asmaa Oloom",
    surahName: "Aal-E-Imran",
  },
];

const List = () => {
  const [show, setShow] = useState(false);
  const [groap, setGroup] = useState(students);
  return (
    <div className={styles.listContainer}>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        QuranGroap List
      </h1>
      <button style={{ marginBttom: "20px" }}>
        {show ? "Hide Names" : "Show Names"}
      </button>
      <div className={show ? "show" : "hide"}>
        <Card namesList={groap} />
      </div>
    </div>
  );
};

export default List;
