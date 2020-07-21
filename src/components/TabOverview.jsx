import styled from 'styled-components'
import {
  Tab as UnstyledTab,
  TabList as UnstyledTabList,
  Tabs as UnstyledTabs,
  TabPanel as UnstyledTabPanel,
} from 'react-tabs'

const Tabs = styled(UnstyledTabs)`
  padding: 0.5rem 0 2rem 0;
`

const TabList = styled(UnstyledTabList)`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 0 0.5rem 0;
`

const Tab = styled(UnstyledTab).attrs({
  selectedClassName: 'selected',
  disabledClassName: 'disabled',
})`
  list-style: none;
  cursor: pointer;
  background: none;
  padding: 0.5rem 2rem;
  color: var(--primary);
  border-radius: var(--br);
  transition: all 0.3s ease-in-out;

  &:not(.selected) {
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  &.selected {
    background: var(--primary);
    color: var(--white);
    outline: none;
  }
`

const TabPanel = styled(UnstyledTabPanel).attrs({ selectedClassName: 'selected' })`
  display: block;
`

Tab.tabsRole = 'Tab'
Tabs.tabsRole = 'Tabs'
TabPanel.tabsRole = 'TabPanel'
TabList.tabsRole = 'TabList'

export { Tab, TabList, Tabs, TabPanel }
