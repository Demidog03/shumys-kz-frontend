export interface NavItem {
  label: string
  name: string
  icon: 'home' | 'search' | 'briefcase' | 'activity' | 'messages' | 'reports'
}

export const navItems: NavItem[] = [
  { label: 'Home', name: 'home', icon: 'home' },
  { label: 'Find Work', name: 'find-work', icon: 'search' },
  { label: 'My Jobs', name: 'my-jobs', icon: 'briefcase' },
  { label: 'My Activity', name: 'my-activity', icon: 'activity' },
  { label: 'Messages', name: 'messages', icon: 'messages' },
  { label: 'Reports', name: 'reports', icon: 'reports' },
]
