import { useHistory } from 'react-router-dom';
import { Grid } from '@mantine/core';
import { HeaderMenu } from '../../components/header';
import ManageCategories from '../../pages/manageCategories';
import ManageFilters from '../../pages/manageFilters';
import ManageStates from "../../pages/manageStates";
import ManageUsers from '../../pages/manageUsers';
import { SideNavbar } from "../navbar";

export default function Layout() {

  const { location } = useHistory();
  const isAuthorized = localStorage.getItem('token');

  const renderContent = () => {
   if(location.pathname.includes('states')){
    return <ManageStates />
   } else if (location.pathname.includes('categories')){
    return <ManageCategories />
   }else if (location.pathname.includes('users')){
    return <ManageUsers />
   }else if (location.pathname.includes('filters')){
    return <ManageFilters />
   }else {
    return <ManageStates />
   }
  }

  return (
    <>
      {isAuthorized && <HeaderMenu />}
      <Grid>
          <Grid.Col span={2}>
              <SideNavbar />
          </Grid.Col>
          <Grid.Col span={10} pr={25} pt={25}>
              {renderContent()}
          </Grid.Col>
      </Grid>
    </>
  );
}