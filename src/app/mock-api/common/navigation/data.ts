/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'records',
        title: 'Manage Records',
        subtitle: 'Documents And Records',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'records.dashboard',
                title: 'Dashboard',
                type: 'basic',
                icon: 'heroicons_outline:home',
                link: '/dashboard'
            },
            {
                id: 'records.province',
                title: 'Provinces',
                type: 'basic',
                icon: 'heroicons_outline:map',
                link: '/province'
            },
            {
                id: 'records.ministry',
                title: 'Ministries',
                type: 'basic',
                icon: 'heroicons_outline:book-open',
                link: '/ministry'
            },
            {
                id: 'records.finance',
                title: 'Finance ',
                type: 'basic',
                icon: 'heroicons_outline:cash',
                link: '/finance'
            },
            {
                id: 'records.procurement',
                title: 'Procurement',
                type: 'basic',
                icon: 'heroicons_outline:shopping-cart',
                link: '/procurement'
            },

            {
                id: 'records.humanresources',
                title: 'Human Resource',
                type: 'basic',
                icon: 'heroicons_outline:user-group',
                link: '/humanresources'
            },
            {
                id: 'records.project',
                title: 'Projects ',
                type: 'basic',
                icon: 'heroicons_outline:archive',
                link: '/project'
            },
        ]
    },
    {
        id: 'users',
        title: 'Manage Users',
        subtitle: 'Accounts and Users',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'accounts.users',
                title: 'Accounts',
                type: 'basic',
                icon: 'heroicons_outline:users',
                link: '/accounts/users'
            },


        ]
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'records.dashboard',
        title: 'Dashboard',
        type: 'basic',
        icon: 'heroicons_outline:home',
        link: '/dashboard'
    },
    {
        id: 'records',
        title: 'Manage Records',
        type    : 'aside',
        icon: 'heroicons_outline:collection',
        children: [

            {
                id: 'records.church',
                title: 'Church Archives',
                type: 'basic',
                icon: 'heroicons_outline:library',
                link: '/church'
            },
            {
                id: 'records.finance',
                title: 'Finance Archives',
                type: 'basic',
                icon: 'heroicons_outline:cash',
                link: '/finance'
            },
            {
                id: 'records.project',
                title: 'Projects Archives',
                type: 'basic',
                icon: 'heroicons_outline:archive',
                link: '/project'
            },
            {
                id: 'records.school',
                title: 'Church Schools',
                type: 'basic',
                icon: 'heroicons_outline:book-open',
                link: '/school'
            }
        ]
    },
    {
        id: 'settings',
        title: 'Settings',
        type    : 'aside',
        icon: 'heroicons_outline:cog',
        children: [
            {
                id: 'settings.profile',
                title: 'My profile',
                type: 'basic',
                icon: 'heroicons_outline:user-circle',
                link: '/accounts/my-profile'
            },
            {
                id: 'settings.members',
                title: 'Team members',
                type: 'basic',
                icon: 'heroicons_outline:users',
                link: '/accounts/members'
            },


        ]
    },
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'records',
        title: 'Manage Records',
        subtitle: 'Documents And Records',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'records.dashboard',
                title: 'Dashboard',
                type: 'basic',
                icon: 'heroicons_outline:home',
                link: '/dashboard'
            },
            {
                id: 'records.church',
                title: 'Church Archives',
                type: 'basic',
                icon: 'heroicons_outline:library',
                link: '/church'
            },
            {
                id: 'records.finance',
                title: 'Finance Archives',
                type: 'basic',
                icon: 'heroicons_outline:cash',
                link: '/finance'
            },
            {
                id: 'records.project',
                title: 'Projects Archives',
                type: 'basic',
                icon: 'heroicons_outline:archive',
                link: '/project'
            },
            {
                id: 'records.school',
                title: 'Church Schools',
                type: 'basic',
                icon: 'heroicons_outline:book-open',
                link: '/school'
            }
        ]
    },
    {
        id: 'users',
        title: 'Manage Users',
        subtitle: 'Accounts and Users',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'accounts.users',
                title: 'Accounts',
                type: 'basic',
                icon: 'heroicons_outline:users',
                link: '/accounts/users'
            },


        ]
    },
];
