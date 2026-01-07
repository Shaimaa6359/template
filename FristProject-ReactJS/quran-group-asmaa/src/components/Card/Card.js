import React from "react";
import styles from "./Card.module.css";

const Card = ({ namesList }) => {
  const cards = namesList.map((student) => (
    <div key={student.id} className={styles.cardInfo}>
      <div>Id:{student.id}</div>
      <div>Name:{student.Name}</div>
      <div>Age:{student.Age}</div>
      <div>Phone:{student.Phone}</div>
      <div>TeacherName: {student.TeacherName}</div>
      <div>surahName: {student.surahName}</div>
    </div>
  ));
  return <div>{cards}</div>;
};

export default Card;
