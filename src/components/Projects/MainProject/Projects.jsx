import React from 'react'
import ProjectCenter from './ProjectCenter'
import ProjectTable from './ProjectTable'
import AddNewProject from '../AddNewProjectComponents/MainAddNewProject/AddNewProject'
import HeaderComp from '../../ForAllComponents/Header'
import useApp from '../../../Hooks/useApp'


function Projects() {

  const { checked, setChecked } = useApp();

  

  return (

    <>
      <HeaderComp setChecked={setChecked} checked={checked}/>
      <ProjectCenter />
      <ProjectTable />

      <AddNewProject />
    </>
  )
}

export default Projects
