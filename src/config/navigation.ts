export interface NavItem {
  label: string
  name: string
  icon: 'home' | 'search' | 'briefcase' | 'activity' | 'messages' | 'reports'
}

export const navItems: NavItem[] = [
  { label: 'Find Work', name: 'find-work', icon: 'search' },
  { label: 'My Jobs', name: 'my-jobs', icon: 'briefcase' },
]
