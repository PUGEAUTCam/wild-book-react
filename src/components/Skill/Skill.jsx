import React from 'react';
import styles from "../Wilder/Wilder.module.css"


const Skill = ({ skill }) => {

   return (
      <li>
         {skill.title}
         <span className={styles.votes}>{skill.votes}</span>
      </li>

   );
};

export default Skill;