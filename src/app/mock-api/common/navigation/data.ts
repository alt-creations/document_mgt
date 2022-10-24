/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';


export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'basic',
        icon: 'heroicons_outline:home',
        link: '/dashboard'
    },
    {
        id: 'provinces',
        title: 'Provinces',
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
