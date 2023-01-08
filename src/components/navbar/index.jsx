import { Navbar, ScrollArea, createStyles, Box, NavLink } from '@mantine/core';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export function NavbarLinksGroup() {
  return (
    <Box
      sx={(theme) => ({
        minHeight: 220,
        padding: theme.spacing.md,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      })}
    >
      <LinksGroup {...mockdata} />
    </Box>
  );
}

const mockdata = [
  { key: 1, label: 'Manage States', link: '/admin/manage-states' },
  { key: 2, label: 'Manage Categories', link: '/admin/manage-categories' },
  { key: 3, label: 'Manage Users', link: '/admin/manage-users' },
  { key: 4, label: 'Manage Filters', link: '/admin/manage-filters' }
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export function SideNavbar() {
  const { classes } = useStyles();
  const [active, setActive] = useState()
  const history = useHistory();
  const links = mockdata.map((item, index) => <NavLink
  key={item.label}
  active={index === active}
  label={item.label}
  // icon={<item.icon size={16} stroke={1.5} />}
  onClick={() =>{
    setActive(index);
    history.push(item.link)
  }}
/>);

  return (
    <Navbar height={800} width={{ sm: 230 }} p="md" className={classes.navbar}>
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>
    </Navbar>
  );
}