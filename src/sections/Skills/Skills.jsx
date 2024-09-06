import React from 'react'
import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

const Skills = () => {
  return (
   <section id='skills' className={styles.container}>

    <h1 className='sectionTitle' >Skills</h1>
    <div className={styles.skillList}>
   
     <SkillList 
      src={checkMarkIcon} 
      skill= 'HTML'
     />
     <SkillList 
      src={checkMarkIcon} 
      skill= 'CSS'
     />
     <SkillList 
      src={checkMarkIcon} 
      skill= 'Javascript'
     />
     <SkillList 
      src={checkMarkIcon} 
      skill= 'Node'
     />
     </div>
  
     <hr />

    


     <div className={styles.skillList}>
   
     <SkillList 
      src={checkMarkIcon} 
      skill= 'React js'
     />
     <SkillList 
      src={checkMarkIcon} 
      skill= 'Express js'
     />
   
    <SkillList 
      src={checkMarkIcon} 
      skill= 'Next js'
     />

     <SkillList 
      src={checkMarkIcon} 
      skill= 'Bootstrap'
     />
     <SkillList 
      src={checkMarkIcon} 
      skill= 'Tailwind CSS'
     />
     </div>
  
     <hr />



    <div className={styles.skillList}>
   
   <SkillList 
    src={checkMarkIcon} 
    skill= 'JAVA'
   />
   <SkillList 
    src={checkMarkIcon} 
    skill= 'Python'
   />
   <SkillList 
    src={checkMarkIcon} 
    skill= 'DataStructure and Algorithms'
   />
   <SkillList 
    src={checkMarkIcon} 
    skill= 'Git'
   />
   </div>

   </section>
  )
}

export default Skills
