import React from 'react'
import ProjectHeader from './ProjectHeader'
import ProjectCenter from './ProjectCenter'
import ProjectTable from './ProjectTable'
import AddNewProject from './AddNewProjectComponents/AddNewProject'


function Projects() {

  return (

    <>
      <ProjectHeader />
      <ProjectCenter />
      <ProjectTable />
      
      <AddNewProject />
    </>
  )
}

export default Projects
